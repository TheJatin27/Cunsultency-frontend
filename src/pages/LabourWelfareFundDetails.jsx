import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { 
  Search, 
  Calendar, 
  X, 
  Download, 
  Loader2, 
  CheckCircle2, 
  ChevronRight,
  StickyNote,
  FileText,
  Users,
  ShieldAlert
} from "lucide-react";

// Helper component to render specific state abbreviations matching the dashboard design
const StateIcon = ({ stateName }) => {
  const normalized = String(stateName).toLowerCase();
  if (normalized.includes("andhra")) return <span className="text-[#0369a1] font-bold bg-[#f0f9ff] w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-[#e0f2fe]">AP</span>;
  if (normalized.includes("delhi")) return <span className="text-blue-500 font-bold bg-blue-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-blue-100">DL</span>;
  if (normalized.includes("haryana")) return <span className="text-emerald-500 font-bold bg-emerald-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-emerald-100">HR</span>;
  if (normalized.includes("kerala")) return <span className="text-purple-500 font-bold bg-purple-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-purple-100">KL</span>;
  if (normalized.includes("karnataka")) return <span className="text-orange-500 font-bold bg-orange-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-orange-100">KA</span>;
  if (normalized.includes("maharashtra")) return <span className="text-teal-500 font-bold bg-teal-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-teal-100">MH</span>;
  if (normalized.includes("gujarat")) return <span className="text-red-500 font-bold bg-red-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-red-100">GJ</span>;
  if (normalized.includes("punjab")) return <span className="text-indigo-500 font-bold bg-indigo-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-indigo-100">PB</span>;
  if (normalized.includes("tamil nadu")) return <span className="text-pink-500 font-bold bg-pink-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-pink-100">TN</span>;
  if (normalized.includes("telangana")) return <span className="text-cyan-500 font-bold bg-cyan-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-cyan-100">TG</span>;
  return <span className="text-slate-500 font-bold bg-slate-100 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-slate-200">IN</span>;
};

