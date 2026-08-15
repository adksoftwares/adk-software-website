import { motion } from 'framer-motion';
import FAQAccordion from '../components/FAQAccordion';

const FAQ = () => {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 mb-16 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services, products, and development process.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </div>
    </div>
  );
};

export default FAQ;
