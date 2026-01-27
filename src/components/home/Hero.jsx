import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // Animation variants for staggered text reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center">
      {/* Dynamic Animated Background Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full"
          >
            12+ Years of Compliance Mastery [cite: 3]
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Simplified.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            Expert-led GST, Labour Law, and Payroll management[cite: 5, 11]. 
            We handle the complexity while you focus on scaling your vision[cite: 5, 34].
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-5">
            <Link
              to="/gst-quotation"
              className="group relative px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Get GST Quotation [cite: 9]</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
            >
              Talk to an Expert [cite: 9]
              <span className="text-emerald-400">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual Element / Feature Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            <div className="space-y-6">
              {[
                { label: "GST Returns", status: "Automated", color: "text-blue-400" },
                { label: "Labour Law", status: "Compliant", color: "text-emerald-400" },
                { label: "Payroll", status: "Processed", color: "text-purple-400" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                  <span className="text-slate-300 font-medium">{item.label} </span>
                  <span className={`text-xs font-bold uppercase tracking-widest ${item.color}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-emerald-500/20 rounded-[40px] animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;