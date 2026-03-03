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
      className="bg-white font-sans"
    >
      <Hero />
      
      <ServicesPreview />
      
      <WhyUs />

      {/* Final Lead Capture Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="bg-slate-50 border border-slate-100 rounded-sm p-10 md:p-20 shadow-sm overflow-hidden">
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-emerald-100 text-emerald-700 rounded-sm text-[9px] font-black uppercase tracking-widest mb-8 shadow-sm"
                >
                  <Sparkles size={10} /> Consultation
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                  Secure your <br /> 
                  <span className="text-emerald-600 italic font-serif font-light">statutory future</span> today.
                </h2>
                
                <div className="grid grid-cols-1 gap-5">
                  {[
                    "Zero-Gap Compliance Guarantee",
                    "Audit-Ready Documentation",
                    "Expert Inspection Support"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-600 font-bold text-[11px] uppercase tracking-wider">
                      <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center shadow-md shadow-emerald-100">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  to="/gst-quotation"
                  className="bg-slate-900 text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-slate-200"
                >
                  Request a Free Quote
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link
                  to="/contact"
                  className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-sm font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all text-center shadow-sm"
                >
                  Schedule an Advisory Call
                </Link>

                <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-4 italic">
                  "Prevention over correction" — Response within 2 business hours
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