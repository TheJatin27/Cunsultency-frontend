import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Use Link for external routing
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, UserCircle, 
  ShieldCheck, Gavel, FileText, Landmark 
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Internal Navigation Smooth Scroll (for same-page sections)
  const scrollToSection = (id) => {
    // If we are already on the home page, scroll
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        setActiveDropdown(null);
      }
    }
  };

  const serviceLinks = [
    { name: "Compliance Management", id: "expertise", icon: <ShieldCheck size={18} /> },
    { name: "Minimum Wages & Audit", id: "expertise", icon: <Gavel size={18} /> },
    { name: "EPF & ESI Advisory", id: "expertise", icon: <Landmark size={18} /> },
    { name: "Contract Labour (CLRA)", id: "expertise", icon: <FileText size={18} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 px-6 lg:px-16 ${
        scrolled 
          ? "py-4 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* BRAND IDENTITY: Chandan Roy's Vision */}
        <div className="group flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <div className="flex flex-col">
            <span className={`font-black text-2xl md:text-3xl tracking-tighter leading-none transition-colors duration-500 uppercase italic ${
              scrolled ? "text-slate-900" : "text-white"
            }`}>
              LABOR<span className="text-blue-500">FORGE</span>
            </span>
            <span className={`text-[11px] font-bold uppercase tracking-[0.4em] mt-1 transition-colors duration-500 ${
              scrolled ? "text-slate-500" : "text-blue-400"
            }`}>
              Advisors
            </span>
          </div>
        </div>

        {/* DESKTOP ARCHITECTURE: Large Visible Text */}
        <div className="hidden lg:flex items-center gap-10">
          <div className={`flex gap-8 text-[14px] font-black uppercase tracking-widest ${
            scrolled ? "text-slate-700" : "text-white"
          }`}>
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-500 transition-colors">Home</button>
            <button onClick={() => scrollToSection('firm')} className="hover:text-blue-500 transition-colors">The Firm</button>

            {/* ENTERPRISES (Expertise Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-2 transition-all hover:text-blue-500 ${activeDropdown === "services" ? "text-blue-500" : ""}`}>
                Enterprises <ChevronDown size={16} className={`transition-transform duration-500 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-20 w-[320px] bg-white border border-slate-100 rounded-xl p-5 shadow-2xl mt-4"
                  >
                    <div className="grid grid-cols-1 gap-1 text-left">
                      <p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mb-3 pb-2 border-b border-slate-50">Practice Areas</p>
                      {serviceLinks.map((service) => (
                        <button 
                          key={service.name} 
                          onClick={() => scrollToSection(service.id)}
                          className="flex items-center gap-4 p-3 hover:bg-blue-50 rounded-lg transition-all group/item w-full text-left"
                        >
                          <div className="text-slate-400 group-hover/item:text-blue-600 transition-colors">
                            {service.icon}
                          </div>
                          <span className="text-slate-900 text-xs font-black uppercase leading-none">{service.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* E-LIBRARY: Navigates to /knowledge */}
            <Link to="/knowledge" className="hover:text-blue-500 transition-colors">
              E-Library
            </Link>
          </div>

          {/* PARTNER PORTAL: Direct Contact */}
          <div className={`flex items-center border-l ml-2 pl-8 ${scrolled ? "border-slate-200" : "border-white/20"}`}>
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-3.5 bg-blue-600 text-white text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 rounded-full shadow-lg shadow-blue-600/20"
            >
              <UserCircle size={18} />
              Partner Portal
            </button>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="lg:hidden fixed inset-0 h-screen bg-slate-950 z-[101] p-10 flex flex-col justify-center text-white"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white"><X size={32}/></button>
            
            <div className="space-y-8">
              <button onClick={() => scrollToSection('home')} className="block text-4xl font-black uppercase text-left italic">Home</button>
              <button onClick={() => scrollToSection('firm')} className="block text-4xl font-black uppercase text-left italic">The Firm</button>
              <button onClick={() => scrollToSection('expertise')} className="block text-4xl font-black uppercase text-left italic">Enterprises</button>
              
              {/* Mobile Link to E-Library */}
              <Link to="/knowledge" onClick={() => setIsOpen(false)} className="block text-4xl font-black uppercase text-left italic hover:text-blue-500">
                E-Library
              </Link>
              
              <div className="h-1 bg-blue-600 w-12 my-6 rounded-full" />
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-4 text-white bg-blue-600 px-6 py-4 rounded-xl font-black uppercase tracking-widest text-sm"
              >
                <UserCircle size={24} /> Partner Portal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;