import React from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Send, 
  Sparkles, 
  ShieldAlert, 
  Gavel, 
  Scale,
  Clock
} from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Direct Advisory Line",
      value: "+91 95557 69448",
      sub: "Professional Consultation Hours",
      color: "text-amber-500 bg-amber-500/10",
      border: "border-slate-800"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Instant Expert Access",
      value: "WhatsApp Consultation",
      sub: "Priority Support Active",
      color: "text-emerald-500 bg-emerald-500/10",
      border: "border-slate-800"
    },
    {
      icon: <Mail size={24} />,
      title: "Corporate Correspondence",
      value: "office@laborforge.com",
      sub: "Statutory Documentation Support",
      color: "text-blue-500 bg-blue-500/10",
      border: "border-slate-800"
    }
  ];

  return (
    <div className="bg-[#0F172A] min-h-screen py-32 px-6 relative overflow-hidden font-sans">
      {/* Structural Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 border border-slate-800 rounded-sm mb-6"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Request Expert Review</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none"
          >
            Safeguard Your <br />
            <span className="text-amber-500 italic font-serif font-light">Operations.</span>
          </motion.h1>
          
          <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            From EPF/ESI inspections to complex wage structuring, our lead consultant <span className="text-white font-bold">Chandan Roy</span> and our team of experts are ready to mitigate your risk exposure today. [cite: 62-63]
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Advisory Channels */}
          <div className="space-y-4">
            {contactMethods.map((method, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 5 }}
                className={`p-8 bg-slate-900/50 rounded-sm border ${method.border} flex items-center gap-6 transition-all hover:bg-slate-900`}
              >
                <div className={`w-14 h-14 ${method.color} rounded-sm flex items-center justify-center shrink-0`}>
                  {method.icon}
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">{method.title}</p>
                  <p className="text-lg font-bold text-white tracking-tight">{method.value}</p>
                  <p className="text-[10px] italic text-slate-600 font-medium mt-1 uppercase tracking-wider">{method.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Headquarters Card */}
            <div className="p-10 bg-slate-900/80 rounded-sm border border-slate-800 mt-8">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-amber-500 rounded-sm flex items-center justify-center text-[#0F172A] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg tracking-tight mb-2 uppercase">Headquarters</h4>
                  <p className="text-slate-500 text-xs italic leading-relaxed">
                    Executive Suite, Sector 62,<br /> 
                    Noida, Uttar Pradesh, India 201301
                  </p>
                </div>
              </div>
              <div className="w-full h-40 bg-[#0F172A] border border-slate-800 rounded-sm overflow-hidden flex flex-col items-center justify-center group cursor-pointer relative">
                  <div className="absolute inset-0 bg-slate-800/40 opacity-50" />
                  <span className="relative z-10 text-amber-500 font-bold text-[9px] uppercase tracking-[0.4em] border border-amber-500/20 px-4 py-2 bg-[#0F172A]">View on Digital Map</span>
              </div>
            </div>
          </div>

          {/* Right Column: Case Intake Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/40 border border-slate-800 p-8 md:p-16 rounded-sm relative"
            >
              <div className="flex items-center gap-3 mb-12 border-b border-slate-800 pb-8">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Statutory Briefing Request</h2>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest ml-1">Company Representative</label>
                    <input type="text" className="w-full bg-slate-900/60 border border-slate-800 text-white p-4 rounded-sm outline-none focus:border-amber-500/50 transition-all font-medium placeholder:text-slate-700" placeholder="Full Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest ml-1">Direct Contact</label>
                    <input type="tel" className="w-full bg-slate-900/60 border border-slate-800 text-white p-4 rounded-sm outline-none focus:border-amber-500/50 transition-all font-medium placeholder:text-slate-700" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest ml-1">Matter Specification</label>
                  <div className="relative">
                    <select className="w-full bg-slate-900/60 border border-slate-800 text-white p-4 rounded-sm outline-none focus:border-amber-500/50 transition-all font-bold appearance-none cursor-pointer text-sm">
                      <option className="bg-slate-900">Audit & Inspection Support [cite: 70]</option>
                      <option className="bg-slate-900">EPF & ESI Advisory [cite: 16]</option>
                      <option className="bg-slate-900">CLRA & Contract Labour Management [cite: 18]</option>
                      <option className="bg-slate-900">Wage Structuring & Review [cite: 13]</option>
                      <option className="bg-slate-900">General Compliance Audit [cite: 52]</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-amber-500">↓</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest ml-1">Case Brief</label>
                  <textarea rows="4" className="w-full bg-slate-900/60 border border-slate-800 text-white p-4 rounded-sm outline-none focus:border-amber-500/50 transition-all font-light resize-none placeholder:text-slate-700 text-sm" placeholder="Provide details regarding your current compliance challenge or notice received..."></textarea>
                </div>

                <button className="group w-full bg-amber-500 text-[#0F172A] font-bold uppercase tracking-[0.3em] text-[11px] py-6 rounded-sm shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-4">
                  Request Consultation <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex flex-wrap items-center justify-center gap-10 mt-12 grayscale opacity-40">
                  <div className="flex items-center gap-2">
                    <ShieldAlert size={14} className="text-amber-500" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Audit Ready [cite: 78]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gavel size={14} className="text-amber-500" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Zero Penalty [cite: 43]</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale size={14} className="text-amber-500" />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Legal Clarity [cite: 75]</span>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Trust Footer Brief */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
        <div className="flex items-center gap-3">
           <Clock size={16} className="text-amber-500/50" />
           <p className="text-[10px] font-bold uppercase tracking-widest">Average Advisory Response: 4 Hours</p>
        </div>
        <p className="text-[9px] uppercase tracking-[0.4em] font-medium text-center md:text-right">
           LaborForge Advisors • Forging Compliance, Shaping Success 
        </p>
      </div>
    </div>
  );
}