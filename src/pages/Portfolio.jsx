import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-200/60 leading-relaxed"
          >
            A selection of projects where we have engineered solutions that solve complex operational challenges.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial="initial" whileInView="whileInView" variants={fadeUp}
              className="group cursor-pointer"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="block aspect-video rounded-3xl bg-[#0B132B] border border-blue-400/10 mb-8 shadow-lg overflow-hidden relative group-hover:border-cyan-500/50 transition-colors p-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-3xl"></div>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700 rounded-2xl" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl z-0">
                    {project.title} Preview
                  </div>
                )}
              </a>
              
              <div className="px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-3 group-hover:text-cyan-400 transition-colors">
                  <h3 className="text-2xl font-bold text-white inline-flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-500/10 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-white transition-all z-10" title="View on GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                  )}
                </div>
                <p className="text-blue-100/60 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
