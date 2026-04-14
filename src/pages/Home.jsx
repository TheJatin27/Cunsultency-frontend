import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  // Navigation handlers for services
  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
    window.scrollTo(0, 0);
  };
  

  // Navigation handlers for e-library topics
  const handleTopicClick = (topicPath) => {
    navigate(topicPath);
    window.scrollTo(0, 0);
  };

  // Service route mappings
  const serviceRoutes = {
    payroll: 'PayrollStructuring',
    pfesic: 'PFESICCompliance',
    labourLaw: 'LabourLawAdvisory',
    contractLabour: 'ContractLabourCompliance',
    audit: 'AuditInspectionReadiness',
    labourCode: 'LabourCodeAdvisory'
  };

  // E-Library route mappings
  const libraryRoutes = {
    minimumWages: '/library/minimum-wages',
    bonus: '/library/bonus',
    paymentOfWages: '/library/payment-of-wages',
    pf: '/library/provident-fund',
    esic: '/library/esic',
    gratuity: '/library/gratuity',
    professionalTax: '/library/professional-tax',
    shopsEstablishment: '/library/shops-establishment',
    lwf: '/library/labour-welfare-fund'
  };

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-800 font-['Inter',sans-serif] selection:bg-blue-200">
      
      {/* ================= HERO SECTION ================= */}
      <section id="home-section" className="max-w-7xl mx-auto px-5 md:px-6 pt-8 pb-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display',serif] font-bold text-slate-800 leading-tight">
            Designing Compliant Payroll Structures for a Changing Labour Law Landscape
          </h1>
          <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Supporting organizations in aligning payroll, contracts, and statutory compliance with evolving labour regulations.
          </p>
          <div>
            <button 
              onClick={() => handleServiceClick('/book-consultation')}
              className="bg-[#d59b3f] hover:bg-[#c28a34] text-white px-8 py-3 rounded-md text-sm md:text-base font-semibold shadow-md inline-flex items-center gap-2 transition-colors"
            >
              <Calendar size={18} /> Book a Consultation
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={lc} 
            alt="Payroll compliance illustration"
            className="rounded-2xl shadow-xl w-full max-w-md h-auto object-cover cursor-pointer"
            style={{ aspectRatio: '4/3' }}
            onClick={() => handleServiceClick('/services/payroll-structuring')}
          />
        </div>
      </section>

      {/* Quote Strip - Reduced padding */}
      <div className="w-full bg-white border-y border-slate-200 py-4 text-center">
        <p className="text-slate-700 text-md md:text-lg font-['Playfair_Display',serif] italic">
          “Most compliance issues don't arise from intent — they arise from incorrect structuring.”
        </p>
      </div>

      {/* ================= OUR SERVICES - Clickable Cards ================= */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-8 md:py-10">
        <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] font-semibold text-center text-slate-800 mb-6 md:mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div 
            onClick={() => handleServiceClick(serviceRoutes.payroll)}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <Calculator size={24} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm">Payroll Structuring</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Designing and managing payroll aligned with statutory requirements</p>
          </div>
          
          <div 
            onClick={() => handleServiceClick(serviceRoutes.pfesic)}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield size={24} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm">PF & ESIC Compliance</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Ensuring accurate PF and ESIC compliance and advisory</p>
          </div>
          
          <div 
            onClick={() => handleServiceClick(serviceRoutes.labourLaw)}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <Scale size={24} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm">Labour Law Advisory</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Advisory on labour laws and policy documentation</p>
          </div>
          
          <div 
            onClick={() => handleServiceClick(serviceRoutes.contractLabour)}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users size={24} className="text-blue-600" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm">Contract Labour Compliance</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Ensuring contractor compliance and obligations</p>
          </div>
          
          <div 
            onClick={() => handleServiceClick(serviceRoutes.audit)}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
              <Search size={24} className="text-amber-600" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm">Audit & Inspection Readiness</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Preparing organizations for regulatory scrutiny</p>
          </div>
        </div>
      </section>

      {/* ================= WHERE ORGANIZATIONS STRUGGLE ================= */}
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
              className="rounded-2xl shadow-xl w-full h-auto object-cover cursor-pointer"
              style={{ aspectRatio: '4/3' }}
              onClick={() => handleServiceClick(serviceRoutes.audit)}
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
              { num: "01", title: "Assess current structure", desc: "Review existing payroll & labour compliance framework.", route: serviceRoutes.labourCode },
              { num: "02", title: "Identify gaps & risks", desc: "Map contractor risks & non-compliances proactively.", route: serviceRoutes.audit },
              { num: "03", title: "Redesign payroll & policies", desc: "Update salary structures & policy documentation.", route: serviceRoutes.payroll },
              { num: "04", title: "Support implementation", desc: "Smooth transition with hands-on execution support.", route: serviceRoutes.labourCode }
            ].map((step, idx) => (
              <div 
                key={idx} 
                onClick={() => handleServiceClick(step.route)}
                className="bg-white text-slate-800 p-4 rounded-xl flex-1 text-left relative shadow-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
              >
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

      {/* ================= ABOUT LABOURFORGE ================= */}
      <section id="about-section" className="bg-white py-8 md:py-10">
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
                className="rounded-xl shadow-md w-full h-auto object-cover cursor-pointer"
                onClick={() => handleServiceClick('/about')}
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-['Playfair_Display',serif] text-blue-900 pt-2">What We Do</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div 
              onClick={() => handleServiceClick(serviceRoutes.payroll)}
              className="bg-white border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <Calculator size={28} className="text-blue-600 mx-auto mb-1" />
              <span className="text-xs font-semibold">Payroll Structuring</span>
            </div>
            <div 
              onClick={() => handleServiceClick(serviceRoutes.payroll)}
              className="bg-white border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <TrendingUp size={28} className="text-blue-600 mx-auto mb-1" />
              <span className="text-xs font-semibold">Salary Alignment</span>
            </div>
            <div 
              onClick={() => handleServiceClick(serviceRoutes.labourLaw)}
              className="bg-white border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <FileText size={28} className="text-blue-600 mx-auto mb-1" />
              <span className="text-xs font-semibold">Documentation & Policies</span>
            </div>
            <div 
              onClick={() => handleServiceClick(serviceRoutes.audit)}
              className="bg-white border rounded-xl p-3 text-center shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <FileCheck size={28} className="text-blue-600 mx-auto mb-1" />
              <span className="text-xs font-semibold">Audit Support</span>
            </div>
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

      {/* ================= DETAILED SERVICES - Clickable Cards ================= */}
      <section className="bg-slate-50 py-8 md:py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5">
          <div
            className="w-full min-h-[200px] rounded-2xl p-5 md:p-6 mb-8 flex flex-col md:flex-row justify-between items-center text-white shadow-xl bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${lc5})` }}
            onClick={() => handleServiceClick('/services')}
          >
            <div>
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
            <div 
              onClick={() => handleServiceClick(serviceRoutes.payroll)}
              className="bg-white p-5 rounded-2xl shadow-sm border flex gap-4 hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-blue-50 p-2 rounded-xl h-fit">
                <TrendingUp size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display',serif] font-semibold text-blue-900 text-base">1. Payroll Structuring & Management</h3>
                <p className="text-xs text-slate-500 mb-2">Designing payroll aligned with statutory requirements.</p>
                <ul className="space-y-1 text-xs">
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Salary structure design (aligned with wage definitions)</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Monthly payroll processing</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Cost optimisation with compliance focus</li>
                </ul>
              </div>
            </div>
            
            <div 
              onClick={() => handleServiceClick(serviceRoutes.pfesic)}
              className="bg-white p-5 rounded-2xl shadow-sm border flex gap-4 hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-blue-50 p-2 rounded-xl h-fit">
                <Shield size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display',serif] font-semibold text-blue-900 text-base">2. PF & ESIC Compliance Advisory</h3>
                <p className="text-xs text-slate-500 mb-2">End-to-end support under EPF & ESI Acts.</p>
                <ul className="space-y-1 text-xs">
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Registration and compliance setup</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Monthly filings and corrections</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Handling notices and queries</li>
                </ul>
              </div>
            </div>
            
            <div 
              onClick={() => handleServiceClick(serviceRoutes.labourLaw)}
              className="bg-white p-5 rounded-2xl shadow-sm border flex gap-4 hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-blue-50 p-2 rounded-xl h-fit">
                <Scale size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display',serif] font-semibold text-blue-900 text-base">3. Labour Law Advisory & Documentation</h3>
                <p className="text-xs text-slate-500 mb-2">Building audit-ready frameworks.</p>
                <ul className="space-y-1 text-xs">
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Policy drafting (HR & compliance policies)</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Documentation structuring</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Compliance gap assessment</li>
                </ul>
              </div>
            </div>
            
            <div 
              onClick={() => handleServiceClick(serviceRoutes.contractLabour)}
              className="bg-white p-5 rounded-2xl shadow-sm border flex gap-4 hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-blue-50 p-2 rounded-xl h-fit">
                <Users size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display',serif] font-semibold text-blue-900 text-base">4. Contract Labour Compliance</h3>
                <p className="text-xs text-slate-500 mb-2">Advisory under CLRA Act.</p>
                <ul className="space-y-1 text-xs">
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Contractor compliance review</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Principal employer obligations</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Risk identification and mitigation</li>
                </ul>
              </div>
            </div>
            
            <div 
              onClick={() => handleServiceClick(serviceRoutes.audit)}
              className="bg-white p-5 rounded-2xl shadow-sm border flex gap-4 hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-blue-50 p-2 rounded-xl h-fit">
                <Search size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-['Playfair_Display',serif] font-semibold text-blue-900 text-base">5. Audit & Inspection Readiness</h3>
                <p className="text-xs text-slate-500 mb-2">Preparing for regulatory scrutiny.</p>
                <ul className="space-y-1 text-xs">
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Pre-inspection audits</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Documentation review</li>
                  <li className="flex gap-2"><CheckCircle size={10} className="text-[#d59b3f] mt-0.5 shrink-0" />Support during inspections</li>
                </ul>
              </div>
            </div>
            
            {/* Special Labour Code Card */}
            <div 
              onClick={() => handleServiceClick(serviceRoutes.labourCode)}
              className="bg-white p-5 rounded-2xl shadow-sm border-2 border-amber-200 relative overflow-hidden hover:shadow-md transition cursor-pointer"
            >
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

      {/* ================= E-LIBRARY - Clickable Topics ================= */}
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
              <div 
                onClick={() => handleTopicClick(libraryRoutes.minimumWages)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <Coins size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Minimum Wages</h4>
                <p className="text-xs text-slate-500 my-1.5">Understanding minimum wage rates and their applicability.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
              
              <div 
                onClick={() => handleTopicClick(libraryRoutes.bonus)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <Gift size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Bonus</h4>
                <p className="text-xs text-slate-500 my-1.5">Eligibility and calculation of bonus under labour laws.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
              
              <div 
                onClick={() => handleTopicClick(libraryRoutes.paymentOfWages)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <Clock size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Payment of Wages</h4>
                <p className="text-xs text-slate-500 my-1.5">Rules governing timely and correct payment of wages.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
            </div>
          </div>
          
          {/* Social Security */}
          <div>
            <h3 className="text-xl font-['Playfair_Display',serif] text-slate-800 border-b pb-2 flex items-center gap-2 mb-4">
              <Shield size={20} className="text-blue-600" /> Social Security
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div 
                onClick={() => handleTopicClick(libraryRoutes.pf)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <Building size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">PF</h4>
                <p className="text-xs text-slate-500 my-1.5">Provident Fund compliance and employer obligations.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
              
              <div 
                onClick={() => handleTopicClick(libraryRoutes.esic)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <Hospital size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">ESIC</h4>
                <p className="text-xs text-slate-500 my-1.5">ESIC coverage, benefits, and contribution norms.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
              
              <div 
                onClick={() => handleTopicClick(libraryRoutes.gratuity)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <HeartHandshake size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Gratuity</h4>
                <p className="text-xs text-slate-500 my-1.5">Gratuity eligibility, calculation, and payment rules.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
            </div>
          </div>
          
          {/* State Compliance */}
          <div>
            <h3 className="text-xl font-['Playfair_Display',serif] text-slate-800 border-b pb-2 flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-slate-600" /> State Compliance
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div 
                onClick={() => handleTopicClick(libraryRoutes.professionalTax)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <FileText size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Professional Tax (PT)</h4>
                <p className="text-xs text-slate-500 my-1.5">State-wise PT applicability and deduction rules.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
              
              <div 
                onClick={() => handleTopicClick(libraryRoutes.shopsEstablishment)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <Store size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Shops & Establishment</h4>
                <p className="text-xs text-slate-500 my-1.5">Compliance requirements for shops and establishments.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
              
              <div 
                onClick={() => handleTopicClick(libraryRoutes.lwf)}
                className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer"
              >
                <HandHelping size={28} className="text-blue-600 mb-2" />
                <h4 className="font-bold text-slate-800 text-sm">Labour Welfare Fund (LWF)</h4>
                <p className="text-xs text-slate-500 my-1.5">Understanding state-wise LWF contributions and benefits.</p>
                <button className="bg-[#d59b3f] hover:bg-[#c28a34] text-white text-[11px] px-3 py-1.5 rounded mt-1 transition">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= FOOTER CTA ================= */}
      <footer id="contact-section" className="bg-slate-100 py-8 text-center border-t">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mx-4">
          <h3 className="text-base font-semibold text-slate-800 mb-4">Let's review your payroll & compliance setup.</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            <button 
              onClick={() => handleServiceClick('/contact')}
              className="bg-[#0f2b3f] hover:bg-blue-900 text-white px-5 py-2 rounded-md text-sm font-semibold transition flex items-center gap-2"
            >
              <Mail size={14} /> Contact Us
            </button>
            <button 
              onClick={() => window.open('https://wa.me/your-number', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-semibold transition flex items-center gap-2"
            >
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