import React from 'react';
import { 
  Check, Shield, FileText, Users, Search, BookOpen, 
  Briefcase, CheckCircle2, ChevronRight, Calculator, 
  Building, Map, AlertCircle, Scale, GraduationCap,
  MessageCircle, Phone, FileCheck, Target, Layers
} from 'lucide-react';

const LabourforgeUI = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-800 font-sans selection:bg-blue-200">
      
      {/* ================= HERO SECTION (Image 1) ================= */}
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
            Designing Compliant Payroll Structures for a Changing Labour Law Landscape
          </h1>
          <p className="text-slate-500 text-lg max-w-md leading-relaxed">
            Supporting organizations in aligning payroll, contracts, and statutory compliance with evolving labour regulations.
          </p>
          <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white px-8 py-3 rounded text-sm font-semibold transition-colors shadow-md">
            Book a Consultation
          </button>
        </div>
        
        {/* Abstract Illustration Placeholder */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-end">
          <div className="w-full max-w-lg h-80 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-center relative shadow-sm overflow-hidden">
             {/* Mocking the illustration layout */}
             <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent"></div>
             <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 w-3/4 h-3/4 flex flex-col">
                <div className="flex justify-between items-center mb-4 border-b pb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full"></div>
                  <div className="flex gap-2"><div className="w-4 h-4 rounded-full bg-blue-400"></div><div className="w-4 h-4 rounded-full bg-[#d59b3f]"></div></div>
                </div>
                <div className="flex-1 flex items-end gap-4">
                  <div className="w-1/3 bg-blue-100 h-1/2 rounded-t-md"></div>
                  <div className="w-1/3 bg-blue-500 h-full rounded-t-md"></div>
                  <div className="w-1/3 bg-[#d59b3f] h-3/4 rounded-t-md"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Quote Strip */}
      <div className="w-full text-center py-10 border-y border-slate-200 bg-white">
        <p className="text-xl font-serif text-slate-700">
          Most compliance issues don't arise from intent — they arise from incorrect structuring.
        </p>
      </div>

      {/* ================= OUR SERVICES (Mini Cards - Image 1) ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-serif text-slate-900 mb-12">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            { title: "Payroll Structuring", desc: "Designing and managing payroll aligned with statutory requirements", icon: <Calculator className="text-blue-500" size={32}/> },
            { title: "PF & ESIC Compliance", desc: "Ensuring accurate PF and ESIC compliance and advisory", icon: <Shield className="text-blue-500" size={32}/> },
            { title: "Labour Law Advisory", desc: "Advisory on labour laws and policy documentation", icon: <Scale className="text-blue-500" size={32}/> },
            { title: "Contract Labour Compliance", desc: "Ensuring contractor compliance and obligations", icon: <Briefcase className="text-blue-500" size={32}/> },
            { title: "Audit & Inspection Readiness", desc: "Preparing organizations for regulatory scrutiny", icon: <Search className="text-[#d59b3f]" size={32}/> }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-sm mb-2 text-slate-800">{service.title}</h3>
              <p className="text-xs text-slate-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHERE ORGANIZATIONS STRUGGLE (Image 1) ================= */}
      <section className="bg-slate-100 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl font-serif text-slate-900">Where Organizations Struggle</h2>
            <ul className="space-y-4">
              {[
                "Incorrect salary structuring leading to compliance risk",
                "PF/ESIC exposure due to incorrect classification",
                "Weak documentation during inspections",
                "Confusion around labour code implementation",
                "Contractor compliance gaps"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-700 bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                  <Check className="text-blue-600" size={20} />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-blue-900 h-80 rounded-2xl shadow-xl overflow-hidden relative">
            {/* Mock Dashboard Illustration */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            <div className="absolute inset-4 border border-blue-400/30 rounded-xl bg-blue-800/50 p-6 flex flex-col gap-4">
              <div className="h-8 bg-blue-700/50 rounded w-1/3"></div>
              <div className="flex-1 flex gap-4">
                <div className="w-2/3 bg-blue-700/50 rounded flex items-center justify-center"><Layers className="text-blue-300" size={48}/></div>
                <div className="w-1/3 bg-blue-700/50 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LABOUR CODES (Dark Section - Image 1) ================= */}
      <section className="bg-[#102a43] py-20 text-white border-b-8 border-[#d59b3f]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif mb-4">Getting Ready for Labour Codes</h2>
          <p className="text-blue-200 text-sm max-w-2xl mx-auto mb-12">
            With labour codes expected to be implemented in the near future, organizations must start aligning their systems today.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {[
              { num: "01", title: "Assess current structure", desc: "Aligning with new labour code compliance mandates for stats" },
              { num: "02", title: "Identify gaps & risks", desc: "Map risks the contractor organization framework poses" },
              { num: "03", title: "Redesign payroll & policies", desc: "Design uncoupled payroll structure and policies" },
              { num: "04", title: "Support implementation", desc: "Smooth transition paving the entire enterprise redesign compliance" }
            ].map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="bg-white text-slate-800 p-6 rounded-xl flex-1 text-left relative shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold mb-4 -mt-10 border-4 border-[#102a43]">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500">{step.desc}</p>
                </div>
                {idx !== 3 && <ChevronRight className="hidden md:block text-blue-400" size={32}/>}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-16 text-xl font-serif">
            Start early. Adjust gradually. <span className="text-[#d59b3f]">Stay compliant.</span>
          </p>
        </div>
      </section>

      {/* ================= ABOUT LABOURFORGE (Image 2) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl font-serif text-blue-900">About <span className="font-bold">Labourforge</span></h2>
          <p className="text-slate-600 font-medium">Bringing structure and clarity to payroll & labour law compliance</p>
          
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Labourforge was established with a clear objective — to bring structure, clarity, and <span className="text-blue-700 font-semibold">practical understanding</span> to payroll and labour law compliance.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left items-center pt-10">
            <div>
              <h3 className="text-2xl font-serif text-blue-900 mb-4">The Reality</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Compliance challenges don't arise from intent—they come from gaps in structuring, interpretation, and execution.
              </p>
              <p className="text-slate-600 text-sm border-l-4 border-blue-600 pl-4 bg-blue-50 py-2 rounded-r-md">
                Payroll is not just an administrative task; it's a critical compliance and risk management function.
              </p>
            </div>
            <div className="bg-slate-100 p-6 rounded-xl shadow-inner border border-slate-200">
               <div className="flex gap-4 items-center bg-white p-4 rounded shadow-sm border border-slate-100">
                 <FileCheck className="text-blue-500" size={40}/>
                 <div>
                   <div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
                   <div className="h-2 w-32 bg-slate-200 rounded"></div>
                 </div>
               </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif text-blue-900 pt-10">What We Do</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { t: "Payroll Structuring", i: <Calculator/> },
              { t: "Salary Alignment", i: <Briefcase/> },
              { t: "Documentation & Policies", i: <FileText/> },
              { t: "Audit Support", i: <Search/> }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-600">{item.i}</div>
                <span className="text-sm font-semibold text-slate-700">{item.t}</span>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="bg-[#102a43] text-white rounded-2xl p-8 flex flex-col md:flex-row justify-around items-center gap-6 mt-12">
            <div className="text-center"><div className="text-4xl font-bold">15+ <span className="text-lg font-normal">Years</span></div><div className="text-blue-300 text-sm">Experience</div></div>
            <div className="hidden md:block w-px h-12 bg-slate-500"></div>
            <div className="text-center"><div className="text-4xl font-bold">3000+ <span className="text-lg font-normal">Employees</span></div><div className="text-blue-300 text-sm">Managed</div></div>
            <div className="hidden md:block w-px h-12 bg-slate-500"></div>
            <div className="flex items-center gap-3"><AlertCircle className="text-blue-400" size={32}/><div className="text-left text-sm font-bold">GM - Finance & <br/><span className="font-normal text-blue-300">Operations Leadership</span></div></div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES (Image 3) ================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#102a43] rounded-3xl p-10 mb-12 flex flex-col md:flex-row justify-between items-center text-white shadow-xl">
            <div>
              <h2 className="text-3xl font-serif mb-2">Our Services</h2>
              <p className="text-blue-200">Payroll & Compliance Solutions Built for Clarity, Control & Confidence.</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4">
              <div className="w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center"><Calculator size={28}/></div>
              <div className="w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center"><Shield size={28}/></div>
            </div>
          </div>

          <p className="text-center text-slate-700 font-medium mb-10 max-w-3xl mx-auto">
            Payroll and compliance are not isolated functions — they are interconnected systems that directly impact risk, cost, and operational stability.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "1. Payroll Structuring & Management",
                desc: "Designing and managing payroll systems aligned with statutory requirements and business needs.",
                list: ["Salary structure design (aligned with wage definitions)", "Monthly payroll processing", "Cost optimisation with compliance focus", "Alignment with labour code framework"],
                icon: "PAYROLL"
              },
              {
                title: "2. PF & ESIC Compliance Advisory",
                desc: "End-to-end support under Employees' Provident Funds and Miscellaneous Provisions Act and Employees' State Insurance Act.",
                list: ["Registration and compliance setup", "Monthly filings and corrections", "Advisory on coverage and structuring", "Handling notices and queries"],
                icon: "PF/ESIC"
              },
              {
                title: "3. Labour Law Advisory & Documentation",
                desc: "Building legally sound and audit-ready frameworks.",
                list: ["Policy drafting (HR & compliance policies)", "Documentation structuring", "Compliance gap assessment", "Advisory on statutory obligations"],
                icon: "LAW"
              },
              {
                title: "4. Contract Labour Compliance",
                desc: "Advisory and support under the Contract Labour (Regulation and Abolition) Act.",
                list: ["Contractor compliance review", "Principal employer obligations", "Documentation and register maintenance", "Risk identification and mitigation"],
                icon: "CONTRACT"
              },
              {
                title: "5. Audit & Inspection Readiness",
                desc: "Preparing organizations for regulatory scrutiny.",
                list: ["Pre-inspection audits", "Documentation review", "Risk identification", "Support during inspections"],
                icon: "AUDIT"
              }
            ].map((srv, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex gap-6">
                <div className="w-20 h-20 shrink-0 bg-blue-50 text-blue-800 font-bold text-[10px] rounded-xl flex items-center justify-center border border-blue-100 shadow-inner">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg text-blue-900 mb-2">{srv.title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{srv.desc}</p>
                  <ul className="space-y-2">
                    {srv.list.map((li, i) => (
                      <li key={i} className="text-xs flex gap-2 text-slate-700">
                        <Check size={14} className="text-[#d59b3f] shrink-0"/> {li}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* Special Focus Area Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border-2 border-[#d59b3f]/30 flex gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#d59b3f] text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg">★ Special Focus Area</div>
              <div className="w-20 h-20 shrink-0 bg-slate-900 text-white font-bold text-[10px] rounded-xl flex items-center justify-center border border-slate-700">LABOUR CODE</div>
              <div>
                <h3 className="font-serif text-lg text-blue-900 mb-2">6. Labour Code Advisory</h3>
                <p className="text-xs text-slate-500 mb-4">Supporting organizations in transitioning towards the new labour code framework.</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-xs flex gap-1 text-slate-700"><Check size={14} className="text-blue-500"/> Wage structuring (50% rule)</div>
                  <div className="text-xs flex gap-1 text-slate-700"><Check size={14} className="text-blue-500"/> Policy alignment</div>
                  <div className="text-xs flex gap-1 text-slate-700"><Check size={14} className="text-blue-500"/> Fixed-term vs permanent</div>
                </div>
                <p className="text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded inline-block">Don't wait for implementation. Start alignment now.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= E-LIBRARY (Image 4) ================= */}
      <section className="bg-white">
        {/* Dark Header with Waves */}
        <div className="bg-[#102a43] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] py-20 px-6 relative overflow-hidden border-b-4 border-blue-900">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#102a43]/90"></div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-6">
            <h2 className="text-4xl font-serif text-[#d59b3f]">E-Library</h2>
            <p className="text-xl text-blue-100 font-serif">Simplifying Labour Laws — One Topic at a Time</p>
            <div className="relative mt-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search any compliance topic..." 
                className="w-full bg-white text-slate-800 rounded-lg pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#d59b3f] shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Content Grids */}
        <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
          {/* Category 1 */}
          <div>
            <h3 className="text-xl font-serif text-slate-800 mb-6 flex items-center gap-2 border-b pb-2">
              <Calculator className="text-[#d59b3f]" size={24}/> Wage & Salary Laws
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "Minimum Wages", d: "Understanding minimum wage rates and their applicability.", icon: <FileText size={24}/> },
                { t: "Bonus", d: "Eligibility and calculation of bonus under labour laws.", icon: <Briefcase size={24}/> },
                { t: "Payment of Wages", d: "Rules governing timely and correct payment of wages.", icon: <Scale size={24}/> }
              ].map((lib, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-50 text-blue-700 p-3 rounded-lg">{lib.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{lib.t}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 h-10">{lib.d}</p>
                  <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-xs px-5 py-2 rounded font-medium transition-colors">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Category 2 */}
          <div>
            <h3 className="text-xl font-serif text-slate-800 mb-6 flex items-center gap-2 border-b pb-2">
              <Shield className="text-blue-600" size={24}/> Social Security
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "PF", d: "Provident Fund compliance and employer obligations.", icon: "PF" },
                { t: "ESIC", d: "ESIC coverage, benefits, and contribution norms.", icon: <Shield size={24}/> },
                { t: "Gratuity", d: "Gratuity eligibility, calculation, and payment rules.", icon: <FileCheck size={24}/> }
              ].map((lib, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-50 text-blue-700 p-3 rounded-lg font-bold flex items-center justify-center w-12 h-12">{lib.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{lib.t}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 h-10">{lib.d}</p>
                  <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-xs px-5 py-2 rounded font-medium transition-colors">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Category 3 */}
          <div>
            <h3 className="text-xl font-serif text-slate-800 mb-6 flex items-center gap-2 border-b pb-2">
              <Building className="text-slate-600" size={24}/> State Compliance
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "Professional Tax (PT)", d: "State-wise PT applicability and deduction rules.", icon: <FileText size={24}/> },
                { t: "Shops & Establishment", d: "Compliance requirements for shops and establishments in various states.", icon: <Building size={24}/> },
                { t: "Labour Welfare Fund (LWF)", d: "Understanding state-wise LWF contributions and benefits.", icon: <AlertCircle size={24}/> }
              ].map((lib, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-50 text-blue-700 p-3 rounded-lg">{lib.icon}</div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{lib.t}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 h-10">{lib.d}</p>
                  <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-xs px-5 py-2 rounded font-medium transition-colors">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER (Image 2 bottom) */}
      <footer className="bg-slate-100 py-16 text-center border-t border-slate-200">
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">Let's review your payroll & compliance setup.</h3>
          <div className="flex justify-center gap-4">
            <button className="bg-[#102a43] hover:bg-blue-900 text-white px-8 py-3 rounded-md text-sm font-semibold transition-colors">
              Contact Us
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors">
              <MessageCircle size={18} /> WhatsApp
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LabourforgeUI;