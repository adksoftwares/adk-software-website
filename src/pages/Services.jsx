import { services } from '../data/services';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <section className="px-6 mb-20 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Services
        </h1>
        <p className="text-lg text-blue-200/60 leading-relaxed max-w-2xl">
          We develop custom software, mobile applications, and internal systems to replace manual workflows and support daily operations.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 border-t border-blue-500/10 pt-16">
        <div className="flex flex-col space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className="flex flex-col md:flex-row gap-4 md:gap-16 items-start">
              <div className="md:w-1/3">
                <span className="text-cyan-400 text-sm font-mono tracking-widest block mb-2">0{index + 1}</span>
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-blue-100/70 leading-relaxed text-lg mb-4">
                  {service.description}
                </p>
                <Link to="/contact" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors text-sm">
                  Discuss project &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
