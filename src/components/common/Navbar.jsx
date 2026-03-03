import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const serviceLinks = [
    { name: "Compliance Management", path: "/compliance", icon: <ShieldCheck size={16} />, desc: "Statutory management" },
    { name: "Minimum Wages & Audit", path: "/wages", icon: <Gavel size={16} />, desc: "Legal wage structuring" },
    { name: "EPF & ESI Advisory", path: "/epf-esi", icon: <Landmark size={16} />, desc: "Social security adherence" },
    { name: "Contract Labour (CLRA)", path: "/clra", icon: <FileText size={16} />, desc: "Licensing & regulation" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Firm", path: "/about" },
    { name: "E-Library", path: "/knowledge" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 px-6 lg:px-20 ${
        scrolled 
          ? "py-4 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* BRAND IDENTITY */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-slate-900 font-black text-xl tracking-tighter leading-none group-hover:text-emerald-600 transition-colors uppercase italic">
              LABORFORGE
            </span>
            <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-[0.4em] mt-1">
              Advisors
            </span>
          </div>
        </Link>

        {/* DESKTOP ARCHITECTURE */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <NavLink link={navLinks[0]} active={location.pathname === "/"} />
            <NavLink link={navLinks[1]} active={location.pathname === "/about"} />

            {/* SERVICES DROP-PANEL */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-2 transition-all hover:text-slate-900 ${activeDropdown === "services" ? "text-emerald-600" : ""}`}>
                Expertise <ChevronDown size={10} className={`transition-transform duration-500 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full -left-24 w-[380px] bg-white border border-slate-100 rounded-sm p-5 shadow-2xl mt-4"
                  >
                    <div className="grid grid-cols-1 gap-1">
                      <p className="text-[8px] text-emerald-600 font-black uppercase tracking-widest mb-3 pb-2 border-b border-slate-50">Practice Areas</p>
                      {serviceLinks.map((service) => (
                        <Link 
                          key={service.name} 
                          to={service.path}
                          className="flex items-center gap-4 p-3 hover:bg-slate-50 transition-all group/item border border-transparent"
                        >
                          <div className="text-slate-400 group-hover/item:text-emerald-600 transition-colors">
                            {service.icon}
                          </div>
                          <div>
                            <p className="text-slate-900 text-[11px] font-bold tracking-tight uppercase">{service.name}</p>
                            <p className="text-slate-400 text-[10px] font-medium tracking-normal normal-case italic">{service.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink link={navLinks[2]} active={location.pathname === "/knowledge"} />
            <NavLink link={navLinks[3]} active={location.pathname === "/contact"} />
          </div>

          {/* CTA GROUP */}
          <div className="flex items-center border-l border-slate-100 ml-4 pl-10">
            <Link 
              to="/login" 
              className="group px-6 py-3 bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest hover:bg-emerald-700 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-slate-200"
            >
              <UserCircle size={14} />
              Partner Portal
            </Link>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 h-screen bg-white z-[101] p-12 flex flex-col justify-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-slate-400"><X size={32}/></button>
            
            <div className="space-y-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="block text-3xl font-bold text-slate-900 hover:text-emerald-600 transition-colors tracking-tighter"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 w-12 my-8" />
              <div className="grid gap-4">
                {serviceLinks.map((s) => (
                  <Link 
                    key={s.name} 
                    to={s.path} 
                    onClick={() => setIsOpen(false)} 
                    className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] hover:text-emerald-600"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
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
    className={`relative group transition-colors ${active ? "text-emerald-600" : "text-slate-500 hover:text-slate-900"}`}
  >
    <span className="font-black">{link.name}</span>
    {active && (
      <motion.div 
        layoutId="nav-underline" 
        className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-emerald-600" 
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    )}
  </Link>
);

export default Navbar;