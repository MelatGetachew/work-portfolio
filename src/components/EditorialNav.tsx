import { motion } from "framer-motion";

export default function EditorialNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-[1920px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo & Links */}
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-bold tracking-tight text-black"
            >
              WALL OF PORTFOLIOS
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              <a
                href="#portfolios"
                className="text-sm text-black/70 hover:text-black transition-colors"
              >
                Portfolios
              </a>
              <a
                href="#case-studies"
                className="text-sm text-black/70 hover:text-black transition-colors"
              >
                Case Studies
              </a>
            </div>
          </div>

          {/* Right - Buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-5 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-black/90 transition-colors">
              Submit Portfolio
            </button>
            <button className="px-5 py-2 bg-transparent border border-black/20 text-black text-sm font-medium rounded-full hover:border-black/40 transition-colors">
              Log in/Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
