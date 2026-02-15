import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, Send, Sparkles, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      value: "+91 95557 69448",
      sub: "Mon-Sat, 9am - 7pm",
      color: "bg-blue-50 text-blue-600",
      border: "border-blue-100"
    },
    {
      icon: <MessageSquare size={24} />,
      title: "WhatsApp",
      value: "Chat with Expert",
      sub: "Instant Response",
      color: "bg-emerald-50 text-emerald-600",
      border: "border-emerald-100"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "office@laborforge.com",
      sub: "24hr Response Time",
      color: "bg-rose-50 text-rose-600",
      border: "border-rose-100"
    }
  ];

  return (
    <div className="bg-[#FCFAF7] min-h-screen py-32 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -z-0 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm mb-6"
          >
            <Sparkles size={14} className="text-amber-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Connect with us</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85]"
          >
            Let's Talk <br />
            <span className="text-emerald-500 italic font-light">Compliance.</span>
          </motion.h1>
          
          <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
            Whether you're facing a GST notice or looking for end-to-end payroll management, our experts are ready to secure your business today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className={`p-8 bg-white rounded-[2.5rem] border ${method.border} flex items-center gap-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] transition-all`}
              >
                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center shrink-0`}>
                  {method.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{method.title}</p>
                  <p className="text-xl font-black text-slate-900 tracking-tight">{method.value}</p>
                  <p className="text-xs font-bold text-slate-400 mt-0.5">{method.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Office Address Card */}
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)]">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg tracking-tight mb-1">Our Headquarters</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Corporate Suite 402, Business Park,<br /> 
                    Noida, Uttar Pradesh, India 201301
                  </p>
                </div>
              </div>
              <div className="w-full h-56 bg-slate-50 rounded-3xl overflow-hidden flex flex-col items-center justify-center border border-slate-100 group cursor-pointer">
                 <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                   <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                 </div>
                 <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Open in Google Maps</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Visibility Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white border border-slate-100 p-8 md:p-16 rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.04)] relative"
            >
              <div className="flex items-center gap-3 mb-12 border-b border-slate-50 pb-8">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Direct Consultation Request</h2>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-100 text-slate-900 p-5 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-bold placeholder:text-slate-300" placeholder="Rahul Sharma" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Phone Number</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-100 text-slate-900 p-5 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-bold placeholder:text-slate-300" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Service Required</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-100 text-slate-900 p-5 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-black appearance-none cursor-pointer">
                      <option>GST Compliance & Audit</option>
                      <option>Labour Law & PF Management</option>
                      <option>Corporate Payroll Solutions</option>
                      <option>Statutory Advisory</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-black">↓</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-slate-900 text-xs font-black uppercase tracking-widest ml-1">Message</label>
                  <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 text-slate-900 p-5 rounded-2xl outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/5 focus:border-emerald-500 transition-all font-bold resize-none placeholder:text-slate-300" placeholder="Briefly describe your business requirements..."></textarea>
                </div>

                <button className="group w-full bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs py-6 rounded-2xl shadow-2xl shadow-slate-200 hover:bg-emerald-600 active:scale-95 transition-all flex items-center justify-center gap-4">
                  Send Inquiry <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                  {["Secure Data", "Zero Penalty", "Expert Support"].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-500" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}