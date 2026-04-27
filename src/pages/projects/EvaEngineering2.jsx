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

export default function EvaEngineering() {
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
            backgroundSize: '40px 40px',
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
                className="px-4 py-2 bg-pink-600/20 border border-pink-500/30 text-pink-300 rounded-full text-sm"
                style={{ fontWeight: 600, letterSpacing: '0.05em' }}
              >
                Mobile App · Engineering Services
              </span>
            </div>

            <h1
              className="text-7xl md:text-8xl tracking-tight text-white mb-8"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 700,
                lineHeight: '0.95'
              }}
            >
              EVA ENGINEERING
            </h1>

            <div className="flex flex-wrap gap-8 mb-12">
              <div>
                <p className="text-neutral-500 text-sm mb-2" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Role
                </p>
                <p className="text-white text-lg" style={{ fontWeight: 500 }}>
                  Mobile UX Designer
                </p>
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-2" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Timeline
                </p>
                <p className="text-white text-lg" style={{ fontWeight: 500 }}>2 Weeks · 2026</p>
              </div>
              <div>
                <p className="text-neutral-500 text-sm mb-2" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Tools
                </p>
                <p className="text-white text-lg" style={{ fontWeight: 500 }}>Figma</p>
              </div>
            </div>

            <p
              className="text-neutral-400 text-xl max-w-3xl"
              style={{ fontWeight: 400, lineHeight: '1.7' }}
            >
              EVA Engineering is a mobile marketplace application designed to help users explore engineering materials, connect with suppliers, and access competitive deals. The platform brings together products, services, and suppliers into one streamlined mobile experience.
    </p>
              <p
              className="text-neutral-400 text-xl max-w-3xl"
              style={{ fontWeight: 400, lineHeight: '1.7' }}
            >
           The goal of this project was to design an intuitive and efficient mobile app that simplifies how users discover materials, compare options, and connect with trusted suppliers.
  </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NDgxNTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="EVA Engineering Hero"
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
            backgroundSize: '40px 40px',
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
              <div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2
                className="text-5xl text-neutral-900"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 700
                }}
              >
                Overview
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3
                  className="text-sm text-neutral-500 mb-4"
                  style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  Challenge
                </h3>
                <p
                  className="text-neutral-900 text-xl mb-6"
                  style={{ fontWeight: 600, lineHeight: '1.5' }}
                >
                  Clients struggled to find and connect with qualified engineering professionals quickly.
                </p>
                <ul className="space-y-3 text-neutral-700 text-base" style={{ fontWeight: 400, lineHeight: '1.7' }}>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Long wait times for service quotes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Difficult to discover and compare service providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>No easy enable communication with suppliers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-sm text-neutral-500 mb-4"
                  style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  Solution
                </h3>
                <p
                  className="text-neutral-900 text-xl mb-6"
                  style={{ fontWeight: 600, lineHeight: '1.5' }}
                >
                  A mobile-first marketplace with verified professionals, instant quotes, and integrated scheduling.
                </p>
                <ul className="space-y-3 text-neutral-700 text-base" style={{ fontWeight: 400, lineHeight: '1.7' }}>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Browse verified engineer profiles and reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Request quotes with project details and photos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-600 mt-2 mr-3 flex-shrink-0"></span>
                    <span>A user-friendly interface optimized for mobile devices</span>
                  </li>
                </ul>
              </div>
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
            backgroundSize: '40px 40px',
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
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 700
                }}
              >
                Design Showcase
              </h2>
              <p className="text-neutral-400 text-xl max-w-2xl" style={{ fontWeight: 400 }}>
                Key mobile screens and user interactions
              </p>
            </div>

            {/* Split Layout: Featured + Thumbnails */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Main Featured Screen */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2 md:row-span-3"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 h-full bg-gradient-to-br from-pink-950/20 to-neutral-950">
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Home Screen"
                      className="w-full max-w-sm rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                      <p className="text-white text-xl mb-2" style={{ fontWeight: 600 }}>Engineer Discovery</p>
                      <p className="text-neutral-300 text-sm" style={{ fontWeight: 400 }}>Browse verified professionals with ratings and portfolio</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Side Thumbnails */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-pink-600/50 transition-colors">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NDgxNTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Profile"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p className="text-neutral-400 text-sm mt-3 group-hover:text-pink-400 transition-colors" style={{ fontWeight: 500 }}>Profile Details</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-pink-600/50 transition-colors">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE3NzQ4OTIwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Quote Request"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p className="text-neutral-400 text-sm mt-3 group-hover:text-pink-400 transition-colors" style={{ fontWeight: 500 }}>Quote Request</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 group-hover:border-pink-600/50 transition-colors">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwdHJhY2tpbmd8ZW58MXx8fHwxNzc0ODkyMDMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Booking"
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p className="text-neutral-400 text-sm mt-3 group-hover:text-pink-400 transition-colors" style={{ fontWeight: 500 }}>Booking Flow</p>
                </motion.div>
              </div>
            </div>

            {/* Bottom Feature Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>Instant Matching</h4>
                <p className="text-neutral-400" style={{ fontWeight: 400, lineHeight: '1.7' }}>Smart algorithm matches clients with engineers based on project type, location, and availability.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>Real-time Updates</h4>
                <p className="text-neutral-400" style={{ fontWeight: 400, lineHeight: '1.7' }}>Push notifications keep clients informed about quote status and booking confirmations.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL SCREENS - LIGHT */}
      <section className="relative bg-white py-32 px-8">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
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
              <div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h2
                className="text-5xl text-neutral-900"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 700
                }}
              >
                Key Features
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                <h4
                  className="text-lg text-neutral-900 mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Profile Discovery
                </h4>
                <p
                  className="text-neutral-600"
                  style={{ fontWeight: 400, lineHeight: '1.6' }}
                >
                  Browse engineer profiles with credentials, specializations, and client reviews
                </p>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                <h4
                  className="text-lg text-neutral-900 mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Quote System
                </h4>
                <p
                  className="text-neutral-600"
                  style={{ fontWeight: 400, lineHeight: '1.6' }}
                >
                  Submit project details with photos and receive multiple competitive quotes
                </p>
              </div>
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8">
                <h4
                  className="text-lg text-neutral-900 mb-3"
                  style={{ fontWeight: 600 }}
                >
                  Project Tracking
                </h4>
                <p
                  className="text-neutral-600"
                  style={{ fontWeight: 400, lineHeight: '1.6' }}
                >
                  Monitor progress, communicate with engineers, and manage payments in-app
                </p>
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
            backgroundSize: '40px 40px',
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
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 700
                }}
              >
                Impact & Growth
              </h2>

              <p
                className="text-neutral-400 text-xl mb-12"
                style={{ fontWeight: 400, lineHeight: '1.8' }}
              >EVA Engineering website and mobile app successfully connected verified professionals with thousands of clients, reducing quote response time by 80% and simplifying the entire working process.</p>

              
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
            <Link to="/work/ui-ux/gfeep-alumni-digital-network">
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

<Link to="/work/ui-ux/chronos-dashboard">
  <motion.button
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
    style={{ fontWeight: 500 }}
  >
    next Work
    <ArrowRight size={18} />
  </motion.button>
</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
