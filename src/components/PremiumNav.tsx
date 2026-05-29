import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function PremiumNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.9)"]
  );

  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.1]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "work", "experience", "testimonials", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        style={{
          backgroundColor,
          borderColor: borderOpacity,
        }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl font-bold"
            >
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                AR
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm transition-colors duration-300 group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block magnetic px-6 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:shadow-lg hover:shadow-white/20 transition-all duration-300"
            >
              Let's Talk
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-[#050505]/98 backdrop-blur-2xl z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className="text-4xl font-bold text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}
