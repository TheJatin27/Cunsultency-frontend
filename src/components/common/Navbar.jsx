import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, UserCircle, BookOpen, Newspaper, Phone, Home, Layers } from "lucide-react";

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

  const serviceLinks = [
    { name: "Compliance Management", path: "ComplianceRetainership" },
    { name: "Registration & Setup", path: "/EstablishmentSetup" },
    { name: "Compliance Audit", path: "/ComplianceAudit" },
    { name: "New Labour Code Advisory", path: "/LabourCodeTransition" },
  ];

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={14} /> },
    { name: "About", path: "/about" },
    // { name: "Industries", path: "/industries" },
    { name: "E-Library", path: "/knowledge", icon: <BookOpen size={14} /> },
    // { name: "Blog", path: "/blog", icon: <Newspaper size={14} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={14} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 px-6 ${
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: -5, scale: 1.05 }}
            className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center font-black text-white shadow-lg"
          >
            LF
          </motion.div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-black text-xl tracking-tighter leading-none">
              LABOR<span className="text-emerald-500">.</span>FORGE
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Advisory Group</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-7 text-[11px] font-black uppercase tracking-widest text-slate-500">
            {/* Home & About */}
            <NavLink link={navLinks[0]} active={location.pathname === "/"} />
            <NavLink link={navLinks[1]} active={location.pathname === "/about"} />

            {/* Services Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors uppercase tracking-widest hover:text-slate-900 ${activeDropdown === "services" ? "text-slate-900" : ""}`}>
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-4 w-72 bg-white border border-slate-100 rounded-2xl p-3 shadow-2xl mt-2 overflow-hidden"
                  >
                    <div className="p-3 mb-2 bg-slate-50 rounded-xl">
                      <p className="text-[9px] text-slate-400 font-black">Practice Areas</p>
                    </div>
                    {serviceLinks.map((service) => (
                      <Link 
                        key={service.name} 
                        to={service.path}
                        className="flex items-center justify-between py-3 px-4 text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50 rounded-xl transition-all font-bold text-[10px]"
                      >
                        {service.name}
                        <Layers size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remaining Links */}
            {navLinks.slice(2).map((link) => (
              <NavLink key={link.name} link={link} active={location.pathname === link.path} />
            ))}
          </div>

          {/* Action Group */}
          <div className="flex items-center border-l border-slate-200 ml-2 pl-8">
            <Link 
              to="/login" 
              className="px-5 py-2.5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-full hover:bg-emerald-600 transition-all flex items-center gap-2 shadow-md shadow-slate-200"
            >
              <UserCircle size={16} />
              Client Login
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-900 p-2 bg-slate-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="lg:hidden fixed top-0 right-0 w-[85%] h-full bg-white shadow-2xl z-[101] p-8 border-l border-slate-100"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-black text-slate-900 tracking-tighter italic">MENU.</span>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-50 rounded-full"><X size={20}/></button>
            </div>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-slate-900 hover:text-emerald-600 transition-colors flex items-center justify-between"
                >
                  {link.name} <span className="opacity-20">/</span>
                </Link>
              ))}
              
              <div className="h-px bg-slate-100 my-4" />
              
              <div className="space-y-4">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Our Expertise</p>
                {serviceLinks.map((s) => (
                  <Link 
                    key={s.name} 
                    to={s.path} 
                    onClick={() => setIsOpen(false)} 
                    className="block text-slate-500 font-bold hover:text-slate-900"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="mt-8 flex items-center justify-center gap-2 bg-emerald-600 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-emerald-100"
              >
                <UserCircle size={20} /> Client Portal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ link, active }) => (
  <Link
    to={link.path}
    className={`relative group py-2 transition-colors ${active ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
  >
    <span className="flex items-center gap-1.5 font-black">{link.name}</span>
    {active && (
      <motion.div 
        layoutId="nav-underline" 
        className="absolute -bottom-1 left-0 w-full h-1 bg-emerald-500 rounded-full" 
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
      />
    )}
  </Link>
);

export default Navbar;