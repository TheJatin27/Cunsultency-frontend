import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  Users, 
  FileCheck, 
  AlertTriangle, 
  ChevronRight,
  TrendingUp,
  MessageSquare,
  Globe
} from 'lucide-react';

const LaborForgeElite = () => {
  const { scrollYProgress } = useScroll();
  
  // Background transition: Deep Navy -> Electric Blue -> Carbon Black
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8],
    ["#020617", "#0f172a", "#09090b"]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div style={{ backgroundColor: bgColor }} className="min-h-screen text-white selection:bg-blue-500/30">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5">
        <div className="text-xl font-black tracking-tighter">LABOR<span className="text-blue-500">FORGE</span></div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">The Firm</a>
          <a href="#" className="hover:text-white transition-colors">Expertise</a>
          <a href="#" className="hover:text-white transition-colors">E-Library</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <button className="bg-white/5 border border-white/10 px-5 py-2 rounded-full text-sm font-bold hover:bg-white/10 transition-all">
          Partner Portal
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        {/* Animated Glow Backdrop */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10"
        />

        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            India's Trusted Labour Law Partner
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Forging <span className="text-blue-500">Compliance</span>,<br />
          Shaping Success.
        </motion.h1>

        <motion.p 
          className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Led by <strong>Chandan Roy</strong>, we provide practical, ground-level 
          labour law solutions for the modern Indian enterprise.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all shadow-xl shadow-blue-600/20">
            Talk to an Expert <ChevronRight size={20} />
          </button>
          <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-10 py-4 rounded-xl font-bold text-lg transition-all">
            Explore Solutions
          </button>
        </motion.div>
      </section>

      {/* --- SERVICES BENTO GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">End-to-End Expertise</h2>
            <p className="text-gray-500 mt-2 italic">Building a future-ready, legally secure organisation.</p>
          </div>
          <div className="text-blue-500 font-bold flex items-center gap-2 cursor-pointer group">
            View all services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-6 gap-6"
        >
          {/* Large Primary Card */}
          <motion.div variants={itemVariants} className="md:col-span-4 p-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[2.5rem] relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-4">Labour Law <br/>Compliance Management</h3>
                <p className="text-blue-100 max-w-md text-lg">
                  Ongoing statutory filings, accurate record-keeping, and complete state-wise adherence.
                </p>
              </div>
              <button className="mt-8 bg-white text-blue-700 w-fit px-6 py-2 rounded-full font-bold text-sm">Learn More</button>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
               <ShieldCheck size={300} />
            </div>
          </motion.div>

          {/* Medium Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 p-10 bg-zinc-900 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-colors">
            <TrendingUp className="text-blue-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-balance">Minimum Wages Structuring</h3>
            <p className="text-gray-400">Mapping employee categories and structuring wages per latest legal requirements.</p>
          </motion.div>

          {/* Small Card 1 */}
          <motion.div variants={itemVariants} className="md:col-span-2 p-10 bg-zinc-900 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-colors group">
             <Users className="text-blue-500 mb-6 group-hover:animate-pulse" size={40} />
             <h3 className="text-xl font-bold mb-2">EPF & ESI Advisory</h3>
             <p className="text-sm text-gray-500">From registrations to monthly audits and inspection support.</p>
          </motion.div>

          {/* Small Card 2 */}
          <motion.div variants={itemVariants} className="md:col-span-2 p-10 bg-zinc-900 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-colors">
             <FileCheck className="text-blue-500 mb-6" size={40} />
             <h3 className="text-xl font-bold mb-2">CLRA Compliance</h3>
             <p className="text-sm text-gray-500">Licensing and returns for principal employers and contractors.</p>
          </motion.div>

          {/* Feature Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 p-10 bg-white text-black rounded-[2.5rem] flex flex-col justify-center text-center">
             <p className="text-sm font-bold uppercase tracking-widest mb-2 opacity-50">Consulting Philosophy</p>
             <h3 className="text-2xl font-black italic leading-tight">"Prevention Over Correction."</h3>
          </motion.div>
        </motion.div>
      </section>

      {/* --- FLOATING CTA --- */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white text-black px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 cursor-pointer hover:scale-105 transition-transform"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <MessageSquare size={16} className="text-white" />
        </div>
        <span className="font-bold tracking-tight">Consult an Expert Now</span>
      </motion.div>

      {/* --- RISK BANNER --- */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-5xl mx-auto bg-red-950/10 border border-red-500/20 p-16 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />
          <AlertTriangle className="mx-auto text-red-500 mb-6" size={48} />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
            "A small gap today can turn into a major liability tomorrow."
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
            Don't wait for an inspection. Get a professional compliance review from <strong>LaborForge Advisors</strong> today.
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-xl font-black uppercase tracking-tighter hover:bg-gray-200 transition-all">
            Request Risk Audit
          </button>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-xs tracking-widest uppercase">
        © 2026 LaborForge Advisors • Forging Compliance, Shaping Success
      </footer>

    </motion.div>
  );
};

export default LaborForgeElite;