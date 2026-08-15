import { motion } from 'framer-motion';
import { services } from '../data/services';
import SectionHeading from '../components/SectionHeading';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 mb-16 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Software solutions built around your business. We develop customized software designed to simplify workflows and accelerate growth.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/contact" className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center">
                    Request this service <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
