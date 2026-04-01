import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, UserCircle, 
  ShieldCheck, Gavel, FileText, Landmark 
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(80);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Get actual navbar height
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to section with proper offset for fixed navbar
  const scrollToSection = (id) => {
    setIsOpen(false);
    setActiveDropdown(null);

    const scrollToElement = () => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20; // Extra 20px for better spacing
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll after a short delay
      navigate("/");
      setTimeout(() => {
        scrollToElement();
      }, 150);
    } else {
      scrollToElement();
    }
  };

  const serviceLinks = [
    { name: "Compliance Management", id: "expertise", icon: <ShieldCheck size={18} /> },
    { name: "Minimum Wages & Audit", id: "expertise", icon: <Gavel size={18} /> },
    { name: "EPF & ESI Advisory", id: "expertise", icon: <Landmark size={18} /> },
    { name: "Contract Labour (CLRA)", id: "expertise", icon: <FileText size={18} /> },
  ];

  return (
    <>
      {/* Spacer div to prevent content from hiding behind fixed navbar */}
      <div className="w-full" style={{ height: scrolled ? '70px' : '84px' }}></div>
      
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 px-6 lg:px-16 ${
          scrolled 
            ? "py-3 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg" 
            : "py-4 bg-gradient-to-b from-black/60 via-black/20 to-transparent"
        }`}
        style={{ top: 0, left: 0, right: 0 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* BRAND IDENTITY */}
          <div 
            className="group flex items-center gap-3 cursor-pointer z-[102]" 
            onClick={() => scrollToSection('home')}
          >
            <div className="flex flex-col">
              <span className={`font-black text-2xl md:text-3xl tracking-tighter leading-none transition-colors duration-500 uppercase italic ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                LABOR<span className="text-blue-500">FORGE</span>
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.4em] mt-1 transition-colors duration-500 ${
                scrolled ? "text-slate-500" : "text-blue-300"
              }`}>
                Advisors
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            <div className={`flex gap-8 text-[13px] font-black uppercase tracking-widest ${
              scrolled ? "text-slate-700" : "text-white"
            }`}>
              <button 
                onClick={() => scrollToSection('home')} 
                className="hover:text-blue-500 transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('firm')} 
                className="hover:text-blue-500 transition-colors relative group"
              >
                The Firm
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </button>

              {/* ENTERPRISES Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center gap-2 transition-all hover:text-blue-500 relative group ${
                    activeDropdown === "services" ? "text-blue-500" : ""
                  }`}
                >
                  Enterprises 
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} 
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white border border-slate-100 rounded-2xl p-4 shadow-2xl mt-3"
                      style={{ zIndex: 105 }}
                    >
                      <div className="grid grid-cols-1 gap-1">
                        <p className="text-[9px] text-blue-600 font-black uppercase tracking-wider mb-2 pb-2 border-b border-slate-100">
                          Practice Areas
                        </p>
                        {serviceLinks.map((service) => (
                          <button 
                            key={service.name} 
                            onClick={() => scrollToSection(service.id)}
                            className="flex items-center gap-3 p-2.5 hover:bg-blue-50 rounded-lg transition-all group/item w-full text-left"
                          >
                            <div className="text-slate-400 group-hover/item:text-blue-600 transition-colors">
                              {service.icon}
                            </div>
                            <span className="text-slate-800 text-xs font-semibold uppercase tracking-wide">
                              {service.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* E-LIBRARY Link */}
              <Link 
                to="/knowledge" 
                className="hover:text-blue-500 transition-colors relative group"
              >
                E-Library
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </Link>
            </div>

            {/* PARTNER PORTAL BUTTON */}
            <div className={`flex items-center border-l pl-8 ${scrolled ? "border-slate-200" : "border-white/20"}`}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="group px-6 py-2.5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 rounded-full shadow-lg shadow-blue-600/20"
              >
                <UserCircle size={16} />
                Partner Portal
              </button>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors z-[102] ${
              scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY - Fixed positioning to prevent overlap */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 z-[200] overflow-y-auto"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <div className="min-h-screen flex flex-col justify-center px-8 py-20">
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-6 right-6 text-white/60 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={28} />
              </button>
              
              <div className="space-y-6">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-400 transition-colors w-full text-left py-2 border-b border-white/10"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('firm')} 
                  className="block text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-400 transition-colors w-full text-left py-2 border-b border-white/10"
                >
                  The Firm
                </button>
                <button 
                  onClick={() => scrollToSection('expertise')} 
                  className="block text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-400 transition-colors w-full text-left py-2 border-b border-white/10"
                >
                  Enterprises
                </button>
                
                <Link 
                  to="/knowledge" 
                  onClick={() => setIsOpen(false)} 
                  className="block text-3xl font-black uppercase tracking-tighter text-white hover:text-blue-400 transition-colors w-full text-left py-2 border-b border-white/10"
                >
                  E-Library
                </Link>
                
                {/* Mobile Service Links */}
                <div className="pt-4 space-y-2">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">Practice Areas</p>
                  {serviceLinks.map((service) => (
                    <button 
                      key={service.name}
                      onClick={() => scrollToSection(service.id)}
                      className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg p-3 w-full transition-colors"
                    >
                      <div className="text-blue-400">{service.icon}</div>
                      <span className="text-sm font-semibold uppercase tracking-wide">{service.name}</span>
                    </button>
                  ))}
                </div>
                
                <div className="pt-8">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all"
                  >
                    <UserCircle size={20} /> Partner Portal
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;