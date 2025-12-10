
import React, { useState, useEffect } from 'react';
import { Flame, Search, ArrowRight, Loader2, Sparkles, Clock, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import BookingModal from '../components/BookingModal';
import { supabase } from '../supabaseClient';
import { DBItem } from '../types';

const Pujas: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPuja, setSelectedPuja] = useState<any>(null);
  const [dbPujas, setDbPujas] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPujas = async () => {
      try {
        const { data, error } = await supabase
          .from('pujas')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (data && !error) {
          setDbPujas(data);
        } else {
          setDbPujas([]);
        }
      } catch (e) {
        console.error("Error fetching pujas:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPujas();

     const channel = supabase
     .channel('pujas_client_realtime')
     .on('postgres_changes', { event: '*', schema: 'public', table: 'pujas' }, (payload) => {
        if (payload.eventType === 'INSERT') {
           setDbPujas(prev => [...prev, payload.new as DBItem]);
        } else if (payload.eventType === 'UPDATE') {
           setDbPujas(prev => prev.map(item => item.id === payload.new.id ? payload.new as DBItem : item));
        } else if (payload.eventType === 'DELETE') {
           setDbPujas(prev => prev.filter(item => item.id !== payload.old.id));
        }
     })
     .subscribe();

   return () => {
      supabase.removeChannel(channel);
   }
  }, []);

  const filteredPujas = dbPujas.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBook = (item: DBItem) => {
    setSelectedPuja({
      name: item.title,
      price: item.price,
      description: item.description,
      duration: item.duration,
      features: [
        `Duration: ${item.duration || 'Standard'}`,
        `Complete Vedic Ritual`,
        `Includes Dakshina & Samagri`
      ]
    });
  };

  return (
    <div className="bg-stone-50 min-h-screen py-20 relative z-10 overflow-hidden">
      {/* Sacred Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/binding-light.png')]"></div>
      
      {/* Floating Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-saffron-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 opacity-10 pointer-events-none">
             <Flame size={120} className="text-saffron-500 animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-saffron-800 to-red-700 mb-6 drop-shadow-sm">
            {t('nav.pujas')}
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-saffron-500 to-transparent mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
             Sacred rituals performed with strict adherence to Vedic scriptures to invoke divine blessings.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-16 md:mb-20 relative z-20"
        >
          <div className="relative group">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400 to-saffron-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
             <div className="relative flex items-center bg-white rounded-full">
                <input 
                  type="text" 
                  placeholder="Search for a Puja..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-transparent px-6 py-4 rounded-full focus:outline-none text-stone-800 placeholder-stone-400"
                />
                <button className="pr-6 text-saffron-600 hover:scale-110 transition-transform">
                   <Search size={22} />
                </button>
             </div>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-saffron-500" size={50} />
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence>
            {filteredPujas.length > 0 ? (
              filteredPujas.map((item, idx) => (
                <motion.div 
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.id}
                    className="group relative h-full"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-red-300 to-saffron-100 rounded-[1.5rem] md:rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                    <div className="relative bg-white h-full rounded-[1.3rem] md:rounded-[1.8rem] p-5 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 flex flex-col overflow-hidden">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-4 md:mb-6">
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 shadow-inner">
                          <Flame className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        {item.duration && (
                          <div className="flex items-center gap-1.5 bg-stone-50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-stone-100">
                            <Clock className="w-3 h-3 md:w-3 md:h-3 text-stone-400" />
                            <span className="text-[10px] md:text-xs font-bold text-stone-600 uppercase tracking-wide">{item.duration}</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg md:text-2xl font-serif font-bold text-stone-800 mb-2 md:mb-4 group-hover:text-red-700 transition-colors">{item.title}</h3>
                      
                      <div className="relative mb-4 md:mb-8 flex-grow">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-200 to-transparent rounded-full"></div>
                         <p className="pl-4 text-stone-600 leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                           {item.description}
                         </p>
                      </div>
                      
                      <div className="mt-auto pt-4 md:pt-6 border-t border-stone-50 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] md:text-xs font-bold text-stone-400 uppercase tracking-wider mb-0.5">Dakshina</p>
                          <p className="text-lg md:text-xl font-bold text-red-700">{item.price}</p>
                        </div>
                        <button 
                          onClick={() => handleBook(item)}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-900 text-white flex items-center justify-center group-hover:bg-red-600 group-hover:w-auto group-hover:px-6 transition-all duration-300 shadow-lg"
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:hidden" />
                          <span className="hidden group-hover:inline font-bold text-sm whitespace-nowrap">Book Puja</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                  <div className="inline-block p-4 bg-red-50 rounded-full mb-4">
                     <Flame className="text-red-300" size={32} />
                  </div>
                  <p className="text-stone-500 font-medium">No pujas found matching your search.</p>
              </div>
            )}
            </AnimatePresence>
          </motion.div>
        )}

        <BookingModal 
          isOpen={!!selectedPuja} 
          onClose={() => setSelectedPuja(null)} 
          item={selectedPuja}
        />
      </div>
    </div>
  );
};

export default Pujas;
