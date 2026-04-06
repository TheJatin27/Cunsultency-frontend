import React from 'react';
import { 
  Briefcase, 
  Clock, 
  Target, 
  CheckCircle, 
  Lightbulb, 
  Calculator 
} from 'lucide-react'; // Using Lucide for clean icons

const PayrollStructuring = () => {
  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
        
        {/* Header Section */}
        <header className="relative bg-gradient-to-r from-blue-900 to-indigo-800 p-8 text-white overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-4 tracking-tight">
              Payroll Structuring & Optimization
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-blue-200">
              What is Payroll Structuring?
            </h2>
            <p className="text-sm leading-relaxed text-blue-50 opacity-90">
              Payroll structuring involves designing salary components so they are compliant with 
              statutory requirements like minimum wages, Provident Fund (PF), Employees' 
              State Insurance (ESIC), bonus, and gratuity.
            </p>
          </div>
          {/* Decorative element representing the illustration */}
          <div className="absolute right-[-20px] bottom-[-20px] opacity-20 hidden md:block">
            <Calculator size={200} />
          </div>
        </header>

        <div className="p-6 md:p-8 space-y-6">
          
          {/* Where It Applies */}
          <section className="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100">
            <div className="flex items-center gap-2 mb-3 text-indigo-900">
              <Briefcase size={18} />
              <h3 className="font-bold">Where It Applies</h3>
            </div>
            <ul className="grid md:grid-cols-3 gap-3 text-sm">
              <li className="flex items-start gap-2 italic">
                <span className="text-blue-600">•</span> Businesses operating in one or multiple states
              </li>
              <li className="flex items-start gap-2 italic">
                <span className="text-blue-600">•</span> Companies covered under PF and ESIC
              </li>
              <li className="flex items-start gap-2 italic">
                <span className="text-blue-600">•</span> Staffing and contract-based workforce
              </li>
            </ul>
          </section>

          {/* 2x2 Grid for Core Info */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* When Do You Need This */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-blue-800">
                <Clock size={18} />
                <h3 className="font-bold">When Do You Need This</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "Basic salary is not aligned with minimum wages",
                  "Salary is split across multiple allowances without clarity",
                  "PF or ESIC calculations are inconsistent",
                  "Expanding operations across states",
                  "Planning for labour code implementation"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-500 mt-1">●</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope of Support */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-blue-800">
                <Target size={18} />
                <h3 className="font-bold">Scope of Support</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "Review and alignment of existing salary structures",
                  "Structuring of Basic, HRA, and other components",
                  "Validation of PF, ESIC, bonus, and gratuity applicability",
                  "CTC restructuring with compliance focus"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-500 mt-1">●</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expected Outcomes */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-4 text-blue-800">
                <CheckCircle size={18} />
                <h3 className="font-bold">Expected Outcomes</h3>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "Legally compliant salary structure",
                  "Clear understanding of statutory impact",
                  "Reduced risk during audits and inspections",
                  "Improved employee clarity on salary components"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-500 mt-1">●</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Duplicate Scope Box (As per image layout) */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-dashed">
              <div className="flex items-center gap-2 mb-4 text-blue-800">
                <Target size={18} />
                <h3 className="font-bold">Scope of Support</h3>
              </div>
              <p className="text-xs text-slate-400 italic">Redundant section from original image omitted or repurposed.</p>
            </div>
          </div>

          {/* Case Insight Footer */}
          <footer className="bg-amber-50 p-6 rounded-xl border border-amber-100">
            <div className="flex items-center gap-2 mb-2 text-amber-700">
              <Lightbulb size={20} fill="currentColor" className="opacity-20" />
              <h3 className="font-bold uppercase tracking-wider text-xs">Case Insight</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              The basic salary for a <span className="font-bold">retail workforce</span> was below the 
              applicable minimum wages, creating a risk under labour inspection. After restructuring, 
              the company was able to align wages properly without significantly increasing 
              overall cost, and avoid potential penalties.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PayrollStructuring;