const LabourWelfareFunds = () => {
  const [lwfDocs, setLwfDocs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All States");
  const [activeModalDoc, setActiveModalDoc] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  // Inside Modal Filters
  const [modalSearch, setModalSearch] = useState("");
  const [modalDropdownFilters, setModalDropdownFilters] = useState({});

  useEffect(() => {
    const fetchAllLWF = async () => {
      try {
        setLoading(true);
        const snap = await getDocs(collection(db, "labourWelfareFunds"));
        const documents = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLwfDocs(documents);
      } catch (err) {
        console.error("Error fetching state LWF metrics:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllLWF();
  }, []);

  // Compute live overview analytic dynamic counters directly based on your Firestore DB response length
  const applicableCount = lwfDocs.filter(d => d.status === "Applicable").length;
  const notApplicableCount = lwfDocs.filter(d => d.status === "Not Applicable").length;
  const totalCoverageCount = lwfDocs.length;

  const filteredDocs = lwfDocs.filter(doc => {
    const matchesSearch = doc.state?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All States" || doc.state === selectedRegion;
    const matchesStatus = statusFilter === "All" || doc.status === statusFilter;
    return matchesSearch && matchesRegion && matchesStatus;
  });

  const stateDropdownOptions = ["All States", ...new Set(lwfDocs.map(d => d.state))];

  const cleanHeaderString = (str) => {
    if (!str) return "";
    return String(str).replace(/Â/g, "").replace(/¹/g, "").trim();
  };

  const getFilterableColumns = () => {
    if (!activeModalDoc || !activeModalDoc.headers) return [];
    return activeModalDoc.headers.filter(header => {
      const lower = header.toLowerCase();
      return lower.includes("class") || lower.includes("category") || lower.includes("contribution") || lower.includes("gender");
    });
  };

  const getUniqueOptionsForHeader = (headerName) => {
    if (!activeModalDoc || !activeModalDoc.wages) return [];
    const values = activeModalDoc.wages
      .map(row => row[headerName])
      .filter(val => val !== undefined && val !== null && val !== "");
    return [...new Set(values)];
  };

  const getFilteredWagesInModal = () => {
    if (!activeModalDoc || !activeModalDoc.wages) return [];
    
    return activeModalDoc.wages.filter(row => {
      const matchesDropdowns = Object.entries(modalDropdownFilters).every(([headerKey, filterValue]) => {
        if (!filterValue || filterValue.startsWith("All ")) return true;
        return String(row[headerKey]).toLowerCase() === String(filterValue).toLowerCase();
      });

      const matchesSearch = Object.values(row).some(cellValue => 
        String(cellValue).toLowerCase().includes(modalSearch.toLowerCase())
      );

      return matchesDropdowns && matchesSearch;
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] text-slate-800 font-sans antialiased">
      
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-6">
        
        {/* Main Title Banner Module */}
        <div className="text-center mb-5">
          <h1 className="text-3xl font-black text-[#0B1538] tracking-tight uppercase mb-1">
            LABOUR WELFARE FUND (LWF)
          </h1>
          <p className="text-xs font-semibold text-slate-500 tracking-wide">
            State-wise Labour Welfare Fund Contribution, Due Dates & Return Filing Information
          </p>
        </div>

        {/* Info Explainer Grid Module */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 grid grid-cols-1 md:grid-cols-3 gap-5 mb-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-blue-600">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-blue-600 mb-0.5">What is LWF?</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                Labour Welfare Fund is a state-specific statutory contribution collected from employers and employees for the welfare of workers and their families.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-t md:border-t-0 md:border-x border-slate-100 pt-3 md:pt-0 md:px-5">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 text-emerald-600">
              <Users size={20} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-emerald-600 mb-0.5">Variations</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                The total contribution amounts, structured deadline rules, and statutory compliance schedules vary completely from state to state.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 border-t md:border-t-0 pt-3 md:pt-0">
            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 text-purple-600">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-purple-600 mb-0.5">Coverage Blueprints</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                Applies systematically across all listed Indian territories to non-managerial labor forces and corporate operations.
              </p>
            </div>
          </div>
        </div>

        {/* Quantifiable State Metric Overview Cards — Now 100% Dynamic */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4 shadow-sm text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:pl-2">
            <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">Applicable States</span>
              <span className="text-xl font-black text-emerald-600">
                {loading ? "..." : `${applicableCount} States`}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 border-y sm:border-y-0 sm:border-x border-slate-100 py-3 sm:py-0 sm:px-6">
            <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0">
              <X size={18} />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">Non-Applicable States</span>
              <span className="text-xl font-black text-slate-700">
                {loading ? "..." : `${notApplicableCount} States`}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 border-r border-slate-100 pr-4">
            <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
              <Calendar size={18} />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">Last Updated</span>
              <span className="text-sm font-black text-blue-600">July 2026</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 pl-2">
            <div className="w-9 h-9 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 flex-shrink-0">
              <FileText size={18} />
            </div>
            <div>
              <span className="text-[11px] font-semibold text-slate-400 block">Total Monitored</span>
              <span className="text-sm font-black text-purple-600">
                {loading ? "..." : `${totalCoverageCount} Regions`}
              </span>
            </div>
          </div>
        </div>

        {/* Global Toolbar Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="text-xs font-black text-[#0B1538] uppercase tracking-wider whitespace-nowrap self-center">
            State-wise LWF Ledger Index
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center flex-1 justify-end">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
              <input
                type="text"
                placeholder="Search State / UT..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-1.5 bg-slate-50 rounded-xl border border-slate-200 outline-none text-xs font-medium focus:border-blue-500 transition-colors"
              />
            </div>
            
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold outline-none cursor-pointer min-w-[140px]"
            >
              {stateDropdownOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>

            <div className="flex items-center gap-3 px-2 border-l border-slate-100 sm:h-6 self-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status Filter</span>
              <div className="flex items-center gap-2.5">
                <button 
                  onClick={() => setStatusFilter("All")}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${statusFilter === "All" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setStatusFilter("Applicable")}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${statusFilter === "Applicable" ? "bg-green-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Applicable
                </button>
                <button 
                  onClick={() => setStatusFilter("Not Applicable")}
                  className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${statusFilter === "Not Applicable" ? "bg-slate-700 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400" /> Not Applicable
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* LWF Main Table Records Display */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1538] text-white text-[11px] font-black uppercase tracking-widest">
                  <th className="py-3 px-6">State / UT</th>
                  <th className="py-3 px-6">Status</th>
                  <th className="py-3 px-6">Contribution Type</th>
                  <th className="py-3 px-6">Frequency</th>
                  <th className="py-3 px-6">Last Updated</th>
                  <th className="py-3 px-6 text-right">View Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-6 font-bold text-slate-800 uppercase tracking-wide text-xs flex items-center gap-3">
                        <StateIcon stateName={doc.state} />
                        {doc.state}
                      </td>
                      <td className="py-3 px-6">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold text-[11px] uppercase tracking-wide ${
                          doc.status === "Applicable" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-600"
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${doc.status === "Applicable" ? "bg-green-500" : "bg-gray-400"}`} />
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-3 px-6 font-semibold text-xs text-slate-600">
                        {doc.status === "Applicable" ? (doc.contributionType || "Employer + Employee") : "—"}
                      </td>
                      <td className="py-3 px-6 font-semibold text-slate-500 text-xs">
                        {doc.status === "Applicable" ? (doc.frequency || "Monthly") : "—"}
                      </td>
                      <td className="py-3 px-6 font-semibold text-slate-400 font-mono text-xs">{doc.period || "Jul 2026"}</td>
                      <td className="py-3 px-6 text-right">
                        <button
                          onClick={() => {
                            setActiveModalDoc(doc);
                            setModalSearch("");
                            setModalDropdownFilters({});
                          }}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-slate-200 text-[#0B1538] hover:bg-[#0B1538] hover:text-white transition-all text-xs font-bold rounded-xl shadow-sm"
                        >
                          View Details <ChevronRight size={13} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-16 text-center text-slate-400 font-medium italic">
                      {loading ? (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Loader2 className="animate-spin text-blue-600" size={22} />
                          <span>Syncing statutory welfare fund index registries...</span>
                        </div>
                      ) : (
                        "No dynamic match found for requested filter configurations."
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pop-up Rules Calculation Matrix Modal */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-[9999] w-screen h-screen bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0 -z-10" onClick={() => setActiveModalDoc(null)} />

          <div className="bg-white rounded-[1.5rem] w-full max-w-6xl shadow-2xl flex flex-col max-h-[90vh] border border-slate-100 overflow-hidden">
            
            {/* Modal Navigation Banner */}
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
              <h2 className="text-base font-black text-[#0B1538] tracking-tight uppercase">
                Labour Welfare Fund Rules Setup - {activeModalDoc.state}
              </h2>
              <button 
                onClick={() => setActiveModalDoc(null)}
                className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Micro Details Metrics */}
            <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Jurisdiction Zone</span>
                <span className="text-xs font-bold text-[#0B1538] uppercase">{activeModalDoc.state}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Timeline Frequency</span>
                <span className="text-xs font-bold text-slate-600">{activeModalDoc.frequency || "Half-Yearly"}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Contribution Matrix</span>
                <span className="text-xs font-bold text-blue-600">{activeModalDoc.contributionType || "Employer + Employee"}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Filing Revision Timeline</span>
                <span className="text-xs font-bold text-emerald-600">{activeModalDoc.period || "Jul 2026"}</span>
              </div>
            </div>

            {/* Filters Sub-Toolbar */}
            <div className="px-5 py-3 bg-white border-b border-slate-100 space-y-3">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-2 text-slate-400" size={13} />
                <input
                  type="text"
                  placeholder={`Search dynamic criteria inside ${activeModalDoc.state}...`}
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  className="w-full pl-8 pr-4 py-1.5 text-xs bg-slate-50 rounded-lg border border-slate-200 outline-none font-medium focus:border-blue-500"
                />
              </div>

              {getFilterableColumns().length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {getFilterableColumns().map((headerName, idx) => (
                    <div key={idx}>
                      <label className="block text-[9px] font-bold text-slate-400 uppercase mb-0.5">
                        {cleanHeaderString(headerName)}
                      </label>
                      <select 
                        value={modalDropdownFilters[headerName] || `All ${cleanHeaderString(headerName)}s`}
                        onChange={(e) => setModalDropdownFilters({
                          ...modalDropdownFilters,
                          [headerName]: e.target.value
                        })}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-1.5 font-medium text-slate-700 outline-none"
                      >
                        <option value={`All ${cleanHeaderString(headerName)}s`}>
                          All {cleanHeaderString(headerName)}s
                        </option>
                        {getUniqueOptionsForHeader(headerName).map((opt, oIdx) => (
                          <option key={oIdx} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Main Table Slabs Render Block */}
            <div className="p-5 overflow-y-auto flex-1 bg-white">
              
              {activeModalDoc.notes && activeModalDoc.notes.trim() !== "" && (
                <div className="mb-3 bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-xs flex gap-2.5 text-amber-900">
                  <StickyNote size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block mb-0.5">LWF Exemptions & Compliance Directives:</span>
                    <p className="leading-relaxed whitespace-pre-line text-slate-600">{activeModalDoc.notes}</p>
                  </div>
                </div>
              )}

              {activeModalDoc.headers && activeModalDoc.headers.length > 0 ? (
                <div className="overflow-x-auto rounded-xl border border-slate-200 max-h-[38vh]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="sticky top-0 z-10 bg-slate-100 text-slate-600 font-black uppercase border-b border-slate-200">
                      <tr>
                        {activeModalDoc.headers.map((heading, i) => (
                          <th key={i} className="py-2 px-3 font-bold whitespace-nowrap bg-slate-100">
                            {cleanHeaderString(heading)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {getFilteredWagesInModal().length > 0 ? (
                        getFilteredWagesInModal().map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-slate-50/80 transition-colors">
                            {activeModalDoc.headers.map((heading, colIndex) => {
                              const val = row[heading];
                              return (
                                <td 
                                  key={colIndex} 
                                  className={`py-2 px-3 ${
                                    colIndex === 0 
                                      ? "font-bold text-slate-800 bg-slate-50/40" 
                                      : typeof val === "number" 
                                        ? "font-semibold text-slate-700 font-mono" 
                                        : "text-slate-500 font-medium"
                                  }`}
                                >
                                  {typeof val === "number" ? `₹${val.toLocaleString("en-IN")}` : (val || "—")}
                                </td>
                              );
                            })}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={activeModalDoc.headers.length} className="text-center py-8 text-slate-400 italic">
                            No active matching rows found in this specific LWF structural criteria view.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-10 text-gray-400 bg-gray-50/50 border border-dashed rounded-lg text-sm">
                  No execution metric layers configured for this region item.
                </div>
              )}
            </div>

            {/* Bottom Panel Controls */}
            <div className="p-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div>
                {activeModalDoc.documentUrl ? (
                  <button
                    onClick={() => window.open(activeModalDoc.documentUrl, "_blank", "noopener,noreferrer")}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 font-bold text-xs rounded-xl transition-all bg-white shadow-sm"
                  >
                    <Download size={13} /> View Official Notification Gazette
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 italic font-medium">Official gazette link unconfigured</span>
                )}
              </div>
              <button
                onClick={() => setActiveModalDoc(null)}
                className="px-5 py-2 bg-[#0B1538] text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors shadow-md"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default LabourWelfareFunds;