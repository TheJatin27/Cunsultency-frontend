import { motion } from "framer-motion";
import { 
  Gavel, Scale, FileWarning, ArrowRightLeft, 
  Users, Briefcase, GraduationCap, Calculator,
  ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck,
  Zap, Settings, BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const transitionModules = [
  {
    title: "Wage Redefinition",
    icon: <Calculator className="text-indigo-600" />,
    description: "Aligning your CTC with the 50% basic wage rule to prevent sudden spikes in PF and Gratuity liability.",
    points: ["Wage Component Mapping", "Social Security Impact", "Overtime Rate Recalculation"]
  },
  {
    title: "OSH Code Guidance",
    icon: <ShieldCheck className="text-emerald-600" />,
    description: "Implementing Occupational Safety, Health & Working Conditions standards for workplace compliance.",
    points: ["Safety Audit Protocols", "Health & Welfare Benefits", "Annual Leave Restructuring"]
  },
  {
    title: "Industrial Relations",
    icon: <Scale className="text-orange-600" />,
    description: "Modernizing Standing Orders and dispute resolution frameworks under the new IR Code.",
    points: ["Standing Orders Drafting", "Worker Grievance Units", "Retrenchment Strategy"]
  }
];

const LabourCodeTransition = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen pb-32 pt-20">
      {/* 1. Intelligence Hero */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
              <Gavel size={14} className="text-indigo-600" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Regulatory Modernization</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
              Labour Code <br />
              <span className="text-indigo-600 italic font-light">Transition.</span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
              The 4 Labour Codes are set to redefine the Indian employer-employee relationship. 
              Our transition advisory ensures your HR and Payroll systems are compliant before the "Day Zero" rollout.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-4 bg-slate-900 text-white rounded-2xl flex items-center gap-3">
                 <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping" />
                 <span className="text-xs font-black uppercase tracking-widest">Code Rollout Preparedness</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Gap Analysis & Impact Model */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current vs Future Comparison */}
          <div className="bg-white border border-slate-100 p-10 rounded-[3rem] shadow-xl shadow-slate-200/50">
            <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
              <ArrowRightLeft className="text-indigo-600" />
              Impact Mapping
            </h3>
            
            <div className="space-y-8">
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-300">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Current Framework</p>
                <p className="text-slate-700 font-bold text-sm">Fragmented Wage Definitions across 29 Central Acts (PF, ESI, Gratuity, Bonus all vary).</p>
              </div>

              <div className="flex justify-center py-2">
                 <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    <Zap size={16} />
                 </div>
              </div>

              <div className="p-6 bg-indigo-50 rounded-2xl border-l-4 border-indigo-600">
                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">New Labour Codes</p>
                <p className="text-indigo-900 font-black text-sm italic underline decoration-indigo-200 underline-offset-4">Uniform 'Wages' Definition: Exclusions capped at 50% of Total CTC.</p>
              </div>
            </div>
            
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">Strategic Gap Analysis.</h2>
              <p className="text-slate-500 font-medium">We perform a forensic audit of your existing HR policies to identify exactly where you will fall short once the codes are notified.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {["HR Policy Restructuring", "Payroll Logic Update", "Standing Orders Audit", "Contract Labour Strategy"].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm">
                   <CheckCircle2 size={18} className="text-emerald-500" />
                   <span className="text-xs font-black text-slate-700 uppercase tracking-tight">{item}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transition Modules Grid */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {transitionModules.map((module, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10">
               {module.icon}
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase tracking-widest">{module.title}</h4>
            <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">
              {module.description}
            </p>
            <ul className="space-y-3 pt-6 border-t border-slate-50">
              {module.points.map((p, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* 4. Leadership Training Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -mr-20 -mt-20" />
          
          <div className="lg:w-1/2 relative z-10">
            <div className="w-20 h-20 bg-indigo-500/20 rounded-3xl flex items-center justify-center mb-8 border border-indigo-500/20">
              <GraduationCap size={40} className="text-indigo-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
              HR & Management <br />
              <span className="text-indigo-400 italic font-light text-3xl md:text-4xl">Training Sessions.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 font-medium">
              Compliance isn't just a payroll task; it's a culture. We conduct specialized workshops 
              for HR heads and Management to understand the liability shifts and decision-making 
              under the New Codes.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-indigo-600 hover:bg-white text-white hover:text-indigo-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-indigo-900/40">
              Schedule Workshop <ArrowRight size={18} />
            </Link>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-4 relative z-10">
             {[
               { t: "Simulation Workshops", d: "Live payroll math with new code parameters." },
               { t: "Policy Playbooks", d: "Ready-to-use HR templates for the transition." },
               { t: "Q&A Clinics", d: "Direct sessions to resolve specific industry hurdles." }
             ].map((box, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl group hover:bg-white/10 transition-colors">
                  <p className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-2 italic">Module 0{i+1}</p>
                  <p className="text-white font-black text-xl mb-1 tracking-tight">{box.t}</p>
                  <p className="text-slate-500 text-xs font-medium">{box.d}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <div className="w-16 h-1 bg-indigo-500 mx-auto mb-8 rounded-full" />
        <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight italic decoration-indigo-200 underline underline-offset-8">Start Your Transition Audit Today.</h3>
        <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl mx-auto">
          Don't wait for the notification to scramble. Understand your financial and operational 
          exposure while you still have time to restructure.
        </p>
      </section>
    </div>
  );
};

export default LabourCodeTransition;