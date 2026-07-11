import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { 
  Search, 
  Calendar, 
  X, 
  Download, 
  Loader2, 
  ChevronRight,
  StickyNote,
  FileText,
  Users,
  ShieldAlert,
  MapPin,
  MessageSquare,
  Briefcase,
  Layers,
  Target
} from "lucide-react";

// Robust state icon abbreviation component matching the dashboard aesthetics completely
const StateIcon = ({ stateName }) => {
  const normalized = String(stateName)
    .toLowerCase()
    .replace(/\s+/g, "")
    .trim();

  let code = "IN";
  let colorClass = "text-slate-500 bg-slate-50 border-slate-200";

  // States
  if (normalized.includes("andhrapradesh") || normalized.includes("andhra")) {
    code = "AP";
    colorClass = "text-blue-600 bg-blue-50 border-blue-200";
  }
  else if (normalized.includes("arunachal")) {
    code = "AR";
    colorClass = "text-orange-600 bg-orange-50 border-orange-200";
  }
  else if (normalized.includes("assam")) {
    code = "AS";
    colorClass = "text-green-600 bg-green-50 border-green-200";
  }
  else if (normalized.includes("bihar")) {
    code = "BR";
    colorClass = "text-red-600 bg-red-50 border-red-200";
  }
  // Fixed: Added spelling variants for Chattishgarh
  else if (normalized.includes("chhattisgarh") || normalized.includes("chattishgarh")) {
    code = "CG";
    colorClass = "text-emerald-600 bg-emerald-50 border-emerald-200";
  }
  else if (normalized.includes("goa")) {
    code = "GA";
    colorClass = "text-rose-600 bg-rose-50 border-rose-200";
  }
  // Fixed: Added spelling variants for Gujrat
  else if (normalized.includes("gujarat") || normalized.includes("gujrat")) {
    code = "GJ";
    colorClass = "text-red-500 bg-red-50 border-red-100";
  }
  else if (normalized.includes("haryana")) {
    code = "HR";
    colorClass = "text-lime-600 bg-lime-50 border-lime-200";
  }
  else if (normalized.includes("himachal")) {
    code = "HP";
    colorClass = "text-purple-600 bg-purple-50 border-purple-200";
  }
  else if (normalized.includes("jharkhand")) {
    code = "JH";
    colorClass = "text-yellow-700 bg-yellow-50 border-yellow-200";
  }
  else if (normalized.includes("karnataka")) {
    code = "KA";
    colorClass = "text-orange-500 bg-orange-50 border-orange-100";
  }
  else if (normalized.includes("kerala")) {
    code = "KL";
    colorClass = "text-purple-500 bg-purple-50 border-purple-100";
  }
  else if (normalized.includes("madhyapradesh")) {
    code = "MP";
    colorClass = "text-emerald-600 bg-emerald-50 border-emerald-200";
  }
  else if (normalized.includes("maharashtra")) {
    code = "MH";
    colorClass = "text-teal-500 bg-teal-50 border-teal-100";
  }
  else if (normalized.includes("manipur")) {
    code = "MN";
    colorClass = "text-pink-600 bg-pink-50 border-pink-200";
  }
  else if (normalized.includes("meghalaya")) {
    code = "ML";
    colorClass = "text-cyan-600 bg-cyan-50 border-cyan-200";
  }
  else if (normalized.includes("mizoram")) {
    code = "MZ";
    colorClass = "text-indigo-600 bg-indigo-50 border-indigo-200";
  }
  else if (normalized.includes("nagaland")) {
    code = "NL";
    colorClass = "text-violet-600 bg-violet-50 border-violet-200";
  }
  else if (normalized.includes("odisha") || normalized.includes("orissa")) {
    code = "OD";
    colorClass = "text-yellow-600 bg-yellow-50 border-yellow-200";
  }
  else if (normalized.includes("punjab")) {
    code = "PB";
    colorClass = "text-indigo-500 bg-indigo-50 border-indigo-100";
  }
  else if (normalized.includes("rajasthan")) {
    code = "RJ";
    colorClass = "text-amber-600 bg-amber-50 border-amber-200";
  }
  else if (normalized.includes("sikkim")) {
    code = "SK";
    colorClass = "text-fuchsia-600 bg-fuchsia-50 border-fuchsia-200";
  }
  else if (normalized.includes("tamilnadu")) {
    code = "TN";
    colorClass = "text-pink-500 bg-pink-50 border-pink-100";
  }
  else if (normalized.includes("telangana")) {
    code = "TG";
    colorClass = "text-cyan-500 bg-cyan-50 border-cyan-100";
  }
  else if (normalized.includes("tripura")) {
    code = "TR";
    colorClass = "text-orange-700 bg-orange-50 border-orange-200";
  }
  else if (normalized.includes("uttarpradesh")) {
    code = "UP";
    colorClass = "text-sky-600 bg-sky-50 border-sky-200";
  }
  else if (normalized.includes("uttarakhand") || normalized.includes("uttaranchal")) {
    code = "UK";
    colorClass = "text-blue-700 bg-blue-50 border-blue-200";
  }
  else if (normalized.includes("westbengal")) {
    code = "WB";
    colorClass = "text-indigo-600 bg-indigo-50 border-indigo-200";
  }

  // Union Territories
  else if (normalized.includes("andamanandnicobarislands") || normalized.includes("andamannicobar")) {
    code = "AN";
    colorClass = "text-teal-700 bg-teal-50 border-teal-200";
  }
  else if (normalized.includes("chandigarh")) {
    code = "CH";
    colorClass = "text-amber-500 bg-amber-50 border-amber-100";
  }
  else if (
    normalized.includes("dadraandnagarhaveli") ||
    normalized.includes("damananddiu") ||
    normalized.includes("dadranagarhaveli")
  ) {
    code = "DN";
    colorClass = "text-slate-700 bg-slate-50 border-slate-200";
  }
  else if (normalized.includes("delhi") || normalized.includes("newdelhi") || normalized.includes("nct")) {
    code = "DL";
    colorClass = "text-blue-500 bg-blue-50 border-blue-100";
  }
  else if (normalized.includes("jammuandkashmir")) {
    code = "JK";
    colorClass = "text-green-700 bg-green-50 border-green-200";
  }
  else if (normalized.includes("ladakh")) {
    code = "LA";
    colorClass = "text-sky-700 bg-sky-50 border-sky-200";
  }
  else if (normalized.includes("lakshadweep")) {
    code = "LD";
    colorClass = "text-cyan-700 bg-cyan-50 border-cyan-200";
  }
  else if (normalized.includes("puducherry") || normalized.includes("pondicherry")) {
    code = "PY";
    colorClass = "text-rose-700 bg-rose-50 border-rose-200";
  }

  return (
    <span
      className={`w-7 h-7 flex items-center justify-center rounded-md border font-bold text-[11px] tracking-wider flex-shrink-0 ${colorClass}`}
    >
      {code}
    </span>
  );
};

