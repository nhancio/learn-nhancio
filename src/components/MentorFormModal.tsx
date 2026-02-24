import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MentorFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MentorFormModal: React.FC<MentorFormModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    expertise: '',
    message: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: '', email: '', linkedin: '', expertise: '', message: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-[9999]"
        style={{ position: 'fixed' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg border border-gray-200 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh]"
        >
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Join as a Mentor</h2>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 sm:p-6 overflow-y-auto flex-1 min-h-0">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-teal-600">✓</span>
                </div>
                <p className="text-gray-900 font-semibold">Thank you for applying!</p>
                <p className="text-gray-600 text-sm mt-1">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="mentor-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="mentor-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="mentor-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    id="mentor-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="mentor-linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                    LinkedIn Profile
                  </label>
                  <input
                    id="mentor-linkedin"
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
                <div>
                  <label htmlFor="mentor-expertise" className="block text-sm font-medium text-gray-700 mb-1">
                    Area of Expertise *
                  </label>
                  <input
                    id="mentor-expertise"
                    type="text"
                    required
                    value={formData.expertise}
                    onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none"
                    placeholder="e.g. AI/ML, Data Science, Product"
                  />
                </div>
                <div>
                  <label htmlFor="mentor-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to mentor?
                  </label>
                  <textarea
                    id="mentor-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                    placeholder="Brief message..."
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:from-teal-600 hover:to-teal-700 transition-all"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default MentorFormModal;
