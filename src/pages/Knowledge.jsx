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
  Download,
  AlertCircle,
  ArrowRight,
  Plus,
  Gavel,
  BookUser,
  HelpCircle,
  FileText,
  Percent,
  TrendingUp,
  Calculator
} from "lucide-react";
import { db } from "../firebase"; // Adjust your firebase path
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit
} from "firebase/firestore";

import { useNavigate } from "react-router-dom";

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);
  const [wageUpdates, setWageUpdates] = useState([]);
  const [libraryPages, setLibraryPages] = useState([]);
const navigate = useNavigate();

  // Fetch Logic (Keeping the connection to database structure)
  useEffect(() => {
    const fetchWages = async () => {
      try {
        const q = query(collection(db, "minimumWages"), orderBy("createdAt", "desc"), limit(4));
        const snap = await getDocs(q);
        const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setWageUpdates(data);
        setLoading(false);
      } catch (err) {
        console.error("Firebase Error:", err);
        setLoading(false);
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
    console.error(err);
  }
};

fetchLibraryPages();

    fetchWages();
  }, []);

  return (
    /* PARENT: Locks screen and aligns flush to black header */
    <div className="flex h-[calc(100vh-80px)] w-full bg-[#FFFFFF] overflow-hidden font-sans text-[#1E293B]">
      
      {/* --- SIDE NAVIGATION (Fixed) --- */}
      <aside className="w-72 bg-[#FFFFFF] border-r border-[#E2E8F0] flex-shrink-0 flex flex-col h-full z-20">
        {/* SIDEBAR HEADER - EXACT NAVY COLOR */}
        <div className="p-4 bg-[#0B1538] text-white flex items-center gap-3">
          <BookUser size={18} className="text-white" />
          <span className="font-extrabold text-xs uppercase tracking-[0.2em]">E-LIBRARY</span>
        </div>
        
        {/* Scrollable Items */}
        <div className="flex-1 overflow-y-auto pt-3 scrollbar-thin scrollbar-thumb-slate-200">
          <nav className="space-y-0.5">
            <NavItem 
              active={activeTab === "overview"} 
              onClick={() => setActiveTab("overview")} 
              icon={<Building2 size={18}/>} 
              label="Overview" 
            />

            {/* CENTRAL LAWS */}
            <SidebarHeader label="Labour Codes (Central Laws)" />
            <NavItem label="Code on Wages, 2019" icon={<Scale size={18}/>} hasChevron />
            <NavItem label="Code on Social Security, 2020" icon={<ShieldCheck size={18}/>} hasChevron />
            <NavItem label="OSH Code, 2020" icon={<HardHat size={18}/>} hasChevron />
            <NavItem label="Industrial Relations Code, 2020" icon={<Users size={18}/>} hasChevron />

            {/* STATE LAWS */}
            <SidebarHeader label="State Compliance (State Laws)" />
            <NavItem label="Shops & Establishments" icon={<Building2 size={18}/>} hasChevron />
            <NavItem label="Professional Tax" icon={<IndianRupee size={18}/>} hasChevron />
            <NavItem label="Labour Welfare Fund" icon={<HeartPulse size={18}/>} hasChevron />
            <NavItem 
              active={activeTab === "min-wages"} 
              onClick={() => setActiveTab("min-wages")} 
              icon={<LayoutDashboard size={18}/>}
              label="Minimum Wages (State-wise)" 
              hasChevron 
            />

            {/* RESOURCES */}
            <SidebarHeader label="Other Resources" />
            <NavItem label="Labour Law Guide" icon={<Gavel size={18}/>} disabled status="Coming Soon" />
            <NavItem label="Case Studies" icon={<BookUser size={18}/>} disabled status="Coming Soon" />
            <NavItem label="FAQs" icon={<HelpCircle size={18}/>} disabled status="Coming Soon" />

          </nav>
        </div>

        {/* SIDEBAR FOOTER: NEED HELP */}
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

      {/* --- MAIN CONTENT (Scrollable) --- */}
      <main className="flex-1 overflow-y-auto bg-white p-8 lg:p-12 xl:p-14">
        <div className="max-w-[1500px] mx-auto">
          
          {/* HEADER AREA */}
          <div className="flex flex-col xl:flex-row justify-between items-start gap-8 mb-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4">
                <BookUser className="text-[#0B1538]" size={32} strokeWidth={2.5}/>
                <h1 className="text-4xl font-black text-[#0B1538] tracking-tighter uppercase">E-Library</h1>
              </div>
              <p className="text-[#64748B] text-xl font-medium leading-tight">Your one-stop destination for all Labour Laws in India.</p>
              <p className="text-[#94A3B8] text-sm mt-2 tracking-wide font-medium">Explore Acts, Rules, Notifications & Practical Notes — all in one place.</p>
            </div>

            {/* WHAT'S NEW CARD - EXACT MATCH SHADOW & BORDER */}
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
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 5 }} 
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {/* --- CENTRAL LAWS --- */}
               <ContentHeader label="Labour Codes (Central Laws)" />

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

  {libraryPages.map((item, index) => (
    <LawCard
      key={item.id}
      color={
        index % 4 === 0
          ? "orange"
          : index % 4 === 1
          ? "green"
          : index % 4 === 2
          ? "blue"
          : "red"
      }

      icon={
        index % 4 === 0 ? (
          <Scale />
        ) : index % 4 === 1 ? (
          <ShieldCheck />
        ) : index % 4 === 2 ? (
          <HardHat />
        ) : (
          <Users />
        )
      }

      title={item.title}
      subtitle={item.shortDescription}
      points={item.practicalNotes?.slice(0, 4) || []}

      onClick={() =>
        navigate(`/library/${item.slug}`)
      }
    />
  ))}
