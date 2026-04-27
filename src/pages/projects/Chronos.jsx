import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Palette,
} from "lucide-react";
import ImageWithFallback from "../../Components/ImageWithFallback";
import { Navigation } from "../../Components/Navigation";
export default function Chronos() {
 
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
                className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm"
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                Website · Time Management
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
            >
              Chronos
            </h1>

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
                >
                  Product Designer
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
                  Timeline
                </p>
                <p
                  className="text-white text-lg"
                  style={{ fontWeight: 500 }}
                >
                  3 Weeks · 2025
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
                  Figma, Framer, Notion
                </p>
              </div>
            </div>

            <p
              className="text-neutral-400 text-xl max-w-3xl"
              style={{ fontWeight: 400, lineHeight: "1.7" }}
            >
              The Chronos fully functionall website is the
              public-facing platform for an escrow fintech
              ecosystem offering mobile banking, BNPL, AI
              finance, NFTs, and live engagement systems. The
              goal was to design a clear and trustworthy website
              that explains the platform and guides users toward
              adoption.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0ODE3MjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Chronos Hero"
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
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
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
                  Challenge
                </h3>
                <p
                  className="text-neutral-900 text-xl mb-6"
                  style={{ fontWeight: 600, lineHeight: "1.5" }}
                >
                  <span className="font-bold">
                    Fintech websites must communicate complex
                    systems simply. Chronos needed to:
                  </span>
                </p>
                <ul
                  className="space-y-3 text-neutral-700 text-base"
                  style={{ fontWeight: 400, lineHeight: "1.7" }}
                >
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Clearly explain multiple financial
                      services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Build trust with new users</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Present innovation (AI, NFTs, BNPL) in an
                      understandable way
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
                >
                  An intelligent time tracker with automatic
                  categorization and visual productivity
                  insights.
                </p>
                <ul
                  className="space-y-3 text-neutral-700 text-base"
                  style={{ fontWeight: 400, lineHeight: "1.7" }}
                >
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>
                      Improved user understanding of complex
                      services
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Stronger brand trust</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Unified ecosystem presentation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6"></div>
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
            <div className="mb-16">
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
                className="text-neutral-400 text-xl max-w-2xl"
                style={{ fontWeight: 400 }}
              >
                Explore the visual journey of Chronos through
                key interface moments
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Large Feature */}
              <div className="md:col-span-2 md:row-span-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group h-full"
                >
                  <div className="rounded-3xl overflow-hidden border border-white/10 h-full">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc0ODY2NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Dashboard Overview"
                      className="w-full h-full object-cover min-h-[500px]"
                    />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                      <p
                        className="text-white text-lg"
                        style={{ fontWeight: 600 }}
                      >
                        Dashboard Overview
                      </p>
                      <p
                        className="text-neutral-300 text-sm mt-1"
                        style={{ fontWeight: 400 }}
                      >
                        Real-time activity tracking with visual
                        insights
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Smaller Items */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aW1lJTIwdHJhY2tpbmclMjBhcHB8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Timer Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-neutral-400 text-sm mt-3"
                  style={{ fontWeight: 500 }}
                >
                  Quick Timer Controls
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBkZXNpZ24lMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Analytics View"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-neutral-400 text-sm mt-3"
                  style={{ fontWeight: 500 }}
                >
                  Weekly Analytics
                </p>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Project Management"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-neutral-400 text-sm mt-3"
                  style={{ fontWeight: 500 }}
                >
                  Project Organization
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzQ4OTIwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Reports"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-neutral-400 text-sm mt-3"
                  style={{ fontWeight: 500 }}
                >
                  Detailed Reports
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL DESIGNS - LIGHT */}
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
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h2
                className="text-5xl text-neutral-900"
                style={{
                  fontFamily:
                    "system-ui, -apple-system, sans-serif",
                  fontWeight: 700,
                }}
              >
                Final Design
              </h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc0ODY2NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard Overview"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES - DARK */}
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
                Impact & Learnings
              </h2>

              <p
                className="text-neutral-400 text-xl mb-12"
                style={{ fontWeight: 400, lineHeight: "1.8" }}
              >Fintech websites must simplify complexity.              </p>
              <p
                className="text-neutral-400 text-xl mb-12"
                style={{ fontWeight: 400, lineHeight: "1.8" }}
              >Trust and clarity drive conversion.              </p>
              <p
                className="text-neutral-400 text-xl mb-12"
                style={{ fontWeight: 400, lineHeight: "1.8" }}
              >Structured storytelling improves engagement.</p>
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
            <Link to="/work/ui-ux">
              <motion.button
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-300 rounded-full text-neutral-900 hover:border-neutral-400 transition-colors"
                style={{ fontWeight: 500 }}
              >
                <ArrowLeft size={18} />
                Back to Work
              </motion.button>
            </Link>

            <Link to="/work/ui-ux/weyrayie">
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
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