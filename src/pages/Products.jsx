import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import SectionHeading from '../components/SectionHeading';

const Products = () => {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Purpose-built software products designed to solve real business challenges.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 grid lg:grid-cols-2 group"
            >
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold mb-6 w-max">
                  {product.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  {product.name}
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/${product.id === 'smartpos-lanka' ? 'smartpos' : `products/${product.id}`}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    View Product
                  </Link>
                </div>
              </div>
              
              <div className="bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                {/* Product Visualization */}
                <div className="relative w-full max-w-sm aspect-[4/5] bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 z-10 flex flex-col overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                   <div className="h-12 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center px-4">
                      <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="flex-1 p-6 space-y-4">
                     <div className="h-8 w-1/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                     <div className="grid grid-cols-2 gap-4">
                       <div className="h-24 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-100 dark:border-blue-900/30"></div>
                       <div className="h-24 bg-slate-50 dark:bg-slate-800 rounded-lg"></div>
                     </div>
                     <div className="h-32 bg-slate-50 dark:bg-slate-800 rounded-lg"></div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-10 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-xl font-medium text-slate-500 dark:text-slate-400">More solutions coming soon.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
