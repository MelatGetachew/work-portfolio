import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkCategory from "./pages/WorkCategory";
import MotionAnimation from "./pages/MotionAnimation";
import Contact from "./pages/Contact";



export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work/ui-ux" element={<WorkCategory />} />
        <Route path="/work/animation" element={<MotionAnimation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}