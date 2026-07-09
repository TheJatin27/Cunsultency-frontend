import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { 
  Search, 
  Calendar, 
  Layers, 
  X, 
  Download, 
  Loader2, 
  CheckCircle2, 
  RefreshCw, 
  SlidersHorizontal,
  ChevronRight,
  FileText
} from "lucide-react";

// Helper component to render the custom state abbreviations
const StateIcon = ({ stateName }) => {
  const normalized = String(stateName).toLowerCase();
  if (normalized.includes("delhi")) return <span className="text-blue-500 font-bold bg-blue-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-blue-100">DL</span>;
  if (normalized.includes("haryana")) return <span className="text-emerald-500 font-bold bg-emerald-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-emerald-100">HR</span>;
  if (normalized.includes("kerala")) return <span className="text-purple-500 font-bold bg-purple-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-purple-100">KL</span>;
  if (normalized.includes("karnataka")) return <span className="text-orange-500 font-bold bg-orange-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-orange-100">KA</span>;
  if (normalized.includes("maharashtra")) return <span className="text-teal-500 font-bold bg-teal-50 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-teal-100">MH</span>;
  return <span className="text-slate-500 font-bold bg-slate-100 w-6 h-6 rounded-md flex items-center justify-center text-[11px] border border-slate-200">IN</span>;
};

