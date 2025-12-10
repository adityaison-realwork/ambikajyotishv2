import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MANTRAS } from '../constants';

const Loader: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const [mantra, setMantra] = useState(MANTRAS[0]);

  useEffect(() => {
    if (isVisible) {
      const randomIndex = Math.floor(Math.random() * MANTRAS.length);
      setMantra(MANTRAS[randomIndex]);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-gradient-to-br from-saffron-900 to-stone-900 flex flex-col items-center justify-center p-6 text-center text-saffron-50"
        >
          <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
             {/* Rotating Background Om */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40rem] font-serif text-saffron-500 animate-spin-slow" style={{ animationDuration: '60s' }}>
                🕉
             </div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 max-w-2xl"
          >
            <div className="w-20 h-20 border-t-4 border-r-4 border-saffron-500 rounded-full animate-spin mb-8 mx-auto"></div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-saffron-400 mb-6 leading-relaxed">
              {mantra.sanskrit}
            </h2>
            <h3 className="text-lg md:text-xl text-saffron-200 mb-4 italic font-light">
              "{mantra.english}"
            </h3>
            <p className="text-stone-400 text-sm max-w-lg mx-auto border-t border-stone-700 pt-4">
              {mantra.meaning}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
