import { motion } from 'framer-motion';
import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

const Services = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <section className="px-6 mb-20 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="text-lg text-blue-200/60 leading-relaxed max-w-2xl mx-auto"
        >
          We develop custom software, mobile applications, and internal systems to replace manual workflows and support daily operations.
        </motion.p>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            return (
              <motion.div 
                key={service.id}
                initial="initial" whileInView="whileInView" variants={fadeUp}
                className="bg-[#151E3D] p-8 lg:p-10 rounded-2xl border border-blue-500/10 hover:border-blue-500/30 transition-colors flex flex-col"
              >
                <div className="flex justify-between items-start mb-12">
                   <div className="w-10 h-10 bg-[#0A1128] border border-blue-500/10 rounded-lg flex items-center justify-center font-bold text-cyan-400">
                     0{index + 1}
                   </div>
                </div>
                
                <Link to="/contact" className="group inline-flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <ArrowRight size={20} className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                <p className="text-blue-100/70 leading-relaxed flex-grow">
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
