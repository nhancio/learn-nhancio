import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/1.jpeg',
    tagline: 'Stay ahead in the AI-First World',
    subtitle: 'Build hands-on capabilities that translate directly into workplace advantage & tangible outcomes.',
    cta: 'Limited Slots Available',
  },
  {
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop',
    tagline: 'Transform Your Career with AI',
    subtitle: 'Join 10,000+ professionals who have landed their dream jobs using AI skills.',
    cta: 'Explore Workshops',
  },
  {
    image: 'https://images.unsplash.com/photo-1531746795393-6cde684eab09?w=1920&h=1080&fit=crop',
    tagline: 'Learn from IITians & Industry Experts',
    subtitle: 'Expert-led workshops and mentorship to accelerate your growth in the AI era.',
    cta: 'Join Now',
  },
];

interface HeroCarouselProps {
  onCtaClick?: () => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onCtaClick }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                {slides[current].tagline}
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
              {slides[current].subtitle}
            </p>
            {onCtaClick ? (
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-teal-500/25 min-h-[44px]"
              >
                {slides[current].cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            ) : (
              <Link
                to="/#workshops"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-teal-500/25 min-h-[44px]"
              >
                {slides[current].cta}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Carousel controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => setCurrent((c) => (c - 1 + slides.length) % slides.length)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-teal-400' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
