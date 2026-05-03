import { motion } from "framer-motion";
import {
  BookOpen,
  Bell,
  Calendar,
  Search,
  ArrowRight,
  Clock,
  Download,
  Mail,
  ChevronRight,
  Bookmark,
  Sparkles,
  Zap,
  Filter,
  ShieldCheck,
  FileText,
  Library,
  Scale,
  Briefcase,
  Building,
  AlertCircle,
  MapPin,
  BriefcaseBusiness,
  Eye,
  TrendingUp,
  Award,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Knowledge = () => {
  const navigate = useNavigate();
  const [wageUpdates, setWageUpdates] = useState([]);
  const [allWageData, setAllWageData] = useState([]);
  const [filteredWageData, setFilteredWageData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // States for dropdowns
  const [selectedState, setSelectedState] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  
  // Dynamic dropdown options from database
  const [statesList, setStatesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [industriesList, setIndustriesList] = useState([]);
  
  // Random preview items
  const [randomStates, setRandomStates] = useState([]);
  const [randomCategories, setRandomCategories] = useState([]);

  // ==========================================
  // FETCH FROM DATABASE - CORRECT STRUCTURE
  // ==========================================
  useEffect(() => {
    const fetchWageData = async () => {
      try {
        // Fetch all documents from minimumWages collection
        const minWagesQuery = query(collection(db, "minimumWages"));
        const minWagesSnap = await getDocs(minWagesQuery);
        
        const allData = [];
        const statesSet = new Set();
        const categoriesSet = new Set();
        
        // Loop through each minimumWages document
        for (const minWageDoc of minWagesSnap.docs) {
          const minWageData = minWageDoc.data();
          const docId = minWageDoc.id;
          
          // Get the state name - could be direct or nested
          let stateName = minWageData.state || minWageData.name || null;
          
          // Check for wages array (from your database structure)
          if (minWageData.wages && Array.isArray(minWageData.wages)) {
            if (stateName) statesSet.add(stateName);
            
            // Process each wage entry in the wages array
            minWageData.wages.forEach((wageEntry, idx) => {
              const categoryClass = wageEntry.class;
              if (categoryClass) categoriesSet.add(categoryClass);
              
              allData.push({
                id: `${docId}_wage_${idx}`,
                state: stateName || 'Unknown',
                category: wageEntry.class || '—',
                basicPerMonth: wageEntry.basicPerMonth,
                totalPerDay: wageEntry.totalPerDay,
                totalPerMonth: wageEntry.totalPerMonth,
                vdaPerMonth: wageEntry.vdaPerMonth,
                effectiveDate: minWageData.effectiveDate || wageEntry.effectiveDate || null,
                createdAt: minWageData.createdAt || new Date(),
                rawData: wageEntry
              });
            });
          }
          
          // Check for wageCategories array (alternative structure)
          if (minWageData.wageCategories && Array.isArray(minWageData.wageCategories)) {
            if (stateName) statesSet.add(stateName);
            
            minWageData.wageCategories.forEach((wageCat, idx) => {
              const categoryClass = wageCat.class;
              if (categoryClass) categoriesSet.add(categoryClass);
              
              allData.push({
                id: `${docId}_wageCat_${idx}`,
                state: stateName || 'Unknown',
                category: wageCat.class || '—',
                basicPerMonth: wageCat.basicPerMonth,
                totalPerDay: wageCat.totalPerDay,
                totalPerMonth: wageCat.totalPerMonth,
                vdaPerMonth: wageCat.vdaPerMonth,
                effectiveDate: minWageData.effectiveDate || null,
                createdAt: minWageData.createdAt || new Date(),
                rawData: wageCat
              });
            });
          }
          
          // Check if there's a direct category field (simpler structure)
          if (minWageData.category && !minWageData.wages && !minWageData.wageCategories) {
            if (stateName) statesSet.add(stateName);
            if (minWageData.category) categoriesSet.add(minWageData.category);
            
            allData.push({
              id: docId,
              state: stateName || 'Unknown',
              category: minWageData.category || '—',
              basicPerMonth: minWageData.basicPerMonth,
              totalPerDay: minWageData.totalPerDay,
              totalPerMonth: minWageData.totalPerMonth,
              vdaPerMonth: minWageData.vdaPerMonth,
              effectiveDate: minWageData.effectiveDate || null,
              createdAt: minWageData.createdAt || new Date(),
              rawData: minWageData
            });
          }
          
          // If no state found in document, try to get from subcollection
          if (!stateName) {
            try {
              const statesSubCollection = collection(db, "minimumWages", docId, "states");
              const statesSnap = await getDocs(statesSubCollection);
              
              for (const stateDoc of statesSnap.docs) {
                const stateData = stateDoc.data();
                const subStateName = stateData.name || stateData.state;
                if (subStateName) {
                  statesSet.add(subStateName);
                  
                  // Check for wageCategories under this state
                  const wageCategoriesSubCollection = collection(db, "minimumWages", docId, "states", stateDoc.id, "wageCategories");
                  const wageCategoriesSnap = await getDocs(wageCategoriesSubCollection);
                  
                  for (const wageCatDoc of wageCategoriesSnap.docs) {
                    const wageData = wageCatDoc.data();
                    const categoryClass = wageData.class;
                    if (categoryClass) categoriesSet.add(categoryClass);
                    
                    allData.push({
                      id: `${docId}_${stateDoc.id}_${wageCatDoc.id}`,
                      state: subStateName,
                      category: wageData.class || '—',
                      basicPerMonth: wageData.basicPerMonth,
                      totalPerDay: wageData.totalPerDay,
                      totalPerMonth: wageData.totalPerMonth,
                      vdaPerMonth: wageData.vdaPerMonth,
                      effectiveDate: wageData.effectiveDate || null,
                      createdAt: wageData.createdAt || new Date(),
                      rawData: wageData
                    });
                  }
                }
              }
            } catch (err) {
              console.log("No subcollection found for:", docId);
            }
          }
        }
        
        console.log("Fetched data:", allData);
        console.log("Categories found:", Array.from(categoriesSet));
        
        setAllWageData(allData);
        setFilteredWageData(allData);
        setWageUpdates(allData);
        
        // Set dropdown lists
        setStatesList(Array.from(statesSet).sort());
        setCategoriesList(Array.from(categoriesSet).sort());
        
        // Set random states and categories for preview
        const statesArray = Array.from(statesSet);
        if (statesArray.length > 0) {
          const shuffled = [...statesArray];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          setRandomStates(shuffled.slice(0, 5));
        }
        
        const categoriesArray = Array.from(categoriesSet);
        if (categoriesArray.length > 0) {
          const shuffled = [...categoriesArray];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          setRandomCategories(shuffled.slice(0, 4));
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching wage data:", error);
        setLoading(false);
      }
    };
    
    fetchWageData();
  }, []);

  // Filter function
  const handleSearch = () => {
    let filtered = [...allWageData];
    
    if (selectedState) {
      filtered = filtered.filter(item => item.state === selectedState);
    }
    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    if (selectedIndustry) {
      filtered = filtered.filter(item => (item.industry || '').includes(selectedIndustry));
    }
    
    setFilteredWageData(filtered);
  };

  // Auto-search when filters change
  useEffect(() => {
    handleSearch();
  }, [selectedState, selectedCategory, selectedIndustry]);

  const handleClearFilters = () => {
    setSelectedState("");
    setSelectedCategory("");
    setSelectedIndustry("");
    setFilteredWageData(allWageData);
  };

  // Helper function to format currency
  const formatCurrency = (amount) => {
    if (amount === undefined || amount === null) return '₹ —';
    if (typeof amount === 'number') return `₹ ${amount.toFixed(2)}`;
    return `₹ ${amount}`;
  };

  const getEffectiveDate = (item) => {
    if (item.effectiveDate) return item.effectiveDate;
    if (item.createdAt) {
      if (item.createdAt.toDate) {
        return item.createdAt.toDate().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      }
      if (item.createdAt instanceof Date) {
        return item.createdAt.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      }
    }
    return 'Not Specified';
  };

  const getCategoryColor = (category) => {
    if (!category) return 'bg-gray-100 text-gray-700';
    const catLower = category.toLowerCase();
    if (catLower.includes('unskilled')) return 'bg-blue-100 text-blue-700';
    if (catLower.includes('semi')) return 'bg-amber-100 text-amber-700';
    if (catLower.includes('skilled')) return 'bg-emerald-100 text-emerald-700';
    if (catLower.includes('highly')) return 'bg-purple-100 text-purple-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-[#f4f7fc] min-h-screen text-slate-800 font-sans pb-20">
      
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-r from-[#0f2b3d] to-[#1a3a4f] pt-28 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center gap-3">
                <span className="bg-[#d4a843] w-2 h-10 rounded-full"></span>
                Minimum Wages
              </h1>
              <p className="text-blue-100 mt-2 text-lg">State-wise Lookup & Compliance Tool</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 backdrop-blur-sm">
                <Download size={16} /> Download Notification
              </button>
              <button className="bg-[#d4a843] hover:bg-[#c09a38] text-[#0f2b3d] px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-lg">
                <Bell size={16} /> Subscribe
              </button>
            </div>
          </motion.div>

          {/* Search/Filters Row - Dynamic from Database */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-10 bg-white rounded-2xl shadow-xl p-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Select State</label>
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] outline-none text-slate-700"
                >
                  <option value="">All States</option>
                  {statesList.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Select Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] outline-none text-slate-700"
                >
                  <option value="">All Categories</option>
                  {categoriesList.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wide">Select Industry</label>
                <select 
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-[#d4a843] focus:ring-1 focus:ring-[#d4a843] outline-none text-slate-700"
                >
                  <option value="">All Industries</option>
                  <option>Construction</option>
                  <option>Manufacturing</option>
                  <option>Services</option>
                  <option>Agriculture</option>
                  <option>Shops & Establishment</option>
                </select>
              </div>
              <div className="flex items-end gap-2">
                <button 
                  onClick={handleSearch}
                  className="flex-1 bg-[#d4a843] hover:bg-[#c09a38] text-[#0f2b3d] font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Search size={18} /> Search
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

          {/* Random States & Categories Preview */}
          {!selectedState && !selectedCategory && !selectedIndustry && !loading && randomStates.length > 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-blue-200 text-sm font-medium">🔥 Popular States:</span>
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
                <span className="text-blue-200 text-sm font-medium">📊 Common Categories:</span>
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Info Banner */}
        <div className="bg-amber-50 border-l-4 border-[#d4a843] p-4 rounded-r-xl mb-8 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-[#d4a843]" size={20} />
            <p className="text-sm text-slate-700">Rates are based on latest state notifications and subject to periodic revision. <span className="font-semibold">VDA revisions</span> may apply periodically.</p>
          </div>
          <button className="text-[#0f2b3d] text-sm font-semibold flex items-center gap-1 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all">
            <Download size={14} /> Download State Notification
          </button>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-[#d4a843] rounded-full"></div>
            <h2 className="text-xl font-bold text-slate-800">Minimum Wage Rates</h2>
          </div>
          <p className="text-sm text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm">
            Showing {filteredWageData.length} record{filteredWageData.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Wages Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase tracking-wider">State</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase tracking-wider">Daily Wage (₹)</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase tracking-wider">Monthly Wage (₹)</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase tracking-wider">Basic/Month</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase tracking-wider">VDA/Month</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-700 uppercase tracking-wider">Effective Date</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-10 h-10 border-4 border-[#d4a843] border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-slate-500">Loading wage data from database...</p>
                      </div>
                    </td>
                  </tr>
                ) : filteredWageData.length > 0 ? (
                  filteredWageData.map((row, idx) => (
                    <tr 
                      key={row.id || idx} 
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/minimum-wages?state=${encodeURIComponent(row.state)}`)}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-[#d4a843]" />
                          <span className="font-medium text-slate-800">{row.state}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getCategoryColor(row.category)}`}>
                          {row.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {row.totalPerDay ? formatCurrency(row.totalPerDay) : '₹ —'}
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {row.totalPerMonth ? formatCurrency(row.totalPerMonth) : '₹ —'}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {row.basicPerMonth ? formatCurrency(row.basicPerMonth) : '₹ —'}
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        {row.vdaPerMonth ? formatCurrency(row.vdaPerMonth) : '₹ —'}
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-sm">{getEffectiveDate(row)}</td>
                    </tr>
                  ))
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

        {/* Quick Notes Section */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#d4a843]/10 rounded-xl flex items-center justify-center">
                <BookOpen className="text-[#d4a843]" size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg">Quick Notes</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                Minimum wages vary by skill category and location
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                VDA (Variable Dearness Allowance) revisions apply periodically
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                Total wages = Basic + VDA (where applicable)
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 bg-[#d4a843] rounded-full mt-1.5"></span>
                Employers must ensure compliance with latest notifications
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-[#0f2b3d] to-[#1a3a4f] p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="text-[#d4a843]" size={20} />
              </div>
              <h3 className="font-bold text-white text-lg">Latest Regulatory Updates</h3>
            </div>
            <div className="space-y-3">
              {wageUpdates.slice(0, 3).map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => navigate(`/minimum-wages?state=${encodeURIComponent(item.state)}`)}
                  className="bg-white/10 rounded-lg p-3 backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-all"
                >
                  <p className="text-white text-sm font-medium">{item.state} - {item.category}</p>
                  <p className="text-blue-200 text-xs">Daily: {formatCurrency(item.totalPerDay)} | Monthly: {formatCurrency(item.totalPerMonth)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E-Library Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Library size={26} className="text-[#d4a843]" /> E-Library
            </h2>
            <p className="text-slate-500 text-sm hidden md:block">Simplifying Labour Laws — One Topic at a Time</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                <Scale size={18} className="text-[#d4a843]" />
                <h3 className="font-bold text-slate-700">Wage & Salary Laws</h3>
              </div>
              <div className="p-4 space-y-3">
                {["Minimum Wages", "Bonus", "Payment of Wages"].map((item) => (
                  <div key={item} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                    <span className="text-sm text-slate-700 group-hover:text-[#0f2b3d] font-medium">{item}</span>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-[#d4a843]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#d4a843]" />
                <h3 className="font-bold text-slate-700">Social Security</h3>
              </div>
              <div className="p-4 space-y-3">
                {["PF (Provident Fund)", "ESIC", "Gratuity"].map((item) => (
                  <div key={item} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                    <span className="text-sm text-slate-700 group-hover:text-[#0f2b3d] font-medium">{item}</span>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-[#d4a843]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center gap-2">
                <Building size={18} className="text-[#d4a843]" />
                <h3 className="font-bold text-slate-700">State Compliance</h3>
              </div>
              <div className="p-4 space-y-3">
                {["Professional Tax (PT)", "Shops & Establishment", "Labour Welfare Fund (LWF)"].map((item) => (
                  <div key={item} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer group">
                    <span className="text-sm text-slate-700 group-hover:text-[#0f2b3d] font-medium">{item}</span>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-[#d4a843]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Tools */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border-t-4 border-[#d4a843] shadow-sm">
            <h4 className="font-bold text-slate-800 text-lg mb-1">Compliance Health Check</h4>
            <p className="text-xs text-slate-500 mb-5">Free Basic Assessment</p>
            <div className="space-y-4">
              <input type="number" placeholder="No. of Employees" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
              <input type="text" placeholder="States of Operation" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
              <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" /> Contract Labour?</label>
              <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" /> Covered under EPF/ESI?</label>
              <button className="w-full bg-[#0f2b3d] text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#1a3a4f] transition-colors">Get Result</button>
            </div>
          </div>

          <div className="bg-[#0f2b3d] p-6 rounded-xl shadow-lg text-white">
            <div className="flex items-center gap-2 mb-5"><Calendar size={20} className="text-[#d4a843]" /><h4 className="font-bold text-xl">Upcoming Deadlines</h4></div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg"><span className="font-bold text-[#d4a843]">15</span><span className="text-sm">PF & ESIC Payment</span></div>
              <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg"><span className="font-bold text-[#d4a843]">20</span><span className="text-sm">GSTR-3B Filing</span></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-800 border-b pb-2 mb-3">Central Labour Laws</h4>
            <div className="space-y-2">
              {["Maternity Benefit", "Gratuity Act", "Bonus Act", "Contract Labour", "Industrial Disputes"].map((law) => (
                <div key={law} className="flex justify-between items-center text-sm text-slate-600 hover:text-[#0f2b3d] cursor-pointer"><span>{law}</span><ChevronRight size={14} /></div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Wage Updates Feed */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2"><Bell size={20} className="text-[#d4a843]" /> Latest Notifications</h3>
          <div className="grid gap-4">
            {wageUpdates.length > 0 ? (
              wageUpdates.slice(0, 5).map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => navigate(`/minimum-wages?state=${encodeURIComponent(item.state)}`)} 
                  className="cursor-pointer p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all flex justify-between items-center group"
                >
                  <div>
                    <h4 className="font-semibold text-slate-800 group-hover:text-[#0f2b3d]">{item.state} - {item.category} Wage Notification</h4>
                    <p className="text-xs text-slate-500 mt-1">Daily: {formatCurrency(item.totalPerDay)} | Monthly: {formatCurrency(item.totalPerMonth)}</p>
                  </div>
                  <ArrowRight size={18} className="text-slate-400 group-hover:text-[#d4a843]" />
                </div>
              ))
            ) : (
              <div className="p-10 text-center border-2 border-dashed rounded-xl text-slate-400">Syncing Statutory Data...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;