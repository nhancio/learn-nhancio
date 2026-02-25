import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, CheckCircle, TrendingUp, Award, ChevronDown } from 'lucide-react';
import PaymentSuccessModal from '../components/PaymentSuccessModal';
import PaymentErrorModal from '../components/PaymentErrorModal';
import { useWorkshopPayment } from '../hooks/useWorkshopPayment';

const communityChannels = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/nhancio.ai/',
    handle: '@nhancio.ai',
    color: 'from-teal-600 to-teal-700',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.055-3.346.115-4.577 1.952-4.864 4.616-.173 1.588-.238 3.163-.238 4.703 0 1.526.063 3.062.238 4.703.287 2.667 1.518 4.5 4.864 4.616 1.28.041 1.688.055 4.947.055 3.259 0 3.668-.014 4.948-.055 3.354-.115 4.581-1.952 4.869-4.616.173-1.588.238-3.163.238-4.703 0-1.526-.063-3.062-.238-4.703-.288-2.665-1.519-4.5-4.865-4.616-1.28-.04-1.688-.055-4.948-.055zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.403 0-4.381-1.958-4.381-4.382 0-2.403 1.978-4.381 4.381-4.381 2.404 0 4.381 1.978 4.381 4.381 0 2.424-1.978 4.382-4.381 4.382zm7.218-11.889c-.559 0-1.002.453-1.002 1.002 0 .559.443 1.002 1.002 1.002.559 0 1.002-.453 1.002-1.002 0-.549-.443-1.002-1.002-1.002z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/917095288950',
    handle: '+91 70952 88950',
    color: 'from-green-500 to-emerald-500',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/nhancio',
    handle: 'Nhancio',
    color: 'from-teal-600 to-teal-700',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const achievementsData = [
  { title: 'Won Mathhack 2.0', description: 'Winners of Mathhack 2.0 by Govt of Telangana', icon: Award, bgClass: 'from-amber-50 to-yellow-100', iconBg: 'from-green-500 to-yellow-500' },
  { title: 'Incubated by T-Hub', description: 'Recognized and incubated by T-Hub Hyderabad', iconLabel: 'T', bgClass: 'bg-white ring-2 ring-amber-300/60 shadow-amber-200/30', iconBg: 'from-red-500 to-pink-500' },
  { title: 'Fastest growing startup in Hyderabad', description: 'Working on innovative solutions for the future', icon: TrendingUp, bgClass: 'from-teal-50 to-emerald-100', iconBg: 'from-green-500 to-emerald-500' },
];

