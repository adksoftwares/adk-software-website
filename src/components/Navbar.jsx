import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Company', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.06] py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="ADK Software Solutions Logo" 
              className="h-8 w-auto object-contain" 
            />
            <div className="flex flex-col">
              <span className="font-bold text-white leading-tight tracking-wide text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ADK</span>
              <span className="text-[10px] sm:text-xs text-amber-400 font-medium tracking-[0.15em] uppercase">Software Solutions</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? 'text-white' 
                      : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-colors"
            >
              Contact us
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/[0.06] overflow-hidden">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-white' 
                    : 'text-neutral-500 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/[0.06] my-2"></div>
            <Link
              to="/contact"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black text-center font-semibold transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
