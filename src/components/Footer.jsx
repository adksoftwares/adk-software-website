import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#060B19] text-blue-200/50 pt-24 pb-12 border-t border-blue-500/10 selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
                <img 
                  src="/logo.png" 
                  alt="ADK Software Solutions Logo" 
                  className="h-8 w-auto object-contain transform group-hover:scale-105 transition-transform" 
                />
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-xl text-white leading-none tracking-wide mb-1">ADK</span>
                  <span className="text-xs text-cyan-400 font-semibold tracking-widest uppercase leading-none">Software Solutions</span>
                </div>
              </Link>
              <h2 className="text-2xl md:text-3xl font-bold text-white max-w-sm leading-tight">
                Engineering <br/>smarter digital solutions.
              </h2>
            </div>
            
            <div className="mt-12 lg:mt-0 flex gap-6">
              <a href="#" className="hover:text-white transition-colors text-sm font-medium">X / Twitter</a>
              <a href="#" className="hover:text-white transition-colors text-sm font-medium">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors text-sm font-medium">GitHub</a>
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

        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} ADK Software Solutions.
          </p>
          <div className="flex space-x-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
