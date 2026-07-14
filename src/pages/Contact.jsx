import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  Gavel, 
  Scale,
  Clock,
  Loader2,
  CheckCircle2
} from "lucide-react";

// Firestore Configuration Hooks
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  // Form and State Parameters
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    matter: "Audit & Inspection Support",
    brief: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Validation Shield
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.brief.trim()) {
      setError("Please complete all security parameter fields before finalizing request.");
      return;
    }

    try {
      setLoading(true);

      // Write directly to Firebase Firestore "queries" collection
      await addDoc(collection(db, "queries"), {
        representativeName: formData.name,
        corporateEmail: formData.email,
        contactPhone: formData.phone,
        matterSpecification: formData.matter,
        caseBrief: formData.brief,
        submittedAt: serverTimestamp()
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        matter: "Audit & Inspection Support",
        brief: ""
      });
    } catch (err) {
      console.error("Firestore serialization failure:", err);
      setError("Transmission engine failed. Please try verifying database context schema.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f7ede2] min-h-screen py-24 lg:py-36 px-6 relative overflow-hidden font-sans selection:bg-[#ffcad4]">
      {/* Background Cinematic Glow Elements matching Login Page */}
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#e9967a]/20 to-[#ffdac1]/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tr from-[#3d5a80]/10 to-[#e9967a]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT PANEL: BRAND IDENTITY & CHANNELS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1f1916] border border-[#fbdad0]/20 rounded-full mb-6"
              >
                <Sparkles size={12} className="text-[#e9967a]" />
                <span className="text-[9px] font-black text-[#f7ede2] uppercase tracking-[0.25em]">Priority Advisory Active</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-[#1f1916] mb-6 tracking-tight leading-[1.05]"
              >
                Mitigate Risk. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e9967a] to-[#d47f63] italic font-serif font-light">
                  Secure Growth.
                </span>
              </motion.h1>
              
              <p className="text-neutral-600 text-sm md:text-base font-normal leading-relaxed max-w-md">
                Connect directly with lead consultant <span className="text-[#1f1916] font-bold">Chandan Roy</span> and our compliance engineering group to defend your ecosystem against statutory exposure.
              </p>
            </div>

            {/* Structured Info Cards Container */}
            <div className="space-y-3">
              <div className="p-5 bg-white border-2 border-[#fbdad0]/60 rounded-2xl flex items-center gap-5 transition-all hover:border-[#e9967a] shadow-sm">
                <div className="w-11 h-11 bg-[#e9967a]/10 rounded-xl flex items-center justify-center text-[#d47f63] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5">Direct Hotline</p>
                  <p className="text-sm font-bold text-[#1f1916] tracking-wide">+91 95557 69448</p>
                </div>
              </div>

              <div className="p-5 bg-white border-2 border-[#fbdad0]/60 rounded-2xl flex items-center gap-5 transition-all hover:border-[#e9967a] shadow-sm">
                <div className="w-11 h-11 bg-[#3d5a80]/10 rounded-xl flex items-center justify-center text-[#3d5a80] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-neutral-400 uppercase tracking-wider mb-0.5">Corporate Vault Intake</p>
                  <p className="text-sm font-bold text-[#1f1916] tracking-wide">office@laborforge.com</p>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#1f1916] to-[#3a302c] border-2 border-[#fbdad0]/40 rounded-2xl relative overflow-hidden shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#f7ede2] to-[#e9967a] rounded-xl flex items-center justify-center text-[#1f1916] shrink-0 shadow-sm font-bold">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f7ede2] text-xs tracking-wider uppercase mb-1">Corporate Headquarters</h4>
                    <p className="text-[#fbdad0]/70 text-[11px] leading-relaxed font-medium">
                      Executive Suite, Sector 62, Noida, <br />Uttar Pradesh, India 201301
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: CASE INTAKE GATEWAY */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#fffdfb] border-2 border-[#fbdad0]/80 p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(31,25,22,0.06)] relative"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-[#fbdad0] pb-6">
                <div className="w-2 h-2 bg-[#e9967a] rounded-full animate-pulse" />
                <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#1f1916]/60">Statutory Briefing Ledger</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-rose-50 border-2 border-rose-200/60 text-rose-700 rounded-2xl text-xs font-bold tracking-wide">
                    {error}
                  </div>
                )}
                
                {success && (
                  <div className="p-4 bg-emerald-50 border-2 border-emerald-200/60 text-emerald-800 rounded-2xl text-xs font-bold tracking-wide flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>Your dossier review has been logged. Our advisory architecture will engage shortly.</span>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-[#1f1916]/60 text-[10px] font-black uppercase tracking-widest ml-1">Company Representative</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-white border-2 border-[#fbdad0]/60 text-[#1f1916] py-4 px-5 rounded-2xl outline-none focus:border-[#e9967a] transition-all font-medium placeholder:text-neutral-400 text-sm shadow-sm disabled:opacity-50" 
                    placeholder="Full Name" 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[#1f1916]/60 text-[10px] font-black uppercase tracking-widest ml-1">Work Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full bg-white border-2 border-[#fbdad0]/60 text-[#1f1916] py-4 px-5 rounded-2xl outline-none focus:border-[#e9967a] transition-all font-medium placeholder:text-neutral-400 text-sm shadow-sm disabled:opacity-50" 
                      placeholder="name@company.com" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[#1f1916]/60 text-[10px] font-black uppercase tracking-widest ml-1">Direct Contact Vector</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full bg-white border-2 border-[#fbdad0]/60 text-[#1f1916] py-4 px-5 rounded-2xl outline-none focus:border-[#e9967a] transition-all font-medium placeholder:text-neutral-400 text-sm shadow-sm disabled:opacity-50" 
                      placeholder="+91 00000 00000" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#1f1916]/60 text-[10px] font-black uppercase tracking-widest ml-1">Matter Specification</label>
                  <div className="relative">
                    <select 
                      name="matter"
                      value={formData.matter}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full bg-white border-2 border-[#fbdad0]/60 text-[#1f1916] py-4 px-5 rounded-2xl outline-none focus:border-[#e9967a] transition-all font-bold appearance-none cursor-pointer text-xs md:text-sm shadow-sm disabled:opacity-50"
                    >
                      <option value="Audit & Inspection Support">Audit & Inspection Support</option>
                      <option value="EPF & ESI Advisory">EPF & ESI Advisory</option>
                      <option value="CLRA & Contract Labour Management">CLRA & Contract Labour Management</option>
                      <option value="Wage Structuring & Review">Wage Structuring & Review</option>
                      <option value="General Compliance Audit">General Compliance Audit</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#d47f63] font-bold">↓</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#1f1916]/60 text-[10px] font-black uppercase tracking-widest ml-1">Case Brief</label>
                  <textarea 
                    name="brief"
                    rows="4" 
                    value={formData.brief}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full bg-white border-2 border-[#fbdad0]/60 text-[#1f1916] p-5 rounded-2xl outline-none focus:border-[#e9967a] transition-all font-light resize-none placeholder:text-neutral-400 text-sm shadow-sm disabled:opacity-50" 
                    placeholder="Provide details regarding your current compliance challenge or notice received..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-[#1f1916] hover:bg-[#d47f63] text-[#f7ede2] font-bold uppercase tracking-[0.2em] text-xs py-4 rounded-full shadow-[0_10px_25px_rgba(31,25,22,0.15)] hover:shadow-[0_15px_30px_rgba(233,150,122,0.3)] transition-all flex items-center justify-center gap-3 disabled:bg-[#1f1916]/40 disabled:cursor-not-allowed transform active:scale-[0.99] cursor-pointer"
                >
                  {loading ? (
                    <>
                      Executing Secure Log... <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Initialize Consultation Brief <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <div className="flex flex-wrap items-center justify-center gap-8 mt-8 opacity-40">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#d47f63]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#1f1916]">Audit Shield Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gavel size={14} className="text-[#d47f63]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#1f1916]">Zero Penalty Protocol</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale size={14} className="text-[#d47f63]" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#1f1916]">Statutory Integrity</span>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Trust Footer Grid */}
      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-[#fbdad0] flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-400">
        <div className="flex items-center gap-3">
           <Clock size={16} className="text-[#e9967a]" />
           <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Average Advisory Response Vector: 4 Hours</p>
        </div>
        <p className="text-[9px] uppercase tracking-[0.35em] font-bold text-center md:text-right text-neutral-500">
            LaborForge Advisors • Forging Compliance, Shaping Success
        </p>
      </div>
    </div>
  );
}