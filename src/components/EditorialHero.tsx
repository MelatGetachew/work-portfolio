import { motion } from "framer-motion";
import heroImage from "../assets/hero.jpg";

export default function EditorialHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Main Hero Container */}
      <div className="relative h-screen max-w-[1920px] mx-auto px-8 lg:px-16 xl:px-20 py-16 lg:py-20 flex flex-col">
        {/* Top Row - Name & Status/Actions */}
        <div className="relative z-20 flex flex-col lg:flex-row items-start justify-between mb-auto gap-6 lg:gap-0">
          {/* Top-Left: Large Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] font-black tracking-tighter leading-none text-white uppercase"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 900 }}
          >
            MELAT G
          </motion.h1>

          {/* Top-Right: Status & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-20 flex flex-wrap items-center gap-3"
          >
            {/* Status Indicator */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-transparent border border-white/20 rounded-full">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-white tracking-wide whitespace-nowrap">
                Available for project
              </span>
            </div>

            {/* Action Buttons */}
            <a
              href="mailto:hello@MELAT.com?subject=Let's%20Talk%20-%20Project%20Inquiry"
              className="px-6 py-2.5 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all inline-block"
            >
              LET'S TALK
            </a>
            <a
              href="https://drive.google.com/file/d/1UJ1ql-4AElfamic0qUqc70YzRVNrJxFv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-transparent border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/5 hover:border-white/30 transition-all inline-block"
            >
              RESUME
            </a>
          </motion.div>
        </div>

        {/* Center Row - Profile Photo & Headline */}
        <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-12 xl:right-24 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 flex items-center gap-8 xl:gap-16 z-10">
          {/* Center-Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative w-[400px] sm:w-[480px] md:w-[560px] lg:w-[680px] xl:w-[760px]"
          >
            {/* Soft gradient mask for seamless blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10 pointer-events-none" />

            <img
              src={heroImage}
              alt="Profile"
              className="w-full h-auto object-contain"
              style={{
                filter: "contrast(1.1) brightness(0.95)",
              }}
            />
          </motion.div>

          {/* Middle-Right: Headline Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hidden xl:block"
          >
            <h2
              className="text-[42px] xl:text-[56px] font-black tracking-tight leading-[0.95] text-white text-right"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 900 }}
            >
              <span className="block">Beyond</span>
              <span className="block">Visuals.</span>
              <span className="block">Built with</span>
              <span className="block">Vision</span>
            </h2>
          </motion.div>
        </div>

        {/* Bottom Row - Description Text */}
        <div className="relative z-20 mt-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-md"
          >
            <p className="text-base leading-relaxed">
              <span className="text-white">I design experiences for digital products</span>
              <br />
              <span className="text-white/40">with intention, clarity and care.</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
}
