import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronRight,
  Scale,
  ShieldCheck,
  HardHat,
  Users,
  Building2,
  IndianRupee,
  HeartPulse,
  LayoutDashboard,
  AlertCircle,
  ArrowRight,
  Gavel,
  BookUser,
  HelpCircle,
  Percent,
  Calculator
} from "lucide-react";

import { db } from "../firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from "firebase/firestore";

import { useNavigate, useLocation } from "react-router-dom";

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [wageUpdates, setWageUpdates] = useState([]);
  const [libraryPages, setLibraryPages] = useState([]);
  const [shopPages, setShopPages] = useState([]); // Isolated state configuration for custom collections

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchWages = async () => {
      try {
        const q = query(
          collection(db, "minimumWages"),
          orderBy("createdAt", "desc"),
          limit(4)
        );
        const snap = await getDocs(q);
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWageUpdates(data);
      } catch (err) {
        console.error("Firebase Error:", err);
      }
    };

    const fetchLibraryPages = async () => {
      try {
        const snap = await getDocs(collection(db, "eLibraryPages"));
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLibraryPages(data);
      } catch (err) {
        console.error("Firebase Error:", err);
      }
    };

    const fetchShopPages = async () => {
      try {
        // Querying strictly from your isolated shop-and-establishment parameters setup
        const snap = await getDocs(collection(db, "shop-and-establishment"));
        const data = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setShopPages(data);
      } catch (err) {
        console.error("Shop Collection Firebase Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLibraryPages();
    fetchWages();
    fetchShopPages();
  }, []);

  return (
    <div className="flex h-[calc(100vh-80px)] w-full bg-[#FFFFFF] overflow-hidden font-sans text-[#1E293B]">
      
      {/* --- SIDE NAVIGATION --- */}
      <aside className="w-72 bg-[#FFFFFF] border-r border-[#E2E8F0] flex-shrink-0 flex flex-col h-full z-20">
        <div className="p-4 bg-[#0B1538] text-white flex items-center gap-3">
          <BookUser size={18} className="text-white" />
          <span className="font-extrabold text-xs uppercase tracking-[0.2em]">E-LIBRARY</span>
        </div>
        
        <div className="flex-1 overflow-y-auto pt-3 scrollbar-thin scrollbar-thumb-slate-200">
          <nav className="space-y-0.5">
            <NavItem 
              active={activeTab === "overview" && location.pathname === "/knowledge"} 
              onClick={() => {
                setActiveTab("overview");
                navigate("/knowledge");
              }} 
              icon={<Building2 size={18}/>} 
              label="Overview" 
            />

            <SidebarHeader label="Labour Codes (Central Laws)" />
            
            {/* DYNAMIC SIDEBAR ITEMS FROM CENTRAL LAWS */}
            {libraryPages.map((page) => (
               <NavItem 
                key={page.id}
                label={page.title} 
                icon={<Scale size={18}/>} 
                onClick={() => navigate(`/library/${page.slug}`)}
                hasChevron 
               />
            ))}

            {/* STATE COMPLIANCE NAVIGATION */}
            <SidebarHeader label="State Compliance (State Laws)" />
            
            {/* DYNAMIC SHOPS & ESTABLISHMENTS FROM TARGET DIRECT COLLECTION */}
            {shopPages.map((page) => (
              <NavItem
                key={page.id}
                active={location.pathname === `/elibrary/${page.slug}`}
                onClick={() => navigate(`/elibrary/${page.slug}`)}
                icon={<Building2 size={18} />}
                label={page.title}
                hasChevron
              />
            ))}

            {/* fallback default items or related sub-modules handles */}
            {shopPages.length === 0 && (
              <NavItem
                active={location.pathname.startsWith("/elibrary/delhi-shops-establishments-act-1954")}
                onClick={() => navigate("/elibrary/delhi-shops-establishments-act-1954")}
                icon={<Building2 size={18} />}
                label="Shops & Establishments"
                hasChevron
              />
            )}

            <NavItem
              active={location.pathname === "/ProfessionalTaxCompliance"}
              onClick={() => navigate("/ProfessionalTaxCompliance")}
              icon={<IndianRupee size={18} />}
              label="Professional Tax"
              hasChevron
            />

            <NavItem
              active={location.pathname === "/LabourWelfareFundCompliance"}
              onClick={() => navigate("/LabourWelfareFundCompliance")}
              icon={<HeartPulse size={18} />}
              label="Labour Welfare Fund"
              hasChevron
            />

            <NavItem
              active={location.pathname === "/minimumwageslookup" || location.pathname === "/minimum-wages"}
              onClick={() => navigate("/minimum-wages")}
              icon={<LayoutDashboard size={18} />}
              label="Minimum Wages (State-wise)"
              hasChevron
            />

            <SidebarHeader label="Other Resources" />
            <NavItem label="Labour Law Guide" icon={<Gavel size={18}/>} disabled status="Coming Soon" />
            <NavItem label="Case Studies" icon={<BookUser size={18}/>} disabled status="Coming Soon" />
            <NavItem label="FAQs" icon={<HelpCircle size={18}/>} disabled status="Coming Soon" />
          </nav>
        </div>

        <div className="p-4 bg-white border-t border-slate-100 mt-auto">
          <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
            <Calculator size={20} className="text-[#1D4ED8]" />
            <div className="flex-1">
              <p className="text-xs font-bold text-slate-800">Need Help?</p>
              <p className="text-[11px] text-slate-500">Contact our advisors</p>
            </div>
            <ChevronRight size={16} className="text-slate-400"/>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 overflow-y-auto bg-white p-8 lg:p-12 xl:p-14">
        <div className="max-w-[1500px] mx-auto">
          
          <div className="flex flex-col xl:flex-row justify-between items-start gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <BookUser className="text-[#0B1538]" size={32} strokeWidth={2.5}/>
                <h1 className="text-4xl font-black text-[#0B1538] tracking-tighter uppercase">E-Library</h1>
              </div>
              <p className="text-[#64748B] text-xl font-medium leading-tight">Your one-stop destination for all Labour Laws in India.</p>
              <p className="text-[#94A3B8] text-sm mt-2 tracking-wide font-medium">Explore Acts, Rules, Notifications & Practical Notes — all in one place.</p>
            </div>

            {/* WHAT'S NEW CARD */}
            <div className="w-full xl:w-96 bg-white border border-[#E2E8F0] p-6 rounded-3xl relative shadow-[0_15px_60px_-20px_rgba(249,115,22,0.15)] overflow-hidden">
              <div className="flex items-start gap-5 relative z-10">
                <div className="bg-[#F97316] p-3 rounded-2xl text-white shadow-lg shadow-orange-200">
                  <AlertCircle size={24} strokeWidth={2.5}/>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-sm">What's New?</h4>
                  <p className="text-[12px] text-[#64748B] leading-relaxed mt-1.5 font-medium">Stay updated with the latest notifications and compliance changes.</p>
                  <button className="text-[#F97316] text-[12px] font-black mt-4 flex items-center gap-2 group">
                    VIEW ALL UPDATES <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform"/>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "overview" ? (
              <motion.div key="overview" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                
                <ContentHeader label="Labour Codes (Central Laws)" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  {libraryPages.map((item, index) => (
                    <LawCard
                      key={item.id}
                      color={["orange", "green", "blue", "red"][index % 4]}
                      icon={index % 4 === 0 ? <Scale size={22} /> : index % 4 === 1 ? <ShieldCheck size={22} /> : index % 4 === 2 ? <HardHat size={22} /> : <Users size={22} />}
                      title={item.title}
                      subtitle={item.shortDescription}
                      includedActs={item.includedActs}
                      onClick={() => navigate(`/library/${item.slug}`)}
                    />
                  ))}
                </div>

                <ContentHeader label="State Compliance (State Laws)" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <StateCard 
                    icon={<Building2 size={24} />} 
                    title="Shops & Establishments" 
                    desc="State-specific Shop laws." 
                    bg="bg-[#EDE9FE]" 
                    textColor="text-[#8B5CF6]" 
                    onClick={() => {
                      if (shopPages.length > 0) {
                        navigate(`/elibrary/${shopPages[0].slug}`);
                      } else {
                        navigate("/elibrary/delhi-shops-establishments-act-1954");
                      }
                    }} 
                  />
                  <StateCard icon={<IndianRupee size={24} />} title="Professional Tax" desc="State PT applicability." bg="bg-[#D1FAE5]" textColor="text-[#10B981]" onClick={() => navigate("/ProfessionalTaxCompliance")} />
                  <StateCard icon={<HeartPulse size={24} />} title="Labour Welfare Fund" desc="LWF laws by state." bg="bg-[#FCE7F3]" textColor="text-[#EC4899]" onClick={() => navigate("/LabourWelfareFundCompliance")} />
                  <StateCard icon={<LayoutDashboard size={24} />} title="Minimum Wages (State-wise)" desc="Min Wage & VDA data." bg="bg-[#DBEAFE]" textColor="text-[#2563EB]" onClick={() => navigate("/minimum-wages")} />
                </div>

                {/* QUICK TOOLS SECTION */}
                <div className="bg-[#0B1538]/5 p-6 rounded-3xl border border-slate-100 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <Calculator className="text-[#0B1538]" size={22}/>
                    <h5 className="font-bold text-[#0B1538] uppercase text-xs tracking-widest">Quick Tools</h5>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <ToolItem label="Eligibility Checker" icon={<Scale size={16}/>}/>
                    <ToolItem label="Gratuity Calculator" icon={<IndianRupee size={16}/>}/>
                    <ToolItem label="LWF Calculator" icon={<HeartPulse size={16}/>}/>
                    <ToolItem label="PT Calculator" icon={<Percent size={16}/>}/>
                    <button className="bg-[#F97316]/10 text-[#F97316] px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-[#F97316]/20 transition">
                      All Tools <ArrowRight size={14}/>
                    </button>
                  </div>
                </div>

              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-[#E2E8F0] rounded-[2.5rem] p-10 shadow-xl">
                 <div className="flex flex-col md:flex-row gap-6 mb-10 items-end">
                    <div className="flex-1 w-full">
                       <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-3 px-1">Filter by State</label>
                       <select className="w-full bg-[#FAFBFD] border border-[#E2E8F0] p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-semibold text-[#1E293B]">
                          <option value="">Select Indian State</option>
                       </select>
                    </div>
                    <button className="bg-[#0B1538] text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center gap-3 uppercase tracking-widest">
                       <Search size={18} /> Search Rates
                    </button>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const SidebarHeader = ({ label }) => (
  <div className="pt-6 pb-2 px-4">
    <p className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider">{label}</p>
  </div>
);

const NavItem = ({ active, onClick, icon, label, hasChevron, disabled, status }) => (
  <div 
    onClick={disabled ? undefined : onClick}
    className={`flex items-center justify-between py-3.5 px-4 cursor-pointer transition-all border-l-4 ${
      active 
      ? "bg-[#FEF6F0] border-[#F97316] text-[#F97316] font-bold" 
      : disabled
      ? "border-transparent text-slate-300 cursor-not-allowed"
      : "border-transparent text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#1E293B]"
    }`}
  >
    <div className="flex items-center gap-3.5">
      {icon && <span className={active ? "text-[#F97316]" : disabled ? "text-slate-200" : "text-[#94A3B8]"}>{icon}</span>}
      <span className="text-[13px] tracking-tight">{label}</span>
      {status && <span className="text-[9px] text-slate-400 ml-1">({status})</span>}
    </div>
    {hasChevron && !disabled && <ChevronRight size={14} className={active ? "text-[#F97316]" : "text-[#CBD5E1]"} />}
  </div>
);

const ContentHeader = ({ label }) => (
  <div className="mb-8">
    <h3 className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-[0.2em]">{label}</h3>
  </div>
);

const LawCard = ({ color, icon, title, subtitle, includedActs, onClick }) => {
  const themes = {
    orange: { bg: "bg-[#FFF9F2]", border: "border-[#FFEAD1]", dot: "#FF9933", iconBg: "bg-[#FF9933]" },
    green: { bg: "bg-[#F2FDF5]", border: "border-[#D1F7DB]", dot: "#22C55E", iconBg: "bg-[#22C55E]" },
    blue: { bg: "bg-[#F2F7FF]", border: "border-[#D1E4FF]", dot: "#3B82F6", iconBg: "bg-[#3B82F6]" },
    red: { bg: "bg-[#FFF2F2]", border: "border-[#FFD1D1]", dot: "#EF4444", iconBg: "bg-[#EF4444]" }
  };
  const theme = themes[color] || themes.orange;

  return (
    <div
      onClick={onClick}
      className={`${theme.bg} ${theme.border} border p-6 rounded-[2rem] flex flex-col cursor-pointer shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all group relative overflow-hidden`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 shadow-sm ${theme.iconBg}`}>
        {React.cloneElement(icon, { size: 22, className: "text-white", strokeWidth: 2.5 })}
      </div>
      <h4 className="font-bold text-[#0B1538] text-lg mb-1 leading-tight">{title}</h4>
      
      <div 
        className="text-[12px] text-[#64748B] font-medium leading-relaxed mb-6 rich-text-subtitle line-clamp-2"
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
      
      <div className="flex-grow mb-8">
        <ul className="space-y-3">
          {includedActs?.map((act, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: theme.dot }}></div>
              <span className="text-[11px] text-[#475569] font-bold leading-tight">{act.actTitle}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-2 text-[11px] font-black text-[#F97316] uppercase tracking-wider group-hover:gap-3 transition-all">
        Explore <ArrowRight size={14} strokeWidth={3}/>
      </div>
    </div>
  );
};

const StateCard = ({ icon, title, desc, bg, textColor, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white border border-[#E2E8F0] p-6 rounded-3xl flex flex-col items-start gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group"
  >
    <div className={`p-4 rounded-2xl ${bg} ${textColor} transition-transform group-hover:scale-105`}>
      {React.cloneElement(icon, { strokeWidth: 2.5 })}
    </div>
    <div>
      <span className="text-sm font-black text-[#1E293B] block mb-1 leading-tight">{title}</span>
      <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">{desc}</p>
    </div>
    <span className="text-[10px] text-[#1D4ED8] font-black flex items-center gap-1 mt-auto uppercase tracking-tighter">
      EXPLORE <ChevronRight size={12} strokeWidth={3}/>
    </span>
  </div>
);

const ToolItem = ({ icon, label }) => (
  <div className="flex items-center gap-2.5 text-slate-600 hover:text-blue-600 cursor-pointer">
    <div className="bg-white border border-slate-100 p-2 rounded-lg text-slate-400 shadow-sm">
      {icon}
    </div>
    <span className="text-[11px] font-semibold">{label}</span>
  </div>
);

export default Knowledge;