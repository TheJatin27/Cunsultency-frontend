import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, Scale, ArrowRight, Menu, X, 
  Landmark, Target, ChevronRight, Zap 
} from "lucide-react";

const slides = [
  {
    tag: "Primary Mission",
    title: "Forging Compliance,",
    highlight: "Shaping Success.",
    description: "End-to-end labour law advisory designed to help businesses stay audit-ready and risk-free.", // [cite: 3, 4]
  },
  {
    tag: "Financial Integrity",
    title: "Strategic Wages,",
    highlight: "Statutory Armor.",
    description: "Expertly mapping employee categories and structuring wages in line with latest legal codes.", // [cite: 14]
  },
  {
    tag: "Social Security",
    title: "EPF & ESI,",
    highlight: "Managed Precision.",
    description: "From registrations to monthly filings and notice handling—complete statutory adherence.", // [cite: 16]
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] bg-white overflow-hidden flex items-center font-sans border-b border-slate-100">
      {/* PROFESSIONAL BACKGROUND ARCHITECTURE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 29h30M29 0v30' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")` }} 
        />
        <div className="absolute top-[-5%] right-[-2%] w-[40%] h-[40%] bg-emerald-50/50 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-emerald-100 bg-emerald-50/30 mb-8">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald-800">
                  {slides[current].tag}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15] mb-8 tracking-tight">
                {slides[current].title} <br />
                <span className="text-emerald-600 italic font-serif font-light">
                  {slides[current].highlight}
                </span>
              </h1>

              <p className="text-slate-500 text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light border-l-2 border-emerald-500/20 pl-6">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-4">
            <button className="px-7 py-3.5 bg-slate-900 hover:bg-emerald-700 text-white font-bold uppercase tracking-widest text-[10px] rounded-sm transition-all duration-300 flex items-center gap-3 group shadow-lg shadow-slate-200">
              Consult an Expert <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => setDrawerOpen(true)} className="px-7 py-3.5 bg-white border border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[10px] rounded-sm hover:bg-slate-50 transition-all flex items-center gap-3">
              <Menu size={14} /> Service Verticals
            </button>
          </div>
        </div>
      </div>

      {/* --- EXECUTIVE SIDE DRAWER --- */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDrawerOpen(false)} className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 30, stiffness: 300 }} className="fixed top-0 right-0 h-full w-full max-w-lg bg-white z-[110] p-12 shadow-2xl border-l border-slate-100">
              <div className="flex justify-between items-center mb-12">
                <div>
                  <span className="text-slate-900 font-black text-2xl tracking-tighter uppercase italic">LaborForge</span>
                  <span className="block text-emerald-600 text-[9px] tracking-[0.4em] uppercase font-bold">Advisors</span>
                </div>
                <button onClick={() => setDrawerOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-100 text-slate-400 hover:text-slate-900 transition-all">
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-2">
                <p className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] mb-6">Expertise Focus</p>
                {[
                  { icon: <Target size={18}/>, title: "Minimum Wages Act", desc: "Interpretation of state-wise notifications." }, // [cite: 20]
                  { icon: <Zap size={18}/>, title: "EPF & ESI Advisory", desc: "Filings, audits, and notice handling." }, // [cite: 21, 22]
                  { icon: <Users2 size={18}/>, title: "Contract Labour (CLRA)", desc: "Licensing and employer compliance." } // [cite: 23]
                ].map((item, i) => (
                  <div key={i} className="p-6 border border-transparent hover:border-slate-100 hover:bg-slate-50/50 transition-all cursor-pointer group">
                    <div className="flex items-start gap-5">
                      <div className="text-emerald-600 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">{item.title}</h4>
                        <p className="text-slate-500 text-[12px] mt-2 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-12 left-12 right-12 pt-8 border-t border-slate-100 flex items-center gap-5">
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center font-black text-white text-lg">CR</div>
                <div>
                  <p className="text-slate-900 font-bold text-sm uppercase tracking-tighter">Chandan Roy</p>
                  <p className="text-emerald-600 text-[9px] uppercase tracking-[0.2em] font-bold">Founder & Principal Advisor</p> // 
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;