import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Linkedin, 
  Twitter, MessageCircle, Send, 
  ShieldCheck, ArrowUpRight, Globe,
  Scale
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Unified global page scroll coordinator matching core component navbar heights
  const handleInternalScroll = (targetId, fallbackTabKey = null) => {
    const element = document.getElementById(targetId);
    
    // Proactively synchronize functional tabs if specific target matrix tabs are called
    if (fallbackTabKey) {
      const syncEvent = new CustomEvent("changeMatrixTab", { detail: fallbackTabKey });
      window.dispatchEvent(syncEvent);
    }

    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const calculatedOffset = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
      
      window.scrollTo({
        top: calculatedOffset,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-[#f7ede2] border-t-2 border-[#e9967a]/30 pt-24 pb-12 px-6 relative overflow-hidden font-sans">
      
      {/* Subtle Structural Organic Mesh Glow Layers (No Image Files) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#e9967a]/15 blur-[120px] rounded-full" />
        <div className="absolute top-[-20%] left-[-5%] w-[35vw] h-[35vw] bg-[#3d5a80]/10 blur-[100px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* STATUTORY BRIEFING SECTION */}
        <div className="bg-white border-2 border-[#fbdad0]/60 p-8 md:p-12 rounded-3xl mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_15px_40px_rgba(27,25,22,0.03)]">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-[#1f1916] mb-3 uppercase tracking-tighter">
              Regulatory <span className="text-[#3d5a80] italic font-light">Intelligence.</span>
            </h3>
            <p className="text-neutral-500 text-xs font-bold leading-relaxed uppercase tracking-wider">
              Join 500+ enterprises receiving our monthly analysis on Indian Labour Codes and statutory amendments.
            </p>
          </div>
          <div className="relative w-full max-w-sm">
            <div className="flex p-1.5 bg-[#f7ede2] border-2 border-[#e9967a]/40 rounded-2xl">
              <input 
                type="email" 
                placeholder="Corporate Email" 
                className="w-full bg-transparent py-3 px-4 text-[#1f1916] outline-none text-[11px] placeholder:text-neutral-400 font-bold uppercase tracking-widest"
              />
              <button className="bg-[#1f1916] hover:bg-[#d47f63] text-[#f7ede2] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group whitespace-nowrap shadow-sm">
                Subscribe <Send size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* FIRM IDENTITY */}
          <div className="space-y-6">
            <div className="flex flex-col cursor-pointer" onClick={() => handleInternalScroll('home-section')}>
              <span className="text-[#1f1916] font-black text-2xl tracking-tighter leading-none uppercase italic">LabourFORGE</span>
              <span className="text-[#e9967a] text-[9px] font-black uppercase tracking-[0.5em] mt-1.5">Advisors</span>
            </div>
            <p className="text-neutral-600 text-[11px] leading-relaxed font-bold uppercase tracking-wider">
              Strategic labour law consulting and statutory management. Focus on clarity, prevention, and zero-liability operations.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Globe].map((Icon, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -3, color: '#3d5a80' }}
                  href="#" 
                  className="text-neutral-400 transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-[#1f1916] font-black uppercase tracking-[0.3em] text-[10px] mb-8 border-l-2 border-[#e9967a] pl-4">The Firm</h4>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              <li>
                <button onClick={() => handleInternalScroll('home-section')} className="hover:text-[#3d5a80] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer font-bold text-[11px] uppercase tracking-widest text-neutral-500">
                  Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => handleInternalScroll('matrix-dashboard')} className="hover:text-[#3d5a80] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer font-bold text-[11px] uppercase tracking-widest text-neutral-500">
                  Service Verticals
                </button>
              </li>
              <li>
                <button onClick={() => handleInternalScroll('home-section')} className="hover:text-[#3d5a80] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer font-bold text-[11px] uppercase tracking-widest text-neutral-500">
                  E-Library
                </button>
              </li>
              <li>
                <button onClick={() => handleInternalScroll('modern-showcase')} className="hover:text-[#3d5a80] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer font-bold text-[11px] uppercase tracking-widest text-neutral-500">
                  Advisory Board
                </button>
              </li>
            </ul>
          </div>

          {/* KEY COMPLIANCE AREAS WITH ROUTED MAP PIPELINES */}
          <div>
            <h4 className="text-[#1f1916] font-black uppercase tracking-[0.3em] text-[10px] mb-8 border-l-2 border-[#e9967a] pl-4">Expertise</h4>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest text-neutral-500">
              <li 
                onClick={() => handleInternalScroll('matrix-dashboard', 'audit')}
                className="flex items-center gap-2 hover:text-[#3d5a80] transition-colors cursor-pointer"
              >
                <ShieldCheck size={12} className="text-[#e9967a]/70" /> Statutory Audits
              </li>
              <li 
                onClick={() => handleInternalScroll('matrix-dashboard', 'payroll')}
                className="flex items-center gap-2 hover:text-[#3d5a80] transition-colors cursor-pointer"
              >
                <Scale size={12} className="text-[#e9967a]/70" /> Wage Structuring
              </li>
              <li 
                onClick={() => handleInternalScroll('matrix-dashboard', 'contractLabour')}
                className="flex items-center gap-2 hover:text-[#3d5a80] transition-colors cursor-pointer"
              >
                <ArrowUpRight size={12} className="text-[#e9967a]/70" /> CLRA Licensing
              </li>
              <li 
                onClick={() => handleInternalScroll('matrix-dashboard', 'pfesic')}
                className="flex items-center gap-2 hover:text-[#3d5a80] transition-colors cursor-pointer"
              >
                <ShieldCheck size={12} className="text-[#e9967a]/70" /> EPF/ESI Advisory
              </li>
            </ul>
          </div>

          {/* OFFICE */}
          <div className="bg-white p-6 border-2 border-[#fbdad0]/60 rounded-2xl shadow-sm">
            <h4 className="text-[#1f1916] font-black uppercase tracking-[0.3em] text-[10px] mb-6">Corporate Office</h4>
            <div className="space-y-4 text-[10px] font-bold uppercase tracking-widest">
              <a href="tel:+919555769448" className="flex items-start gap-3 text-neutral-600 hover:text-[#3d5a80] transition-colors group">
                <Phone size={14} className="group-hover:rotate-12 transition-transform shrink-0" />
                <span>+91 95557 69448</span>
              </a>
              <a href="mailto:info@Labourforge.co.in" className="flex items-start gap-3 text-neutral-600 hover:text-[#3d5a80] transition-colors">
                <Mail size={14} className="shrink-0" />
                <span>info@Labourforge.co.in</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-500">
                <MapPin size={14} className="shrink-0 text-[#e9967a]" />
                <span className="leading-relaxed italic font-medium normal-case text-neutral-600">
                  Executive Suite, Sector 62, <br />Noida, UP 201301
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* COMPLIANCE FOOTER BAR */}
        <div className="border-t border-[#fbdad0] pt-10 flex flex-col lg:grid lg:grid-cols-3 items-center gap-8 text-center">
          <div className="flex items-center gap-4 order-2 lg:order-1">
            <div className="px-4 py-1.5 bg-white border border-[#e9967a]/40 rounded-full shadow-sm">
              <span className="text-[9px] font-black text-[#3d5a80] uppercase tracking-widest">ISO 9001 Certified Advisory</span>
            </div>
          </div>
          
          <p className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.4em] order-1 lg:order-2">
            © {currentYear} LabourForge Advisors
          </p>
          
          <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest text-neutral-400 order-3 justify-center lg:justify-end">
            <a href="#" className="hover:text-[#1f1916] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#1f1916] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1f1916] transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>

      {/* STRATEGIC CONSULTATION FAB */}
      <motion.a
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href="https://wa.me/919555769448"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-[#1f1916] text-[#f7ede2] pl-6 pr-3 py-3 rounded-full shadow-[0_20px_40px_rgba(31,25,22,0.2)] flex items-center gap-4 group border border-neutral-800"
      >
        <span className="text-[10px] font-black uppercase tracking-widest">Consult an Expert</span>
        <div className="w-8 h-8 bg-[#e9967a] rounded-full flex items-center justify-center text-[#f7ede2] shadow-sm">
          <MessageCircle size={16} />
        </div>
      </motion.a>
    </footer>
  );
};

export default Footer;