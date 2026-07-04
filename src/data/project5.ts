import weyriaye from "../assets/w-t.png";
import overview1 from "../assets/w.png";
import overview2 from "../assets/w (1).png";
import overview3 from "../assets/w(2).png";
import overview4 from "../assets/w (3).png";
import overview5 from "../assets/w(4).png";
import overview6 from "../assets/w (5).png";


export const project5 = {
  id: 5,
  title: "Weyriaye",
  category: "Web App & Marketplace",
  year: "2025",
  description: "Logistics platform connecting cargo owners, truck owners, drivers, and transport agents in Ethiopia",

 image: weyriaye,
overviewImages: [overview1, overview2, overview3, overview4, overview5, overview6],

  gradient: "from-blue-500/20 to-cyan-500/20",

  challenge:
    "The transport and logistics sector in Ethiopia is highly fragmented, with cargo owners, truck owners, drivers, and agents relying on disconnected communication channels and informal networks. This creates inefficiencies in finding reliable transport, negotiating fair pricing, and managing shipments. The challenge was to design a platform that simplifies discovery, builds trust, and connects all stakeholders in one unified system.",

  solution:
    "Designed a dual-purpose platform combining an informative landing page and a functional marketplace. The landing page clearly communicates Weyriaye’s value proposition and services, while the marketplace enables users to connect cargo owners, truck owners, drivers, and agents. The experience focuses on trust, clarity, and efficiency, making it easy to post cargo, find trucks, negotiate deals, and manage logistics operations.",

  process: [
    "Researched Ethiopia’s logistics ecosystem and identified key pain points in cargo transportation workflows",
    "Defined user roles including cargo owners, truck owners, drivers, and agents with distinct journeys",
    "Designed an information architecture that separates landing page storytelling from marketplace functionality",
    "Created a clean, trust-driven UI system suitable for logistics transactions",
    "Designed marketplace flows for listing cargo, browsing trucks, and initiating transport deals",
    "Developed onboarding and discovery flows to simplify first-time user engagement",
    "Iterated on usability to ensure fast matching between supply and demand in the system",
  ],

  outcome:
    "The final platform establishes Weyriaye as a centralized logistics marketplace, improving transparency and accessibility in the transport sector. Users can easily discover transport options, connect with verified stakeholders, and manage logistics more efficiently through a streamlined digital experience.",

  metrics: [
    { label: "Core Users", value: "Cargo • Trucks • Drivers • Agents" },
    { label: "Platform Type", value: "Landing Page + Marketplace" },
    { label: "User Flow", value: "Discover → Connect → Transact" },
    { label: "Focus", value: "Trust & Efficiency" },
  ],

  tags: [
    "Marketplace",
    "Logistics",
    "Web Design",
    "UX/UI",
    "Ethiopia",
    "Product Design",
  ],
};