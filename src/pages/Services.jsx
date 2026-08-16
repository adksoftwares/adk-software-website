import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const Services = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent selection:bg-cyan-500/30">
      <section className="px-6 mb-24 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial="initial" animate="whileInView" variants={fadeUp}
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Capabilities
        </motion.h1>
        <motion.p 
          initial="initial" animate="whileInView" variants={fadeUp}
          className="text-xl text-blue-200/60 font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Software solutions built around your business. We develop customized architectures designed to simplify workflows and accelerate growth.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div 
                key={service.id}
                initial="initial" whileInView="whileInView" variants={fadeUp}
                className="bg-[#151E3D] hover:bg-[#1C2541] p-10 lg:p-14 rounded-3xl border border-blue-400/10 hover:border-cyan-500/30 transition-all duration-300 group flex flex-col shadow-lg"
              >
                <div className="flex justify-between items-start mb-16">
                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center font-bold text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                     0{index + 1}
                   </div>
                </div>
                
                <Link to="/contact" className="group/heading inline-flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-white tracking-tight group-hover/heading:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight size={24} className="text-cyan-400 opacity-0 group-hover/heading:opacity-100 -rotate-45 transform transition-all duration-300 group-hover/heading:translate-x-1 group-hover/heading:-translate-y-1" />
                </Link>
                
                <p className="text-blue-100/60 text-lg leading-relaxed flex-grow">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
