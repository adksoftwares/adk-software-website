import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit
    alert('Thank you for your enquiry. We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', description: '' });
  };

  return (
    <div className="pt-10 pb-24">
      <section className="bg-slate-900 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's Build Something Useful
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Have a business problem that could be solved with software? Tell us about it.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Email</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">hello@adksoftware.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Phone / WhatsApp</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">+94 (XX) XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Kandy, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send an Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone / WhatsApp</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow" placeholder="+94 XX XXX XXXX" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company / Business Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow" placeholder="Company Name" />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Required</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow appearance-none">
                  <option value="" disabled>Select a service</option>
                  <option value="Smart POS">Smart POS</option>
                  <option value="Android Application">Android Application</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Project Description *</label>
                <textarea id="description" name="description" required value={formData.description} onChange={handleChange} rows="5" className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow resize-y" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg">
                <Send size={18} className="mr-2" />
                Send Enquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
