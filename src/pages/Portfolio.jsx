import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeading from '../components/SectionHeading';

const Portfolio = () => {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Selected Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            A look at some of the digital solutions we've built.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 group hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-slate-100 dark:bg-slate-900 relative overflow-hidden flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent"></div>
                {/* Abstract Project Representation */}
                <div className="w-full h-full bg-white dark:bg-slate-950 rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col group-hover:scale-105 transition-transform duration-500">
                  <div className="h-8 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center px-3 gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  </div>
                  <div className="flex-1 p-4 flex flex-col gap-3">
                     <div className="h-4 w-1/3 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                     <div className="h-full bg-slate-50 dark:bg-slate-800 rounded-lg"></div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase block mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center text-sm font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <ExternalLink size={16} className="mr-2" /> View Project Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
