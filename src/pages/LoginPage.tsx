import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 sm:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link to="/" className="flex items-center justify-center space-x-2 mb-8">
            <img 
              src="/logos/Nhancio-logo.png" 
              alt="Nhancio Logo" 
              className="h-12 w-auto"
            />
                    <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                      Learn.Nhancio
                    </span>
          </Link>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Registration Closed
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Registration for this course is currently closed. Please check back later or contact us for more information.
          </p>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 min-h-[44px]"
            >
              <span>Back to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
