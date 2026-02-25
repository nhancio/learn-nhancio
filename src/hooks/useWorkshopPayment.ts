import { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const WORKSHOP_TITLE = 'AI upskill Workshop';
const AMOUNT_PAISE = 49900; // ₹499
const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

function loadRazorpayScript(): Promise<void> {
  if (typeof window !== 'undefined' && window.Razorpay) return Promise.resolve();
  const existing = document.querySelector(`script[src="${RAZORPAY_SCRIPT}"]`);
  if (existing) {
    return new Promise((resolve) => {
      const check = () => (window.Razorpay ? resolve() : setTimeout(check, 50));
      check();
    });
  }
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Razorpay'));
    document.body.appendChild(script);
  });
}

export function useWorkshopPayment() {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const scriptLoaded = useRef(false);

  useEffect(() => {
    loadRazorpayScript()
      .then(() => { scriptLoaded.current = true; })
      .catch(() => {});
  }, []);

  const handlePayment = async () => {
    setIsProcessingPayment(true);
    setErrorMessage('');

    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
    if (!razorpayKey || razorpayKey.trim() === '') {
      setErrorMessage('Payment gateway is not configured. Please set VITE_RAZORPAY_KEY_ID in .env and try again.');
      setIsProcessingPayment(false);
      setShowErrorModal(true);
      return;
    }

    try {
      await loadRazorpayScript();
    } catch {
      setErrorMessage('Payment gateway could not be loaded. Check your connection and try again.');
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
