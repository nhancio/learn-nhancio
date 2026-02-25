import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Replace with your actual Google Form URL
const MENTOR_APPLICATION_FORM_URL = 'https://docs.google.com/forms/d/e/your-form-id/viewform';

const mentorDomains = [
  'Software Engineering',
  'Artificial Intelligence (AI)',
  'Machine Learning (ML)',
  'DevOps',
  'Networking',
  'UI Design',
  'UX Design',
  'Research',
];

const JoinAsMentorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Become a Mentor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Mentorship quality directly shapes learner outcomes. We are selective about who joins our mentor community because we believe in depth, clarity, and real-world impact—not hype. Great mentors don’t just teach; they guide, challenge, and help learners build lasting skills.
          </motion.p>
          <motion.a
            href={MENTOR_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-teal-500/25"
          >
            Join as a Mentor
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>

      {/* Who We Are Looking For */}
      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center"
          >
            Who We Are Looking For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-10 max-w-2xl mx-auto"
          >
            Our primary focus is <strong className="text-gray-900">Technical Mentors</strong> who can guide hands-on learners with clarity and real-world perspective.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
          >
            {mentorDomains.map((domain, i) => (
              <div
                key={domain}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{domain}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What we evaluate</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                Experience depth and practical exposure in your domain
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                Ability to guide hands-on learners through projects and real problems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                Communication clarity and teaching style
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-0.5">•</span>
                Real-world project exposure and systems-level thinking
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Mentorship Philosophy */}
      <section className="py-14 sm:py-20 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
          >
            Our Mentorship Philosophy
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 text-lg leading-relaxed"
          >
            <p>
              We value <strong className="text-gray-900">depth over hype</strong>. Our programs focus on real-world execution and practical implementation, not theory-only teaching. We believe the best learning happens when learners build, ship, and iterate—with a mentor who has been there.
            </p>
            <p>
              We screen for <strong className="text-gray-900">technical maturity</strong>, <strong className="text-gray-900">problem-solving depth</strong>, and <strong className="text-gray-900">teaching clarity</strong>. Our mentors are practitioners first: they bring current industry context, production experience, and systems-level thinking to every session.
            </p>
            <p>
              If you share this philosophy and want to help the next generation of builders and engineers, we’d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Ready to make an impact as a mentor?
          </motion.p>
          <motion.a
            href={MENTOR_APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 w-full sm:w-auto justify-center bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 shadow-lg"
          >
            Join as a Mentor
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default JoinAsMentorPage;
