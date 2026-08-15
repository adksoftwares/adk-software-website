import { motion } from 'framer-motion';
import { technologies } from '../data/technologies';
import SectionHeading from '../components/SectionHeading';
import { Layers, Monitor, Server, Database } from 'lucide-react';

const icons = {
  "Mobile": Monitor,
  "Web": Layers,
  "Backend": Server,
  "Database": Database
};

const Technology = () => {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 mb-16 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Technologies We Work With
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            We use modern, reliable, and scalable technologies to build high-performance software solutions.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((techGroup, index) => {
            const Icon = icons[techGroup.category] || Layers;
            return (
              <motion.div 
                key={techGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-10 border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-700">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{techGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {techGroup.items.map(item => (
                    <div 
                      key={item} 
                      className="px-4 py-2 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-medium rounded-lg border border-slate-200 dark:border-slate-700 flex items-center shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Technology;
