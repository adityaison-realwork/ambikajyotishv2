import React, { useState, useEffect } from 'react';
import { LayoutTemplate, Map, Factory, Compass, Search, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../LanguageContext';
import BookingModal from '../../components/BookingModal';
import { supabase } from '../../supabaseClient';
import { DBItem } from '../../types';

const icons = [LayoutTemplate, LayoutTemplate, Factory, Map];

const Vastu: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVastu, setSelectedVastu] = useState<any>(null);
  const [dbVastu, setDbVastu] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data
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
          // Fallback
          const staticData = t('vastuData') || [];
          setDbVastu(staticData.map((s: any, i: number) => ({
            id: i.toString(),
            title: s.service,
            description: s.scope + '\n' + s.deliverables,
            duration: 'Visit',
            price: s.price
          })));
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchVastu();
  }, [t]);

  const filteredServices = dbVastu.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-saffron-50 min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mb-6">{t('nav.vastu')}</h1>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">
              Balancing the 5 Elements (Panch Mahabhuta) in your space for harmony, wealth, and success.
            </p>
          </div>

           {/* Search Bar */}
           <div className="max-w-md mx-auto mb-16 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white px-6 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-saffron-400 focus:ring-2 focus:ring-saffron-200 shadow-sm pl-12"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
               <Loader2 className="animate-spin text-saffron-500" size={40} />
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, idx) => {
                  const Icon = icons[idx % icons.length] || Compass;
                  return (
                    <motion.div 
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-white hover:border-saffron-200 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-saffron-100 to-orange-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform shadow-inner">
                          <Icon className="text-saffron-600" size={36} />
                        </div>
                        
                        <div className="flex-grow space-y-3">
                          <h3 className="text-2xl font-serif font-bold text-stone-800">{service.title}</h3>
                          <p className="text-stone-600 text-lg whitespace-pre-line">{service.description}</p>
                          {service.duration && (
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Duration/Type:</span>
                              <span className="text-sm font-medium text-saffron-700 bg-saffron-50 px-3 py-0.5 rounded-full border border-saffron-100">
                                {service.duration}
                              </span>
                            </div>
                          )}
                        </div>

                        <div className="flex-shrink-0 text-right md:min-w-[180px] pl-4 md:border-l border-stone-100">
                          <span className="block text-3xl font-bold text-stone-800">{service.price}</span>
                          <span className="text-xs text-stone-500 uppercase tracking-wide font-bold">Consultation</span>
                          <button 
                            onClick={() => setSelectedVastu({
                              name: service.title,
                              price: service.price,
                              description: service.description,
                              duration: service.duration
                            })}
                            className="mt-4 w-full py-2 rounded-lg bg-saffron-500 text-white text-sm font-bold hover:bg-saffron-600 transition-colors shadow-md shadow-saffron-200"
                          >
                            Book Visit
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="text-center text-stone-500 py-12">No Vastu services found</div>
              )}
            </div>
          )}
        </motion.div>

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