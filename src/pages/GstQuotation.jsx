import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateQuote } from "../components/common/pricingLogic";
import { Calculator, ArrowRight, CheckCircle } from "lucide-react";

const GstQuotation = () => {
  const [service, setService] = useState("GST"); // Can be GST, LABOUR, PAYROLL
  const [details, setDetails] = useState({
    turnover: 10,
    invoices: 20,
    employees: 5,
    frequency: "Monthly",
  });
  const [quote, setQuote] = useState(0);

  // Update quote instantly when any input changes (Pure JS Logic)
  useEffect(() => {
    const result = calculateQuote(service, details);
    setQuote(result);
  }, [service, details]);

  return (
    <section className="bg-slate-950 min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Instant <span className="text-emerald-400">Quote</span> Generator</h1>
          <p className="text-slate-400">Select a service and adjust parameters to see estimated professional fees.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* INPUT CARD */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-8">
            {/* Service Selector */}
            <div className="flex bg-slate-800 p-1 rounded-xl">
              {["GST", "LABOUR", "PAYROLL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setService(s)}
                  className={`flex-1 py-3 rounded-lg font-bold transition-all ${
                    service === s ? "bg-blue-600 text-white shadow-lg" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Dynamic Inputs Based on Service */}
            <div className="space-y-6">
              {service === "GST" && (
                <>
                  <div>
                    <label className="block text-slate-400 text-sm mb-4">Annual Turnover: ₹{details.turnover} Lakhs</label>
                    <input 
                      type="range" min="5" max="500" step="5"
                      value={details.turnover}
                      onChange={(e) => setDetails({...details, turnover: e.target.value})}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none accent-emerald-500 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">Avg. Invoices per Month</label>
                    <input 
                      type="number" 
                      className="w-full bg-slate-100 text-slate-900 p-4 rounded-xl font-bold outline-none border-4 border-transparent focus:border-blue-500"
                      value={details.invoices}
                      onChange={(e) => setDetails({...details, invoices: e.target.value})}
                    />
                  </div>
                </>
              )}

              {(service === "LABOUR" || service === "PAYROLL") && (
                <div>
                  <label className="block text-slate-400 text-sm mb-2">Total Employee Count</label>
                  <input 
                    type="number" 
                    className="w-full bg-slate-100 text-slate-900 p-4 rounded-xl font-bold outline-none border-4 border-transparent focus:border-blue-500"
                    value={details.employees}
                    onChange={(e) => setDetails({...details, employees: e.target.value})}
                  />
                </div>
              )}
            </div>
          </div>

          {/* ANIMATED RESULT CARD */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={service + quote}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-emerald-600 p-1 rounded-3xl shadow-2xl"
            >
              <div className="bg-slate-900 rounded-[calc(1.5rem-1px)] p-10 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6">
                  <Calculator size={32} />
                </div>
                <h3 className="text-slate-400 uppercase tracking-widest text-sm font-bold mb-2">Estimated {service} Fee</h3>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-6xl font-black text-white mb-4"
                >
                  ₹{quote.toLocaleString()}<span className="text-xl text-slate-500">/mo</span>
                </motion.div>

                <p className="text-slate-400 text-sm mb-8">
                  Includes return filing, advisory, and 10+ years of expertise.
                </p>

                <div className="space-y-3 w-full mb-8">
                  {["Digital Dashboard", "Notice Handling", "Unlimited Support"].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                      <CheckCircle size={16} className="text-emerald-400" /> {f}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-emerald-500 text-slate-950 font-black rounded-xl hover:bg-white transition-all flex items-center justify-center gap-2">
                  Get Official Proposal <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GstQuotation;