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
    <div className="flex flex-col min-h-screen bg-[#070707] font-sans text-white relative selection:bg-[#ccff00] selection:text-black">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
      
      {/* Sleek Floating WhatsApp Quick Connect */}
      <a 
        href="https://wa.me/94723440137" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 bg-[#0d0d0d] hover:bg-[#141414] border border-white/10 hover:border-[#ccff00]/40 text-white hover:text-[#ccff00] p-3.5 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group backdrop-blur-xl"
        title="Direct Line via WhatsApp"
        aria-label="Direct Line via WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#ccff00] rounded-full animate-pulse" />
        <MessageCircle size={22} className="group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default Layout;