</div>

                {/* --- STATE LAWS --- */}
                <ContentHeader label="State Compliance (State Laws)" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <StateCard icon={<Building2 size={24} className="text-[#8B5CF6]" />} title="Shops & Establishments" desc="State-specific Shop laws." bg="bg-[#EDE9FE]" />
                  <StateCard icon={<IndianRupee size={24} className="text-[#10B981]" />} title="Professional Tax" desc="State PT applicability." bg="bg-[#D1FAE5]" />
                  <StateCard icon={<HeartPulse size={24} className="text-[#EC4899]" />} title="Labour Welfare Fund" desc="LWF laws by state." bg="bg-[#FCE7F3]" />
                  <StateCard icon={<LayoutDashboard size={24} className="text-[#2563EB]" />} title="Minimum Wages (State-wise)" desc="Min Wage & VDA data." bg="bg-[#DBEAFE]" onClick={() => setActiveTab("min-wages")} />
                </div>

                {/* --- QUICK TOOLS --- */}
                <div className="bg-[#FAFBFD] p-6 rounded-3xl border border-slate-100 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <Calculator className="text-[#0B1538]" size={22}/>
                    <h5 className="font-bold text-[#0B1538] uppercase text-xs tracking-widest">Quick Tools</h5>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                    <ToolItem label="Eligibility Checker" icon={<Scale size={16}/>}/>
                    <ToolItem label="Gratuity Calculator" icon={<IndianRupee size={16}/>}/>
                    <ToolItem label="LWF Calculator" icon={<HeartPulse size={16}/>}/>
                    <ToolItem label="PT Calculator" icon={<Percent size={16}/>}/>
                    <button className="bg-orange-50 text-orange-600 px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 hover:bg-orange-100 transition">
                      All Tools <ArrowRight size={14}/>
                    </button>
                  </div>
                </div>

              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-[#E2E8F0] rounded-[2.5rem] p-10 shadow-xl">
                 {/* SEARCH INTERFACE - KEEPING PREVIOUS DESIGN */}
                 <div className="flex flex-col md:flex-row gap-6 mb-10 items-end">
                    <div className="flex-1 w-full">
                       <label className="block text-[11px] font-bold text-[#64748B] uppercase tracking-widest mb-3 px-1">Filter by State</label>
                       <select className="w-full bg-[#FAFBFD] border border-[#E2E8F0] p-4 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 font-semibold text-[#1E293B]">
                          <option value="">Select Indian State</option>
                       </select>
                    </div>
                    <button className="bg-[#0B1538] text-white px-10 py-4 rounded-2xl font-black text-sm flex items-center gap-3 hover:bg-black transition-all active:scale-95 shadow-lg shadow-blue-900/10 uppercase tracking-widest">
                       <Search size={18} /> Search Rates
                    </button>
                 </div>
                 {/* TABLE... */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// --- SIDEBAR HELPER COMPONENTS ---

const SidebarHeader = ({ label }) => (
  <div className="pt-6 pb-2 px-4">
    <p className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider">{label}</p>
  </div>
);

const NavItem = ({ active, onClick, icon, label, hasChevron, disabled, status }) => (
  <div 
    onClick={onClick}
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

// --- CONTENT HELPER COMPONENTS ---

const ContentHeader = ({ label }) => (
  <div className="mb-8">
    <h3 className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-[0.2em]">{label}</h3>
  </div>
);
const LawCard = ({
  color,
  icon,
  title,
  subtitle,
  points,
  onClick
}) => {
  const themes = {
    orange: "border-orange-100 bg-orange-50/20 text-orange-600 shadow-orange-100/30",
    green: "border-green-100 bg-green-50/20 text-green-600 shadow-green-100/30",
    blue: "border-blue-100 bg-blue-50/20 text-blue-600 shadow-blue-100/30",
    red: "border-red-100 bg-red-50/20 text-red-600 shadow-red-100/30"
  };

  return (
   <div
  onClick={onClick}
  className="bg-white border border-[#E2E8F0] p-8 rounded-[2.5rem] flex flex-col cursor-pointer shadow-[0_4px_25px_-5px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border-2 ${themes[color]}`}>
        {React.cloneElement(icon, { size: 24, strokeWidth: 2.5 })}
      </div>
      <h4 className="font-bold text-[#1E293B] text-lg mb-2 leading-tight">{title}</h4>
      <p className="text-[12px] text-[#64748B] font-medium leading-relaxed mb-8 flex-grow">{subtitle}</p>
      
      <ul className="space-y-3.5 mb-10">
        {points.map(p => (
          <li key={p} className="flex items-start gap-2.5 group/point cursor-pointer">
            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${color === 'orange' ? 'bg-[#F97316]' : 'bg-[#CBD5E1] group-hover/point:bg-blue-400 transition-colors'}`}></div>
            <span className="text-[11px] text-[#64748B] font-semibold group-hover/point:text-[#1D4ED8] transition-colors">{p}</span>
          </li>
        ))}
      </ul>

      <button className="text-[11px] font-black text-[#1E293B] flex items-center gap-2 group-hover:text-[#F97316] transition-colors uppercase tracking-tight">
        EXPLORE <ChevronRight size={14} strokeWidth={3}/>
      </button>
    </div>
  );
};

const StateCard = ({ icon, title, desc, bg, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white border border-[#E2E8F0] p-6 rounded-3xl flex flex-col items-start gap-4 hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group"
  >
    <div className={`p-4 rounded-2xl ${bg} transition-transform group-hover:scale-105`}>
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