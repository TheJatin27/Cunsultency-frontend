import { motion } from "framer-motion";
import { 
  FileText, ShieldCheck, Banknote, Landmark, GraduationCap, 
  ArrowRight, CheckCircle2, ShieldAlert 
} from "lucide-react";
import { Link } from "react-router-dom";

export const services = [
  {
    title: "GST Compliance",
    icon: <FileText className="text-blue-400" size={32} />,
    description: "End-to-end GST management to ensure your business stays penalty-free and audit-ready.",
    features: ["GSTR-3B & GSTR-1 Filing", "Annual Returns (9/9C)", "Input Tax Credit Optimization", "Notice & Audit Support"],
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Labour Law Compliance",
    icon: <ShieldCheck className="text-emerald-400" size={32} />,
    description: "Expert handling of statutory laws to protect your company from legal liabilities.",
    features: ["EPF & ESIC Management", "Minimum Wages Compliance", "Bonus & Gratuity Calculation", "Factory Act & Shop Act"],
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Payroll Management",
    icon: <Banknote className="text-purple-400" size={32} />,
    description: "Accurate, on-time salary processing integrated with all statutory deductions.",
    features: ["Automated Payslips", "Statutory Challan Generation", "Full & Final Settlements", "PT & LWF Management"],
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Accounting & Advisory",
    icon: <Landmark className="text-orange-400" size={32} />,
    description: "Strategic accounting that goes beyond bookkeeping to provide business insights.",
    features: ["Monthly Management Reports (MIS)", "Cash Flow Analysis", "Finalization of Accounts", "Tax Planning"],
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "Training & Workshops",
    icon: <GraduationCap className="text-pink-400" size={32} />,
    description: "Empowering your internal teams with knowledge on the latest regulatory changes.",
    features: ["GST Update Sessions", "Labour Law Awareness", "Payroll Processing Training", "Compliance Checklists"],
    color: "from-pink-500/20 to-transparent"
  }
];

const Services = () => {
  return (
    <div className="bg-slate-950 min-h-screen pb-20">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive <span className="text-blue-500">Compliance</span> Solutions
          </h1>
          <p className="text-slate-400 text-lg md:text-xl">
            Leveraging 12 years of expertise to provide seamless, automated, and 
            audit-proof services for businesses of all sizes.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden`}
          >
            {/* Background Gradient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <div className="relative z-10">
              <div className="mb-6 p-4 inline-block bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feat, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-300 text-xs font-medium">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="flex items-center gap-2 text-blue-400 font-bold text-sm group-hover:gap-4 transition-all">
                Enquire Now <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Trust Bar / Warning Section */}
      <section className="max-w-5xl mx-auto px-6 mt-24">
        <div className="bg-slate-900/50 border border-red-500/20 p-8 rounded-3xl flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
            <ShieldAlert size={32} className="text-red-500" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-2">Non-Compliance is Expensive</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              GST penalties and Labour Law litigation can cost up to 10x more than regular professional fees. 
              Our "Zero-Penalty" approach ensures your business is always protected.
            </p>
          </div>
          <Link to="/gst-quotation" className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap transition-all">
            Check Your Risk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;