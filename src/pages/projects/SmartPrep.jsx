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

export default function SmartPrep() {
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
                className="px-4 py-2 bg-yellow-600/20 border border-yellow-500/30 text-yellow-300 rounded-full text-sm"
                style={{
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                landing page · Education Platform
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
              SmartPrep
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
                  UI/UX Designer
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
                  1 Week · 2025
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
            >
              SmartPrep is an educational platform designed to
              support Ethiopian students through structured exam
              preparation. It provides access to thousands of
              practice questions, helping students improve
              performance through consistent practice and
              feedback.
            </p>
            <p
              className="text-neutral-400 text-xl max-w-3xl"
              style={{ fontWeight: 400, lineHeight: "1.7" }}
            >This project focused on designing a responsive landing page that clearly communicates the platform’s value, builds trust through data, and encourages students to engage with the product.</p>

            <div className="mt-8">
              <a
                href="https://smartprep.et/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors"
                style={{ fontWeight: 600 }}
              >
                View Live Site
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzc0ODY1NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="SmartPrep Hero"
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
              <div className="w-12 h-12 rounded-xl bg-yellow-600 flex items-center justify-center">
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
                  Challenge
                </h3>
                <p
                  className="text-neutral-900 text-xl mb-6"
                  style={{ fontWeight: 600, lineHeight: "1.5" }}
                ><span className="font-bold">SmartPrep needed a landing page that would:</span></p>
                <ul
                  className="space-y-3 text-neutral-700 text-base"
                  style={{ fontWeight: 400, lineHeight: "1.7" }}
                >
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Clearly explain the product’s benefits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Build credibility and trust with students and parents</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Encourage sign-ups and engagement</span>
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
                ><span className="font-bold">The design successfully provides</span></p>
                <ul
                  className="space-y-3 text-neutral-700 text-base"
                  style={{ fontWeight: 400, lineHeight: "1.7" }}
                >
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>A structured and easy-to-understand landing page</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Strong user engagement through clear messaging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>A scalable design for future feature additions</span>
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
            <div className="flex items-center justify-between mb-16">
              <div>
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
                >Interface highlights from SmartPrep's&nbsp;&nbsp;platform</p>
              </div>
            </div>

            {/* Asymmetric Grid Layout */}
            <div className="space-y-6">
              {/* Row 1: 1 Large + 1 Medium */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-3"
                >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzc0ODY1NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product Catalog"
                      className="w-full aspect-[16/9] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p
                        className="text-white text-lg"
                        style={{ fontWeight: 600 }}
                      >
                        Product Catalog
                      </p>
                      <p
                        className="text-neutral-200 text-sm mt-1"
                        style={{ fontWeight: 400 }}
                      >
                        Browse and filter study materials
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="md:col-span-2"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-full">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Search Interface"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-neutral-400 text-sm mt-3"
                    style={{ fontWeight: 500 }}
                  >
                    Smart Search & Filters
                  </p>
                </motion.div>
              </div>

              {/* Row 2: 2 Small + 1 Medium */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="md:col-span-2"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Product Detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-neutral-400 text-sm mt-3"
                    style={{ fontWeight: 500 }}
                  >
                    Product Details
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="md:col-span-3"
                >
                  <div className="relative rounded-3xl overflow-hidden border border-white/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVja291dCUyMHBhZ2V8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Checkout Flow"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div
                        className="bg-yellow-600 text-white px-4 py-2 rounded-full text-xs"
                        style={{ fontWeight: 600 }}
                      >
                        Streamlined
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-neutral-400 text-sm mt-3"
                    style={{ fontWeight: 500 }}
                  >
                    Quick Checkout Process
                  </p>
                </motion.div>
              </div>

              {/* Row 3: 3 Equal */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NzQ4OTIwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Library"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-neutral-400 text-sm mt-3"
                    style={{ fontWeight: 500 }}
                  >
                    Digital Library
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvbW1lbmRhdGlvbnN8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Recommendations"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-neutral-400 text-sm mt-3"
                    style={{ fontWeight: 500 }}
                  >
                    AI Recommendations
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3NDg5MjAzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="text-neutral-400 text-sm mt-3"
                    style={{ fontWeight: 500 }}
                  >
                    Student Dashboard
                  </p>
                </motion.div>
              </div>
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
              <div className="w-12 h-12 rounded-xl bg-yellow-600 flex items-center justify-center">
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
                Final Platform
              </h2>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-sm">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzc0ODY1NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Platform Overview"
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                  <h4
                    className="text-lg text-neutral-900 mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    Smart Recommendations
                  </h4>
                  <p
                    className="text-neutral-600"
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.6",
                    }}
                  >
                    AI suggests study materials based on student
                    profile and purchase history
                  </p>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                  <h4
                    className="text-lg text-neutral-900 mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    Subject Bundles
                  </h4>
                  <p
                    className="text-neutral-600"
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.6",
                    }}
                  >
                    Curated content packages for comprehensive
                    exam preparation
                  </p>
                </div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                  <h4
                    className="text-lg text-neutral-900 mb-3"
                    style={{ fontWeight: 600 }}
                  >
                    Digital Library
                  </h4>
                  <p
                    className="text-neutral-600"
                    style={{
                      fontWeight: 400,
                      lineHeight: "1.6",
                    }}
                  >
                    Access all purchased materials from any
                    device with cloud sync
                  </p>
                </div>
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
                Business Impact
              </h2>

              <p
                className="text-neutral-400 text-xl mb-12"
                style={{ fontWeight: 400, lineHeight: "1.8" }}
              >SmartPrep reached 1250 active students within 4 months of launch and increased average score improvment by 78% through strategic bundle recommendations.</p>

              
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
            <Link to="/work/ui-ux/weyrayie">
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

            <Link to="/work/ui-ux/eva-engineering">
              <motion.button
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-6 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition-colors"
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