import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Knowledge Hub", path: "/knowledge" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 px-6 py-4 ${
        scrolled 
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-3" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-lg flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-blue-500/20">
            C
          </div>
          <span className="text-white font-bold text-xl tracking-tight group-hover:text-blue-400 transition-colors">
            Chandan<span className="text-emerald-400 underline decoration-2 underline-offset-4">Compliance</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative hover:text-white transition-colors group py-2"
              >
                {link.name}
                {/* Animated underline */}
                {location.pathname === link.path ? (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400" 
                  />
                ) : (
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            ))}
          </div>

          <Link
            to="/gst-quotation"
            className="relative group overflow-hidden bg-white text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all"
          >
            <span className="relative z-10">Get GST Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 text-lg font-medium flex justify-between items-center"
                >
                  {link.name} <ChevronRight size={18} className="text-slate-600" />
                </Link>
              ))}
              <Link
                to="/gst-quotation"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-emerald-500 text-slate-950 text-center py-4 rounded-xl font-bold"
              >
                Get GST Quotation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;