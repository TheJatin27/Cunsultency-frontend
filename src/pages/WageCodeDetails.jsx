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
  ChevronDown
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// Import Quill theme styles for user-facing class rendering (.ql-*)
import "react-quill-new/dist/quill.snow.css";

const WageCodeDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load Google Fonts dynamically for user view
  useEffect(() => {
    const linkId = "google-fonts-quill-user";
    if (!document.getElementById(linkId)) {
      const link = document.createElement("link");
      link.id = linkId;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&family=Poppins:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Sanitizes hidden layout characters & replaces regex broken words
  const cleanTextFormatting = (htmlString) => {
    if (!htmlString) return "";
    return htmlString
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
      
      {/* HEADER SECTION */}
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
              <div className="p-2.5 bg-orange-500 rounded-xl shadow-lg shadow-orange-500/20 flex-shrink-0">
                <Scale size={24} className="text-white" />
              </div>
              <h1 className="text-2xl lg:text-4xl font-black tracking-tight uppercase break-words leading-none">
                {data.title}
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
          
          {/* LEFT CONTENT COLUMN */}
          <div className="col-span-12 xl:col-span-9 bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-10 space-y-8 min-w-0">
            
            {/* 01. OVERVIEW */}
            {data.overview && (
              <section id="overview" className="w-full min-w-0">
                <SectionHeader icon={<BookOpen className="text-blue-600" />} title="01. Overview" />
                <div 
                  className="text-slate-600 leading-relaxed pl-6 lg:pl-10 text-[14px] lg:text-[15px] rich-text-area mt-1 w-full"
                  dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.overview) }}
                />
              </section>
            )}

            {/* DETAILED ACTS BREAKDOWN */}
            {data.includedActs && data.includedActs.length > 0 && (
              <section id="detailed-breakdown" className="space-y-4 w-full min-w-0">
                <SectionHeader icon={<Gavel className="text-orange-600" />} title="Acts & Codes Breakdown" />
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
            {data.bareActDescription && (
              <section className="bg-blue-50/50 p-6 lg:p-8 rounded-[2rem] border border-blue-100 w-full min-w-0">
                <SectionHeader icon={<FileText className="text-orange-600" />} title="02. Official Bare Act Note" />
                <div className="text-slate-600 text-sm rich-text-area mt-1 w-full pl-0" dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.bareActDescription) }} />
              </section>
            )}

            {/* AMENDMENTS + RULES */}
            <div className="grid lg:grid-cols-2 gap-8 pt-2 w-full min-w-0">
              {data.amendments && (
                <section className="border-l-4 border-purple-100 pl-6 lg:pl-10 min-w-0">
                  <SectionHeader icon={<Gavel className="text-purple-600" />} title="03. Amendments" />
                  <div className="text-slate-600 text-[13px] rich-text-area mt-1 w-full" dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.amendments) }} />
                </section>
              )}
              {data.rules && (
                <section className="border-l-4 border-emerald-100 pl-6 lg:pl-10 min-w-0">
                  <SectionHeader icon={<ClipboardCheck className="text-emerald-600" />} title="04. Statutory Rules" />
                  <div className="text-slate-600 text-[13px] rich-text-area mt-1 w-full" dangerouslySetInnerHTML={{ __html: cleanTextFormatting(data.rules) }} />
                </section>
              )}
            </div>

            {/* 05. PRACTICAL IMPLEMENTATION */}
            {data.practicalNotes && data.practicalNotes.length > 0 && (
              <section id="practical-implementation-section" className="w-full min-w-0 border-l-4 border-amber-100 pl-6 lg:pl-10">
                <SectionHeader icon={<AlertCircle className="text-amber-600" />} title="05. Practical Implementation" />
                <div className="mt-2 w-full">
                  <ul className="space-y-3.5 list-disc list-outside pl-4 text-slate-600 text-[13px] lg:text-[14px] leading-relaxed font-medium">
                    {data.practicalNotes.map((note, i) => (
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
            )}
          </div>

          {/* RIGHT SIDEBAR COLUMN */}
          <aside className="col-span-12 xl:col-span-3 space-y-6">
            
            {/* ACTS COVERED CARD */}
            {data.includedActs && data.includedActs.length > 0 && (
              <div className="bg-[#FFF9F2] border border-[#FFEAD1] p-8 rounded-[2.5rem] shadow-sm">
                <h3 className="text-[#0B1538] font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Scale size={18} className="text-orange-500" />
                  Acts Covered
                </h3>
                
                <ul className="space-y-4">
                  {data.includedActs.map((act, i) => (
                    <li key={i}>
                      <button 
                        onClick={() => document.getElementById(`act-${i}`)?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex items-start gap-3 text-left group w-full"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-[12px] font-bold text-slate-700 group-hover:text-orange-600 underline decoration-transparent group-hover:decoration-orange-500 transition-all">
                          {act.actTitle}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* NEED HELP CARD */}
            <div className="bg-[#0B1538] p-6 rounded-[2.5rem] text-white shadow-xl">
              <h3 className="text-orange-400 font-black text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                <HelpCircle size={16} /> Need Help?
              </h3>
              <p className="text-[11px] text-slate-300 leading-relaxed font-medium mb-4">
                Scroll down to look over the isolated FAQ module below for quick operational insights regarding {data.title}.
              </p>
              <button 
                onClick={() => document.getElementById("faq-sidebar-box")?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
              >
                View All FAQs
              </button>
            </div>

            {/* FAQ MODULE */}
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

      {/* BASE & ENHANCED RICH TEXT STYLES */}
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

        .rich-text-area p { margin-bottom: 0.6rem; text-align: left !important; }
        .rich-text-area a { color: #f97316; text-decoration: underline; font-weight: 800; }
        
        /* Ensure Inline Text Colors & Background Highlights Render Explicitly */
        .rich-text-area span[style*="color"] {
          color: attr(style) !important;
        }
        .rich-text-area span[style*="background-color"] {
          background-color: attr(style) !important;
        }
        
        /* Inline Formatting Overrides */
        .rich-text-area strong, .rich-text-area b { font-weight: 800 !important; }
        .rich-text-area em, .rich-text-area i { font-style: italic !important; }
        .rich-text-area u { text-decoration: underline !important; }
        .rich-text-area s { text-decoration: line-through !important; }

        /* Headings Styling */
        .rich-text-area h1 { font-size: 1.5rem !important; font-weight: 900 !important; color: #0B1538 !important; margin-top: 1.5rem !important; margin-bottom: 0.75rem !important; display: block !important; }
        .rich-text-area h2 { font-size: 1.25rem !important; font-weight: 800 !important; color: #0B1538 !important; margin-top: 1.25rem !important; margin-bottom: 0.5rem !important; display: block !important; }
        .rich-text-area h3 { font-size: 1.1rem !important; font-weight: 700 !important; color: #0B1538 !important; margin-top: 1rem !important; margin-bottom: 0.5rem !important; display: block !important; }
        
        /* Lists */
        .rich-text-area ul { list-style-type: disc !important; padding-left: 1.25rem !important; margin: 0.5rem 0 !important; display: block !important; }
        .rich-text-area ol { list-style-type: decimal !important; padding-left: 1.25rem !important; margin: 0.5rem 0 !important; display: block !important; }
        .rich-text-area li { display: list-item !important; text-align: left !important; margin-bottom: 0.25rem; }

        /* Full Table Styling for Quill Content */
        .rich-text-area table {
          width: 100% !important;
          border-collapse: collapse !important;
          margin: 1.25rem 0 !important;
          background-color: #ffffff;
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid #cbd5e1 !important;
        }

        .rich-text-area th,
        .rich-text-area td {
          padding: 0.75rem 1rem !important;
          border: 1px solid #cbd5e1 !important;
          text-align: left;
          font-size: 0.875rem;
        }

        .rich-text-area th {
          background-color: #f1f5f9 !important;
          font-weight: 700 !important;
          color: #0b1538 !important;
        }

        .rich-text-area tr:nth-child(even) {
          background-color: #f8fafc;
        }

        /* Font Sizes Mapping */
        .rich-text-area .ql-size-10px { font-size: 10px !important; }
        .rich-text-area .ql-size-12px { font-size: 12px !important; }
        .rich-text-area .ql-size-14px { font-size: 14px !important; }
        .rich-text-area .ql-size-16px { font-size: 16px !important; }
        .rich-text-area .ql-size-18px { font-size: 18px !important; }
        .rich-text-area .ql-size-20px { font-size: 20px !important; }
        .rich-text-area .ql-size-24px { font-size: 24px !important; }
        .rich-text-area .ql-size-32px { font-size: 32px !important; }

        /* Font Families Mapping */
        .rich-text-area .ql-font-inter { font-family: 'Inter', sans-serif !important; }
        .rich-text-area .ql-font-poppins { font-family: 'Poppins', sans-serif !important; }
        .rich-text-area .ql-font-roboto { font-family: 'Roboto', sans-serif !important; }
        .rich-text-area .ql-font-open-sans { font-family: 'Open Sans', sans-serif !important; }
        .rich-text-area .ql-font-arial { font-family: Arial, sans-serif !important; }
        .rich-text-area .ql-font-arial-black { font-family: "Arial Black", Gadget, sans-serif !important; }
        .rich-text-area .ql-font-comic-sans { font-family: "Comic Sans MS", cursive, sans-serif !important; }
        .rich-text-area .ql-font-courier-new { font-family: "Courier New", Courier, monospace !important; }
        .rich-text-area .ql-font-georgia { font-family: Georgia, serif !important; }
        .rich-text-area .ql-font-impact { font-family: Impact, Charcoal, sans-serif !important; }
        .rich-text-area .ql-font-lucida-sans { font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif !important; }
        .rich-text-area .ql-font-tahoma { font-family: Tahoma, Geneva, sans-serif !important; }
        .rich-text-area .ql-font-times-new-roman { font-family: "Times New Roman", Times, serif !important; }
        .rich-text-area .ql-font-trebuchet { font-family: "Trebuchet MS", Helvetica, sans-serif !important; }
        .rich-text-area .ql-font-verdana { font-family: Verdana, Geneva, sans-serif !important; }

        .practical-inline-area, .practical-inline-area * {
          display: inline !important;
          white-space: normal !important;
          word-break: normal !important;
          text-align: left !important;
        }
      ` }} />
    </div>
  );
};

// --- ACCORDION TOGGLE COMPONENT FOR CLEAN SEPARATE FAQS CONTAINER ---
const FaqItem = ({ faq, cleanTextFormatting }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 pb-2.5 last:border-none last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left gap-2 py-1 text-slate-800 font-bold text-[12px] tracking-tight hover:text-orange-500 transition-colors group"
      >
        <span className="leading-tight">Q: {faq.question}</span>
        <ChevronDown 
          size={14} 
          className={`mt-0.5 text-slate-400 group-hover:text-orange-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      
      {/* Accordion Slide Mechanism */}
      <div 
        className={`grid transition-all duration-200 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-1.5" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div 
            className="text-slate-500 text-[11px] leading-relaxed pl-3 border-l-2 border-orange-500/30 py-0.5 rich-text-area"
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

export default WageCodeDetails;