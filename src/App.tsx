import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import PricingPolicyPage from './pages/PricingPolicyPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import WebinarDetailPage from './pages/WebinarDetailPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AchievementsPage from './pages/AchievementsPage';


// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/refund" element={<RefundPolicyPage />} />
              <Route path="/pricing" element={<PricingPolicyPage />} />
              <Route path="/shipping" element={<ShippingPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
              <Route path="/contactus" element={<ContactUsPage />} />
              <Route path="/workshops" element={<Navigate to="/#workshops" replace />} />
              <Route path="/webinar/:slug" element={<WebinarDetailPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/achievements" element={<AchievementsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#fff',
            color: '#0f172a',
            border: '1px solid #14b8a6',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;