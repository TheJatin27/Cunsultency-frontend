import { motion } from "framer-motion";
import { 
  ShieldAlert, Search, FileBarChart, Users, 
  Eye, Scale, TrendingDown, ClipboardList,
  CheckCircle2, ArrowRight, AlertTriangle, Briefcase, 
  BarChart3, Microscope
} from "lucide-react";
import { Link } from "react-router-dom";

const auditServices = [
  {
    title: "Labour Law Audit",
    icon: <Search className="text-blue-600" />,
    description: "A comprehensive 360° review of all statutory records, registers, and returns to identify hidden gaps.",
    scope: ["Registers Review", "Return Filings Check", "License Validity", "Display Requirements"]
  },
  {
    title: "Vendor Compliance",
    icon: <Users className="text-emerald-600" />,
    description: "Protecting the Principal Employer by auditing contractor records and ensuring EPF/ESI remittances.",
    scope: ["Contractor ECR Review", "Challan Verification", "CLRA License Check", "Wage Register Audit"]
  },
  {
    title: "Due Diligence",
    icon: <FileBarChart className="text-purple-600" />,
    description: "Specialized audits for M&A or investors to quantify statutory liabilities before the deal closes.",
    scope: ["Liability Forecasting", "Gratuity Provisioning", "Past Litigation Risk", "Penalty Exposure"]
  }
];

const ComplianceAudit = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen pb-32 pt-20">
      {/* 1. Forensic Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
              <Microscope size={14} className="text-slate-900" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Risk Intelligence Unit</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
              Audit & <br />
              <span className="text-slate-400 italic font-light">Due Diligence.</span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
              Uncovering statutory liabilities before they become legal nightmares. Our forensic audits 
              protect investors, buyers, and principal employers from inherited non-compliance.
            </p>

            <div className="flex flex-wrap gap-4">
               <div className="bg-red-50 text-red-600 px-6 py-4 rounded-2xl border border-red-100 flex items-center gap-3">
                 <ShieldAlert size={20} />
                 <span className="text-xs font-black uppercase tracking-widest">Identify Liabilities</span>
               </div>
               <div className="bg-emerald-50 text-emerald-600 px-6 py-4 rounded-2xl border border-emerald-100 flex items-center gap-3">
                 <CheckCircle2 size={20} />
                 <span className="text-xs font-black uppercase tracking-widest">Audit-Proof Assets</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Forensic Service Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {auditServices.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 flex flex-col group transition-all duration-500"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                {service.title}
              </h3>
              
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>

              <div className="space-y-3 mb-10 pt-6 border-t border-slate-50">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Audit Parameters</p>
                {service.scope.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-emerald-500 transition-colors" />
                    <span className="text-xs font-bold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center justify-between w-full p-5 rounded-2xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all font-black text-[10px] uppercase tracking-widest">
                Request Audit Scope <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The Investor / Buyer Due Diligence Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden">
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20">
                <BarChart3 size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                M&A Statutory <br />
                <span className="text-emerald-400 italic font-light text-3xl md:text-4xl">Financial Exposure.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
                Investors often overlook "Long-Tail" statutory liabilities. We quantify the financial impact of 
                unpaid gratuity, under-contributed ESI, and vendor non-compliance to help you negotiate 
                fairer deal valuations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="text-amber-500" size={24} />
                  <p className="text-slate-300 text-sm font-bold uppercase tracking-wide">Liability Risk: High-Penalty Areas identified</p>
                </div>
                <div className="flex items-center gap-4">
                  <TrendingDown className="text-emerald-500" size={24} />
                  <p className="text-slate-300 text-sm font-bold uppercase tracking-wide">Escrow Strategy: Based on audit findings</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl">
               <h4 className="text-white font-black uppercase text-xs tracking-widest mb-8 border-b border-white/10 pb-4">Audit Reporting Flow</h4>
               <div className="space-y-8">
                 {[
                   { t: "Field Inspection", d: "Physical verification of registers and displays." },
                   { t: "ECR Verification", d: "Direct portal checks for EPF/ESI remittance data." },
                   { t: "Risk Mapping", d: "Classification of gaps into High, Medium, and Low risk." },
                   { t: "Final Advisory", d: "Remediation plan and quantification of total liability." }
                 ].map((step, i) => (
                   <div key={i} className="flex gap-6">
                      <span className="text-emerald-500 font-black text-xl italic leading-none">0{i+1}</span>
                      <div>
                        <p className="text-white font-black text-sm uppercase tracking-tight mb-1">{step.t}</p>
                        <p className="text-slate-500 text-xs font-medium">{step.d}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Minimum Wages Audit Highlight */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <div className="inline-block p-4 bg-emerald-50 rounded-2xl text-emerald-600 mb-8">
          <Scale size={32} />
        </div>
        <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight italic decoration-emerald-500 underline underline-offset-8">Minimum Wages Review.</h3>
        <p className="text-slate-500 text-lg font-medium leading-relaxed">
          The most common audit failure point. We perform a category-wise check against state-specific 
          VDA notifications to ensure no employee is under-paid—the #1 trigger for labor disputes.
        </p>
      </section>
    </div>
  );
};

export default ComplianceAudit;