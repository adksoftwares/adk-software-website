import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MonitorSmartphone, Code2, Layers, Zap, Layout } from 'lucide-react';
import { services } from '../data/services';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  whileInView: {
    transition: { staggerChildren: 0.1 }
  }
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900/90 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
              className="space-y-8"
            >
              <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                ADK Software Solutions
              </motion.div>
              <motion.h1 variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Engineering Smarter <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Solutions</span>
              </motion.h1>
              <motion.p variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                High-performance software solutions for modern businesses — from mobile applications and smart POS systems to custom web platforms and business automation.
              </motion.p>
              <motion.div variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/services" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
                  Explore Our Solutions
                </Link>
                <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-700 text-base font-medium rounded-lg text-white bg-slate-800/50 hover:bg-slate-800 transition-colors backdrop-blur-sm">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative rounded-2xl bg-slate-800 border border-slate-700 p-2 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                <div className="w-full h-full bg-slate-900 rounded-xl flex flex-col items-center justify-center border border-slate-700/50 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
                   <Code2 size={64} className="text-blue-500 mb-6 opacity-80" />
                   <div className="flex space-x-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="mt-8 w-3/4 space-y-3">
                     <div className="h-2 bg-slate-800 rounded w-full"></div>
                     <div className="h-2 bg-slate-800 rounded w-5/6"></div>
                     <div className="h-2 bg-slate-800 rounded w-4/6"></div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trusted Technology Strip */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            <span className="flex items-center gap-2"><MonitorSmartphone size={18}/> Smart POS</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2"><Zap size={18}/> Android Apps</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2"><Layout size={18}/> Web Applications</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">•</span>
            <span className="flex items-center gap-2"><Layers size={18}/> Business Automation</span>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Software Solutions Built Around Your Business" 
            subtitle="Our Services" 
          />
          <div className="text-center max-w-3xl mx-auto -mt-10 mb-16">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We develop customized software solutions designed around your actual business workflows to maximize efficiency and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  key={service.id} 
                  className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    Learn More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SmartPOS Lanka Featured Product */}
      <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl bg-slate-100 dark:bg-slate-900 p-8 flex items-center justify-center aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-[4/5] border border-slate-200 dark:border-slate-800">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent rounded-3xl"></div>
                 <div className="w-full max-w-sm bg-white dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 z-10 flex flex-col h-[500px]">
                    <div className="h-14 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 bg-slate-50 dark:bg-slate-900">
                       <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                       <div className="ml-3 font-semibold text-sm">SmartPOS Lanka</div>
                    </div>
                    <div className="flex-1 p-4 grid grid-cols-2 gap-3">
                       {[...Array(4)].map((_, i) => (
                         <div key={i} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3">
                           <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-2"></div>
                           <div className="h-2 w-1/2 bg-slate-300 dark:bg-slate-600 rounded"></div>
                         </div>
                       ))}
                    </div>
                    <div className="h-48 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-4">
                        <div className="w-full h-8 bg-blue-600 rounded-lg mb-2"></div>
                        <div className="w-full h-8 bg-slate-200 dark:bg-slate-800 rounded-lg"></div>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 mb-6">
                Featured Product
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Meet SmartPOS Lanka</h2>
              <h3 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">An All-in-One Mobile Retail POS</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                SmartPOS Lanka is designed to bring essential retail operations into a simple, mobile-first POS solution, helping businesses manage sales, products, inventory, and reporting more efficiently.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                {['Sales Management', 'Product Management', 'Inventory Management', 'Sales Reports', 'Receipt Management', 'Customer Management', 'Mobile-Friendly Interface', 'Business Insights'].map((feature) => (
                  <li key={feature} className="flex items-center text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/smartpos" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                  Explore SmartPOS Lanka
                </Link>
                <Link to="/contact" className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Request a Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose ADK? & Business Benefits */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technology With a Business Purpose" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Business-Focused', desc: 'Solutions are designed around real business workflows.' },
              { title: 'Mobile-First', desc: 'Practical software that can work efficiently on modern mobile devices.' },
              { title: 'Custom Built', desc: 'Develop software according to specific business requirements.' },
              { title: 'Cost Efficient', desc: 'Reduce unnecessary hardware and operational complexity where possible.' },
              { title: 'Scalable', desc: 'Build systems that can evolve as the business grows.' },
              { title: 'Continuous Improvement', desc: 'Software can be continuously improved based on business feedback.' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-start space-x-4 hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 p-2 rounded-lg shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. About ADK & Founder */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <SectionHeading title="About ADK Software Solutions" centered={false} />
              <div className="-mt-10 space-y-6 text-lg text-slate-600 dark:text-slate-400">
                <p>
                  ADK Software Solutions is a modern software development venture focused on building practical, high-performance digital tools for businesses and growing enterprises. We specialize in native Android applications, smart point-of-sale systems, custom web architectures, and business automation.
                </p>
                <p>
                  By combining analytical problem-solving with modern software technologies, ADK aims to create simple, efficient, and scalable digital solutions that help businesses streamline operations and grow.
                </p>
                <div className="pt-4">
                  <Link to="/about" className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
                    Read our full story <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Meet the Founder</h3>
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center shrink-0 border-4 border-white dark:border-slate-950 shadow-md">
                   <span className="text-2xl font-bold text-slate-400 dark:text-slate-500">SA</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">S. Arikarran</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">Founder & Software Developer</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">B.Sc. in Biological Science (Reading), University of Peradeniya</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    "ADK Software Solutions was founded by S. Arikarran with a focus on combining analytical thinking, technology, and practical problem-solving to create useful digital solutions for businesses."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" subtitle="FAQ" />
          <FAQAccordion />
        </div>
      </section>

      {/* 8. Contact CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Build Something Useful</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Have a business problem that could be solved with software? Tell us about it.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-blue-600 bg-white hover:bg-slate-50 transition-colors shadow-xl">
            Start a Conversation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
