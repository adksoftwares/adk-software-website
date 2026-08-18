import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Zap } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const About = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent selection:bg-cyan-500/30">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-6"
          >
            About ADK
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-200/60 leading-relaxed"
          >
            Engineering Smarter Digital Solutions for modern businesses.
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
                ADK Software Solutions is a modern software development venture focused on building practical, high-performance digital tools for businesses and growing enterprises. We specialize in native Android applications, smart point-of-sale systems, custom web architectures, and business automation.
              </p>
              <p className="leading-relaxed">
                By combining analytical problem-solving with modern software technologies, ADK aims to create simple, efficient, and scalable digital solutions that help businesses streamline operations and grow.
              </p>
            </motion.div>
            
            <motion.div 
              initial="initial" whileInView="whileInView" variants={fadeUp}
              className="bg-[#151E3D] border border-blue-400/10 rounded-3xl p-10 lg:p-12 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <h3 className="text-2xl font-bold text-white mb-8">Founder</h3>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-cyan-500/20 shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.15)] overflow-hidden">
                   <img src="/founder.jpg" alt="S. Arikarran" className="w-full h-full object-cover object-[center_15%]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">S. Arikarran</h4>
                  <p className="text-cyan-400 font-medium mb-3">Founder & Software Developer</p>
                  <p className="text-xs font-semibold text-blue-300/50 uppercase tracking-wider mb-5 leading-relaxed">
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
            <h2 className="text-3xl font-bold text-white mb-4">Core Values</h2>
            <p className="text-blue-200/60">The principles that drive our engineering.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Purpose-Driven', desc: 'Every line of code is written to solve a real business problem.' },
              { icon: Lightbulb, title: 'Analytical Thinking', desc: 'Approaching challenges logically to design the most efficient solutions.' },
              { icon: Zap, title: 'High Performance', desc: 'Building software that is fast, reliable, and scales gracefully.' },
              { icon: Shield, title: 'Integrity', desc: 'Honest communication and transparent development processes.' }
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={i}
                  initial="initial" whileInView="whileInView" variants={fadeUp}
                  className="bg-[#1C2541] hover:bg-[#151E3D] transition-colors p-8 rounded-3xl shadow-sm border border-blue-400/10 text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <Icon size={24} />
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
