import { motion } from "framer-motion";
import { Award, Users, ShieldCheck, Zap, BarChart3, Clock, ArrowUpRight } from "lucide-react";

const WhyUs = () => {
  const stats = [
    { label: "Years Experience", value: "12+", icon: <Clock className="text-blue-400" /> },
    { label: "Clients Served", value: "500+", icon: <Users className="text-emerald-400" /> },
    { label: "Compliance Rate", value: "100%", icon: <ShieldCheck className="text-purple-400" /> },
    { label: "Expert Consultants", value: "15+", icon: <Award className="text-orange-400" /> },
  ];

  const features = [
    {
      title: "Statutory Expertise",
      desc: "Deep-rooted knowledge in EPF, ESIC, and Bonus Acts to protect your business from legal risks.",
      icon: <ShieldCheck size={24} />,
      gradient: "from-blue-500/20 to-transparent"
    },
    {
      title: "Real-time Filing",
      desc: "We ensure your GSTR-1 and 3B are filed way before the deadline, every single month.",
      icon: <Zap size={24} />,
      gradient: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Data-Driven MIS",
      desc: "Get monthly accounting reports and financial health checks to make informed decisions.",
      icon: <BarChart3 size={24} />,
      gradient: "from-purple-500/20 to-transparent"
    },
  ];

  return (
    <section className="bg-slate-950 py-32 px-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Brand Narrative & Micro-Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              The Chandan Edge
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
              Complexity <span className="text-slate-600">is our</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Specialty.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-xl">
              Since 2014, we've transformed the way businesses handle the Indian regulatory landscape. 
              We don't just file papers; we build compliance fortresses that let you scale without fear.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                  className="p-8 bg-slate-900/40 border border-white/5 rounded-[2rem] backdrop-blur-sm transition-all"
                >
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-white mb-1 tracking-tighter">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-black uppercase tracking-widest">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Feature Stack */}
          <div className="space-y-4 pt-4 lg:pt-0">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative p-8 bg-slate-900/30 border border-slate-800/50 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Subtle Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.gradient}`} />
                
                <div className="flex gap-8 items-center relative z-10">
                  <div className="w-16 h-16 bg-slate-800 rounded-[1.25rem] text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <ArrowUpRight className="text-slate-700 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base group-hover:text-slate-300 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Call to Action Link */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="pt-8 text-center lg:text-left"
            >
              <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all mx-auto lg:mx-0 group">
                View all our compliance modules 
                <span className="w-8 h-px bg-blue-500/50 group-hover:w-12 transition-all" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;