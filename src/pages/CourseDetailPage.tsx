import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, CheckCircle, Play, Download, Share2 } from 'lucide-react';
import PaymentSuccessModal from '../components/PaymentSuccessModal';
import PaymentErrorModal from '../components/PaymentErrorModal';

// Declare Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const CourseDetailPage: React.FC = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const course = {
    id: 1,
    title: 'AI upskill Workshop',
    description: 'Master the fundamentals of AI and build real-world applications that will transform your career. This comprehensive workshop covers everything from basic concepts to advanced implementations.',
    duration: '7 Days',
    price: '₹499',
    originalPrice: '₹999',
    rating: 4.9,
    students: 10000,
    level: 'All Levels',
    instructor: 'Chaitanya',
    instructorTitle: 'Senior AI Engineer at Google',
    features: [
      'Hands-on Projects with Real Data',
      'Expert Mentorship from Industry Leaders',
      'Professional Certificate upon Completion',
      'Lifetime Access to Workshop Materials',
      'Active Community Support',
      'Job Placement Assistance'
    ],
    curriculum: [
      {
        week: 1,
        title: 'Introduction to AI',
        topics: ['AI Fundamentals', 'Machine Learning Overview', 'Setting up Development Environment']
      },
      {
        week: 2,
        title: 'Deep Learning & Neural Networks',
        topics: ['Neural Network Architecture', 'Training Models', 'Optimization Techniques']
      },
      {
        week: 3,
        title: 'Natural Language Processing',
        topics: ['Text Processing', 'Language Models', 'Chatbot Development']
      },
      {
        week: 4,
        title: 'Computer Vision',
        topics: ['Image Processing', 'Object Detection', 'Image Classification']
      },
      {
        week: 5,
        title: 'Real-world Applications',
        topics: ['Project Development', 'Deployment Strategies', 'Performance Optimization']
      }
    ],
    reviews: [
      {
        id: 1,
        name: 'Michael Chen',
        rating: 5,
        comment: 'This workshop completely transformed my understanding of AI. The hands-on projects were invaluable.',
        date: '2 weeks ago'
      },
      {
        id: 2,
        name: 'Emily Rodriguez',
        rating: 5,
        comment: 'Excellent content and amazing support from the instructors. Highly recommended!',
        date: '1 month ago'
      },
      {
        id: 3,
        name: 'David Kim',
        rating: 5,
        comment: 'The practical approach and real-world projects made all the difference. Worth every penny!',
        date: '3 weeks ago'
      }
    ]
  };

  // Load Razorpay script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePayment = async () => {
    setIsProcessingPayment(true);
    
    // In production, you would make an API call to your backend to create an order
    // For now, using a mock implementation
    const amount = 49900; // ₹499 in paise
    const currency = 'INR';

    // Get Razorpay key from environment variables
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
    
    if (!razorpayKey) {
      console.error('❌ Razorpay key not found in .env file');
      setErrorMessage('Payment gateway configuration error. Please contact support.');
      setIsProcessingPayment(false);
      setShowErrorModal(true);
      return;
    }
    
    const finalKey = razorpayKey;

    const options = {
      key: finalKey,
      amount: amount,
      currency: currency,
      name: 'Learn.Nhancio',
      description: `Payment for ${course.title}`,
      image: '/logos/Nhancio-logo.png',
      order_id: undefined, // Will be set by backend
      handler: function (response: any) {
        // Handle successful payment
        console.log('Payment successful:', response);
        setIsProcessingPayment(false);
        setShowSuccessModal(true);
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        address: 'Learn.Nhancio Workshop Purchase',
      },
      theme: {
        color: '#14b8a6',
      },
      modal: {
        ondismiss: function() {
          setIsProcessingPayment(false);
        },
        animation: true,
      },
      config: {
        display: {
          blocks: {
            banks: {
              name: 'All payment methods',
              instruments: [
                {
                  method: 'card',
                },
                {
                  method: 'netbanking',
                },
                {
                  method: 'wallet',
                },
                {
                  method: 'upi',
                },
              ],
            },
          },
          sequence: ['block.banks'],
          preferences: {
            show_default_blocks: true,
          },
        },
      },
    };

    try {
      // Check if Razorpay is loaded
      if (window.Razorpay) {
        console.log('Opening Razorpay checkout...');
        const razorpay = new window.Razorpay(options);
        razorpay.on('payment.failed', function (response: any) {
          console.error('Payment failed:', response.error);
          const errorMsg = response.error?.description || response.error?.reason || 'Payment could not be processed. Please try again.';
          setErrorMessage(errorMsg);
          setIsProcessingPayment(false);
          setShowErrorModal(true);
        });
        razorpay.open();
      } else {
        console.error('Razorpay SDK not loaded. Waiting for script to load...');
        alert('Payment gateway is loading. Please wait a moment and try again.');
        setIsProcessingPayment(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      const errorMsg = error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.';
      setErrorMessage(errorMsg);
      setIsProcessingPayment(false);
      setShowErrorModal(true);
    }
  };

  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Workshop Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Workshop Info */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {course.description}
              </p>
              
              {/* Workshop Stats */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-gray-900 font-medium">{course.rating}</span>
                  <span className="text-gray-600">({course.students} students)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <span className="text-gray-600">{course.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-teal-500" />
                  <span className="text-gray-600">{course.students.toLocaleString()} enrolled</span>
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">{course.instructor}</div>
                  <div className="text-gray-600">{course.instructorTitle}</div>
                </div>
              </div>
            </div>

            {/* Workshop Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 line-through mb-1">{course.originalPrice}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{course.price}</div>
                  <div className="text-gray-600">One-time payment</div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessingPayment}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-200 mb-3 sm:mb-4 flex items-center justify-center space-x-2 min-h-[44px] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessingPayment ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Buy Now - ₹499</span>
                    </>
                  )}
                </button>

                <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 mb-3 sm:mb-4 flex items-center justify-center space-x-2 min-h-[44px] text-sm sm:text-base">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Download Syllabus</span>
                </button>

                <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-2 min-h-[44px] text-sm sm:text-base">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Share Workshop</span>
                </button>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="text-gray-900 font-semibold mb-3">What's included:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Workshop Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Workshop Curriculum</h2>
          <div className="space-y-4">
            {course.curriculum.map((week) => (
              <div key={week.week} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Week {week.week}: {week.title}
                  </h3>
                  <span className="text-teal-600 font-medium">4 hours</span>
                </div>
                <ul className="space-y-2">
                  {week.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {course.reviews.map((review, reviewIndex) => (
              <div key={review.id || reviewIndex} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{review.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="text-gray-900 font-semibold">{review.name}</div>
                      <div className="text-gray-500 text-sm">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who have already upgraded their skills with our AI upskill workshop.
            </p>
            <button
              onClick={handlePayment}
              disabled={isProcessingPayment}
              className="bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessingPayment ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Processing Payment...</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Buy Now - ₹499</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Payment Success Modal */}
      <PaymentSuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />

      {/* Payment Error Modal */}
      <PaymentErrorModal 
        isOpen={showErrorModal} 
        onClose={() => setShowErrorModal(false)}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default CourseDetailPage;
