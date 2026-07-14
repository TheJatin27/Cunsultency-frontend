import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2, User, Building, CheckCircle2 } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    password: "",
  });
  const [isVerificationSent, setIsVerificationSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    const { fullName, companyName, email, password } = formData;
    if (!fullName || !email || !password) {
      setError("Please input all required fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);

      // 1. Create account in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Save additional metadata to Firestore 'users' collection
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName: fullName,
        companyName: companyName || "N/A",
        email: email,
        createdAt: new Date().toISOString(),
      });

      // 3. Dispatch validation link to user's email inbox
      await sendEmailVerification(user);

      setIsVerificationSent(true);
      setSuccessMessage("Account established! A validation link has been sent to your inbox.");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("This work email address is already registered.");
      } else {
        setError(err.message || "Onboarding failed. Please try again.");
      }
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
        {/* Left Side: Info panel */}
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
              Create Your <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e9967a] to-[#ffdac1]">
                Compliance Profile.
              </span>
            </h2>
            <p className="text-[#fbdad0]/70 text-sm font-normal leading-relaxed max-w-sm">
              Initialize your account to manage corporate payroll frameworks, align wage compliance, and isolate regulatory risks.
            </p>
          </div>

          <div className="space-y-4 pt-8 border-t border-[#f7ede2]/10">
            <div className="flex items-center gap-3 text-[#e9967a] font-bold text-xs tracking-wider uppercase">
              <ShieldCheck size={18} /> Integrated Database Sync
            </div>
            <p className="text-[#fbdad0]/40 text-[11px] font-medium tracking-wide">
              Direct metadata configuration mapping via Firestore.
            </p>
          </div>
        </div>

        {/* Right Side: Form Box */}
        <div className="p-12 lg:p-16 bg-[#fffdfb] flex flex-col justify-center">
          <h3 className="text-2xl font-black text-[#1f1916] tracking-tight mb-2">
            {isVerificationSent ? "Verification Required" : "Initialize Account"}
          </h3>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider mb-8">
            {isVerificationSent ? "Confirm email activation" : "Establish secure perimeter"}
          </p>

          <AnimatePresence mode="wait">
            {error && (
              <div className="p-4 mb-6 bg-rose-50 border-2 border-rose-200/60 text-rose-700 rounded-2xl text-xs font-bold tracking-wide">
                {error}
              </div>
            )}

            {successMessage && (
              <div className="p-4 mb-6 bg-emerald-50 border-2 border-emerald-200/60 text-emerald-800 rounded-2xl text-xs font-bold tracking-wide flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}
          </AnimatePresence>

          {!isVerificationSent ? (
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1f1916]/60 ml-1">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe" 
                    disabled={loading}
                    className="w-full bg-white border-2 border-[#fbdad0]/60 rounded-2xl py-3 pl-12 pr-4 text-[#1f1916] font-medium outline-none focus:border-[#e9967a] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1f1916]/60 ml-1">Company Name (Optional)</label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Acme Compliance Corp" 
                    disabled={loading}
                    className="w-full bg-white border-2 border-[#fbdad0]/60 rounded-2xl py-3 pl-12 pr-4 text-[#1f1916] font-medium outline-none focus:border-[#e9967a] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1f1916]/60 ml-1">Work Email *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com" 
                    disabled={loading}
                    className="w-full bg-white border-2 border-[#fbdad0]/60 rounded-2xl py-3 pl-12 pr-4 text-[#1f1916] font-medium outline-none focus:border-[#e9967a] transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#1f1916]/60 ml-1">Password *</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                  <input 
                    type="password" 
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••" 
                    disabled={loading}
                    className="w-full bg-white border-2 border-[#fbdad0]/60 rounded-2xl py-3 pl-12 pr-4 text-[#1f1916] font-medium outline-none focus:border-[#e9967a] transition-all text-sm"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#1f1916] hover:bg-[#d47f63] disabled:bg-[#1f1916]/40 text-[#f7ede2] py-4 rounded-full font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-3 transition-all cursor-pointer transform active:scale-98"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={16} /> Creating Account...
                  </>
                ) : (
                  <>
                    Register Profile <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-6">
              <p className="text-sm text-neutral-600 leading-relaxed">
                Please follow the verification link sent to <strong className="text-[#1f1916]">{formData.email}</strong> to activate access configurations.
              </p>
              <button 
                onClick={() => navigate("/login")}
                className="w-full bg-[#1f1916] text-[#f7ede2] py-4 rounded-full font-bold text-xs tracking-wider uppercase shadow-md hover:bg-[#d47f63] transition-colors cursor-pointer"
              >
                Return to Login Gate
              </button>
            </div>
          )}

          <p className="mt-10 text-center text-neutral-400 text-xs font-semibold tracking-wide">
            Already have credentials? <Link to="/login" className="text-[#d47f63] hover:underline transition-colors">Access Portal Gate</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;