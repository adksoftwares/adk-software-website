const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B132B]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="mb-20 border-b border-blue-500/10 pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-blue-200/60 leading-relaxed max-w-2xl">
            Tell us about the software or system you need. We will get back to you to discuss the technical requirements.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-16">
          
          <div className="md:w-1/3 space-y-8">
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-blue-200/50 mb-1">Email</p>
                <a href="mailto:contact@adksoftwares.com" className="text-white hover:text-cyan-400 transition-colors font-medium">contact@adksoftwares.com</a>
              </div>
              <div>
                <p className="text-sm text-blue-200/50 mb-1">WhatsApp</p>
                <a href="https://wa.me/94723440137" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors font-medium">+94 72 344 0137</a>
              </div>
              <div>
                <p className="text-sm text-blue-200/50 mb-1">Location</p>
                <p className="text-white font-medium">Kandy, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-blue-500/10 pt-12 md:pt-0 md:pl-16">
            <h3 className="text-xl font-bold text-white mb-6">Submit Request</h3>
            <form action="https://formsubmit.co/contact@adksoftwares.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Contact Request from ADK Softwares Website!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100/70 block">First Name</label>
                  <input type="text" name="firstName" required className="w-full bg-[#0A1128] border border-blue-500/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-100/70 block">Last Name</label>
                  <input type="text" name="lastName" required className="w-full bg-[#0A1128] border border-blue-500/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-100/70 block">Email Address</label>
                <input type="email" name="email" required className="w-full bg-[#0A1128] border border-blue-500/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-blue-100/70 block">Project Details</label>
                <textarea name="projectDetails" required rows="5" className="w-full bg-[#0A1128] border border-blue-500/20 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"></textarea>
              </div>
              
              <button type="submit" className="px-8 py-3.5 bg-white hover:bg-gray-100 text-[#0B132B] font-bold transition-colors">
                Send enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
