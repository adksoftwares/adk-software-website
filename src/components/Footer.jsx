import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Code2 size={24} />
              </div>
              <span className="font-bold text-xl tracking-tight">ADK Software</span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
              Engineering Smarter Digital Solutions. We build practical, high-performance digital tools for businesses and growing enterprises.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">Fb</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">Tw</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">In</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">Ig</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm hover:text-blue-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Smart POS</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Android Apps</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Web Applications</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Business Automation</li>
              <li className="text-sm hover:text-blue-400 transition-colors cursor-pointer">Custom Software</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <span>hello@adksoftware.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <span>+94 (XX) XXX XXXX</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <span>Kandy, Sri Lanka</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ADK Software Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
