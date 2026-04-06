import React from 'react';
import { 
  Handshake, 
  Building2, 
  ShieldAlert, 
  ClipboardCheck, 
  Workflow, 
  Lightbulb,
  CheckCircle2
} from 'lucide-react';

const CLRACompliance = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:px-8 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <header className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 p-8 text-white">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-4 tracking-tight">
              Contract Labour Compliance (CLRA)
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-blue-300">
              What is Contract Labour Compliance?
            </h2>
            <p className="text-sm leading-relaxed text-blue-50/90 font-light">
              Contract labour compliance involves managing statutory obligations related to contractors 
              and workforce under the Contract Labour (Regulation and Abolition) Act, 1970. 
              It applies to both the Principal Employer and the Contractor.
            </p>
          </div>
          {/* Abstract Illustration Icon */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
            <Handshake size={180} strokeWidth={1} />
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-8">
          
          {/* Where It Applies */}
          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-3 mb-4 text-blue-900">
              <Building2 size={20} className="text-blue-700" />
              <h3 className="text-sm font-bold uppercase tracking-widest">Where It Applies</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-y-3 gap-x-12 text-sm text-slate-600">
              {[
                "Manufacturing units",
                "FMCG and bottling plants",
                "Staffing and manpower companies",
                "Infrastructure and project-based businesses"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-1 w-3 bg-blue-400 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 2x2 Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* When Do You Need This */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-2">
                <ShieldAlert size={18} className="text-red-500" />
                <h3 className="font-bold text-xs uppercase tracking-tighter">When Do You Need This</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Engagement of third-party manpower",
                  "Lack of contractor compliance monitoring",
                  "Risk of liability shifting to principal employer",
                  "Missing licenses or improper records"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="text-blue-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope of Support */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-900 border-b border-slate-100 pb-2">
                <ClipboardCheck size={18} className="text-blue-600" />
                <h3 className="font-bold text-xs uppercase tracking-tighter">Scope of Support</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Principal employer registration",
                  "Contractor license support",
                  "Wage and statutory compliance validation",
                  "Contractor audit and monitoring",
                  "Documentation and register management"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-slate-600">
                    <span className="text-blue-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Work (Replacing duplicate Scope of Support) */}
            <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-3 text-blue-900">
                <Workflow size={18} className="text-blue-600" />
                <h3 className="font-bold text-xs uppercase tracking-tighter">How We Work</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We review contractor arrangements, identify risks, and establish a monitoring 
                framework to ensure ongoing compliance across your vendor ecosystem.
              </p>
            </div>

            {/* Expected Outcomes */}
            <div className="bg-emerald-50/30 p-5 rounded-xl border border-emerald-100">
              <div className="flex items-center gap-2 mb-3 text-emerald-900">
                <CheckCircle2 size={18} className="text-emerald-600" />
                <h3 className="font-bold text-xs uppercase tracking-tighter">Expected Outcomes</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Better control over contractor compliance",
                  "Reduced legal exposure",
                  "Structured vendor governance",
                  "Readiness for inspection"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-slate-600">
                    <span className="text-emerald-500 text-xs">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Case Insight Section */}
          <footer className="bg-amber-50 rounded-xl p-6 border-2 border-amber-100/50">
            <div className="flex items-center gap-2 mb-3 text-amber-700">
              <div className="bg-amber-400 p-1.5 rounded-lg shadow-sm">
                <Lightbulb size={16} className="text-white fill-current" />
              </div>
              <h3 className="font-bold text-xs uppercase tracking-widest">Case Insight</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed italic">
              "A manufacturing unit was exposed to risk as contractors were not depositing 
              PF regularly. After implementing a monitoring system, compliance improved 
              and liability risk was controlled."
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default CLRACompliance;