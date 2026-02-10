import { motion } from "framer-motion";
import { Target, Eye, Award, CheckCircle2, History, ShieldCheck } from "lucide-react";

export default function About() {
  const values = [
    { title: "Integrity", desc: "Honest advisory even when it's tough.", icon: <ShieldCheck className="text-blue-400" /> },
    { title: "Precision", desc: "Zero-error filings for peace of mind.", icon: <Target className="text-emerald-400" /> },
    { title: "Authority", desc: "12+ years of regulatory expertise.", icon: <Award className="text-purple-400" /> },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Legacy</h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Over a Decade of <br/><span className="text-emerald-400">Compliance Mastery.</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                LaborForge Advisors launched ForgeWatch—its cutting-edge digital division dedicated to revolutionizing labor compliance management. ForgeWatch is a precision-engineered compliance technology platform designed to simplify tracking and execution of India's complex labour laws, ensuring businesses stay ahead of statutory deadlines and New Labour Code implementations.

Born from frontline experience in payroll structuring, EPF/ESIC audits, and statutory registrations across manufacturing and staffing sectors, ForgeWatch transforms regulatory chaos into automated clarity. What took days of manual tracking now happens with real-time dashboards, predictive alerts, and audit-ready documentation.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                  <p className="text-4xl font-black text-blue-500">12+</p>
                  <p className="text-slate-500 font-medium">Years Experience</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                  <p className="text-4xl font-black text-emerald-500">500+</p>
                  <p className="text-slate-500 font-medium">Clients Managed</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-[550px] bg-slate-800 rounded-[3rem] border border-slate-700 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="text-slate-600 text-lg font-medium italic relative z-10">Founder / Expert Portrait Image</span>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-blue-600 p-6 rounded-2xl shadow-2xl border border-blue-400/30">
                <CheckCircle2 size={32} className="mb-2 text-white" />
                <p className="text-xs uppercase tracking-widest font-bold text-blue-100">Certified Partner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      
      <section className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-slate-800/40 p-10 rounded-[2.5rem] border border-slate-700 hover:border-emerald-500/50 transition-all group">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Target size={30} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed">
              To forge unbreakable compliance frameworks that transform regulatory complexity into operational excellence for businesses across India.
            </p>
          </div>

          <div className="bg-slate-800/40 p-10 rounded-[2.5rem] border border-slate-700 hover:border-blue-500/50 transition-all group">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Eye size={30} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-400 leading-relaxed">
              India's premier solo-powered compliance forge—mastering New Labour Codes through precision payroll, statutory armor, and Lean Six Sigma innovation for businesses across India
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">The <span className="text-emerald-400">Values</span> That Drive Us</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-slate-900 border border-slate-800 rounded-3xl text-center"
            >
              <div className="inline-block p-4 bg-slate-800 rounded-2xl mb-6">
                {v.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white">{v.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline / Journey Teaser */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-blue-600/20 to-emerald-600/20 p-1 rounded-3xl border border-white/10">
          <div className="bg-slate-950 p-12 rounded-[calc(1.5rem-1px)]">
            <History className="mx-auto text-emerald-400 mb-6" size={48} />
            <h3 className="text-3xl font-bold mb-4 text-white">Our Commitment</h3>
            <p className="text-slate-400 mb-8">
              LaborForge Advisors delivers unwavering reliability—precision payroll protection, real-time Labour Code monitoring, rapid audit readiness, and statutory gap elimination through proven expertise. From EPF/ESIC perfection to New Code navigation, we transform compliance burdens into seamless business strengths, every single day.
            </p>
            {/* <button className="bg-white text-slate-950 font-bold px-8 py-3 rounded-xl hover:bg-emerald-400 transition-colors">
              Read Full Story
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}