import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Users, 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Gavel,
  Briefcase,
  FileText
} from "lucide-react";

const services = [
  {
    title: "Labour Law Management",
    desc: "Management of ongoing labour law compliances, statutory adherence, and audit-readiness.",
    features: ["Timely Filings", "Accurate Records", "Regulatory Adherence"],
    icon: <ShieldCheck size={24} />,
    tag: "Primary Compliance"
  },
  {
    title: "Wage & CLRA Advisory",
    desc: "Strategic wage structuring per legal codes and licensing for principal employers and contractors.",
    features: ["Minimum Wage Mapping", "CLRA Licensing", "Statutory Audits"],
    icon: <Scale size={24} />,
    tag: "Risk Mitigation"
  },
  {
    title: "Social Security (EPF/ESI)",
    desc: "End-to-end management of social security registrations, monthly filings, and notice handling.",
    features: ["Registration & Filings", "Inspection Support", "Dispute Resolution"],
    icon: <Briefcase size={24} />,
    tag: "Financial Security"
  },
];

const ServicesPreview = () => {
  return (
    <section className="bg-[#0F172A] py-32 relative overflow-hidden border-t border-slate-800">
      {/* Structural Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">Service Verticals</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
            >
              Precision Compliance. <br />
              <span className="text-slate-500 font-light italic">Built on domain expertise.</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 text-lg max-w-lg pb-2 leading-relaxed"
          >
            We navigate the complexities of Indian Labour Laws [cite: 5] to ensure your business remains risk-free, protecting your reputation and operations[cite: 47, 48].
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-12 bg-slate-900/40 border border-slate-800/50 hover:bg-slate-800/40 transition-all duration-500"
            >
              {/* Subtle Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div className="text-amber-500 group-hover:scale-110 transition-transform duration-500">
                    {s.icon}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-slate-700 px-2 py-1 rounded-sm">
                    {s.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light">
                  {s.desc}
                </p>

                <div className="space-y-3 mb-12">
                  {s.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 size={14} className="text-amber-500/50" />
                      <span className="text-[11px] font-medium text-slate-300 uppercase tracking-wider">{feat}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white group-hover:text-amber-400 transition-all"
                >
                  View Details <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 border border-slate-800 bg-slate-900/20"
        >
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="p-3 bg-amber-500/10 rounded-full">
              <Gavel size={20} className="text-amber-500" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Complex Multi-State Requirements?</p>
              <p className="text-slate-500 text-xs">Our solutions are tailored to your specific industry challenges[cite: 34].</p>
            </div>
          </div>
          <Link to="/services" className="px-10 py-4 bg-white text-[#0F172A] text-xs font-bold uppercase tracking-widest hover:bg-amber-500 transition-colors">
            All Compliance Modules
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;