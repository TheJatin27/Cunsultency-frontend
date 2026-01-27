import { motion } from "framer-motion";
import { BookOpen, Bell, Calendar, Search, ArrowRight, Clock } from "lucide-react"; // npm install lucide-react

const Knowledge = () => {
  const categories = ["All Updates", "GST", "Labour Law", "Payroll", "Income Tax"];
  
  const articles = [
    {
      title: "New GSTR-3B Filing Requirements for 2026",
      desc: "Detailed breakdown of the latest changes in GST returns and how it impacts small businesses.",
      tag: "GST",
      date: "Jan 24, 2026",
      readTime: "5 min read",
      color: "blue"
    },
    {
      title: "EPF Contribution Rate Updates",
      desc: "Understanding the new statutory contribution limits for employers and employees under Labour Law.",
      tag: "Labour Law",
      date: "Jan 20, 2026",
      readTime: "8 min read",
      color: "emerald"
    },
    {
      title: "Annual Bonus Act Compliance Guide",
      desc: "A comprehensive checklist for calculating and distributing bonuses according to the latest norms.",
      tag: "Payroll",
      date: "Jan 15, 2026",
      readTime: "6 min read",
      color: "purple"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 pb-20">
      {/* Header Section */}
      <section className="relative py-20 px-6 border-b border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-extrabold text-white mb-6">
              Knowledge <span className="text-emerald-400">Hub</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights, regulatory updates, and 
              compliance checklists curated by our team of specialists.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search for laws, rules, or penalties..."
                className="w-full bg-slate-800 border border-slate-700 p-4 pl-12 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-white"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-12">
        
        {/* Main Articles Content (Left 2 Columns) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                  i === 0 ? "bg-emerald-500 text-slate-950 border-emerald-500" : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            {articles.map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-3xl flex gap-6 items-start hover:border-emerald-500/30 transition-all cursor-pointer"
              >
                <div className="hidden sm:flex w-16 h-16 bg-slate-800 rounded-2xl items-center justify-center shrink-0">
                  <BookOpen className="text-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{post.tag}</span>
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <Clock size={14} /> {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar (Right 1 Column) */}
        <aside className="space-y-8">
          {/* Compliance Calendar Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-3xl shadow-xl">
            <div className="flex items-center gap-3 text-white mb-6">
              <Calendar size={24} />
              <h4 className="font-bold text-lg">Upcoming Deadlines</h4>
            </div>
            <div className="space-y-4">
              {[
                { date: "Feb 07", event: "TDS/TCS Deposit" },
                { date: "Feb 11", event: "GSTR-1 (Monthly)" },
                { date: "Feb 15", event: "PF/ESIC Contribution" }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-3 rounded-xl flex items-center gap-4">
                  <span className="font-bold text-blue-100">{item.date}</span>
                  <span className="text-sm text-white">{item.event}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Penalty Alerts */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
            <div className="flex items-center gap-3 text-red-400 mb-6">
              <Bell size={24} />
              <h4 className="font-bold text-lg">Regulatory Alerts</h4>
            </div>
            <p className="text-sm text-slate-400 mb-4 italic">
              "Failure to link PAN with Aadhaar may lead to GST registration suspension."
            </p>
            <button className="text-xs font-bold text-slate-300 hover:text-white underline">View all warnings</button>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Knowledge;