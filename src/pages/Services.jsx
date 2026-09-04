import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <section className="px-6 mb-20 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Services
        </h1>
        <p className="text-lg text-blue-100/70 leading-relaxed max-w-2xl border-l-2 border-cyan-500 pl-4">
          We develop custom software, mobile applications, and internal systems to replace manual workflows and support daily operations.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 border-t border-blue-500/10 pt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                className="group flex flex-col bg-[#101835] border border-blue-500/20 hover:border-cyan-500/50 hover:bg-[#151E3D] transition-colors rounded-xl p-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-[#0B132B] border border-blue-500/20 rounded-lg flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  <span className="text-blue-200/30 text-sm font-mono font-bold tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-blue-100/60 leading-relaxed text-base flex-grow mb-8">
                  {service.description}
                </p>

                <Link to="/contact" className="inline-flex items-center text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors mt-auto w-fit border-b border-transparent group-hover:border-cyan-400 pb-0.5">
                  Discuss project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
