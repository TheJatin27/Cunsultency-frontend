import { motion } from "framer-motion";
import { Target, Eye, Award, CheckCircle2, History, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    { title: "Integrity", desc: "Honest advisory even when the regulatory landscape is tough.", icon: <ShieldCheck size={28} />, color: "bg-blue-50 text-blue-600" },
    { title: "Precision", desc: "Zero-error filings and meticulous record-keeping for total peace of mind.", icon: <Target size={28} />, color: "bg-emerald-50 text-emerald-600" },
    { title: "Authority", desc: "12+ years of on-ground regulatory and implementation expertise.", icon: <Award size={28} />, color: "bg-rose-50 text-rose-600" },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                <Sparkles size={12} className="text-amber-400" /> Our Legacy
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">
                Over a Decade of <br/>
                <span className="text-emerald-500 italic font-light">Compliance Mastery.</span>
              </h1>
              
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium max-w-xl">
                LaborForge Advisors launched <span className="text-slate-900 font-bold">ForgeWatch</span>—our precision-engineered digital division. Born from frontline experience in payroll structuring and statutory armor, we transform regulatory chaos into automated clarity.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50">
                  <p className="text-5xl font-black text-slate-900 tracking-tighter">12<span className="text-blue-500">+</span></p>
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-2">Years Experience</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-100/50">
                  <p className="text-5xl font-black text-slate-900 tracking-tighter">500<span className="text-emerald-500">+</span></p>
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest mt-2">Clients Managed</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-[600px] bg-slate-100 rounded-[3.5rem] border-8 border-white shadow-2xl overflow-hidden flex items-center justify-center group">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-105 transition-transform duration-700" />
                <span className="text-slate-400 text-xs font-black uppercase tracking-widest relative z-10">Founder / Expert Portrait</span>
              </div>
              
              {/* Floating Performance Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-5">
                <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <p className="text-2xl font-black text-slate-900 leading-none tracking-tighter">100%</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Audit Success Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm group"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">Our Mission</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              To forge unbreakable compliance frameworks that transform regulatory complexity into operational excellence for businesses across India.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm group"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
              <Eye size={32} />
            </div>
            <h3 className="text-3xl font-black mb-4 tracking-tight">Our Vision</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              To be India's premier compliance forge—mastering New Labour Codes through precision payroll, statutory armor, and Lean Six Sigma innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">
            The <span className="text-emerald-500 italic font-light">Values</span> That Drive Us
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4">Built on Trust, Precision, and integrity</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-100/50 hover:border-emerald-200 transition-all text-center"
            >
              <div className={`inline-flex w-16 h-16 rounded-2xl mb-8 items-center justify-center ${v.color}`}>
                {v.icon}
              </div>
              <h4 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">{v.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline / Journey Teaser */}
      
      <section className="py-32 px-6 max-w-5xl mx-auto text-center">
        <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 relative overflow-hidden text-white">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <History className="mx-auto text-emerald-400 mb-8" size={60} />
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Our Commitment</h3>
            <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
              LaborForge Advisors delivers unwavering reliability—precision payroll protection, real-time Labour Code monitoring, and statutory gap elimination through proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="bg-emerald-500 text-slate-900 font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl hover:bg-white transition-all">
                 Download Credentials
               </button>
               <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-xs px-10 py-5 rounded-2xl hover:bg-white/20 transition-all">
                 Our Team
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}