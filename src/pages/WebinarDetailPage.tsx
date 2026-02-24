import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, User, ArrowRight, ExternalLink } from 'lucide-react';
import { webinars } from '../data/webinars';

const WebinarDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const webinar = webinars.find((w) => w.slug === slug);

  if (!webinar) {
    return (
      <div className="min-h-screen py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Webinar not found</h1>
        <Link to="/#workshops" className="text-teal-600 hover:underline">
          Back to Workshops
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Name / Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="aspect-video rounded-2xl overflow-hidden mb-8 border border-teal-500/20">
            <img
              src={webinar.image}
              alt={webinar.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {webinar.name}
          </h1>
          <p className="text-lg text-gray-600">{webinar.shortDescription}</p>
        </motion.div>

        {/* What is the content */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is the content of the webinar</h2>
          <ul className="space-y-3">
            {webinar.content.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* What do you get */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What do you get</h2>
          <ul className="space-y-3">
            {webinar.whatYouGet.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Mentor Info */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Mentor Info</h2>
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={webinar.mentor.image}
              alt={webinar.mentor.name}
              className="w-24 h-24 rounded-full object-cover border-2 border-teal-500/30"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                {webinar.mentor.name}
                {webinar.mentor.linkedin && (
                  <a
                    href={webinar.mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 hover:text-teal-300"
                    aria-label="LinkedIn"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </h3>
              <p className="text-teal-400 font-medium mb-2">{webinar.mentor.title}</p>
              <p className="text-gray-600">{webinar.mentor.bio}</p>
            </div>
          </div>
        </motion.section>

        {/* Apply Now -> payment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-center">
            <p className="text-teal-800 text-lg mb-4">
              Ready to join? Complete your registration and payment to secure your slot.
            </p>
            <p className="text-gray-900 text-2xl font-bold mb-6">{webinar.price}</p>
            <Link
              to={webinar.paymentLink}
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-teal-700 text-sm mt-4">
              You will be redirected to the payment page.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default WebinarDetailPage;
