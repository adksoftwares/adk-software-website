import { motion } from 'framer-motion';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 }
};

const Products = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-blue-200/60 leading-relaxed"
          >
            Pre-built software systems designed to solve common operational challenges.
          </motion.p>
        </div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial="initial" whileInView="whileInView" variants={fadeUp}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
            >
              
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/10] rounded-2xl bg-[#0A1128] border border-blue-500/20 shadow-md flex items-center justify-center relative overflow-hidden">
                  {product.video ? (
                    <video src={product.video} autoPlay loop muted playsInline controls className="w-full h-full object-cover" />
                  ) : product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                  ) : (
                    <div className="text-center">
                       <span className="text-lg font-medium text-blue-100/30">Interface Preview</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="inline-block px-3 py-1 rounded-md bg-[#151E3D] border border-blue-500/10 text-cyan-400 text-xs font-semibold mb-6">
                  {product.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{product.title}</h2>
                <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-10">
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-blue-100/80">
                        <CheckCircle2 size={18} className="text-cyan-500 mr-3 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={product.id === 'smartpos-lanka' ? '/smartpos' : '/contact'} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#151E3D] hover:bg-[#1C2852] border border-blue-500/20 text-white font-medium transition-colors">
                  {product.id === 'smartpos-lanka' ? 'View product' : 'Request demo'} <ChevronRight size={18} className="ml-1 text-cyan-400" />
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
