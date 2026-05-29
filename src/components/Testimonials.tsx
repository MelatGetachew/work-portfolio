import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Product, Meta",
    company: "Meta",
    content: "Alex's design work transformed our AR platform. His attention to detail and user-centric approach helped us achieve a 40% increase in user engagement.",
    avatar: "SC",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Michael Roberts",
    role: "Design Director, Google",
    company: "Google",
    content: "One of the most talented designers I've worked with. Alex combines strategic thinking with beautiful execution. A true asset to any team.",
    avatar: "MR",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily Davis",
    role: "Head of Design, Airbnb",
    company: "Airbnb",
    content: "Alex's redesign of our booking flow exceeded all expectations. Not only did it look stunning, but it also improved our conversion rate by 25%.",
    avatar: "ED",
    gradient: "from-orange-500 to-red-500",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative h-full"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

      {/* Card */}
      <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
        {/* Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Content */}
        <p className="text-white/70 leading-relaxed mb-8 text-lg">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center font-bold text-sm`}>
            {testimonial.avatar}
          </div>
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-white/50">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 px-6 lg:px-20 overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-[120px]" />

      <div className="relative max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              What People Say
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Feedback from colleagues and collaborators I've worked with
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
