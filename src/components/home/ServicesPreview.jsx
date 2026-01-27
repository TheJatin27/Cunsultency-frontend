import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Recommended icons to install: npm install lucide-react
import { FileText, ShieldCheck, Banknote, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "GST Compliance",
    desc: "Comprehensive management of GSTR-3B, GSTR-1, annual returns, and professional handling of tax notices.",
    icon: <FileText className="text-blue-400" size={32} />,
    color: "group-hover:text-blue-400",
    border: "hover:border-blue-500/50"
  },
  {
    title: "Labour Law Compliance",
    desc: "Expert statutory filings for EPF, ESIC, minimum wages, and gratuity to keep your business fully protected.",
    icon: <ShieldCheck className="text-emerald-400" size={32} />,
    color: "group-hover:text-emerald-400",
    border: "hover:border-emerald-500/50"
  },
  {
    title: "Payroll Management",
    desc: "End-to-end payroll processing with automated payslips and statutory challan generation.",
    icon: <Banknote className="text-purple-400" size={32} />,
    color: "group-hover:text-purple-400",
    border: "hover:border-purple-500/50"
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "circOut" } 
  },
};

const ServicesPreview = () => {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-600/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Specializations</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Leveraging over 12 years of industry expertise to provide seamless 
              compliance solutions tailored for growth-oriented businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/services"
              className="group flex items-center gap-2 text-white font-medium border-b border-slate-700 pb-1 hover:border-emerald-400 transition-all"
            >
              Explore All Services 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
              className={`group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 transition-all duration-500 ${s.border} hover:shadow-2xl hover:shadow-blue-500/10`}
            >
              {/* Card Icon Container */}
              <div className="mb-8 p-3 inline-block rounded-2xl bg-slate-800/80 border border-slate-700 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>

              <h3 className={`text-2xl font-bold text-white mb-4 transition-colors duration-300 ${s.color}`}>
                {s.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6">
                {s.desc}
              </p>

              {/* Decorative line animation */}
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-emerald-500 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;