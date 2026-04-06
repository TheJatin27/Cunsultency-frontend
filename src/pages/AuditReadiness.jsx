import React from 'react';
import { 
  Gavel, 
  Search, 
  ShieldCheck, 
  FileText, 
  ClipboardList, 
  Lightbulb,
  Scale
} from 'lucide-react';

const AuditReadiness = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:px-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <header className="relative bg-gradient-to-r from-[#1e293b] to-[#334155] p-8 text-white">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-4 tracking-tight">
              Audit & Labour Inspection Readiness
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-sky-300">
              What is Audit Readiness?
            </h2>
            <p className="text-sm leading-relaxed text-slate-200 opacity-90 font-light">
              Audit readiness means having all payroll records, statutory registers and compliance 
              documents properly maintained, organized, and aligned for verification by labour authorities.
            </p>
          </div>
          {/* Subtle Icon Background */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden md:block">
            <Gavel size={160} strokeWidth={1} />
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-8">
          
          {/* Where It Applies */}
          <section className="bg-sky-50 p-5 rounded-xl border border-sky-100">
            <div className="flex items-center gap-2 mb-4 text-sky-900">
              <Search size={18} className="text-sky-600" />
              <h3 className="text-sm font-bold uppercase tracking-wider">Where It Applies</h3>
            </div>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm italic text-slate-600">
              <li className="flex items-center gap-2">
                <span className="text-sky-500">•</span> Companies subject to labour inspections
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-500">•</span> Organizations with PF, ESIC, and contractor compliance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-500">•</span> Multi-location businesses
              </li>
            </ul>
          </section>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* When Do You Need This */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <Scale size={18} className="text-slate-400" />
                <h3 className="font-bold text-xs uppercase text-slate-900">When Do You Need This</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Receipt of inspection notice",
                  "Incomplete or unorganized documentation",
                  "Mismatch in payroll and statutory records",
                  "Contractor compliance issues"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope of Support */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <ClipboardList size={18} className="text-slate-400" />
                <h3 className="font-bold text-xs uppercase text-slate-900">Scope of Support</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Review of payroll and statutory records",
                  "Preparation and validation of registers",
                  "Documentation structuring",
                  "Drafting replies to notices",
                  "Support during inspections"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <ShieldCheck size={18} className="text-slate-400" />
                <h3 className="font-bold text-xs uppercase text-slate-900">Expected Outcomes</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Organized and complete documentation",
                  "Reduced risk during inspection",
                  "Confidence in handling authorities",
                  "Identification and correction of compliance gaps"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Visual Placeholder */}
            <div className="bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                <div className="text-center p-6">
                  <FileText size={40} className="mx-auto text-slate-300 mb-2" />
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest leading-tight">
                    Compliance <br/> Repository Ready
                  </p>
                </div>
            </div>

          </div>

          {/* Case Insight Footer */}
          <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={18} className="text-amber-500" />
              <h3 className="font-extrabold text-[11px] uppercase tracking-[0.2em] text-amber-600">Case Insight</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              A company had incomplete registers and mismatched PF records. Before inspection notice, 
              all documents were aligned and structured, ensuring a smooth inspection completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditReadiness;