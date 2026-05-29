import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function FooterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Mail, label: "Email", url: "mailto:hello@alexrivera.com" },
  ];

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto text-center space-y-12">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        {/* Email CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-5 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-lg font-semibold text-white flex items-center gap-2">
              <Mail className="w-5 h-5" />
              hello@alexrivera.com
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 pt-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-sm text-white/40"
        >
          <p>© 2026 Alex Rivera. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </footer>
  );
}
