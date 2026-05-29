import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Download } from "lucide-react";

export default function CinematicHero() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Normalize to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;

      mouseX.set(x * 20);
      mouseY.set(y * 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft ambient glow behind image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-20"
      >
        {/* TOP SECTION - Large Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h1
            className="text-[80px] md:text-[100px] lg:text-[110px] font-bold tracking-tight leading-[0.9] text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Alex Rivera
          </h1>
        </motion.div>

        {/* CENTER SECTION - Portrait Image + Side Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          {/* Spacer for layout */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Cinematic Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative group"
          >
            <motion.div
              style={{
                x: mouseX,
                y: mouseY,
                scale: imageScale,
              }}
              className="relative"
            >
              {/* Ambient glow behind image */}
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-[32px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              {/* Image container */}
              <div className="relative overflow-hidden rounded-[28px]">
                <motion.img
                  src="https://images.unsplash.com/photo-1776197739075-e492fcd2cb46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Creative Portrait"
                  className="w-full h-auto object-cover"
                  style={{
                    filter: "contrast(1.1) brightness(0.9)",
                  }}
                />

                {/* Film grain effect on image */}
                <div
                  className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Small Descriptive Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex items-center"
          >
            <div className="max-w-[240px] mx-auto lg:mx-0">
              <p className="text-[#9A9A9A] text-sm leading-relaxed tracking-wide">
                Designer crafting immersive digital experiences through modern visuals and cinematic interactions.
              </p>
            </div>
          </motion.div>

          {/* Spacer for layout */}
          <div className="hidden lg:block lg:col-span-1" />
        </div>

        {/* BOTTOM SECTION - CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Let's Talk Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="magnetic group relative px-8 py-4 bg-[#0B0B0B] backdrop-blur-xl rounded-full border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

            <span className="relative z-10 flex items-center gap-2 text-white font-medium">
              Let's Talk
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.button>

          {/* Resume Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="magnetic group relative px-8 py-4 bg-[#0B0B0B] backdrop-blur-xl rounded-full border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

            <span className="relative z-10 flex items-center gap-2 text-white font-medium">
              <Download className="w-4 h-4" />
              Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 text-white/20"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
