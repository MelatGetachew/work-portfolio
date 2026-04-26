import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Navigation } from "../Components/Navigation";
const projects = [
  {
    id: 1,
    title: "Super Mom - 2D Animation",
    tag: "2D Animation",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Smooth UI and motion design animations.",
  },
  {
    id: 2,
    title: "Taya Animation",
    tag: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    description: "Animated brand identity system.",
  },
  {
    id: 3,
    title: "Coffee Motion",
    tag: "Stop Motion",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    description: "Creative stop motion experiments.",
  },
   {
    id: 4,
    title: 'coffee',
    tag: 'stop motion animation',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: '3D product animations for an e-commerce platform.',
  },
  {
    id: 5,
    title: 'course advertisment',
    tag: '2D-Animation',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Creative loading states and skeleton screens.',
  },
  {
    id: 6,
    title: 'kids learning',
    tag: 'Animation',
    thumbnail: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    description: 'Engaging onboarding sequence with animated illustrations.',
  },
];

export default function MotionAnimation() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Header */}
        <h1 className="text-4xl font-bold mb-3">
          Motion & Animation Projects
        </h1>

        <p className="text-gray-600 mb-10">
          UI animations, micro-interactions, and motion design work.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <Link key={project.id} to={`/animation/${project.id}`}>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border rounded-xl overflow-hidden shadow-sm"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <div className="bg-white/80 p-3 rounded-full">
                      <Play />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <span className="text-xs text-purple-600 font-semibold">
                    {project.tag}
                  </span>

                  <h3 className="text-lg font-semibold mt-1">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-2">
                    {project.description}
                  </p>
                </div>

              </motion.div>

            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}