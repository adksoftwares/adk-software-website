import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#070707]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Portfolio
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            A selection of projects where we have designed and built software to solve complex operational challenges.
          </p>
        </motion.div>

        <div className="space-y-16 border-t border-white/[0.06] pt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="flex flex-col md:flex-row gap-8 items-start border-b border-white/[0.06] pb-16 last:border-0 last:pb-0"
            >
              <div className="md:w-1/3 shrink-0">
                <div className="bg-[#111] border border-white/[0.06] overflow-hidden mb-4">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center text-neutral-500 font-bold text-xl bg-[#111]">
                      {project.title}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-[#ccff00] text-xs font-mono tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold text-white tracking-tight mb-3"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {project.title}
                </h3>

                <p className="text-neutral-400 leading-relaxed text-lg mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-neutral-500 text-sm">
                      {tag} {i < project.tags.length - 1 && '·'}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#ccff00] transition-colors text-sm font-semibold underline underline-offset-4 decoration-white/20"
                  >
                    View project details
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
