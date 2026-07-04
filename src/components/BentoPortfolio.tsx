import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Palette, Code2, Film, Play } from "lucide-react";
import { useNavigate } from "react-router";
import { projectsData } from "../data";

// --- Data shape --------------------------------------------------------
// `section` decides which tab a project appears under. `category` stays
// the small badge label shown on the card (e.g. "Mobile App", "Dashboard").
//
// Add these fields to each entry in projectsData:
//   section:    'uiux' | 'frontend' | 'animation'   (required)
//   githubUrl:  string   (frontend projects — link to the repo)
//   liveUrl:    string   (frontend projects — link to the deployed site)
//   videoUrl:   string   (animation projects — Google Drive share link, opens in a new tab)
//
// Anything without a matching field just falls back gracefully below.

type Section = "uiux" | "frontend" | "animation";

type Project = {
  id: string | number;
  title: string;
  category: string;
  section: Section;
  year: string;
  description: string;
  image: string;
  gradient: string;
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
};

const projects: Project[] = projectsData.map((p: any) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  // TODO: set real values in data.ts — defaulting to 'uiux' so nothing disappears
  section: (p.section as Section) ?? "uiux",
  year: p.year,
  description: p.description,
  image: p.image,
  gradient: p.gradient,
  githubUrl: p.githubUrl,
  liveUrl: p.liveUrl,
  videoUrl: p.videoUrl,
}));

const FILTERS: { key: Section; label: string; icon: typeof Palette }[] = [
  { key: "uiux", label: "UI/UX", icon: Palette },
  { key: "frontend", label: "Frontend", icon: Code2 },
  { key: "animation", label: "Animation", icon: Film },
];

function FilterMenu({
  active,
  onChange,
}: {
  active: Section;
  onChange: (s: Section) => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 p-1 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
      {FILTERS.map((f) => {
        const Icon = f.icon;
        const isActive = active === f.key;
        return (
          <button
            key={f.key}
            onClick={() => onChange(f.key)}
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
          >
            {isActive && (
              <motion.div
                layoutId="filter-pill"
                className="absolute inset-0 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 flex items-center gap-2 ${
                isActive ? "text-black" : "text-white/60 hover:text-white/90"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {f.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
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

  const handleCardClick = () => {
    // UI/UX projects deep-link to a full case study page.
    if (project.section === "uiux") {
      navigate(`/project/${project.id}`);
    }
    // Animation projects open the Google Drive video link in a new tab.
    if (project.section === "animation" && project.videoUrl) {
      window.open(project.videoUrl, "_blank", "noopener,noreferrer");
    }
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
      {/* Gradient glow following cursor */}
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
        onClick={handleCardClick}
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
        }}
        className={`relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 ${
          project.section === "uiux" || project.section === "animation" ? "cursor-pointer" : ""
        }`}
      >
        {/* Media — animation projects just show the thumbnail; the video itself lives on Google Drive */}
        <div className="relative overflow-hidden aspect-[4/3] bg-black/40">
          <motion.div
            className="w-full h-full"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Play icon, always visible for animation cards so it reads as a video */}
          {project.section === "animation" && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center"
              >
                <Play className="w-6 h-6 text-white fill-white ml-0.5" />
              </motion.div>
            </div>
          )}

          {/* Gradient overlay on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />

          {/* Center overlay content — differs per section */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-3"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.section === "uiux" && (
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
            )}

            {project.section === "frontend" && (
              <>
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8, y: 10 }}
                    animate={{ scale: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 shadow-2xl"
                  >
                    <Code2 className="w-4 h-4" />
                    GitHub
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.8, y: 10 }}
                    animate={{ scale: isHovered ? 1 : 0.8, y: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-medium flex items-center gap-2 shadow-2xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Site
                  </motion.a>
                )}
              </>
            )}

          </motion.div>

          {/* Category badge */}
          <motion.div
            className="absolute top-4 left-4"
            animate={{ y: isHovered ? -4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs uppercase tracking-wider text-white/90 border border-white/20">
              {project.category}
            </span>
          </motion.div>

          {/* External link icon (uiux only, matches old behavior) */}
          {project.section === "uiux" && (
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
          )}
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
              animate={{ opacity: isHovered ? 1 : 0.4 }}
            >
              {project.year}
            </motion.span>
          </div>
          <motion.p
            className="text-sm text-white/60 leading-relaxed"
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
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
  const [activeFilter, setActiveFilter] = useState<Section>("uiux");

  const filteredProjects = projects.filter((p) => p.section === activeFilter);

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
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">
                Selected Work
              </span>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl mb-4">
                <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                  Featured Projects
                </span>
              </h2>
              <p className="text-lg text-white/50 max-w-md">
                A curated selection of projects showcasing design excellence and innovation
              </p>
            </div>

            {/* Filter menu — top-right corner of the section */}
            <div className="lg:pt-1">
              <FilterMenu active={activeFilter} onChange={setActiveFilter} />
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <p className="col-span-full text-center text-white/40 py-16">
                No projects in this category yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
