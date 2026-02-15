import { motion } from "framer-motion";
import { 
  PlusCircle, Rocket, ShieldCheck, Building2, 
  FilePlus, HardHat, Fingerprint, ArrowRight, 
  CheckCircle2, Zap, Briefcase, HelpCircle, Timer
} from "lucide-react";
import { Link } from "react-router-dom";

const setupServices = [
  {
    title: "Core Registrations",
    icon: <Fingerprint className="text-blue-600" />,
    items: [
      { name: "EPF Registration", time: "3-5 Days" },
      { name: "ESI Registration", time: "3-5 Days" },
      { name: "Professional Tax (PT)", time: "5-7 Days" }
    ],
    accent: "border-blue-100"
  },
  {
    title: "Establishment Licensing",
    icon: <Building2 className="text-emerald-600" />,
    items: [
      { name: "Shops & Establishment", time: "2-4 Days" },
      { name: "CLRA (Principal Employer)", time: "7-10 Days" },
      { name: "Contractor License", time: "10-14 Days" }
    ],
    accent: "border-emerald-100"
  },
  {
    title: "Industrial & Special",
    icon: <HardHat className="text-orange-600" />,
    items: [
      { name: "Factory License Assist", time: "Variable" },
      { name: "LWF Registration", time: "5-7 Days" },
      { name: "MSME / Udyam Setup", time: "1-2 Days" }
    ],
    accent: "border-orange-100"
  }
];

const EstablishmentSetup = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen pb-32 pt-20">
      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden text-center md:text-left">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
              <Rocket size={14} className="text-blue-500" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">New Unit Onboarding</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
              Establishment <br />
              <span className="text-blue-600 italic font-light">Launchpad.</span>
            </h1>
            
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12">
              From zero to fully compliant in record time. We handle the bureaucracy of registrations 
              so you can focus on building your team and scaling your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
              {[
                { label: "Timeline", val: "Express Processing", icon: <Timer size={14}/> },
                { label: "Success", val: "100% Approval Rate", icon: <CheckCircle2 size={14}/> },
                { label: "Support", val: "Post-Setup Advisory", icon: <Zap size={14}/> }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-blue-500">
                    {stat.icon}
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                  <p className="text-slate-900 font-black tracking-tight">{stat.val}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Registration Service Matrix */}
      <section className="max-w-7xl mx-auto px-6 mt-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {setupServices.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[3rem] border ${group.accent} bg-white shadow-xl shadow-slate-200/20 flex flex-col transition-all duration-500 hover:-translate-y-2`}
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 border border-slate-100 group-hover:scale-110 transition-transform">
                {group.icon}
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight uppercase tracking-widest">
                {group.title}
              </h2>

              <div className="space-y-4 flex-grow">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all group/item">
                    <div>
                      <p className="text-sm font-black text-slate-800 tracking-tight">{item.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Est: {item.time}</p>
                    </div>
                    <FilePlus size={18} className="text-slate-200 group-hover/item:text-blue-500 transition-colors" />
                  </div>
                ))}
              </div>

              <Link to="/contact" className="mt-12 inline-flex items-center justify-center gap-3 w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200">
                Start Registration <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Startup & MSME Advisory Banner */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          {/* Decorative Sparkle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20" />
          
          <div className="max-w-3xl relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
              <Rocket size={36} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">
              MSME & Startup <br />
              <span className="italic font-light text-blue-200 text-3xl md:text-4xl underline decoration-blue-400 underline-offset-8">Exemption Advisory.</span>
            </h2>
            <p className="text-blue-100 text-lg mb-12 font-medium leading-relaxed">
              Did you know DPIIT-recognized startups are eligible for self-certification and exemption from inspection for up to 9 labour laws? 
              We don't just register—we strategize your structure to maximize statutory benefits.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
                <CheckCircle2 className="text-emerald-400" size={18} />
                <span className="text-[11px] font-black uppercase tracking-widest">Udyam Registration</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/20">
                <CheckCircle2 className="text-emerald-400" size={18} />
                <span className="text-[11px] font-black uppercase tracking-widest">Exemption Filing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pre-Requisite Checklist */}
      <section className="max-w-4xl mx-auto px-6 mt-32">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">The Launch Checklist</h3>
          <p className="text-slate-500 font-medium">Have these documents ready for a lightning-fast setup.</p>
        </div>

        <div className="grid gap-4">
          {[
            { q: "Business Proof", a: "Certificate of Incorporation, Partnership Deed, or LLP Agreement." },
            { q: "Premises Proof", a: "Registered Rent Agreement, Latest Utility Bill, or Property Tax Receipt." },
            { q: "Identity Proof", a: "PAN, Aadhaar, and Photos of all Authorized Directors/Partners." },
            { q: "Bank Proof", a: "Cancelled Cheque clearly showing the IFSC and Account Holder name." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 10 }}
              className="flex items-start gap-8 p-8 bg-white border border-slate-100 rounded-3xl hover:border-blue-200 transition-all cursor-default shadow-sm"
            >
               <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 font-black text-lg">
                 0{i + 1}
               </div>
               <div>
                 <h4 className="text-xl font-black text-slate-900 tracking-tight mb-2">{item.q}</h4>
                 <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.a}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EstablishmentSetup;