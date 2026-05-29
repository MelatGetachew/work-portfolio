import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

interface CaseStudyData {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  gradient: string;
  challenge: string;
  solution: string;
  process: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export default function CaseStudyPage({ project }: { project: CaseStudyData }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        onClick={() => navigate("/")}
        className="fixed top-8 left-8 z-50 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300 group"
      >
        <ArrowLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
      </motion.button>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-20 overflow-hidden">
        {/* Background gradient */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b ${project.gradient} rounded-full blur-[140px]`} />

        <div className="relative max-w-[1200px] mx-auto">
          {/* Category & Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="flex items-center gap-2 text-sm text-white/60">
              <Tag className="w-4 h-4" />
              {project.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-white/60">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {project.title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mb-12"
          >
            {project.description}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/80"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[1200px] mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Design Overview */}
      <section className="px-6 lg:px-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Design Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1697292859724-0d2501966448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Design detail 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Design detail 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1627757818592-ce2649563a6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Design detail 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="px-6 lg:px-20 pb-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>

            {/* Wireframes & Sketches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Early Sketches & Wireframes</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                The design process began with rapid sketching and low-fidelity wireframes to explore different layout concepts and user flows.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Design sketches"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1561123760-0b8467594a63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Wireframe sketches"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Design Process</h2>
              <div className="space-y-4">
                {project.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400">
                      {index + 1}
                    </span>
                    <p className="text-white/70">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UI Mockups Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">UI Mockups</h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                High-fidelity mockups showcasing the final interface design across different screens and interactions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5 backdrop-blur-md border border-white/10 p-8 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1695048064952-44b984f2af6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Mobile UI mockup"
                    className="w-auto h-full object-contain"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5 backdrop-blur-md border border-white/10 p-8 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1695048132783-4b9f77bde5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Mobile UI screens"
                    className="w-auto h-full object-contain"
                  />
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5 backdrop-blur-md border border-white/10 p-8 flex items-center justify-center md:col-span-2">
                  <img
                    src="https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                    alt="Multiple UI screens"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Visual Design</h2>
              <div className="relative overflow-hidden rounded-2xl aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Visual design showcase"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
              </div>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Outcome & Impact</h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {project.outcome}
              </p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10"
              >
                <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
                <div className="space-y-6">
                  {project.metrics.map((metric, index) => (
                    <div key={index}>
                      <p className="text-3xl font-bold text-blue-400 mb-1">
                        {metric.value}
                      </p>
                      <p className="text-sm text-white/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full px-6 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
