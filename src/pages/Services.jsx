import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Services = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <section className="px-6 lg:px-8 mb-20 max-w-7xl mx-auto">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="text-amber-400 font-medium text-sm tracking-[0.2em] uppercase mb-4"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-6"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Services
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="text-lg text-neutral-400 leading-relaxed max-w-2xl"
        >
          We develop custom software, mobile applications, and internal systems to replace manual workflows and support daily operations.
        </motion.p>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 border-t border-white/[0.06] pt-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
                whileHover={{ y: -4 }}
                className="group flex flex-col bg-[#141414] border border-white/[0.06] hover:border-amber-500/30 transition-colors rounded-xl p-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 bg-[#0a0a0a] border border-white/[0.06] rounded-lg flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 transition-colors">
                    {Icon && <Icon size={24} strokeWidth={1.5} />}
                  </div>
                  <span className="text-neutral-500 text-sm font-mono font-bold tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-white tracking-tight mb-4"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {service.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed text-base flex-grow mb-8">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm font-semibold text-white group-hover:text-amber-400 transition-colors mt-auto w-fit border-b border-transparent group-hover:border-amber-400 pb-0.5"
                >
                  Discuss project <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
