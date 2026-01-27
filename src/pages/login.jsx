import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, ArrowRight } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full grid lg:grid-cols-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl"
      >
        {/* Left Side: Brand Info */}
        <div className="p-12 bg-gradient-to-br from-blue-600/20 to-emerald-500/10 hidden lg:flex flex-col justify-between">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-12">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-slate-950">C</div>
              <span className="text-white font-black text-xl">CHANDAN<span className="text-emerald-400">.</span></span>
            </Link>
            <h2 className="text-4xl font-black text-white leading-tight mb-6">
              Access Your <br />
              <span className="text-blue-400">Compliance Vault.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Securely view your GSTR filings, download ESIC/PF challans, and manage your monthly payroll reports.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-emerald-400 font-bold text-sm">
              <ShieldCheck size={20} /> 256-bit AES Encryption
            </div>
            <p className="text-slate-500 text-xs">
              Protected by Chandan Compliance Security Protocols.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-12 lg:p-16 bg-slate-900/60">
          <div className="mb-10 lg:hidden">
            <Link to="/" className="text-white font-black text-xl">CHANDAN<span className="text-emerald-400">.</span></Link>
          </div>

          <h3 className="text-2xl font-black text-white mb-2">Welcome Back</h3>
          <p className="text-slate-500 text-sm mb-10 font-medium italic">Authorized Client Access Only</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Password</label>
                <a href="#" className="text-[10px] font-bold text-blue-400 hover:text-white transition-colors">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-blue-500/50 transition-all"
                />
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/20 group">
              Secure Login <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-10 text-center text-slate-500 text-xs font-medium">
            New client? <Link to="/contact" className="text-emerald-400 hover:text-white transition-colors">Request access portal</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;