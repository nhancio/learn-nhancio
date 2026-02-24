import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Chaitanya',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'The AI upskill Workshop completely transformed how I approach product development. The hands-on projects were invaluable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
  },
  {
    id: 2,
    name: 'Nikhitha',
    role: 'Startup Founder',
    company: 'InnovateAI',
    content: 'AI upskill Workshop gave me the strategic insights I needed to scale my business. The peer network is incredible.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
  },
  {
    id: 3,
    name: 'Lavanya',
    role: 'Data Scientist',
    company: 'DataFlow',
    content: 'AI upskill Workshop helped me automate 80% of my daily tasks. The productivity gains are remarkable.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
  },
  {
    id: 4,
    name: 'Rahul',
    role: 'Software Engineer',
    company: 'TechStart',
    content: 'Best investment in my career. The mentors are top-notch and the content is immediately applicable at work.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
  },
  {
    id: 5,
    name: 'Priya',
    role: 'Marketing Lead',
    company: 'GrowthCo',
    content: 'I came in with zero AI experience. Now I use ChatGPT and automation daily. The workshop structure is perfect for busy professionals.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
  },
  {
    id: 6,
    name: 'Arjun',
    role: 'Consultant',
    company: 'McKinsey',
    content: 'Learn.Nhancio stands out for quality and practicality. Certificate is recognized and the community is very active.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
  },
];

const TestimonialsPage: React.FC = () => {
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
            Testimonials
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            What our students and professionals say about Learn.Nhancio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <Quote className="w-10 h-10 text-teal-200 mb-4" />
              <p className="text-gray-700 leading-relaxed mb-6">{t.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mt-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
