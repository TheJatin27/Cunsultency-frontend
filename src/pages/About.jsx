import React from "react";
import { motion } from "framer-motion";
import { 
  Target, ShieldCheck, Sparkles, TrendingUp, 
  Gavel, Compass, Briefcase, ChevronRight, 
  Building2, Factory, HardHat, Cpu, Truck, Rocket
} from "lucide-react";

export default function About() {
  const values = [
    { 
      title: "Clarity over Complexity", 
      desc: "We simplify the dynamic landscape of Indian labour laws into actionable, straightforward insights for your business.", 
      icon: <Compass size={24} />, 
      color: "bg-emerald-50 text-emerald-600" 
    },
    { 
      title: "Prevention over Correction", 
      desc: "Identifying compliance gaps early to safeguard your operations from penalties, prosecutions, and disruptions.", 
      icon: <ShieldCheck size={24} />, 
      color: "bg-slate-100 text-slate-600" 
    },
    { 
      title: "Practical Implementation", 
      desc: "Moving beyond legal theory to provide ground-level solutions that actually work in day-to-day operations.", 
      icon: <Gavel size={24} />, 
      color: "bg-emerald-50 text-emerald-600" 
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20 font-sans">
      {/* HERO SECTION: LEGACY & LEADERSHIP */}
      <section className="py-20 px-6 relative overflow-hidden border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] -z-0 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded-sm text-[9px] font-black uppercase tracking-widest mb-6">
                <Sparkles size={10} /> The Firm
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-[1.15] tracking-tight text-slate-900">
                Practical Advisory. <br/>
                <span className="text-emerald-600 italic font-serif font-light">Forging Success.</span>
              </h1>
              
              <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-8 font-light max-w-xl border-l-2 border-emerald-500/20 pl-6">
                LaborForge Advisors is built on the conviction that compliance is not just a statutory burden—it is a strategic shield. We protect your reputation and finances through precise, ground-level implementation.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 p-6 border border-slate-100 rounded-sm">
                  <p className="text-3xl font-bold text-slate-900 tracking-tighter">Multi<span className="text-emerald-600">-</span>State</p>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-2">Regional Statutory Expertise</p>
                </div>
                <div className="bg-slate-50 p-6 border border-slate-100 rounded-sm">
                  <p className="text-3xl font-bold text-slate-900 tracking-tighter">Precision</p>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-2">Audit-Ready Systems</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-[500px] bg-slate-100 rounded-sm border border-slate-200 overflow-hidden flex items-end relative group">
                {/* Visual placeholder for leadership portrait */}
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
                
                <div className="relative z-20 p-10 w-full">
                   <p className="text-emerald-400 font-serif italic text-xl mb-4">"We don’t just point out non-compliance—we help fix it."</p>
                   <p className="text-white text-[10px] uppercase tracking-[0.3em] font-black">Chandan Roy • Principal Advisor</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-slate-900 p-6 rounded-sm shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-600 flex items-center justify-center text-white shadow-lg">
                  <Briefcase size={18} />
                </div>
                <div>
                  <p className="text-lg font-bold text-white leading-none tracking-tight">Audit Ready</p>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Inspection-Safe Operations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STRATEGIC CAPABILITIES */}
      <section className="py-24 bg-slate-50/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 tracking-tight uppercase text-slate-900">
                Industrial <span className="text-emerald-600 italic font-serif font-light">Footprint.</span>
              </h3>
              <p className="text-slate-500 font-light leading-relaxed mb-10 max-w-lg">
                Our tailored compliance strategies are forged through extensive exposure to high-complexity environments across India.
              </p>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {[
                  { name: "Staffing & Manpower", icon: <Building2 size={14}/> },
                  { name: "Manufacturing Units", icon: <Factory size={14}/> },
                  { name: "Mining & Infrastructure", icon: <HardHat size={14}/> },
                  { name: "IT & Service Sector", icon: <Cpu size={14}/> },
                  { name: "Retail & Logistics", icon: <Truck size={14}/> },
                  { name: "Startups & Emerging Ent.", icon: <Rocket size={14}/> }
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-wider text-slate-600 group cursor-default">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    {item.name} 
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-4">
              <div className="p-8 bg-white border border-slate-100 rounded-sm hover:border-emerald-500 transition-all shadow-sm">
                <Target className="text-emerald-600 mb-4" size={28} />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-slate-900">Our Mission</h4>
                <p className="text-slate-500 text-[13px] font-light leading-relaxed">
                  To serve as an extended compliance arm, ensuring organizations stay audit-ready and legally secure through partnership rather than transactional service.
                </p>
              </div>
              <div className="p-8 bg-white border border-slate-100 rounded-sm hover:border-emerald-500 transition-all shadow-sm">
                <TrendingUp className="text-emerald-600 mb-4" size={28} />
                <h4 className="text-sm font-black uppercase tracking-widest mb-2 text-slate-900">Our Commitment</h4>
                <p className="text-slate-500 text-[13px] font-light leading-relaxed">
                  Delivering accurate, up-to-date statutory advisory with transparent communication and practical, business-friendly implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 uppercase">
            Consulting <span className="text-emerald-600 italic font-serif font-light">Philosophy</span>
          </h2>
          <div className="h-0.5 w-12 bg-emerald-500 mx-auto mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-slate-100 hover:border-emerald-200 transition-all group shadow-sm hover:shadow-md"
            >
              <div className={`inline-flex w-10 h-10 mb-8 items-center justify-center rounded-sm ${v.color}`}>
                {v.icon}
              </div>
              <h4 className="text-[11px] font-black mb-4 text-slate-900 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                {v.title}
              </h4>
              <p className="text-slate-500 text-[13px] leading-relaxed font-light">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-slate-900 p-12 md:p-20 relative overflow-hidden rounded-sm shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px]" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white uppercase">
              Forging Compliance. <br/><span className="text-emerald-400 italic font-serif font-light">Shaping Success.</span>
            </h3>
            <p className="text-slate-400 text-base mb-10 font-light max-w-2xl mx-auto leading-relaxed italic">
              "Understand your risk exposure before it becomes a problem."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 text-white font-black uppercase tracking-widest text-[10px] px-10 py-4 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 group">
                Request Advisory Consultation <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform"/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}