const HomePage: React.FC = () => {
  const {
    handlePayment,
    isProcessingPayment,
    showSuccessModal,
    setShowSuccessModal,
    showErrorModal,
    setShowErrorModal,
    errorMessage,
  } = useWorkshopPayment();

  const featuredCourse = {
    id: 1,
    title: 'AI upskill Workshop',
    description: 'Master the fundamentals of AI and build real-world applications that will transform your career',
    duration: '7 Days',
    price: '₹499',
    originalPrice: '₹999',
    features: ['Hands-on Projects', 'Expert Mentorship', 'Certificate', 'Lifetime Access'],
    image: '/api/placeholder/400/250'
  };

  const testimonials = [
    {
      id: 1,
      name: 'Chaitanya',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'The AI upskill Workshop completely transformed how I approach product development. The hands-on projects were invaluable.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Nikhitha',
      role: 'Startup Founder',
      company: 'InnovateAI',
      content: 'AI upskill Workshop gave me the strategic insights I needed to scale my business. The peer network is incredible.',
      rating: 5,
      image: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Lavanya',
      role: 'Data Scientist',
      company: 'DataFlow',
      content: 'AI upskill Workshop helped me automate 80% of my daily tasks. The productivity gains are remarkable.',
      rating: 5,
      image: '/api/placeholder/60/60'
    }
  ];

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const location = useLocation();
  useEffect(() => {
    const hash = location.hash?.slice(1);
    if (hash && ['workshops', 'community', 'testimonials', 'achievements'].includes(hash)) {
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen">
      {/* Hero: single CTA - Claim Your Spot */}
      <section className="relative py-20 sm:py-28 flex items-center justify-center overflow-hidden">
        <img src="/images/1.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Claim Your Spot
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-200 text-base sm:text-lg mb-2 space-y-1"
          >
            <p>3 Hours Live Workshop</p>
            <p>25 February 2026 · 6:00 PM IST</p>
            <p className="text-sm text-gray-300">Limited seats available</p>
          </motion.div>
          <motion.button
            type="button"
            onClick={handlePayment}
            disabled={isProcessingPayment}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-teal-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isProcessingPayment ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <>
                Claim Your Spot
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </div>
      </section>

      {/* What You'll Learn */}
      <section id="what-you-learn" className="py-14 sm:py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
          >
            What You'll Learn
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          >
            {[
              'AI Agents',
              'Context Engineering',
              'Deployment Strategies',
              'Tools Ecosystem',
              'System Design Thinking',
              'Production-ready workflows',
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl font-semibold text-gray-900 mb-6 text-center"
          >
            Frameworks you'll explore
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { name: 'LangChain', desc: 'Build and orchestrate LLM applications' },
              { name: 'LlamaIndex', desc: 'Data frameworks for LLMs' },
              { name: 'FastAPI', desc: 'Production APIs for AI services' },
              { name: 'Streamlit', desc: 'Quick prototypes and dashboards' },
            ].map((fw) => (
              <div key={fw.name} className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <div className="font-semibold text-gray-900 mb-1">{fw.name}</div>
                <p className="text-sm text-gray-600">{fw.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools You'll Work With */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center"
          >
            Tools You'll Work With
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">Docker</div>
              <p className="text-gray-600">Containerize and run your AI apps consistently across environments. Industry standard for deployment.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-2xl font-bold text-gray-900 mb-2">LangSmith</div>
              <p className="text-gray-600">Trace, debug, and evaluate LLM pipelines. Real-world observability for production AI systems.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Channels - scroll target for nav */}
      <section id="community" className="py-14 sm:py-20 md:py-24 scroll-mt-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Community Channels
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Connect with us on Instagram, WhatsApp & LinkedIn. Get updates, ask questions, and join the conversation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {communityChannels.map((channel, i) => (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group flex flex-col items-center text-center rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${channel.color} shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 min-h-[200px] sm:min-h-[220px] justify-between`}
              >
                <div className="flex justify-center mb-3 sm:mb-4">{channel.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-1">{channel.name}</h3>
                  <p className="text-white/80 text-xs sm:text-sm">{channel.handle}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-white font-medium text-sm sm:text-base mt-4">
                  Join channel
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Transforms Careers */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-16"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              How AI Transforms Your Career Future
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              AI isn't just changing industries—it's revolutionizing how we work, learn, and advance in our careers. 
              Here's how mastering AI can reshape your professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-600 to-teal-800 p-4 sm:p-6 rounded-xl"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🚀</div>
              <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3">Accelerated Career Growth</h3>
              <p className="text-teal-100 text-xs sm:text-sm leading-relaxed">
                AI skills can accelerate your career progression by 3-5 years. Professionals with AI expertise 
                are being promoted faster and earning 40-60% higher salaries than their peers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl"
            >
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-white font-semibold text-lg mb-3">Global Opportunities</h3>
              <p className="text-green-100 text-sm">
                AI skills are universally in demand. Whether you want to work remotely for international companies 
                or relocate to tech hubs worldwide, AI expertise opens doors globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-600 to-teal-800 p-6 rounded-xl"
            >
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-white font-semibold text-lg mb-3">Future-Proof Your Career</h3>
              <p className="text-teal-100 text-sm">
                While automation may replace some jobs, it creates new opportunities for those who understand AI. 
                You become the person who works with AI, not against it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-600 to-orange-800 p-6 rounded-xl"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-white font-semibold text-lg mb-3">Multiple Career Paths</h3>
              <p className="text-orange-100 text-sm">
                AI skills apply across industries—from healthcare and finance to marketing and education. 
                You can pivot between sectors while maintaining your competitive edge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-white font-semibold text-lg mb-3">Enhanced Productivity</h3>
              <p className="text-red-100 text-sm">
                AI tools can make you 10x more productive, allowing you to focus on high-value strategic work 
                while AI handles routine tasks. This makes you indispensable to any organization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 rounded-xl"
            >
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-white font-semibold text-lg mb-3">Leadership Opportunities</h3>
              <p className="text-indigo-100 text-sm">
                As AI becomes central to business strategy, those with AI knowledge naturally rise to leadership 
                positions, driving digital transformation and innovation.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white p-8 rounded-2xl border border-teal-500/30 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-gray-900 font-semibold text-xl mb-4">The Choice is Yours</h3>
              <p className="text-gray-600 leading-relaxed">
                The future belongs to those who embrace AI. While others fear automation, you can be the one 
                who leverages it to build an extraordinary career. Every day you wait is a day your competitors 
                get ahead. Start your AI transformation journey today and secure your place in the future of work.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Before you ask!
            </h2>
            <p className="text-base sm:text-xl text-gray-600">Yes! You will be certified for this program.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative">
              <img 
                src="/certificates/certificate.jpg" 
                alt="Learn.Nhancio Certificate Sample"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-gray-200"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Industry-Recognized Certification
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  Receive a professional certificate from Learn.Nhancio, 
                  recognized by leading tech companies and startups worldwide.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-600">Verified by IIT alumni mentors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-600">LinkedIn-verified credentials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-600">Industry-standard certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-600">Lifetime access to certificate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-600">Shareable on professional networks</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Workshop - scroll target for nav */}
      <section id="workshops" className="py-12 sm:py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Featured Workshop
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Transform your career with AI
            </p>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal-500/40 shadow-lg transition-all duration-300 w-full max-w-6xl"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src="/images/1.jpeg" 
                    alt={featuredCourse.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">{featuredCourse.description}</p>
                    <div className="flex items-center justify-between sm:justify-end mb-4 sm:mb-6">
                      <div className="text-left sm:text-right">
                        <div className="text-xs sm:text-sm text-gray-400 line-through mb-1">{featuredCourse.originalPrice}</div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">{featuredCourse.price}</div>
                        <div className="text-xs text-green-400">Limited Slots Available</div>
                      </div>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {featuredCourse.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm sm:text-base">
                          <Star className="w-4 h-4 text-teal-400 mr-2 sm:mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={handlePayment}
                      disabled={isProcessingPayment}
                      className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 text-base sm:text-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isProcessingPayment ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          <span>Opening payment...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Join Now</span>
                        </>
                      )}
                    </button>
                    <Link
                      to="/#workshops"
                      className="flex-1 bg-white border border-gray-300 text-gray-700 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-teal-500/50 transition-all duration-200 text-center text-base sm:text-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet your Mentor */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Meet your Mentor
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from industry experts who are here to guide your AI journey
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Left: Mentor profile card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden p-6 sm:p-8 flex flex-col items-center text-center lg:items-center lg:text-center">
              <div className="w-full max-w-sm">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 mb-6">
                  <img
                    src="/images/chaitanya.jpeg"
                    alt="Chaitanya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Chaitanya</h3>
                <p className="text-gray-600 text-base sm:text-lg">Mentor, AI upskill Workshop</p>
              </div>
            </div>

            {/* Right: Bio, experience bullets, social stats */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Chaitanya</h3>
              <p className="text-gray-600 text-base mb-6">Mentor, AI upskill Workshop</p>
              <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
                Hey Folks, I'm Chaitanya, and I'm super excited to be your mentor for this workshop.
              </p>
              <ul className="space-y-2 mb-6 text-gray-600">
                {[
                  'Years of experience building and scaling AI products and teams',
                  'Hands-on ML and product leadership in real-world environments',
                  'Focus on practical implementation and systems-level thinking',
                  'Track record of guiding learners from theory to production',
                  'Strong emphasis on deployment and production-ready workflows',
                  'Real-world project exposure across startups and scale-ups',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  In this workshop we'll focus on practical skills you can use immediately—whether you're
                  upskilling for your current role or preparing for your next one. I'm here to share everything
                  I've learned with you.
                </p>
              </div>
              {/* Social / stats blocks */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-base truncate">LinkedIn</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-base truncate">Twitter / X</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50/80 px-4 py-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-base truncate">Expert Mentor</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - scroll target for nav */}
      <section id="testimonials" className="py-12 sm:py-16 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              What Participants Say
            </h2>
            <p className="text-base sm:text-xl text-gray-600">
              Join thousands of successful learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-teal-500/30 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mr-4 text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This Workshop For */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center"
          >
            Who Is This Workshop For?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Students</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Want a structured introduction to AI
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Prefer hands-on learning over theory overload
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Want a take-home project to showcase
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Looking for practical exposure, not just concepts
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Working Professionals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Looking to switch or transition into AI roles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Want clarity on tools, systems, and workflows
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Need a structured learning roadmap
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  Want real-world workflow understanding
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {[
              { q: 'Is prior knowledge required?', a: 'Yes, basic Python knowledge is mandatory.' },
              { q: 'Is this beginner friendly?', a: 'Yes, but coding familiarity is required.' },
              { q: 'Will there be hands-on coding?', a: 'Yes.' },
              { q: 'Will recording be provided?', a: 'Recording policy will be shared before the workshop.' },
              { q: 'Will there be a project?', a: 'Yes, a take-home project is included.' },
              { q: 'What do I need installed?', a: 'Python, Docker, and a code editor (e.g. VS Code).' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 bg-gray-50/50 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100/80 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${faqOpenIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {faqOpenIndex === index && (
                  <div className="px-5 pb-4 pt-0 text-gray-600 border-t border-gray-200/80">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Achievements - scroll target for nav */}
      <section id="achievements" className="py-12 sm:py-16 md:py-20 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Achievements
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {achievementsData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg bg-gradient-to-br ${item.bgClass}`}
              >
                <div className="text-center">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.iconBg} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-white`}>
                    {'icon' in item && item.icon ? <item.icon className="w-7 h-7 sm:w-8 sm:h-8" /> : <span className="font-bold text-lg">{(item as { iconLabel?: string }).iconLabel}</span>}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-base sm:text-xl text-teal-100 mb-6 sm:mb-8">
              Join the AI revolution and stay ahead of the curve
            </p>
            <button
              type="button"
              onClick={handlePayment}
              disabled={isProcessingPayment}
              className="w-full sm:w-auto max-w-md mx-auto bg-white text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center space-x-2 min-h-[44px] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isProcessingPayment ? (
                <span className="animate-spin">⏳</span>
              ) : (
                <>
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      <PaymentSuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      <PaymentErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default HomePage;
