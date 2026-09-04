import { Target, Lightbulb, Zap, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-[#0B132B]">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Company
          </h1>
          <p className="text-xl text-blue-100/70 leading-relaxed border-l-2 border-cyan-500 pl-4">
            We build practical digital products and business systems that help organizations run more efficiently.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 border-t border-blue-500/10 pt-16 mb-24">
          <div className="lg:col-span-7 space-y-6 text-lg text-blue-100/70">
            <h2 className="text-2xl font-bold text-white mb-6">Our Story</h2>
            <p className="leading-relaxed">
              ADK Software Solutions is a software development company focused on building practical, high-performance digital tools for businesses and growing enterprises. We specialize in native Android applications, smart point-of-sale systems, custom web architectures, and business automation.
            </p>
            <p className="leading-relaxed">
              By combining analytical problem-solving with modern software technologies, we aim to create simple, efficient, and scalable digital solutions that help businesses streamline operations and grow.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="bg-[#101835] border border-blue-500/20 rounded-xl p-8">
              <h2 className="text-xl font-bold text-white mb-8 border-b border-blue-500/10 pb-4">Founder</h2>
              <div className="flex gap-6 items-start">
                <div className="w-24 rounded-lg border border-blue-500/20 overflow-hidden bg-[#0A1128] shrink-0">
                   <img src="/founder.jpg" alt="S. Arikarran" className="w-full h-auto grayscale hover:grayscale-0 transition-all" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">S. Arikarran</h4>
                  <p className="text-cyan-400 font-medium text-sm mb-3">Software Developer</p>
                  <p className="text-xs font-medium text-blue-300/50 uppercase tracking-wider mb-4 leading-relaxed">
                    B.Sc. in Biological Science<br/>University of Peradeniya
                  </p>
                </div>
              </div>
              <p className="text-blue-100/60 text-sm leading-relaxed mt-6 italic">
                "Founded with a focus on combining analytical thinking, technology, and practical problem-solving to create useful digital solutions for businesses."
              </p>
            </div>
          </div>
        </div>

        <section className="border-t border-blue-500/10 pt-16">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-4">Engineering Principles</h2>
            <p className="text-blue-200/60 text-lg">How we approach software development.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Practical Output', desc: 'We write code to solve real business problems, not just to build features.' },
              { icon: Lightbulb, title: 'Analytical Thinking', desc: 'We map out the logical constraints before writing a single line of code.' },
              { icon: Zap, title: 'Performance', desc: 'Software must be fast and reliable under actual business conditions.' },
              { icon: Shield, title: 'Integrity', desc: 'Clear communication, clean code, and transparent development cycles.' }
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-[#101835] border border-blue-500/20 rounded-xl p-6">
                  <div className="w-10 h-10 bg-[#0B132B] border border-blue-500/20 rounded-lg flex items-center justify-center text-cyan-400 mb-6">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-blue-100/60 leading-relaxed text-sm">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
