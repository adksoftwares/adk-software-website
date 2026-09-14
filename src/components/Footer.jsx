import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-neutral-400 pt-20 pb-12 border-t border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.07]">
          
          {/* Brand Column */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-5 inline-flex group">
                <img 
                  src="/logo.png" 
                  alt="ADK Software Solutions Logo" 
                  className="h-7 w-auto object-contain transition-transform group-hover:scale-105" 
                />
                <div className="flex flex-col">
                  <span className="font-bold text-lg text-white leading-none tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ADK</span>
                  <span className="text-[9px] text-[#ccff00] font-mono tracking-[0.2em] uppercase mt-0.5">Software Solutions</span>
                </div>
              </Link>
              <p className="text-neutral-400 text-sm max-w-md leading-relaxed mt-2 font-normal">
                Boutique engineering agency building resilient point-of-sale platforms, native mobile applications, and bespoke automated workflow engines.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Operating Worldwide from Kandy, Sri Lanka
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-white mb-5 font-semibold">Index</h4>
            <ul className="space-y-3 font-normal text-sm">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Networks */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-white mb-5 font-semibold">Network</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-[#ccff00] transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight size={13} className="text-neutral-600 group-hover:text-[#ccff00] transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/adksoftwares" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-[#ccff00] transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={13} className="text-neutral-600 group-hover:text-[#ccff00] transition-colors" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@adksoftwares.com" 
                  className="text-neutral-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span>contact@adksoftwares.com</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with exact requested copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-neutral-500">
          <p>© 2026 ADK Software Solutions. Engineered for reality.</p>
          <div className="flex gap-6">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Security Audited</span>
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">Continuous Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
