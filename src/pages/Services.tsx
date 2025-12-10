import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, Search, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';
import BookingModal from '../../components/BookingModal';
import { supabase } from '../../supabaseClient';
import { DBItem } from '../../types';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  
  // New State for DB Data
  const [dbServices, setDbServices] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch from Supabase
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('created_at', { ascending: true }); // Keep consistent order
        
        if (data && !error) {
          setDbServices(data);
        } else {
          // Fallback to static data if DB is empty or error (graceful degradation)
          const staticData = t('servicesData') || [];
          // Map static data to DB format for consistent rendering
          setDbServices(staticData.map((s: any, i: number) => ({
            id: i.toString(),
            title: s.name,
            description: s.description,
            duration: s.duration || '',
            price: s.price || ''
          })));
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [t]); // Re-fetch if language changes (though DB content is currently single-lang, this keeps the effect clean)

  
  const filteredServices = dbServices.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-saffron-50/50 min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <span className="text-saffron-600 font-bold tracking-widest uppercase text-xs mb-2 block">Celestial Guidance</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mb-6">{t('nav.services')}</h1>
          <p className="text-stone-600 text-lg">{t('home.servicesSubtitle')}</p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <input 
            type="text" 
            placeholder="Search for a service..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white px-6 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200 shadow-sm pl-12"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
        </div>

        {loading ? (
           <div className="flex justify-center py-20">
             <Loader2 className="animate-spin text-saffron-500" size={40} />
           </div>
        ) : (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <motion.div 
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col group"
                >
                  <div className="p-8 flex-grow relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Sparkles size={40} className="text-saffron-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-stone-800 mb-4 group-hover:text-saffron-600 transition-colors">{service.title}</h3>
                    <p className="text-stone-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-stone-500 text-xs font-bold uppercase tracking-wider mb-4">
                      <Clock size={14} className="text-saffron-500" />
                      {service.duration}
                    </div>
                  </div>
                  
                  <div className="bg-stone-50 px-8 py-5 border-t border-stone-100 flex justify-between items-center mt-auto gap-4">
                    <div className="flex items-center gap-1 text-saffron-700 font-bold text-xl">
                      {service.price}
                    </div>
                    <button 
                      onClick={() => setSelectedService({
                          name: service.title,
                          price: service.price,
                          duration: service.duration,
                          description: service.description
                      })}
                      className="bg-saffron-500 hover:bg-saffron-600 text-white px-6 py-2 rounded-full font-bold text-sm transition-colors flex items-center gap-2"
                    >
                      Book Now <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-stone-500 py-12">
                No services found matching "{searchTerm}"
              </div>
            )}
          </motion.div>
        )}

        {/* Booking Modal */}
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