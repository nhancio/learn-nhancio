import React from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Award, TrendingUp, Users, User, Target } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16 px-2"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            A Dream by IITians to Build the Future with AI
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Founded by passionate IITians, Nhancio is democratizing AI education and making cutting-edge technology 
            accessible to professionals, empowering them to transform their careers and secure their future in the digital age.
          </p>
        </motion.div>

        {/* Our Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Recognition and milestones that showcase our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mathhack 2.0 Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Won Mathhack 2.0</h3>
                <p className="text-gray-600">
                  Winners of Mathhack 2.0 by Govt of Telangana
                </p>
              </div>
            </motion.div>

            {/* T-Hub Incubation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-teal-50 to-emerald-100 p-8 rounded-3xl shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Incubated by T-Hub</h3>
                <p className="text-gray-600">
                  Recognized and incubated by T-Hub Hyderabad
                </p>
              </div>
            </motion.div>

            {/* Fastest Growing Startup Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Fastest growing startup in Hyderabad</h3>
                <p className="text-gray-600">
                  Working on innovative solutions for the future
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>


        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-teal-100 text-lg max-w-3xl mx-auto leading-relaxed">
                Innovation, integrity, and impact drive everything we do. We believe in building 
                long-term career partnerships and delivering education that creates lasting professional value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Innovation</h3>
                <p className="text-teal-100 text-sm">
                  We constantly push the boundaries of what's possible with AI, staying at the 
                  forefront of technological advancement.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Integrity</h3>
                <p className="text-teal-100 text-sm">
                  We maintain the highest ethical standards in all our interactions, building 
                  trust through transparency and honesty.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Impact</h3>
                <p className="text-teal-100 text-sm">
                  We measure our success by the positive career impact we create for our students and 
                  the broader professional community.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Founder and Our Story Side by Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Founder Section */}
            <div className="bg-white border border-gray-200 shadow-md p-6 sm:p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Founder</h2>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-xl sm:text-2xl">DN</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Didigam Nithin</h3>
                  <p className="text-teal-400 font-semibold mb-4">Founder & CEO</p>
                </div>
                <div className="space-y-3 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Didigam Nithin is the visionary founder of Learn.Nhancio, bringing a unique combination of 
                    academic excellence and real-world industry experience. An alumnus of IIT Kanpur, one 
                    of India's premier engineering institutions, Nithin has established himself as a 
                    leading expert in Data Science and Artificial Intelligence.
                  </p>
                  <p>
                    With approximately 4 years of hands-on experience in Data Science and AI, Nithin has 
                    worked on cutting-edge projects that have transformed businesses and solved complex 
                    challenges.
                  </p>
                  <div className="mt-4 pt-4 border-t border-teal-500/20">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Education</p>
                        <p className="text-white font-semibold text-sm sm:text-base">IIT Kanpur</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-400">Experience</p>
                        <p className="text-white font-semibold text-sm sm:text-base">~4 years in Data Science & AI</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="bg-white border border-gray-200 shadow-md p-6 sm:p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Story</h2>
              </div>
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
                <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                  <p>
                    Founded in 2024 by Didigam Nithin, an IIT Kanpur alumnus with extensive experience in Data 
                    Science and AI, Learn.Nhancio emerged from a vision to bridge the gap between cutting-edge AI research 
                    and practical career applications.
                  </p>
                  
                  <p>
                    What started as a passion project to make AI education accessible and practical has evolved 
                    into a thriving education platform that empowers professionals to transform their careers through 
                    intelligent technology and hands-on learning.
                  </p>
                  
                  <p>
                    Today, we're proud to be at the forefront of AI education, helping professionals transform 
                    their careers and unlock new opportunities through intelligent technology and practical skills.
                  </p>
                  
                  <p>
                    Our journey from idea to impact continues as we push the boundaries of what's possible 
                    with AI education, always staying true to our roots of academic excellence and practical career innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Nhancio for Your Career Transformation?
            </h2>
            <p className="text-xl text-gray-400">
              The advantages of learning from IITians who understand both technology and career development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">IITian Expertise</h3>
              <p className="text-gray-600 text-sm">
                Founded and led by IITians with deep technical knowledge and industry experience
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Career-Focused Learning</h3>
              <p className="text-gray-600 text-sm">
                We focus on real-world applications that deliver measurable career advancement results
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">
                Award-winning team with recognition from government and industry leaders
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-2">Rapid Growth</h3>
              <p className="text-gray-600 text-sm">
                Fastest growing AI startup in Hyderabad with a mission to transform careers through practical education
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUsPage;