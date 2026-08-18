import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#0B132B] font-sans text-white relative">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
      
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/94723440137" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default Layout;
