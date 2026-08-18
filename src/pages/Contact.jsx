import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-transparent selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Start a Project
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-200/60 leading-relaxed"
          >
            We are currently accepting new projects. Contact us to discuss how we can build a digital solution for your business.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-[#151E3D] border border-blue-400/10 p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mr-4">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/50 mb-1">Email</p>
                    <a href="mailto:contact@adksoftwares.com" className="text-white hover:text-cyan-400 transition-colors font-medium">contact@adksoftwares.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center shrink-0 mr-4">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/50 mb-1">WhatsApp</p>
                    <a href="https://wa.me/94723440137" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors font-medium">+94 72 344 0137</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 mr-4">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200/50 mb-1">Location</p>
                    <p className="text-white font-medium">Kandy, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3 bg-[#1C2541] border border-blue-400/10 rounded-3xl p-8 lg:p-12 shadow-lg"
          >
            <form action="https://formsubmit.co/contact@adksoftwares.com" method="POST" className="space-y-6">
              {/* Optional Formsubmit settings */}
              <input type="hidden" name="_subject" value="New Contact Request from ADK Softwares Website!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100/70">First Name</label>
                  <input type="text" name="firstName" required className="w-full bg-[#0B132B] border border-blue-400/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100/70">Last Name</label>
                  <input type="text" name="lastName" required className="w-full bg-[#0B132B] border border-blue-400/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-100/70">Email Address</label>
                <input type="email" name="email" required className="w-full bg-[#0B132B] border border-blue-400/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-100/70">Project Details</label>
                <textarea name="projectDetails" required rows="5" className="w-full bg-[#0B132B] border border-blue-400/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="Tell us about what you want to build..."></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
