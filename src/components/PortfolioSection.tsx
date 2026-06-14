import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import tickpay from "../assets/tickpay-1.png";

const projects = [
  {
    id: 1,
    title: "Mobile Banking App",
    category: "Product Design",
    description: "Next-generation banking experience with seamless transactions and smart insights",
    image: tickpay,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "UI/UX Design",
    description: "Modern shopping experience with personalized recommendations",
    image: "https://images.unsplash.com/photo-1697292859724-0d2501966448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzc5OTUyOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    category: "Mobile App",
    description: "Health and wellness companion with AI-powered coaching",
    image: "https://images.unsplash.com/photo-1695634281254-e94a29d234c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzc5OTUyOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    id: 4,
    title: "Design System",
    category: "System Design",
    description: "Comprehensive design system for enterprise-scale applications",
    image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzc5OTUyOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    category: "Web App",
    description: "Analytics and management platform for content creators",
    image: "https://images.unsplash.com/photo-1702479744181-2d6b58941583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzc5OTUyOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    id: 6,
    title: "Travel Booking App",
    category: "Mobile Design",
    description: "Seamless travel planning with immersive destination previews",
    image: "https://images.unsplash.com/photo-1706700392642-dee59f678a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzc5OTUyOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition duration-700`} />

      <div className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
        {/* Image container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

          {/* CTA button on hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          >
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-300">
              View Case Study
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="text-sm uppercase tracking-wider text-white/40 mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/60 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-white/40 mb-4 block">
            Selected Work
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            A collection of my recent work, showcasing diverse challenges and innovative solutions
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
