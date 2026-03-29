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
  AlertCircle
} from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Knowledge = () => {
  const navigate = useNavigate();
  const [wageUpdates, setWageUpdates] = useState([]);

  // ==========================================
  // DO NOT CHANGE DYNAMIC LOGIC
  // ==========================================
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
  // ==========================================

  // Structured Data to match the E-Library Image
  const librarySections = [
    {
      category: "Wage & Salary Laws",
      icon: <Scale className="text-[#d59b3f]" size={24} />,
      items: [
        { title: "Minimum Wages", desc: "Understanding minimum wage rates and their applicability.", icon: <FileText size={28} /> },
        { title: "Bonus", desc: "Eligibility and calculation of bonus under labour laws.", icon: <Briefcase size={28} /> },
        { title: "Payment of Wages", desc: "Rules governing timely and correct payment of wages.", icon: <Scale size={28} /> }
      ]
    },
    {
      category: "Social Security",
      icon: <ShieldCheck className="text-blue-600" size={24} />,
      items: [
        { title: "PF", desc: "Provident Fund compliance and employer obligations.", icon: <ShieldCheck size={28} /> },
        { title: "ESIC", desc: "ESIC coverage, benefits, and contribution norms.", icon: <ShieldCheck size={28} /> },
        { title: "Gratuity", desc: "Gratuity eligibility, calculation, and payment rules.", icon: <FileText size={28} /> }
      ]
    },
    {
      category: "State Compliance",
      icon: <Building className="text-slate-600" size={24} />,
      items: [
        { title: "Professional Tax (PT)", desc: "State-wise PT applicability and deduction rules.", icon: <FileText size={28} /> },
        { title: "Shops & Establishment", desc: "Compliance requirements for shops and establishments in various states.", icon: <Building size={28} /> },
        { title: "Labour Welfare Fund (LWF)", desc: "Understanding state-wise LWF contributions and benefits.", icon: <AlertCircle size={28} /> }
      ]
    }
  ];

  return (
    <div className="bg-[#f8fbff] min-h-screen text-slate-800 font-sans pb-20">
      
      {/* HEADER SECTION (Matches Image Header) */}
      <section className="bg-[#102a43] relative overflow-hidden pt-32 pb-20 px-6 border-b-4 border-blue-900 shadow-lg">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#102a43]/90 z-0"></div>
        <div 
          className="absolute inset-0 opacity-20 z-0 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-[#d59b3f] font-medium"
          >
            E-Library
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100 font-serif"
          >
            Simplifying Labour Laws — One Topic at a Time
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mt-10 max-w-2xl mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              placeholder="Search any compliance topic..."
              className="w-full bg-white text-slate-800 rounded-lg pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#d59b3f] shadow-2xl font-medium"
            />
          </motion.div>
        </div>
      </section>

      {/* SECONDARY HEADER REPEATED IN IMAGE */}
      <div className="text-center py-12 border-b border-slate-200 bg-white shadow-sm mb-12">
         <h2 className="text-3xl font-serif text-[#102a43] mb-2">E-Library</h2>
         <p className="text-lg text-slate-600 font-serif">Simplifying Labour Laws — One Topic at a Time</p>
      </div>

      {/* E-LIBRARY GRIDS (Matches Image Content) */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {librarySections.map((section, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-serif text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-200 pb-3">
              {section.icon} {section.category}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 shrink-0 bg-[#f0f4f8] text-blue-700 rounded-xl flex items-center justify-center border border-blue-100 shadow-inner group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-lg">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-6 flex-1">{item.desc}</p>
                  <button className="bg-gradient-to-b from-[#e3b05a] to-[#c28a34] text-white text-xs px-6 py-2.5 rounded shadow-sm font-medium self-start hover:opacity-90 transition-opacity">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <hr className="max-w-7xl mx-auto my-20 border-slate-200" />

      {/* ========================================== */}
      {/* PRESERVING DYNAMIC & SIDEBAR LOGIC BELOW   */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
        
        {/* LATEST REGULATORY CHANGES (DYNAMIC WAGE UPDATES) */}
        <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif text-slate-800 mb-8 flex items-center gap-3 border-b border-slate-200 pb-3">
              <Clock className="text-blue-600" size={24} /> Latest Regulatory Changes
            </h3>

            <div className="space-y-4">
              {wageUpdates.length > 0 ? (
                wageUpdates.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ x: 5 }}
                    onClick={() => navigate(`/minimum-wages?state=${item.state}`)}
                    className="cursor-pointer p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex gap-5 items-center group"
                  >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Bell size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                        New Minimum Wage Notification – {item.state}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 mt-1">
                        Effective: {item.effectiveDate}
                      </p>
                    </div>
                    <ArrowRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </motion.div>
                ))
              ) : (
                <div className="p-10 border-2 border-dashed border-slate-200 rounded-xl text-center bg-white">
                  <p className="text-slate-500 font-medium text-sm">Syncing Statutory Data...</p>
                </div>
              )}
            </div>
        </div>

        {/* SIDEBAR TOOLS */}
        <aside className="space-y-8">
          
          {/* Compliance Health Check */}
          <div className="bg-white p-8 rounded-xl border-t-4 border-[#d59b3f] shadow-lg">
            <h4 className="font-serif text-xl mb-1 text-[#102a43]">Health Check</h4>
            <p className="text-xs font-semibold text-slate-500 mb-6 uppercase tracking-wider">Free Basic Assessment</p>
            
            <form className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1 block">No. of Employees</label>
                <input type="number" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="e.g. 50" />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1 block">States of Operation</label>
                <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-blue-500 text-sm" placeholder="e.g. Delhi, Haryana" />
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-medium text-slate-700">Contract Labour?</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-medium text-slate-700">Covered under EPF/ESI?</span>
                </label>
              </div>
              <button className="w-full bg-[#102a43] text-white py-3 rounded-lg font-semibold text-sm mt-4 hover:bg-blue-900 transition-colors shadow-md">
                Get Result
              </button>
            </form>
          </div>

          {/* Deadlines */}
          <div className="bg-[#102a43] p-8 rounded-xl shadow-lg text-white border-b-4 border-[#d59b3f]">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-[#d59b3f]" size={20} />
              <h4 className="font-serif text-xl">Deadlines</h4>
            </div>
            <div className="space-y-3">
              {[{ date: "15", task: "PF & ESIC Payment" }, { date: "20", task: "GSTR-3B Filing" }].map((e, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-3 rounded-lg border border-white/5">
                  <span className="text-[#d59b3f] font-bold text-lg w-6 text-center">{e.date}</span>
                  <span className="text-sm font-medium text-blue-50">{e.task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Central Labour Laws List */}
          <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h4 className="font-serif text-lg text-[#102a43] mb-4 border-b border-slate-100 pb-2">Central Laws</h4>
            <div className="space-y-3">
              {["Maternity Benefit", "Gratuity Act", "Bonus Act", "Contract Labour", "Industrial Disputes"].map((law) => (
                <div key={law} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm font-medium text-slate-600 group-hover:text-blue-700 transition-colors">{law}</span>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-blue-500" />
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