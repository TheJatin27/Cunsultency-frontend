import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { ShieldCheck, Lock, Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setInfoMessage("");

    if (!email || !password) {
      setError("Please fill in both email and password fields.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      if (
        err.code === "auth/user-not-found" || 
        err.code === "auth/wrong-password" || 
        err.code === "auth/invalid-credential"
      ) {
        setError("Invalid email or password. Please check your credentials.");
      } else {
        setError("Authentication failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e) => {
    if (e) e.preventDefault();
    setError("");
    setInfoMessage("");
    
    if (!email) {
      setError("Please enter your email address first to reset your password.");
      return;
    }

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      setInfoMessage("A secure password reset link has been sent to your email.");
    } catch (err) {
      console.error(err);
      setError("Could not process password reset. Please verify your email address.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7ede2] flex items-center justify-center px-6 py-20 relative overflow-hidden font-sans selection:bg-[#ffcad4]">
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#e9967a]/20 to-[#ffdac1]/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-[#3d5a80]/10 to-[#e9967a]/15 blur-[130px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl w-full grid lg:grid-cols-2 bg-white border-2 border-[#fbdad0]/80 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(31,25,22,0.08)] relative z-10"
      >
        {/* Left Side: LaborForge Brand Context */}
        <div className="p-12 bg-gradient-to-br from-[#1f1916] to-[#3a302c] hidden lg:flex flex-col justify-between text-[#f7ede2]">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-16 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f7ede2] to-[#e9967a] flex items-center justify-center font-black text-[#1f1916] text-xs shadow-md">
                LF
              </div>
              <span className="text-[#f7ede2] font-black text-sm tracking-widest uppercase">
                LABOUR<span className="text-[#e9967a]">FORGE</span>
              </span>
            </Link>
            <h2 className="text-4xl font-black tracking-tight text-white leading-[1.15] mb-6">
              Access Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e9967a] to-[#ffdac1]">
                Compliance Vault.
              </span>
            </h2>
            <p className="text-[#fbdad0]/70 text-sm font-normal leading-relaxed max-w-sm">
              Securely view your compliance metrics, isolate operational gaps, and check real-time statutory Social Security vectors.
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-[#f7ede2]/10">
            <div className="flex items-center gap-3 text-[#e9967a] font-bold text-xs tracking-wider uppercase">
              <ShieldCheck size={18} /> Cryptographic Encryption Active
            </div>
            <p className="text-[#fbdad0]/40 text-[11px] font-medium tracking-wide">
              Protected by Enterprise Compliance Security Protocols.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-12 lg:p-16 bg-[#fffdfb] flex flex-col justify-center">
          <div className="mb-10 lg:hidden flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#1f1916] flex items-center justify-center font-bold text-white text-[9px]">LF</div>
            <span className="text-[#1f1916] font-black text-xs tracking-widest uppercase">LABOURFORGE</span>
          </div>

          <h3 className="text-2xl font-black text-[#1f1916] tracking-tight mb-2">Welcome Back</h3>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-8">Authorized Client Access Gateway</p>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="p-4 bg-rose-50 border-2 border-rose-200/60 text-rose-700 rounded-2xl text-xs font-bold tracking-wide">
                {error}
              </div>
            )}
            
            {infoMessage && (
              <div className="p-4 bg-emerald-50 border-2 border-emerald-200/60 text-emerald-800 rounded-2xl text-xs font-bold tracking-wide flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>{infoMessage}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#1f1916]/60 ml-1">Work Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com" 
                  disabled={loading}
                  className="w-full bg-white border-2 border-[#fbdad0]/60 rounded-2xl py-4 left-12 pr-4 pl-12 text-[#1f1916] font-medium placeholder-neutral-400 outline-none focus:border-[#e9967a] transition-all disabled:opacity-50 text-sm shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1f1916]/60">Password</label>
                <button 
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-[10px] font-bold text-[#d47f63] hover:underline bg-transparent border-none cursor-pointer"
                >
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  disabled={loading}
                  className="w-full bg-white border-2 border-[#fbdad0]/60 rounded-2xl py-4 left-12 pr-4 pl-12 text-[#1f1916] font-medium placeholder-neutral-400 outline-none focus:border-[#e9967a] transition-all disabled:opacity-50 text-sm shadow-sm"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#1f1916] hover:bg-[#d47f63] disabled:bg-[#1f1916]/40 text-[#f7ede2] py-4 rounded-full font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-3 transition-all shadow-[0_10px_25px_rgba(31,25,22,0.15)] hover:shadow-[0_15px_30px_rgba(233,150,122,0.3)] group cursor-pointer disabled:cursor-not-allowed transform active:scale-98"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Verifying Credentials...
                </>
              ) : (
                <>
                  Secure Login <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="mt-10 text-center text-neutral-400 text-xs font-semibold tracking-wide">
            New partner organization? <Link to="/register" className="text-[#d47f63] hover:underline transition-colors">Request access entry</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;