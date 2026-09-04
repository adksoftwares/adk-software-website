import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B132B]">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            We build software that <br className="hidden md:block"/>
            solves real problems.
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100/70 max-w-2xl mb-10 leading-relaxed">
            ADK Software Solutions designs and develops business software, mobile applications, and digital systems for organizations that need technology that actually works in the real world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/adksoftwares/15min" target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center w-fit">
              Discuss your project
            </a>
            <Link to="/portfolio" className="bg-[#151E3D] hover:bg-[#1C2852] border border-blue-500/20 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center w-fit">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section (Asymmetrical list) */}
      <section className="py-12 border-y border-blue-500/10 bg-[#0A1128] px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center gap-6">
           <p className="text-blue-200/50 font-semibold tracking-wider text-sm uppercase md:w-1/4">Technologies we work with:</p>
           <div className="flex flex-wrap gap-4 md:w-3/4">
             {['React.js', 'Node.js', 'Kotlin / Android', 'Firebase', 'AWS Cloud', 'Tailwind CSS'].map(tech => (
               <span key={tech} className="text-blue-100/80 font-medium">
                  {tech} <span className="text-blue-500/30 ml-3 hidden sm:inline-block">/</span>
               </span>
             ))}
           </div>
        </div>
      </section>

      {/* Problem-Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="border-l-4 border-cyan-500 pl-6 md:pl-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Billing taking too long? Stock counts not matching?
          </h2>
          <p className="text-lg text-blue-100/70 mb-8 max-w-2xl leading-relaxed">
            We build practical software to replace manual workflows and streamline your daily operations. Stop struggling with inefficient processes and scale your capacity.
          </p>
          <a href="https://wa.me/94723440137" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
            Request a 7-Day Free Trial <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* Feature Section (Replaced symmetric grid with a raw list) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-blue-500/10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">What we build</h2>
          <p className="text-blue-100/60 text-lg max-w-xl">Software tailored to your actual business workflows.</p>
        </div>

        <div className="space-y-12">
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-white mb-2">1. Smart POS Solutions</h3>
            <p className="text-blue-100/60 leading-relaxed">
              Modern point-of-sale systems designed to simplify retail operations and eliminate bulky hardware constraints.
            </p>
          </div>

          <div className="md:w-2/3 md:ml-auto">
            <h3 className="text-xl font-bold text-white mb-2">2. Native Mobile Apps</h3>
            <p className="text-blue-100/60 leading-relaxed">
              Fast, reliable Android applications designed specifically for real-world business requirements.
            </p>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-xl font-bold text-white mb-2">3. Business Automation</h3>
            <p className="text-blue-100/60 leading-relaxed">
              Custom internal systems built to reduce manual effort, organize data, and scale business capacity.
            </p>
          </div>
        </div>
      </section>

      {/* SmartPOS Lanka Highlight */}
      <section className="py-24 border-t border-blue-500/10 bg-[#0A1128]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            <div className="lg:w-1/2 order-2 lg:order-1">
              <span className="text-cyan-400 font-semibold uppercase tracking-widest text-xs mb-3 block">Flagship Product</span>
              <h2 className="text-3xl font-bold text-white mb-5">
                SmartPOS Lanka
              </h2>
              <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                A point-of-sale system designed to simplify everyday retail operations, including sales processing, real-time inventory tracking, and receipt management—all from a mobile-first interface.
              </p>
              
              <ul className="space-y-3 mb-10">
                {['Sales & Receipt Management', 'Real-time Inventory Tracking', 'Customer Management', 'Business Analytics'].map((feature, i) => (
                  <li key={i} className="flex items-center text-blue-100/80">
                    <CheckCircle2 size={16} className="text-cyan-500 mr-3" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/smartpos" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                View product details <ChevronRight size={16} />
              </Link>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 w-full">
              <div className="w-full bg-[#102135] rounded-xl overflow-hidden flex flex-col border border-blue-500/20 shadow-sm">
                <div className="h-8 bg-[#151E3D] flex items-center px-4 border-b border-blue-500/10">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20"></div>
                  </div>
                </div>
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
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
