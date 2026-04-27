import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import About from "./pages/About";
import WorkCategory from "./pages/WorkCategory";
import MotionAnimation from "./pages/MotionAnimation";
import Contact from "./pages/Contact";

// Projects
import Chronos from "./pages/projects/Chronos";
import ChronosDashboard from "./pages/projects/ChronosDashboard";
import ChronosMobile from "./pages/projects/ChronosMobile";
import EnvironmentalProtection from "./pages/projects/EnvironmentalProtection";
import EvaEngineering from "./pages/projects/EvaEngineering";
import EvaEngineering2 from "./pages/projects/EvaEngineering2"
import GFEEPAlumni from "./pages/projects/GFEEPAlumni";
import PrestigeAddis from "./pages/projects/PrestigeAddis";
import SmartPrep from "./pages/projects/SmartPrep";
import Weyrayie from "./pages/projects/Weyrayie";


export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/ui-ux" element={<WorkCategory />} />
        <Route path="/work/animation" element={<MotionAnimation />} />
        <Route path="/contact" element={<Contact />} />

        {/* Project Pages */}
        <Route path="/work/ui-ux/chronos" element={<Chronos />} />
<Route path="/work/ui-ux/chronos-dashboard" element={<ChronosDashboard />} />
<Route path="/work/ui-ux/chronos-mobile-app" element={<ChronosMobile />} />
<Route path="/work/ui-ux/environmental-protection-authority" element={<EnvironmentalProtection />} />
<Route path="/work/ui-ux/eva-engineering" element={<EvaEngineering />} />
<Route path="/work/ui-ux/gfeep-alumni-digital-network" element={<GFEEPAlumni />} />
<Route path="/work/ui-ux/prestige-addis" element={<PrestigeAddis />} />
<Route path="/work/ui-ux/smartprep" element={<SmartPrep />} />
<Route path="/work/ui-ux/weyrayie" element={<Weyrayie />} />
<Route path="/work/ui-ux/eva-engineering-2" element={<EvaEngineering2 />} />
</Routes>
    </AnimatePresence>
  );
}