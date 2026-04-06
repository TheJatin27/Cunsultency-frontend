import React from 'react';
import { 
  Scale, 
  MapPin, 
  CalendarClock, 
  BookOpen, 
  Target, 
  Settings, 
  Search, 
  ShieldCheck, 
  Lightbulb,
  ArrowRightCircle
} from 'lucide-react';

const LabourLawAdvisory = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:px-12 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <header className="relative bg-gradient-to-r from-blue-900 to-indigo-950 p-10 text-white">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Labour Law Advisory & Documentation
            </h1>
            <p className="text-base leading-relaxed text-blue-100 opacity-90 max-w-2xl font-light">
              We bring clarity, structure, and consistency so that your compliance 
              is properly documented and defensible when required.
            </p>
          </div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block border-4 border-white/20 p-4 rounded-full">
            <Scale size={120} />
          </div>
        </header>

        <div className="p-8 md:p-12 space-y-10">
          
          {/* Top Row: About & Where It Applies */}
          <div className="grid md:grid-cols-2 gap-10">
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-blue-900 bg-blue-50 w-fit px-4 py-1.5 rounded-full">
                <BookOpen size={16} />
                <h3 className="text-xs font-extrabold uppercase tracking-widest">What this service is about</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                This service focuses on helping organizations build a clear and structured approach to day-to-day labour law compliance. Many businesses manage operations regularly, but documentation and compliance structure are often incomplete.
              </p>
            </section>

            <section className="space-y-3">
              <div className="flex items-center gap-3 text-blue-900 bg-blue-50 w-fit px-4 py-1.5 rounded-full">
                <MapPin size={16} />
                <h3 className="text-xs font-extrabold uppercase tracking-widest">Where this typically applies</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span>•</span> Setting up HR and compliance framework</li>
                <li className="flex gap-2"><span>•</span> Already operational but want better control</li>
                <li className="flex gap-2"><span>•</span> Operating across multiple locations</li>
              </ul>
            </section>
          </div>

          {/* Middle Row: Need & Engagement */}
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-2 text-indigo-900">
                <CalendarClock size={20} className="text-indigo-600" />
                <h3 className="font-bold text-sm">When do you actually need this</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-3"><span className="text-indigo-500">○</span> Uncertainty around which laws apply</li>
                <li className="flex gap-3"><span className="text-indigo-500">○</span> Policies are not documented or aligned</li>
                <li className="flex gap-3"><span className="text-indigo-500">○</span> No clear linkage between statutory requirements and records</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-2 text-indigo-900">
                <Target size={20} className="text-indigo-600" />
                <h3 className="font-bold text-sm">What we cover in this engagement</h3>
              </div>
              <ul className="space-y-2 text-[13px] text-slate-600">
                <li>• Shops and Establishment compliance</li>
                <li>• Review and drafting of HR policies (leave, attendance, etc.)</li>
                <li>• Employment contracts and interpretation of minimum wages</li>
                <li>• Advisory on PF, ESIC, bonus and gratuity</li>
              </ul>
            </div>
          </div>

          {/* Bottom Grid: 2x2 Outcome & Approach */}
          <div className="grid md:grid-cols-2 gap-8 border-t border-slate-100 pt-10">
             {/* Expectation */}
             <div className="flex gap-4">
                <div className="mt-1 bg-blue-600 p-2 rounded-lg text-white shrink-0 h-fit">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-2 text-slate-900 uppercase tracking-tighter">What you can expect</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">A structured setup with clarity on what needs to be maintained to support your compliance position.</p>
                </div>
             </div>

             {/* Approach */}
             <div className="flex gap-4">
                <div className="mt-1 bg-indigo-600 p-2 rounded-lg text-white shrink-0 h-fit">
                  <Settings size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-2 text-slate-900 uppercase tracking-tighter">How we approach this</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Understand your model, highlight gaps, and create a system that works day-to-day, not just on paper.</p>
                </div>
             </div>
          </div>

          {/* Practical Situation & Value */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-200 pl-4 py-2">
              <div className="flex items-center gap-2 mb-2">
                <Search size={14} className="text-slate-400" />
                <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest">Practical Situation</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "Compliance often exists in parts—registrations are done but documentation is missing. This service aligns the two."
              </p>
            </div>

            <div className="border-l-4 border-emerald-200 pl-4 py-2">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={14} className="text-emerald-400" />
                <h3 className="text-[11px] font-bold uppercase text-emerald-500 tracking-widest">Why it matters</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                Demonstrating compliance is as important as being compliant. We help build that defensible foundation.
              </p>
            </div>
          </div>

          {/* Next Steps CTA */}
          <footer className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm text-amber-500">
                <Lightbulb size={24} />
              </div>
              <div>
                <h3 className="font-bold text-sm text-amber-900">Ready to move forward?</h3>
                <p className="text-xs text-amber-700">Review your documentation structure for a more organized tomorrow.</p>
              </div>
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-blue-800 transition-colors">
              Get Started <ArrowRightCircle size={16} />
            </button>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default LabourLawAdvisory;