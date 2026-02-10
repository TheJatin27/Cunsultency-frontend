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
} from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Knowledge = () => {
  const navigate = useNavigate();
  const [wageUpdates, setWageUpdates] = useState([]);

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

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 pb-20">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 border-b border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            Knowledge <span className="text-emerald-400">Hub</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10">
            Latest statutory updates and compliance insights.
          </p>

          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              placeholder="Search updates..."
              className="w-full bg-slate-800 border border-slate-700 p-5 pl-14 rounded-2xl"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-3 gap-12">
        {/* MAIN */}
        <div className="lg:col-span-2 space-y-8">
          {/* 🔔 Minimum Wage Updates */}
          {wageUpdates.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ x: 8 }}
              onClick={() => navigate(`/minimum-wages?state=${item.state}`)}
              className="cursor-pointer p-6 bg-slate-900 border border-emerald-500/30 rounded-3xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Bell className="text-emerald-400" size={18} />
                <span className="text-xs font-black text-emerald-400 uppercase">
                  Labour Law Update
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                New Minimum Wage – {item.state}
              </h3>
              <p className="text-slate-400 text-sm">
                Effective from {item.effectiveDate}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl">
            <h4 className="font-bold text-xl text-white mb-6">
              Compliance Calendar
            </h4>
            {["TDS Payment", "GSTR-1", "PF / ESIC", "GSTR-3B"].map((e, i) => (
              <div
                key={i}
                className="bg-white/15 p-4 rounded-xl mb-3 text-white"
              >
                {e}
              </div>
            ))}
          </div>

          <div className="bg-emerald-500 p-8 rounded-2xl text-slate-950">
            <Mail size={28} className="mb-4" />
            <h4 className="font-black text-xl mb-2">
              Weekly Compliance Brief
            </h4>
            <input
              placeholder="Email address"
              className="w-full p-4 rounded-xl mb-3"
            />
            <button className="w-full bg-slate-950 text-white py-3 rounded-xl">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Knowledge;
