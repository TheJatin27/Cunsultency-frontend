import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { 
  ShieldCheck, Scale, Users, FileCheck, AlertTriangle, 
  ChevronRight, Briefcase, Building2, MessageSquare, Sparkles,
  CheckCircle2, Info, Gavel, Target, Handshake, Globe,
  Warehouse, Construction, Truck, Cpu, Zap, Microscope,
  Mail, Phone, MapPin, FileText, Rocket, Landmark
} from 'lucide-react';

const LaborForgeEliteFull = () => {
  const { scrollYProgress } = useScroll();
  
  const bgColor = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    ["linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)", 
     "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)", 
     "linear-gradient(180deg, #020617 0%, #0f172a 50%, #020617 100%)"]
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.div style={{ background: bgColor }} className="min-h-screen text-white selection:bg-blue-500/30 font-sans pb-20 overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none scale-110">
          <DotLottieReact src="https://lottie.host/965f725a-4959-42b7-873b-31367098256a/7S1G7v6A2p.json" loop autoplay />
        </div>

        <motion.div {...fadeInUp} className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-400 text-[9px] font-black uppercase tracking-widest mb-8">
             <Sparkles size={10}/> India's Premier Compliance Advisory
          </div>
          
          <p className="text-4xl md:text-7xl  mb-6 tracking-tight leading-tight uppercase">
            Work-as-a-Service <br/><span className="text-blue-500  font-light">Compliance Platform</span>
          </p>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
            Helping businesses stay compliant, audit-ready, and risk-free. Simplifying complex Indian labour laws to safeguard your business reputation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="bg-white text-black px-8 py-3.5 rounded-full font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all shadow-xl">Explore Solutions</button>
            <button className="bg-slate-900 border border-white/10 px-8 py-3.5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white/5 flex items-center gap-2 transition-all">
               Talk to an Expert <ChevronRight size={14}/>
            </button>
          </div>

          {/* Central Platform Figure Nodes */}
          <div className="relative w-full max-w-3xl mx-auto mt-6">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative z-20 w-56 h-56 md:w-64 md:h-64 mx-auto bg-gradient-to-t from-blue-600/30 to-transparent rounded-full border-4 border-white/10 overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" alt="Advisor" className="w-full h-full object-cover grayscale brightness-90" />
            </motion.div>

            <div className="absolute inset-0 z-10 pointer-events-none">
              {[
                { label: "Auditors", pos: "top-[0%] left-[10%]", color: "bg-emerald-500" },
                { label: "Compliance", pos: "top-[45%] left-[-5%]", color: "bg-purple-500" },
                { label: "Payroll", pos: "top-[0%] right-[10%]", color: "bg-amber-500" },
                { label: "ESI/EPF", pos: "top-[45%] right-[-5%]", color: "bg-cyan-500" }
              ].map((node, i) => (
                <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }} className={`absolute ${node.pos} flex flex-col items-center gap-1.5`}>
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${node.color} rounded-full border-2 border-slate-900 shadow-2xl overflow-hidden`}>
                    <img src={`https://i.pravatar.cc/150?u=lab${i}`} alt={node.label} />
                  </div>
                  <span className="text-[8px] font-black uppercase tracking-widest bg-slate-900/90 px-2 py-1 rounded-full border border-white/10 text-white/80">{node.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 2. ABOUT US: THE FIRM --- */}
      <section id="firm" className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp} className="space-y-6">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-[9px] uppercase tracking-[0.4em]"><Info size={12}/> About LaborForge Advisors</div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight uppercase tracking-tight text-white">Practical Advisory <br/><span className="text-gray-500 italic font-light">You Can Trust.</span></h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed font-light opacity-90 border-l-2 border-blue-600 pl-6">
              <p>LaborForge Advisors is built on the belief that labour law compliance is not just about knowing the law — it is about applying it correctly on the ground.</p>
              <p>Our consulting practice is built on years of hands-on experience in labour law compliance, statutory advisory, and workforce-related regulations across multiple industries.</p>
              <p>We work closely with employers to simplify complex labour laws, reduce compliance risk, and ensure smooth day-to-day operations.</p>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="relative w-full aspect-square max-w-sm mx-auto">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-blue-500/10 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-28 h-28 bg-blue-600/10 rounded-[2.5rem] flex items-center justify-center border border-blue-500/20 shadow-inner">
                   <ShieldCheck size={40} className="text-blue-500" />
                </div>
              </div>
              {[Users, Gavel, Scale, FileText].map((Icon, i) => (
                <motion.div key={i} className="absolute w-10 h-10 bg-zinc-900 border border-white/5 rounded-xl flex items-center justify-center text-blue-400 shadow-2xl"
                  animate={{ x: Math.cos(i * Math.PI / 2) * 130, y: Math.sin(i * Math.PI / 2) * 130 }}><Icon size={18} /></motion.div>
              ))}
          </motion.div>
        </div>

        {/* --- 3. WHO WE ARE & EXPERIENCE --- */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <h3 className="text-2xl font-black uppercase text-blue-500 tracking-widest">Who We Are</h3>
            <p className="text-gray-300 text-sm leading-relaxed font-light">Founded and led by <strong>Chandan Roy</strong>, LaborForge Advisors focuses on delivering practical, implementation-oriented labour law solutions rather than theoretical interpretations.</p>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/5"><div className="text-2xl font-black text-white">Multi-State</div><div className="text-[8px] font-bold text-blue-500 uppercase mt-1">Establishments Support</div></div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/5"><div className="text-2xl font-black text-white">Audit-Safe</div><div className="text-[8px] font-bold text-blue-500 uppercase mt-1">Inspection Ready Systems</div></div>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="bg-zinc-900 border border-white/5 p-10 rounded-[3rem]">
             <h4 className="text-blue-500 font-black text-[10px] uppercase tracking-widest mb-6">Extensive Exposure To:</h4>
             <ul className="grid grid-cols-1 gap-4">
                {[
                  "Labour law compliance management",
                  "Staffing & manpower industry regulations",
                  "Contract labour compliances",
                  "Minimum wages structuring",
                  "EPF & ESI advisory and audits"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <CheckCircle2 size={14} className="text-blue-500"/> {item}
                  </li>
                ))}
             </ul>
          </motion.div>
        </div>
      </section>

      {/* --- 4. CONSULTING PHILOSOPHY & COMMITMENT --- */}
      <section className="py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8">
           <motion.div {...fadeInUp} className="lg:col-span-2 bg-zinc-900 border border-white/5 p-12 rounded-[3.5rem] relative overflow-hidden group">
              <h3 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-8">Consulting Philosophy</h3>
              <p className="text-gray-300 text-base font-light leading-relaxed mb-10">We believe labour law compliance should enable business growth, not hinder it. Compliance is about protecting your business reputation, finances, and operations.</p>
              <div className="flex flex-wrap gap-4">
                {[{t: "Clarity over complexity", i: <Zap/>}, {t: "Prevention over correction", i: <Target/>}, {t: "Partnership over one-time service", i: <Handshake/>}].map((v, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <div className="text-blue-500">{v.i}</div> {v.t}
                  </div>
                ))}
              </div>
           </motion.div>
           <motion.div {...fadeInUp} className="p-10 bg-blue-600 rounded-[3.5rem] flex flex-col justify-center">
              <h4 className="text-white font-black text-xl uppercase mb-6 leading-none tracking-tighter">Our Commitment:</h4>
              <ul className="space-y-4 text-[9px] font-black uppercase tracking-widest text-blue-100">
                <li>• Accurate & up-to-date advisory</li>
                <li>• Business-friendly solutions</li>
                <li>• Transparent communication</li>
                <li>• Long-term value support</li>
              </ul>
           </motion.div>
        </div>
      </section>

      {/* --- 5. WHAT SETS US APART & INDUSTRIES --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto space-y-32">
        <div className="text-center">
           <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">What Sets Us Apart</h2>
              <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-16">We don’t just point out non-compliance - we help fix it.</p>
           </motion.div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Strong understanding of ground-level challenges",
                "Expertise in state-specific & location-based laws",
                "Clear guidance on minimum wages, EPF, ESI, CLRA",
                "Proactive risk identification & gap analysis",
                "Reliable support during inspections & notices"
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 flex items-center gap-6 group hover:bg-blue-600 transition-all">
                  <ShieldCheck className="text-blue-500 group-hover:text-white" size={24}/>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white text-left">{item}</span>
                </div>
              ))}
           </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900/10 to-transparent p-12 md:p-20 rounded-[4rem] border border-white/5">
           <h3 className="text-3xl font-black uppercase mb-12 text-center">Industries We Serve</h3>
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { n: "Staffing", i: <Users/> }, { n: "Manufacturing", i: <Warehouse/> },
                { n: "Mining", i: <Construction/> }, { n: "IT & Startups", i: <Cpu/> },
                { n: "Retail & Warehousing", i: <Truck/> }
              ].map((ind, i) => (
                <div key={i} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 flex flex-col items-center gap-6 hover:bg-white/10 transition-all group">
                   <div className="text-blue-500 group-hover:scale-110 transition-transform">{ind.i}</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 text-center">{ind.n}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- 6. WHAT WE DO (Practice Areas) --- */}
      <section id="expertise" className="py-24 bg-white/[0.01] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">What We Do</h2>
            <p className="text-gray-500 text-[10px] mt-4 uppercase font-bold tracking-widest">Management & Advisory at LaborForge</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Labour Law Management", d: "Ongoing filings, accurate records, and statutory adherence.", i: <ShieldCheck size={20}/> },
              { t: "Minimum Wages Structuring", d: "Interpret state notifications, category mapping, and wage structuring.", i: <Scale size={20}/> },
              { t: "EPF & ESI Advisory", d: "Registrations, monthly compliance, audits, and notice handling.", i: <Landmark size={20}/> },
              { t: "Contract Labour (CLRA)", d: "Ensuring full compliance including licensing, returns, and audits.", i: <FileCheck size={20}/> }
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-8 bg-slate-900 border border-white/5 rounded-3xl hover:border-blue-500 transition-all group">
                <div className="text-blue-500 mb-5 group-hover:scale-110 transition-transform">{s.i}</div>
                <h3 className="text-sm font-black mb-3 uppercase tracking-tight leading-none text-white">{s.t}</h3>
                <p className="text-gray-500 text-[10px] leading-relaxed font-light">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. CONTACT & RISK AUDIT --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid lg:grid-cols-5 gap-16">
          <motion.div {...fadeInUp} className="lg:col-span-2 space-y-8">
            <h3 className="text-3xl font-black uppercase text-white tracking-tighter">Request Advisory <br/><span className="text-blue-500 italic font-light">Consultation.</span></h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed italic">"Understand your risk exposure before it becomes a problem."</p>
            <div className="space-y-5 pt-4 border-t border-white/5">
              <div className="flex items-center gap-4 text-xs font-bold uppercase text-gray-400"><div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500"><Mail size={18}/></div> consult@laborforge.com</div>
              <div className="flex items-center gap-4 text-xs font-bold uppercase text-gray-400"><div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500"><Phone size={18}/></div> +91 1234567894</div>
            </div>
          </motion.div>
          <motion.div {...fadeInUp} className="lg:col-span-3 bg-zinc-900 border border-white/5 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
            <form className="grid md:grid-cols-2 gap-6 relative z-10">
              <input type="text" placeholder="Full Name" className="bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-xs focus:border-blue-500 outline-none" />
              <input type="text" placeholder="Company Name" className="bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-xs focus:border-blue-500 outline-none" />
              <textarea rows="3" placeholder="Consultation Inquiry" className="md:col-span-2 bg-white/5 border border-white/5 rounded-xl px-4 py-3.5 text-xs focus:border-blue-500 outline-none"></textarea>
              <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all">Schedule Consultation</button>
            </form>
          </motion.div>
      </section>

      {/* --- RISK BANNER & FOOTER --- */}
      <section className="py-24 px-6">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto bg-zinc-950 p-12 rounded-[2.5rem] border border-red-900/20 text-center relative overflow-hidden">
          <AlertTriangle className="mx-auto text-red-500 mb-6" size={44} />
          <h2 className="text-2xl md:text-3xl font-black mb-4 italic uppercase tracking-tighter italic">"A small gap today can turn <br/> into a major liability tomorrow."</h2>
          <button className="bg-red-600 px-8 py-3.5 rounded-xl font-black uppercase text-[9px] tracking-[0.2em] hover:bg-red-700 transition-all">Get Professional Review</button>
        </motion.div>
      </section>

      <footer className="py-20 text-center border-t border-white/5 opacity-80">
        <div className="text-xl font-black mb-2 uppercase">LABOR<span className="text-blue-500">FORGE</span></div>
        <p className="text-gray-600 text-[8px] font-bold uppercase tracking-[0.6em] mb-10 italic">Forging Compliance, Shaping Success</p>
        <p className="max-w-4xl mx-auto text-[8px] text-gray-700 leading-relaxed uppercase tracking-widest italic leading-loose px-10">
           Disclaimer: Information provided on this website is for general guidance only and does not constitute legal advice. © 2026 LaborForge Advisors.
        </p>
      </footer>

      {/* FLOATING ACTION PILL */}
      {/* <motion.div initial={{ x: 100 }} animate={{ x: 0 }} className="fixed bottom-10 right-10 z-50 flex items-center gap-4 bg-white text-black pl-8 pr-3 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform group cursor-pointer">
        <span className="text-[10px] font-black uppercase tracking-widest">Consult expert</span>
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white"><MessageSquare size={18} /></div>
      </motion.div> */}

    </motion.div>
  );
};

export default LaborForgeEliteFull;