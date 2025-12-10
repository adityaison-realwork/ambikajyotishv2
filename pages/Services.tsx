
import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, Search, ArrowRight, Loader2, AlertTriangle, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import BookingModal from '../components/BookingModal';
import { supabase } from '../supabaseClient';
import { DBItem } from '../types';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  
  const [dbServices, setDbServices] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (data && !error) {
          setDbServices(data);
        } else {
           setDbServices([]); 
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();

    const channel = supabase
      .channel('services_client_realtime')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'services' }, (payload) => {
         if (payload.eventType === 'INSERT') {
            setDbServices(prev => [...prev, payload.new as DBItem]);
         } else if (payload.eventType === 'UPDATE') {
            setDbServices(prev => prev.map(item => item.id === payload.new.id ? payload.new as DBItem : item));
         } else if (payload.eventType === 'DELETE') {
            setDbServices(prev => prev.filter(item => item.id !== payload.old.id));
         }
      })
      .subscribe();

    return () => {
       supabase.removeChannel(channel);
    }
  }, []);
  
  const filteredServices = dbServices.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50 min-h-screen py-20 relative z-10 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-saffron-100/50 to-transparent pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-block p-2 bg-white rounded-full shadow-md mb-4 border border-saffron-100">
             <div className="w-10 h-10 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-full flex items-center justify-center text-white">
                <Sparkles size={20} />
             </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-800 mb-6 tracking-tight">
            {t('nav.services')}
          </h1>
          <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light">
            {t('home.servicesSubtitle')}
          </p>
        </motion.div>

        {/* Floating Search Bar */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="max-w-xl mx-auto mb-16 md:mb-20 relative z-20"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron-400 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative flex items-center bg-white rounded-full shadow-xl">
              <div className="pl-6 text-saffron-500">
                 <Search size={22} />
              </div>
              <input 
                type="text" 
                placeholder="Find your path..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent px-4 py-4 rounded-full focus:outline-none text-stone-800 placeholder-stone-400 font-medium"
              />
            </div>
          </div>
        </motion.div>

        {loading ? (
           <div className="flex justify-center py-20">
             <Loader2 className="animate-spin text-saffron-500" size={50} />
           </div>
        ) : (
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                    key={service.id}
                    className="group relative h-full"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-saffron-300 to-orange-100 rounded-[1.5rem] md:rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                    <div className="relative bg-white h-full rounded-[1.3rem] md:rounded-[1.8rem] p-5 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col overflow-hidden">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-saffron-50 flex items-center justify-center text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                          <Star className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-180 transition-transform duration-700" />
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
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-saffron-200 to-transparent rounded-full"></div>
                         <p className="pl-4 text-stone-600 leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                           {service.description}
                         </p>
                      </div>
                      
                      <div className="mt-auto pt-4 md:pt-6 border-t border-stone-50 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] md:text-xs font-bold text-stone-400 uppercase tracking-wider mb-0.5">Investment</p>
                          <p className="text-lg md:text-xl font-bold text-saffron-700">{service.price}</p>
                        </div>
                        <button 
                          onClick={() => setSelectedService({
                              name: service.title,
                              price: service.price,
                              duration: service.duration,
                              description: service.description
                          })}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-900 text-white flex items-center justify-center group-hover:bg-saffron-600 group-hover:w-auto group-hover:px-6 transition-all duration-300 shadow-lg"
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:hidden" />
                          <span className="hidden group-hover:inline font-bold text-sm whitespace-nowrap">Book Now</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-block p-6 rounded-full bg-stone-50 mb-4"
                  >
                    <AlertTriangle className="text-stone-300" size={40} />
                  </motion.div>
                  <p className="text-stone-500 font-medium text-lg">No services found matching your search.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        <BookingModal 
          isOpen={!!selectedService} 
          onClose={() => setSelectedService(null)} 
          item={selectedService}
        />
      </div>
    </div>
  );
};

export default Services;
