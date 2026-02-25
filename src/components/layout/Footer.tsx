import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/nhancio',
      color: 'text-[#0A66C2] hover:text-[#004182]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nhancio.ai/',
      color: 'text-[#E4405F] hover:text-[#c13584]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.055-3.346.115-4.577 1.952-4.864 4.616-.173 1.588-.238 3.163-.238 4.703 0 1.526.063 3.062.238 4.703.287 2.667 1.518 4.5 4.864 4.616 1.28.041 1.688.055 4.947.055 3.259 0 3.668-.014 4.948-.055 3.354-.115 4.581-1.952 4.869-4.616.173-1.588.238-3.163.238-4.703 0-1.526-.063-3.062-.238-4.703-.288-2.665-1.519-4.5-4.865-4.616-1.28-.04-1.688-.055-4.948-.055zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.403 0-4.381-1.958-4.381-4.382 0-2.403 1.978-4.381 4.381-4.381 2.404 0 4.381 1.978 4.381 4.381 0 2.424-1.978 4.382-4.381 4.382zm7.218-11.889c-.559 0-1.002.453-1.002 1.002 0 .559.443 1.002 1.002 1.002.559 0 1.002-.453 1.002-1.002 0-.549-.443-1.002-1.002-1.002z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@nhancioai',
      color: 'text-[#FF0000] hover:text-[#CC0000]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/917095288950',
      color: 'text-[#25D366] hover:text-[#20BD5A]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4">
              <img 
                src="/logos/Nhancio-logo.png" 
                alt="Nhancio Logo" 
                className="h-8 w-auto sm:h-10"
              />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                Learn.Nhancio
              </span>
            </div>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base max-w-md">
              Empowering future leaders in AI & Technology. Join our community of learners and innovators.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#workshops" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/#community" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#achievements" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                  Achievements
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@nhancio.com" className="text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm sm:text-base break-all">
                  hello@nhancio.com
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm sm:text-base">
                  Hyderabad, Telangana
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-500/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Learn.Nhancio. All rights reserved.
          </div>
                              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-end">
                      <Link to="/privacy" className="text-gray-500 hover:text-teal-600 text-xs sm:text-sm transition-colors duration-200">
                        Privacy Policy
                      </Link>
                      <Link to="/refund" className="text-gray-500 hover:text-teal-600 text-xs sm:text-sm transition-colors duration-200">
                        Refund Policy
                      </Link>
                      <Link to="/pricing" className="text-gray-500 hover:text-teal-600 text-xs sm:text-sm transition-colors duration-200">
                        Pricing Policy
                      </Link>
                      <Link to="/shipping" className="text-gray-500 hover:text-teal-600 text-xs sm:text-sm transition-colors duration-200">
                        Shipping Policy
                      </Link>
                      <Link to="/terms" className="text-gray-500 hover:text-teal-600 text-xs sm:text-sm transition-colors duration-200">
                        Terms of Service
                      </Link>
                    </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
