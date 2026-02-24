import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MentorFormModal from '../MentorFormModal';

const navLinkClass = "relative inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-2xl font-semibold text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 transition-all duration-300 hover:scale-105 bg-white/80 hover:bg-white text-gray-700 hover:text-teal-600 border border-gray-200 hover:border-teal-400/50 shadow-sm";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navPages = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
  ];
  const scrollSections = [
    { name: 'Workshops', id: 'workshops' },
    { name: 'Community', id: 'community' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Achievements', id: 'achievements' },
  ];


  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img 
              src="/logos/Nhancio-logo.png" 
              alt="Nhancio Logo" 
              className="h-10 w-auto sm:h-12"
            />
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent hidden sm:inline">
              Learn.Nhancio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center flex-wrap gap-1 sm:gap-2">
            {navPages.map((item) => (
              <Link key={item.name} to={item.href} className={navLinkClass}>
                {item.name}
              </Link>
            ))}
            {scrollSections.map((item) =>
              isHome ? (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => { scrollToSection(item.id); setIsMobileMenuOpen(false); }}
                  className={navLinkClass}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={`/#${item.id}`}
                  className={navLinkClass}
                >
                  {item.name}
                </Link>
              )
            )}
            <button
              type="button"
              onClick={() => { setIsMentorModalOpen(true); setIsMobileMenuOpen(false); }}
              className="ml-1 rounded-2xl font-semibold text-xs sm:text-sm px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300 border border-teal-400/50 whitespace-nowrap"
            >
              Join as a Mentor
            </button>
          </nav>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-teal-600 transition-colors duration-200 p-2 rounded-xl hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 max-h-[80vh] overflow-y-auto shadow-lg"
          >
            <div className="px-4 py-4 space-y-3">
              {navPages.map((item) => (
                <Link key={item.name} to={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-center ${navLinkClass}`}>
                  {item.name}
                </Link>
              ))}
              {scrollSections.map((item) =>
                isHome ? (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => { scrollToSection(item.id); setIsMobileMenuOpen(false); }}
                    className={`block w-full text-center ${navLinkClass}`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link key={item.name} to={`/#${item.id}`} onClick={() => setIsMobileMenuOpen(false)} className={`block w-full text-center ${navLinkClass}`}>
                    {item.name}
                  </Link>
                )
              )}
              <button
                type="button"
                onClick={() => { setIsMentorModalOpen(true); setIsMobileMenuOpen(false); }}
                className="w-full rounded-2xl font-semibold text-base py-4 px-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all border border-teal-400/50"
              >
                Join as a Mentor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <MentorFormModal isOpen={isMentorModalOpen} onClose={() => setIsMentorModalOpen(false)} />
    </header>
  );
};

export default Header;
