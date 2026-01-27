import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-slate-950 text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Legacy</h2>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Over a Decade of <br/><span className="text-emerald-400">Compliance Mastery.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Founded by an expert with 12 years of specialized experience in Labour Compliance, Payroll, and GST. 
              We don't just file returns; we provide strategic advisory to shield your business from penalties.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <p className="text-3xl font-bold text-blue-500">12+</p>
                <p className="text-slate-500 text-sm">Years Experience</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <p className="text-3xl font-bold text-emerald-500">500+</p>
                <p className="text-slate-500 text-sm">Clients Managed</p>
              </div>
            </div>
          </motion.div>
          <div className="relative">
             <div className="w-full h-[500px] bg-slate-800 rounded-3xl border border-slate-700 flex items-center justify-center overflow-hidden">
                <span className="text-slate-600 italic">Founder / Expert Professional Imagery</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}