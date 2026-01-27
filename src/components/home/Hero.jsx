import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, ArrowRight } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-950 pt-20 overflow-hidden">
      {/* 1. Enhanced Parallax Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* 2. Text Content with Staggered Entrance */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <span className="px-4 py-1 text-xs font-black tracking-[0.2em] text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full">
              
            </span>
            <div className="h-px w-8 bg-slate-800" />
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">ISO 9001 Certified</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            Stop Worrying, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-[length:200%_auto] animate-gradient">
              Start Scaling.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed">
            We bridge the gap between complex Indian regulations and your business growth with 12+ years of specialized mastery.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            <Link to="/gst-quotation" className="group relative px-10 py-5 bg-white text-slate-950 font-black rounded-2xl overflow-hidden transition-all hover:scale-105 shadow-2xl shadow-white/10">
              <span className="relative z-10 flex items-center gap-2">Get Quote <Zap size={18} fill="currentColor"/></span>
              <div className="absolute inset-0 bg-emerald-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link to="/contact" className="px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all flex items-center gap-3 group">
              Talk to Expert <ArrowRight size={18} className="text-emerald-400 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* 3. Floating 3D Dashboard Element */}
        <motion.div 
          initial={{ opacity: 0, x: 50, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:block relative perspective-1000"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-slate-900/40 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Compliance Score</h4>
                  <p className="text-slate-500 text-xs">Real-time health</p>
                </div>
              </div>
              <div className="text-emerald-400 font-black text-2xl">99.9%</div>
            </div>

            <div className="space-y-5">
              {[
                { label: "GST Returns", status: "Active", icon: <ShieldCheck size={18}/>, color: "text-blue-400" },
                { label: "Payroll Sync", status: "Verified", icon: <Zap size={18}/>, color: "text-emerald-400" },
                { label: "Audit Readiness", status: "Ready", icon: <BarChart3 size={18}/>, color: "text-purple-400" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex justify-between items-center p-5 bg-white/5 rounded-2xl border border-white/5 transition-all"
                >
                  <div className="flex items-center gap-4 text-slate-300 font-bold text-sm">
                    <span className={item.color}>{item.icon}</span>
                    {item.label}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Floating Authority Badge */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-8 -left-12 bg-emerald-500 p-6 rounded-3xl shadow-2xl flex items-center gap-4 border-4 border-slate-950"
          >
            <div className="text-3xl font-black text-slate-950">500+</div>
            <div className="text-[10px] font-black text-slate-900 uppercase leading-none">Successful <br />Audits</div>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. Trust Bar Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-auto py-12 border-t border-white/5 bg-slate-950/50 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 gap-8">
           <p className="text-white font-black text-xl tracking-tighter italic">CHANDAN CONSULTANCY</p>
           <p className="text-white font-black text-xl tracking-tighter italic">GST AUTHORIZED</p>
           <p className="text-white font-black text-xl tracking-tighter italic">LABOUR LAW EXPERT</p>
           <p className="text-white font-black text-xl tracking-tighter italic">PAYROLL CLOUD</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;