import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyUs from "../components/home/WhyUs";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white" // Switched from slate-950
    >
      <Hero />
      
      <ServicesPreview />
      
      <WhyUs />

      {/* Final Lead Capture Section */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#FCFAF7]">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
           <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl" />
           <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-white border border-slate-100 rounded-[3rem] p-8 md:p-20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
                >
                  <Sparkles size={12} /> Get Started Today
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">
                  Ready to <span className="text-emerald-500 italic font-light">automate</span> <br /> 
                  your compliance?
                </h2>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Zero Penalty Guarantee",
                    "Expert Documentation",
                    "24/7 Professional Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/gst-quotation"
                  className="bg-slate-900 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-slate-200"
                >
                  Request a Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link
                  to="/contact"
                  className="bg-white border border-slate-200 text-slate-900 px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-50 transition-all text-center shadow-sm"
                >
                  Schedule an Expert Call
                </Link>

                <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">
                  No commitment required • Response within 2 hours
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;