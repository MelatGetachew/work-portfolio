import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

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
  overviewImages?: string[];
  sketchImages?: string[];
  mockupImages?: string[];
  visualImage?: string;
}

function GlowImage({ src, alt, gradient, className = "" }: { src: string; alt: string; gradient: string; className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className={`absolute bg-gradient-to-b ${gradient} blur-[80px] opacity-50 w-3/4 h-3/4 rounded-full`} />
      <img
        src={src}
        alt={alt}
        className="relative object-contain drop-shadow-2xl w-full h-full"
      />
    </div>
  );
}

function ScrollGallery({ images, gradient, itemClassName }: { images: string[]; gradient: string; itemClassName?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
    }
  };

  if (images.length <= 2) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <GlowImage key={i} src={img} alt={`Image ${i + 1}`} gradient={gradient} className={`min-h-[280px] ${itemClassName ?? ""}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ArrowLeft className="w-4 h-4 text-white" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ArrowLeft className="w-4 h-4 text-white rotate-180" />
      </button>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-2"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((img, i) => (
          <div key={i} className={`flex-shrink-0 w-72 ${itemClassName ?? "min-h-[280px]"}`}>
            <GlowImage src={img} alt={`Image ${i + 1}`} gradient={gradient} className="w-full h-full min-h-[280px]" />
          </div>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-white/30" />
        ))}
      </div>
    </div>
  );
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
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b ${project.gradient} rounded-full blur-[140px]`} />
        <div className="relative max-w-[1200px] mx-auto">
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mb-12"
          >
            {project.description}
          </motion.p>

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
      <section className="px-6 lg:px-20 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[1200px] mx-auto"
        >
          <GlowImage
            src={project.image}
            alt={project.title}
            gradient={project.gradient}
            className="min-h-[360px] max-h-[600px]"
          />
        </motion.div>
      </section>

      {/* Design Overview */}
      {project.overviewImages && project.overviewImages.length > 0 && (
        <section className="px-6 lg:px-20 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[1200px] mx-auto"
          >
            <h2 className="text-3xl font-bold mb-10">Design Overview</h2>
            <ScrollGallery images={project.overviewImages} gradient={project.gradient} />
          </motion.div>
        </section>
      )}

      {/* Content Sections */}
      <section className="px-6 lg:px-20 pb-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-20">

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-white/70 leading-relaxed">{project.challenge}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Solution</h2>
              <p className="text-lg text-white/70 leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Sketches */}
            {project.sketchImages && project.sketchImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Early Sketches & Wireframes</h2>
                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                  The design process began with rapid sketching and low-fidelity wireframes to explore different layout concepts and user flows.
                </p>
                <ScrollGallery images={project.sketchImages} gradient={project.gradient} />
              </motion.div>
            )}

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

            {/* UI Mockups */}
            {project.mockupImages && project.mockupImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">UI Mockups</h2>
                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                  High-fidelity mockups showcasing the final interface design across different screens and interactions.
                </p>
                <ScrollGallery images={project.mockupImages} gradient={project.gradient} itemClassName="min-h-[400px]" />
              </motion.div>
            )}

            {/* Visual Design */}
            {project.visualImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Visual Design</h2>
                <GlowImage
                  src={project.visualImage}
                  alt="Visual design showcase"
                  gradient={project.gradient}
                  className="min-h-[300px] max-h-[500px]"
                />
              </motion.div>
            )}

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Outcome & Impact</h2>
              <p className="text-lg text-white/70 leading-relaxed">{project.outcome}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
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
                      <p className="text-3xl font-bold text-blue-400 mb-1">{metric.value}</p>
                      <p className="text-sm text-white/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

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