const toTitleCase = (str) => {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const LabourWelfareFunds = () => {
  const [lwfDocs, setLwfDocs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All States");
  const [activeModalDoc, setActiveModalDoc] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  const [modalSearch, setModalSearch] = useState("");
  const [modalDropdownFilters, setModalDropdownFilters] = useState({});

  // State tracker to handle dynamic "Show More / Less" option expansions locally
  const [expandedSections, setExpandedSections] = useState({
    objective: false,
    scope: false,
    compliance: false,
    mandates: false,
    variations: false,
  });

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

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

  const applicableCount = lwfDocs.filter(d => d.status?.toLowerCase() === "applicable").length;
  const notApplicableCount = lwfDocs.filter(d => d.status?.toLowerCase() === "not applicable").length;

  const filteredDocs = lwfDocs.filter(doc => {
    const matchesSearch = doc.state?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All States" || doc.state === selectedRegion;
    
    let matchesStatus = true;
    if (statusFilter !== "All") {
      matchesStatus = doc.status?.toLowerCase() === statusFilter.toLowerCase();
    }
    
    return matchesSearch && matchesRegion && matchesStatus;
  });

  const stateDropdownOptions = ["All States", ...new Set(lwfDocs.map(d => toTitleCase(d.state)))];

  const cleanHeaderString = (str) => {
    if (!str) return "";
    const cleaned = String(str)
      .replace(/Â/g, "")
      .replace(/¹/g, "")
      .replace(/\s+/g, " ") 
      .replace(/([A-Z])\(/g, "$1 (") 
      .trim();
    return toTitleCase(cleaned);
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
    <div className="bg-[#F8FAFC] text-slate-800 font-sans antialiased relative selection:bg-blue-500 selection:text-white">
      
      {/* Premium Dark Blue Gradient Background Banner Block */}
      <div className="bg-gradient-to-b from-[#030A21] via-[#0B1538] to-[#1E2E67] text-white pb-36 pt-16 relative overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Content Hero Heading */}
          <div className="text-center max-w-3xl mx-auto mb-8 relative z-10">
            <h1 className="text-4xl font-black tracking-tight mb-2 drop-shadow-sm text-white">
              Labour Welfare Fund <span className="text-blue-400 font-extrabold">(LWF)</span>
            </h1>
            <p className="text-xs font-medium text-slate-300 max-w-xl mx-auto leading-relaxed">
              State-wise Labour Welfare Fund Applicability, Rates & Contribution Compliance Information
            </p>
          </div>

          {/* Integrated Micro-Bar Matrix Architecture */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 relative z-10 max-w-7xl mx-auto shadow-2xl space-y-4">
            
            {/* Full Unabridged Core Definition Panel (Exchanged from top position) */}
            <div className="pb-4 border-b border-white/10 flex flex-col sm:flex-row items-start gap-3">
              <div className="flex items-center gap-2 text-blue-400 mt-0.5 flex-shrink-0">
                <FileText size={15} />
                <span className="text-[10px] font-black uppercase tracking-wider">What is LWF?</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-semibold">
                Labour Welfare Fund (LWF) is a state-specific statutory welfare fund created to support employee welfare and social security. It is administered by the respective State Labour Welfare Board, and compliance requirements such as applicability, contribution, due dates, and returns are governed by the relevant state law.
              </p>
            </div>

            {/* 5-Column High Density Grid Area */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start text-left">
              
              {/* Objective (Exchanged into layout ribbon position) */}
              <div className="md:border-r border-white/10 pr-2 last:border-0 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-amber-400">
                    <Target size={14} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Objective</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Core Objective</h4>
                  <p className={`text-[11px] text-slate-300 leading-normal font-medium ${expandedSections.objective ? "" : "line-clamp-2"}`}>
                    The objective of LWF is to promote the welfare and well-being of workers through welfare measures supported by employer and employee contributions and other prescribed sources. These measures are intended to improve worker support beyond routine employment benefits.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection("objective")}
                  className="mt-1.5 text-left text-[10px] text-amber-400 hover:text-amber-300 font-bold transition-colors focus:outline-none"
                >
                  {expandedSections.objective ? "Show Less" : "Show More"}
                </button>
              </div>

              {/* Benefits of LWF */}
              <div className="md:border-r border-white/10 px-2 last:border-0 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-emerald-400">
                    <Users size={14} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Scope</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Benefits of LWF</h4>
                  <p className={`text-[11px] text-slate-300 leading-normal font-medium ${expandedSections.scope ? "" : "line-clamp-2"}`}>
                    LWF backed welfare schemes may include medical assistance, educational support, scholarships, family welfare, housing-related support, skill development, and emergency financial assistance. The type, eligibility, and amount of benefits vary from state to state and depend on the schemes offered by the respective Labour Welfare Board.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection("scope")}
                  className="mt-1.5 text-left text-[10px] text-emerald-400 hover:text-emerald-300 font-bold transition-colors focus:outline-none"
                >
                  {expandedSections.scope ? "Show Less" : "Show More"}
                </button>
              </div>

              {/* Common Compliance Areas */}
              <div className="md:border-r border-white/10 px-2 last:border-0 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-cyan-400">
                    <Layers size={14} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Framework</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Compliance Areas</h4>
                  <p className={`text-[11px] text-slate-300 leading-normal font-medium ${expandedSections.compliance ? "" : "line-clamp-2"}`}>
                    LWF compliance generally involves checking whether the establishment is covered, understanding the applicable contribution structure, complying with registration requirements where prescribed, and completing deposit and return formalities as per the relevant state rules. The exact process may vary, but the broad compliance framework is usually built around applicability, contribution, remittance, return filing, and record maintenance.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection("compliance")}
                  className="mt-1.5 text-left text-[10px] text-cyan-400 hover:text-cyan-300 font-bold transition-colors focus:outline-none"
                >
                  {expandedSections.compliance ? "Show Less" : "Show More"}
                </button>
              </div>

              {/* Employer Responsibilities */}
              <div className="md:border-r border-white/10 px-2 last:border-0 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-amber-400">
                    <Briefcase size={14} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Mandates</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">Employer Roles</h4>
                  <p className={`text-[11px] text-slate-300 leading-normal font-medium ${expandedSections.mandates ? "" : "line-clamp-2"}`}>
                    Where LWF is applicable, employers are generally required to deduct the employee contribution, add the employer contribution, deposit the total amount within the prescribed timeline, and complete applicable filing and record-keeping requirements. Employers may also need to produce records during inspections or as required by the concerned authority.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection("mandates")}
                  className="mt-1.5 text-left text-[10px] text-amber-400 hover:text-amber-300 font-bold transition-colors focus:outline-none"
                >
                  {expandedSections.mandates ? "Show Less" : "Show More"}
                </button>
              </div>

              {/* State-wise Variation */}
              <div className="px-2 last:border-0 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1 text-purple-400">
                    <ShieldAlert size={14} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Variations</span>
                  </div>
                  <h4 className="text-xs font-bold text-white mb-0.5">State Variation</h4>
                  <p className={`text-[11px] text-slate-300 leading-normal font-medium ${expandedSections.variations ? "" : "line-clamp-2"}`}>
                    There is no single uniform LWF law across India. Each state may prescribe different rules for applicability, employee coverage, contribution amount, frequency, due dates, return filing, and compliance procedure.
                  </p>
                </div>
                <button 
                  onClick={() => toggleSection("variations")}
                  className="mt-1.5 text-left text-[10px] text-purple-400 hover:text-purple-300 font-bold transition-colors focus:outline-none"
                >
                  {expandedSections.variations ? "Show Less" : "Show More"}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Main Container Content */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-16 relative z-20">
        
        {/* Dynamic Numerical Overview Ticker */}
        <div className="bg-white border border-slate-200/60 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 shadow-md divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          <div className="flex items-center gap-4 sm:pl-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm flex-shrink-0">
              <MapPin size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 tracking-wider block mb-0.5">Applicable States</span>
              <span className="text-2xl font-black text-emerald-600 tracking-tight">
                {loading ? "..." : `${applicableCount}`}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shadow-sm flex-shrink-0">
              <X size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 tracking-wider block mb-0.5">Not Applicable States</span>
              <span className="text-2xl font-black text-slate-700 tracking-tight">
                {loading ? "..." : `${notApplicableCount}`}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:pl-8">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
              <Calendar size={22} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-slate-400 tracking-wider block mb-0.5">Last Updated</span>
              <span className="text-xl font-black text-blue-600 tracking-tight">July 2026</span>
            </div>
          </div>
        </div>

        {/* Global Toolbar Filters Engine */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-6 bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm">
          <div className="text-sm font-black text-[#0B1538] tracking-wider whitespace-nowrap flex items-center gap-2">
            <span className="w-1.5 h-4 bg-blue-600 rounded-sm inline-block" />
            Labour Welfare Fund by State
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center flex-1 justify-end">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={15} />
              <input
                type="text"
                placeholder="Search State..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50/80 rounded-xl border border-slate-200 outline-none text-xs font-medium focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
              />
            </div>
            
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-slate-50/80 border border-slate-200 text-slate-700 px-3 py-2 rounded-xl text-xs font-semibold outline-none cursor-pointer min-w-[150px] focus:bg-white focus:border-blue-500 transition-all"
            >
              {stateDropdownOptions.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>

            <div className="flex items-center gap-3 px-3 py-1 bg-slate-50 rounded-xl border border-slate-200/60">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider">Status Filter</span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 cursor-pointer select-none">
                  <input 
                    type="radio" 
                    name="status" 
                    checked={statusFilter === "All"}
                    onChange={() => setStatusFilter("All")}
                    className="w-3.5 h-3.5 text-blue-600 border-slate-300 focus:ring-blue-500" 
                  />
                  All
                </label>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 cursor-pointer select-none">
                  <input 
                    type="radio" 
                    name="status" 
                    checked={statusFilter === "Applicable"}
                    onChange={() => setStatusFilter("Applicable")}
                    className="w-3.5 h-3.5 text-emerald-600 border-slate-300 focus:ring-emerald-500" 
                  />
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-0.5" />
                  Applicable
                </label>
                <label className="flex items-center gap-1.5 text-xs font-bold text-slate-600 cursor-pointer select-none">
                  <input 
                    type="radio" 
                    name="status" 
                    checked={statusFilter === "Not Applicable"}
                    onChange={() => setStatusFilter("Not Applicable")}
                    className="w-3.5 h-3.5 text-orange-600 border-slate-300 focus:ring-orange-500" 
                  />
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-400 mr-0.5" />
                  Not Applicable
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* LWF Core Display Table */}
        <div className="bg-white rounded-2xl border border-slate-200/70 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B1538] text-white text-[11px] font-black uppercase tracking-wider">
                  <th className="py-4 px-6 border-b border-slate-700">State / Ut</th>
                  <th className="py-4 px-6 border-b border-slate-700">Status</th>
                  <th className="py-4 px-6 border-b border-slate-700">Contribution Type</th>
                  <th className="py-4 px-6 border-b border-slate-700">Frequency</th>
                  <th className="py-4 px-6 border-b border-slate-700">Last Updated</th>
                  <th className="py-4 px-6 border-b border-slate-700 text-center">View Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="py-4 px-6 text-slate-900 tracking-wide text-[13px] flex items-center gap-3">
                        <StateIcon stateName={doc.state} />
                        <span className="font-extrabold text-slate-800 tracking-wide group-hover:text-blue-600 transition-colors">
                          {toTitleCase(doc.state)}
                        </span>
                      </td>
                      
                      {/* Status Column with Beautiful Pill Layouts */}
                      <td className="py-4 px-6">
                        {doc.status?.toLowerCase() === "applicable" ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Applicable
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider bg-orange-50 text-orange-600 border border-orange-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                            Not Applicable
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-6 font-bold text-slate-600 text-xs">
                        {doc.status?.toLowerCase() === "applicable" ? toTitleCase(doc.contributionType || "Employer + Employee") : "-"}
                      </td>
                      
                      <td className="py-4 px-6 font-bold text-slate-600 text-xs">
                        {doc.status?.toLowerCase() === "applicable" ? toTitleCase(doc.frequency || "Monthly") : "-"}
                      </td>
                      
                      <td className="py-4 px-6 font-bold text-slate-400 font-mono text-xs">
                        {doc.period || "Jul 2026"}
                      </td>
                      
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => {
                            setActiveModalDoc(doc);
                            setModalSearch("");
                            setModalDropdownFilters({});
                          }}
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 border border-slate-200 text-[#0B1538] hover:bg-[#0B1538] hover:text-white transition-all text-xs font-black rounded-xl shadow-sm hover:shadow active:scale-95"
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
                        <div className="flex flex-col items-center justify-center gap-3">
                          <Loader2 className="animate-spin text-blue-600" size={26} />
                          <span className="text-xs font-bold text-slate-500 tracking-wide">Syncing statutory welfare fund registries...</span>
                        </div>
                      ) : (
                        "No dynamic match found for matching parameters."
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Consult Floating Help Trigger Button */}
      <div className="fixed bottom-6 right-6 z-[999] flex items-center">
        <button className="bg-blue-600 text-white rounded-full px-5 py-3 shadow-xl hover:bg-blue-700 transition-all flex items-center gap-2 font-black text-xs tracking-wider active:scale-95 shadow-blue-600/30">
          <MessageSquare size={16} /> Consult An Expert
        </button>
      </div>

      {/* Pop-up Modal Window Panel */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-[9999] w-screen h-screen bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="absolute inset-0 -z-10" onClick={() => setActiveModalDoc(null)} />

          <div className="bg-white rounded-[1.5rem] w-full max-w-6xl shadow-2xl flex flex-col max-h-[90vh] border border-slate-100 overflow-hidden">
            
            <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-white">
              <h2 className="text-base font-black text-[#0B1538] tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-4 bg-blue-600 rounded-sm inline-block" />
                Labour Welfare Fund Rules Layout Setup — {toTitleCase(activeModalDoc.state)}
              </h2>
              <button 
                onClick={() => setActiveModalDoc(null)}
                className="p-1.5 hover:bg-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block mb-0.5">Jurisdiction Zone</span>
                <span className="text-xs font-bold text-[#0B1538]">{toTitleCase(activeModalDoc.state)}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block mb-0.5">Timeline Frequency</span>
                <span className="text-xs font-bold text-slate-600">{toTitleCase(activeModalDoc.frequency || "Half-Yearly")}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block mb-0.5">Contribution Matrix</span>
                <span className="text-xs font-bold text-blue-600">{toTitleCase(activeModalDoc.contributionType || "Employer + Employee")}</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block mb-0.5">Filing Revision Timeline</span>
                <span className="text-xs font-bold text-emerald-600">{activeModalDoc.period || "Jul 2026"}</span>
              </div>
            </div>

            <div className="px-6 py-4 bg-white border-b border-slate-100 space-y-4">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
                <input
                  type="text"
                  placeholder={`Search dynamic criteria inside ${toTitleCase(activeModalDoc.state)}...`}
                  value={modalSearch}
                  onChange={(e) => setModalSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 rounded-xl border border-slate-200 outline-none font-medium focus:bg-white focus:border-blue-500 transition-all"
                />
              </div>

              {getFilterableColumns().length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {getFilterableColumns().map((headerName, idx) => (
                    <div key={idx}>
                      <label className="block text-[9px] font-black text-slate-400 uppercase mb-1 tracking-wider">
                        {cleanHeaderString(headerName)}
                      </label>
                      <select 
                        value={modalDropdownFilters[headerName] || `All ${cleanHeaderString(headerName)}s`}
                        onChange={(e) => setModalDropdownFilters({
                          ...modalDropdownFilters,
                          [headerName]: e.target.value
                        })}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl p-2 font-semibold text-slate-700 outline-none focus:bg-white focus:border-blue-500 transition-all"
                      >
                        <option value={`All ${cleanHeaderString(headerName)}s`}>
                          All {cleanHeaderString(headerName)}s
                        </option>
                        {getUniqueOptionsForHeader(headerName).map((opt, oIdx) => (
                          <option key={oIdx} value={opt}>{toTitleCase(opt)}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 overflow-y-auto flex-1 bg-white space-y-5">
              {activeModalDoc.headers && activeModalDoc.headers.length > 0 ? (
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm max-h-[35vh]">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="sticky top-0 z-10 bg-slate-100 text-slate-600 border-b border-slate-200">
                      <tr>
                        {activeModalDoc.headers.map((heading, i) => (
                          <th key={i} className="py-3 px-4 font-black tracking-wider bg-slate-100 text-slate-700">
                            {cleanHeaderString(heading)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {getFilteredWagesInModal().length > 0 ? (
                        getFilteredWagesInModal().map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-slate-50/70 transition-colors">
                            {activeModalDoc.headers.map((heading, colIndex) => {
                              const val = row[heading];
                              return (
                                <td 
                                  key={colIndex} 
                                  className={`py-3 px-4 ${
                                    colIndex === 0 
                                      ? "font-extrabold text-slate-800 bg-slate-50/40 text-[13px]" 
                                      : typeof val === "number" 
                                        ? "font-bold text-slate-700 font-mono text-xs" 
                                        : "text-slate-600 font-semibold"
                                  }`}
                                >
                                  {typeof val === "number" ? `₹${val.toLocaleString("en-IN")}` : (toTitleCase(val) || "—")}
                                </td>
                              );
                            })}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={activeModalDoc.headers.length} className="text-center py-10 text-slate-400 italic font-medium">
                            No active matching metric rows found in this dynamic view block.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-400 bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-xl font-medium text-xs">
                  No operational breakdown matrices configured for this selected profile territory.
                </div>
              )}

              {activeModalDoc.notes && activeModalDoc.notes.trim() !== "" && (
                <div className="bg-[#FFFDF5] border border-[#F5E6C4] rounded-xl p-4 text-xs flex gap-3 text-[#8A5E1A] shadow-sm">
                  <StickyNote size={18} className="text-[#C29038] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="font-black text-[13px] text-[#784F17] block mb-1">
                      Compliance Notes & Remarks:
                    </span>
                    <p className="leading-relaxed whitespace-pre-line text-slate-600 font-semibold">
                      {activeModalDoc.notes}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <div>
                {activeModalDoc.documentUrl ? (
                  <button
                    onClick={() => window.open(activeModalDoc.documentUrl, "_blank", "noopener,noreferrer")}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200 font-bold text-xs rounded-xl transition-all bg-white shadow-sm active:scale-95"
                  >
                    <Download size={14} /> View Official Notification Gazette
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 italic font-medium tracking-wide">Official gazette link unconfigured</span>
                )}
              </div>
              <button
                onClick={() => setActiveModalDoc(null)}
                className="px-6 py-2 bg-[#0B1538] text-white font-bold text-xs rounded-xl hover:bg-slate-800 transition-colors shadow-md active:scale-95"
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