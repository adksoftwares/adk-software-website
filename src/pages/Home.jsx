import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, Zap, Code2, ShieldCheck, Box, ChevronRight, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B132B] selection:bg-cyan-500/30">
      
      {/* 1. Hero Section - Deep Ocean Blue */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center text-center">
        
        {/* Subtle Glowing Background Effects matching the Logo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-40 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-[120px] rounded-full mix-blend-screen transform scale-x-150"></div>
        </div>
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>

        <motion.div 
          initial="initial" animate="whileInView" variants={stagger}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/30 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm font-medium text-cyan-300 tracking-wide">ADK Software Solutions</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Engineering smarter <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">digital solutions.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-blue-100/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            High-performance software designed around your actual business workflows. From native applications and smart POS systems to custom business automation.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
              Start a project
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1C2541]/80 hover:bg-[#1C2541] text-white font-medium border border-blue-400/20 transition-all backdrop-blur-sm">
              Explore expertise
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Feature Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Core Capabilities</h2>
          <p className="text-blue-200/60 text-lg max-w-xl">Software tailored to your actual business workflows, designed to maximize efficiency.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="bg-[#151E3D] border border-blue-400/10 hover:border-cyan-500/50 transition-colors duration-300 rounded-3xl p-8 flex flex-col group shadow-lg">
            <div className="w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <MonitorSmartphone size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Smart POS Solutions</h3>
            <p className="text-blue-100/60 mb-6 flex-grow leading-relaxed">
              Modern point-of-sale systems designed to simplify retail operations and eliminate bulky hardware constraints.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="bg-[#151E3D] border border-blue-400/10 hover:border-blue-500/50 transition-colors duration-300 rounded-3xl p-8 flex flex-col group shadow-lg">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Native Mobile Apps</h3>
            <p className="text-blue-100/60 mb-6 flex-grow leading-relaxed">
              Fast, reliable Android applications designed specifically for real-world business requirements.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="bg-[#151E3D] border border-blue-400/10 hover:border-teal-500/50 transition-colors duration-300 rounded-3xl p-8 flex flex-col group shadow-lg">
            <div className="w-12 h-12 bg-teal-500/10 text-teal-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(20,184,166,0.1)]">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Business Automation</h3>
            <p className="text-blue-100/60 mb-6 flex-grow leading-relaxed">
              Identify repetitive workflows and build custom software to reduce manual effort and scale capacity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. SmartPOS Lanka Highlight */}
      <section className="py-24 relative overflow-hidden border-t border-blue-500/10 bg-gradient-to-b from-[#102135] to-[#0A1624]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="order-2 lg:order-1 relative">
              {/* Premium Dashboard Mockup */}
              <div className="relative mx-auto w-full max-w-[360px] aspect-[9/18] bg-[#1C2541] rounded-[2.5rem] border border-blue-400/20 p-2 shadow-2xl">
                <div className="w-full h-full bg-[#102135] rounded-[2rem] overflow-hidden flex flex-col relative border border-blue-400/10">
                  <div className="h-14 bg-[#151E3D] flex items-center px-6 border-b border-blue-400/10">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                    <span className="font-semibold text-sm text-white">SmartPOS Lanka</span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col gap-4">
                    <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-5 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                      <p className="text-cyan-100 text-sm mb-1">Today's Revenue</p>
                      <p className="text-2xl font-bold text-white">Rs. 45,250</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square bg-[#151E3D] rounded-2xl border border-blue-400/10 p-4 flex flex-col items-center justify-center gap-2">
                        <Box size={24} className="text-cyan-400" />
                        <div className="h-2 w-12 bg-blue-200/10 rounded-full"></div>
                      </div>
                      <div className="aspect-square bg-[#151E3D] rounded-2xl border border-blue-400/10 p-4 flex flex-col items-center justify-center gap-2">
                        <ShieldCheck size={24} className="text-blue-400" />
                        <div className="h-2 w-12 bg-blue-200/10 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 bg-[#151E3D] rounded-2xl border border-blue-400/10 mt-1 p-4 space-y-3">
                       <div className="h-3 w-3/4 bg-blue-200/10 rounded-full"></div>
                       <div className="h-3 w-1/2 bg-blue-200/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/15 rounded-full blur-[80px] -z-10"></div>
            </motion.div>
            
            <motion.div initial="initial" whileInView="whileInView" variants={fadeUp} className="order-1 lg:order-2">
              <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-4 block">Flagship Product</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                An all-in-one <br/> mobile retail POS.
              </h2>
              <p className="text-lg text-blue-100/60 mb-10 leading-relaxed max-w-lg">
                SmartPOS Lanka brings essential retail operations into a streamlined, mobile-first interface. Manage sales, track inventory, and generate insights without expensive legacy hardware.
              </p>
              
              <ul className="space-y-4 mb-10 max-w-lg">
                {['Sales & Receipt Management', 'Real-time Inventory Tracking', 'Customer Management', 'Business Analytics & Insights'].map((feature, i) => (
                  <li key={i} className="flex items-center text-blue-100/80">
                    <CheckCircle2 size={18} className="text-cyan-400 mr-3 shadow-[0_0_10px_rgba(6,182,212,0.3)] rounded-full" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/smartpos" className="inline-flex items-center font-medium text-white bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/20 px-6 py-3 rounded-xl transition-all">
                Explore the product <ChevronRight size={18} className="ml-1 text-cyan-400" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
