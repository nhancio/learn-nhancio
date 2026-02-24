import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, CreditCard, Shield, Info } from 'lucide-react';

const PricingPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-16 px-2"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Pricing Policy
          </h1>
          <p className="text-base sm:text-xl text-gray-600">
            Last updated: January 2024
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-4 sm:p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">1. Course Pricing</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
              <p>Our pricing is transparent and designed to provide maximum value for your investment in education:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AI upskill Workshop:</strong> ₹499 (one-time payment)</li>
                <li>All prices are in Indian Rupees (INR)</li>
                <li>Prices are inclusive of all applicable taxes</li>
                <li>No hidden fees or additional charges</li>
                <li>Lifetime access to course materials</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Payment Methods</h2>
            <div className="space-y-4 text-gray-600">
              <p>We accept the following payment methods through Razorpay:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Credit/Debit Cards (Visa, MasterCard, American Express, RuPay)</li>
                <li>Digital Wallets (Google Pay, PhonePe, Paytm, BHIM UPI)</li>
                <li>UPI Payments</li>
                <li>Net Banking (All major banks)</li>
                <li>EMI options available through Razorpay</li>
              </ul>
              <p>All payments are processed securely through Razorpay, India's leading payment gateway.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing Guarantee</h2>
            <div className="space-y-4 text-gray-600">
              <p>We are committed to providing the best value for your money:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Competitive pricing in the market</li>
                <li>No price discrimination based on location</li>
                <li>Transparent pricing with no hidden costs</li>
                <li>Value-driven education at affordable rates</li>
                <li>Regular updates and improvements included in the price</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. What's Included</h2>
            <div className="space-y-4 text-gray-600">
              <p>Your course fee includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Complete course content and materials</li>
                <li>Lifetime access to all course resources</li>
                <li>Expert mentorship and support</li>
                <li>Certificate of completion</li>
                <li>Community access and networking</li>
                <li>Regular content updates and improvements</li>
                <li>Technical support throughout the course</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Price Changes</h2>
            <div className="space-y-4 text-gray-600">
              <p>We reserve the right to modify our pricing structure:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Price changes will be communicated in advance</li>
                <li>Existing students will not be affected by price increases</li>
                <li>Special discounts may be offered from time to time</li>
                <li>Early bird pricing may be available for new courses</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Information</h2>
            <div className="space-y-4 text-gray-600">
              <p>If you have any questions about our pricing, please contact us:</p>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p><strong>Email:</strong> hello@nhancio.com</p>
                <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-green-500/10 border border-green-500/30 p-6 rounded-lg">
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">
                  We believe in complete transparency in our pricing. What you see is what you pay - no hidden fees, 
                  no surprise charges. Your investment in education should be clear and straightforward.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPolicyPage;
