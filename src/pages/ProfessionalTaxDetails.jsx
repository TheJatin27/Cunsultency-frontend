import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  FileText,
  Gavel,
  ClipboardCheck,
  HelpCircle,
  BookOpen,
  Scale,
  Download,
  AlertCircle,
  Loader2,
  ChevronDown,
  MapPin,
  ArrowRight,
  IndianRupee
} from "lucide-react";

import { useNavigate, useParams, Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ProfessionalTaxDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hardcoded prominent PT States configuration for generating standard dynamic routing links safely below
  const targetPtStates = [
    { name: "Maharashtra Professional Tax Act, 1975", routeSlug: "maharashtra-professional-tax" },
    { name: "Karnataka Professional Tax Act, 1976", routeSlug: "karnataka-professional-tax" },
    { name: "Gujarat Professional Tax Act, 1976", routeSlug: "gujarat-professional-tax" },
    { name: "West Bengal Professional Tax Act, 1979", routeSlug: "west-bengal-professional-tax" },
    { name: "Tamil Nadu Professional Tax Rules, 1998", routeSlug: "tamil-nadu-professional-tax" },
    { name: "Telangana Professional Tax Act, 1987", routeSlug: "telangana-professional-tax" }
  ];

  // Sanitizes hidden layout characters, replaces regex broken words, and strips line carriage errors
  const cleanTextFormatting = (htmlString) => {
    if (!htmlString) return "";
    return htmlString
      .replace(/\r?\n|\r/g, " ") // Convert arbitrary system linebreaks to clean inline spaces
      .replace(/Paym\s+ent/gi, "Payment")
      .replace(/Payme\s*-\s*nt/gi, "Payment")
      .replace(/princi\s+ple/gi, "principle")
      .replace(/princi\s*-\s*ple/gi, "principle")
      .replace(/C\s+entral/gi, "Central")
      .replace(/C\s*-\s*entral/gi, "Central")
      .replace(/I\s*-\s*t/g, "It");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snap = await getDocs(collection(db, "eLibraryPages"));
        const pages = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Finds matching layout text entry content via Slug parameter context matches
        const found = pages.find((item) => item.slug === slug);
        setData(found);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Loader2 className="animate-spin text-[#0B1538]" size={32} />
      </div>
    );
  }

  if (!data) return <div className="p-20 text-center font-bold text-slate-600">Page Not Found</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20 overflow-x-hidden">
      
      {/* HEADER SECTION - FULL WIDTH WITH COMPRESSED MARGINS/PADDING */}
      <header className="bg-[#0B1538] text-white pt-6 pb-10 px-6 lg:px-12 relative">
        <div className="w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors mb-3 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to E-Library</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-emerald-500 rounded-xl shadow-lg shadow-emerald-500/20 flex-shrink-0">
                <IndianRupee size={24} className="text-white" />
              </div>
              <h1 className="text-2xl lg:text-4xl font-black tracking-tight uppercase break-words leading-none">
                {data.title || "Professional Tax Laws (State PT Applicability)"}
              </h1>
            </div>

            {data.bareActPdf && (
              <a
                href={data.bareActPdf}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-orange-500 text-white px-6 py-3.5 rounded-2xl font-black text-[11px] hover:bg-white hover:text-[#0B1538] transition-all shadow-xl shadow-orange-500/20 uppercase tracking-widest flex-shrink-0 border-2 border-transparent"
              >
                <Download size={18} /> Download Bare Act PDF
              </a>
            )}
          </div>

          <div 
            className="text-slate-400 text-sm lg:text-base w-full leading-relaxed rich-text-area opacity-80 border-l-2 border-white/10 pl-6"
            dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.shortDescription) }}
          />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full px-4 lg:px-8 -mt-4 relative z-20">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          
          {/* LEFT CONTENT COLUMN (75% Width on Desktop) */}
          <div className="col-span-12 xl:col-span-9 bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-10 space-y-8 min-w-0">
            
            {/* 01. OVERVIEW */}
            <section id="overview" className="w-full min-w-0">
              <SectionHeader icon={<BookOpen className="text-blue-600" />} title="01. Overview" />
              <div 
                className="text-slate-600 leading-relaxed pl-6 lg:pl-10 text-[14px] lg:text-[15px] rich-text-area mt-1 w-full"
                dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.overview) }}
              />
            </section>

            {/* STATE APPLICABILITY PORTAL CARD */}
            <section id="state-pt-portal" className="w-full min-w-0 bg-slate-50/70 border border-slate-200/60 p-6 lg:p-8 rounded-[2rem]">
              <SectionHeader icon={<MapPin className="text-emerald-600" />} title="State-Wise Tax Slab & Rules Portal" />
              <p className="text-sm text-slate-500 pl-6 lg:pl-10 mb-6 font-medium">
                Professional tax is levied under Article 276 of the Constitution of India by individual states. Select a state below to check specific dynamic exemption categories, slab rates, registration deadlines, and compliance filing returns:
              </p>
              
              <div className="pl-6 lg:pl-10 grid gap-3 sm:grid-cols-1 md:grid-cols-2">
                {targetPtStates.map((state, idx) => (
                  <Link
                    key={idx}
                    to={`/elibrary/${state.routeSlug}`}
                    className="flex items-center justify-between p-4 bg-white hover:bg-emerald-50/30 border border-slate-200/80 hover:border-emerald-500/30 rounded-xl transition-all shadow-sm group"
                  >
                    <span className="text-[13px] font-bold text-slate-700 group-hover:text-emerald-600 transition-colors tracking-tight">
                      {state.name}
                    </span>
                    <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </section>

            {/* DETAILED ACTS BREAKDOWN */}
            {data.includedActs && data.includedActs.length > 0 && (
              <section id="detailed-breakdown" className="space-y-4 w-full min-w-0">
                <SectionHeader icon={<Gavel className="text-orange-600" />} title="Acts & Slabs Breakdown" />
                <div className="pl-6 lg:pl-10 space-y-4 w-full">
                  {data.includedActs.map((act, index) => (
                    <div 
                      key={index} 
                      id={`act-${index}`} 
                      className="p-5 bg-slate-50 rounded-2xl border border-slate-100 scroll-mt-24 w-full min-w-0"
                    >
                      <h3 className="text-base font-black text-[#0B1538] mb-2 uppercase tracking-tight">
                        {act.actTitle}
                      </h3>
                      <div 
                        className="rich-text-area text-sm text-slate-600 leading-relaxed w-full" 
                        dangerouslySetInnerHTML={{ __html: cleanTextFormatting(act.actContent) }} 
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* BARE ACT NOTE */}
            <section className="bg-blue-50/50 p-6 lg:p-8 rounded-[2rem] border border-blue-100 w-full min-w-0">
              <SectionHeader icon={<FileText className="text-orange-600" />} title="02. Official Constitutional Provisions" />
              <div className="text-slate-600 text-sm rich-text-area mt-1 w-full pl-0" dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.bareActDescription) }} />
            </section>

            {/* AMENDMENTS + RULES */}
            <div className="grid lg:grid-cols-2 gap-8 pt-2 w-full min-w-0">
              <section className="border-l-4 border-purple-100 pl-6 lg:pl-10 min-w-0">
                <SectionHeader icon={<Gavel className="text-purple-600" />} title="03. Recent Slab Changes" />
                <div className="text-slate-600 text-[13px] rich-text-area mt-1 w-full" dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.amendments) }} />
              </section>
              <section className="border-l-4 border-emerald-100 pl-6 lg:pl-10 min-w-0">
                <SectionHeader icon={<ClipboardCheck className="text-emerald-600" />} title="04. Return Filing Timelines" />
                <div className="text-slate-600 text-[13px] rich-text-area mt-1 w-full" dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.rules) }} />
              </section>
            </div>

            {/* 05. PRACTICAL IMPLEMENTATION */}
            <section id="practical-implementation-section" className="w-full min-w-0 border-l-4 border-amber-100 pl-6 lg:pl-10">
              <SectionHeader icon={<AlertCircle className="text-amber-600" />} title="05. Deduction & Payroll Compliance" />
              <div className="mt-2 w-full">
                <ul className="space-y-3.5 list-disc list-outside pl-4 text-slate-600 text-[13px] lg:text-[14px] leading-relaxed font-medium">
                  {data.practicalNotes?.map((note, i) => (
                    <li key={i} className="marker:text-amber-500 pl-1">
                      <span 
                        className="practical-inline-area inline w-full" 
                        dangerouslySetInnerHTML={{ __html: cleanTextFormatting(note) }} 
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR COLUMN (25% Width on Desktop) */}
          <aside className="col-span-12 xl:col-span-3 space-y-6">
            
            {/* REGION SELECTION SIDEBAR CARD */}
            <div className="bg-[#FFF9F2] border border-[#FFEAD1] p-8 rounded-[2.5rem] shadow-sm">
              <h3 className="text-[#0B1538] font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                <Scale size={18} className="text-emerald-600" />
                Active PT States
              </h3>
              
              <ul className="space-y-4">
                {targetPtStates.map((state, i) => (
                  <li key={i}>
                    <Link 
                      to={`/elibrary/${state.routeSlug}`}
                      className="flex items-start gap-3 text-left group w-full"
                    >
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-[12px] font-bold text-slate-700 group-hover:text-emerald-600 underline decoration-transparent group-hover:decoration-emerald-500 transition-all">
                        {state.name.split(" Act")[0]}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEED HELP CARD */}
            <div className="bg-[#0B1538] p-6 rounded-[2.5rem] text-white shadow-xl">
              <h3 className="text-orange-400 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <HelpCircle size={16} /> Need Help?
              </h3>
              <p className="text-[11px] text-slate-300 leading-relaxed font-medium mb-4">
                Scroll down to read our isolated FAQ module for quick configuration workflows regarding {data.title || "State Professional Tax"}.
              </p>
              <button 
                onClick={() => document.getElementById("faq-sidebar-box")?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
              >
                View All FAQs
              </button>
            </div>

            {/* FREQUENTLY ASKED QUESTIONS */}
            {data.faqs && data.faqs.length > 0 && (
              <div id="faq-sidebar-box" className="bg-white border border-slate-200 p-6 rounded-[2.5rem] shadow-md space-y-4">
                <h3 className="text-[#0B1538] font-black text-xs uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center gap-2">
                  <HelpCircle size={16} className="text-blue-600" />
                  Frequently Asked Questions
                </h3>
                
                <div className="space-y-2.5">
                  {data.faqs.map((faq, i) => (
                    <FaqItem 
                      key={i} 
                      faq={faq} 
                      cleanTextFormatting={cleanTextFormatting} 
                    />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>

      {/* BASE CSS STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .rich-text-area { 
          display: block !important;
          white-space: normal !important;
          word-wrap: break-word !important; 
          overflow-wrap: break-word !important; 
          word-break: normal !important; 
          hyphens: none !important;
          text-wrap: pretty !important;
          text-align: left !important;
        }
        .rich-text-area p { margin-bottom: 0.4rem; text-align: left !important; }
        .rich-text-area a { color: #10b981; text-decoration: underline; font-weight: 800; }
        .rich-text-area strong { color: #1e293b; font-weight: 700; }

        .rich-text-area ul { list-style-type: disc !important; padding-left: 1.25rem !important; margin: 0.5rem 0 !important; display: block !important; }
        .rich-text-area ol { list-style-type: decimal !important; padding-left: 1.25rem !important; margin: 0.5rem 0 !important; display: block !important; }
        .rich-text-area li { display: list-item !important; text-align: left !important; margin-bottom: 0.25rem; }

        .practical-inline-area, .practical-inline-area * {
          display: inline !important;
          white-space: normal !important;
          word-break: normal !important;
          text-align: left !important;
        }
      `}} />
    </div>
  );
};

{/* ACCORDION TOGGLE COMPONENT FOR CLEAN SEPARATE FAQS CONTAINER */}
const FaqItem = ({ faq, cleanTextFormatting }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 pb-2.5 last:border-none last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left gap-2 py-1 text-slate-800 font-bold text-[12px] tracking-tight hover:text-emerald-500 transition-colors group"
      >
        <span className="leading-tight">Q: {faq.question}</span>
        <ChevronDown 
          size={14} 
          className={`mt-0.5 text-slate-400 group-hover:text-emerald-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      
      <div 
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-1.5" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div 
            className="text-slate-500 text-[11px] leading-relaxed pl-3 border-l-2 border-emerald-500/30 py-0.5"
            dangerouslySetInnerHTML={{ __html: cleanTextFormatting(faq.answer) }}
          />
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ icon, title, light }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className={`p-2 rounded-lg ${light ? "bg-white/10" : "bg-white border border-slate-100 shadow-sm"}`}>
      {React.cloneElement(icon, { size: 18, strokeWidth: 2.5 })}
    </div>
    <h2 className={`text-base lg:text-lg font-black uppercase tracking-tight ${light ? "text-white" : "text-slate-800"}`}>{title}</h2>
  </div>
);

export default ProfessionalTaxDetails;