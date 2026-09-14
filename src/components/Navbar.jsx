import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#070707]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="ADK Software Solutions Logo" 
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight leading-none" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ADK</span>
              <span className="text-[9px] text-[#ccff00] font-mono tracking-[0.2em] uppercase mt-0.5">Software Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-mono uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive 
                      ? 'text-[#ccff00]' 
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono uppercase tracking-[0.12em] font-semibold bg-[#ccff00] text-black hover:bg-white transition-all duration-200 shadow-sm"
            >
              <span>Discuss Project</span>
              <ArrowUpRight size={14} />
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#070707] border-b border-white/[0.08] px-6 py-8">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-mono uppercase tracking-[0.15em] transition-colors ${
                  location.pathname === link.path 
                    ? 'text-[#ccff00]' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/[0.08] my-2" />
            <Link
              to="/contact"
              className="w-full py-3 bg-[#ccff00] hover:bg-white text-black text-center font-mono text-xs uppercase tracking-[0.15em] font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <span>Discuss Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
