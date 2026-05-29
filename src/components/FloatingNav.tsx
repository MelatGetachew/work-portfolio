import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? "top-4" : "top-6"
      }`}
    >
      <div
        className={`flex items-center gap-1 px-4 py-3 rounded-full border border-white/10 transition-all duration-500 ${
          isScrolled
            ? "bg-black/60 backdrop-blur-xl shadow-lg shadow-black/20"
            : "bg-white/5 backdrop-blur-md"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="relative px-4 py-2 text-sm transition-colors duration-300 group"
          >
            <span
              className={`relative z-10 transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-white"
                  : "text-white/60 group-hover:text-white/90"
              }`}
            >
              {item.label}
            </span>
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
