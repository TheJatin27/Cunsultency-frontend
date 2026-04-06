import React from 'react';
import { 
  Scale, 
  MapPin, 
  HelpCircle, 
  ClipboardList, 
  LineChart, 
  Settings, 
  Search, 
  ShieldCheck, 
  Lightbulb,
  Flag
} from 'lucide-react';

const LabourLawAdvisoryFull = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8 px-4 md:px-10 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header Section */}
        <header className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] p-10 text-white border-b-4 border-blue-500">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Labour Law Advisory & <br/><span className="text-blue-400">Documentation</span>
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 max-w-xl font-light">
              Building a clear and structured approach to day-to-day compliance. 
              Ensuring your existing setup is not only in place, but also properly 
              documented and defensible when required.
            </p>
          </div>
          <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
            <Scale size={140} strokeWidth={1} />
          </div>
        </header>

        <div className="p-8 md:p-12">
          {/* Main 2-Column Content Grid */}
          <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
            
            {/* 1. What this service is about */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-blue-900 border-b border-blue-100 pb-2">
                <ClipboardList size={18} className="text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-widest">What this service is about</h3>
              </div>
              <p className="text-[13px] leading-relaxed text-slate-600">
                In many cases, businesses manage operations regularly, but the underlying 
                documentation and compliance structure is either incomplete or not properly 
                aligned with applicable laws. Our role is to bring clarity and structure to your existing setup.
              </p>
            </section>

            {/* 2. Where this typically applies */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-blue-900 border-b border-blue-100 pb-2">
                <MapPin size={18} className="text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Where this typically applies</h3>
              </div>
              <ul className="space-y-2 text-[13px] text-slate-600 italic">
                <li className="flex gap-2"><span>•</span> Setting up HR and compliance frameworks</li>
                <li className="flex gap-2"><span>•</span> Operational businesses wanting better control</li>
                <li className="flex gap-2"><span>•</span> Businesses operating across multiple locations</li>
              </ul>
            </section>

            {/* 3. When do you actually need this */}
            <section className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 text-slate-900">
                <HelpCircle size={18} className="text-amber-500" />
                <h3 className="text-xs font-bold uppercase tracking-widest">When do you actually need this</h3>
              </div>
              <div className="space-y-3 text-xs text-slate-600 leading-normal">
                <p>• When there is uncertainty around which laws apply.</p>
                <p>• When policies are not documented or aligned with actual practices.</p>
                <p>• When gaps appear between statutory requirements and internal documentation.</p>
              </div>
            </section>

            {/* 4. What we cover */}
            <section className="space-y-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 text-slate-900">
                <Search size={18} className="text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-widest">What we cover</h3>
              </div>
              <ul className="grid grid-cols-1 gap-2 text-xs text-slate-600">
                <li>• Shops and Establishment compliance</li>
                <li>• Review and drafting of HR policies</li>
                <li>• Employment contracts structuring</li>
                <li>• Minimum wage application and interpretation</li>
                <li>• Advisory on PF, ESIC, bonus, and gratuity</li>
              </ul>
            </section>

            {/* 5. What you can expect */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-blue-900 border-b border-blue-100 pb-2">
                <LineChart size={18} className="text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-widest">What you can expect</h3>
              </div>
              <p className="text-[13px] text-slate-600 italic">
                A more structured and organized compliance setup. You will have clarity on what is applicable, what needs to be maintained, and how internal processes align with statutory requirements.
              </p>
            </section>

            {/* 6. How we approach this */}
            <section className="space-y-3">
              <div className="flex items-center gap-3 text-blue-900 border-b border-blue-100 pb-2">
                <Settings size={18} className="text-blue-600" />
                <h3 className="text-xs font-bold uppercase tracking-widest">How we approach this</h3>
              </div>
              <p className="text-[13px] text-slate-600">
                We understand your business model, identify applicable laws, and review existing records. We help correct gaps in a practical way, creating a system that works on a daily basis.
              </p>
            </section>
          </div>

          {/* Practical Situation & Why it Matters row */}
          <div className="grid md:grid-cols-2 gap-8 mt-12 pt-8 border-t border-slate-100">
            <div className="flex gap-4">
              <div className="bg-slate-100 p-3 rounded-xl h-fit">
                <Search size={20} className="text-slate-400" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-slate-900">A practical situation we often see</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Compliance exists in parts—registrations are done, payroll is running, but documentation 
                  is missing or inconsistent. This creates risk during inspections.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-50 p-3 rounded-xl h-fit">
                <ShieldCheck size={20} className="text-blue-600" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-slate-900">Why this service matters</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  Being able to demonstrate compliance is as important as being compliant. 
                  We help build the documentation structure to support your compliance position.
                </p>
              </div>
            </div>
          </div>

          {/* Next Step Footer */}
          <footer className="mt-12 bg-blue-50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-full text-blue-600 shadow-sm">
                <Lightbulb size={28} />
              </div>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-tight">Next Step</h3>
                <p className="text-xs text-slate-500">Decide what needs to be corrected and how to move forward in a structured way.</p>
              </div>
            </div>
            <button className="bg-blue-900 text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-all flex items-center gap-2">
              Get Started <Flag size={14} />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default LabourLawAdvisoryFull;