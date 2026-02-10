import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Zap, UserCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Knowledge Hub", path: "/knowledge" },  
    { name: "login", path: "/login" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 px-6 ${
        scrolled 
          ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-white/5" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-10 h-10 bg-gradient-to-tr from-blue-600 via-blue-500 to-emerald-400 rounded-xl flex items-center justify-center font-black text-slate-950 shadow-xl shadow-blue-500/20"
          >
            LF
          </motion.div>
          <div className="flex flex-col">
            <span className="text-white font-black text-xl tracking-tighter leading-none">
              LABOR<span className="text-emerald-400">.</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">FORGE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8 text-[13px] font-black uppercase tracking-widest text-slate-400">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative hover:text-white transition-colors group py-2"
              >
                {link.name}
                {location.pathname === link.path ? (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" 
                  />
                ) : (
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-slate-700 group-hover:w-full transition-all duration-300 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Action Group: Login + CTA */}
          <div className="flex items-center gap-6 border-l border-white/10 pl-8">
            <Link 
              to="/login" 
              className="text-[13px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <UserCircle size={18} className="text-blue-400" />
              Login
            </Link>

            <Link
              to="/gst-quotation"
              className="group relative px-6 py-3 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Estimate Fee <Zap size={14} fill="currentColor" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white w-12 h-12 flex items-center justify-center bg-slate-900 border border-white/10 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 bg-gradient-to-b from-slate-900 to-slate-950">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-2xl font-black tracking-tighter flex justify-between items-center group"
                  >
                    {link.name} 
                    <ChevronRight size={24} className="text-slate-800 group-hover:text-emerald-400 transition-colors" />
                  </Link>
                </motion.div>
              ))}
              
              <div className="h-px bg-white/5 my-2" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-blue-400 text-xl font-black tracking-tighter flex items-center gap-3"
                >
                  Client Login <UserCircle size={20} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/gst-quotation"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 w-full bg-emerald-500 text-slate-950 py-5 rounded-2xl font-black text-center block shadow-lg shadow-emerald-500/20"
                >
                  GET GST QUOTATION
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;