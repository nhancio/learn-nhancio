import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-nhancio-950">
      {/* Animated background with image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop" 
          alt="Students collaborating" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-nhancio-900/85"></div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-teal-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Upskill in AI to Get Your
            <span className="block bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              Dream Job in 30 Days
            </span>
          </h1>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join <span className="text-teal-400 font-semibold">10,000+</span> professionals who have landed their
            <span className="text-emerald-400 font-semibold"> dream jobs</span> using AI skills
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/courses"
              className="group bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3"
            >
              Start
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/20 flex items-center gap-3">
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </motion.div>
          
          <motion.div
            className="flex items-center justify-center gap-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-teal-400" />
              <span>Watch Preview</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>4.9/5 Rating</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>Next batch starts Jan 15</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;