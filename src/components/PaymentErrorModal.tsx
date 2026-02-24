import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, X } from 'lucide-react';

interface PaymentErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage?: string;
}

const PaymentErrorModal: React.FC<PaymentErrorModalProps> = ({ isOpen, onClose, errorMessage }) => {
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full border border-gray-200 shadow-2xl relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Error Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <XCircle className="w-12 h-12 text-white" />
                </motion.div>
              </div>

              {/* Error Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Payment Failed
                </h2>
                <p className="text-gray-600 mb-6">
                  {errorMessage || 'Your payment could not be processed. Please try again or contact support if the issue persists.'}
                </p>

                {/* Action Button */}
                <button
                  onClick={onClose}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-200"
                >
                  Try Again
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentErrorModal;

