import { motion } from "framer-motion";
import { 
  ShieldCheck, ClipboardCheck, Users, Scale, Landmark, 
  History, Calendar, CheckCircle2, ArrowRight, Zap, 
  FileSearch, HardHat, Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const complianceServices = [
  {
    category: "Social Security & Payroll",
    items: [
      { name: "EPF Compliance", desc: "Monthly returns, UAN management, and withdrawal assistance." },
      { name: "ESI Compliance", desc: "Registration, monthly contributions, and benefit claims." },
      { name: "LWF Compliance", desc: "State-wise Labour Welfare Fund contributions and filings." },
      { name: "Professional Tax (PT)", desc: "Monthly/Annual PT returns and registration management." },
    ],
    icon: <Users className="text-blue-600" />
  },
  {
    category: "Statutory Benefits",
    items: [
      { name: "Gratuity Act", desc: "Structuring gratuity funds and handling final settlements." },
      { name: "Bonus Act", desc: "Calculation and timely disbursement of annual statutory bonus." },
      { name: "Maternity Benefit", desc: "Policy drafting and compliance with leave regulations." },
    ],
    icon: <Landmark className="text-emerald-600" />
  },
  {
    category: "Establishment Licensing",
    items: [
      { name: "Shops & Establishments", desc: "Registration, renewal, and maintenance of registers." },
      { name: "CLRA Compliance", desc: "Contract Labour license and contractor management." },
      { name: "Factory Compliance", desc: "Safety audits, licensing, and factory act registers." },
    ],
    icon: <HardHat className="text-orange-600" />
  }
];

const ComplianceRetainership = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen pb-32 pt-20">
      {/* 1. Retainership Hero */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-6">
              <History size={14} className="text-blue-500" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Retainership Model</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
              Ongoing <span className="text-blue-500 italic font-light">Compliance.</span>
            </h1>
            
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              Transform your statutory obligations from a burden into a competitive advantage. 
              Our retainership services provide 365-day protection against litigation and penalties.
            </p>

            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span className="text-xs font-black text-slate-700 uppercase tracking-tight">Audit Ready 24/7</span>
               </div>
               <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                 <CheckCircle2 size={16} className="text-emerald-500" />
                 <span className="text-xs font-black text-slate-700 uppercase tracking-tight">Zero Penalty Guarantee</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. The Bento Service Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-8">
        {complianceServices.map((cat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-8 px-2">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                {cat.icon}
              </div>
              <h2 className="text-sm font-black uppercase tracking-widest text-slate-900">{cat.category}</h2>
            </div>

            {cat.items.map((item, i) => (
              <div 
                key={i}
                className="group p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 cursor-default"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <Zap size={16} className="text-slate-200 group-hover:text-amber-400 transition-colors" />
                </div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        ))}
      </section>

      {/* 3. The "Why Retainership" Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                Minimum Wages <br />
                <span className="text-emerald-400 italic font-light text-3xl md:text-4xl">Structuring & Advisory.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 font-medium">
                Retainership isn't just about filings. We help you structure CTC components to ensure they 
                align with state-specific Minimum Wage notifications while optimizing for tax and social security.
              </p>
              <ul className="space-y-4 mb-10">
                {["Bi-annual VDA adjustment tracking", "Wage component restructuring", "Overtime & Leave Encashment audits"].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-bold">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Maternity Act", val: "Registers" },
                { label: "Bonus Act", val: "Form C" },
                { label: "Gratuity", val: "Nomination" },
                { label: "S&E", val: "Renewals" }
              ].map((box, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                  <p className="text-[10px] font-black uppercase text-emerald-400 tracking-[0.2em] mb-2">{box.label}</p>
                  <p className="text-white font-black text-xl">{box.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Call to Action */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 text-blue-600">
          <FileSearch size={32} />
        </div>
        <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Need a Comprehensive Compliance Audit?</h3>
        <p className="text-slate-500 font-medium mb-10">
          Before moving to a retainership model, we recommend a 360-degree health check of your 
          existing statutory records.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200"
        >
          Book a Consultation <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default ComplianceRetainership;