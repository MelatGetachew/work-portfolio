import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is your design process?",
    answer: "My design process follows a user-centered approach. I start with thorough research and discovery to understand user needs, then move into ideation and sketching. From there, I create wireframes and prototypes, test with users, iterate based on feedback, and finally deliver high-fidelity designs with comprehensive documentation.",
  },
  {
    question: "What tools do you use for design?",
    answer: "I primarily use Figma for UI/UX design and prototyping, along with Adobe Creative Suite for visual design work. For motion design, I use Principle and After Effects. I'm also proficient in design systems, working with tools like Storybook and utilizing design tokens for scalability.",
  },
  {
    question: "How do you approach user research?",
    answer: "I believe in data-driven design. I conduct user interviews, usability testing, surveys, and analyze analytics to understand user behavior and pain points. I also create user personas and journey maps to ensure design decisions are grounded in real user needs and validated through continuous testing.",
  },
  {
    question: "What's your approach to design systems?",
    answer: "I build design systems with scalability and consistency in mind. I focus on creating reusable components, establishing clear design tokens, and documenting patterns and best practices. This ensures teams can work efficiently while maintaining visual and functional coherence across products.",
  },
  {
    question: "How do you handle design feedback?",
    answer: "I view feedback as an essential part of the design process. I actively seek input from stakeholders, developers, and users throughout the project. I'm open to constructive criticism and use it to refine and improve designs. Clear communication and collaboration are key to successful outcomes.",
  },
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical product feature might take 2-4 weeks from research to final designs, while a complete design system could take 2-3 months. I always work closely with stakeholders to set realistic timelines and maintain transparent communication throughout the process.",
  },
  {
    question: "Do you work with remote teams?",
    answer: "Absolutely! I have extensive experience working with distributed teams across different time zones. I use collaborative tools like Figma, Miro, and Slack to ensure seamless communication. I'm comfortable with async workflows and regular video check-ins to keep everyone aligned.",
  },
  {
    question: "How do you stay updated with design trends?",
    answer: "I regularly follow industry leaders on Twitter and LinkedIn, read design publications like Smashing Magazine and Nielsen Norman Group, attend design conferences and webinars, and participate in design communities. I also contribute to open-source design projects and continuously experiment with new tools and methodologies.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-6 flex items-start justify-between gap-6 border-b border-white/10 hover:border-white/20 transition-colors duration-300"
      >
        <span className="text-lg md:text-xl font-semibold text-white/90 group-hover:text-white transition-colors">
          {faq.question}
        </span>

        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
          {isOpen ? (
            <Minus className="w-4 h-4 text-white/60" />
          ) : (
            <Plus className="w-4 h-4 text-white/60" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-4 pb-6 text-white/60 leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-32 px-6 lg:px-20 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-[120px]" />

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">
            FAQ
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Common questions about my design process, methodology, and approach to creating exceptional digital experiences
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 pt-12 border-t border-white/10"
        >
          <p className="text-white/60 mb-6">
            Still have questions? Feel free to reach out.
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
