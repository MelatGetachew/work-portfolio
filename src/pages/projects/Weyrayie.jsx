import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Palette,
  Target, 
  BarChart3,
  Leaf,
  Sparkles,
} from "lucide-react";
import ImageWithFallback from "../../Components/ImageWithFallback";
import { Navigation } from "../../Components/Navigation";

export default function Weyrayie() {
  return (
    <div className="relative min-h-screen overflow-auto bg-white">
      <Navigation />

      {/* HERO SECTION - DARK */}
      <section className="relative bg-neutral-950 pt-32 pb-32 px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span
                className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-full text-sm"
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                Landing Page · UI/UX Design
              </span>
            </div>

            <h1
              className="text-7xl md:text-8xl tracking-tight text-white mb-8"
              style={{
                fontFamily:
                  "system-ui, -apple-system, sans-serif",
                fontWeight: 700,
                lineHeight: "0.95",
              }}
            >weyrayie</h1>

            <div className="flex flex-wrap gap-8 mb-12">
              <div>
                <p
                  className="text-neutral-500 text-sm mb-2"
                  style={{
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Role
                </p>
                <p
                  className="text-white text-lg"
                  style={{ fontWeight: 500 }}
                >UI/UX Designer</p>
              </div>
              <div>
                <p
                  className="text-neutral-500 text-sm mb-2"
                  style={{
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Timeline
                </p>
                <p
                  className="text-white text-lg"
                  style={{ fontWeight: 500 }}
                >
                  1 Weeks · 2025
                </p>
              </div>
              <div>
                <p
                  className="text-neutral-500 text-sm mb-2"
                  style={{
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Tools
                </p>
                <p
                  className="text-white text-lg"
                  style={{ fontWeight: 500 }}
                >
                  Figma
                </p>
              </div>
            </div>

            <p
              className="text-neutral-400 text-xl max-w-3xl"
              style={{ fontWeight: 400, lineHeight: "1.7" }}
            >Weyrayie is an all-in-one truck transport and marketplace platform designed to connect cargo owners, truck owners, and transport agencies. The platform aims to simplify logistics by enabling seamless communication, efficient booking, and reliable service coordination within a single digital ecosystem.<br /><br />The goal of this project was to design a clear, accessible, and engaging website - primarily focused on the homepage - to communicate the platform's value while reflecting its marketplace functionality.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3NDg3Mzc3NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Banking Mobile App Hero"
              className="w-full aspect-[16/9] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION - LIGHT */}
      <section className="relative bg-white py-32 px-8">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2
                className="text-5xl text-neutral-900"
                style={{
                  fontFamily:
                    "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                Overview
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3
                  className="text-sm text-neutral-500 mb-4"
                  style={{
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Problem
                </h3>
                <p
                  className="text-neutral-900 text-xl mb-6"
                  style={{ fontWeight: 600, lineHeight: "1.5" }}
                >Users found the existing website overwhelming and difficult to navigate.</p>
                <ul
                  className="space-y-3 text-neutral-700 text-base"
                  style={{ fontWeight: 400, lineHeight: "1.7" }}
                >
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Build trust among different user groups
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Provide a simple and intuitive entry point
                      for users
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Reflect both service reliability and
                      marketplace functionality
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-sm text-neutral-500 mb-4"
                  style={{
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Solution
                </h3>
                <p
                  className="text-neutral-900 text-xl mb-6"
                  style={{ fontWeight: 600, lineHeight: "1.5" }}
                ><span className="font-bold">The final design delivers ascalable foundation for future product expansion.</span></p>
                <ul
                  className="space-y-3 text-neutral-700 text-base"
                  style={{ fontWeight: 400, lineHeight: "1.7" }}
                >
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>A user-friendly and accessible homepage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Clear communication of a complex platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>A strong first impression for potential users</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              
              
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* DESIGN SHOWCASE - DARK */}
      <section className="relative bg-neutral-950 py-32 px-8">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2
                className="text-6xl text-white mb-4"
                style={{
                  fontFamily:
                    "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                Design Showcase
              </h2>
              <p
                className="text-neutral-400 text-xl max-w-3xl mx-auto"
                style={{ fontWeight: 400 }}
              >
                A visual exploration of weyrayie's interface and
                user experience
              </p>
            </div>

            {/* Masonry-style Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Column 1 */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3NDg3Mzc3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Home Screen"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </motion.div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p
                    className="text-white text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    Home Screen
                  </p>
                  <p
                    className="text-neutral-400 text-xs mt-1"
                    style={{ fontWeight: 400 }}
                  >
                    Quick access to accounts
                  </p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 md:mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1623385245725-2c39e44567e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB1aSUyMHNjcmVlbnMlMjBtb2NrdXB8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Transactions"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </motion.div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p
                    className="text-white text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    Transaction History
                  </p>
                  <p
                    className="text-neutral-400 text-xs mt-1"
                    style={{ fontWeight: 400 }}
                  >
                    Detailed spending view
                  </p>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-4 md:mt-24">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1636390877494-3ba0c41c7e5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBub3Rlc3xlbnwxfHx8fDE3NzQ4NjY4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Transfers"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </motion.div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p
                    className="text-white text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    Money Transfer
                  </p>
                  <p
                    className="text-neutral-400 text-xs mt-1"
                    style={{ fontWeight: 400 }}
                  >
                    Simple, secure payments
                  </p>
                </div>
              </div>

              {/* Column 4 */}
              <div className="space-y-4 md:mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="rounded-2xl overflow-hidden border border-white/10"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1641862039942-5815d8f74938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjBjbGVhbnxlbnwxfHx8fDE3NzQ4OTIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Analytics"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </motion.div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p
                    className="text-white text-sm"
                    style={{ fontWeight: 600 }}
                  >
                    Spending Analytics
                  </p>
                  <p
                    className="text-neutral-400 text-xs mt-1"
                    style={{ fontWeight: 400 }}
                  >
                    Financial insights
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL DESIGNS SECTION - LIGHT */}
      <section className="relative bg-white py-32 px-8">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2
                className="text-5xl text-neutral-900"
                style={{
                  fontFamily:
                    "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                Final Designs
              </h2>
            </div>

            <p
              className="text-neutral-600 text-xl max-w-3xl mb-16"
              style={{ fontWeight: 400, lineHeight: "1.7" }}
            ></p>

            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1641862039942-5815d8f74938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ24lMjBjbGVhbnxlbnwxfHx8fDE3NzQ4OTIwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard Design"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1642055509518-adafcad1d22e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwJTIwZGVzaWdufGVufDF8fHx8MTc3NDg3Mzc3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Transaction Screen"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1623385245725-2c39e44567e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB1aSUyMHNjcmVlbnMlMjBtb2NrdXB8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Analytics Screen"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                
                
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* REFLECTIONS & OUTCOMES SECTION - DARK */}
      <section className="relative bg-neutral-950 py-32 px-8">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #fff 1px, transparent 1px),
              linear-gradient(to bottom, #fff 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl">
              <h2
                className="text-5xl text-white mb-8"
                style={{
                  fontFamily:
                    "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                Reflections & Outcomes
              </h2>

              <p
                className="text-neutral-400 text-xl mb-12"
                style={{ fontWeight: 400, lineHeight: "1.8" }}
              >
                This project taught me the importance of
                balancing simplicity with functionality. By
                reducing cognitive load and focusing on core
                user needs, we created an experience that feels
                both powerful and approachable.
              </p>

              <div className="space-y-6 mb-16">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3
                    className="text-xl text-white mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    Less is More
                  </h3>
                  <p
                    className="text-neutral-400"
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.7",
                    }}
                  >Removing unnecessary features and focusing on essential actions resulted in&nbsp;&nbsp;reduction in task completion time.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3
                    className="text-xl text-white mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    User Testing is Critical
                  </h3>
                  <p
                    className="text-neutral-400"
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.7",
                    }}
                  >Designing for multiple user groups requires careful balance</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3
                    className="text-xl text-white mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    Visual Hierarchy Matters
                  </h3>
                  <p
                    className="text-neutral-400"
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.7",
                    }}
                  >
                    Clear typography and spacing helped users
                    quickly scan and find what they needed
                    without feeling overwhelmed.
                  </p>
                </div>
              </div>

              
            </div>
          </motion.div>
        </div>
      </section>

      {/* NAVIGATION FOOTER */}
      <section className="relative bg-white py-16 px-8 border-t border-neutral-200">
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <Link to="/work/ui-ux/chronos">
  <motion.button
    whileHover={{ x: -4 }}
    transition={{ duration: 0.2 }}
    className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-300 rounded-full text-neutral-900 hover:border-neutral-400 transition-colors"
    style={{ fontWeight: 500 }}
  >
    <ArrowLeft size={18} />
    Previous Project
  </motion.button>
</Link>

<Link to="/work/ui-ux/smartprep">
  <motion.button
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
    className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
    style={{ fontWeight: 500 }}
  >
    Next Project
    <ArrowRight size={18} />
  </motion.button>
</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}