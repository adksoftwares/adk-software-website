import { projects } from '../data/projects';

const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-blue-200/60 leading-relaxed max-w-2xl">
            A selection of projects where we have designed and built software to solve complex operational challenges.
          </p>
        </div>

        <div className="space-y-16 border-t border-blue-500/10 pt-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="flex flex-col md:flex-row gap-8 items-start border-b border-blue-500/10 pb-16 last:border-0 last:pb-0"
            >
              <div className="md:w-1/3 shrink-0">
                <div className="bg-[#0A1128] border border-blue-500/10 overflow-hidden mb-4">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover grayscale-[40%] hover:grayscale-0 transition-all" />
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center text-blue-100/20 font-bold text-xl bg-[#0A1128]">
                      {project.title}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-cyan-400 text-xs font-mono tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-blue-100/70 leading-relaxed text-lg mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-blue-200/50 text-sm">
                      {tag} {i < project.tags.length - 1 && '·'}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors text-sm font-semibold underline decoration-blue-500/30 underline-offset-4">
                    View project details
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
