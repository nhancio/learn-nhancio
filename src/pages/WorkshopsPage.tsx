import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { webinars } from '../data/webinars';

const WorkshopsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Workshops & Webinars
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Live and recorded sessions to upskill in AI. Pick a workshop and apply now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {webinars.map((webinar, i) => (
            <motion.div
              key={webinar.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal-500/40 shadow-lg transition-all duration-300"
            >
              <div className="h-48 sm:h-56 relative">
                <img
                  src={webinar.image}
                  alt={webinar.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-bold text-white">{webinar.name}</h2>
                  <p className="text-gray-200 text-sm line-clamp-2 mt-1">{webinar.shortDescription}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Workshop
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {webinar.price}
                  </span>
                </div>
                <Link
                  to={`/webinar/${webinar.slug}`}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  View details & apply
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopsPage;
