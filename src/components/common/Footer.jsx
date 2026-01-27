import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10 px-6 overflow-hidden relative">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-lg flex items-center justify-center font-bold text-slate-950 text-xs">
                C
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Chandan<span className="text-emerald-400">Compliance</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading with 12+ years of expertise in statutory compliance. 
              Making GST, Labour Law, and Payroll simple for businesses nationwide.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Our Founder</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Compliance Services</Link></li>
              <li><Link to="/knowledge" className="hover:text-white transition-colors">Knowledge Hub</Link></li>
              <li><Link to="/gst-quotation" className="hover:text-white transition-colors">GST Quotation Tool</Link></li>
            </ul>
          </div>

          {/* Compliance Areas */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
                GST Returns & Audit
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 group-hover:scale-150 transition-transform" />
                Labour Law (PF/ESI)
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                Payroll & HR MS
              </li>
              <li className="flex items-center gap-2 group cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 group-hover:scale-150 transition-transform" />
                Statutory Audits
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4 text-sm text-slate-400">
              <a href="tel:+911234567890" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={16} className="text-emerald-400" /> +91 98765 43210
              </a>
              <a href="mailto:info@chandan.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={16} className="text-blue-400" /> contact@chandan.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-emerald-400 shrink-0" />
                <span>Sector 62, Noida, <br />Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs">
            © {currentYear} Chandan Compliance. Built for Authority & Trust.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Compliance Calendar</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Action (Lead Gen) */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-8 right-8 z-[90] bg-emerald-500 text-slate-950 p-4 rounded-full shadow-2xl shadow-emerald-500/40 flex items-center justify-center"
      >
        <MessageCircle size={24} fill="currentColor" />
      </motion.a>
    </footer>
  );
};

export default Footer;