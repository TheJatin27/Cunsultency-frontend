import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, CheckCircle2, BarChart3, 
  ArrowRight, Award, Menu, X, Briefcase 
} from "lucide-react";

const slides = [
  {
    tag: "Compliance First",
    title: "Forging Compliance,",
    highlight: "Shaping Success.",
    description: "Navigate the complexities of labor law with confidence and ease.",
    bg: "bg-[#FFFFFF]", // Pure White
    accent: "text-emerald-600",
    border: "border-emerald-200",
    btn: "bg-emerald-600"
  },
  {
    tag: "Strategic Planning",
    title: "Optimizing Wages,",
    highlight: "Minimizing Risk.",
    description: "Smart payroll structuring that keeps your business competitive and legal.",
    bg: "bg-[#FFF0F3]", // Soft Pink
    accent: "text-rose-600",
    border: "border-rose-200",
    btn: "bg-rose-600"
  },
  {
    tag: "Audit Ready",
    title: "Precision Filing,",
    highlight: "Zero Penalties.",
    description: "Ensure your EPF, ESI, and statutory records are always inspection-ready.",
    bg: "bg-[#FEF9E7]", // Pale Yellow
    accent: "text-amber-600",
    border: "border-amber-200",
    btn: "bg-amber-600"
  },
  {
    tag: "Growth Focused",
    title: "Scalable Solutions,",
    highlight: "Reliable Support.",
    description: "Expert advisory that grows alongside your workforce requirements.",
    bg: "bg-[#EBF5FF]", // Soft Blue
    accent: "text-blue-600",
    border: "border-blue-200",
    btn: "bg-blue-600"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative min-h-screen transition-colors duration-1000 ease-in-out overflow-hidden flex items-center ${slides[current].bg}`}>
      
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-96 h-96 border-[1px] border-black/5 rounded-full" 
        />
        <div className="absolute top-1/2 left-10 w-4 h-4 bg-red-400 rounded-full opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest border ${slides[current].border} ${slides[current].accent} rounded-full`}>
                  {slides[current].tag}
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif text-slate-900 leading-[1] mb-8 tracking-tight">
                {slides[current].title} <br />
                <span className={`${slides[current].accent} italic font-normal`}>
                  {slides[current].highlight}
                </span>
              </h1>

              <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                {slides[current].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-5">
            <Link 
              to="/contact" 
              className={`px-10 py-5 ${slides[current].btn} text-white font-bold rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-3`}
            >
              Get Started <ArrowRight size={20} />
            </Link>
            
            <button 
              onClick={() => setDrawerOpen(true)}
              className="px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-3 shadow-sm"
            >
              <Menu size={20} /> Services
            </button>
          </div>
        </div>
      </div>

      {/* --- LIGHT SLIDING DRAWER --- */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[110] p-10 shadow-2xl border-l border-slate-100"
            >
              <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-emerald-600" />
                  <span className="font-black uppercase tracking-tighter text-slate-900 text-xl">LaborForge</span>
                </div>
                <button onClick={() => setDrawerOpen(false)} className="p-2 text-slate-400 hover:text-red-500 transition-colors"><X /></button>
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: <ShieldCheck />, title: "Compliance Management", color: "text-emerald-600", bg: "bg-emerald-50" },
                  { icon: <BarChart3 />, title: "Payroll Structuring", color: "text-blue-600", bg: "bg-blue-50" },
                  { icon: <CheckCircle2 />, title: "Contract Labour", color: "text-rose-600", bg: "bg-rose-50" },
                  { icon: <Award />, title: "ESI & EPF Advisory", color: "text-amber-600", bg: "bg-amber-50" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 p-4 rounded-2xl border border-slate-50 hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group"
                  >
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-800">{item.title}</span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-4">Lead Advisor</p>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">CR</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-none">Chandan Roy</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">Strategic Labour Relations</p>
                  </div>
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