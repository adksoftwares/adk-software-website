import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Products = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products
          </h1>
          <p className="text-lg text-blue-200/60 leading-relaxed">
            Pre-built software systems designed to solve common operational challenges.
          </p>
        </div>

        <div className="space-y-24 border-t border-blue-500/10 pt-16">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-start`}
            >
              
              <div className="w-full lg:w-1/2">
                <div className="text-cyan-400 text-sm font-mono tracking-widest mb-3 uppercase">
                  {product.category}
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">{product.title}</h2>
                <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="mb-10">
                  <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider border-b border-blue-500/10 pb-2">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-blue-100/80">
                        <span className="text-cyan-500 mr-3 shrink-0 mt-0.5">-</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link to={product.id === 'smartpos-lanka' ? '/smartpos' : '/contact'} className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                  {product.id === 'smartpos-lanka' ? 'View product details' : 'Request demo'} <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="bg-[#0A1128] border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
                  {product.video ? (
                    <video src={product.video} autoPlay loop muted playsInline controls className="w-full h-auto object-cover" />
                  ) : product.image ? (
                    <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
                  ) : (
                    <div className="text-center p-10">
                       <span className="text-lg font-medium text-blue-100/30">Interface Preview</span>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Products;
