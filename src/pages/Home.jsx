import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, ChartLine, Shield, Users, Search, 
  CheckCircle, FileText, BarChart, 
  Briefcase, FileCheck, Scale, Mail, Phone, TrendingUp, Calculator
} from 'lucide-react';

import lc from '../assets/lc1.png';
import lc2 from '../assets/lc2.png';
import lc4 from '../assets/lc4.png';
import lc5 from '../assets/lc5.png';

const Labourforge = () => {
  const navigate = useNavigate();

  // Navigation handler for services
  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    window.scrollTo(0, 0);
  };

  // Service route mappings
  const serviceRoutes = {
    payroll: '/PayrollStructuring',
    pfesic: '/PFESICCompliance',
    labourLaw: '/LabourLawAdvisory',
    contractLabour: '/ContractLabourCompliance',
    audit: '/AuditInspectionReadiness',
    labourCode: '/LabourCodeAdvisory'
  };

  return (
    <div className="min-h-screen bg-[#ffe5d9] text-slate-800 font-sans antialiased selection:bg-[#ffcad4]">
      
      {/* ================= HERO SECTION ================= */}
      <section id="home-section" className="max-w-7xl mx-auto px-5 md:px-6 pt-12 pb-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Designing Compliant Payroll Structures for a Changing Labour Law Landscape
          </h1>
          <p className="text-slate-700 text-sm md:text-base max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
            Supporting organizations in aligning payroll, contracts, and statutory compliance with evolving labour regulations.
          </p>
          <div>
            <button 
              onClick={() => handleServiceClick('/book-consultation')}
              className="bg-[#e9967a] hover:bg-[#d47f63] text-white px-8 py-3 rounded-md text-sm md:text-base font-semibold shadow-md inline-flex items-center gap-2 transition-colors"
            >
              <Calendar size={18} /> Book a Consultation
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={lc} 
            alt="Payroll compliance illustration"
            className="rounded-2xl shadow-xl w-full max-w-md h-auto object-cover cursor-pointer hover:opacity-95 transition-opacity"
            style={{ aspectRatio: '4/3' }}
            onClick={() => handleServiceClick('/services/payroll-structuring')}
          />
        </div>
      </section>

      {/* Quote Strip */}
      <div className="w-full bg-white/80 backdrop-blur-sm border-y border-[#fbdad0] py-5 text-center px-4">
        <p className="text-slate-800 text-sm md:text-base font-medium italic">
          “Most compliance issues don't arise from intent; they arise from incorrect structuring.”
        </p>
      </div>

      {/* ================= OUR SERVICES grid ================= */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 tracking-tight mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            { icon: Calculator, title: "Payroll Structuring", desc: "Designing and managing payroll aligned with statutory requirements", route: serviceRoutes.payroll },
            { icon: Shield, title: "PF & ESIC Compliance", desc: "Ensuring accurate PF and ESIC compliance and advisory", route: serviceRoutes.pfesic },
            { icon: Scale, title: "Labour Law Advisory", desc: "Advisory on labour laws and policy documentation", route: serviceRoutes.labourLaw },
            { icon: Users, title: "Contract Labour Compliance", desc: "Ensuring contractor compliance and obligations", route: serviceRoutes.contractLabour },
            { icon: Search, title: "Audit Readiness", desc: "Preparing organizations for regulatory scrutiny", route: serviceRoutes.audit }
          ].map((service, idx) => (
            <div 
              key={idx}
              onClick={() => handleServiceClick(service.route)}
              className="bg-white p-5 rounded-xl shadow-sm border border-[#fbdad0] text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#fff5f0] rounded-full flex items-center justify-center mx-auto mb-3">
                  <service.icon size={24} className="text-[#e9967a]" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm md:text-base">{service.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHERE ORGANIZATIONS STRUGGLE ================= */}
      <section className="bg-[#ffdac1] border-y border-[#fbdad0] py-12">
        <div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Where Organizations Struggle
            </h2>
            <ul className="space-y-3">
              {[
                "Incorrect salary structuring leading to compliance risk",
                "PF/ESIC exposure due to incorrect classification",
                "Weak documentation during inspections",
                "Confusion around labour code implementation",
                "Contractor compliance gaps"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-lg shadow-sm border border-[#fbdad0]">
                  <CheckCircle size={18} className="text-[#e9967a] shrink-0" />
                  <span className="text-sm md:text-base font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <img 
              src={lc2} 
              alt="Business compliance challenges"
              className="rounded-2xl shadow-xl w-full h-auto object-cover cursor-pointer hover:opacity-95 transition-opacity"
              style={{ aspectRatio: '4/3' }}
              onClick={() => handleServiceClick(serviceRoutes.audit)}
            />
          </div>
        </div>
      </section>

      {/* ================= LABOUR CODES SECTION ================= */}
      <section className="bg-[#1f1916] text-white py-14 border-b-8" style={{ borderBottomColor: '#e9967a' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">Getting Ready for Labour Codes</h2>
          <p className="text-[#fbdad0] text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            With labour codes expected to be implemented soon, start aligning your systems today.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              { num: "01", title: "Assess current structure", desc: "Review existing payroll & labour compliance framework.", route: serviceRoutes.labourCode },
              { num: "02", title: "Identify gaps & risks", desc: "Map contractor risks & non-compliances proactively.", route: serviceRoutes.audit },
              { num: "03", title: "Redesign payroll & policies", desc: "Update salary structures & policy documentation.", route: serviceRoutes.payroll },
              { num: "04", title: "Support implementation", desc: "Smooth transition with hands-on execution support.", route: serviceRoutes.labourCode }
            ].map((step, idx) => (
              <div 
                key={idx} 
                onClick={() => handleServiceClick(step.route)}
                className="bg-white text-slate-800 p-5 rounded-xl text-left relative shadow-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between pt-6"
              >
                <div>
                  <div className="w-9 h-9 bg-[#fff5f0] text-[#e9967a] rounded-full flex items-center justify-center font-bold text-sm mb-3 -mt-8 border-4 border-[#1f1916]">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-base md:text-lg font-medium">
            Start early. Adjust gradually. <span className="text-[#e9967a] font-semibold">Stay compliant.</span>
          </p>
        </div>
      </section>

      {/* ================= ABOUT LABOURFORGE ================= */}
      <section id="about-section" className="bg-white/40 backdrop-blur-sm py-14">
        <div className="max-w-6xl mx-auto px-5 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2d221c] tracking-tight">
            About <span className="text-[#e9967a]">Labourforge</span>
          </h2>
          <p className="text-slate-700 font-semibold text-sm md:text-base max-w-2xl mx-auto">
            Bringing structure and clarity to payroll & labour law compliance
          </p>
          <p className="text-slate-800 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-medium">
            Labourforge was established with a clear objective to bring structure, clarity, and{' '}
            <span className="text-[#e9967a] font-bold">practical understanding</span> to payroll and labour law compliance.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center text-left pt-4">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#2d221c] tracking-tight">The Reality</h3>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                Compliance challenges don't arise from intent—they come from gaps in structuring, interpretation, and execution.
              </p>
              <div className="bg-white/80 border-l-4 border-[#e9967a] p-4 rounded-r-md text-sm md:text-base font-semibold text-slate-800 shadow-sm">
                Payroll is not just an administrative task; it's a critical compliance and risk management function.
              </div>
            </div>
            <div>
              <img 
                src={lc4}
                alt="Team collaboration"
                className="rounded-xl shadow-md w-full h-auto object-cover cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => handleServiceClick('/about')}
              />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-[#2d221c] tracking-tight pt-6">What We Do</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Calculator, title: "Payroll Structuring", route: serviceRoutes.payroll },
              { icon: TrendingUp, title: "Salary Alignment", route: serviceRoutes.payroll },
              { icon: FileText, title: "Documentation & Policies", route: serviceRoutes.labourLaw },
              { icon: FileCheck, title: "Audit Support", route: serviceRoutes.audit }
            ].map((item, idx) => (
              <div 
                key={idx}
                onClick={() => handleServiceClick(item.route)}
                className="bg-white border border-[#fbdad0] rounded-xl p-4 text-center shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <item.icon size={28} className="text-[#e9967a] mx-auto mb-2" />
                <span className="text-xs md:text-sm font-semibold text-slate-800 block">{item.title}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-[#1f1916] text-white rounded-2xl p-6 flex flex-wrap justify-around gap-6 items-center mt-8">
            {[
              { title: "Reliable", desc: "Accurate & Well-Researched Content" },
              { title: "Practical", desc: "Built for Everyday Compliance" },
              { title: "Professional", desc: "Designed for HR & Payroll Pros" }
            ].map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="text-center space-y-1">
                  <span className="text-lg md:text-xl font-bold">{item.title}</span>
                  <div className="text-[#fbdad0] text-xs md:text-sm">{item.desc}</div>
                </div>
                {idx < 2 && <div className="w-px h-8 bg-zinc-600 hidden md:block"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DETAILED SERVICES SECTION ================= */}
      <section className="bg-[#ffdac1] py-12 border-t border-[#fbdad0]">
        <div className="max-w-7xl mx-auto px-5">
          <div
            className="w-full min-h-[200px] rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row justify-between items-center text-white shadow-xl bg-cover bg-center cursor-pointer hover:opacity-95 transition-opacity"
            style={{ backgroundImage: `url(${lc5})` }}
            onClick={() => handleServiceClick('/services')}
          >
            <div className="text-center md:text-left space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Focus Areas</h2>
              <p className="text-[#fbdad0] text-sm md:text-base max-w-md">Payroll & Compliance Solutions Built for Clarity, Control & Confidence.</p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <div className="bg-white/10 p-2.5 rounded-xl"><ChartLine size={24} /></div>
              <div className="bg-white/10 p-2.5 rounded-xl"><Shield size={24} /></div>
            </div>
          </div>
          
          <p className="text-center text-slate-800 text-sm md:text-base mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Payroll and compliance are not isolated functions; they are interconnected systems that directly impact risk, cost, and operational stability.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "1. Payroll Structuring & Management", desc: "Designing payroll aligned with statutory requirements.", points: ["Salary structure design (aligned with wage definitions)", "Monthly payroll processing", "Cost optimisation with compliance focus"], route: serviceRoutes.payroll },
              { icon: Shield, title: "2. PF & ESIC Compliance Advisory", desc: "End-to-end support under EPF & ESI Acts.", points: ["Registration and compliance setup", "Monthly filings and corrections", "Handling notices and queries"], route: serviceRoutes.pfesic },
              { icon: Scale, title: "3. Labour Law Advisory & Documentation", desc: "Building audit-ready frameworks.", points: ["Policy drafting (HR & compliance policies)", "Documentation structuring", "Compliance gap assessment"], route: serviceRoutes.labourLaw },
              { icon: Users, title: "4. Contract Labour Compliance", desc: "Advisory under CLRA Act.", points: ["Contractor compliance review", "Principal employer obligations", "Risk identification and mitigation"], route: serviceRoutes.contractLabour },
              { icon: Search, title: "5. Audit & Inspection Readiness", desc: "Preparing for regulatory scrutiny.", points: ["Pre-inspection audits", "Documentation review", "Support during inspections"], route: serviceRoutes.audit }
            ].map((service, idx) => (
              <div 
                key={idx}
                onClick={() => handleServiceClick(service.route)}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#fbdad0] flex gap-4 hover:shadow-md transition cursor-pointer"
              >
                <div className="bg-[#fff5f0] p-3 rounded-xl h-fit">
                  <service.icon size={24} className="text-[#e9967a]" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">{service.title}</h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-1.5 text-xs md:text-sm text-slate-600">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-2"><CheckCircle size={14} className="text-[#e9967a] mt-0.5 shrink-0" />{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* Special Labour Code Card */}
            <div 
              onClick={() => handleServiceClick(serviceRoutes.labourCode)}
              className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#fbdad0] relative overflow-hidden hover:shadow-md transition cursor-pointer"
            >
              <div className="absolute top-0 right-0 bg-[#e9967a] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">★ Special Focus</div>
              <div className="flex gap-4">
                <div className="bg-slate-100 p-3 rounded-xl h-fit">
                  <FileText size={24} className="text-slate-700" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-slate-900 text-sm md:text-base">6. Labour Code Advisory</h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed">Supporting organizations in transitioning towards the new framework.</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="bg-slate-100 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-600">Wage structuring (50% rule)</span>
                    <span className="bg-slate-100 px-2.5 py-1 rounded-full text-[11px] font-medium text-slate-600">Fixed-term vs permanent</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 pt-1">Don't wait for implementation. Start alignment now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= FOOTER CTA ================= */}
      <footer id="contact-section" className="bg-[#ffe5d9] py-10 text-center border-t border-[#fbdad0]">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mx-4 border border-[#fbdad0]">
          <h3 className="text-sm md:text-base font-bold text-slate-900 mb-4">Let's review your payroll & compliance setup.</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            <button 
              onClick={() => handleServiceClick('/contact')}
              className="bg-[#1f1916] hover:bg-black text-white px-5 py-2.5 rounded-md text-sm font-semibold transition flex items-center gap-2"
            >
              <Mail size={16} /> Contact Us
            </button>
            <button 
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition flex items-center gap-2"
            >
              <Phone size={16} /> WhatsApp
            </button>
          </div>
        </div>
        <div className="text-xs text-slate-500 mt-8 font-semibold">
          © Labourforge · Structuring Compliance, Protecting Value
        </div>
      </footer>
    </div>
  );
};

export default Labourforge;   