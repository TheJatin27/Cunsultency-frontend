import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Zap, Target, Shield } from "lucide-react";

const WhyUs = () => {
  const values = [
    { 
      t: "Clarity over Complexity", 
      d: "Simplifying Indian labour laws into practical, ground-level implementations.",
      icon: <Zap size={20} />,
      color: "bg-amber-100 text-amber-600"
    },
    { 
      t: "Prevention over Correction", 
      d: "Identifying risk gaps early to prevent future liabilities and penalties.",
      icon: <Target size={20} />,
      color: "bg-rose-100 text-rose-600"
    },
    { 
      t: "Practical Solutions", 
      d: "Delivering results based on implementation experience rather than theory.",
      icon: <Shield size={20} />,
      color: "bg-blue-100 text-blue-600"
    }
  ];

  const industries = [
    "Staffing & Manpower", "Manufacturing Units",
    "Mining & Infrastructure", "IT & Service Sector",
    "Retail & Warehousing", "Logistics & Supply"
  ];

  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter">
            Consulting with <br />
            <span className="text-emerald-500 italic font-light">Precision.</span>
          </h2>
          
          <div className="space-y-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-5"
              >
                <div className={`shrink-0 w-12 h-12 ${v.color} rounded-xl flex items-center justify-center`}>
                  {v.icon}
                </div>
                <div>
                  <h4 className="text-slate-900 text-lg font-bold mb-1 tracking-tight">{v.t}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-sm">{v.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h3 className="text-slate-900 font-black text-2xl mb-8 tracking-tight">Industries We Safeguard</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200/50 text-[11px] font-bold uppercase tracking-wider text-slate-700">
                <CheckCircle2 size={14} className="text-emerald-500" />
                {ind}
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-8 border-t border-slate-200">
            <Link to="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-colors">
              Talk to an Expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyUs;