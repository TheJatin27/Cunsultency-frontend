import { motion } from "framer-motion";
import { 
  Network, 
  Pyramid, 
  Calculator, 
  FileWarning, 
  Lightbulb, 
  Globe, 
  Compass, 
  Gavel,
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  BrainCircuit,
  Settings2, 
  Construction,
  Users // Added missing import
} from "lucide-react";
import { Link } from "react-router-dom";

const advisoryServices = [
  {
    title: "Staffing & Manpower Industry",
    icon: <Users className="text-blue-600" />,
    description: "Specialized advisory for staffing firms on CLRA licensing, contractor liability, and margin optimization.",
    tags: ["CLRA", "Contractor Risk", "Service Level Compliance"]
  },
  {
    title: "Mining & Infrastructure",
    icon: <Construction className="text-orange-600" />,
    description: "Navigating the complex Mines Act and high-risk infra compliance for remote site operations.",
    tags: ["Mines Act", "Site Safety", "Contractor Audits"]
  },
  {
    title: "Multi-State Structuring",
    icon: <Globe className="text-emerald-600" />,
    description: "Standardizing compliance across 20+ states with varying S&E and Minimum Wage laws.",
    tags: ["Pan-India Policy", "S&E Mapping", "State-Specific VDA"]
  }
];

const StrategicAdvisory = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen pb-32 pt-20">
      {/* 1. Strategy Hero */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
              <BrainCircuit size={14} className="text-indigo-500" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Enterprise Strategy</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
              Specialized <br />
              <span className="text-indigo-600 italic font-light">Advisory.</span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
              Future-proof your business against the upcoming Labour Codes and optimize your CTC 
              structures for maximum efficiency and statutory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The New Labour Code Spotlight */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="absolute top-0 right-0 w-full h-full opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #4f46e5 25%, transparent 25%, transparent 50%, #4f46e5 50%, #4f46e5 75%, transparent 75%, transparent)' , backgroundSize: '100px 100px' }} />
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500 rounded-full mb-6">
                 <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">Priority Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                Labour Code <br />
                <span className="text-indigo-400 italic font-light">Implementation.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                The four new Labour Codes will fundamentally change the definition of "Wages." 
                We help you simulate the financial impact and redesign your payroll to stay compliant before the rollout.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {["Wage Definition Audit", "Working Hour Redesign", "Social Security Impact", "Policy Overhaul"].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-emerald-400" size={18} />
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wide">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl">
               <p className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-6">Impact Simulation</p>
               <div className="space-y-6">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Under the new code, 'Wages' must be at least 50% of the total CTC. This change will affect 
                    your EPF, Gratuity, and ESI contributions.
                  </p>
                  <div className="p-6 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                     <p className="text-white font-black text-xs uppercase tracking-widest mb-2">Outcome</p>
                     <p className="text-indigo-200 text-sm font-medium">Identify 100% of your statutory liability increases before they happen.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTC Structuring & Specialized Industry Grid */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
        {/* CTC Structuring Card - Large Span */}
        <motion.div 
          className="lg:col-span-2 p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 relative group overflow-hidden"
          whileHover={{ y: -5 }}
        >
          <div className="relative z-10">
            <Calculator size={40} className="text-emerald-500 mb-8" />
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">CTC Compliance Structuring</h3>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-8 max-w-xl">
              Optimize your salary components to be tax-efficient for employees while remaining 100% 
              statutorily compliant with PF, ESI, and Minimum Wage norms.
            </p>
            <div className="flex flex-wrap gap-3">
               {["HRA Optimization", "LTA Structuring", "Statutory Bonus Alignment", "VDA Sensitivity"].map((chip) => (
                 <span key={chip} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-[10px] font-black uppercase tracking-widest border border-slate-100">{chip}</span>
               ))}
            </div>
          </div>
          <Settings2 size={200} className="absolute -bottom-20 -right-20 text-slate-50 opacity-50 group-hover:rotate-45 transition-transform duration-700" />
        </motion.div>

        {/* Industry Cards */}
        {advisoryServices.map((service, idx) => (
          <div key={idx} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">
              {service.icon}
            </div>
            <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed flex-grow">
              {service.description}
            </p>
            <div className="mt-8 pt-6 border-t border-slate-50 space-y-2">
              {service.tags.map(t => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-indigo-400 rounded-full" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 4. Contact Footer */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Ready to Re-structure?</h3>
        <p className="text-slate-500 font-medium mb-10 max-w-xl mx-auto">
          Strategic advisory is bespoke. Let's schedule a confidential discussion to evaluate 
          your current organizational structure and compliance health.
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-600 transition-all shadow-2xl shadow-indigo-100"
        >
          Consult the Strategists <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};

export default StrategicAdvisory;