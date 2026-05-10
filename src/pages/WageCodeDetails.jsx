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
  ChevronRight
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const WageCodeDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      
      {/* HEADER SECTION - FULL WIDTH */}
      <header className="bg-[#0B1538] text-white pt-20 pb-24 px-6 lg:px-12 relative">
        <div className="w-full">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to E-Library</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
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
            dangerouslySetInnerHTML={{ __html: data.shortDescription }}
          />
        </div>
      </header>

      {/* MAIN CONTENT - REMOVED MAX-W TO COVER FULL PAGE */}
      <main className="w-full px-4 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          
          {/* LEFT CONTENT COLUMN (75% Width on Desktop) */}
          <div className="col-span-12 xl:col-span-9 bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-14 space-y-14">
            
            {/* 01. OVERVIEW */}
            <section id="overview">
              <SectionHeader icon={<BookOpen className="text-blue-600" />} title="01. Overview" />
              <div 
                className="text-slate-600 leading-relaxed lg:pl-12 text-[14px] lg:text-[15px] rich-text-area"
                dangerouslySetInnerHTML={{ __html: data.overview }}
              />
            </section>

            {/* DETAILED ACTS BREAKDOWN */}
            {data.includedActs && data.includedActs.length > 0 && (
              <section id="detailed-breakdown" className="space-y-10">
                <SectionHeader icon={<Gavel className="text-orange-600" />} title="Acts & Codes Breakdown" />
                <div className="lg:pl-12 space-y-8">
                  {data.includedActs.map((act, index) => (
                    <div 
                      key={index} 
                      id={`act-${index}`} 
                      className="p-6 bg-slate-50 rounded-3xl border border-slate-100 scroll-mt-24"
                    >
                      <h3 className="text-lg font-black text-[#0B1538] mb-4 uppercase tracking-tight">
                        {act.actTitle}
                      </h3>
                      <div 
                        className="rich-text-area text-sm text-slate-600 leading-relaxed" 
                        dangerouslySetInnerHTML={{ __html: act.actContent }} 
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* BARE ACT NOTE */}
            <section className="bg-blue-50/50 p-6 lg:p-10 rounded-[2rem] border border-blue-100">
              <SectionHeader icon={<FileText className="text-orange-600" />} title="02. Official Bare Act Note" />
              <div className="lg:pl-12 text-slate-600 text-sm rich-text-area" dangerouslySetInnerHTML={{ __html: data.bareActDescription }} />
            </section>

            {/* AMENDMENTS + RULES */}
            <div className="grid lg:grid-cols-2 gap-12 pt-4">
              <section className="border-l-4 border-purple-100 pl-6 lg:pl-10">
                <SectionHeader icon={<Gavel className="text-purple-600" />} title="03. Amendments" />
                <div className="text-slate-600 text-[13px] rich-text-area" dangerouslySetInnerHTML={{ __html: data.amendments }} />
              </section>
              <section className="border-l-4 border-emerald-100 pl-6 lg:pl-10">
                <SectionHeader icon={<ClipboardCheck className="text-emerald-600" />} title="04. Statutory Rules" />
                <div className="text-slate-600 text-[13px] rich-text-area" dangerouslySetInnerHTML={{ __html: data.rules }} />
              </section>
            </div>

            {/* PRACTICAL NOTES */}
            <section>
              <SectionHeader icon={<AlertCircle className="text-amber-600" />} title="05. Practical Implementation" />
              <div className="lg:pl-12 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {data.practicalNotes?.map((note, i) => (
                  <div key={i} className="flex gap-3 p-5 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-md transition-all group">
                    <ChevronRight size={14} className="text-blue-500 mt-1 flex-shrink-0" />
                    <div className="rich-text-area text-[12px] font-bold text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: note }} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR COLUMN (25% Width on Desktop) */}
          <aside className="col-span-12 xl:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#FFF9F2] border border-[#FFEAD1] p-8 rounded-[2.5rem] shadow-sm">
                <h3 className="text-[#0B1538] font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                  <Scale size={18} className="text-orange-500" />
                  Acts Covered
                </h3>
                
                <ul className="space-y-4">
                  {data.includedActs?.map((act, i) => (
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

              {/* QUICK FAQ PREVIEW IN SIDEBAR */}
              <div className="bg-[#0B1538] p-8 rounded-[2.5rem] text-white shadow-xl">
                 <h3 className="text-orange-400 font-black text-xs uppercase tracking-widest mb-4">Need Help?</h3>
                 <p className="text-[11px] text-slate-300 leading-relaxed mb-6 font-medium">Scroll down to the bottom for detailed FAQs regarding {data.title}.</p>
                 <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                    View All FAQs
                 </button>
              </div>
            </div>
          </aside>
        </div>

        {/* FULL WIDTH FAQ (Outside the grid to span full page) */}
        <section className="mt-10 bg-[#0B1538] p-8 lg:p-20 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <SectionHeader icon={<HelpCircle className="text-orange-400" />} title="07. Expert FAQs" light />
          <div className="lg:pl-12 grid md:grid-cols-2 gap-x-20 gap-y-10 relative z-10">
            {data.faqs?.map((faq, i) => (
              <div key={i} className="group border-b border-white/10 pb-6">
                <p className="text-orange-400 font-black text-[13px] mb-2 tracking-wide uppercase">Q: {faq.question}</p>
                <div className="text-slate-400 text-[12px] lg:text-[13px] leading-relaxed rich-text-area" dangerouslySetInnerHTML={{ __html: `A: ${faq.answer}` }} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .rich-text-area { word-wrap: break-word; overflow-wrap: break-word; word-break: normal; max-width: 100%; }
        .rich-text-area p { margin-bottom: 0.5rem; }
        .rich-text-area a { color: #f97316; text-decoration: underline; font-weight: 800; }
        .rich-text-area ul { list-style: disc; padding-left: 1.25rem; margin: 0.5rem 0; }
        .rich-text-area strong { color: #1e293b; font-weight: 700; }
      `}} />
    </div>
  );
};

const SectionHeader = ({ icon, title, light }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className={`p-2 rounded-lg ${light ? "bg-white/10" : "bg-white border border-slate-100 shadow-sm"}`}>
      {React.cloneElement(icon, { size: 18, strokeWidth: 2.5 })}
    </div>
    <h2 className={`text-lg lg:text-xl font-black uppercase tracking-tight ${light ? "text-white" : "text-slate-800"}`}>{title}</h2>
  </div>
);

export default WageCodeDetails;