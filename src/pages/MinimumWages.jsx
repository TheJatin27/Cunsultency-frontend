import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { motion } from "framer-motion";
import { MapPin, IndianRupee, Info, Search, ShieldCheck, ChevronRight } from "lucide-react";

const MinimumWages = () => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [wages, setWages] = useState([]);

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
    <div className="bg-slate-950 min-h-screen text-slate-200 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 px-6 border-b border-white/5 bg-slate-900/30 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -ml-48 -mt-48" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ShieldCheck size={14} /> Statutory Compliance
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Minimum <span className="text-emerald-400">Wages</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Access real-time statutory minimum wage data across various states and labour categories. 
              Ensure payroll compliance with the latest government notifications.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* 2. State Selection Filter */}
        <div className="mb-12">
          <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 block">
            Select Jurisdiction
          </label>
          <div className="flex flex-wrap gap-3">
            {states.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedState(s);
                  loadWages(s);
                }}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                  selectedState === s
                    ? "bg-emerald-500 text-slate-950 border-emerald-500 shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white"
                }`}
              >
                {s}
              </button>
            ))}
            {states.length === 0 && (
              <p className="text-slate-600 italic text-sm">No states found in database...</p>
            )}
          </div>
        </div>

        {/* 3. Main Content Display */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Data Grid */}
          <div className="lg:col-span-3">
            {wages.length > 0 ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden backdrop-blur-sm"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-900 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-white/5">
                        <th className="py-6 px-8">Labour Class</th>
                        <th className="py-6 px-4 text-right">Basic / Mo</th>
                        <th className="py-6 px-4 text-right">VDA / Mo</th>
                        <th className="py-6 px-4 text-right">Total / Mo</th>
                        <th className="py-6 px-8 text-right text-emerald-400">Total / Day</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-medium">
                      {wages.map((w, i) => (
                        <tr key={i} className="group hover:bg-emerald-500/5 transition-colors">
                          <td className="py-5 px-8 text-white font-bold">{w.class}</td>
                          <td className="py-5 px-4 text-right text-slate-400 font-mono">₹{w.basicPerMonth}</td>
                          <td className="py-5 px-4 text-right text-slate-400 font-mono">₹{w.vdaPerMonth}</td>
                          <td className="py-5 px-4 text-right text-white font-bold font-mono">₹{w.totalPerMonth}</td>
                          <td className="py-5 px-8 text-right text-emerald-400 font-black font-mono">
                            ₹{w.totalPerDay}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ) : (
              <div className="h-64 border-2 border-dashed border-slate-800 rounded-[2.5rem] flex flex-col items-center justify-center text-center p-8 bg-slate-900/20">
                <Search className="text-slate-700 mb-4" size={40} />
                <h3 className="text-lg font-bold text-slate-500">Select a state to view wage structures</h3>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <aside className="space-y-6">
            <div className="bg-emerald-500 p-8 rounded-[2rem] text-slate-950">
              <Info size={32} className="mb-4" />
              <h4 className="font-black text-2xl mb-2 leading-tight">Compliance Note</h4>
              <p className="text-emerald-950/70 text-sm font-medium leading-relaxed">
                Minimum wages are revised periodically (typically in April and October) based on VDA adjustments. Ensure your payroll reflects these changes to avoid statutory penalties.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-[2rem]">
              <div className="flex items-center gap-3 text-white mb-4">
                <IndianRupee size={20} className="text-emerald-400" />
                <span className="font-bold">Summary</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 uppercase font-bold tracking-tighter">Selected State</span>
                  <span className="text-white font-bold">{selectedState || "None"}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500 uppercase font-bold tracking-tighter">Revision Cycle</span>
                  <span className="text-white font-bold">Bi-Annual</span>
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