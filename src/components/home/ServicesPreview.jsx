import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Users, FileSearch, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const services = [
  {
    title: "Labour Law Compliance",
    desc: "Management of ongoing labour law compliances, filings, and statutory adherence.",
    features: ["Timely Filings", "Accurate Records", "Complete Adherence"],
    icon: <ShieldCheck size={28} />,
    theme: {
      bg: "bg-emerald-50",
      iconBox: "bg-emerald-500",
      glow: "shadow-emerald-200/50",
      text: "text-emerald-700",
      hoverBorder: "hover:border-emerald-300"
    }
  },
  {
    title: "Minimum Wages & CLRA",
    desc: "Structuring wages per legal requirements and ensuring CLRA licensing compliance.",
    features: ["Wage Structuring", "CLRA Audits", "Licensing Support"],
    icon: <FileSearch size={28} />,
    theme: {
      bg: "bg-rose-50",
      iconBox: "bg-rose-500",
      glow: "shadow-rose-200/50",
      text: "text-rose-700",
      hoverBorder: "hover:border-rose-300"
    }
  },
  {
    title: "EPF & ESI Advisory",
    desc: "From registrations to monthly compliance, inspections, and notice handling.",
    features: ["EPF & ESI Monthly", "Notice Handling", "Audit Readiness"],
    icon: <Users size={28} />,
    theme: {
      bg: "bg-blue-50",
      iconBox: "bg-blue-500",
      glow: "shadow-blue-200/50",
      text: "text-blue-700",
      hoverBorder: "hover:border-blue-300"
    }
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-[#FCFAF7] py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-yellow-50/50 to-transparent rounded-full blur-3xl -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Expertise Modules</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none"
          >
            Built on <span className="italic font-light text-slate-400">Experience.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-2xl leading-relaxed"
          >
            Simplifying complex labour laws to ensure smooth operations and safeguard your business against future liabilities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className={`group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 shadow-xl ${s.theme.glow} ${s.theme.hoverBorder}`}
            >
              {/* Icon Header */}
              <div className="flex justify-between items-start mb-12">
                <div className={`p-5 rounded-2xl ${s.theme.bg} ${s.theme.text} transition-transform group-hover:rotate-6 group-hover:scale-110 duration-500`}>
                  {s.icon}
                </div>
                <Link to="/services" className="p-3 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                  <ArrowUpRight size={20} />
                </Link>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {s.title}
              </h3>
              
              <p className="text-slate-500 text-sm mb-10 leading-relaxed font-medium">
                {s.desc}
              </p>

              <div className="space-y-4 mb-10">
                {s.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full ${s.theme.bg} flex items-center justify-center`}>
                      <CheckCircle2 size={12} className={s.theme.text} />
                    </div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">{feat}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/services" 
                className={`w-full py-4 rounded-xl border border-slate-100 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all`}
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Link to="/services" className="group flex items-center gap-3 text-slate-900 text-xs font-black uppercase tracking-widest bg-white px-12 py-5 rounded-full border border-slate-200 hover:shadow-2xl transition-all">
            Explore All 15+ Services <ArrowUpRight className="text-emerald-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;