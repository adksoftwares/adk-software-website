const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About ADK
          </h1>
          <p className="text-xl text-blue-200/60 leading-relaxed">
            We build practical digital products and business systems.
          </p>
        </div>

        <section className="mb-24 flex flex-col md:flex-row gap-16 border-t border-blue-500/10 pt-16">
          <div className="md:w-1/2 space-y-6 text-lg text-blue-100/70">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <p className="leading-relaxed">
              ADK Software Solutions is a software development company focused on building practical, high-performance digital tools for businesses and growing enterprises. We specialize in native Android applications, smart point-of-sale systems, custom web architectures, and business automation.
            </p>
            <p className="leading-relaxed">
              By combining analytical problem-solving with modern software technologies, we aim to create simple, efficient, and scalable digital solutions that help businesses streamline operations and grow.
            </p>
          </div>
          
          <div className="md:w-1/2 border-l border-blue-500/10 pl-0 md:pl-16">
            <h2 className="text-2xl font-bold text-white mb-8">Founder</h2>
            <div className="flex flex-col gap-6">
              <div className="w-24 border border-blue-500/20 overflow-hidden bg-[#0A1128]">
                 <img src="/founder.jpg" alt="S. Arikarran" className="w-full h-auto grayscale hover:grayscale-0 transition-all" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">S. Arikarran</h4>
                <p className="text-cyan-400 font-medium mb-3">Software Developer</p>
                <p className="text-xs font-medium text-blue-300/50 uppercase tracking-wider mb-5 leading-relaxed">
                  B.Sc. in Biological Science (Reading)<br/>University of Peradeniya
                </p>
                <p className="text-blue-100/60 text-sm leading-relaxed border-l-2 border-cyan-500/50 pl-4 italic">
                  "Founded with a focus on combining analytical thinking, technology, and practical problem-solving to create useful digital solutions for businesses."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-blue-500/10 pt-16">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Engineering Principles</h2>
            <p className="text-blue-200/60">How we approach software development.</p>
          </div>
          
          <div className="space-y-10">
            {[
              { title: 'Practical Output', desc: 'We write code to solve real business problems, not just to build features.' },
              { title: 'Analytical Thinking', desc: 'We map out the logical constraints before writing a single line of code.' },
              { title: 'Performance', desc: 'Software must be fast and reliable under actual business conditions.' },
              { title: 'Integrity', desc: 'Clear communication, clean code, and transparent development cycles.' }
            ].map((value, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-blue-500/10 pb-10 last:border-0 last:pb-0">
                <h4 className="text-lg font-bold text-white md:w-1/3 shrink-0">{i + 1}. {value.title}</h4>
                <p className="text-blue-100/60 leading-relaxed md:w-2/3">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
