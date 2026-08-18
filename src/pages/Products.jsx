import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Products = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-200/60 leading-relaxed"
          >
            Ready-to-deploy software solutions designed to solve common business challenges immediately.
          </motion.p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial="initial" whileInView="whileInView" variants={fadeUp}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/10] rounded-[2rem] bg-[#0B132B] border border-blue-400/10 p-2 shadow-lg flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                  
                  {product.video ? (
                    <video src={product.video} autoPlay loop muted playsInline controls className="w-full h-full object-cover rounded-2xl" />
                  ) : product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-2xl" />
                  ) : (
                    <div className="text-center z-10">
                       <span className="text-2xl font-bold text-white/20">Product Preview</span>
                    </div>
                  )}
                  
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
                  {product.category}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{product.title}</h2>
                <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-blue-100/80">
                      <CheckCircle2 size={18} className="text-cyan-400 mr-3 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={product.id === 'smartpos-lanka' ? '/smartpos' : '/contact'} className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  {product.id === 'smartpos-lanka' ? 'View Details' : 'Request Demo'} <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
