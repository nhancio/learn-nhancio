import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Zap, Play } from 'lucide-react';
import PaymentSuccessModal from '../components/PaymentSuccessModal';
import PaymentErrorModal from '../components/PaymentErrorModal';

// Declare Razorpay types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const CoursesPage: React.FC = () => {
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
    features: ['Hands-on Projects', 'Expert Mentorship', 'Certificate', 'Lifetime Access'],
    image: '/api/placeholder/400/250',
    category: 'AI & ML'
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
    
    // Debug: Log environment variable (remove in production)
    console.log('Razorpay Key Check:', {
      hasKey: !!razorpayKey,
      keyLength: razorpayKey?.length || 0,
      envKeys: Object.keys(import.meta.env).filter(k => k.includes('RAZOR'))
    });
    
    // Use fallback test key if not configured (for development/testing only)
    // For production, always use the key from .env file
    const finalKey = razorpayKey || 'rzp_test_1DP5mmOlF5G5ag';
    
    if (!razorpayKey) {
      console.warn('⚠️ Razorpay key not found in .env. Using fallback test key for development.');
      console.warn('Please add VITE_RAZORPAY_KEY_ID=your_key_here to your .env file');
    } else {
      console.log('✅ Razorpay key loaded successfully');
    }

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
        color: '#3b82f6',
      },
      modal: {
        ondismiss: function() {
          setIsProcessingPayment(false);
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16 px-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Workshop
          </h1>
          <p className="text-base sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your career with our comprehensive AI upskill workshop
          </p>
        </motion.div>

        {/* Workshop Card */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-800 rounded-lg overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 max-w-4xl w-full"
          >
            {/* Workshop Image */}
            <div className="h-80 bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center relative">
              <div className="text-center">
                <Zap className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">{course.description}</p>
              </div>
              <div className="absolute top-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {course.category}
              </div>
            </div>

            {/* Workshop Content */}
            <div className="p-8">

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4">What you'll get:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-700 rounded-lg">
                <div className="text-center md:text-left">
                  <div className="text-sm text-gray-400 line-through mb-1">{course.originalPrice}</div>
                  <div className="text-4xl font-bold text-white mb-2">{course.price}</div>
                  <div className="text-green-400 text-sm font-medium">Limited Slots Available</div>
                </div>
                <div className="w-full md:w-auto">
                  <button
                    onClick={handlePayment}
                    disabled={isProcessingPayment}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-base sm:text-lg flex items-center justify-center space-x-2 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessingPayment ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Join Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Choose This Workshop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert-Led</h3>
              <p className="text-gray-300">Learn from IIT alumni and industry experts with real-world experience</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300">Join a community of 10,000+ learners and professionals</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-blue-500/20">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Practical</h3>
              <p className="text-gray-300">Hands-on projects that you can immediately apply in your work</p>
            </div>
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

export default CoursesPage;
