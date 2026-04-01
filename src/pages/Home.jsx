import React from 'react';
import { 
  Calendar, ChartLine, Shield, Gavel, Users, Search, 
  CheckCircle, AlertCircle, Building, FileText, 
  Coins, Gift, Clock, Hospital, HeartHandshake, 
  MapPin, Store, HandHelping, Phone, Mail, 
  TrendingUp, Layers, ChevronRight, BarChart,
  BookOpen, Briefcase, Calculator, FileCheck, Scale,
  XCircle
} from 'lucide-react';

import lc from '../assets/lc1.png';
import lc2 from '../assets/lc2.png';
import lc3 from '../assets/lc3.png';
import lc4 from '../assets/lc4.png';
import lc5 from '../assets/lc5.png';
import lc9 from '../assets/lc9.png';


const Labourforge = () => {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-800 font-['Inter',sans-serif] selection:bg-blue-200">
      
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 pt-8 pb-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display',serif] font-bold text-slate-800 leading-tight">
            Designing Compliant Payroll Structures for a Changing Labour Law Landscape
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Supporting organizations in aligning payroll, contracts, and statutory compliance with evolving labour regulations.
          </p>
          <div>
            <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white px-8 py-3 rounded-md text-sm md:text-base font-semibold shadow-md inline-flex items-center gap-2 transition-colors">
              <Calendar size={18} /> Book a Consultation
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={lc} 
            alt="Payroll compliance illustration"
            className="rounded-2xl shadow-xl w-full max-w-md h-auto object-cover"
            style={{ aspectRatio: '4/3' }}
          />
        </div>
      </section>

      {/* Quote Strip - Reduced padding */}
      <div className="w-full bg-white border-y border-slate-200 py-4 text-center">
        <p className="text-slate-700 text-md md:text-lg font-['Playfair_Display',serif] italic">
          “Most compliance issues don't arise from intent — they arise from incorrect structuring.”
        </p>
      </div>

      {/* ================= OUR SERVICES - Reduced top/bottom margin ================= */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-8 md:py-10">
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] font-semibold text-center text-slate-800 mb-6 md:mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { icon: Calculator, title: "Payroll Structuring", desc: "Designing and managing payroll aligned with statutory requirements", color: "text-blue-600" },
            { icon: Shield, title: "PF & ESIC Compliance", desc: "Ensuring accurate PF and ESIC compliance and advisory", color: "text-blue-600" },
            { icon: Scale, title: "Labour Law Advisory", desc: "Advisory on labour laws and policy documentation", color: "text-blue-600" },
            { icon: Users, title: "Contract Labour Compliance", desc: "Ensuring contractor compliance and obligations", color: "text-blue-600" },
            { icon: Search, title: "Audit & Inspection Readiness", desc: "Preparing organizations for regulatory scrutiny", color: "text-amber-600" }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                <service.icon size={24} className={service.color} />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">{service.title}</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHERE ORGANIZATIONS STRUGGLE - Reduced padding ================= */}
      <section className="bg-slate-100 border-y border-slate-200 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl md:text-3xl font-['Playfair_Display',serif] font-semibold text-slate-800">
              Where Organizations Struggle
            </h2>
            <ul className="space-y-2">
              {[
                "Incorrect salary structuring leading to compliance risk",
                "PF/ESIC exposure due to incorrect classification",
                "Weak documentation during inspections",
                "Confusion around labour code implementation",
                "Contractor compliance gaps"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white p-2.5 rounded-lg shadow-sm">
                  <CheckCircle size={16} className="text-blue-600 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src={lc2} 
              alt="Business compliance challenges"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </section>

      {/* ================= LABOUR CODES SECTION ================= */}
      <section className="bg-[#0f2b3f] text-white py-10 md:py-12 border-b-8" style={{ borderBottomColor: '#d59b3f' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-['Playfair_Display',serif] mb-2">Getting Ready for Labour Codes</h2>
          <p className="text-blue-200 text-sm max-w-2xl mx-auto mb-8">
            With labour codes expected to be implemented soon, start aligning your systems today.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-4">
            {[
              { num: "01", title: "Assess current structure", desc: "Review existing payroll & labour compliance framework." },
              { num: "02", title: "Identify gaps & risks", desc: "Map contractor risks & non-compliances proactively." },
              { num: "03", title: "Redesign payroll & policies", desc: "Update salary structures & policy documentation." },
              { num: "04", title: "Support implementation", desc: "Smooth transition with hands-on execution support." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white text-slate-800 p-4 rounded-xl flex-1 text-left relative shadow-lg">
                <div className="w-9 h-9 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center font-bold text-base mb-2 -mt-5 border-4 border-[#0f2b3f]">
                  {step.num}
                </div>
                <h3 className="font-bold text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-['Playfair_Display',serif]">
            Start early. Adjust gradually. <span className="text-[#d59b3f] font-semibold">Stay compliant.</span>
          </p>
        </div>
      </section>

      {/* ================= ABOUT LABOURFORGE - Reduced padding ================= */}
      <section className="bg-white py-8 md:py-10">
        <div className="max-w-6xl mx-auto px-5 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-blue-900">
            About <span className="font-bold">Labourforge</span>
          </h2>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto">
            Bringing structure and clarity to payroll & labour law compliance
          </p>
          <p className="text-slate-700 max-w-3xl mx-auto text-base">
            Labourforge was established with a clear objective — to bring structure, clarity, and{' '}
            <span className="text-blue-700 font-semibold">practical understanding</span> to payroll and labour law compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-start text-left">
            <div>
              <h3 className="text-xl font-['Playfair_Display',serif] text-blue-900 mb-2">The Reality</h3>
              <p className="text-slate-600 text-sm mb-3">
                Compliance challenges don't arise from intent—they come from gaps in structuring, interpretation, and execution.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-3 rounded-r-md text-sm">
                Payroll is not just an administrative task; it's a critical compliance and risk management function.
              </div>
            </div>
            <div>
              <img 
                src={lc4}
                alt="Team collaboration"
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-['Playfair_Display',serif] text-blue-900 pt-2">What We Do</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: Calculator, label: "Payroll Structuring" },
              { icon: TrendingUp, label: "Salary Alignment" },
              { icon: FileText, label: "Documentation & Policies" },
              { icon: FileCheck, label: "Audit Support" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition">
                <item.icon size={28} className="text-blue-600 mx-auto mb-1" />
                <span className="text-xs font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-[#0f2b3f] text-white rounded-2xl p-5 flex flex-wrap justify-around gap-4 items-center mt-6">
            <div className="text-center">
              <span className="text-2xl font-bold">15+</span>
              <div className="text-blue-200 text-xs">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-slate-500 hidden md:block"></div>
            <div className="text-center">
              <span className="text-2xl font-bold">3000+</span>
              <div className="text-blue-200 text-xs">Employees Managed</div>
            </div>
            <div className="w-px h-8 bg-slate-500 hidden md:block"></div>
            <div className="flex items-center gap-2">
              <BarChart size={24} className="text-blue-300" />
              <div className="text-left text-xs font-semibold">GM - Finance & Operations Leadership</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES - Compact ================= */}
      <section className="bg-slate-50 py-8 md:py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5">
         <div
  className="w-full min-h-[200px] rounded-2xl p-5 md:p-6 mb-8 flex flex-col md:flex-row justify-between items-center text-white shadow-xl bg-cover bg-center"
  style={{ backgroundImage: `url(${lc5})` }}
>   <div>
              <h2 className="text-2xl md:text-3xl font-['Playfair_Display',serif]">Our Services</h2>
              <p className="text-blue-200 text-xs">Payroll & Compliance Solutions Built for Clarity, Control & Confidence.</p>
            </div>
            <div className="flex gap-2 mt-3 md:mt-0">
              <div className="bg-white/10 p-2 rounded-xl"><ChartLine size={24} /></div>
              <div className="bg-white/10 p-2 rounded-xl"><Shield size={24} /></div>
            </div>
          </div>
          
          <p className="text-center text-slate-700 text-sm mb-8 max-w-3xl mx-auto">
            Payroll and compliance are not isolated functions — they are interconnected systems that directly impact risk, cost, and operational stability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: TrendingUp, title: "1. Payroll Structuring & Management", desc: "Designing payroll aligned with statutory requirements.", items: ["Salary structure design (aligned with wage definitions)", "Monthly payroll processing", "Cost optimisation with compliance focus"] },
              { icon: Shield, title: "2. PF & ESIC Compliance Advisory", desc: "End-to-end support under EPF & ESI Acts.", items: ["Registration and compliance setup", "Monthly filings and corrections", "Handling notices and queries"] },
              { icon: Scale, title: "3. Labour Law Advisory & Documentation", desc: "Building audit-ready frameworks.", items: ["Policy drafting (HR & compliance policies)", "Documentation structuring", "Compliance gap assessment"] },
              { icon: Users, title: "4. Contract Labour Compliance", desc: "Advisory under CLRA Act.", items: ["Contractor compliance review", "Principal employer obligations", "Risk identification and mitigation"] },
              { icon: Search, title: "5. Audit & Inspection Readiness", desc: "Preparing for regulatory scrutiny.", items: ["Pre-inspection audits", "Documentation review", "Support during inspections"] }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border flex gap-4 hover:shadow-md transition">
                <div className="bg-blue-50 p-2 rounded-xl h-fit">
                  <service.icon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display',serif] font-semibold text-blue-900 text-base">{service.title}</h3>
                  <p className="text-xs text-slate-500 mb-2">{service.desc}</p>
                  <ul className="space-y-1 text-xs">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* Special Labour Code Card */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 relative overflow-hidden hover:shadow-md transition">
              <div className="absolute top-0 right-0 bg-[#d59b3f] text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-lg">★ Special Focus</div>
              <div className="flex gap-4">
                <div className="bg-slate-100 p-2 rounded-xl h-fit">
                  <BookOpen size={24} className="text-slate-700" />
                </div>
                <div>
                  <h3 className="font-['Playfair_Display',serif] font-semibold text-blue-900 text-base">6. Labour Code Advisory</h3>
                  <p className="text-xs text-slate-500 mb-2">Supporting organizations in transitioning towards the new labour code framework.</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className="bg-slate-100 px-2 py-0.5 rounded-full text-[10px]">Wage structuring (50% rule)</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded-full text-[10px]">Fixed-term vs permanent</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-800">Don't wait for implementation. Start alignment now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= E-LIBRARY ================= */}
      <section className="bg-white">
        <div className="bg-[#0f2b3f] py-10 md:py-12 px-5 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-['Playfair_Display',serif] text-[#d59b3f]">E-Library</h2>
            <p className="text-blue-100 text-lg mt-2">Simplifying Labour Laws — One Topic at a Time</p>
            <div className="relative mt-6 max-w-xl mx-auto">
              <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search any compliance topic..." 
                className="w-full pl-12 pr-4 py-3 rounded-lg border-0 shadow-md focus:ring-2 focus:ring-[#d59b3f] focus:outline-none"
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-5 py-10 space-y-10">
          {/* Wage & Salary Laws */}
          <div>
            <h3 className="text-xl font-['Playfair_Display',serif] text-slate-800 border-b pb-2 flex items-center gap-2 mb-4">
              <Coins size={20} className="text-[#d59b3f]" /> Wage & Salary Laws
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Coins, title: "Minimum Wages", desc: "Understanding minimum wage rates and their applicability." },
                { icon: Gift, title: "Bonus", desc: "Eligibility and calculation of bonus under labour laws." },
                { icon: Clock, title: "Payment of Wages", desc: "Rules governing timely and correct payment of wages." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1">
                  <item.icon size={28} className="text-blue-600 mb-2" />
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 my-1.5">{item.desc}</p>
                  <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Security */}
          <div>
            <h3 className="text-xl font-['Playfair_Display',serif] text-slate-800 border-b pb-2 flex items-center gap-2 mb-4">
              <Shield size={20} className="text-blue-600" /> Social Security
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Building, title: "PF", desc: "Provident Fund compliance and employer obligations." },
                { icon: Hospital, title: "ESIC", desc: "ESIC coverage, benefits, and contribution norms." },
                { icon: HeartHandshake, title: "Gratuity", desc: "Gratuity eligibility, calculation, and payment rules." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1">
                  <item.icon size={28} className="text-blue-600 mb-2" />
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 my-1.5">{item.desc}</p>
                  <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          {/* State Compliance */}
          <div>
            <h3 className="text-xl font-['Playfair_Display',serif] text-slate-800 border-b pb-2 flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-slate-600" /> State Compliance
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: FileText, title: "Professional Tax (PT)", desc: "State-wise PT applicability and deduction rules." },
                { icon: Store, title: "Shops & Establishment", desc: "Compliance requirements for shops and establishments." },
                { icon: HandHelping, title: "Labour Welfare Fund (LWF)", desc: "Understanding state-wise LWF contributions and benefits." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1">
                  <item.icon size={28} className="text-blue-600 mb-2" />
                  <h4 className="font-bold text-slate-800 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 my-1.5">{item.desc}</p>
                  <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                    Read More →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= FOOTER CTA ================= */}
      <footer className="bg-slate-100 py-8 text-center border-t">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mx-4">
          <h3 className="text-base font-semibold text-slate-800 mb-4">Let's review your payroll & compliance setup.</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            <button className="bg-[#0f2b3f] hover:bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-semibold transition flex items-center gap-2">
              <Mail size={14} /> Contact Us
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition flex items-center gap-2">
              <Phone size={14} /> WhatsApp
            </button>
          </div>
        </div>
        <div className="text-xs text-slate-400 mt-6">
          © Labourforge — Simplifying Labour Laws, One Topic at a Time
        </div>
      </footer>
    </div>
  );
};

export default Labourforge;