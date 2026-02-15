import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { MapPin, IndianRupee, Info, Search, ShieldCheck, Sparkles, TrendingUp, AlertCircle } from "lucide-react";

const MinimumWages = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [wages, setWages] = useState([]);

  // LOGIC REMAINS UNCHANGED
  useEffect(() => {
    const loadStates = async () => {
      const snap = await getDocs(collection(db, "minimumWages"));
      const uniqueStates = [
        ...new Set(snap.docs.map((d) => d.data().state)),
      ];
      setStates(uniqueStates);
    };
    loadStates();
  }, []);

  const loadWages = async (state) => {
    const q = query(
      collection(db, "minimumWages"),
      where("state", "==", state)
    );
    const snap = await getDocs(q);
    if (!snap.empty) {
      setWages(snap.docs[0].data().wages);
    }
  };

  return (
    <div className="bg-[#FCFAF7] min-h-screen text-slate-900 pb-20 pt-20">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-6">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Statutory Intelligence</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
              Minimum <span className="text-emerald-500 italic font-light">Wages.</span>
            </h1>
            
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
              Access real-time statutory data across all Indian jurisdictions. 
              Ensure your payroll remains bulletproof against audits with the latest government notifications.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        {/* 2. State Selection Filter */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <MapPin size={16} className="text-slate-400" />
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
              Select Jurisdiction
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {states.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedState(s);
                  loadWages(s);
                }}
                className={`px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border ${
                  selectedState === s
                    ? "bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200 scale-105"
                    : "bg-white text-slate-500 border-slate-100 hover:border-emerald-500 hover:text-emerald-600 shadow-sm"
                }`}
              >
                {s}
              </button>
            ))}
            {states.length === 0 && (
              <div className="flex items-center gap-3 py-4 text-slate-400 italic">
                <div className="w-2 h-2 bg-slate-200 rounded-full animate-pulse" />
                No states found in database...
              </div>
            )}
          </div>
        </div>

        {/* 3. Main Content Display */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Data Grid */}
          <div className="lg:col-span-3">
            {wages.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)]"
              >
                <div className="bg-slate-50 px-10 py-6 border-b border-slate-100 flex justify-between items-center">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                      <span className="text-xs font-black uppercase tracking-widest text-slate-500">Live Wage Table: {selectedState}</span>
                   </div>
                   <button className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                      Export CSV
                   </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        <th className="py-8 px-10">Labour Class</th>
                        <th className="py-8 px-4 text-right">Basic</th>
                        <th className="py-8 px-4 text-right">VDA</th>
                        <th className="py-8 px-4 text-right">Total Monthly</th>
                        <th className="py-8 px-10 text-right text-emerald-600 font-black">Daily Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {wages.map((w, i) => (
                        <tr key={i} className="group hover:bg-emerald-50/50 transition-colors">
                          <td className="py-6 px-10">
                            <span className="text-slate-900 font-black tracking-tight block">{w.class}</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Skilled Category</span>
                          </td>
                          <td className="py-6 px-4 text-right text-slate-500 font-bold">₹{w.basicPerMonth}</td>
                          <td className="py-6 px-4 text-right text-slate-500 font-bold">₹{w.vdaPerMonth}</td>
                          <td className="py-6 px-4 text-right text-slate-900 font-black">₹{w.totalPerMonth}</td>
                          <td className="py-6 px-10 text-right">
                            <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-xl text-sm font-black inline-block">
                              ₹{w.totalPerDay}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ) : (
              <div className="h-[500px] border-4 border-dashed border-slate-100 rounded-[4rem] flex flex-col items-center justify-center text-center p-12 bg-white/50">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-200 mb-6">
                   <Search size={40} />
                </div>
                <h3 className="text-2xl font-black text-slate-300 tracking-tight uppercase">Jurisdiction Not Selected</h3>
                <p className="text-slate-400 text-sm mt-2 max-w-xs">Please select a state above to pull the latest statutory wage data from our cloud database.</p>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-8">
            <div className="bg-emerald-500 p-10 rounded-[3rem] text-slate-950 shadow-xl shadow-emerald-100 relative group overflow-hidden">
              <TrendingUp size={80} className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <AlertCircle size={32} className="mb-6" />
                <h4 className="font-black text-2xl mb-4 leading-none tracking-tighter">Compliance Alert</h4>
                <p className="text-emerald-950 text-sm font-medium leading-relaxed opacity-80 mb-6">
                  Minimum wages are typically revised in **April and October**. Using outdated rates can lead to severe statutory penalties and labor disputes.
                </p>
                <div className="h-1 w-full bg-emerald-600/30 rounded-full" />
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-[3rem] shadow-sm">
              <div className="flex items-center gap-3 text-slate-900 mb-8 pb-4 border-b border-slate-50">
                <IndianRupee size={20} className="text-emerald-500" />
                <span className="font-black uppercase text-xs tracking-widest">Summary View</span>
              </div>
              <div className="space-y-6">
                <div>
                  <span className="text-slate-400 uppercase font-black tracking-widest text-[10px] block mb-1">Current State</span>
                  <span className="text-slate-900 font-black text-lg tracking-tight">{selectedState || "Pending"}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-black tracking-widest text-[10px] block mb-1">VDA Update</span>
                  <span className="text-emerald-600 font-black text-lg tracking-tight">Active</span>
                </div>
                <div className="pt-4">
                   <button className="w-full bg-slate-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
                      Download Gazetted PDF
                   </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MinimumWages;