const MinimumWages = () => {
  const [wageDocs, setWageDocs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All States");
  const [activeModalDoc, setActiveModalDoc] = useState(null);

  // In-Modal Search and Filter states
  const [modalSearch, setModalSearch] = useState("");
  const [modalDropdownFilters, setModalDropdownFilters] = useState({});

  useEffect(() => {
    const fetchAllWages = async () => {
      try {
        const snap = await getDocs(collection(db, "minimumWages"));
        const documents = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setWageDocs(documents);
      } catch (err) {
        console.error("Error fetching state wage metrics:", err);
      }
    };
    fetchAllWages();
  }, []);

  const filteredDocs = wageDocs.filter(doc => {
    const matchesSearch = doc.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All States" || doc.state === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const stateDropdownOptions = ["All States", ...new Set(wageDocs.map(d => d.state))];

  // Cleans broken sheet encoding strings safely without parser crashes
  // Cleans broken sheet encoding strings safely without squishing words together
  const cleanHeaderString = (str) => {
    if (!str) return "";
    return String(str)
      .replace(/Â/g, "")
      .replace(/¹/g, "")
      .replace(/\s+/g, " ") // Replaces multiple spaces/tabs with a single clean space
      .replace(/([A-Z])\(/g, "$1 (") // Adds a clean space before parentheses if missing (e.g., SALARY(₹) -> SALARY (₹))
      .trim();
  };

  const inferClassification = (headers = []) => {
    const joined = headers.join(" ").toLowerCase();
    if (joined.includes("district")) return "District-wise";
    if (joined.includes("zone")) return "Zone-wise";
    if (joined.includes("area")) return "Area + Skill";
    return "Skill-wise";
  };

  // DETECT FILTERABLE COLUMNS (Limit output directly to a maximum of 3 filters)
  const getFilterableColumns = () => {
    if (!activeModalDoc || !activeModalDoc.headers) return [];
    return activeModalDoc.headers
      .filter(header => {
        const lower = header.toLowerCase();
        return lower.includes("category") || lower.includes("class") || lower.includes("district") || lower.includes("zone") || lower.includes("designation");
      })
      .slice(0, 3); // Restricts view to only 2-3 dropdown filters maximum
  };

  // Get unique cell options for a detected filterable column header
  const getUniqueOptionsForHeader = (headerName) => {
    if (!activeModalDoc || !activeModalDoc.wages) return [];
    const values = activeModalDoc.wages
      .map(row => row[headerName])
      .filter(val => val !== undefined && val !== null && val !== "");
    return [...new Set(values)];
  };

  // APPLY SEARCH & DROPDOWN FILTERS INSIDE MODAL
  const getFilteredWagesInModal = () => {
    if (!activeModalDoc || !activeModalDoc.wages) return [];
    
    return activeModalDoc.wages.filter(row => {
      // 1. Dropdown Filters Matching
      const matchesDropdowns = Object.entries(modalDropdownFilters).every(([headerKey, filterValue]) => {
        if (!filterValue || filterValue.startsWith("All ")) return true;
        return String(row[headerKey]).toLowerCase() === String(filterValue).toLowerCase();
      });

      // 2. Text Search Input Matching
      const matchesSearch = Object.values(row).some(cellValue => 
        String(cellValue).toLowerCase().includes(modalSearch.toLowerCase())
      );

      return matchesDropdowns && matchesSearch;
    });
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] text-slate-800 font-sans antialiased">
      
      {/* 1️⃣ PORTAL HEADER INFO HEADER MODULE */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-black text-[#0B1538] tracking-tight uppercase">
            MINIMUM WAGES PORTAL
          </h1>
          <p className="text-slate-500 font-medium text-sm lg:text-base mt-1">
            Latest State-wise Minimum Wage Notifications
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><CheckCircle2 size={20} /></div>
            <div>
              <h4 className="text-xs font-black text-[#0B1538] uppercase">100% Authentic</h4>
              <p className="text-xs text-slate-400 font-medium">Government Notifications</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><RefreshCw size={20} /></div>
            <div>
              <h4 className="text-xs font-black text-[#0B1538] uppercase">Regularly Updated</h4>
              <p className="text-xs text-slate-400 font-medium">As per Latest Revision</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl"><SlidersHorizontal size={20} /></div>
            <div>
              <h4 className="text-xs font-black text-[#0B1538] uppercase">Easy to Understand</h4>
              <p className="text-xs text-slate-400 font-medium">State-wise Classification</p>
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><Download size={20} /></div>
            <div>
              <h4 className="text-xs font-black text-[#0B1538] uppercase">Download</h4>
              <p className="text-xs text-slate-400 font-medium">Official Notifications</p>
            </div>
          </div>
        </div>

        {/* 2️⃣ OUTER PAGE SEARCH AND REGION PICKER CONTROLS */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center mb-5 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-3.5 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search State..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 outline-none text-sm font-medium focus:border-blue-500 transition-colors"
            />
          </div>
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full sm:w-48 bg-[#0B1538] text-white px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider outline-none cursor-pointer"
          >
            {stateDropdownOptions.map((opt, i) => (
              <option key={i} value={opt} className="bg-white text-slate-800 font-sans">{opt}</option>
            ))}
          </select>
        </div>

        {/* 3️⃣ PORTAL MAIN JURISDICTIONS TABLE LISTING */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1538] text-white text-[11px] font-black uppercase tracking-widest">
                  <th className="py-4 px-6">State</th>
                  <th className="py-4 px-6">Latest Revision</th>
                  <th className="py-4 px-6">Structure / Classification</th>
                  <th className="py-4 px-6 text-right">View Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800 uppercase tracking-wide text-xs flex items-center gap-3">
                        <StateIcon stateName={doc.state} />
                        {doc.state}
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-500 text-xs">{doc.period || "N/A"}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full font-bold text-[11px] tracking-wide">
                          {inferClassification(doc.headers)}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => {
                            setActiveModalDoc(doc);
                            setModalSearch("");
                            setModalDropdownFilters({});
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 text-[#0B1538] hover:bg-[#0B1538] hover:text-white transition-all text-xs font-bold rounded-xl shadow-sm"
                        >
                          View Details <ChevronRight size={14} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-20 text-center text-slate-400 font-medium italic">
                      {wageDocs.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-2">
                          <Loader2 className="animate-spin text-blue-600" size={24} />
                          <span>Fetching official metrics repository...</span>
                        </div>
                      ) : (
                        "No match found for requested criteria."
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4️⃣ FULL-SCREEN OVERLAPPING MODAL WITH ADAPTIVE FILTER SELECTIONS */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-[9999] w-screen h-screen bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0 -z-10" onClick={() => setActiveModalDoc(null)} />

          <div className="bg-white rounded-[1.5rem] w-full max-w-6xl shadow-2xl flex flex-col max-h-[90vh] border border-slate-100 overflow-hidden">
            
            {/* Modal Title Banner */}
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
              <h2 className="text-lg font-black text-[#0B1538] tracking-tight uppercase">
                Minimum Wage Details - {activeModalDoc.state}
              </h2>
              <button 
                onClick={() => setActiveModalDoc(null)}
                className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Static Summary Information Row */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">State</span>
                <span className="text-xs font-bold text-[#0B1538] uppercase">{activeModalDoc.state}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Latest Revision</span>
                <span className="text-xs font-bold text-slate-600">{activeModalDoc.period || "N/A"}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Structure</span>
                <span className="text-xs font-bold text-slate-600">{inferClassification(activeModalDoc.headers)}</span>
              </div>
              <div className="bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block">Applicable From</span>
                <span className="text-xs font-bold text-emerald-600">{activeModalDoc.period || "Current Cycle"}</span>
              </div>
            </div>

            {/* DYNAMIC FILTERS TOOLBAR ROW AND LOCAL SEARCH INPUT */}
            <div className="px-6 py-4 bg-white border-b border-slate-100 space-y-4">
              
              {/* Search Inside the Current Modal */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
                <input
                  type="text"
                  placeholder={`Search table rows in ${String(activeModalDoc.state).toLowerCase()}...`}
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-lg border border-slate-200 outline-none font-medium focus:border-blue-500"
                />
              </div>

              {/* Dynamic Dropdown Controls Generator based on extracted Columns */}
              {getFilterableColumns().length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {getFilterableColumns().map((headerName, idx) => (
                    <div key={idx}>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                        {cleanHeaderString(headerName)}
                      </label>
                      <select 
                        value={modalDropdownFilters[headerName] || `All ${cleanHeaderString(headerName)}s`}
                        onChange={(e) => setModalDropdownFilters({
                          ...modalDropdownFilters,
                          [headerName]: e.target.value
                        })}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2 font-medium text-slate-700 outline-none"
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

            {/* Dynamic Grid Table Data Representation Area */}
            <div className="p-6 overflow-y-auto flex-1 bg-white space-y-4">
              
              {/* Compliance Notes Alert Block Element */}
              {activeModalDoc.notes && activeModalDoc.notes.trim() !== "" && (
                <div className="bg-[#FFFDF4] border border-[#FFEFA6] rounded-xl p-4 flex gap-3 shadow-sm">
                  <div className="text-amber-600 mt-0.5 flex-shrink-0">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-amber-900 tracking-wide">
                      Compliance Notes & Remarks:
                    </h4>
                    <p className="text-xs text-amber-800 font-medium mt-1 leading-relaxed whitespace-pre-line">
                      {activeModalDoc.notes}
                    </p>
                  </div>
                </div>
              )}

              {/* Table Shell */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 max-h-[38vh]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="sticky top-0 z-10 bg-slate-100 text-slate-600 font-black uppercase border-b border-slate-200">
                    <tr>
                      {activeModalDoc.headers.map((heading, i) => (
                        <th key={i} className="py-2.5 px-4 font-bold whitespace-nowrap bg-slate-100">
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
                                className={`py-3 px-4 ${
                                  colIndex === 0 
                                    ? "font-bold text-slate-800 bg-slate-50/40" 
                                    : typeof val === "number" 
                                      ? "font-semibold text-slate-700" 
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
                        <td colSpan={activeModalDoc.headers.length} className="text-center py-10 text-slate-400 italic">
                          No matching records located inside current structural criteria layout views.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Bottom Fixed Control Panel */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div>
                {activeModalDoc.documentUrl ? (
                  <button
                    onClick={() => window.open(activeModalDoc.documentUrl, "_blank", "noopener,noreferrer")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 font-bold text-xs rounded-xl transition-all bg-white shadow-sm"
                  >
                    <Download size={14} /> Download Notification
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 italic font-medium">Official notification link unconfigured</span>
                )}
              </div>
              <button
                onClick={() => setActiveModalDoc(null)}
                className="px-6 py-2.5 bg-[#0B1538] text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors shadow-md"
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

export default MinimumWages;