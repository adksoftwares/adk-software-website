import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
};

const Products = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#070707]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Hero */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <span className="text-[#ccff00] font-medium text-sm tracking-[0.2em] uppercase">
            What We Build
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Products
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            Pre-built software systems designed to solve common operational challenges.
          </p>
        </motion.div>

        {/* Product list */}
        <div className="space-y-28 border-t border-white/[0.06] pt-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-start`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              custom={0}
            >

              {/* Text column */}
              <div className="w-full lg:w-1/2">
                <span className="text-[#ccff00] font-medium text-sm tracking-[0.2em] uppercase">
                  {product.category}
                </span>
                <h2
                  className="text-3xl font-bold text-white mt-3 mb-4 tracking-tight"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {product.title}
                </h2>
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-10">
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider border-b border-white/[0.06] pb-2">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-neutral-400">
                        <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full mr-3 shrink-0 mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={product.id === 'smartpos-lanka' ? '/smartpos' : '/contact'}
                  className="inline-flex items-center text-[#ccff00] font-semibold border-b border-[#ccff00]/30 pb-0.5 hover:border-[#ccff00] transition-colors"
                >
                  {product.id === 'smartpos-lanka' ? 'View product details' : 'Request demo'}
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              {/* Media column */}
              <div className="w-full lg:w-1/2">
                <div className="bg-[#111] border border-white/[0.06] flex items-center justify-center relative overflow-hidden">
                  {product.video ? (
                    <video src={product.video} autoPlay loop muted playsInline controls className="w-full h-auto object-cover" />
                  ) : product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
                  ) : (
                    <div className="text-center p-10">
                      <span className="text-lg font-medium text-neutral-400/30">Interface Preview</span>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
