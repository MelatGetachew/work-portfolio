import tickpay from "../assets/tickpay-1.png";
import overview1 from "../assets/tickpay-2.png";
import overview2 from "../assets/tickpay-2.2.png";
import overview3 from "../assets/tickpay-3.png";
import overview4 from "../assets/tickpay-4.png";

export const project1 = {
  id: 1,
  title: "Mobile Banking Revolution",
  category: "Product Design",
  year: "2024",
  description: "Next-gen banking app with AI-powered insights",
  image: tickpay,
  overviewImages: [overview1, overview2, overview3, overview4],
  
  gradient: "from-blue-500/20 to-cyan-500/20",
  challenge: "Traditional banking apps struggle with complex navigation and lack personalization. Users spend too much time searching for basic features, leading to frustration and app abandonment. The challenge was to create an intuitive interface that anticipates user needs while maintaining security standards.",
  solution: "We developed an AI-powered banking experience that learns from user behavior to surface relevant features. The app uses predictive analytics to suggest actions, implements voice commands for accessibility, and features a clean, card-based interface that prioritizes the most-used functions.",
  process: [
    "Conducted user interviews with 50+ banking customers to understand pain points",
    "Analyzed competitor apps and identified opportunities for innovation",
    "Created user personas and journey maps for different banking scenarios",
    "Developed wireframes and prototypes for rapid testing and iteration",
    "Implemented AI-driven personalization engine based on user patterns",
    "Conducted usability testing with beta users and refined based on feedback",
  ],
  outcome: "The redesigned app increased user engagement by 60%, reduced average task completion time by 40%, and achieved a 4.8-star rating in app stores. Transaction volume increased by 35% within the first three months of launch.",
  metrics: [
    { label: "Increase in Engagement", value: "+60%" },
    { label: "Faster Task Completion", value: "40%" },
    { label: "App Store Rating", value: "4.8★" },
    { label: "Transaction Growth", value: "+35%" },
  ],
  tags: ["Mobile Design", "AI/ML", "FinTech", "iOS", "Android"],
};
