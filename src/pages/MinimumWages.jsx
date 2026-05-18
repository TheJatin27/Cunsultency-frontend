import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { 
  MapPin, 
  IndianRupee, 
  Scale, 
  Download, 
  AlertCircle, 
  Loader2, 
  TrendingUp, 
  ShieldCheck,
  Search
} from "lucide-react";

const MinimumWages = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [wages, setWages] = useState([]);
  const [documentUrl, setDocumentUrl] = useState(""); // Holds the associated state gazette url reference

  // DATA FETCH PIPELINES REMAIN UNCHANGED
  useEffect(() => {
    const loadStates = async () => {
      const snap = await getDocs(collection(db, "minimumWages"));
      const uniqueStates = [
        ...new Set(snap.docs.map((d) => d.data().state)),
      ];
      setStates(uniqueStates);
    };
    loadStates();
  }, []);

  const loadWages = async (state) => {
    const q = query(
      collection(db, "minimumWages"),
      where("state", "==", state)
    );
    const snap = await getDocs(q);
    if (!snap.empty) {
      const dataDoc = snap.docs[0].data();
      setWages(dataDoc.wages || []);
      setDocumentUrl(dataDoc.documentUrl || ""); // Set official document link context state
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20 overflow-x-hidden">
      
      {/* HEADER SECTION - FULL WIDTH NAVY BANNER METRICS MATCHING OTHER PAGES */}
      <header className="bg-[#0B1538] text-white pt-6 pb-10 px-6 lg:px-12 relative">
        <div className="w-full">
          <div className="flex items-center gap-2 text-slate-400 mb-3">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Statutory Intelligence</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-orange-500 rounded-xl shadow-lg shadow-orange-500/20 flex-shrink-0">
                <Scale size={24} className="text-white" />
              </div>
              <h1 className="text-2xl lg:text-4xl font-black tracking-tight uppercase break-words leading-none">
                Statutory Minimum Wages
              </h1>
            </div>

            {selectedState && documentUrl && (
              <a
                href={documentUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-orange-500 text-white px-6 py-3.5 rounded-2xl font-black text-[11px] hover:bg-white hover:text-[#0B1538] transition-all shadow-xl shadow-orange-500/20 uppercase tracking-widest flex-shrink-0 border-2 border-transparent"
              >
                <Download size={18} /> Download Gazetted PDF
              </a>
            )}
          </div>

          <p className="text-slate-400 text-sm lg:text-base w-full max-w-4xl leading-relaxed opacity-80 border-l-2 border-white/10 pl-6">
            Access real-time statutory minimum layout metrics across all Indian regional jurisdictions. 
            Ensure your operational payroll engine remains bulletproof against compliance audits.
          </p>
        </div>
      </header>

      {/* JURISDICTION STATE CONTAINER SELECTOR FILTER */}
      <main className="w-full px-4 lg:px-8 -mt-4 relative z-20">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          
          {/* LEFT COLUMN FRAME SEGMENT */}
          <div className="col-span-12 xl:col-span-9 bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-10 space-y-8 min-w-0">
            
            <section className="w-full min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white border border-slate-100 shadow-sm text-slate-400">
                  <MapPin size={18} />
                </div>
                <h2 className="text-base lg:text-lg font-black uppercase tracking-tight text-slate-800">
                  Select Jurisdiction
                </h2>
              </div>
              
              <div className="flex flex-wrap gap-3 pl-0 lg:pl-12">
                {states.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setSelectedState(s);
                      loadWages(s);
                    }}
                    className={`px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all border ${
                      selectedState === s
                        ? "bg-[#0B1538] text-white border-[#0B1538] shadow-md scale-105"
                        : "bg-slate-50 text-slate-500 border-slate-100 hover:border-orange-500 hover:text-orange-600 shadow-sm"
                    }`}
                  >
                    {s}
                  </button>
                ))}
                {states.length === 0 && (
                  <div className="flex items-center gap-3 py-2 text-slate-400 text-xs italic">
                    <Loader2 className="animate-spin text-slate-300" size={14} />
                    Awaiting cloud server datasets...
                  </div>
                )}
              </div>
            </section>

            {/* LIVE DATA GRID TABLE SYSTEM */}
            <section className="w-full min-w-0">
              {wages.length > 0 ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.99 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-5 bg-slate-50 rounded-2xl border border-slate-100 scroll-mt-24 w-full min-w-0"
                >
                  <h3 className="text-base font-black text-[#0B1538] mb-4 uppercase tracking-tight flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    Live Scale Table: {selectedState}
                  </h3>

                  <div className="overflow-x-auto rounded-xl border border-slate-200/60 bg-white">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-wider border-b border-slate-200">
                          <th className="py-4 px-6">Labour Class</th>
                          <th className="py-4 px-4 text-right">Basic</th>
                          <th className="py-4 px-4 text-right">VDA</th>
                          <th className="py-4 px-4 text-right">Total Monthly</th>
                          <th className="py-4 px-6 text-right text-emerald-600">Daily Rate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {wages.map((w, i) => (
                          <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-4 px-6 font-black text-slate-800 tracking-tight">
                              {w.class}
                            </td>
                            <td className="py-4 px-4 text-right text-slate-500 font-bold">₹{w.basicPerMonth}</td>
                            <td className="py-4 px-4 text-right text-slate-500 font-bold">₹{w.vdaPerMonth}</td>
                            <td className="py-4 px-4 text-right text-slate-900 font-extrabold">₹{w.totalPerMonth}</td>
                            <td className="py-4 px-6 text-right">
                              <span className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-xl text-xs font-black inline-block">
                                ₹{w.totalPerDay}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ) : (
                <div className="h-72 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col items-center justify-center text-center p-8 bg-white">
                  <div className="w-14 h-14 bg-slate-50 border border-slate-100 shadow-sm rounded-2xl flex items-center justify-center text-slate-300 mb-3">
                    <Search size={24} />
                  </div>
                  <h3 className="text-base font-black text-slate-400 tracking-tight uppercase">Jurisdiction Unselected</h3>
                  <p className="text-slate-400 text-xs mt-1 max-w-xs leading-relaxed">
                    Select an active state element indicator listed above to map live compliance data fields directly.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* RIGHT COL SIDEBAR METRICS MODULE */}
          <aside className="col-span-12 xl:col-span-3 space-y-6">
            
            {/* COMPLIANCE ALERT CARD BOX */}
            <div className="bg-[#FFF9F2] border border-[#FFEAD1] p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
              <TrendingUp size={80} className="absolute -bottom-4 -right-4 opacity-5 text-orange-500 pointer-events-none" />
              <h3 className="text-[#0B1538] font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <AlertCircle size={18} className="text-orange-500" />
                Compliance Card
              </h3>
              <p className="text-slate-600 text-[12px] leading-relaxed font-medium">
                Minimum wage metric rules are systematically updated bi-annually around **April and October**. 
                Relying on legacy tables triggers structural statutory penalties.
              </p>
            </div>

            {/* SUMMARY VIEW CONTROLLER CARD */}
            <div className="bg-[#0B1538] p-6 rounded-[2.5rem] text-white shadow-xl space-y-5">
              <h3 className="text-orange-400 font-black text-xs uppercase tracking-widest pb-2 border-b border-white/10 flex items-center gap-2">
                <IndianRupee size={16} /> Summary Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-slate-400 uppercase font-black tracking-widest text-[9px] block mb-0.5">Active Region</span>
                  <span className="text-white font-black text-base tracking-tight uppercase">{selectedState || "Awaiting Selection"}</span>
                </div>
                
                <div>
                  <span className="text-slate-400 uppercase font-black tracking-widest text-[9px] block mb-0.5">VDA Lifecycle</span>
                  <span className="text-emerald-400 font-black text-base tracking-tight">Active Matrix</span>
                </div>

                {selectedState && documentUrl ? (
                  <div className="pt-2">
                    <a
                      href={documentUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full text-center block py-3 bg-white text-[#0B1538] hover:bg-orange-500 hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-md"
                    >
                      Download Gazetted PDF
                    </a>
                  </div>
                ) : (
                  <div className="pt-2">
                    <button
                      disabled
                      className="w-full text-center block py-3 bg-white/5 text-white/30 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest cursor-not-allowed"
                    >
                      PDF Link Unavailable
                    </button>
                  </div>
                )}
              </div>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
};

export default MinimumWages;