
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageCircle, Clock } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    name: string;
    price: string;
    features?: string[];
    description?: string;
    duration?: string;
  } | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, item }) => {
  if (!item) return null;

  const handleConfirm = () => {
    const message = `Namaste Panditji, I would like to book the following service:\n\n*Service:* ${item.name}\n*Price:* ${item.price}\n\nPlease guide me on the next steps.`;
    const encodedMessage = encodeURIComponent(message);
    // Redirect to WhatsApp number 9427838678
    const whatsappUrl = `https://wa.me/919427838678?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-stone-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-saffron-500 to-orange-600 p-6 text-white relative">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-white/10 rounded-full p-1"
                >
                  <X size={20} />
                </button>
                <h2 className="text-sm font-bold uppercase tracking-widest opacity-90 mb-1">Confirm Booking</h2>
                <h3 className="text-2xl font-serif font-bold leading-tight pr-8">{item.name}</h3>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                
                {/* Price & Duration */}
                <div className="flex items-center justify-between bg-stone-50 p-4 rounded-xl border border-stone-100">
                  <div>
                    <p className="text-xs text-stone-500 font-bold uppercase">Total Amount</p>
                    <p className="text-2xl font-bold text-saffron-600">{item.price}</p>
                  </div>
                  {item.duration && (
                    <div className="text-right">
                       <p className="text-xs text-stone-500 font-bold uppercase flex items-center gap-1 justify-end">
                         <Clock size={12} /> Duration
                       </p>
                       <p className="text-stone-800 font-medium">{item.duration}</p>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                   <p className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-3">Includes</p>
                   {item.features && item.features.length > 0 ? (
                     <ul className="space-y-2">
                       {item.features.map((feature, i) => (
                         <li key={i} className="flex items-start gap-3 text-stone-600 text-sm">
                           <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                           <span>{feature}</span>
                         </li>
                       ))}
                     </ul>
                   ) : (
                     <p className="text-stone-600 text-sm leading-relaxed">
                       {item.description || "Complete Vedic ritual performed with strict adherence to scriptures."}
                     </p>
                   )}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col gap-3">
                  <button 
                    onClick={handleConfirm}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                  >
                    <MessageCircle size={24} />
                    Confirm on WhatsApp
                  </button>
                  <button 
                    onClick={onClose}
                    className="w-full bg-white border border-stone-200 text-stone-500 py-3 rounded-xl font-semibold hover:bg-stone-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
                
                <p className="text-[10px] text-center text-stone-400">
                  By clicking confirm, you will be redirected to WhatsApp to chat with Panditji directly.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
