import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  Download,
  Bell,
  Calendar,
  AlertCircle,
  ChevronRight,
  Eye,
  FileText,
  MapPin,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Building,
  Scale,
  Clock
} from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const MinimumWagesLookup = () => {
  const navigate = useNavigate();
  const [wageData, setWageData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter states
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  
  // Unique values for filters
  const [states, setStates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [industries, setIndustries] = useState([]);

  // Random items for initial display before search
  const [randomStates, setRandomStates] = useState([]);
  const [randomCategories, setRandomCategories] = useState([]);

  // ==========================================
  // DYNAMIC LOGIC - FETCH FROM DATABASE
  // ==========================================
  useEffect(() => {
    const fetchWageData = async () => {
      try {
        const q = query(
          collection(db, "minimumWages"),
          orderBy("createdAt", "desc")
        );
        const snap = await getDocs(q);
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWageData(data);
        setFilteredData(data);
        
        // Extract unique values for filters from database
        // Check for both 'class' (from image) and 'category' fields
        const uniqueStates = [...new Set(data.map(item => item.state).filter(Boolean))];
        const uniqueCategories = [...new Set(data.flatMap(item => {
          // Handle both direct category and wageCategories array structure
          if (item.category) return [item.category];
          if (item.wageCategories && Array.isArray(item.wageCategories)) {
            return item.wageCategories.map(wc => wc.class).filter(Boolean);
          }
          return [];
        }))];
        const uniqueIndustries = [...new Set(data.map(item => item.industry).filter(Boolean))];
        
        setStates(uniqueStates);
        setCategories(uniqueCategories);
        setIndustries(uniqueIndustries);
        
        // Set random states and categories for initial display
        if (uniqueStates.length > 0) {
          const shuffledStates = [...uniqueStates];
          for (let i = shuffledStates.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledStates[i], shuffledStates[j]] = [shuffledStates[j], shuffledStates[i]];
          }
          setRandomStates(shuffledStates.slice(0, 5));
        }
        
        if (uniqueCategories.length > 0) {
          const shuffledCategories = [...uniqueCategories];
          for (let i = shuffledCategories.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCategories[i], shuffledCategories[j]] = [shuffledCategories[j], shuffledCategories[i]];
          }
          setRandomCategories(shuffledCategories.slice(0, 4));
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching wage data:", error);
        setLoading(false);
      }
    };
    fetchWageData();
  }, []);

  // Filter logic - triggered when filters change
  const handleSearch = () => {
    let filtered = [...wageData];
    
    if (selectedState) {
      filtered = filtered.filter(item => item.state === selectedState);
    }
    if (selectedCategory) {
      filtered = filtered.filter(item => {
        // Handle both direct category and wageCategories array
        if (item.category) return item.category === selectedCategory;
        if (item.wageCategories && Array.isArray(item.wageCategories)) {
          return item.wageCategories.some(wc => wc.class === selectedCategory);
        }
        return false;
      });
    }
    if (selectedIndustry) {
      filtered = filtered.filter(item => item.industry === selectedIndustry);
    }
    
    setFilteredData(filtered);
  };

  // Auto-search when filters change
  useEffect(() => {
    handleSearch();
  }, [selectedState, selectedCategory, selectedIndustry]);

  const handleClearFilters = () => {
    setSelectedState("");
    setSelectedCategory("");
    setSelectedIndustry("");
    setFilteredData(wageData);
  };

  const handleStateClick = (stateName) => {
    navigate(`/minimum-wages?state=${encodeURIComponent(stateName)}`);
  };

  const handleViewDetails = (wageItem) => {
    navigate(`/minimum-wages?state=${encodeURIComponent(wageItem.state)}`);
  };

  // Helper function to get wage value from different data structures
  const getWageValue = (item, type) => {
    if (type === 'daily') {
      // Check for daily wage in different possible locations
      if (item.totalPerDay) return item.totalPerDay;
      if (item.dailyWage) return item.dailyWage;
      if (item.wageCategories && item.wageCategories[0]) {
        return item.wageCategories[0].totalPerDay || item.wageCategories[0].wages?.totalPerDay;
      }
      return '—';
    }
    if (type === 'monthly') {
      // Check for monthly wage in different possible locations
      if (item.totalPerMonth) return item.totalPerMonth;
      if (item.monthlyWage) return item.monthlyWage;
      if (item.wageCategories && item.wageCategories[0]) {
        return item.wageCategories[0].totalPerMonth || item.wageCategories[0].wages?.totalPerMonth;
      }
      return '—';
    }
    if (type === 'category') {
      if (item.category) return item.category;
      if (item.wageCategories && item.wageCategories[0]) {
        return item.wageCategories[0].class;
      }
      return '—';
    }
    return '—';
  };

  const getEffectiveDate = (item) => {
    if (item.effectiveDate) return item.effectiveDate;
    if (item.effective) return item.effective;
    if (item.createdAt) {
      const date = new Date(item.createdAt);
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    }
    return '—';
  };

  // Get category badge color
  const getCategoryColor = (category) => {
    const colors = {
      'Unskilled': 'bg-blue-100 text-blue-700',
      'Semi-Skilled': 'bg-amber-100 text-amber-700',
      'Semi-skilled': 'bg-amber-100 text-amber-700',
      'Skilled': 'bg-emerald-100 text-emerald-700',
      'Highly Skilled': 'bg-purple-100 text-purple-700'
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-[#f4f7fc] min-h-screen font-sans">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-r from-[#0f2b3d] to-[#1a3a4f] pt-28 pb-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#d4a843] w-1 h-8 rounded-full"></span>
                <span className="text-[#d4a843] font-semibold tracking-wide">Labour Law Compliance</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Minimum Wages
              </h1>
              <p className="text-blue-100 mt-2 text-lg">State-wise Lookup & Comparison Tool</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                <Download size={16} /> Download Report
              </button>
              <button className="bg-[#d4a843] hover:bg-[#c09a38] text-[#0f2b3d] px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg">
                <Bell size={16} /> Get Updates
              </button>
            </div>
          </motion.div>

          {/* Search/Filters Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10 bg-white rounded-2xl shadow-xl p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider flex items-center gap-1">
                  <MapPin size={14} /> Select State
                </label>
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/20 outline-none text-slate-700 transition-all"
                >
                  <option value="">All States</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider flex items-center gap-1">
                  <Briefcase size={14} /> Select Category / Class
                </label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/20 outline-none text-slate-700 transition-all"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wider flex items-center gap-1">
                  <Building size={14} /> Select Industry
                </label>
                <select 
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#d4a843] focus:ring-2 focus:ring-[#d4a843]/20 outline-none text-slate-700 transition-all"
                >
                  <option value="">All Industries</option>
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-end gap-2">
                <button 
                  onClick={handleSearch}
                  className="flex-1 bg-[#d4a843] hover:bg-[#c09a38] text-[#0f2b3d] font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Search size={18} /> Search Rates
                </button>
                {(selectedState || selectedCategory || selectedIndustry) && (
                  <button 
                    onClick={handleClearFilters}
                    className="px-4 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl transition-all font-medium text-sm"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Random States & Categories Preview - Before Search */}
          {!selectedState && !selectedCategory && !selectedIndustry && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-blue-200 text-sm font-medium">🔥 Trending States:</span>
                <div className="flex flex-wrap gap-2">
                  {randomStates.map(state => (
                    <button
                      key={state}
                      onClick={() => setSelectedState(state)}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-all backdrop-blur-sm"
                    >
                      {state}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-blue-200 text-sm font-medium">📊 Popular Categories:</span>
                <div className="flex flex-wrap gap-2">
                  {randomCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-all backdrop-blur-sm"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Info Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-amber-50 border-l-4 border-[#d4a843] p-5 rounded-r-xl mb-8 flex flex-wrap justify-between items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <AlertCircle className="text-[#d4a843]" size={20} />
            <div>
              <p className="text-sm text-slate-700">
                <span className="font-semibold">📋 Latest Updates:</span> Rates are based on latest state notifications and subject to periodic revision.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                VDA (Variable Dearness Allowance) revisions may apply periodically. Employers must ensure compliance with latest notifications.
              </p>
            </div>
          </div>
          <button className="text-[#0f2b3d] text-sm font-semibold flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all">
            <Download size={14} /> Download State-wise Notification
          </button>
        </motion.div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-[#d4a843] rounded-full"></div>
            <h2 className="text-xl font-bold text-slate-800">Minimum Wage Rates</h2>
          </div>
          <p className="text-sm text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm">
            Showing {filteredData.length} records
          </p>
        </div>

        {/* Wages Table - Clickable States */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gradient-to-r from-slate-50 to-white border-b-2 border-slate-200">
                  <th className="px-6 py-5 text-sm font-bold text-slate-700 uppercase tracking-wider">State</th>
                  <th className="px-6 py-5 text-sm font-bold text-slate-700 uppercase tracking-wider">Category / Class</th>
                  <th className="px-6 py-5 text-sm font-bold text-slate-700 uppercase tracking-wider">Industry</th>
                  <th className="px-6 py-5 text-sm font-bold text-slate-700 uppercase tracking-wider">Daily Wage (₹)</th>
                  <th className="px-6 py-5 text-sm font-bold text-slate-700 uppercase tracking-wider">Monthly Wage (₹)</th>
                  <th className="px-6 py-5 text-sm font-bold text-slate-700 uppercase tracking-wider">Effective Date</th>
                  <th className="px-6 py-5 text-sm font-bold text-slate-700 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 border-4 border-[#d4a843] border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-slate-500">Loading minimum wage data from database...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredData.length > 0 ? (
                  filteredData.map((row, idx) => {
                    const categoryValue = getWageValue(row, 'category');
                    const dailyWage = getWageValue(row, 'daily');
                    const monthlyWage = getWageValue(row, 'monthly');
                    const effectiveDate = getEffectiveDate(row);
                    
                    return (
                      <motion.tr 
                        key={row.id || idx} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: (idx % 20) * 0.02 }}
                        className="border-b border-slate-100 hover:bg-slate-50 transition-all cursor-pointer group"
                        onClick={() => handleStateClick(row.state)}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#d4a843] group-hover:text-[#c09a38]" />
                            <span className="font-semibold text-slate-800 group-hover:text-[#0f2b3d] transition-colors">
                              {row.state || '—'}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(categoryValue)}`}>
                            {categoryValue}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-600 text-sm">{row.industry || row.sector || '—'}</td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-slate-800">₹ {typeof dailyWage === 'number' ? dailyWage.toFixed(2) : dailyWage}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="font-bold text-slate-800">₹ {typeof monthlyWage === 'number' ? monthlyWage.toFixed(2) : monthlyWage}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1 text-slate-500 text-sm">
                            <Calendar size={14} />
                            <span>{effectiveDate}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDetails(row);
                            }}
                            className="flex items-center gap-1 text-[#d4a843] hover:text-[#c09a38] font-semibold text-sm transition-colors"
                          >
                            <Eye size={16} /> View
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Search size={40} className="text-slate-300" />
                        <p className="text-slate-500">No records found for selected filters</p>
                        <button 
                          onClick={handleClearFilters}
                          className="text-[#d4a843] text-sm font-semibold mt-2"
                        >
                          Clear Filters
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Stats & Notes Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {/* Quick Notes */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#d4a843]/10 rounded-xl flex items-center justify-center">
                <FileText className="text-[#d4a843]" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Quick Notes</h3>
                <p className="text-xs text-slate-500">Important compliance points</p>
              </div>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                Minimum wages vary by skill category, location, and industry
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                VDA revisions apply twice a year (April & October)
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                Employers must display wage rates at workplace
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                Non-compliance can lead to penalties under the Code on Wages, 2019
              </li>
            </ul>
          </div>

          {/* Trending Updates - Random states from DB */}
          <div className="bg-gradient-to-br from-[#0f2b3d] to-[#1a3a4f] p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-[#d4a843]" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Trending Updates</h3>
                <p className="text-blue-200 text-xs">Recent notifications from database</p>
              </div>
            </div>
            <div className="space-y-3">
              {wageData.slice(0, 3).map((item, idx) => (
                <div 
                  key={item.id || idx} 
                  onClick={() => handleStateClick(item.state)}
                  className="bg-white/10 rounded-lg p-3 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white text-sm font-semibold group-hover:text-[#d4a843] transition-colors">{item.state || 'Unknown State'}</p>
                      <p className="text-blue-200 text-xs mt-1">
                        {getWageValue(item, 'category')} • ₹{getWageValue(item, 'daily')}/day
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-blue-300 group-hover:text-[#d4a843] transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                <Library className="text-[#d4a843]" size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg">Resources</h3>
                <p className="text-xs text-slate-500">Helpful compliance tools</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: "Minimum Wage Calculator", icon: <Scale size={16} /> },
                { name: "State-wise Compliance Checklist", icon: <CheckIcon size={16} /> },
                { name: "VDA Revision History", icon: <Clock size={16} /> },
                { name: "Penalty Structure Guide", icon: <AlertCircle size={16} /> }
              ].map((resource, idx) => (
                <button key={idx} className="w-full text-left flex items-center justify-between p-2.5 hover:bg-slate-50 rounded-lg transition-colors group">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4a843]">{resource.icon}</span>
                    <span className="text-sm text-slate-700 group-hover:text-[#0f2b3d]">{resource.name}</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-400 group-hover:text-[#d4a843]" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-[#0f2b3d] to-[#1a3a4f] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Need Help with Compliance?</h3>
          <p className="text-blue-200 mb-6">Get expert assistance with minimum wage calculations and filings</p>
          <button className="bg-[#d4a843] hover:bg-[#c09a38] text-[#0f2b3d] px-8 py-3 rounded-xl font-bold transition-all shadow-lg inline-flex items-center gap-2">
            Contact Compliance Expert <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper component
const CheckIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default MinimumWagesLookup;