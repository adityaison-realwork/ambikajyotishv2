
import React, { useState, useEffect } from 'react';
import { Video, Globe, Laptop, Truck, Search, ArrowRight, Sparkles, Loader2, Wifi, Zap, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const staticData = t('epujaData') || { steps: [] };
  const icons = [<Video size={24} />, <Laptop size={24} />, <Globe size={24} />, <Truck size={24} />];

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
          setDbPackages([]);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();

     const channel = supabase
     .channel('epoojas_client_realtime')
     .on('postgres_changes', { event: '*', schema: 'public', table: 'e_poojas' }, (payload) => {
        if (payload.eventType === 'INSERT') {
           setDbPackages(prev => [...prev, payload.new as DBItem]);
        } else if (payload.eventType === 'UPDATE') {
           setDbPackages(prev => prev.map(item => item.id === payload.new.id ? payload.new as DBItem : item));
        } else if (payload.eventType === 'DELETE') {
           setDbPackages(prev => prev.filter(item => item.id !== payload.old.id));
        }
     })
     .subscribe();

   return () => {
      supabase.removeChannel(channel);
   }
  }, []);

  const filteredPackages = dbPackages.filter(pkg => 
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pkg.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-stone-50 min-h-screen relative z-10 text-stone-800 overflow-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-stone-50">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-orange-100 to-transparent rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-saffron-100 to-transparent rounded-full blur-[100px] opacity-60"></div>
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl text-center relative z-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white rounded-full mb-8 border border-saffron-200 shadow-xl shadow-saffron-500/10">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-stone-800">Live Global Connectivity</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-br from-saffron-600 to-stone-800 drop-shadow-sm">
            {staticData.title || "E-Puja Global"}
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            {staticData.subtitle || "Authentic Vedic rituals streamed live to your home, bridging distance with devotion."}
          </p>
        </motion.div>
      </section>

      {/* Connectivity Steps */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-20 right-20 h-0.5 bg-gradient-to-r from-transparent via-saffron-300 to-transparent -z-10 border-t border-dashed border-saffron-400 opacity-30"></div>
              
              {staticData.steps && staticData.steps.map((step: any, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group w-full md:w-64"
                >
                  <div className="bg-white p-6 rounded-2xl border border-stone-100 hover:border-saffron-300 transition-all shadow-sm hover:shadow-xl text-center h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-saffron-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-stone-50 flex items-center justify-center text-saffron-600 group-hover:scale-110 group-hover:bg-saffron-500 group-hover:text-white transition-all duration-300 shadow-inner">
                       {icons[i] || <Globe size={24} />}
                    </div>
                    
                    <h3 className="text-lg font-bold text-stone-800 mb-2 relative z-10">{step.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed relative z-10">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 max-w-6xl mx-auto">
                <div>
                   <h2 className="text-4xl font-serif font-bold text-stone-900 mb-2">{staticData.packagesTitle || "Digital Offerings"}</h2>
                   <p className="text-stone-500">Select a package to perform rituals remotely.</p>
                </div>
                
                {/* Modern Search */}
                <div className="relative w-full md:w-80 group">
                    <input 
                      type="text" 
                      placeholder="Find package..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white px-5 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-saffron-500 focus:ring-4 focus:ring-saffron-500/10 transition-all pl-12"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-saffron-500 transition-colors" size={20} />
                </div>
            </div>
            
            {loading ? (
                <div className="flex justify-center py-12">
                   <Loader2 className="animate-spin text-saffron-500" size={50} />
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                  <AnimatePresence>
                    {filteredPackages.length > 0 ? (
                        filteredPackages.map((pkg, i) => (
                        <motion.div 
                            layout
                            key={pkg.id} 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-saffron-400 to-orange-500 rounded-[1.5rem] md:rounded-[2rem] opacity-0 group-hover:opacity-70 blur transition duration-500"></div>
                            <div className="relative bg-white h-full rounded-[1.3rem] md:rounded-[1.8rem] p-5 md:p-8 flex flex-col overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100">
                                
                                <div className="flex justify-between items-start mb-4 md:mb-6">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-saffron-50 rounded-2xl flex items-center justify-center text-saffron-600 shadow-sm border border-saffron-100 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                                        <Wifi className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    {pkg.duration && (
                                       <span className="flex items-center gap-1 text-[10px] md:text-xs font-bold uppercase tracking-wider bg-stone-900 text-white px-2.5 py-1 md:px-3 md:py-1 rounded-full">
                                         <Zap size={10} className="text-yellow-400 fill-current" /> {pkg.duration}
                                       </span>
                                    )}
                                </div>

                                <h3 className="text-lg md:text-2xl font-serif font-bold text-stone-800 mb-2 md:mb-4 group-hover:text-saffron-600 transition-colors">{pkg.title}</h3>
                                
                                <div className="relative mb-4 md:mb-8 flex-grow">
                                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 to-transparent rounded-full"></div>
                                  <p className="pl-4 text-stone-600 leading-relaxed text-xs md:text-sm line-clamp-3 md:line-clamp-4 group-hover:line-clamp-none transition-all duration-300 whitespace-pre-line">
                                    {pkg.description}
                                  </p>
                                </div>

                                <div className="mt-auto pt-4 md:pt-6 border-t border-stone-50 flex items-center justify-between">
                                  <div>
                                    <p className="text-[10px] md:text-xs font-bold text-stone-400 uppercase tracking-wider mb-0.5">Price</p>
                                    <p className="text-lg md:text-xl font-bold text-saffron-700">{pkg.price}</p>
                                  </div>
                                  <button 
                                      onClick={() => setSelectedPkg({
                                          name: pkg.title,
                                          price: pkg.price,
                                          features: pkg.description.split('\n'),
                                          description: pkg.duration ? `${pkg.duration} Package` : 'Comprehensive Online Puja Service'
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
                        <div className="col-span-3 text-center py-20">
                           <div className="inline-block p-4 bg-stone-100 rounded-full mb-4">
                             <Wifi className="text-stone-400" size={32} />
                           </div>
                           <p className="text-stone-500">No packages found.</p>
                        </div>
                    )}
                  </AnimatePresence>
                </div>
            )}
        </div>
      </section>

      <BookingModal 
        isOpen={!!selectedPkg} 
        onClose={() => setSelectedPkg(null)} 
        item={selectedPkg}
      />
    </div>
  );
};

export default EPuja;
