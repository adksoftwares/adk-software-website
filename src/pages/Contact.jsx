import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#070707]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-white/[0.06] pb-12"
        >
          <span className="text-[#ccff00] text-sm font-medium tracking-widest uppercase mb-4 block">
            Get in touch
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
            Tell us about the software or system you need. We will get back to you to discuss the technical requirements.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:w-1/3 space-y-8"
          >
            <h3
              className="text-xl font-bold text-white tracking-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Contact Info
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#ccff00] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Email</p>
                  <a href="mailto:contact@adksoftwares.com" className="text-white hover:text-[#ccff00] transition-colors font-medium">contact@adksoftwares.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="w-5 h-5 text-[#ccff00] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">WhatsApp</p>
                  <a href="https://wa.me/94723440137" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ccff00] transition-colors font-medium">+94 72 344 0137</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#ccff00] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Location</p>
                  <p className="text-white font-medium">Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-2/3 border-t md:border-t-0 md:border-l border-white/[0.06] pt-12 md:pt-0 md:pl-16"
          >
            <h3
              className="text-xl font-bold text-white tracking-tight mb-6"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Submit Request
            </h3>
            <form action="https://formsubmit.co/contact@adksoftwares.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Contact Request from ADK Softwares Website!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400 block">First Name</label>
                  <input type="text" name="firstName" required className="w-full bg-[#111] border border-white/[0.06] rounded-none px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ccff00] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400 block">Last Name</label>
                  <input type="text" name="lastName" required className="w-full bg-[#111] border border-white/[0.06] rounded-none px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ccff00] transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 block">Email Address</label>
                <input type="email" name="email" required className="w-full bg-[#111] border border-white/[0.06] rounded-none px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ccff00] transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400 block">Project Details</label>
                <textarea name="projectDetails" required rows="5" className="w-full bg-[#111] border border-white/[0.06] rounded-none px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#ccff00] transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="px-8 py-3.5 bg-[#ccff00] hover:bg-[#ccff00] text-black font-semibold rounded-none transition-colors">
                Send enquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
