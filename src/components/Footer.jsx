import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#060B19] text-blue-200/60 pt-20 pb-10 border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
                <img 
                  src="/logo.png" 
                  alt="ADK Software Solutions Logo" 
                  className="h-8 w-auto object-contain" 
                />
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-xl text-white leading-none tracking-wide mb-1">ADK</span>
                  <span className="text-xs text-cyan-400 font-semibold tracking-widest uppercase leading-none">Software Solutions</span>
                </div>
              </Link>
              <p className="text-base text-blue-100/70 max-w-sm leading-relaxed mt-4">
                We build practical software, mobile applications, and business systems tailored to operational workflows.
              </p>
            </div>
            
            <div className="mt-12 lg:mt-0 flex gap-6">
              <a href="#" className="hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              <a href="https://github.com/adksoftwares" className="hover:text-white transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <h3 className="text-white font-medium mb-6 text-sm">Company</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-medium mb-6 text-sm">Offerings</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-sm hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/smartpos" className="text-sm hover:text-white transition-colors">SmartPOS Lanka</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-blue-500/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-blue-200/40">
            &copy; {new Date().getFullYear()} ADK Software Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
