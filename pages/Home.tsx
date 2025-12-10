
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Star, ArrowRight, Phone, Mail, MapPin, Sparkles, Globe, Shield, Flame, Sun, Moon } from 'lucide-react';
import { PANDIT_IMAGE } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Review } from '../types';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  const servicesList = [
    { 
      id: 0,
      title: t('nav.services'), 
      subtitle: "Horoscope Analysis",
      icon: <Sun className="w-6 h-6 md:w-8 md:h-8" />, 
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2500&auto=format&fit=crop",
      desc: t('servicesData')?.[0]?.description, 
      link: "/services",
      color: "bg-orange-500" 
    },
    { 
      id: 1,
      title: t('nav.pujas'), 
      subtitle: "Vedic Rituals",
      icon: <Flame className="w-6 h-6 md:w-8 md:h-8" />, 
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2500&auto=format&fit=crop",
      desc: t('pujasData')?.[0]?.description, 
      link: "/pujas",
      color: "bg-red-500" 
    },
    { 
      id: 2,
      title: t('nav.vastu'), 
      subtitle: "Space Energy",
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, 
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2500&auto=format&fit=crop",
      desc: t('vastuData')?.[0]?.scope, 
      link: "/vastu",
      color: "bg-amber-500" 
    },
    { 
      id: 3,
      title: t('nav.epuja'), 
      subtitle: "Online Services",
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />, 
      image: "https://images.unsplash.com/photo-1582344733350-a35576a927b8?q=80&w=2500&auto=format&fit=crop",
      desc: t('epujaData')?.subtitle, 
      link: "/e-puja",
      color: "bg-saffron-500" 
    },
  ];

  const reviews: Review[] = t('reviewsData') || [];

  return (
    <div className="overflow-x-hidden bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center bg-saffron-50 pt-20 md:pt-0 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-saffron-200/40 to-transparent skew-x-12 translate-x-32 z-0"></div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl -translate-x-20 translate-y-20 z-0"
        ></motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-saffron-200 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse"></span>
                <span className="text-saffron-800 tracking-wide uppercase text-xs font-bold">Shree Ambika Jyotish Kendra</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1] text-stone-900">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl text-stone-600 mb-8 leading-relaxed font-light">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-saffron-600 to-saffron-500 text-white text-lg px-8 py-4 rounded-full font-bold shadow-xl shadow-saffron-500/30 flex items-center justify-center gap-2"
                  >
                    {t('hero.cta1')} <ArrowRight size={20} />
                  </motion.button>
                </NavLink>
                <NavLink to="/pujas">
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white/50 backdrop-blur-sm border border-saffron-200 text-saffron-800 text-lg px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center hover:shadow-lg"
                  >
                    {t('hero.cta2')}
                  </motion.button>
                </NavLink>
              </div>

              <div className="mt-12 flex items-center gap-8 text-stone-500">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 flex items-center justify-center text-xs overflow-hidden">
                       <img src={`https://randomuser.me/api/portraits/men/${i*10}.jpg`} alt="Client" className="w-full h-full object-cover grayscale opacity-70" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-saffron-100 flex items-center justify-center text-xs font-bold text-saffron-700">+2k</div>
                </div>
                <div className="text-sm"> <span className="font-bold text-stone-800">{t('hero.trust')}</span></div>
              </div>
            </motion.div>

            {/* Image Layering Effect */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[600px] hidden md:block"
            >
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-b from-saffron-200 to-orange-100 rounded-full blur-3xl opacity-60"></div>
               
               {/* Arch Frame */}
               <div className="absolute inset-0 border-[20px] border-white/50 rounded-t-[200px] shadow-2xl backdrop-blur-sm z-10"></div>
               
               {/* Main Image */}
               <img 
                 src={PANDIT_IMAGE} 
                 alt="Pandit Anil Kumar Vyas" 
                 className="absolute inset-x-0 bottom-0 mx-auto h-[95%] object-contain drop-shadow-2xl z-20"
               />

               {/* Floating Cards */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-20 -left-10 bg-white p-4 rounded-xl shadow-lg border border-saffron-50 z-30"
               >
                 <div className="flex items-center gap-3">
                   <div className="bg-orange-100 p-2 rounded-lg text-orange-600"><Star size={20} fill="currentColor" /></div>
                   <div>
                     <div className="text-xs text-stone-500 font-bold uppercase">Experience</div>
                     <div className="font-serif font-bold text-lg">25+ Years</div>
                   </div>
                 </div>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Glimpse */}
      <section className="py-20 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
               <div className="w-full h-96 bg-stone-100 rounded-2xl overflow-hidden shadow-2xl rotate-2">
                 <img src="https://images.unsplash.com/photo-1605218427368-35b8042cd024?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Temple" />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-saffron-600 text-white p-6 rounded-xl shadow-lg max-w-xs">
                 <p className="font-serif font-bold text-xl mb-2">"Astrology is the eye of the Vedas."</p>
                 <p className="text-saffron-200 text-sm">- Pandit Anil Kumar Vyas</p>
               </div>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-saffron-600 uppercase tracking-widest mb-2">{t('headings.about')}</h2>
              <h3 className="text-4xl font-serif font-bold text-stone-900 mb-6">{t('home.aboutTitle')}</h3>
              <p className="text-stone-600 leading-relaxed text-lg mb-6">
                {t('home.aboutDesc')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-stone-700 font-medium"><div className="w-2 h-2 bg-saffron-500 rounded-full"></div> {t('aboutPage.edu1')}</li>
                <li className="flex items-center gap-3 text-stone-700 font-medium"><div className="w-2 h-2 bg-saffron-500 rounded-full"></div> {t('aboutPage.edu3')}</li>
              </ul>
              <NavLink to="/about" className="text-saffron-700 font-bold hover:text-saffron-900 flex items-center gap-2">{t('home.aboutLink')} <ArrowRight size={16}/></NavLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW: Divine Services Section - Scroll Animated Cards (Fixed & Themed) */}
      <section className="py-24 bg-gradient-to-b from-white to-saffron-50 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
           <div className="absolute top-20 left-10 text-9xl text-saffron-500 font-serif">🕉</div>
           <div className="absolute bottom-20 right-10 text-9xl text-saffron-500 font-serif">卐</div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-saffron-200 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
             <motion.span 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-saffron-600 font-bold tracking-widest uppercase text-sm"
             >
               {t('headings.services')}
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mt-3"
             >
               {t('home.servicesTitle')}
             </motion.h2>
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: 100 }}
               viewport={{ once: true }}
               className="h-1 bg-saffron-500 mx-auto mt-6 rounded-full"
             />
             <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-lg">{t('home.servicesSubtitle')}</p>
          </div>

          {/* Cards List */}
          <div className="space-y-24">
            {servicesList.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 group`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="absolute inset-0 bg-saffron-500/20 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6"></div>
                  <div className="absolute inset-0 bg-orange-400/20 rounded-3xl transform -rotate-3 transition-transform group-hover:-rotate-6"></div>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[350px] md:h-[450px] border-4 border-white">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Golden Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-saffron-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className={`inline-flex p-4 rounded-2xl ${service.color} text-white mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-saffron-600 font-bold text-sm mb-6 uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
                    <span className="w-8 h-0.5 bg-saffron-600"></span> {service.subtitle}
                  </p>
                  <p className="text-stone-600 text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <NavLink to={service.link}>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border-2 border-saffron-500 text-saffron-700 px-8 py-3 rounded-full font-bold hover:bg-saffron-500 hover:text-white transition-all shadow-md flex items-center gap-2 mx-auto lg:mx-0 group-hover:shadow-saffron-200"
                    >
                      Explore Service <ArrowRight size={18} />
                    </motion.button>
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Marquee */}
      <section className="py-20 bg-saffron-50/50 overflow-hidden">
         <div className="container mx-auto px-4 mb-10 text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-800">{t('home.reviewsTitle')}</h2>
         </div>
         <div className="relative w-full">
            <motion.div 
               className="flex space-x-8 w-max"
               animate={{ x: [0, -1000] }}
               transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
               {[...reviews, ...reviews].map((review, i) => (
                  <div key={i} className="w-80 bg-white p-6 rounded-xl border border-saffron-100 shadow-sm flex-shrink-0">
                     <div className="flex text-saffron-500 mb-2">
                        {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                     </div>
                     <p className="text-stone-600 text-sm italic mb-4 line-clamp-3">"{review.text}"</p>
                     <div className="flex items-center gap-3">
                        <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full" />
                        <div>
                           <p className="font-bold text-stone-800 text-sm">{review.name}</p>
                           <p className="text-xs text-stone-400">{review.location}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </motion.div>
         </div>
      </section>

      {/* Portal of Connection (Contact & Pandit Info) */}
      <section className="relative py-32 overflow-hidden bg-stone-950">
         {/* Background Parallax */}
         <div className="absolute inset-0 opacity-40">
           <img src="https://images.unsplash.com/photo-1545239351-ef35f43d514b?q=80&w=2500&auto=format&fit=crop" alt="Universe" className="w-full h-full object-cover" />
         </div>
         <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent"></div>

         <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Left: Call To Action Text */}
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="space-y-8"
               >
                 <div className="inline-block px-4 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/30 text-saffron-400 text-xs font-bold uppercase tracking-widest">
                    Connect with the Divine
                 </div>
                 <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                    {t('home.ctaTitle')}
                 </h2>
                 <p className="text-xl text-stone-400 leading-relaxed max-w-lg">
                    {t('home.ctaSubtitle')}
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <NavLink to="/contact">
                       <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="bg-saffron-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-saffron-500/25 flex items-center gap-2"
                       >
                         {t('home.ctaBtn1')} <ArrowRight size={18} />
                       </motion.button>
                    </NavLink>
                    <a href="tel:+9198XXXXXXXX">
                      <motion.button 
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                         className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2"
                       >
                         <Phone size={18} /> {t('home.ctaBtn2')}
                       </motion.button>
                    </a>
                 </div>
               </motion.div>

               {/* Right: Pandit Digital Card */}
               <motion.div
                 initial={{ opacity: 0, x: 50, rotateY: 10 }}
                 whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                 viewport={{ once: true }}
                 className="relative perspective-1000"
               >
                 {/* Glowing Effect */}
                 <div className="absolute inset-0 bg-saffron-500/20 blur-[80px] rounded-full"></div>

                 <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-10 shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 p-32 bg-gradient-to-br from-saffron-500/20 to-purple-500/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
                    
                    <div className="flex items-center gap-6 mb-8 relative z-10">
                       <div className="w-24 h-24 rounded-full border-4 border-saffron-500/30 p-1">
                          <img src={PANDIT_IMAGE} alt="Pandit Anil Kumar Vyas" className="w-full h-full object-cover rounded-full bg-stone-800" />
                       </div>
                       <div>
                          <h3 className="text-2xl font-serif font-bold text-white">Pandit Anil Kumar Vyas</h3>
                          <p className="text-saffron-400 text-sm font-medium uppercase tracking-wide">Vedic Astrologer & Ritualist</p>
                          <div className="flex gap-1 mt-2">
                             {[1,2,3,4,5].map(i => <Star key={i} size={12} className="text-yellow-400 fill-current" />)}
                          </div>
                       </div>
                    </div>

                    <div className="space-y-4 relative z-10">
                       <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-saffron-500/20 flex items-center justify-center text-saffron-400">
                             <Phone size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-stone-400 uppercase font-bold">Call Now</p>
                             <p className="text-white font-mono">+91 98XXX XXXXX</p>
                          </div>
                       </div>
                       
                       <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                             <Mail size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-stone-400 uppercase font-bold">Email</p>
                             <p className="text-white">contact@ambikajyotish.com</p>
                          </div>
                       </div>

                       <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                             <MapPin size={20} />
                          </div>
                          <div>
                             <p className="text-xs text-stone-400 uppercase font-bold">Location</p>
                             <p className="text-white">Vadodara, Gujarat</p>
                          </div>
                       </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                       <p className="text-xs text-stone-500">Available Mon-Sat: 10:00 AM - 7:00 PM</p>
                    </div>
                 </div>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
