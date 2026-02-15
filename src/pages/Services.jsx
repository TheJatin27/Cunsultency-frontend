import { motion } from "framer-motion";
import { 
  FileText, ShieldCheck, Banknote, Landmark, GraduationCap, 
  ArrowRight, CheckCircle2, ShieldAlert, Sparkles, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

export const services = [
  {
    title: "GST Compliance",
    icon: <FileText size={32} />,
    description: "End-to-end GST management to ensure your business stays penalty-free and audit-ready.",
    features: ["GSTR-3B & GSTR-1 Filing", "Annual Returns (9/9C)", "Input Tax Credit Optimization", "Notice & Audit Support"],
    color: "bg-blue-50 text-blue-600",
    shadow: "shadow-blue-100",
    accent: "bg-blue-600"
  },
  {
    title: "Labour Law Compliance",
    icon: <ShieldCheck size={32} />,
    description: "Expert handling of statutory laws to protect your company from legal liabilities.",
    features: ["EPF & ESIC Management", "Minimum Wages Compliance", "Bonus & Gratuity Calculation", "Factory Act & Shop Act"],
    color: "bg-emerald-50 text-emerald-600",
    shadow: "shadow-emerald-100",
    accent: "bg-emerald-600"
  },
  {
    title: "Payroll Management",
    icon: <Banknote size={32} />,
    description: "Accurate, on-time salary processing integrated with all statutory deductions.",
    features: ["Automated Payslips", "Statutory Challan Generation", "Full & Final Settlements", "PT & LWF Management"],
    color: "bg-purple-50 text-purple-600",
    shadow: "shadow-purple-100",
    accent: "bg-purple-600"
  },
  {
    title: "Accounting & Advisory",
    icon: <Landmark size={32} />,
    description: "Strategic accounting that goes beyond bookkeeping to provide business insights.",
    features: ["Monthly Management Reports (MIS)", "Cash Flow Analysis", "Finalization of Accounts", "Tax Planning"],
    color: "bg-orange-50 text-orange-600",
    shadow: "shadow-orange-100",
    accent: "bg-orange-600"
  },
  {
    title: "Training & Workshops",
    icon: <GraduationCap size={32} />,
    description: "Empowering your internal teams with knowledge on the latest regulatory changes.",
    features: ["GST Update Sessions", "Labour Law Awareness", "Payroll Processing Training", "Compliance Checklists"],
    color: "bg-pink-50 text-pink-600",
    shadow: "shadow-pink-100",
    accent: "bg-pink-600"
  }
];

const Services = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen pb-32 pt-20">
      {/* Header Section */}
      <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-0 translate-x-1/3 -translate-y-1/3" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-8">
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Our Expertise</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]">
            Comprehensive <br />
            <span className="text-emerald-500 italic font-light">Solutions.</span>
          </h1>
          
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Leveraging 12 years of expertise to provide seamless, automated, and 
            audit-proof services for modern Indian enterprises.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl ${service.shadow} hover:-translate-y-2 transition-all duration-500 flex flex-col`}
          >
            <div className={`mb-8 p-6 inline-block rounded-[2rem] w-fit ${service.color} group-hover:scale-110 transition-transform duration-500`}>
              {service.icon}
            </div>
            
            <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex-grow">
              <ul className="space-y-4 mb-10">
                {service.features.map((feat, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600 text-[13px] font-bold">
                    <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <Link 
              to="/contact" 
              className={`inline-flex items-center justify-between w-full p-5 rounded-2xl bg-slate-50 group-hover:${service.accent} group-hover:text-white transition-all font-black text-[10px] uppercase tracking-widest`}
            >
              Consult an Expert <ChevronRight size={16} />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Trust Bar / Risk Assessment Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[100px]" />
          
          <div className="w-24 h-24 rounded-3xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
            <ShieldAlert size={48} className="text-red-500" />
          </div>
          
          <div className="text-center lg:text-left flex-grow relative z-10">
            <h4 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter italic">
              Non-Compliance is Expensive.
            </h4>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
              GST penalties and Labour Law litigation can cost up to <span className="text-red-400 font-black">10x more</span> than professional fees. 
              Our "Zero-Penalty" approach shields your growth.
            </p>
          </div>
          
          <Link 
            to="/contact" 
            className="group bg-red-500 hover:bg-white text-white hover:text-red-600 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all whitespace-nowrap shadow-2xl shadow-red-900/20 flex items-center gap-3"
          >
            Check Your Risk <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;