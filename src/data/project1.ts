import tickpay from "../assets/tickpay-1.png";
import overview1 from "../assets/tickpay-2.png";
import overview2 from "../assets/tickpay-2.2.png";
import overview3 from "../assets/tickpay-3.png";
import overview4 from "../assets/tickpay-4.png";

export const project1 = {
  id: 1,
  title: "TickPay- an Easy Payment App",
  category: "Product Design",
  year: "2026",
  description: "Next-gen payment app with AI-powered insights",
  image: tickpay,
  overviewImages: [overview1, overview2, overview3, overview4],
  
  gradient: "from-blue-500/20 to-cyan-500/20",
  challenge: "Traditional banking apps and payment solutions struggle with complex navigation and lack personalization. Users spend too much time searching for basic features, leading to frustration and app abandonment. The challenge was to create an intuitive interface that anticipates user needs while maintaining security standards.",
  solution: "We developed an AI-powered paymentexperience that learns from user behavior to surface relevant features. The app uses predictive analytics to suggest actions, implements voice commands for accessibility, and features a clean",
  process: [
    "Conducted user research ",
    "Analyzed competitor apps and identified opportunities for innovation",
    "Created user personas and journey maps for different paying scenarios",
    "Developed wireframes and prototypes for rapid testing and iteration",
  ],
  outcome: "The redesigned app increased user engagement, reduced average task completion time.",
  metrics: [
    { label: "Increase in Engagement" },
    { label: "Faster Task Completion" },
    { label: "Transaction Growth" },
  ],
  liveUrl: "https://tatari-one.vercel.app/",
  tags: ["Mobile Design", "AI/ML", "FinTech", "iOS", "Android"],
};
