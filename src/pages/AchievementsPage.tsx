import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';

const achievements = [
  {
    title: 'Won Mathhack 2.0',
    description: 'Winners of Mathhack 2.0 by Govt of Telangana',
    icon: Award,
    bgClass: 'bg-gradient-to-br from-amber-50 to-yellow-100',
    iconBg: 'from-green-500 to-yellow-500',
    glow: false,
  },
  {
    title: 'Incubated by T-Hub',
    description: 'Recognized and incubated by T-Hub Hyderabad',
    icon: null,
    iconLabel: 'T',
    bgClass: 'bg-white',
    iconBg: 'from-red-500 to-pink-500',
    glow: true,
  },
  {
    title: 'Fastest growing startup in Hyderabad',
    description: 'Working on innovative solutions for the future',
    icon: TrendingUp,
    bgClass: 'bg-gradient-to-br from-teal-50 to-emerald-100',
    iconBg: 'from-green-500 to-emerald-500',
    glow: false,
  },
];

const AchievementsPage: React.FC = () => {
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
            Our Achievements
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and milestones that showcase our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 shadow-lg ${item.bgClass} ${
                item.glow ? 'ring-2 ring-amber-300/60 shadow-amber-200/30' : ''
              }`}
            >
              <div className="text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg`}
                >
                  {item.icon ? (
                    <item.icon className="w-8 h-8" />
                  ) : (
                    <span>{item.iconLabel}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
