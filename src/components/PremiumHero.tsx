import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const profileImage = "/workspaces/default/code/src/imports/Screenshot__269_.png";

export default function PremiumHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-20">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient gradient */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] animate-pulse delay-1000" />

      <div className="relative max-w-[1440px] mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          {/* Left column - Large typography */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs uppercase tracking-widest text-white/60">
                  Available for projects
                </span>
              </div>
            </motion.div>

            {/* Main heading with character reveal */}
            <div className="overflow-hidden">
              <motion.h1
                custom={0}
                variants={textRevealVariants}
                className="text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight leading-[0.9]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="block">Beyond</span>
              </motion.h1>
              <motion.h1
                custom={1}
                variants={textRevealVariants}
                className="text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight leading-[0.9]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                  Visuals.
                </span>
              </motion.h1>
              <motion.h1
                custom={2}
                variants={textRevealVariants}
                className="text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight leading-[0.9]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="block">Built with</span>
              </motion.h1>
              <motion.h1
                custom={3}
                variants={textRevealVariants}
                className="text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight leading-[0.9]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Vision
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed"
            >
              Design experiences for digital products with meticulous detail and bold vision
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button className="magnetic group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden hover:shadow-2xl transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  View Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="magnetic group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact
                </span>
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-8"
            >
              <span className="text-xs uppercase tracking-widest text-white/40">
                Connect
              </span>
              <div className="h-px w-12 bg-white/10" />
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="p-2 text-white/40 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right column - Profile visual */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Profile card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />

                <div className="relative space-y-6">
                  {/* Avatar placeholder */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold">
                    AR
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Alex Rivera</h3>
                    <p className="text-white/60">Product Designer</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="space-y-1">
                      <p className="text-3xl font-bold">8+</p>
                      <p className="text-sm text-white/50">Years</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold">50+</p>
                      <p className="text-sm text-white/50">Projects</p>
                    </div>
                  </div>

                  {/* Companies */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-3">
                      Previously at
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Meta", "Google", "Airbnb"].map((company) => (
                        <span
                          key={company}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/10"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-white/30"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
