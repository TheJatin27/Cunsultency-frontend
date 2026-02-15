import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, MessageCircle, Send, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FCFAF7] border-t border-slate-200 pt-24 pb-10 px-6 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-[100px] -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] -z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] border border-white mb-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">Stay Ahead of the Curve.</h3>
            <p className="text-slate-500 font-medium">Get monthly updates on GST and Labour Law changes.</p>
          </div>
          <div className="relative w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-6 text-slate-900 outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-slate-900 hover:bg-emerald-600 text-white px-6 rounded-xl transition-all flex items-center justify-center group">
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-white shadow-lg">
                LF
              </div>
              <span className="text-slate-900 font-black text-2xl tracking-tighter">
                LABOR<span className="text-emerald-500">.</span>FORGE
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              Navigating the complexities of Indian statutory compliance since 2014 with 100% precision and zero-penalty track record.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -5, backgroundColor: '#10b981', color: '#fff' }}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 transition-all shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[11px] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li><Link to="/about" className="hover:text-emerald-600 transition-colors">Our Founder</Link></li>
              <li><Link to="/services" className="hover:text-emerald-600 transition-colors">Service Catalog</Link></li>
              <li><Link to="/knowledge" className="hover:text-emerald-600 transition-colors">Resource Center</Link></li>
              <li><Link to="/gst-quotation" className="hover:text-emerald-600 transition-colors">Price Calculator</Link></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[11px] mb-8">Specializations</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-bold">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> GST Management</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Labour Law (ESI/PF)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Corporate Payroll</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Audit Readiness</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <h4 className="text-slate-900 font-black uppercase tracking-widest text-[11px] mb-8">Headquarters</h4>
            <div className="space-y-6 text-sm">
              <a href="tel:+919555769448" className="flex items-center gap-4 text-slate-600 hover:text-emerald-600 transition-colors font-bold">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0"><Phone size={14} /></div>
                +91 95557 69448
              </a>
              <a href="mailto:contact@chandan.com" className="flex items-center gap-4 text-slate-600 hover:text-blue-600 transition-colors font-bold">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><Mail size={14} /></div>
                office@laborforge.com
              </a>
              <div className="flex items-start gap-4 text-slate-500 font-medium leading-relaxed">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0"><MapPin size={14} /></div>
                Sector 62, Noida, <br />UP 201301
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-tighter">Live Support Active</span>
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              © {currentYear} LABORFORGE ADVISORS
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <motion.a
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919555769448"
        target="_blank"
        className="fixed bottom-10 right-10 z-[100] bg-emerald-500 text-white w-16 h-16 rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.4)] flex items-center justify-center"
      >
        <MessageCircle size={32} fill="white" />
      </motion.a>
    </footer>
  );
};

export default Footer;