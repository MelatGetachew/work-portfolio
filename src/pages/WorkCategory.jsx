import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "../Components/Navigation";

const projects = [
  {
    id: 1,
    title: "Chronos",
    tag: "Website",
    image: "https://images.unsplash.com/photo-1661246627162-feb0269e0c07",
  },
  {
    id: 2,
    title: "Weyrayie",
    tag: "Website",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 3,
    title: "SmartPrep",
    tag: "Website",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6",
  },
   {
    id: 4,
    title: "EVA ENGINEERING",
    tag: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NDgxNTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Prestige Addis",
    tag: "website",
    image:
      "https://images.unsplash.com/photo-1741721816781-bab93346b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0ODkxNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Environmental Protection Authority",
    tag: "website",
    image:
      "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzc0Nzk3MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title: "GFEEP Alumni Digital Network",
    tag: "Website",
    image:
      "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzc0ODY1NDE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title: "EVA ENGINEERING",
    tag: "website",
    image:
      "https://images.unsplash.com/photo-1728598909887-2d983a8889b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc3NDgxNTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    title: "Chronos Dashboard",
    tag: "website",
    image:
      "https://images.unsplash.com/photo-1741721816781-bab93346b8d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0ODkxNDMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 10,
    title: "Chronos mobile app",
    tag: "website",
    image:
      "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzc0Nzk3MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function WorkCategory() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Header */}
        <h1 className="text-4xl font-bold mb-2">
          UI/UX Projects
        </h1>
        <p className="text-gray-600 mb-10">
          A collection of user-centered design work
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow"
            >
              
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <span className="text-sm text-gray-500">
                  {project.tag}
                </span>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
}