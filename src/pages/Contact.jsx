import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="text-blue-400" />,
      title: "Call Us",
      value: "+91 95557 69448",
      sub: "Mon-Sat, 9am - 7pm",
      color: "border-blue-500/20"
    },
    {
      icon: <MessageSquare className="text-emerald-400" />,
      title: "WhatsApp",
      value: "Chat with Expert",
      sub: "Instant Response",
      color: "border-emerald-500/20"
    },
    {
      icon: <Mail className="text-purple-400" />,
      title: "Email",
      value: "consult@chandan.com",
      sub: "24hr Response Time",
      color: "border-purple-500/20"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Let's Talk <span className="text-blue-500">Compliance</span>
          </motion.h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Whether you're facing a GST notice or looking for end-to-end payroll management, our experts are ready to secure your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="space-y-6">
            {contactMethods.map((method, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className={`p-6 bg-slate-900 rounded-3xl border ${method.color} flex items-center gap-6 shadow-xl`}
              >
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0">
                  {method.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{method.title}</p>
                  <p className="text-xl font-bold text-white">{method.value}</p>
                  <p className="text-xs text-slate-400">{method.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Office Address Card */}
            <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-red-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Our Headquarters</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Corporate Suite 402, Business Park,<br /> 
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
              <div className="w-full h-48 bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-700">
                 <span className="text-slate-600 italic text-sm text-center px-4">Interactive Google Maps <br/> Integration Placeholder</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Visibility Form */}
          <div className="lg:col-span-2">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900 border border-slate-700 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -z-0" />
              
              <div className="relative z-10 grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-slate-400 text-sm font-semibold ml-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-100 text-slate-900 p-4 rounded-2xl outline-none ring-offset-slate-900 focus:ring-4 focus:ring-blue-500/20 transition-all font-medium" placeholder="Ex: Rahul Sharma" />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-sm font-semibold ml-1">Phone Number</label>
                  <input type="tel" className="w-full bg-slate-100 text-slate-900 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 transition-all font-medium" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-slate-400 text-sm font-semibold ml-1">Service Required</label>
                <select className="w-full bg-slate-100 text-slate-900 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 transition-all font-bold appearance-none">
                  <option>GST Compliance</option>
                  <option>Labour Law & PF</option>
                  <option>Payroll Management</option>
                  <option>Other Advisory</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-slate-400 text-sm font-semibold ml-1">Message</label>
                <textarea rows="4" className="w-full bg-slate-100 text-slate-900 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-blue-500/20 transition-all font-medium resize-none" placeholder="Briefly describe your requirements..."></textarea>
              </div>

              <button className="group w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-emerald-900/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3">
                Send My Inquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <p className="text-center text-slate-500 text-xs mt-6">
                By submitting, you agree to be contacted for professional consultation.
              </p>
            </motion.form>
          </div>

        </div>
      </div>
    </div>
  );
}