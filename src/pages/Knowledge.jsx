import { motion } from "framer-motion";
import { 
  BookOpen, Bell, Calendar, Search, ArrowRight, 
  Clock, Download, Mail, ChevronRight, Bookmark 
} from "lucide-react";

const Knowledge = () => {
  const categories = ["All Updates", "GST", "Labour Law", "Payroll", "Income Tax"];
  
  const articles = [
    {
      title: "New GSTR-3B Filing Requirements for 2026",
      desc: "Detailed breakdown of the latest changes in GST returns and how it impacts small businesses.",
      tag: "GST",
      date: "Jan 24, 2026",
      readTime: "5 min read",
    },
    {
      title: "EPF Contribution Rate Updates",
      desc: "Understanding the new statutory contribution limits for employers and employees under Labour Law.",
      tag: "Labour Law",
      date: "Jan 20, 2026",
      readTime: "8 min read",
    },
    {
      title: "Annual Bonus Act Compliance Guide",
      desc: "A comprehensive checklist for calculating and distributing bonuses according to the latest norms.",
      tag: "Payroll",
      date: "Jan 15, 2026",
      readTime: "6 min read",
    }
  ];

  const resources = [
    { title: "GST Audit Checklist 2025", type: "PDF", size: "1.2 MB" },
    { title: "Labour Law Compliance Calendar", type: "XLS", size: "850 KB" },
    { title: "Payroll Deduction Guide", type: "PDF", size: "2.1 MB" },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 pb-20">
      {/* 1. Enhanced Header Section */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5 bg-slate-900/30 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full -mr-48 -mt-48" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Regulatory Updates
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
              Knowledge <span className="text-emerald-400">Hub</span>
            </h1>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Expert insights, compliance checklists, and the latest statutory changes 
              curated for business growth and risk mitigation.
            </p>
            
            <div className="relative max-w-xl group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search for articles, laws, or forms..."
                className="w-full bg-slate-800 border border-slate-700 p-5 pl-14 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all text-white shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-16 grid lg:grid-cols-3 gap-12">
        
        {/* 2. Main Articles Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Category Filter */}
          <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-white/5">
            {categories.map((cat, i) => (
              <button 
                key={i} 
                className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all border ${
                  i === 0 
                  ? "bg-white text-slate-950 border-white" 
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 p-8 border border-white/10 overflow-hidden group cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Bookmark size={120} />
            </div>
            <div className="relative z-10">
              <span className="bg-emerald-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase mb-6 inline-block">Featured Analysis</span>
              <h2 className="text-3xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">Understanding the 2026 Labour Code Transition</h2>
              <p className="text-slate-400 mb-6 max-w-xl">A complete guide on how the four new labour codes will impact employee take-home salary and employer contribution liabilities.</p>
              <div className="flex items-center gap-4 text-sm font-bold text-white">
                Read Full Analysis <ArrowRight size={18} />
              </div>
            </div>
          </motion.div>

          {/* Article List */}
          <div className="grid gap-6">
            {articles.map((post, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="group p-6 bg-slate-900/40 border border-slate-800 rounded-3xl flex gap-6 items-center hover:border-emerald-500/30 transition-all cursor-pointer"
              >
                <div className="hidden sm:flex w-20 h-20 bg-slate-800 rounded-2xl items-center justify-center shrink-0 group-hover:bg-emerald-500/10 transition-colors">
                  <BookOpen className="text-emerald-400" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-black text-emerald-400 uppercase tracking-tighter bg-emerald-500/10 px-2 py-0.5 rounded-md">{post.tag}</span>
                    <span className="text-slate-500 text-xs flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{post.title}</h3>
                  <p className="text-slate-400 text-sm mb-0 line-clamp-1">{post.desc}</p>
                </div>
                <ChevronRight className="text-slate-700 group-hover:text-emerald-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Enhanced Sidebar */}
        <aside className="space-y-8">
          
          {/* Deadlines Widget */}
          
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-white mb-8">
                <Calendar size={24} />
                <h4 className="font-bold text-xl tracking-tight">Compliance Calendar</h4>
              </div>
              <div className="space-y-4">
                {[
                  { date: "Feb 07", event: "TDS Payment" },
                  { date: "Feb 11", event: "GSTR-1 Monthly" },
                  { date: "Feb 15", event: "PF/ESIC Deposit" },
                  { date: "Feb 20", event: "GSTR-3B Filing" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/15 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between border border-white/10 group hover:bg-white/25 transition-all cursor-default">
                    <span className="font-bold text-white">{item.date}</span>
                    <span className="text-sm font-medium text-blue-50">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Downloadable Resources Section */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem]">
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <Download size={20} className="text-emerald-400" /> Free Resources
            </h4>
            <div className="space-y-4">
              {resources.map((res, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer group">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{res.title}</span>
                    <span className="text-[10px] text-slate-500 uppercase">{res.type} • {res.size}</span>
                  </div>
                  <Download size={16} className="text-slate-600 group-hover:text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Opt-in */}
          <div className="bg-emerald-500 p-8 rounded-[2rem] text-slate-950">
            <Mail size={32} className="mb-4" />
            <h4 className="font-black text-2xl mb-2 leading-tight">Weekly Compliance Brief</h4>
            <p className="text-emerald-950/70 text-sm mb-6 font-medium">Join 2,000+ business owners getting updates directly in their inbox.</p>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-emerald-600/20 border border-emerald-700/30 p-4 rounded-xl placeholder:text-emerald-950/50 outline-none mb-3 text-sm font-bold"
            />
            <button className="w-full bg-slate-950 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">Subscribe Now</button>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Knowledge;