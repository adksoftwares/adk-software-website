import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, Smartphone, Cpu, ChevronRight } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const TECH_STACK = ['React.js', 'Node.js', 'Kotlin', 'Android', 'Firebase', 'AWS Cloud', 'Tailwind CSS', 'SQLite', 'REST APIs'];

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      
      {/* ═══════════════════════════════════════════════
          HERO — Oversized, asymmetric, stagger-revealed
      ═══════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-24 lg:pt-52 lg:pb-40 px-6 sm:px-8 lg:px-16 overflow-hidden">
        {/* Subtle gradient accent bleed */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          <motion.p variants={staggerItem} className="text-amber-400 font-medium text-sm tracking-[0.2em] uppercase mb-8">
            ADK Software Solutions
          </motion.p>
          
          <motion.h1 
            variants={staggerItem}
            className="font-[var(--font-display)] text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white mb-8 leading-[0.95] max-w-5xl"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            We build software<br />
            that solves <span className="text-amber-400">real</span> problems.
          </motion.h1>
          
          <motion.p variants={staggerItem} className="text-lg md:text-xl text-neutral-400 max-w-xl mb-12 leading-relaxed">
            Business software, mobile applications, and digital systems for organizations that need technology that actually works.
          </motion.p>
          
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://calendly.com/adksoftwares/15min" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-2 w-fit"
            >
              Discuss your project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link 
              to="/portfolio" 
              className="border border-white/20 hover:border-white/40 text-white px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center w-fit hover:bg-white/5"
            >
              See our work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════
          TECH STACK — Infinite Marquee
      ═══════════════════════════════════════════════ */}
      <section className="py-8 border-y border-white/[0.06] overflow-hidden">
        <div className="animate-marquee flex gap-16 items-center whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span key={i} className="text-neutral-500 text-sm font-medium tracking-[0.15em] uppercase flex items-center gap-16">
              {tech}
              <span className="text-neutral-700">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PAIN POINT NARRATIVE — Editorial, scroll-triggered
      ═══════════════════════════════════════════════ */}
      <section className="py-32 lg:py-44 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeUp}
            className="max-w-4xl"
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-8 leading-[1.05]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Billing taking too long?<br />
              Stock counts not matching?
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-2xl mt-4"
          >
            <p className="text-xl text-neutral-400 leading-relaxed mb-10">
              We build practical software to replace manual workflows and streamline your daily operations. Stop struggling with inefficient processes — scale your capacity with purpose-built tools.
            </p>
            <a 
              href="https://wa.me/94723440137" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group text-amber-400 font-semibold inline-flex items-center gap-2 border-b border-amber-400/30 pb-1 hover:border-amber-400 transition-colors"
            >
              Request a 7-Day Free Trial 
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          OFFERINGS — Bento Grid
      ═══════════════════════════════════════════════ */}
      <section className="py-24 px-6 sm:px-8 lg:px-16 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-amber-400 font-medium text-sm tracking-[0.2em] uppercase mb-4">What we build</p>
            <h2 
              className="text-3xl md:text-4xl font-bold tracking-tight text-white"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Software tailored to your workflows.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1 — Smart POS (spans 2 cols on lg) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="lg:col-span-2 group bg-[#141414] border border-white/[0.06] hover:border-amber-500/30 p-10 lg:p-14 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/[0.03] rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 group-hover:bg-amber-500/[0.06] transition-colors duration-700 pointer-events-none" />
              <MonitorSmartphone size={28} strokeWidth={1.5} className="text-amber-400 mb-8" />
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Smart POS Solutions
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-lg text-lg">
                Modern point-of-sale systems designed to simplify retail operations and eliminate bulky hardware constraints. Built mobile-first.
              </p>
            </motion.div>

            {/* Card 2 — Native Mobile */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group bg-[#141414] border border-white/[0.06] hover:border-white/20 p-10 transition-colors duration-500"
            >
              <Smartphone size={28} strokeWidth={1.5} className="text-neutral-500 group-hover:text-amber-400 transition-colors duration-500 mb-8" />
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Native Mobile Apps
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Fast, reliable Android applications designed specifically for real-world business requirements.
              </p>
            </motion.div>

            {/* Card 3 — Business Automation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group bg-[#141414] border border-white/[0.06] hover:border-white/20 p-10 transition-colors duration-500"
            >
              <Cpu size={28} strokeWidth={1.5} className="text-neutral-500 group-hover:text-amber-400 transition-colors duration-500 mb-8" />
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Business Automation
              </h3>
              <p className="text-neutral-500 leading-relaxed">
                Custom internal systems built to reduce manual effort, organize data, and scale business capacity.
              </p>
            </motion.div>

            {/* Card 4 — CTA card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="lg:col-span-2 bg-[#141414] border border-white/[0.06] p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div>
                <p className="text-white font-semibold text-lg mb-1">Have a project in mind?</p>
                <p className="text-neutral-500">Let's discuss the technical requirements.</p>
              </div>
              <Link 
                to="/contact" 
                className="group bg-white text-black px-6 py-3 font-semibold flex items-center gap-2 hover:bg-neutral-200 transition-colors shrink-0"
              >
                Get in touch <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SPOTLIGHT — SmartPOS Lanka
      ═══════════════════════════════════════════════ */}
      <section className="py-32 px-6 sm:px-8 lg:px-16 border-t border-white/[0.06] bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text — 5 cols */}
            <motion.div 
              {...fadeUp}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <p className="text-amber-400 font-medium text-sm tracking-[0.2em] uppercase mb-4">Flagship Product</p>
              <h2 
                className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6 leading-[1.05]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                SmartPOS<br />Lanka
              </h2>
              <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                A point-of-sale system designed to simplify everyday retail operations — sales processing, real-time inventory tracking, and receipt management, all from a mobile-first interface.
              </p>
              
              <div className="space-y-4 mb-10">
                {['Sales & Receipt Management', 'Real-time Inventory Tracking', 'Customer Management', 'Business Analytics'].map((feature, i) => (
                  <div key={i} className="flex items-center text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-4 shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/smartpos" 
                className="group text-amber-400 font-semibold inline-flex items-center gap-2 border-b border-amber-400/30 pb-1 hover:border-amber-400 transition-colors"
              >
                View product details 
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Video — 7 cols */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="bg-[#111] border border-white/[0.06] overflow-hidden">
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

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
