import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope  } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export default function PremiumFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });  // ← removed margin

  const socialLinks = [
    { icon: FaGithub, label: "GitHub", url: "https://github.com/devanshu" },
    { icon: FaLinkedin, label: "LinkedIn", url: "https://linkedin.com/in/devanshu" },
    { icon: FaTwitter, label: "X (Twitter)", url: "https://twitter.com/devanshu" },
    { icon: FaEnvelope, label: "Email", url: "mailto:hello@devanshu.com" }
  ];

  return (
    <footer ref={ref} id="contact" className="relative py-32 px-6 lg:px-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-[140px]" />

      <div className="relative max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="text-xs uppercase tracking-widest text-white/40">
              Get in Touch
            </span>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Let's Create</span>
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>

            <p className="text-xl text-white/50 max-w-xl leading-relaxed">
              I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can work together.
            </p>

            <motion.a
              href="mailto:hello@devanshu.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="magnetic group inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
              hello@devanshu.com
              <FaArrowUpRightFromSquare className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Right column - Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Social links */}
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-6 block">
                Connect
              </span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm text-white/70 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                    {social.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-6 block">
                Navigation
              </span>
              <div className="grid grid-cols-2 gap-3">
                {["About", "Work", "Experience", "Testimonials"].map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"
        />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/40"
        >
          <p>© 2026 Devanshu. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms
            </a>
            <p className="text-xs">
              Designed & Built with <span className="text-red-400">♥</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </footer>
  );
}