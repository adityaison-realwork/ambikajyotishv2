import React, { useState, useEffect } from 'react';
import { Video, Globe, Laptop, Truck, Search, Star, ArrowRight, Sparkles, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import BookingModal from '../components/BookingModal';
import { supabase } from '../supabaseClient';
import { DBItem } from '../types';

const EPuja: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPkg, setSelectedPkg] = useState<any>(null);
  const [dbPackages, setDbPackages] = useState<DBItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Static Data for "Steps" (CMS not needed for this usually, but can be added if requested)
  const staticData = t('epujaData') || { steps: [] };
  const icons = [<Video size={24} />, <Laptop size={24} />, <Globe size={24} />, <Truck size={24} />];

  // Fetch Packages from DB
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const { data, error } = await supabase
          .from('e_poojas')
          .select('*')
          .order('created_at', { ascending: true });
        
        if (data && !error) {
          setDbPackages(data);
        } else {
          // Fallback
          const staticPkgs = staticData.packages || [];
          setDbPackages(staticPkgs.map((p: any, i: number) => ({
             id: i.toString(),
             title: p.name,
             description: p.features.join('\n'), // Join array to string for DB compat
             price: p.price,
             duration: p.sub || ''
          })));
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [t]);

  const filteredPackages = dbPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-saffron-50 min-h-screen relative z-10 text-stone-800 overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-saffron-200/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-100/50 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/binding-light.png')]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 p-3 bg-white rounded-full mb-8 border border-saffron-200 shadow-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-saffron-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-saffron-800">Live Global Connectivity</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-saffron-900 drop-shadow-sm">
            {staticData.title || "E-Puja for Global Devotees"}
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            {staticData.subtitle || "Experience authentic Vedic rituals from the comfort of your home abroad."}
          </p>
        </motion.div>
      </section>

      {/* The Digital Bridge (Process) */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 relative">
              {/* Animated Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-saffron-300 to-transparent opacity-50 border-t border-b border-saffron-100"></div>
              
              {staticData.steps && staticData.steps.map((step: any, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative z-10 w-full md:w-64"
                >
                  <div className="bg-white p-8 rounded-2xl border border-saffron-100 text-center hover:border-saffron-400 hover:shadow-xl transition-all shadow-md group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-saffron-50 flex items-center justify-center text-saffron-600 shadow-inner group-hover:scale-110 transition-transform group-hover:bg-saffron-500 group-hover:text-white duration-300">
                       {icons[i] || <Globe size={24} />}
                    </div>
                    
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-saffron-500 rounded-full flex items-center justify-center border-2 border-white font-serif text-sm text-white font-bold shadow-sm">
                        {i + 1}
                    </div>
                    
                    <h3 className="text-lg font-serif font-bold text-stone-800 mb-2 group-hover:text-saffron-700 transition-colors">{step.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white relative z-10 clip-path-slant-top">
         {/* Top Slant Decoration */}
         <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-saffron-50 to-white"></div>

        <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
                <span className="text-saffron-500 font-bold tracking-widest uppercase text-xs mb-3 block">Offerings</span>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">{staticData.packagesTitle || "NRI Packages"}</h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-saffron-400 to-orange-600 mx-auto rounded-full mb-8"></div>
                
                {/* Search Bar */}
                <div className="max-w-md mx-auto relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-saffron-400 to-orange-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                    <div className="relative">
                      <input 
                          type="text" 
                          placeholder="Search packages..." 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full bg-white px-6 py-4 rounded-full border border-stone-200 focus:outline-none focus:border-saffron-500 text-stone-800 placeholder-stone-400 transition-all pl-12 shadow-sm"
                      />
                      <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-saffron-500" size={20} />
                    </div>
                </div>
            </div>
            
            {loading ? (
                <div className="flex justify-center py-12">
                   <Loader2 className="animate-spin text-saffron-500" size={40} />
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg, i) => (
                    <motion.div 
                        key={pkg.id} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="relative group"
                    >
                        <div className="bg-white rounded-3xl h-full p-8 flex flex-col relative overflow-hidden border border-stone-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-saffron-200">
                            {/* Decorative Gradient Blob */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-saffron-100 rounded-full blur-2xl group-hover:bg-saffron-200 transition-colors"></div>
                            
                            {/* Icon */}
                            <div className="w-16 h-16 bg-saffron-50 rounded-2xl flex items-center justify-center text-3xl mb-6 text-saffron-600 border border-saffron-100 shadow-sm group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                                {i % 3 === 0 ? "🕯️" : i % 3 === 1 ? "✈️" : "🏡"}
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-stone-800 mb-2">{pkg.title}</h3>
                            {pkg.duration && <p className="text-saffron-600 text-xs font-bold mb-4 tracking-wide uppercase bg-saffron-50 inline-block px-2 py-1 rounded w-fit">{pkg.duration}</p>}
                            
                            <div className="my-6 flex items-baseline gap-1">
                                <span className="text-4xl font-bold text-saffron-700 tracking-tight">{pkg.price}</span>
                            </div>
                            
                            <div className="space-y-4 mb-10 flex-grow">
                                {pkg.description.split('\n').map((f: string, idx: number) => f && (
                                    <div key={idx} className="flex items-start gap-3 text-stone-600 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-saffron-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Star size={10} className="text-saffron-600 fill-saffron-600" />
                                        </div>
                                        {f}
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => setSelectedPkg({
                                    name: pkg.title,
                                    price: pkg.price,
                                    features: pkg.description.split('\n'),
                                    description: pkg.duration ? `${pkg.duration} Package` : 'Comprehensive Online Puja Service'
                                })}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 text-white font-bold text-sm uppercase tracking-wider hover:from-saffron-600 hover:to-orange-700 transition-all shadow-lg shadow-saffron-200 flex items-center justify-center gap-2 group-hover:gap-3"
                            >
                                Book Now <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>
                ))
                ) : (
                    <div className="col-span-3 text-center text-stone-500 py-20 bg-stone-50 rounded-2xl border border-stone-200 border-dashed">
                    <Sparkles className="mx-auto mb-4 text-saffron-300" size={40} />
                    No packages found matching "{searchTerm}"
                    </div>
                )}
                </div>
            )}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={!!selectedPkg} 
        onClose={() => setSelectedPkg(null)} 
        item={selectedPkg}
      />
    </div>
  );
};

export default EPuja;