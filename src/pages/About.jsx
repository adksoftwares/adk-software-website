import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Zap } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About ADK
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xl text-blue-200/60 leading-relaxed"
          >
            We build practical digital products and business systems.
          </motion.p>
        </div>

        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="initial" whileInView="whileInView" variants={fadeUp}
              className="space-y-6 text-lg text-blue-100/70"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="leading-relaxed">
                ADK Software Solutions is a software development company focused on building practical, high-performance digital tools for businesses and growing enterprises. We specialize in native Android applications, smart point-of-sale systems, custom web architectures, and business automation.
              </p>
              <p className="leading-relaxed">
                By combining analytical problem-solving with modern software technologies, we aim to create simple, efficient, and scalable digital solutions that help businesses streamline operations and grow.
              </p>
            </motion.div>
            
            <motion.div 
              initial="initial" whileInView="whileInView" variants={fadeUp}
              className="bg-[#151E3D] border border-blue-500/10 rounded-2xl p-10 lg:p-12 relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold text-white mb-8">Founder</h3>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="w-20 sm:w-24 rounded-2xl border border-blue-500/20 shrink-0 overflow-hidden bg-[#0A1128]">
                   <img src="/founder.jpg" alt="S. Arikarran" className="w-full h-auto" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">S. Arikarran</h4>
                  <p className="text-cyan-400 font-medium mb-3">Founder & Software Developer</p>
                  <p className="text-xs font-medium text-blue-300/50 uppercase tracking-wider mb-5 leading-relaxed">
                    B.Sc. in Biological Science (Reading)<br/>University of Peradeniya
                  </p>
                  <p className="text-blue-100/60 text-sm leading-relaxed italic">
                    "Founded with a focus on combining analytical thinking, technology, and practical problem-solving to create useful digital solutions for businesses."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Engineering Principles</h2>
            <p className="text-blue-200/60">How we approach software development.</p>
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
                <motion.div 
                  key={i}
                  initial="initial" whileInView="whileInView" variants={fadeUp}
                  className="bg-[#151E3D] p-8 rounded-2xl border border-blue-500/10 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#0A1128] border border-blue-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-blue-100/60 leading-relaxed text-sm">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
