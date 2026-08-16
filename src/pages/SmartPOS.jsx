import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Database, CheckCircle2, CloudLightning } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmartPOS = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6 border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              Flagship Product
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              The smart way to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">manage retail.</span>
            </h1>
            <p className="text-xl text-blue-200/60 leading-relaxed mb-10 max-w-lg">
              A comprehensive mobile-first point-of-sale system that replaces expensive legacy hardware with a simple Android application.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="px-8 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Get SmartPOS
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] max-w-md mx-auto bg-[#1C2541] rounded-[3rem] border border-blue-400/20 p-3 shadow-2xl relative z-10">
              <div className="w-full h-full bg-[#0B132B] rounded-[2.5rem] border border-blue-400/10 overflow-hidden flex flex-col">
                <div className="h-12 bg-[#151E3D] flex items-center justify-center border-b border-blue-400/10">
                  <div className="w-16 h-1.5 bg-blue-400/20 rounded-full"></div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-6 shadow-lg">
                    <p className="text-cyan-100 text-sm mb-2">Total Sales</p>
                    <p className="text-3xl font-bold text-white">Rs. 124,500</p>
                  </div>
                  <div className="flex-1 bg-[#151E3D] rounded-2xl border border-blue-400/10 p-5 space-y-4">
                    <div className="h-4 w-3/4 bg-blue-200/10 rounded-full"></div>
                    <div className="h-4 w-1/2 bg-blue-200/10 rounded-full"></div>
                    <div className="h-4 w-2/3 bg-blue-200/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/20 rounded-full blur-[100px] -z-10"></div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default SmartPOS;
