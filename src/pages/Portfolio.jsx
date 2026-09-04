import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-blue-200/60 leading-relaxed"
          >
            A selection of projects where we have designed and built software to solve complex operational challenges.
          </motion.p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial="initial" whileInView="whileInView" variants={fadeUp}
              className="group grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className={`order-2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-md bg-[#151E3D] border border-blue-500/20 text-cyan-400 text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-blue-100/70 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>

                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#151E3D] hover:bg-[#1C2852] border border-blue-500/20 text-white rounded-lg transition-colors font-medium">
                    View project details <ArrowUpRight size={18} className="text-cyan-400" />
                  </a>
                )}
              </div>

              <div className={`order-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="block aspect-[4/3] rounded-2xl bg-[#0A1128] border border-blue-500/10 overflow-hidden relative">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-blue-100/20 font-bold text-xl">
                      {project.title}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
