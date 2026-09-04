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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B132B]/95 backdrop-blur-md border-b border-blue-500/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="ADK Software Solutions Logo" 
              className="h-9 w-auto object-contain" 
            />
            <div className="flex flex-col">
              <span className="font-bold text-white leading-tight tracking-wide text-lg">ADK</span>
              <span className="text-[10px] sm:text-xs text-cyan-400 font-semibold tracking-widest uppercase">Software Solutions</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-cyan-400' 
                      : 'text-blue-100/70 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors"
            >
              Contact us
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-blue-100 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0B132B] border-b border-blue-500/20 overflow-hidden">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-cyan-400' 
                    : 'text-blue-100/70 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-blue-500/20 my-2"></div>
            <Link
              to="/contact"
              className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-center font-semibold transition-colors"
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
