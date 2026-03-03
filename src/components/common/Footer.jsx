import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Linkedin, 
  Twitter, MessageCircle, Send, 
  ShieldCheck, ArrowUpRight, Globe,
  Scale
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 pt-24 pb-12 px-6 relative overflow-hidden font-sans">
      {/* Subtle Architectural Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='white'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* STATUTORY BRIEFING SECTION */}
        <div className="bg-[#1E293B] border border-slate-800 p-10 md:p-16 rounded-sm mb-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Regulatory <span className="text-amber-500 italic font-light">Intelligence.</span>
            </h3>
            <p className="text-slate-400 font-light leading-relaxed">
              Join 500+ enterprises receiving our monthly analysis on Indian Labour Codes and statutory amendments.
            </p>
          </div>
          <div className="relative w-full max-w-md">
            <div className="flex p-1 bg-[#0F172A] border border-slate-700 rounded-sm">
              <input 
                type="email" 
                placeholder="Corporate Email Address" 
                className="w-full bg-transparent py-4 px-6 text-white outline-none text-sm placeholder:text-slate-600 font-medium"
              />
              <button className="bg-amber-500 hover:bg-white text-[#0F172A] px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 group">
                Subscribe <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* FIRM IDENTITY */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="text-white font-black text-2xl tracking-tighter leading-none">LABORFORGE</span>
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mt-1">Advisors</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Providing strategic labour law consulting and statutory management since 2014. We focus on clarity, prevention, and zero-liability operations.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -3, color: '#f59e0b' }}
                  href="#" 
                  className="text-slate-600 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION EXECUTIVES */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8 border-l-2 border-amber-500 pl-4">The Firm</h4>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li><Link to="/about" className="hover:text-amber-500 transition-colors">Consulting Philosophy</Link></li>
              <li><Link to="/services" className="hover:text-amber-500 transition-colors">Service Verticals</Link></li>
              <li><Link to="/knowledge" className="hover:text-amber-500 transition-colors">E-Library Resources</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition-colors">Advisory Board</Link></li>
            </ul>
          </div>

          {/* KEY COMPLIANCE AREAS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8 border-l-2 border-amber-500 pl-4">Expertise</h4>
            <ul className="space-y-4 text-[13px] text-slate-500">
              <li className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer"><ShieldCheck size={14} className="text-amber-500/50" /> Statutory Audits</li>
              <li className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer"><Scale size={14} className="text-amber-500/50" /> Wage Structuring</li>
              <li className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer"><ArrowUpRight size={14} className="text-amber-500/50" /> CLRA Licensing</li>
              <li className="flex items-center gap-2 hover:text-slate-300 transition-colors cursor-pointer"><ShieldCheck size={14} className="text-amber-500/50" /> EPF/ESI Advisory</li>
            </ul>
          </div>

          {/* GLOBAL HEADQUARTERS */}
          <div className="bg-[#1E293B]/30 p-8 border border-slate-800 rounded-sm">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8">Corporate Office</h4>
            <div className="space-y-6 text-sm">
              <a href="tel:+919555769448" className="flex items-start gap-4 text-slate-400 hover:text-amber-500 transition-colors group">
                <Phone size={16} className="mt-1 group-hover:rotate-12 transition-transform" />
                <span className="font-medium">+91 95557 69448</span>
              </a>
              <a href="mailto:office@laborforge.com" className="flex items-start gap-4 text-slate-400 hover:text-amber-500 transition-colors">
                <Mail size={16} className="mt-1" />
                <span className="font-medium">office@laborforge.com</span>
              </a>
              <div className="flex items-start gap-4 text-slate-500">
                <MapPin size={16} className="mt-1 shrink-0" />
                <span className="font-light leading-relaxed text-xs italic">
                  Executive Suite, Sector 62, <br />Noida, Uttar Pradesh 201301
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPLIANCE FOOTER BAR */}
        <div className="border-t border-slate-800 pt-12 flex flex-col lg:grid lg:grid-cols-3 items-center gap-8">
          <div className="flex items-center gap-4 order-2 lg:order-1">
            <div className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-sm">
              <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">ISO 9001 Certified Advisory</span>
            </div>
          </div>
          
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em] order-1 lg:order-2 text-center">
            © {currentYear} LaborForge Advisors • Compliance Architecture
          </p>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500 order-3 justify-center lg:justify-end">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>

      {/* STRATEGIC CONSULTATION FAB */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/919555769448"
        target="_blank"
        className="fixed bottom-8 right-8 z-[100] bg-white text-[#0F172A] px-6 py-4 rounded-sm shadow-2xl flex items-center gap-3 border border-slate-200 group"
      >
        <div className="w-2 h-2 bg-amber-500 rounded-full animate-ping" />
        <span className="text-[11px] font-black uppercase tracking-widest">Consult an Expert</span>
        <MessageCircle size={20} className="text-amber-600" />
      </motion.a>
    </footer>
  );
};

export default Footer;