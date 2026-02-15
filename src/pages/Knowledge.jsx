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
  Scale
} from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Knowledge = () => {
  const navigate = useNavigate();
  const [wageUpdates, setWageUpdates] = useState([]);

  // LOGIC REMAINS UNCHANGED
  useEffect(() => {
    const fetchWageUpdates = async () => {
      const q = query(
        collection(db, "minimumWages"),
        orderBy("createdAt", "desc")
      );
      const snap = await getDocs(q);
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setWageUpdates(data);
    };
    fetchWageUpdates();
  }, []);

  // NEW RESOURCE DATA
  const resources = [
    {
      title: "Minimum Wages",
      items: ["Haryana Minimum Wages", "Delhi Minimum Wages", "Rajasthan Minimum Wages"],
      icon: <Scale size={20} className="text-blue-500" />
    },
    {
      title: "EPF & ESI Resources",
      items: ["EPF Wage Ceiling", "EPF Contribution Structure", "ESI Coverage & Rates", "Important Circulars"],
      icon: <ShieldCheck size={20} className="text-emerald-500" />
    },
    {
      title: "State Compliance",
      items: ["Shops & Establishment", "Professional Tax (PT)", "LWF State-wise"],
      icon: <Library size={20} className="text-purple-500" />
    },
    {
      title: "New Labour Codes",
      items: ["Code on Wages", "Code on Social Security", "Industrial Relations Code", "OSH Code"],
      icon: <Zap size={20} className="text-amber-500" />
    }
  ];

  return (
    <div className="bg-[#FCFAF7] min-h-screen text-slate-900 pb-20 pt-20">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm w-fit"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Resource Center</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
            Knowledge <span className="text-emerald-500 italic font-light">Hub.</span>
          </h1>
          
          <p className="text-slate-500 text-lg max-w-2xl mb-12 font-medium">
            Stay ahead of India's evolving statutory landscape with real-time updates, compliance calendars, and expert labor law insights.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 max-w-3xl">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                placeholder="Search labor laws, states, or compliance topics..."
                className="w-full bg-white border border-slate-200 p-6 pl-14 rounded-[2rem] shadow-sm focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all outline-none font-medium"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        
        {/* LEFT & CENTER: MAIN CONTENT AREA */}
        <div className="lg:col-span-2 space-y-16">
          
          {/* 1. E-LIBRARY SECTION */}
          <section>
            <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <BookOpen size={14} /> 📚 Resources / E-Library
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((res, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    {res.icon}
                    <h3 className="font-black text-lg tracking-tight">{res.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {res.items.map((item, i) => (
                      <li key={i} className="flex items-center justify-between text-sm font-bold text-slate-600 group cursor-pointer hover:text-emerald-600 transition-colors">
                        {item} <Download size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Statutory Formats Table-ish List */}
            <div className="mt-8 p-10 bg-slate-900 rounded-[3rem] text-white">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <FileText size={20} className="text-emerald-400" /> Statutory Registers & Formats
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["EPF/ESI Registers", "CLRA Registers", "Wage Registers", "Muster Roll", "Leave Register", "Bonus Register", "Maternity Forms", "Gratuity Forms", "PT & LWF Formats"].map((form) => (
                  <div key={form} className="text-[10px] font-black uppercase tracking-widest p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 cursor-pointer transition-colors text-center">
                    {form}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 2. LATEST UPDATES (YOUR ORIGINAL FEED) */}
          <section>
            <div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2">
                <Clock size={14} /> Latest Regulatory Changes
              </h2>
            </div>

            <div className="space-y-6">
              {wageUpdates.length > 0 ? (
                wageUpdates.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 10 }}
                    onClick={() => navigate(`/minimum-wages?state=${item.state}`)}
                    className="group cursor-pointer p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm transition-all flex gap-6 items-center"
                  >
                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <Bell size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                        New Minimum Wage Notification – {item.state}
                      </h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                        Effective: {item.effectiveDate}
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-slate-300 group-hover:translate-x-2 transition-transform" />
                  </motion.div>
                ))
              ) : (
                <div className="p-10 border-2 border-dashed border-slate-200 rounded-[2.5rem] text-center">
                  <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Syncing Statutory Data...</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-10">
          
          {/* 3. COMPLIANCE HEALTH CHECK FORM */}
          <div className="bg-white p-10 rounded-[3rem] border-2 border-emerald-500 shadow-xl shadow-emerald-100">
            <h4 className="font-black text-2xl mb-2 tracking-tighter">Health Check</h4>
            <p className="text-xs font-bold text-slate-500 mb-8 uppercase tracking-widest">Free Basic Assessment</p>
            
            <form className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">No. of Employees</label>
                <input type="number" className="w-full p-4 mt-1 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-emerald-500 font-bold" placeholder="e.g. 50" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 ml-2">States of Operation</label>
                <input type="text" className="w-full p-4 mt-1 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-emerald-500 font-bold" placeholder="e.g. Delhi, Haryana" />
              </div>
              <div className="flex flex-col gap-3 pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Contract Labour?</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-emerald-600" />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Covered under EPF/ESI?</span>
                </label>
              </div>
              <button className="w-full bg-emerald-500 text-slate-950 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] mt-4 hover:bg-slate-900 hover:text-white transition-all">
                Get Result
              </button>
            </form>
          </div>

          {/* Monthly Deadlines (From your original code) */}
          <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl text-white">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-emerald-400" size={24} />
              <h4 className="font-black text-xl tracking-tight">Deadlines</h4>
            </div>
            <div className="space-y-4">
              {[{ date: "15", task: "PF & ESIC Payment" }, { date: "20", task: "GSTR-3B Filing" }].map((e, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-emerald-400 font-black text-lg">{e.date}</span>
                  <span className="text-xs font-bold text-slate-200">{e.task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Central Labour Laws List */}
          <div className="p-10 bg-white border border-slate-100 rounded-[3rem]">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Central Laws</h4>
            <div className="space-y-4">
              {["Maternity Benefit", "Gratuity Act", "Bonus Act", "Contract Labour", "Industrial Disputes"].map((law) => (
                <div key={law} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-black text-slate-700 group-hover:text-emerald-600 transition-colors">{law}</span>
                  <ChevronRight size={14} className="text-slate-300" />
                </div>
              ))}
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
};

export default Knowledge;