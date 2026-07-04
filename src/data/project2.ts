import smartprep from "../assets/smartprep--.png";
import overview1 from "../assets/smartprep.png";
import overview2 from "../assets/smartprep(1).png";
import overview3 from "../assets/smartprep(2).png";
import overview4 from "../assets/smartprep-.png";

export const project2 = {
  id: 2,
  title: "SmartPrep e-Learning Platform",
  category: "UI/UX Design",
  year: "2025",
  description: "an e-learning platform designed to help Ethiopian Grade 12 students prepare for university entrance exams ",
  image: smartprep,
  overviewImages: [overview1, overview2, overview3, overview4],
  gradient: "from-purple-500/20 to-pink-500/20",
  challenge: "Students preparing for university entrance exams often feel overwhelmed by the amount of study material available and lack clear guidance on what to study next. Existing learning platforms typically provide a one-size-fits-all experience, making it difficult for students to stay engaged, identify their knowledge gaps, and maintain consistent progress. The challenge was to design a simple, intuitive, and personalized learning experience that helps students focus on the right topics, track their improvement, and build confidence throughout their exam preparation journey.",
 solution:
  "Designed and developed an AI-powered learning platform that personalizes the exam preparation experience for Ethiopian Grade 12 students. The platform recommends practice questions and study topics based on individual performance, provides instant feedback with detailed explanations, tracks learning progress through intuitive dashboards, and offers adaptive study plans that help students focus on their weakest subjects while maintaining engagement.",

process: [
  "Optimized onboarding flow to reduce friction from landing page to first practice session",
  "Mapped the end-to-end learning journey and identified opportunities to simplify navigation and reduce cognitive load",
  "Designed a scalable design system with reusable UI components for consistency across the platform",
  "Created interactive prototypes and iterated on the experience through usability testing",
 "Built progress dashboards, mock exam experiences, and detailed performance analytics to encourage continuous learning",
],

outcome:
  "Optimized onboarding flow to reduce friction from landing page to first practice session and redesigned platform delivers a more personalized and engaging learning experience, enabling students to study more efficiently, monitor their progress, and receive targeted recommendations that improve confidence and exam readiness.",

metrics: [
  { label: "Practice Questions" },
  { label: "Subjects"},
  { label: "Recommendations" },
  { label: "Feedback" },
],

tags: [
  "EdTech",
  "AI",
  "UX Design",
  "Product Design",
  "Learning Analytics",
]
};
