import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase"; // Adjust path to step up to your root config location
import { collection, query, where, getDocs } from "firebase/firestore";
import { 
  ArrowLeft, 
  FileSpreadsheet, 
  Loader2, 
  ShieldAlert,
  Info
} from "lucide-react";

export default function StateComplianceTable() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const [complianceData, setComplianceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchTargetState = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        // 1. Direct indexed query targeted right at the exact URL string value
        const q = query(
          collection(db, "shop-state-compliance"),
          where("stateSlug", "==", slug.trim().toLowerCase())
        );
        
        const snap = await getDocs(q);
        
        if (!snap.empty) {
          // 2. Document exists, read the first match out
          setComplianceData({
            id: snap.docs[0].id,
            ...snap.docs[0].data()
          });
        } else {
          setComplianceData(null);
        }
      } catch (err) {
        console.error("Firestore targeted query read execution error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTargetState();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="animate-spin text-[#0B1538] mx-auto mb-4" size={40} />
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Fetching {slug} Data...
          </p>
        </div>
      </div>
    );
  }

  if (!complianceData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-6">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-[2.5rem] p-8 text-center shadow-sm">
          <ShieldAlert className="text-orange-500 mx-auto mb-4" size={48} />
          <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight">Data Grid Not Found</h3>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            No compliance matrix matching the target parameter <code className="bg-slate-100 p-1 rounded text-red-500 font-mono text-xs">"{slug}"</code> was found in your database.
          </p>
          <button 
            onClick={() => navigate(-1)}
            className="mt-6 px-6 py-2.5 bg-[#0B1538] text-white font-bold text-xs rounded-xl uppercase tracking-wider"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const filteredGrid = complianceData.complianceGrid?.filter((row) =>
    row.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.requirement.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20">
      
      {/* HEADER HERO BANNER */}
      <header className="bg-[#0B1538] text-white pt-8 pb-14 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors mb-4 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">Back to Portal</span>
          </button>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500 rounded-2xl shadow-lg shadow-orange-500/20 flex-shrink-0 text-white">
                <FileSpreadsheet size={28} />
              </div>
              <div>
                <span className="text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2.5 py-1 rounded-full font-bold uppercase tracking-widest">
                  {complianceData.stateName}
                </span>
                <h1 className="text-2xl lg:text-3xl font-black tracking-tight uppercase text-white mt-1.5">
                  {complianceData.actTitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* COMPLIANCE TABLE INTERFACE */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200/60 overflow-hidden">
          
          {/* UTILITY SEARCH BAR */}
          <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Info size={16} className="text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Showing {filteredGrid.length} Compliance Metric Rules
              </span>
            </div>
            
            <input 
              type="text"
              placeholder="Search parameters (e.g. Leave, Overtime)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-80 px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold outline-none focus:border-orange-500 bg-white"
            />
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest border-b border-slate-800">
                  <th className="py-4 px-6 w-16 text-center">#</th>
                  <th className="py-4 px-6 w-1/3">Compliance Item / Parameter</th>
                  <th className="py-4 px-6">Statutory Entitlement / Requirement Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredGrid.length > 0 ? (
                  filteredGrid.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="py-4 px-6 text-center text-xs font-bold text-slate-400 bg-slate-50/30">
                        {idx + 1}
                      </td>
                      <td className="py-4 px-6 text-sm font-extrabold text-[#0B1538] tracking-tight">
                        {row.item}
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-600 font-medium leading-relaxed">
                        {row.requirement}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-12 px-6 text-center text-slate-400 text-sm font-bold">
                      No parameters match your search criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
        </div>
      </main>

      {/* RENDER STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .rich-text-area { 
          display: block !important;
          white-space: normal !important;
          word-wrap: break-word !important; 
        }
      `}} />
    </div>
  );
}