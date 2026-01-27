import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-24 pb-10 px-6 overflow-hidden relative">
      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Newsletter / CTA Section */}
        <div className="grid lg:grid-cols-3 gap-12 pb-16 border-b border-white/5 mb-16 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Stay ahead of the <span className="text-blue-400">Compliance Curve.</span></h3>
            <p className="text-slate-400">Get monthly updates on GST amendments and Labour Law changes.</p>
          </div>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 px-6 text-white outline-none focus:border-emerald-500/50 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 rounded-xl transition-all flex items-center justify-center">
              <Send size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-xl flex items-center justify-center font-black text-slate-950 text-sm shadow-lg shadow-blue-500/20">
                C
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">
                CHANDAN<span className="text-emerald-400">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Navigating the complexities of Indian statutory compliance since 2014 with 100% precision and zero-penalty track record.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -3, color: '#10b981' }}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-500 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-bold">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">Our Founder</Link></li>
              <li><Link to="/services" className="hover:text-emerald-400 transition-colors">Service Catalog</Link></li>
              <li><Link to="/knowledge" className="hover:text-emerald-400 transition-colors">Resource Center</Link></li>
              <li><Link to="/gst-quotation" className="hover:text-emerald-400 transition-colors">Price Calculator</Link></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Specializations</h4>
            <ul className="space-y-4 text-sm text-slate-400 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> GST Management
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Labour Law (ESI/PF)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Corporate Payroll
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Audit Readiness
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-white/5">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8">Headquarters</h4>
            <div className="space-y-6 text-sm">
              <a href="tel:+919555769448" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors font-bold">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500"><Phone size={14} /></div>
                +91 95557 69448
              </a>
              <a href="mailto:contact@chandan.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors font-bold">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400"><Mail size={14} /></div>
                office@chandan.com
              </a>
              <div className="flex items-start gap-4 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 shrink-0"><MapPin size={14} /></div>
                <span className="leading-relaxed">Sector 62, Noida, <br />UP 201301</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter">All Systems Operational</span>
            </div>
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              © {currentYear} CHANDAN CONSULTANCY
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.a
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919555769448"
        target="_blank"
        className="fixed bottom-10 right-10 z-[100] bg-emerald-500 text-slate-950 w-16 h-16 rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] flex items-center justify-center"
      >
        <MessageCircle size={28} fill="currentColor" />
      </motion.a>
    </footer>
  );
};

export default Footer;