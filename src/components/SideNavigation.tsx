import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Home, User, Briefcase, HelpCircle, MessageSquare, Mail } from "lucide-react";

export default function SideNavigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "work", "about", "faq", "testimonials", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "about", label: "About", icon: User },
    { id: "faq", label: "FAQ", icon: HelpCircle },
    { id: "testimonials", label: "Testimonials", icon: MessageSquare },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:block"
    >
      <div className="flex flex-col gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-white border-white"
                    : "bg-transparent border-white/20 hover:border-white/40 hover:bg-white/5"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? "text-black" : "text-white/60 group-hover:text-white"
                  }`}
                />
              </div>

              {/* Tooltip */}
              <div className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded-lg whitespace-nowrap">
                  {item.label}
                </div>
              </div>

              {/* Active indicator line */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
