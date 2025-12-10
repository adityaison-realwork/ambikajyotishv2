import React, { useState, useEffect } from 'react';
import { CheckCircle, Flame, Search, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
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

  // Fetch Data from Supabase
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
          // Graceful fallback to static data if DB is empty for demo purposes
          // Mapping legacy nested structure to flat DB structure for consistency
          const staticCategories = t('pujasData') || [];
          const flatStatic = staticCategories.flatMap((cat: any) => 
            cat.items.map((item: any) => ({
              id: item.name,
              title: item.name,
              description: `${item.whoNeedsIt}\n\nVidhi: ${item.vidhi}`,
              duration: 'Standard',
              price: item.priceStandard || item.pricePremium || 'Contact for Price'
            }))
          );
          setDbPujas(flatStatic);
        }
      } catch (e) {
        console.error("Error fetching pujas:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPujas();
  }, [t]);

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
        `Duration: ${item.duration}`,
        `Complete Vedic Ritual`,
        `Includes Dakshina & Samagri`
      ]
    });
  };

  return (
    <div className="bg-white min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center p-3 bg-saffron-100 rounded-full text-saffron-600 mb-4">
            <Flame size={24} />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mb-6">{t('nav.pujas')}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto mb-8 text-lg">
             All rituals are performed with strict adherence to Vedic scriptures. Experience the transformation.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-20 relative">
          <input 
            type="text" 
            placeholder="Search for a Puja..." 
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
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPujas.length > 0 ? (
              filteredPujas.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="border border-stone-200 rounded-2xl p-8 bg-white relative overflow-hidden group hover:border-saffron-300 hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-saffron-50 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-saffron-100"></div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <h3 className="text-2xl font-serif font-bold text-saffron-800 pr-8">{item.title}</h3>
                    {item.duration && (
                       <span className="text-xs font-bold text-stone-400 uppercase tracking-wider bg-stone-50 px-2 py-1 rounded border border-stone-100 whitespace-nowrap">
                         {item.duration}
                       </span>
                    )}
                  </div>
                  
                  <div className="mb-6 relative z-10 flex-grow">
                    <p className="text-stone-600 leading-relaxed whitespace-pre-line text-sm">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-stone-100 relative z-10 mt-auto">
                    <div className="flex justify-between items-center bg-saffron-50/50 p-4 rounded-xl border border-saffron-100">
                      <div>
                          <span className="text-xs text-saffron-600 font-bold uppercase tracking-wide block mb-1">Dakshina</span>
                          <span className="font-bold text-stone-800 text-xl">{item.price}</span>
                      </div>
                      <button 
                          onClick={() => handleBook(item)}
                          className="px-6 py-2.5 bg-saffron-500 hover:bg-saffron-600 text-white rounded-lg text-sm font-bold uppercase tracking-wider transition-colors shadow-md shadow-saffron-200 flex items-center gap-2"
                      >
                          Book Now <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-stone-500 py-12">
                No Pujas found matching "{searchTerm}"
              </div>
            )}
          </div>
        )}

        {/* Life Events Banner */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-saffron-900 to-stone-900 text-saffron-50 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-64 bg-saffron-500/10 rounded-full blur-3xl translate-x-32 -translate-y-32"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-white">Custom Vedic Sanskars</h2>
            <p className="max-w-2xl mx-auto text-saffron-200 mb-8">
              We also perform specialized Sanskars like Namkaran, Mundan, Griha Pravesh, and Vivah ceremonies tailored to your family traditions.
            </p>
            <button className="bg-white text-saffron-900 px-8 py-3 rounded-full font-bold hover:bg-saffron-50 transition-colors">
              Inquire for Sanskar
            </button>
          </div>
        </motion.section>

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