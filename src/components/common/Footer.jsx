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
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 px-6 relative overflow-hidden font-sans">
      {/* Subtle Architectural Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='white'/%3E%3C/svg%3E")` }} 
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* STATUTORY BRIEFING SECTION */}
        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl mb-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tighter">
              Regulatory <span className="text-blue-500 italic font-light">Intelligence.</span>
            </h3>
            <p className="text-gray-500 text-xs font-medium leading-relaxed uppercase tracking-wider">
              Join 500+ enterprises receiving our monthly analysis on Indian Labour Codes and statutory amendments.
            </p>
          </div>
          <div className="relative w-full max-w-sm">
            <div className="flex p-1 bg-zinc-950 border border-white/10 rounded-2xl">
              <input 
                type="email" 
                placeholder="Corporate Email" 
                className="w-full bg-transparent py-3 px-5 text-white outline-none text-[11px] placeholder:text-gray-700 font-bold uppercase tracking-widest"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest transition-all flex items-center gap-2 group whitespace-nowrap">
                Subscribe <Send size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* FIRM IDENTITY */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-white font-black text-xl tracking-tighter leading-none uppercase italic">LabourFORGE</span>
              <span className="text-blue-500 text-[8px] font-bold uppercase tracking-[0.5em] mt-1">Advisors</span>
            </div>
            <p className="text-gray-500 text-[11px] leading-relaxed font-bold uppercase tracking-wider">
              Strategic labour law consulting and statutory management. Focus on clarity, prevention, and zero-liability operations.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -3, color: '#3b82f6' }}
                  href="#" 
                  className="text-gray-700 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[9px] mb-8 border-l-2 border-blue-600 pl-4">The Firm</h4>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-gray-500">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">Philosophy</Link></li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Service Verticals</Link></li>
              <li><Link to="/knowledge" className="hover:text-blue-500 transition-colors">E-Library</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Advisory Board</Link></li>
            </ul>
          </div>

          {/* KEY COMPLIANCE AREAS */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[9px] mb-8 border-l-2 border-blue-600 pl-4">Expertise</h4>
            <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-gray-500">
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"><ShieldCheck size={12} className="text-blue-600/50" /> Statutory Audits</li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"><Scale size={12} className="text-blue-600/50" /> Wage Structuring</li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"><ArrowUpRight size={12} className="text-blue-600/50" /> CLRA Licensing</li>
              <li className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"><ShieldCheck size={12} className="text-blue-600/50" /> EPF/ESI Advisory</li>
            </ul>
          </div>

          {/* OFFICE */}
          <div className="bg-white/[0.02] p-6 border border-white/5 rounded-2xl">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[9px] mb-6">Corporate Office</h4>
            <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
              <a href="tel:+919555769448" className="flex items-start gap-3 text-gray-500 hover:text-blue-500 transition-colors group">
                <Phone size={14} className="group-hover:rotate-12 transition-transform" />
                <span>+91 95557 69448</span>
              </a>
              <a href="mailto:info@Labourforge.co.in" className="flex items-start gap-3 text-gray-500 hover:text-blue-500 transition-colors">
                <Mail size={14} />
                <span>info@Labourforge.co.in</span>
              </a>
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin size={14} className="shrink-0" />
                <span className="leading-relaxed italic font-medium normal-case">
                  Executive Suite, Sector 62, <br />Noida, UP 201301
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPLIANCE FOOTER BAR */}
        <div className="border-t border-white/5 pt-10 flex flex-col lg:grid lg:grid-cols-3 items-center gap-8 text-center">
          <div className="flex items-center gap-4 order-2 lg:order-1">
            <div className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 rounded-full">
              <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest">ISO 9001 Certified Advisory</span>
            </div>
          </div>
          
          <p className="text-gray-700 text-[9px] font-black uppercase tracking-[0.4em] order-1 lg:order-2">
            © {currentYear} LabourForge Advisors
          </p>
          
          <div className="flex gap-6 text-[9px] font-black uppercase tracking-widest text-gray-600 order-3 justify-center lg:justify-end">
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
        className="fixed bottom-6 right-6 z-[100] bg-white text-[#020617] pl-5 pr-2 py-2 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 group"
      >
        <span className="text-[9px] font-black uppercase tracking-widest">Consult an Expert</span>
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
          <MessageCircle size={16} />
        </div>
      </motion.a>
    </footer>
  );
};

export default Footer;