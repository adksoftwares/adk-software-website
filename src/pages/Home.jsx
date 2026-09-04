import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Zap, Code2, ChevronRight, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B132B]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div 
          initial="initial" animate="whileInView" variants={stagger}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            We build software that <br className="hidden md:block"/>
            solves real problems.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            ADK Software Solutions designs and develops business software, mobile applications, and digital systems for organizations that need technology that actually works in the real world.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/adksoftwares/15min" target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Discuss your project
              </a>
              <Link to="/portfolio" className="bg-[#151E3D] hover:bg-[#1C2852] border border-blue-500/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center">
                See our work
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 border-y border-blue-500/10 bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
           <p className="text-blue-200/50 font-semibold tracking-wider text-sm uppercase">Technologies we work with</p>
        </div>
        <div className="flex gap-4 md:gap-8 items-center justify-center flex-wrap max-w-5xl mx-auto">
           {['React.js', 'Node.js', 'Kotlin / Android', 'Firebase', 'AWS Cloud', 'Tailwind CSS'].map(tech => (
             <div key={tech} className="px-5 py-2 rounded-lg bg-[#151E3D] border border-blue-500/10 text-blue-100/80 font-medium cursor-default">
                {tech}
             </div>
           ))}
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="bg-[#151E3D] border border-blue-500/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Billing taking too long? Stock counts not matching?
          </h2>
          <p className="text-lg text-blue-100/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            We build practical software to replace manual workflows and streamline your daily operations. Stop struggling with inefficient processes and scale your capacity.
          </p>
          <a href="https://wa.me/94723440137" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#0B132B] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Request a 7-Day Free Trial
          </a>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">What we build</h2>
          <p className="text-blue-100/60 text-lg max-w-xl">Software tailored to your actual business workflows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="bg-[#151E3D] border border-blue-500/10 rounded-2xl p-8 flex flex-col">
            <div className="w-10 h-10 text-cyan-400 mb-5">
              <MonitorSmartphone size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Smart POS Solutions</h3>
            <p className="text-blue-100/60 flex-grow leading-relaxed">
              Modern point-of-sale systems designed to simplify retail operations and eliminate bulky hardware constraints.
            </p>
          </motion.div>

          <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="bg-[#151E3D] border border-blue-500/10 rounded-2xl p-8 flex flex-col">
            <div className="w-10 h-10 text-blue-400 mb-5">
              <Zap size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Native Mobile Apps</h3>
            <p className="text-blue-100/60 flex-grow leading-relaxed">
              Fast, reliable Android applications designed specifically for real-world business requirements.
            </p>
          </motion.div>

          <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="bg-[#151E3D] border border-blue-500/10 rounded-2xl p-8 flex flex-col">
            <div className="w-10 h-10 text-indigo-400 mb-5">
              <Code2 size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Business Automation</h3>
            <p className="text-blue-100/60 flex-grow leading-relaxed">
              Custom internal systems built to reduce manual effort, organize data, and scale business capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SmartPOS Lanka Highlight */}
      <section className="py-24 border-t border-blue-500/10 bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="order-2 lg:order-1">
              <div className="w-full bg-[#102135] rounded-xl overflow-hidden flex flex-col border border-blue-500/20 shadow-lg">
                <div className="h-10 bg-[#151E3D] flex items-center px-4 border-b border-blue-500/10">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                  </div>
                  <span className="font-medium text-xs text-blue-100/40 ml-4">SmartPOS Lanka Overview</span>
                </div>
                <video 
                  src="/pos-video.mp4" 
                  className="w-full h-auto object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  controls
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
            
            <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="order-1 lg:order-2">
              <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-3 block">Flagship Product</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                SmartPOS Lanka
              </h2>
              <p className="text-lg text-blue-100/70 mb-8 leading-relaxed max-w-lg">
                A point-of-sale system designed to simplify everyday retail operations, including sales processing, real-time inventory tracking, and receipt management—all from a mobile-first interface.
              </p>
              
              <ul className="space-y-3 mb-10 max-w-lg">
                {['Sales & Receipt Management', 'Real-time Inventory Tracking', 'Customer Management', 'Business Analytics'].map((feature, i) => (
                  <li key={i} className="flex items-center text-blue-100/80">
                    <CheckCircle2 size={18} className="text-cyan-500 mr-3" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/smartpos" className="inline-flex items-center font-medium text-white bg-[#151E3D] hover:bg-[#1C2852] border border-blue-500/20 px-6 py-2.5 rounded-lg transition-colors">
                View product <ChevronRight size={18} className="ml-1 text-cyan-400" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
