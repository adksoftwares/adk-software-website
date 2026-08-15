import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, Download, Smartphone, BarChart3, Users, Box, Receipt } from 'lucide-react';
import { products } from '../data/products';

const SmartPOS = () => {
  const product = products.find(p => p.id === 'smartpos-lanka');

  const icons = [Smartphone, Box, BarChart3, Receipt, Users];

  return (
    <div className="pt-0">
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
              <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm mb-4 block">
                Flagship Product
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                SmartPOS Lanka
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                An all-in-one mobile retail POS solution designed to simplify everyday business operations, right from your mobile device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
                  Request a Demo
                </Link>
                <Link to="#features" className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-700 text-base font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition-colors">
                  View Features
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
               <div className="w-[300px] h-[600px] mx-auto bg-slate-800 rounded-[3rem] border-[8px] border-slate-700 p-2 shadow-2xl relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-700 rounded-b-xl z-20"></div>
                  <div className="w-full h-full bg-slate-100 rounded-[2rem] overflow-hidden flex flex-col">
                     <div className="bg-blue-600 text-white p-6 pb-10">
                        <div className="text-sm opacity-80 mb-1">Total Sales Today</div>
                        <div className="text-3xl font-bold">Rs. 45,250</div>
                     </div>
                     <div className="flex-1 bg-white -mt-4 rounded-t-xl p-4">
                        <div className="grid grid-cols-2 gap-3 mb-6">
                           <div className="bg-blue-50 p-4 rounded-xl flex flex-col items-center justify-center text-blue-700"><Receipt size={24} className="mb-2"/> Sales</div>
                           <div className="bg-emerald-50 p-4 rounded-xl flex flex-col items-center justify-center text-emerald-700"><Box size={24} className="mb-2"/> Items</div>
                        </div>
                        <div className="space-y-3">
                           <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4"><div className="w-8 h-8 rounded bg-slate-200 mr-3"></div><div className="h-2 w-24 bg-slate-200 rounded"></div></div>
                           <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4"><div className="w-8 h-8 rounded bg-slate-200 mr-3"></div><div className="h-2 w-32 bg-slate-200 rounded"></div></div>
                           <div className="h-12 bg-slate-50 rounded-lg flex items-center px-4"><div className="w-8 h-8 rounded bg-slate-200 mr-3"></div><div className="h-2 w-20 bg-slate-200 rounded"></div></div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Core Features</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Everything you need to run your retail business smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product?.features.map((feature, idx) => {
               const Icon = icons[idx % icons.length];
               return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-4">
                     <Icon size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">{feature}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Streamline your {feature.toLowerCase()} with intuitive, purpose-built tools.
                  </p>
                </motion.div>
               )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Ready to simplify your retail operations?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Get in touch with us to schedule a demo of SmartPOS Lanka and see how it can help your business grow.
          </p>
          <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SmartPOS;
