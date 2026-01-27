import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, Banknote, ArrowUpRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "GST Compliance",
    desc: "Comprehensive management of GSTR-3B, GSTR-1, and professional handling of tax notices.",
    features: ["Monthly Filing", "ITC Reconciliation", "Notice Defense"],
    icon: <FileText className="text-blue-400" size={32} />,
    color: "group-hover:text-blue-400",
    accent: "bg-blue-400/20",
    border: "hover:border-blue-500/50"
  },
  {
    title: "Labour Law",
    desc: "Expert statutory filings for EPF, ESIC, and gratuity to keep your business protected.",
    features: ["EPF & ESIC", "Payroll Audit", "Compliance Reports"],
    icon: <ShieldCheck className="text-emerald-400" size={32} />,
    color: "group-hover:text-emerald-400",
    accent: "bg-emerald-400/20",
    border: "hover:border-emerald-500/50"
  },
  {
    title: "Payroll Management",
    desc: "End-to-end processing with automated payslips and statutory challan generation.",
    features: ["Salary Disbursement", "TDS Management", "Employee Portal"],
    icon: <Banknote className="text-purple-400" size={32} />,
    color: "group-hover:text-purple-400",
    accent: "bg-purple-400/20",
    border: "hover:border-purple-500/50"
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const ServicesPreview = () => {
  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Compliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Perfected.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              From GST precision to strategic Labour Law navigation, we provide the backbone for your corporate legal stability.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link
              to="/services"
              className="group flex items-center gap-3 text-white text-sm font-black uppercase tracking-tighter bg-slate-900 px-8 py-4 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all shadow-xl"
            >
              All Modules
              <ArrowUpRight className="text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -10 }}
              className={`group relative p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/50 transition-all duration-500 ${s.border} overflow-hidden`}
            >
              {/* Dynamic Accent Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 ${s.accent} blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10">
                <div className="mb-10 p-5 inline-block rounded-2xl bg-slate-950/80 border border-slate-800 group-hover:border-white/10 transition-all duration-500">
                  {s.icon}
                </div>

                <h3 className={`text-2xl font-black text-white mb-4 tracking-tight transition-colors duration-300 ${s.color}`}>
                  {s.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-sm mb-8">
                  {s.desc}
                </p>

                {/* Micro-Features List */}
                <ul className="space-y-3 mb-10">
                  {s.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                      <CheckCircle2 size={14} className="text-emerald-500" /> {feat}
                    </li>
                  ))}
                </ul>

                <Link to="/services" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                  Learn More <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;