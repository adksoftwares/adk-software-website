import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { Search, PenTool, Layout, Code2, ShieldCheck, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  { num: '01', name: 'Discover', desc: 'Understand the business requirements and problems.', icon: Search },
  { num: '02', name: 'Plan', desc: 'Define the architecture, features, workflow, and development plan.', icon: PenTool },
  { num: '03', name: 'Design', desc: 'Create the user experience and interface structure.', icon: Layout },
  { num: '04', name: 'Develop', desc: 'Build the application and integrate the required systems.', icon: Code2 },
  { num: '05', name: 'Test', desc: 'Test functionality, usability, performance, and reliability.', icon: ShieldCheck },
  { num: '06', name: 'Deploy', desc: 'Release the software for real-world use.', icon: Rocket },
  { num: '07', name: 'Improve', desc: 'Provide updates and improvements based on business requirements.', icon: RefreshCw },
];

const Process = () => {
  return (
    <div className="pt-10 pb-24">
      <section className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            From Idea to Working Software
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Our structured development process ensures high-quality results delivered on time.
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 dark:bg-slate-800 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Center Dot */}
                  <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-white dark:bg-slate-950 border-4 border-blue-500 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg text-blue-600 font-bold">
                    {step.num}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`w-full ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                         <Icon size={48} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.name}</h3>
                      <p className="text-slate-600 dark:text-slate-400 relative z-10">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
