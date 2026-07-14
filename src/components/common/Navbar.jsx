import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronDown, UserCircle, 
  ShieldCheck, Gavel, FileText, Landmark, LogOut, KeyRound 
} from "lucide-react";
import { auth } from "../../firebase";
import { onAuthStateChanged, signOut, sendPasswordResetEmail } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [user, setUser] = useState(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setActiveDropdown(null);
      setIsOpen(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleChangePassword = async () => {
    if (user && user.email) {
      try {
        await sendPasswordResetEmail(auth, user.email);
        alert(`A secure password modification link has been sent to ${user.email}`);
        setActiveDropdown(null);
        setIsOpen(false);
      } catch (error) {
        console.error("Password reset dispatch failed:", error);
      }
    }
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    const executeScroll = () => {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else if (sectionId === "home-section") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(executeScroll, 150);
    } else {
      executeScroll();
    }
  };

  const handleServiceClick = (path, matrixKey) => {
    setIsOpen(false);
    setActiveDropdown(null);
    
    const executeScrollAndTab = () => {
      if (matrixKey) {
        window.dispatchEvent(new CustomEvent("changeMatrixTab", { detail: matrixKey }));
      }
      
      const targetElement = document.getElementById("matrix-dashboard");
      if (targetElement) {
        const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - 20;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(executeScrollAndTab, 250); 
    } else {
      executeScrollAndTab();
    }
  };

  const serviceLinks = [
    { name: "Payroll Structuring", path: "/PayrollStructuring", icon: <Landmark size={18} />, matrixKey: "payroll" },
    { name: "PF & ESI Compliance", path: "/PFESICCompliance", icon: <ShieldCheck size={18} />, matrixKey: "pfesic" },
    { name: "Labour Law Advisory", path: "/LabourLawAdvisory", icon: <Gavel size={18} />, matrixKey: "labourLaw" },
    { name: "Contract Labour (CLRA)", path: "/ContractLabourCompliance", icon: <FileText size={18} />, matrixKey: "contractLabour" },
    { name: "Audit & Inspection", path: "/AuditInspectionReadiness", icon: <ShieldCheck size={18} />, matrixKey: "audit" },
    { name: "Labour Code Advisory", path: "/LabourCodeAdvisory", icon: <Landmark size={18} />, matrixKey: "labourLaw" },
  ];

  const getUserDisplayName = () => {
    if (!user) return "";
    return user.displayName || user.email.split("@")[0]; 
  };

  return (
    <>
      <div className="w-full bg-[#f7ede2]" style={{ height: scrolled ? "70px" : "84px" }}></div>
      
      <nav
        className={`fixed w-full z-[100] transition-all duration-500 px-6 lg:px-16 border-b-2 ${
          scrolled 
            ? "py-3 bg-[#f7ede2]/95 backdrop-blur-md border-[#e9967a]/30 shadow-md" 
            : "py-4 bg-[#f7ede2] border-transparent"
        }`}
        style={{ top: 0, left: 0, right: 0 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          <div className="group flex items-center gap-3 cursor-pointer z-[102]" onClick={() => scrollToSection("home-section")}>
            <div className="flex flex-col">
              <span className="font-black text-2xl md:text-3xl tracking-tighter leading-none uppercase italic text-[#1f1916]">
                LABOUR<span className="text-[#e9967a]">FORGE</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] mt-1 text-[#3d5a80]">Advisors</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-8 text-[13px] font-black uppercase tracking-widest text-[#1f1916]/80">
              <button onClick={() => scrollToSection("home-section")} className="hover:text-[#e9967a] transition-colors relative group py-2 bg-transparent border-none cursor-pointer font-black uppercase tracking-widest text-[13px]">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </button>
              
              <button onClick={() => scrollToSection("modern-showcase")} className="hover:text-[#e9967a] transition-colors relative group py-2 bg-transparent border-none cursor-pointer font-black uppercase tracking-widest text-[13px]">
                The Firm
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </button>

              <div className="relative py-2" onMouseEnter={() => setActiveDropdown("services")} onMouseLeave={() => setActiveDropdown(null)}>
                <button type="button" onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")} className={`flex items-center gap-2 transition-all hover:text-[#e9967a] relative group bg-transparent border-none cursor-pointer font-black uppercase tracking-widest text-[13px] ${activeDropdown === "services" ? "text-[#e9967a]" : ""}`}>
                  Our Focus Areas 
                  <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white border-2 border-[#fbdad0] rounded-2xl p-4 shadow-xl mt-2" style={{ zIndex: 105 }}>
                      <div className="grid grid-cols-1 gap-1">
                        <p className="text-[10px] text-[#e9967a] font-black uppercase tracking-wider mb-2 pb-2 border-b border-[#fbdad0]">Practice Areas</p>
                        {serviceLinks.map((service) => (
                          <button key={service.name} type="button" onClick={() => handleServiceClick(service.path, service.matrixKey)} className="flex items-center gap-3 p-2.5 hover:bg-[#fff5f2] rounded-xl transition-all group/item w-full text-left bg-transparent border-0 cursor-pointer">
                            <div className="text-[#3d5a80]/70 group-hover/item:text-[#e9967a] transition-colors">{service.icon}</div>
                            <span className="text-[#1f1916] text-xs font-bold uppercase tracking-wide">{service.name}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/knowledge" className="hover:text-[#e9967a] transition-colors relative group py-2">
                E-Library
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </Link>

              <button onClick={() => scrollToSection("contact-section")} className="hover:text-[#e9967a] transition-colors relative group py-2 bg-transparent border-none cursor-pointer font-black uppercase tracking-widest text-[13px]">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e9967a] transition-all group-hover:w-full"></span>
              </button>
            </div>

            <div className="flex items-center border-l-2 border-[#e9967a]/30 pl-8">
              {user ? (
                <div className="relative" onMouseEnter={() => setActiveDropdown("profile")} onMouseLeave={() => setActiveDropdown(null)}>
                  <button type="button" onClick={() => setActiveDropdown(activeDropdown === "profile" ? null : "profile")} className="group px-5 py-3 bg-[#1f1916] text-[#f7ede2] text-[11px] font-black uppercase tracking-widest hover:bg-[#d47f63] transition-all duration-300 flex items-center gap-2 rounded-full shadow-md cursor-pointer">
                    <UserCircle size={16} className="text-[#e9967a]" />
                    <span className="max-w-[120px] truncate">{getUserDisplayName()}</span>
                    <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === "profile" ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "profile" && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }} className="absolute right-0 top-full w-48 bg-white border-2 border-[#fbdad0] rounded-2xl p-2 shadow-xl mt-2 overflow-hidden" style={{ zIndex: 110 }}>
                        <button type="button" onClick={handleChangePassword} className="flex items-center gap-2 w-full p-2.5 text-left text-xs font-bold text-[#1f1916]/80 hover:text-[#d47f63] hover:bg-[#fff5f2] rounded-xl transition-all cursor-pointer bg-transparent border-none">
                          <KeyRound size={14} /> Change Password
                        </button>
                        <button type="button" onClick={handleLogout} className="flex items-center gap-2 w-full p-2.5 text-left text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-all cursor-pointer bg-transparent border-none border-t border-neutral-100 mt-1">
                          <LogOut size={14} /> Secure Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link to="/login" className="group px-6 py-3 bg-[#1f1916] text-[#f7ede2] text-[11px] font-black uppercase tracking-widest hover:bg-[#d47f63] transition-all duration-300 flex items-center gap-2 rounded-full shadow-md">
                  <UserCircle size={16} /> Partner Portal
                </Link>
              )}
            </div>
          </div>

          <button className="lg:hidden p-2 rounded-xl transition-colors z-[102] text-[#1f1916] hover:bg-[#fff5f2] border border-transparent hover:border-[#fbdad0] bg-transparent cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="lg:hidden fixed inset-0 bg-[#f7ede2] z-[200] overflow-y-auto border-l-4 border-[#e9967a]" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <div className="min-h-screen flex flex-col justify-center px-8 py-20">
              <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-[#1f1916]/60 hover:text-[#1f1916] p-2 rounded-full hover:bg-[#fff5f2] border border-[#fbdad0] transition-colors bg-transparent cursor-pointer">
                <X size={26} />
              </button>
              
              <div className="space-y-6">
                <button onClick={() => scrollToSection("home-section")} className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0] bg-transparent">Home</button>
                <button onClick={() => scrollToSection("modern-showcase")} className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0] bg-transparent">The Firm</button>
                
                <div className="py-2 border-b-2 border-[#fbdad0]">
                  <p className="text-[#3d5a80] text-xs font-black uppercase tracking-wider mb-3">Our Focus Areas</p>
                  <div className="grid grid-cols-1 gap-1">
                    {serviceLinks.map((service) => (
                      <button key={service.name} onClick={() => handleServiceClick(service.path, service.matrixKey)} className="flex items-center gap-3 text-[#1f1916]/80 hover:text-[#1f1916] hover:bg-white rounded-xl p-3 w-full transition-all border border-transparent hover:border-[#fbdad0] bg-transparent text-left cursor-pointer">
                        <div className="text-[#e9967a]">{service.icon}</div>
                        <span className="text-xs font-bold uppercase tracking-wide">{service.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <Link to="/knowledge" onClick={() => setIsOpen(false)} className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0]">E-Library</Link>
                <button onClick={() => scrollToSection("contact-section")} className="block text-3xl font-black uppercase tracking-tighter text-[#1f1916] hover:text-[#e9967a] transition-colors w-full text-left py-2 border-b-2 border-[#fbdad0] bg-transparent">Contact</button>
                
                <div className="pt-6 border-t border-[#fbdad0]">
                  {user ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 px-3 py-2 text-[#1f1916]/60 text-xs font-bold uppercase tracking-wider">
                        <UserCircle size={18} className="text-[#e9967a]" />
                        <span className="truncate">{user.email}</span>
                      </div>
                      <button onClick={handleChangePassword} className="flex items-center justify-center gap-3 w-full bg-white hover:bg-[#fff5f2] text-[#1f1916] border-2 border-[#fbdad0] px-6 py-3 rounded-xl font-black uppercase tracking-wider text-xs transition-all shadow-sm">
                        <KeyRound size={16} /> Change Password
                      </button>
                      <button onClick={handleLogout} className="flex items-center justify-center gap-3 w-full bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-xl font-black uppercase tracking-wider text-xs transition-all shadow-sm">
                        <LogOut size={16} /> Secure Logout
                      </button>
                    </div>
                  ) : (
                    <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-3 w-full bg-[#1f1916] hover:bg-[#d47f63] text-[#f7ede2] px-6 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all shadow-md">
                      <UserCircle size={20} /> Partner Portal
                    </Link>
                  )}
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