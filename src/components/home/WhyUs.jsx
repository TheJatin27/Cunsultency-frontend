import { motion } from "framer-motion";
import { Award, Users, ShieldCheck, Zap, BarChart3, Clock } from "lucide-react";

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
    },
    {
      title: "Real-time Filing",
      desc: "We ensure your GSTR-1 and 3B are filed way before the deadline, every single month.",
      icon: <Zap size={24} />,
    },
    {
      title: "Data-Driven MIS",
      desc: "Get monthly accounting reports and financial health checks to make informed decisions.",
      icon: <BarChart3 size={24} />,
    },
  ];

  return (
    <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Why Choose Chandan Compliance
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              We handle the <span className="text-blue-400">Complexity</span>, <br />
              You handle the <span className="text-emerald-400">Growth.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Managing compliance shouldn't be a hurdle. With over a decade of experience, 
              we've refined a system that automates the boring stuff while keeping 
              the legal precision of a high-end law firm.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-slate-900/50 border border-white/5 rounded-2xl"
                >
                  <div className="mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-8 bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;