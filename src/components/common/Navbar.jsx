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
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll to top of page
  const scrollToTop = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle scroll to About section (The Firm)
  const scrollToAbout = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const aboutSection = document.getElementById('about-section');
        if (aboutSection) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
          const elementPosition = aboutSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const aboutSection = document.getElementById('about-section');
      if (aboutSection) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
        const elementPosition = aboutSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  // Handle scroll to Contact section
  const scrollToContact = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
          const elementPosition = contactSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  // Service links with correct paths matching AppRoutes
  const serviceLinks = [
    { 
      name: "Payroll Structuring", 
      path: "/PayrollStructuring",
      icon: <Landmark size={18} /> 
    },
    { 
      name: "PF & ESI Compliance", 
      path: "/PFESICCompliance",
      icon: <ShieldCheck size={18} /> 
    },
    { 
      name: "Labour Law Advisory", 
      path: "/LabourLawAdvisory",
      icon: <Gavel size={18} /> 
    },
    { 
      name: "Contract Labour (CLRA)", 
      path: "/ContractLabourCompliance",
      icon: <FileText size={18} /> 
    },
    { 
      name: "Audit & Inspection", 
      path: "/AuditInspectionReadiness",
      icon: <ShieldCheck size={18} /> 
    },
    { 
      name: "Labour Code Advisory", 
      path: "/LabourCodeAdvisory",
      icon: <Landmark size={18} /> 
    },
  ];

  return (
    <>
      {/* Spacer div to prevent content from hiding behind fixed navbar */}
      <div className="w-full bg-[#f7ede2]" style={{ height: scrolled ? '70px' : '84px' }}></div>
      
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 px-6 lg:px-16 border-b-2 ${
          scrolled 
            ? "py-3 bg-[#f7ede2]/95 backdrop-blur-md border-[#e9967a]/30 shadow-md" 
            : "py-4 bg-[#f7ede2] border-transparent"
        }`}
        style={{ top: 0, left: 0, right: 0 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* BRAND IDENTITY */}
          <div 
            className="group flex items-center gap-3 cursor-pointer z-[102]" 
            onClick={scrollToTop}
          >
            <div className="flex flex-col">
              <span className="font-black text-2xl md:text-3xl tracking-tighter leading-none uppercase italic text-[#1f1916]">
                LABOUR<span className="text-[#e9967a]">FORGE</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mt-1 text-[#3d5a80]">
                Advisors
              </span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-8 text-[13px] font-black uppercase tracking-widest text-[#1f1916]/80">
              
              {/* Home */}
              <button 
                onClick={scrollToTop}
                className="hover:text-[#e9967a] transition-colors relative group py-2"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </button>
              
              {/* The Firm */}
              <button 
                onClick={scrollToAbout}
                className="hover:text-[#e9967a] transition-colors relative group py-2"
              >
                The Firm
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </button>

              {/* ENTERPRISES Dropdown */}
              <div 
                className="relative py-2 cursor-pointer"
                onMouseEnter={() => setActiveDropdown("services")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center gap-2 transition-all hover:text-[#e9967a] relative group ${
                    activeDropdown === "services" ? "text-[#e9967a]" : ""
                  }`}
                >
                  Enterprises 
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} 
                  />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white border-2 border-[#fbdad0] rounded-2xl p-4 shadow-xl mt-2"
                      style={{ zIndex: 105 }}
                    >
                      <div className="grid grid-cols-1 gap-1">
                        <p className="text-[10px] text-[#e9967a] font-black uppercase tracking-wider mb-2 pb-2 border-b border-[#fbdad0]">
                          Practice Areas
                        </p>
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                            className="flex items-center gap-3 p-2.5 hover:bg-[#fff5f2] rounded-xl transition-all group/item w-full text-left"
                          >
                            <div className="text-[#3d5a80]/70 group-hover/item:text-[#e9967a] transition-colors">
                              {service.icon}
                            </div>
                            <span className="text-[#1f1916] text-xs font-bold uppercase tracking-wide">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* E-LIBRARY */}
              <Link 
                to="/knowledge" 
                className="hover:text-[#e9967a] transition-colors relative group py-2"
                onClick={() => setIsOpen(false)}
              >
                E-Library
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </Link>

              {/* Contact */}
              <button 
                onClick={scrollToContact}
                className="hover:text-[#e9967a] transition-colors relative group py-2"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </button>
            </div>

            {/* PARTNER PORTAL BUTTON */}
            <div className="flex items-center border-l-2 border-[#e9967a]/30 pl-8">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="group px-6 py-3 bg-[#1f1916] text-[#f7ede2] text-[11px] font-black uppercase tracking-widest hover:bg-[#d47f63] transition-all duration-300 flex items-center gap-2 rounded-full shadow-md"
              >
                <UserCircle size={16} />
                Partner Portal
              </Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="lg:hidden p-2 rounded-xl transition-colors z-[102] text-[#1f1916] hover:bg-[#fff5f2] border border-transparent hover:border-[#fbdad0]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-[#f7ede2] z-[200] overflow-y-auto border-l-4 border-[#e9967a]"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            <div className="min-h-screen flex flex-col justify-center px-8 py-20">
              <button 
                onClick={() => setIsOpen(false)} 
                className="absolute top-6 right-6 text-[#1f1916]/60 hover:text-[#1f1916] p-2 rounded-full hover:bg-[#fff5f2] border border-[#fbdad0] transition-colors"
              >
                <X size={26} />
              </button>
              
              <div className="space-y-6">
                {/* Home */}
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                  className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0]"
                >
                  Home
                </button>
                
                {/* The Firm */}
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToAbout();
                  }}
                  className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0]"
                >
                  The Firm
                </button>
                
                <div className="py-2 border-b-2 border-[#fbdad0]">
                  <p className="text-[#3d5a80] text-xs font-black uppercase tracking-wider mb-3">Enterprises</p>
                  <div className="grid grid-cols-1 gap-1">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 text-[#1f1916]/80 hover:text-[#1f1916] hover:bg-white rounded-xl p-3 w-full transition-all border border-transparent hover:border-[#fbdad0]"
                      >
                        <div className="text-[#e9967a]">{service.icon}</div>
                        <span className="text-xs font-bold uppercase tracking-wide">{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* E-Library */}
                <Link 
                  to="/knowledge" 
                  onClick={() => setIsOpen(false)} 
                  className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0]"
                >
                  E-Library
                </Link>

                {/* Contact */}
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    scrollToContact();
                  }}
                  className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0]"
                >
                  Contact
                </button>
                
                <div className="pt-6">
                  <Link 
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-[#1f1916] hover:bg-[#d47f63] text-[#f7ede2] px-6 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all shadow-md"
                  >
                    <UserCircle size={20} /> Partner Portal
                  </Link>
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