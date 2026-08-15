import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqs';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-slate-900 dark:text-white pr-4">
              {faq.question}
            </span>
            <ChevronDown 
              className={`text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-500' : ''}`} 
              size={20} 
            />
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
