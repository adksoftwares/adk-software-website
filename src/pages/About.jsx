import { Target, Lightbulb, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const About = () => {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-[#0a0a0a]">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div
          className="mb-20 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Company
          </h1>
          <p className="text-xl text-neutral-400 leading-relaxed border-l-2 border-amber-400/30 pl-4">
            We build practical digital products and business systems that help organizations run more efficiently.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 border-t border-white/[0.06] pt-16 mb-24">
          <motion.div
            className="lg:col-span-7 space-y-6 text-lg text-neutral-400"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <h2
              className="text-2xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Our Story
            </h2>
            <p className="leading-relaxed">
              ADK Software Solutions is a software development company focused on building practical, high-performance digital tools for businesses and growing enterprises. We specialize in native Android applications, smart point-of-sale systems, custom web architectures, and business automation.
            </p>
            <p className="leading-relaxed">
              By combining analytical problem-solving with modern software technologies, we aim to create simple, efficient, and scalable digital solutions that help businesses streamline operations and grow.
            </p>
          </motion.div>
          
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <div className="bg-[#141414] border border-white/[0.06] p-8">
              <h2
                className="text-xl font-bold text-white mb-8 border-b border-white/[0.06] pb-4 tracking-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Founder
              </h2>
              <div className="flex gap-6 items-start">
                <div className="w-24 border border-white/[0.06] overflow-hidden bg-[#0a0a0a] shrink-0">
                   <img src="/founder.jpg" alt="S. Arikarran" className="w-full h-auto" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">S. Arikarran</h4>
                  <p className="text-amber-400 font-medium text-sm mb-3">Software Developer</p>
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4 leading-relaxed">
                    B.Sc. in Biological Science<br/>University of Peradeniya
                  </p>
                </div>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mt-6 italic border-l-2 border-amber-400/30 pl-4">
                "Founded with a focus on combining analytical thinking, technology, and practical problem-solving to create useful digital solutions for businesses."
              </p>
            </div>
          </motion.div>
        </div>

        <motion.section
          className="border-t border-white/[0.06] pt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <div className="mb-12 max-w-2xl">
            <h2
              className="text-2xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Engineering Principles
            </h2>
            <p className="text-neutral-500 text-lg">How we approach software development.</p>
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
                  className="bg-[#141414] border border-white/[0.06] p-6"
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="w-10 h-10 bg-[#0a0a0a] border border-white/[0.06] rounded-lg flex items-center justify-center text-amber-400 mb-6">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-neutral-400 leading-relaxed text-sm">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default About;
