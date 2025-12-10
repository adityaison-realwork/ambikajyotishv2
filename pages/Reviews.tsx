
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Review } from '../types';

const Reviews: React.FC = () => {
  const { t } = useLanguage();
  
  const reviews: Review[] = t('reviewsData') || [];

  return (
    <div className="bg-stone-50 min-h-screen py-20 relative relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-saffron-600 font-bold tracking-widest uppercase text-xs mb-2 block">Testimonials</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-saffron-900 mb-6">{t('headings.latestReviews')}</h1>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Hear from devotees across the globe who have experienced peace, clarity, and success through our guidance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 relative group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-saffron-100 opacity-50 group-hover:scale-110 transition-transform">
                <Quote size={60} />
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-saffron-200">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">{review.name}</h3>
                  <p className="text-xs text-stone-500">{review.location}</p>
                </div>
              </div>

              <div className="flex text-saffron-500 mb-4 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-stone-600 italic leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>

              <div className="border-t border-stone-100 pt-4 flex justify-between items-center text-xs relative z-10">
                 <span className="font-bold text-saffron-700 bg-saffron-50 px-2 py-1 rounded">{review.service}</span>
                 <span className="text-stone-400">{review.date}</span>
              </div>
              
              {/* Interaction */}
              <motion.button 
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-4 right-4 text-stone-400 hover:text-saffron-500 transition-colors"
              >
                <ThumbsUp size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 text-center bg-saffron-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <h2 className="text-3xl font-serif font-bold mb-6 relative z-10">Share Your Experience</h2>
           <p className="mb-8 max-w-xl mx-auto text-saffron-200 relative z-10">Your journey inspires others. If you have benefited from our services, please let us know.</p>
           <button className="bg-white text-saffron-900 px-8 py-3 rounded-full font-bold hover:bg-saffron-50 transition-colors relative z-10">
             Write a Review
           </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
