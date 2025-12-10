
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Smartphone, Landmark, AlertCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-stone-50 min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
               <h1 className="text-5xl font-serif font-bold text-saffron-900 mb-6">{t('contactPage.title')}</h1>
               <p className="text-stone-600 text-lg leading-relaxed">
                 {t('contactPage.desc')}
               </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl border border-white/50 backdrop-blur-sm space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-saffron-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-stone-800 mb-2">{t('contactPage.visit')}</h3>
                  <p className="text-stone-600 leading-relaxed">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="w-full h-px bg-stone-100"></div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-saffron-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-stone-800 mb-2">{t('contactPage.call')}</h3>
                  <p className="text-stone-600 mb-1 font-medium">Direct: {CONTACT_INFO.phone}</p>
                  <p className="text-stone-500">WhatsApp: {CONTACT_INFO.whatsapp}</p>
                </div>
              </div>

              <div className="w-full h-px bg-stone-100"></div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-saffron-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-saffron-600 group-hover:bg-saffron-500 group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-stone-800 mb-2">{t('contactPage.email')}</h3>
                  <p className="text-stone-600 mb-1 font-medium">{CONTACT_INFO.email}</p>
                  <p className="text-stone-500">anilvyas@ambikajyotish.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-72 bg-stone-200 rounded-3xl overflow-hidden relative group cursor-pointer shadow-inner">
              <div className="absolute inset-0 flex items-center justify-center text-stone-500 group-hover:bg-stone-300 transition-colors">
                 <span className="flex items-center gap-2 font-bold">
                    <MapPin /> View on Google Maps <ArrowUpRight size={18} />
                 </span>
              </div>
            </div>
          </motion.div>

          {/* Payment Info */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif font-bold text-saffron-900 mb-6">{t('contactPage.paymentTitle')}</h2>
              <div className="bg-red-50 border-l-4 border-red-500 text-red-800 px-6 py-4 rounded-r-lg text-sm flex items-start gap-3 shadow-sm">
                <AlertCircle size={20} className="mt-0.5 flex-shrink-0" />
                <span className="font-medium">{t('contactPage.paymentImportant')}</span>
              </div>
            </div>

            {/* UPI Card */}
            <div className="bg-gradient-to-br from-saffron-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                    <Smartphone size={18} />
                    <span className="font-bold tracking-wider text-sm">UPI PAYMENT</span>
                  </div>
                  <Smartphone size={40} className="opacity-50" />
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm opacity-90 uppercase tracking-widest text-saffron-100">Scan or Pay to</div>
                  <div className="text-3xl md:text-4xl font-mono font-bold tracking-tight text-white drop-shadow-md">98XXXXXXXX@okaxis</div>
                </div>
                
                <div className="mt-8 flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-serif font-bold">A</div>
                   <div className="font-medium">Ambika Jyotish</div>
                </div>
              </div>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-700">
                   <Landmark size={24} />
                 </div>
                 <h3 className="font-bold text-xl text-stone-800">{t('contactPage.bankDetails')}</h3>
              </div>
              <div className="space-y-5 text-sm relative z-10">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-stone-500 font-medium">Account Name</span>
                  <span className="font-bold text-stone-800 text-base">Anil Kumar Vyas</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-stone-500 font-medium">Bank</span>
                  <span className="font-bold text-stone-800 text-base">Bank of Baroda</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-stone-500 font-medium">Branch</span>
                  <span className="font-bold text-stone-800 text-base">Mandvi, Vadodara</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-stone-500 font-medium">Account No</span>
                  <span className="font-mono font-bold text-stone-800 text-base tracking-wider">000000XXXXXXXXXX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-medium">IFSC Code</span>
                  <span className="font-mono font-bold text-stone-800 text-base tracking-wider">BARB0MANDVI</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Disclaimer */}
        <div className="mt-20 pt-10 border-t border-stone-200 text-xs text-stone-400 text-center max-w-4xl mx-auto leading-relaxed">
          <p className="font-bold mb-2 tracking-widest">PRIVACY & DISCLAIMER</p>
          <p>
            Your birth details and personal problems are kept 100% confidential. Astrology and Rituals are spiritual guides based on ancient texts. While we perform every ritual with utmost sincerity and scriptural accuracy, the final result depends on the Divine Will and the individual's Karma. We do not guarantee 100% specific outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
