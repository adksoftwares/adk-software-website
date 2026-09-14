import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MonitorSmartphone, 
  Smartphone, 
  Cpu, 
  Check, 
  Terminal, 
  Zap, 
  Activity, 
  Layers, 
  ShieldCheck, 
  Play, 
  BarChart3, 
  Receipt, 
  Boxes 
} from 'lucide-react';

// Animation variants for Apple/Linear staggered reveals
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const scrollReveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
};

const TECH_STACK = [
  'React.js', 
  'Node.js', 
  'Kotlin', 
  'Android', 
  'Firebase', 
  'AWS Cloud', 
  'Tailwind CSS', 
  'TypeScript', 
  'SQLite', 
  'PostgreSQL'
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <div className="flex flex-col min-h-screen bg-[#070707] text-white selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. THE HERO SECTION (Break the Grid)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 px-6 sm:px-8 lg:px-12 border-b border-white/[0.06] overflow-hidden">
        {/* Architectural radial background aura */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#ccff00]/[0.025] rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/4" />
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-white/[0.015] rounded-full blur-[120px] pointer-events-none -translate-x-1/3" />

        <div className="max-w-7xl mx-auto">
          
          {/* Studio Telemetry Header Strip */}
          <motion.div 
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3 md:gap-6 mb-10 text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase"
          >
            <span className="flex items-center gap-2 text-[#ccff00]">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              [01 // BOUTIQUE ENGINEERING STUDIO]
            </span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span className="text-neutral-400">SRI LANKA — GLOBAL COMMISSIONS</span>
            <span className="hidden md:inline text-neutral-700">|</span>
            <span className="hidden md:inline text-neutral-400">STABILITY 99.98%</span>
          </motion.div>

          {/* Staggered Hero Typography */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end"
          >
            <div className="lg:col-span-8">
              <motion.h1 
                variants={fadeUpItem}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-bold tracking-tight text-white leading-[0.98] mb-8"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                We build software that{' '}
                <span className="italic font-serif font-light text-[#ccff00] block sm:inline">
                  solves real problems.
                </span>
              </motion.h1>

              <motion.p 
                variants={fadeUpItem}
                className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed font-normal mb-10"
              >
                ADK Software Solutions designs and develops business software, mobile applications, and digital systems for organizations that need technology that actually works in the real world.
              </motion.p>

              <motion.div 
                variants={fadeUpItem}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <a 
                  href="https://calendly.com/adksoftwares/15min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#ccff00] hover:bg-white text-black font-mono text-xs uppercase tracking-[0.16em] font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl hover:shadow-[0_0_30px_rgba(204,255,0,0.25)]"
                >
                  <span>Discuss your project</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <Link 
                  to="/portfolio"
                  className="px-8 py-4 bg-[#111111] hover:bg-[#181818] border border-white/[0.12] hover:border-white/30 text-white font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>See our work</span>
                  <ArrowUpRight size={15} className="text-neutral-500" />
                </Link>
              </motion.div>
            </div>

            {/* Asymmetrical Studio Spec Sidebar */}
            <motion.div 
              variants={fadeUpItem}
              className="lg:col-span-4 border-l border-white/[0.08] pl-0 lg:pl-10 space-y-6 text-xs font-mono"
            >
              <div className="bg-[#0e0e0e] border border-white/[0.07] p-6 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#ccff00]" />
                <p className="text-neutral-500 uppercase tracking-widest text-[10px] mb-2">Core Competency</p>
                <p className="text-white text-sm font-semibold tracking-tight mb-2">High-Throughput POS & Edge Systems</p>
                <p className="text-neutral-400 font-sans text-xs leading-relaxed">
                  Eliminating reliance on bloated SaaS dependencies with deterministic, hardware-friendly native software.
                </p>
              </div>

              <div className="flex justify-between items-center py-2.5 border-b border-white/[0.06] text-neutral-400">
                <span>HEADQUARTERS</span>
                <span className="text-white">KANDY, SRI LANKA</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-white/[0.06] text-neutral-400">
                <span>DEV PIPELINE</span>
                <span className="text-white">KOTLIN // REACT // NODE</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-white/[0.06] text-neutral-400">
                <span>DEPLOYMENT CYCLES</span>
                <span className="text-[#ccff00]">2-4 WEEKS TURNAROUND</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. INFINITE TECH MARQUEE (Grayscale, Low-Opacity)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-6 border-b border-white/[0.06] bg-[#050505] overflow-hidden relative">
        {/* Subtle edge fade masks for high-end editorial feel */}
        <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, idx) => (
            <div key={idx} className="flex items-center gap-16 text-neutral-500/70 hover:text-neutral-200 transition-colors cursor-default">
              <span className="font-mono text-xs uppercase tracking-[0.25em] font-medium">
                {tech}
              </span>
              <span className="text-[#ccff00]/40 text-xs">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE NARRATIVE TRANSITION (Scroll-Triggered)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-48 px-6 sm:px-8 lg:px-12 border-b border-white/[0.06] relative">
        <div className="max-w-5xl mx-auto">
          
          <motion.div {...scrollReveal} className="mb-6">
            <span className="text-[#ccff00] font-mono text-xs uppercase tracking-[0.22em] block mb-4">
              [ 02 // REAL-WORLD BOTTLENECKS ]
            </span>
            <h2 
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Billing taking too long? <br className="hidden sm:inline"/>
              <span className="text-neutral-400">Stock counts not matching?</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="border-t border-white/[0.08] pt-8 mt-12 grid md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-8">
              <p className="text-xl sm:text-2xl text-neutral-300 font-light leading-relaxed mb-6">
                We build practical software to replace manual workflows and scale your capacity.{' '}
                <span className="text-white font-medium">Stop struggling.</span>
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xl font-normal">
                Generic subscriptions fail because they don’t reflect how your business actually runs. We eliminate double-entry, manual ledgers, and fragmented tools with lean, custom engineering.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-end">
              <a 
                href="https://wa.me/94723440137" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group border border-white/[0.12] hover:border-[#ccff00] p-5 bg-[#070707] transition-all duration-300 block"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#ccff00]">Direct Inquiry</span>
                  <ArrowRight size={14} className="text-[#ccff00] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white text-sm font-semibold mb-1">Request a 7-Day Free Trial</p>
                <p className="text-neutral-500 text-xs">Test our point-of-sale or custom module on your retail floor.</p>
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. OFFERINGS (The Bento Box Grid)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 px-6 sm:px-8 lg:px-12 border-b border-white/[0.06]" id="offerings">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[#ccff00] font-mono text-xs uppercase tracking-[0.22em] block mb-3">
                [ 03 // CORE CAPABILITIES ]
              </span>
              <h2 
                className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Built for reality, not slide decks.
              </h2>
            </div>
            <p className="text-neutral-400 text-sm max-w-sm font-normal">
              Three pillars engineered with deterministic architecture, offline resilience, and zero superfluous baggage.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* Bento Card 1: Smart POS Solutions (Large 8-col card) */}
            <motion.div
              {...scrollReveal}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-8 bg-[#0d0d0d] border border-white/[0.08] hover:border-[#ccff00]/40 p-8 sm:p-12 transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-[#141414] border border-white/[0.08] flex items-center justify-center text-[#ccff00]">
                    <MonitorSmartphone size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 border border-white/[0.08] px-3 py-1">
                    01 // FLAGSHIP RETAIL
                  </span>
                </div>

                <h3 
                  className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Smart POS Solutions
                </h3>
                <p className="text-neutral-400 text-base leading-relaxed max-w-xl mb-8">
                  Modern point-of-sale systems designed to simplify retail operations and eliminate bulky, obsolete hardware constraints. Runs lightning fast on affordable Android tablets, phones, and touch terminals.
                </p>
              </div>

              {/* In-Card Interactive Preview / Wireframe HUD */}
              <div className="bg-[#070707] border border-white/[0.06] p-5 font-mono text-xs mt-4">
                <div className="flex justify-between items-center text-neutral-400 border-b border-white/[0.06] pb-3 mb-3">
                  <span className="flex items-center gap-2 text-white">
                    <Terminal size={14} className="text-[#ccff00]" />
                    TERMINAL_LKA_01
                  </span>
                  <span className="text-[#ccff00]">SYNCED (0.04s)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[11px]">
                  <div>
                    <span className="text-neutral-400 block">OFFLINE CACHE</span>
                    <span className="text-white font-semibold">ENABLED (SQLite)</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block">RECEIPT PRINT</span>
                    <span className="text-white font-semibold">BLUETOOTH 5.0</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block">INVENTORY SYNC</span>
                    <span className="text-white font-semibold">SUB-SECOND</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block">PAYMENT AUDIT</span>
                    <span className="text-[#ccff00] font-semibold">ZERO-MISMATCH</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bento Card 2: Native Mobile Apps (4-col card) */}
            <motion.div
              {...scrollReveal}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-4 bg-[#0d0d0d] border border-white/[0.08] hover:border-white/25 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-[#141414] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-[#ccff00] transition-colors">
                    <Smartphone size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 border border-white/[0.08] px-3 py-1">
                    02 // MOBILE
                  </span>
                </div>

                <h3 
                  className="text-2xl font-bold text-white mb-4 tracking-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Native Mobile Apps
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Fast, reliable Android applications built specifically for real-world business requirements. High frame-rate, responsive touch interfaces that never stutter during busy shifts.
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-4 font-mono text-[11px] text-neutral-400 flex justify-between items-center">
                <span>TARGET ENGINE</span>
                <span className="text-white font-medium">ANDROID / KOTLIN</span>
              </div>
            </motion.div>

            {/* Bento Card 3: Business Automation (4-col card) */}
            <motion.div
              {...scrollReveal}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-4 bg-[#0d0d0d] border border-white/[0.08] hover:border-white/25 p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 bg-[#141414] border border-white/[0.08] flex items-center justify-center text-neutral-300 group-hover:text-[#ccff00] transition-colors">
                    <Cpu size={24} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 border border-white/[0.08] px-3 py-1">
                    03 // AUTOMATION
                  </span>
                </div>

                <h3 
                  className="text-2xl font-bold text-white mb-4 tracking-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Business Automation
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  Custom internal systems built to reduce manual effort, organize complex data, and eliminate human error from repetitive inventory or bookkeeping chores.
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-4 font-mono text-[11px] text-neutral-400 flex justify-between items-center">
                <span>EFFICIENCY GAIN</span>
                <span className="text-[#ccff00] font-medium">+60% TIME SAVED</span>
              </div>
            </motion.div>

            {/* Bento Card 4: Architecture Guarantee (Large 8-col card) */}
            <motion.div
              {...scrollReveal}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="md:col-span-8 bg-[#0d0d0d] border border-white/[0.08] hover:border-white/25 p-8 sm:p-10 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="max-w-md">
                <span className="font-mono text-[10px] text-[#ccff00] uppercase tracking-[0.2em] block mb-2">
                  OUR ARCHITECTURAL COMMITMENT
                </span>
                <h4 
                  className="text-xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Zero software bloat. 100% purpose-built code.
                </h4>
                <p className="text-neutral-400 text-xs leading-relaxed font-normal">
                  We don't assemble fragile Frankenstein stacks with dozens of rented third-party plugins. Every system is hand-crafted and directly debugged by senior developers.
                </p>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-black bg-white hover:bg-[#ccff00] px-5 py-3 font-semibold transition-colors shrink-0"
              >
                <span>Full Capability Index</span>
                <ArrowRight size={14} />
              </Link>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FLAGSHIP SPOTLIGHT: SmartPOS Lanka (Apple-style reveal)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-32 md:py-44 px-6 sm:px-8 lg:px-12 bg-[#050505] relative overflow-hidden" id="smartpos">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Editorial Content Column (5 cols) */}
            <motion.div {...scrollReveal} className="lg:col-span-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] text-[#ccff00] border border-[#ccff00]/30 px-3 py-1 uppercase tracking-[0.16em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-ping" />
                FLAGSHIP SUITE REVEAL
              </div>

              <h2 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[0.98] mb-6"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                SmartPOS <br />
                <span className="text-neutral-400">Lanka.</span>
              </h2>

              <p className="text-lg text-neutral-300 font-normal leading-relaxed mb-8">
                A point-of-sale system designed to simplify everyday retail operations—all from a mobile-first interface.
              </p>

              {/* Key Features Mini-Grid */}
              <div className="space-y-4 mb-10 border-t border-white/[0.08] pt-6">
                {[
                  {
                    title: 'Sales & Receipt Management',
                    desc: 'Instant checkout processing with thermal receipt & digital invoice support.',
                    icon: Receipt
                  },
                  {
                    title: 'Real-time Inventory Tracking',
                    desc: 'Automated stock deductions, low-count alerts, and warehouse categorization.',
                    icon: Boxes
                  },
                  {
                    title: 'Customer Management',
                    desc: 'Direct customer credit ledger, purchase histories, and phone lookups.',
                    icon: Layers
                  },
                  {
                    title: 'Business Analytics',
                    desc: 'Daily revenue tally, top-selling margin reports, and cashier shift reconciliation.',
                    icon: BarChart3
                  }
                ].map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-8 h-8 rounded-none bg-[#111] border border-white/[0.08] flex items-center justify-center text-[#ccff00] shrink-0 mt-0.5 group-hover:border-[#ccff00]/40 transition-colors">
                        <IconComponent size={16} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold tracking-tight">{feat.title}</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed mt-0.5">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/smartpos"
                  className="px-7 py-3.5 bg-[#ccff00] hover:bg-white text-black font-mono text-xs uppercase tracking-[0.16em] font-bold transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Explore SmartPOS Lanka</span>
                  <ArrowRight size={14} />
                </Link>
                
                <a
                  href="https://wa.me/94723440137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-white/[0.12] hover:border-white/30 text-white font-mono text-xs uppercase tracking-[0.14em] font-medium transition-colors"
                >
                  Request Retail Demo
                </a>
              </div>
            </motion.div>

            {/* Product Hardware / Device Stage (7 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="relative bg-[#0d0d0d] border border-white/[0.12] shadow-2xl p-2.5 sm:p-4 group">
                
                {/* Device Titanium Frame Bar */}
                <div className="bg-[#141414] border-b border-white/[0.06] px-4 py-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="text-white font-semibold ml-2">SmartPOS Retail Edition v2.4</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-neutral-500">ENGINE: SQLITE EDGE</span>
                    <span className="w-2 h-2 rounded-full bg-[#ccff00]" />
                  </div>
                </div>

                {/* Real Product Video / Live Display Viewport */}
                <div className="relative bg-[#000000] overflow-hidden aspect-video flex items-center justify-center">
                  <video 
                    src="/pos-video.mp4" 
                    className="w-full h-full object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    controls
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Sub-device telemetry status strip */}
                <div className="mt-3 px-3 py-2 bg-[#090909] border border-white/[0.04] flex flex-wrap justify-between items-center text-[10px] font-mono text-neutral-400 gap-2">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={12} className="text-[#ccff00]" />
                    TOUCH OPTIMIZED // ZERO LATENCY CHECKOUT
                  </span>
                  <span className="text-neutral-400">
                    KOTLIN CORE · THERMAL PRINTER COMPATIBLE
                  </span>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CONTACT CALL TO ACTION (Before Minimalist Footer)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 sm:px-8 lg:px-12 border-t border-white/[0.06] relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#ccff00] font-mono text-xs uppercase tracking-[0.22em] block mb-4">
            [ INITIATE COLLABORATION ]
          </span>
          <h2 
            className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Ready to engineer your system?
          </h2>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
            Whether you need SmartPOS deployed in your store, a native Android tool, or full business process automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#ccff00] hover:bg-white text-black font-mono text-xs uppercase tracking-[0.16em] font-bold transition-all duration-300 shadow-xl"
            >
              Start a conversation
            </Link>
            <a 
              href="mailto:contact@adksoftwares.com"
              className="w-full sm:w-auto px-8 py-4 border border-white/[0.12] hover:border-white/30 text-white font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-colors"
            >
              contact@adksoftwares.com
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
