import { useState, useEffect } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const WORKSHOP_TITLE = 'AI upskill Workshop';
const AMOUNT_PAISE = 49900; // ₹499

export function useWorkshopPayment() {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    setIsProcessingPayment(true);
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      setErrorMessage('Payment gateway configuration error. Please contact support.');
      setIsProcessingPayment(false);
      setShowErrorModal(true);
      return;
    }
    const options = {
      key: razorpayKey,
      amount: AMOUNT_PAISE,
      currency: 'INR',
      name: 'Learn.Nhancio',
      description: `Payment for ${WORKSHOP_TITLE}`,
      image: '/logos/Nhancio-logo.png',
      order_id: undefined as string | undefined,
      handler: function () {
        setIsProcessingPayment(false);
        setShowSuccessModal(true);
      },
      prefill: { name: '', email: '', contact: '' },
      notes: { address: 'Learn.Nhancio Workshop Purchase' },
      theme: { color: '#14b8a6' },
      modal: {
        ondismiss: function () {
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
                { method: 'card' },
                { method: 'netbanking' },
                { method: 'wallet' },
                { method: 'upi' },
              ],
            },
          },
          sequence: ['block.banks'],
          preferences: { show_default_blocks: true },
        },
      },
    };
    try {
      if (window.Razorpay) {
        const razorpay = new window.Razorpay(options);
        razorpay.on('payment.failed', function (response: any) {
          const errorMsg =
            response.error?.description ||
            response.error?.reason ||
            'Payment could not be processed. Please try again.';
          setErrorMessage(errorMsg);
          setIsProcessingPayment(false);
          setShowErrorModal(true);
        });
        razorpay.open();
      } else {
        setErrorMessage('Payment gateway is loading. Please wait a moment and try again.');
        setIsProcessingPayment(false);
        setShowErrorModal(true);
      }
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.'
      );
      setIsProcessingPayment(false);
      setShowErrorModal(true);
    }
  };

  return {
    handlePayment,
    isProcessingPayment,
    showSuccessModal,
    setShowSuccessModal,
    showErrorModal,
    setShowErrorModal,
    errorMessage,
  };
}
