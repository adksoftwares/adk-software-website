import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Smartphone, 
  Database, 
  Camera, 
  Bluetooth, 
  FileText, 
  Trash2, 
  Mail, 
  CheckCircle2, 
  Server, 
  ArrowLeft,
  HardDrive
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
  }),
};

const PrivacyPolicy = () => {
  const lastUpdated = "November 3, 2026";

  const keyHighlights = [
    {
      icon: Shield,
      title: "Zero Data Selling",
      desc: "We never monetize, rent, or sell your commercial or personal data to advertising brokers."
    },
    {
      icon: HardDrive,
      title: "Offline-First Integrity",
      desc: "Your daily sales, inventory, and customer bills stay securely stored on your local device."
    },
    {
      icon: Camera,
      title: "Hardware Transparency",
      desc: "Permissions like Camera, Bluetooth, and Storage are accessed strictly to operate POS hardware."
    },
    {
      icon: Trash2,
      title: "Right to Data Erasure",
      desc: "Full autonomy to export or permanently purge your business and personal records on demand."
    }
  ];

  const appPermissions = [
    {
      permission: "Camera (android.permission.CAMERA)",
      purpose: "Used exclusively for scanning product barcodes, QR codes, and quick inventory lookup. Our apps never capture photos in the background or stream video feeds to remote servers."
    },
    {
      permission: "Bluetooth & USB (BLUETOOTH_CONNECT / USB)",
      purpose: "Enables direct communication with external POS hardware including 58mm/80mm thermal receipt printers, electronic weighing scales, and RJ11 cash drawer kick pulses."
    },
    {
      permission: "Storage & Documents (Scoped Storage / MediaStore)",
      purpose: "Allows generating, saving, and downloading PDF tax invoices, CSV financial reports, and encrypted local database backups directly to your device storage."
    },
    {
      permission: "Network & Internet (INTERNET / ACCESS_NETWORK_STATE)",
      purpose: "Used when optional cloud sync is enabled, for license validation, operator authentication, and fetching critical software security updates."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#070707] text-neutral-300">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -12 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-neutral-400 hover:text-[#ccff00] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </motion.div>

        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="border-b border-white/[0.08] pb-12 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] text-xs font-mono uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            Legal & Compliance
          </div>
          <h1 
            className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Privacy Policy for Softwares & Applications
          </h1>
          <p className="text-lg text-neutral-400 max-w-3xl leading-relaxed mb-6 font-normal">
            This Privacy Policy explains how <strong className="text-white">ADK Software Solutions</strong> collects, protects, uses, and respects data across our mobile applications (Android APKs), Point-of-Sale (POS) systems, desktop applications, web platforms, and custom software services.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
            <span>Entity: <strong className="text-white">ADK Software Solutions</strong></span>
            <span>•</span>
            <span>Effective Date: <strong className="text-white">{lastUpdated}</strong></span>
            <span>•</span>
            <span>Official URL: <strong className="text-[#ccff00]">https://adksoftwares.com/privacy-policy</strong></span>
          </div>
        </motion.div>

        {/* Key Highlights Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {keyHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#111111] border border-white/[0.07] p-6 rounded-2xl flex items-start gap-4 hover:border-white/[0.15] transition-colors"
              >
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-[#ccff00] shrink-0">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Detailed Sections */}
        <div className="space-y-16 text-neutral-300 leading-relaxed font-normal">

          {/* Section 1 */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">01.</span> Scope & Applications Covered
            </h2>
            <p className="mb-4">
              This Privacy Policy applies universally to all digital applications, products, and operational systems published, maintained, or engineered by ADK Software Solutions, including but not limited to:
            </p>
            <ul className="space-y-2.5 ml-4 list-disc list-inside text-neutral-300">
              <li><strong className="text-white">SmartPOS Lanka</strong> & native Point-of-Sale mobile apps (Android APKs for retail, grocery, and cafe outlets).</li>
              <li><strong className="text-white">Nila Cafe POS</strong> & hospitality management software.</li>
              <li><strong className="text-white">Custom Business Management Suites</strong> (DOA Fertilizer Tracking, Anumathi GovTech, Healthcare & Inventory Systems).</li>
              <li><strong className="text-white">Companion Desktop & Web Terminals</strong> operating under the ADK Software ecosystem.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">02.</span> Information We Collect
            </h2>
            <p className="mb-4">
              Depending on the application, installation mode, and operational tier you use, we may process the following types of information:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-6 bg-[#0e0e0e] border border-white/[0.06] rounded-xl">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Database size={17} className="text-[#ccff00]" /> Merchant & Commercial Data
                </h4>
                <ul className="text-sm space-y-2 text-neutral-400">
                  <li>• Store details (Business name, branch address, contact phone, tax registration).</li>
                  <li>• Product catalogs, categories, SKU/barcode codes, and pricing tiers.</li>
                  <li>• Transaction history, invoices, bills, discount entries, and payment methods.</li>
                  <li>• Optional customer entries recorded by merchants for billing/loyalty.</li>
                </ul>
              </div>

              <div className="p-6 bg-[#0e0e0e] border border-white/[0.06] rounded-xl">
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <Smartphone size={17} className="text-[#ccff00]" /> Device & Technical Diagnostics
                </h4>
                <ul className="text-sm space-y-2 text-neutral-400">
                  <li>• Device model, hardware manufacturer, and operating system build.</li>
                  <li>• Hardware binding identifiers used strictly for software licensing integrity.</li>
                  <li>• Network connectivity status (Online vs Offline mode detection).</li>
                  <li>• Crash traces and unhandled exception logs to debug software faults.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - App Permissions */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">03.</span> Device Permissions & Hardware Usage
            </h2>
            <p className="mb-6">
              In accordance with Google Play Developer Policies and global privacy standards, our applications request only the minimum set of permissions necessary to deliver physical and digital retail functions:
            </p>
            
            <div className="space-y-4">
              {appPermissions.map((perm, index) => (
                <div key={index} className="p-5 bg-[#0e0e0e] border border-white/[0.06] rounded-xl">
                  <div className="flex items-center gap-2 font-mono text-sm text-[#ccff00] font-semibold mb-2">
                    <CheckCircle2 size={16} />
                    <span>{perm.permission}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed pl-6">
                    {perm.purpose}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 - Offline First */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">04.</span> Offline-First Architecture & Storage
            </h2>
            <p className="mb-4">
              Most ADK Software solutions (such as SmartPOS and Nila Cafe POS) are built using an <strong className="text-white">Offline-First Architecture</strong>. This means:
            </p>
            <div className="p-6 bg-[#0e0e0e] border border-white/[0.06] rounded-xl space-y-3">
              <p className="text-sm text-neutral-300">
                <strong className="text-white">• Local Database Storage:</strong> Your active sales records, items, and inventory are saved locally in on-device SQLite databases (Room / IndexedDB). They remain accessible even during complete internet outages.
              </p>
              <p className="text-sm text-neutral-300">
                <strong className="text-white">• Merchant Data Ownership:</strong> Your daily store performance is your property. Unless you explicitly configure cloud database syncing, your billing history never leaves your physical terminal.
              </p>
              <p className="text-sm text-neutral-300">
                <strong className="text-white">• Encrypted Transport:</strong> When synchronized to our cloud servers, all transactional payloads are protected using modern TLS 1.3 / HTTPS encryption.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">05.</span> How We Use Collected Data
            </h2>
            <p className="mb-4">We process information exclusively for legitimate commercial and engineering purposes:</p>
            <ul className="space-y-2 ml-4 list-disc list-inside text-neutral-300">
              <li>To execute POS operations, compute order totals, calculate taxes (e.g. VAT/SSCL), and render receipts.</li>
              <li>To trigger hardware commands (e.g., thermal printer ESC/POS bytes, RJ11 drawer kick pulses).</li>
              <li>To generate exportable business records (PDF receipts, Excel/CSV audit reports).</li>
              <li>To verify valid software licenses and prevent unauthorized redistribution.</li>
              <li>To provide customer support, troubleshoot crashes, and release performance patches.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">06.</span> Third-Party Disclosure & Sharing
            </h2>
            <div className="p-6 bg-[#121212] border border-[#ccff00]/20 rounded-xl mb-4">
              <p className="text-white font-medium mb-1">
                Strict Non-Disclosure Guarantee
              </p>
              <p className="text-sm text-neutral-400">
                ADK Software Solutions does not sell, license, lease, or rent customer records, merchant revenue figures, or operational databases to any advertisers, third-party data brokers, or marketing networks under any circumstances.
              </p>
            </div>
            <p className="text-sm text-neutral-400">
              Data is shared strictly with essential technical infrastructure partners (e.g. cloud database hosting or server infrastructure) solely to provide the services requested, governed by binding data protection standards.
            </p>
          </section>

          {/* Section 7 - Data Deletion & Rights (Google Play requirement) */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">07.</span> User Rights & Account / Data Deletion
            </h2>
            <p className="mb-4">
              Under global data privacy frameworks (including GDPR, CCPA, and Google Play Store Developer Guidelines), merchants and users retain full rights regarding their data:
            </p>
            
            <div className="p-6 bg-[#0e0e0e] border border-white/[0.06] rounded-xl space-y-4">
              <h4 className="text-white font-semibold text-base flex items-center gap-2">
                <Trash2 size={18} className="text-red-400" /> How to Request Permanent Data & Account Deletion
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                If you wish to delete your business account, merchant profile, cloud synchronized databases, or any personal data associated with an ADK Software application, you can submit an official request:
              </p>
              <div className="p-4 bg-[#141414] rounded-lg border border-white/[0.08] space-y-2 text-sm font-mono">
                <p><span className="text-neutral-500">Email:</span> <a href="mailto:contact@adksoftwares.com" className="text-[#ccff00] hover:underline">contact@adksoftwares.com</a></p>
                <p><span className="text-neutral-500">Subject:</span> [Data Deletion Request] - Your Business / App Name</p>
                <p><span className="text-neutral-500">Details:</span> Registered email address, store bill identifier, and specific records to purge.</p>
              </div>
              <p className="text-xs text-neutral-500">
                • Timeline: Deletion requests are confirmed within 48 hours and fully purged from active and backup databases within 14 to 30 calendar days, in compliance with applicable commercial record-keeping regulations.
              </p>
            </div>
          </section>

          {/* Section 8 - Children's Privacy */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">08.</span> Children's Privacy
            </h2>
            <p>
              Our applications and software solutions are strictly business, commercial, and enterprise productivity utilities. They are not intended for or directed towards children under the age of 13 (or under 16 in the European Union). We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 9 - Security */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">09.</span> Security Safeguards
            </h2>
            <p className="mb-4">
              We employ robust administrative, technical, and physical security safeguards to maintain the integrity of our software codebases and customer databases:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="p-4 bg-[#0e0e0e] border border-white/[0.06] rounded-xl">
                <Lock size={18} className="text-[#ccff00] mb-2" />
                <h5 className="text-white font-medium mb-1">Encrypted Transit</h5>
                <p className="text-xs text-neutral-400">All network requests are forced over HTTPS / TLS 1.3 encryption protocols.</p>
              </div>
              <div className="p-4 bg-[#0e0e0e] border border-white/[0.06] rounded-xl">
                <Server size={18} className="text-[#ccff00] mb-2" />
                <h5 className="text-white font-medium mb-1">Access Controls</h5>
                <p className="text-xs text-neutral-400">Multi-level operator authentication, salted hashed credentials, and role isolation.</p>
              </div>
              <div className="p-4 bg-[#0e0e0e] border border-white/[0.06] rounded-xl">
                <Shield size={18} className="text-[#ccff00] mb-2" />
                <h5 className="text-white font-medium mb-1">Defensive Hardening</h5>
                <p className="text-xs text-neutral-400">Regular dependency auditing, static code security scanning, and sandboxed storage.</p>
              </div>
            </div>
          </section>

          {/* Section 10 - Policy Changes */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">10.</span> Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in legal mandates, operating system updates, or new application features. Any revisions will be published at <strong className="text-white font-mono">https://adksoftwares.com/privacy-policy</strong> with an updated effective date. Continued use of our applications following an update constitutes acceptance of the revised terms.
            </p>
          </section>

          {/* Section 11 - Contact */}
          <section className="border-t border-white/[0.08] pt-12">
            <h2 
              className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-[#ccff00] font-mono text-lg">11.</span> Contact Information
            </h2>
            <p className="mb-6">
              If you have any questions, regulatory inquiries, or requests regarding this Privacy Policy or your application data, please contact our engineering and compliance desk:
            </p>
            
            <div className="p-6 bg-[#111111] border border-white/[0.08] rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  ADK Software Solutions
                </h4>
                <p className="text-sm text-neutral-400 mb-2">Boutique Software & Mobile Engineering Agency</p>
                <p className="text-xs font-mono text-neutral-500">Operating Worldwide from Kandy, Sri Lanka</p>
              </div>

              <div className="flex flex-col sm:items-end gap-2 text-sm font-mono">
                <a 
                  href="mailto:contact@adksoftwares.com" 
                  className="text-white hover:text-[#ccff00] transition-colors inline-flex items-center gap-2"
                >
                  <Mail size={15} /> contact@adksoftwares.com
                </a>
                <span className="text-neutral-500">Direct Desk: +94 72 344 0137</span>
                <span className="text-neutral-500">Web: https://adksoftwares.com</span>
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
