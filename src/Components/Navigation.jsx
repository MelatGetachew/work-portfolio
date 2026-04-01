import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Navigation() {
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 pt-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md border border-neutral-200/50 rounded-2xl px-8 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <motion.div
                className="text-neutral-900 font-bold text-xl"
                whileHover={{ scale: 1.02 }}
              >
                Melat Getachew
              </motion.div>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center gap-8">
              {/* Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                  className={`flex items-center gap-1 font-medium ${
                    isActive("/work")
                      ? "text-neutral-900"
                      : "text-neutral-700"
                  }`}
                  aria-expanded={workDropdownOpen}
                >
                  Work
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {workDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="absolute top-full mt-2 right-0 w-40"
                    >
                      <div className="bg-white border rounded-xl shadow-lg">
                        <Link to="/work/ui-ux">
                          <div className="px-4 py-3 hover:bg-neutral-50">
                            UI/UX
                          </div>
                        </Link>
                        <Link to="/work/frontend">
                          <div className="px-4 py-3 hover:bg-neutral-50">
                            Frontend
                          </div>
                        </Link>
                        <Link to="/work/animation">
                          <div className="px-4 py-3 hover:bg-neutral-50">
                            Animation
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About */}
              <Link to="/about">
                <motion.div
                  className={`font-medium ${
                    isActive("/about")
                      ? "text-neutral-900"
                      : "text-neutral-700"
                  }`}
                  whileHover={{ y: -1 }}
                >
                  About
                </motion.div>
              </Link>

              {/* Contact */}
              <Link to="/contact">
                <motion.div
                  className={`font-medium ${
                    isActive("/contact")
                      ? "text-neutral-900"
                      : "text-neutral-700"
                  }`}
                  whileHover={{ y: -1 }}
                >
                  Contact
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}