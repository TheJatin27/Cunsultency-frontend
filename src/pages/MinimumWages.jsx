import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { 
  Search, 
  Download, 
  Loader2, 
  CheckCircle2, 
  RefreshCw, 
  SlidersHorizontal,
  ChevronRight,
  FileText,
  Building2,
  X,
  Calendar
} from "lucide-react";

// Helper component to render custom state abbreviations
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
  
  // State Modal Controls
  const [activeModalDoc, setActiveModalDoc] = useState(null);
  const [modalSearch, setModalSearch] = useState("");
  const [modalDropdownFilters, setModalDropdownFilters] = useState({});

  // District Modal Controls
  const [activeDistrictDoc, setActiveDistrictDoc] = useState(null);
  const [selectedDistrictIdx, setSelectedDistrictIdx] = useState(0);
  const [districtSearch, setDistrictSearch] = useState("");

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

  // Cleans broken encoding strings safely
  const cleanHeaderString = (str) => {
    if (!str) return "";
    return String(str)
      .replace(/Â/g, "")
      .replace(/¹/g, "")
      .replace(/\s+/g, " ")
      .replace(/([A-Z])\(/g, "$1 (")
      .trim();
  };

  const inferClassification = (headers = []) => {
    if (!headers || headers.length === 0) return "District / CPI Based";
    const joined = headers.join(" ").toLowerCase();
    if (joined.includes("district")) return "District-wise";
    if (joined.includes("zone")) return "Zone-wise";
    if (joined.includes("area")) return "Area + Skill";
    return "Skill-wise";
  };

  // Detect Filterable Columns for Modal
  const getFilterableColumns = () => {
    if (!activeModalDoc || !activeModalDoc.headers) return [];
    return activeModalDoc.headers
      .filter(header => {
        const lower = header.toLowerCase();
        return lower.includes("category") || lower.includes("class") || lower.includes("district") || lower.includes("zone") || lower.includes("designation");
      })
      .slice(0, 3);
  };

  const getUniqueOptionsForHeader = (headerName) => {
    if (!activeModalDoc || !activeModalDoc.wages) return [];
    const values = activeModalDoc.wages
      .map(row => row[headerName])
      .filter(val => val !== undefined && val !== null && val !== "");
    return [...new Set(values)];
  };

  // Filter Master State Modal Rows
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

  // Filter Selected District Modal Rows
  const getFilteredDistrictWages = () => {
    if (!activeDistrictDoc || !activeDistrictDoc.districts || !activeDistrictDoc.districts[selectedDistrictIdx]) return [];
    const targetDistrict = activeDistrictDoc.districts[selectedDistrictIdx];
    if (!targetDistrict.wages) return [];

    return targetDistrict.wages.filter(row => 
      Object.values(row).some(val => 
        String(val).toLowerCase().includes(districtSearch.toLowerCase())
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F7FC] text-slate-800 font-sans antialiased">
      
      {/* 1️⃣ HEADER INFO MODULE */}
      <div className="max-w-7xl mx-auto px-4 pt-10 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-black text-[#0B1538] tracking-tight uppercase">
            MINIMUM WAGES PORTAL
          </h1>
          <p className="text-slate-500 font-medium text-sm lg:text-base mt-1">
            Latest State-wise & District-wise Minimum Wage Notifications
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
              <p className="text-xs text-slate-400 font-medium">State & District Breakdown</p>
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

        {/* 2️⃣ SEARCH AND REGION PICKER CONTROLS */}
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

        {/* 3️⃣ PORTAL MAIN JURISDICTIONS TABLE */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1538] text-white text-[11px] font-black uppercase tracking-widest">
                  <th className="py-4 px-6">State</th>
                  <th className="py-4 px-6">Latest Revision</th>
                  <th className="py-4 px-6">Structure / Classification</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => {
                    const hasDistricts = doc.districts && doc.districts.length > 0;
                    const hasMasterData = doc.wages && doc.wages.length > 0;

                    return (
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
                        <td className="py-4 px-6 text-right flex justify-end gap-2">
                          
                          {/* District Schedules Button */}
                          {hasDistricts && (
                            <button
                              onClick={() => {
                                setActiveDistrictDoc(doc);
                                setSelectedDistrictIdx(0);
                                setDistrictSearch("");
                              }}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-all text-xs font-bold rounded-xl shadow-sm"
                            >
                              <Building2 size={14} /> District Schedules ({doc.districts.length})
                            </button>
                          )}

                          {/* Main State Details Button */}
                          {hasMasterData ? (
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
                          ) : !hasDistricts && (
                            <span className="text-xs text-slate-400 italic py-2">No tables uploaded</span>
                          )}
                        </td>
                      </tr>
                    );
                  })
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

      {/* 4️⃣ MASTER STATE DETAILS MODAL */}
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

            {/* Modal Summary Metadata Row */}
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

            {/* Dynamic Filters Toolbar */}
            <div className="px-6 py-4 bg-white border-b border-slate-100 space-y-4">
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

            {/* Grid Table Data */}
            <div className="p-6 overflow-y-auto flex-1 bg-white space-y-4">
              {activeModalDoc.notes && activeModalDoc.notes.trim() !== "" && (
                <div className="bg-[#FFFDF4] border border-[#FFEFA6] rounded-xl p-4 flex gap-3 shadow-sm">
                  <div className="text-amber-600 mt-0.5 flex-shrink-0">
                    <FileText size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-amber-900 tracking-wide">Compliance Notes & Remarks:</h4>
                    <p className="text-xs text-amber-800 font-medium mt-1 leading-relaxed whitespace-pre-line">
                      {activeModalDoc.notes}
                    </p>
                  </div>
                </div>
              )}

              <div className="overflow-x-auto rounded-xl border border-slate-200 max-h-[38vh]">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="sticky top-0 z-10 bg-slate-100 text-slate-600 font-black uppercase border-b border-slate-200">
                    <tr>
                      {activeModalDoc.headers && activeModalDoc.headers.map((heading, i) => (
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
                        <td colSpan={activeModalDoc.headers ? activeModalDoc.headers.length : 1} className="text-center py-10 text-slate-400 italic">
                          No matching records located inside current structural criteria layout views.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Bottom Fixed Footer */}
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

      {/* 5️⃣ DEDICATED DISTRICT SCHEDULES MODAL */}
      {activeDistrictDoc && (
        <div className="fixed inset-0 z-[9999] w-screen h-screen bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0 -z-10" onClick={() => setActiveDistrictDoc(null)} />

          <div className="bg-white rounded-[1.5rem] w-full max-w-6xl shadow-2xl flex flex-col max-h-[90vh] border border-slate-100 overflow-hidden">
            
            {/* District Modal Header */}
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
              <div className="flex items-center gap-2">
                <Building2 className="text-emerald-600" size={22} />
                <h2 className="text-lg font-black text-[#0B1538] tracking-tight uppercase">
                  District Wage Schedules - {activeDistrictDoc.state}
                </h2>
              </div>
              <button 
                onClick={() => setActiveDistrictDoc(null)}
                className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* District Tab Navigation */}
            <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex gap-2 overflow-x-auto">
              {activeDistrictDoc.districts.map((dist, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedDistrictIdx(idx);
                    setDistrictSearch("");
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                    selectedDistrictIdx === idx
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Building2 size={14} />
                  {dist.districtName}
                </button>
              ))}
            </div>

            {/* Selected District Info Banner */}
            {activeDistrictDoc.districts[selectedDistrictIdx] && (
              <div className="px-6 py-3 bg-emerald-50/60 border-b border-emerald-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="text-sm font-extrabold text-emerald-950">
                    District: {activeDistrictDoc.districts[selectedDistrictIdx].districtName}
                  </h3>
                  <p className="text-xs text-emerald-700 flex items-center gap-1.5 mt-0.5">
                    <Calendar size={13} /> Valid / Effective From: <span className="font-bold">{activeDistrictDoc.districts[selectedDistrictIdx].validFrom || "N/A"}</span>
                  </p>
                </div>
                
                {/* Search inside selected district */}
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-3 top-2 text-slate-400" size={14} />
                  <input
                    type="text"
                    placeholder={`Search in ${activeDistrictDoc.districts[selectedDistrictIdx].districtName}...`}
                    value={districtSearch}
                    onChange={(e) => setDistrictSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-lg border border-emerald-200 outline-none font-medium focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* District Table Content */}
            <div className="p-6 overflow-y-auto flex-1 bg-white space-y-4">
              {activeDistrictDoc.districts[selectedDistrictIdx] && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 max-h-[42vh]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="sticky top-0 z-10 bg-slate-100 text-slate-600 font-black uppercase border-b border-slate-200">
                      <tr>
                        {activeDistrictDoc.districts[selectedDistrictIdx].headers &&
                          activeDistrictDoc.districts[selectedDistrictIdx].headers.map((heading, i) => (
                            <th key={i} className="py-2.5 px-4 font-bold whitespace-nowrap bg-slate-100">
                              {cleanHeaderString(heading)}
                            </th>
                          ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {getFilteredDistrictWages().length > 0 ? (
                        getFilteredDistrictWages().map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-slate-50/80 transition-colors">
                            {activeDistrictDoc.districts[selectedDistrictIdx].headers.map((heading, colIndex) => {
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
                          <td 
                            colSpan={activeDistrictDoc.districts[selectedDistrictIdx].headers ? activeDistrictDoc.districts[selectedDistrictIdx].headers.length : 1} 
                            className="text-center py-12 text-slate-400 italic"
                          >
                            No matching records found in {activeDistrictDoc.districts[selectedDistrictIdx].districtName}.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Modal Bottom Fixed Control Panel */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div>
                {activeDistrictDoc.documentUrl ? (
                  <button
                    onClick={() => window.open(activeDistrictDoc.documentUrl, "_blank", "noopener,noreferrer")}
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 font-bold text-xs rounded-xl transition-all bg-white shadow-sm"
                  >
                    <Download size={14} /> Download Gazette Notification
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 italic font-medium">Official notification link unconfigured</span>
                )}
              </div>
              <button
                onClick={() => setActiveDistrictDoc(null)}
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