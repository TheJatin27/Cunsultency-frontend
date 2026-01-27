import { motion } from "framer-motion";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyUs from "../components/home/WhyUs";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-950"
    >
      <Hero />
      
      <ServicesPreview />
      
      <WhyUs />

      {/* Final Lead Capture Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[2rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-500/20">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to automate your compliance?
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Zero Penalty Guarantee",
                    "Expert Documentation",
                    "24/7 Professional Support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-50 font-medium">
                      <CheckCircle2 size={20} className="text-emerald-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link
                  to="/gst-quotation"
                  className="bg-white text-slate-950 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group"
                >
                  Get Free Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-slate-950/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center"
                >
                  Schedule Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;