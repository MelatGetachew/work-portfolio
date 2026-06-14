import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Sparkles, Award, Briefcase } from "lucide-react";

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const companies = [
    { name: "Meta", role: "Senior Product Designer" },
    { name: "Google", role: "Product Designer" },
    { name: "Airbnb", role: "Product Designer" },
  ];

  const stats = [
    { icon: Award, label: "Awards Won", value: 12 },
    { icon: Briefcase, label: "Projects", value: 50, suffix: "+" },
    { icon: Sparkles, label: "Happy Clients", value: 30, suffix: "+" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-white/40 mb-4 block">
            About Me
          </span>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition duration-500" />
              <div className="relative p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500">
                <stat.icon className="w-8 h-8 text-blue-400 mb-4" />
                <div className="text-4xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">Designer & Storyteller</h3>
            <p className="text-lg text-white/70 leading-relaxed">
              With over 2 years of experience in product design, I've helped leading tech companies create beautiful, intuitive experiences that users love.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              My approach combines deep user empathy with aesthetic precision, always pushing the boundaries of what's possible in digital design.
            </p>

            {/* Philosophy */}
            <div className="relative mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-blue-500 rounded-full blur-md" />
              <p className="text-white/60 italic">
                "Great design is invisible. It should feel so natural that users don't even notice it—they just enjoy the experience."
              </p>
            </div>
          </motion.div>

          {/* Right: Experience & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Companies */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white/90">Experience</h4>
              <div className="space-y-4">
                {companies.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold">
                      {company.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white/90">{company.name}</p>
                      <p className="text-sm text-white/50">{company.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white/90">Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
