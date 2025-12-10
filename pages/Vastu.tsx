
import React, { useState, useEffect } from 'react';
import { LayoutTemplate, Map, Factory, Compass, Search, Loader2, ArrowRight, Clock, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import BookingModal from '../components/BookingModal';
import { supabase } from '../supabaseClient';
import { DBItem } from '../types';

const icons = [LayoutTemplate, LayoutTemplate, Factory, Map];

const Vastu: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVastu, setSelectedVastu] = useState<any>(null);
  const [dbVastu, setDbVastu] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVastu = async () => {
      try {
        const { data, error } = await supabase
          .from('vastu')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (data && !error) {
          setDbVastu(data);
        } else {
          setDbVastu([]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchVastu();

     const channel = supabase
     .channel('vastu_client_realtime')
     .on('postgres_changes', { event: '*', schema: 'public', table: 'vastu' }, (payload) => {
        if (payload.eventType === 'INSERT') {
           setDbVastu(prev => [...prev, payload.new as DBItem]);
        } else if (payload.eventType === 'UPDATE') {
           setDbVastu(prev => prev.map(item => item.id === payload.new.id ? payload.new as DBItem : item));
        } else if (payload.eventType === 'DELETE') {
           setDbVastu(prev => prev.filter(item => item.id !== payload.old.id));
        }
     })
     .subscribe();

   return () => {
      supabase.removeChannel(channel);
   }
  }, []);

  const filteredServices = dbVastu.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50 min-h-screen py-20 relative z-10 overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-saffron-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Spatial Harmony</span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-stone-900 mb-8 leading-tight">
            {t('nav.vastu')}
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Aligning your space with the cosmic forces of the Panch Mahabhuta to unlock prosperity and peace.
          </p>
        </motion.div>

           {/* Search Bar */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="max-w-lg mx-auto mb-16 md:mb-20"
           >
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search consultancy type..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white px-8 py-5 rounded-none border-b-2 border-stone-200 focus:outline-none focus:border-saffron-500 text-lg md:text-xl font-serif placeholder:font-sans placeholder:text-stone-300 transition-colors"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400" size={24} />
            </div>
          </motion.div>

          {loading ? (
            <div className="flex justify-center py-12">
               <Loader2 className="animate-spin text-saffron-500" size={50} />
            </div>
          ) : (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence>
              {filteredServices.length > 0 ? (
                filteredServices.map((service, idx) => {
                  const Icon = icons[idx % icons.length] || Compass;
                  return (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: idx * 0.1 }}
                      key={service.id}
                      className="group relative h-full"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-stone-200 to-saffron-100 rounded-[1.5rem] md:rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                      <div className="relative bg-white h-full rounded-[1.3rem] md:rounded-[1.8rem] p-5 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col overflow-hidden">
                        
                        {/* Card Header */}
                        <div className="flex justify-between items-start mb-4 md:mb-6">
                          <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-500 group-hover:bg-stone-800 group-hover:text-white transition-colors duration-300 shadow-inner">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-6 transition-transform duration-300" strokeWidth={1.5} />
                          </div>
                          {service.duration && (
                            <div className="flex items-center gap-1.5 bg-stone-50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-stone-100">
                              <Clock className="w-3 h-3 md:w-3 md:h-3 text-stone-400" />
                              <span className="text-[10px] md:text-xs font-bold text-stone-600 uppercase tracking-wide">{service.duration}</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-lg md:text-2xl font-serif font-bold text-stone-800 mb-2 md:mb-4 group-hover:text-saffron-700 transition-colors">{service.title}</h3>
                        
                        <div className="relative mb-4 md:mb-8 flex-grow">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-stone-300 to-transparent rounded-full"></div>
                           <p className="pl-4 text-stone-600 leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                             {service.description}
                           </p>
                        </div>
                        
                        <div className="mt-auto pt-4 md:pt-6 border-t border-stone-50 flex items-center justify-between">
                          <div>
                            <p className="text-[10px] md:text-xs font-bold text-stone-400 uppercase tracking-wider mb-0.5">Fee</p>
                            <p className="text-lg md:text-xl font-bold text-stone-800">{service.price}</p>
                          </div>
                          <button 
                            onClick={() => setSelectedVastu({
                                name: service.title,
                                price: service.price,
                                duration: service.duration,
                                description: service.description
                            })}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-900 text-white flex items-center justify-center group-hover:bg-saffron-600 group-hover:w-auto group-hover:px-6 transition-all duration-300 shadow-lg"
                          >
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:hidden" />
                            <span className="hidden group-hover:inline font-bold text-sm whitespace-nowrap">Book Visit</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="col-span-full py-20 text-center">
                    <Compass className="mx-auto mb-4 text-stone-300" size={48} strokeWidth={1} />
                    <p className="text-stone-500 text-lg">No Vastu services found matching your criteria.</p>
                </div>
              )}
              </AnimatePresence>
            </motion.div>
          )}

        <BookingModal 
          isOpen={!!selectedVastu} 
          onClose={() => setSelectedVastu(null)} 
          item={selectedVastu}
        />
      </div>
    </div>
  );
};

export default Vastu;
