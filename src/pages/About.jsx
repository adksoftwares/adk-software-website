import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <div className="pt-10 pb-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About ADK Software Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Engineering Smarter Digital Solutions for modern businesses.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-slate-600 dark:text-slate-400"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
              <p>
                ADK Software Solutions is a modern software development venture focused on building practical, high-performance digital tools for businesses and growing enterprises. We specialize in native Android applications, smart point-of-sale systems, custom web architectures, and business automation.
              </p>
              <p>
                By combining analytical problem-solving with modern software technologies, ADK aims to create simple, efficient, and scalable digital solutions that help businesses streamline operations and grow.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Founder</h3>
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                   <span className="text-xl font-bold text-blue-600 dark:text-blue-400">SA</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">S. Arikarran</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Founder & Software Developer</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">B.Sc. in Biological Science (Reading)<br/>University of Peradeniya</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    "ADK Software Solutions was founded by S. Arikarran with a focus on combining analytical thinking, technology, and practical problem-solving to create useful digital solutions for businesses."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section>
          <SectionHeading title="Our Core Values" subtitle="What Drives Us" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
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
