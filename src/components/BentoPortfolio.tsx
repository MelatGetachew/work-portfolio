import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";
import { projectsData } from "../data";

const projects = projectsData.map(p => ({
  id: p.id,
  title: p.title,
  category: p.category,
  year: p.year,
  description: p.description,
  image: p.image,
  gradient: p.gradient,
}));

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced gradient glow following cursor */}
      <motion.div
        className="absolute rounded-3xl blur-3xl pointer-events-none"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.1 : 0.9,
        }}
        transition={{ duration: 0.4 }}
        style={{
          width: "250px",
          height: "250px",
          background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.3), transparent 70%)`,
          left: mousePosition.x - 125,
          top: mousePosition.y - 125,
        }}
      />

      {/* Card container */}
      <motion.div
        onClick={() => navigate(`/project/${project.id}`)}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }}
        className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 cursor-pointer"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.div
            className="w-full h-full"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Gradient overlay on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
          />

          {/* View button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              initial={{ scale: 0.8, y: 10 }}
              animate={{
                scale: isHovered ? 1 : 0.8,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-2xl"
            >
              View Case Study
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4"
            animate={{
              y: isHovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs uppercase tracking-wider text-white/90 border border-white/20">
              {project.category}
            </span>
          </motion.div>

          {/* External link icon */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : -10,
              rotate: isHovered ? 0 : -45,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <ExternalLink className="w-4 h-4 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <motion.div
          className="p-5"
          animate={{
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start justify-between mb-2">
            <motion.h3
              className="text-lg font-bold"
              animate={{
                color: isHovered ? "#3B82F6" : "#FFFFFF",
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <motion.span
              className="text-xs text-white/40"
              animate={{
                opacity: isHovered ? 1 : 0.4,
              }}
            >
              {project.year}
            </motion.span>
          </div>
          <motion.p
            className="text-sm text-white/60 leading-relaxed"
            animate={{
              opacity: isHovered ? 0.9 : 0.6,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function BentoPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="relative py-32 px-6 lg:px-20 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]" />

      <div className="relative max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">
            Selected Work
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-md">
              A curated selection of projects showcasing design excellence and innovation
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
