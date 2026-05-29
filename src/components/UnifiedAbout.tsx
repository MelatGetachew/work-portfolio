import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, Code } from "lucide-react";

const experiences = [
  {
    year: "2022 - Present",
    company: "Meta",
    role: "Senior Product Designer",
    description: "Leading design for AR/VR experiences in the Metaverse platform. Shipped features used by 100M+ users.",
    achievements: [
      "Led redesign of core navigation system",
      "Established new design system standards",
      "Mentored team of 5 junior designers",
    ],
    icon: Briefcase,
  },
  {
    year: "2020 - 2022",
    company: "Google",
    role: "Product Designer",
    description: "Designed enterprise tools for Google Workspace. Focused on collaboration and productivity features.",
    achievements: [
      "Shipped 3 major product features",
      "Improved user satisfaction by 40%",
      "Won internal design excellence award",
    ],
    icon: Award,
  },
  {
    year: "2018 - 2020",
    company: "Airbnb",
    role: "Product Designer",
    description: "Created experiences for host and guest platforms. Specialized in mobile-first design.",
    achievements: [
      "Redesigned booking flow",
      "Increased conversion rate by 25%",
      "Built design component library",
    ],
    icon: Code,
  },
];

const skills = [
  "UI/UX Design",
  "Product Strategy",
  "Design Systems",
  "Prototyping",
  "User Research",
  "Visual Design",
  "Motion Design",
  "Interaction Design",
];

function TimelineItem({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative pl-12 pb-16 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-white/10 group-last:hidden">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.2 + 0.3 }}
          className="w-full h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 origin-top"
        />
      </div>

      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring" }}
        className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border-2 border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors duration-300"
      >
        <experience.icon className="w-4 h-4 text-white/60 group-hover:text-blue-400 transition-colors" />
      </motion.div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-white/40">
            {experience.year}
          </span>
          <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-400 transition-colors">
            {experience.company}
          </h3>
          <p className="text-white/60 mt-1">{experience.role}</p>
        </div>

        <p className="text-white/50 leading-relaxed">
          {experience.description}
        </p>

        <ul className="space-y-2">
          {experience.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.5 + i * 0.1 }}
              className="flex items-start gap-3 text-sm text-white/60"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              {achievement}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function UnifiedAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 lg:px-20 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Designer & Storyteller
            </span>
          </h2>
        </motion.div>

        {/* Bio Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-24">
          {/* Left: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-lg text-white/70 leading-relaxed">
              With over 8 years of experience in product design, I've helped leading tech companies create beautiful, intuitive experiences that users love.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              My approach combines deep user empathy with aesthetic precision, always pushing the boundaries of what's possible in digital design.
            </p>

            {/* Philosophy Quote */}
            <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full blur-md" />
              <p className="text-white/60 italic">
                "Great design is invisible. It should feel so natural that users don't even notice it—they just enjoy the experience."
              </p>
            </div>

            {/* Skills */}
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4 text-white/90">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Professional Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 relative group flex items-start"
          >
            <div className="relative w-full max-w-[280px] lg:max-w-none mx-auto">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1774897795463-e6e4618a4997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Professional Portrait"
                  className="w-full h-auto object-cover rounded-3xl"
                  style={{
                    filter: "contrast(1.08) brightness(0.95)",
                  }}
                />

                {/* Gradient overlay for blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <span className="text-xs uppercase tracking-widest text-white/40">
                Experience
              </span>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                  Professional Journey
                </span>
              </h3>
              <p className="text-lg text-white/50 leading-relaxed">
                Over 8 years designing products for world-class companies and millions of users.
              </p>
            </motion.div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {experiences.map((experience, index) => (
                <TimelineItem key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
