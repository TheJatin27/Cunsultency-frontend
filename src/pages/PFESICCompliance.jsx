import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  AlertCircle, 
  ListChecks, 
  FileCheck, 
  Lightbulb, 
  ReceiptIndianRupee 
} from 'lucide-react';

const PFESICCompliance = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:px-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-8 text-white">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-5 tracking-tight border-b border-white/20 pb-2">
              PF & ESIC Compliance & Advisory
            </h1>
            <h2 className="text-lg font-semibold mb-3 text-blue-300">
              What is PF & ESIC Compliance?
            </h2>
            <p className="text-sm leading-relaxed text-blue-50/90 font-light">
              PF and ESIC compliance involves correct calculation, deduction, and deposit of 
              statutory requirements like minimum wages, Provident Fund (PF), Employees' State 
              Insurance (ESIC), bonus, and gratuity. These are not just filing activities — 
              they require correct wage interpretation and employee-level accuracy.
            </p>
          </div>
          {/* Abstract Illustration Placeholder */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
            <ReceiptIndianRupee size={180} strokeWidth={1} />
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-8">
          
          {/* Where It Applies Section */}
          <section className="bg-blue-50/40 p-6 rounded-xl border border-blue-100/50">
            <div className="flex items-center gap-3 mb-4 text-blue-900">
              <Users size={20} className="text-blue-600" />
              <h3 className="text-base font-bold uppercase tracking-wide">Where It Applies</h3>
            </div>
            <ul className="grid md:grid-cols-1 gap-3 text-sm">
              {[
                "Companies with 20+ employees (PF applicability)",
                "Organizations with employees earning up to ₹21,000 (ESIC)",
                "Businesses with contractor workforce"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {text}
                </li>
              ))}
            </ul>
          </section>

          {/* Grid Layout for Core Content */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
            
            {/* When Do You Need This */}
            <div className="group">
              <div className="flex items-center gap-2 mb-4 text-slate-900 border-l-4 border-amber-400 pl-3">
                <AlertCircle size={18} className="text-amber-600" />
                <h3 className="font-bold text-sm uppercase">When Do You Need This</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Errors in PF/ESIC calculation",
                  "Mismatch between payroll and statutory filings",
                  "Notices from EPFO or ESIC",
                  "Issues in employee claims or exits",
                  "Lack of clarity on applicability"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="text-blue-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope of Support */}
            <div className="group">
              <div className="flex items-center gap-2 mb-4 text-slate-900 border-l-4 border-indigo-500 pl-3">
                <ListChecks size={18} className="text-indigo-600" />
                <h3 className="font-bold text-sm uppercase">Scope of Support</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "PF and ESIC registration",
                  "Monthly return filing and validation",
                  "UAN, KYC, and employee data correction",
                  "Claim, transfer, and exit handling",
                  "Support during notices and inspections",
                  "Backlog correction and reconciliation"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="text-indigo-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div className="group">
              <div className="flex items-center gap-2 mb-4 text-slate-900 border-l-4 border-emerald-500 pl-3">
                <FileCheck size={18} className="text-emerald-600" />
                <h3 className="font-bold text-sm uppercase">Expected Outcomes</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Accurate and consistent filings",
                  "Reduced exposure to penalties and interest",
                  "Proper handling of employee records",
                  "Readiness for inspection and audit"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="text-emerald-500">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Summary / Compliance Shield Icon Box */}
            <div className="flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-slate-300 p-6">
               <div className="text-center">
                 <ShieldCheck size={48} className="mx-auto text-blue-200 mb-2" />
                 <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Statutory Compliance Verified</p>
               </div>
            </div>

          </div>

          {/* Case Insight Footer */}
          <footer className="relative bg-amber-50/60 p-6 rounded-2xl border-l-8 border-amber-400 mt-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-amber-400 p-1 rounded-full">
                <Lightbulb size={16} className="text-white" />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-tighter text-amber-800">Case Insight</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed italic">
              "A staffing company faced issues where PF was calculated on incorrect wage components. 
              This led to discrepancies during audit. After correction and restructuring, 
              the filings were aligned and inspection risk was eliminated."
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PFESICCompliance;