import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);

  const cursorX = useSpring(0, { stiffness: 300, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over interactive elements
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.classList.contains("magnetic");

      setIsHovering(isInteractive);

      // Magnetic effect for buttons
      const magneticElement = target.closest(".magnetic") as HTMLElement;
      if (magneticElement) {
        const rect = magneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < 100) {
          setIsMagnetic(true);
          cursorX.set(centerX);
          cursorY.set(centerY);
          return;
        }
      }

      setIsMagnetic(false);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-white/40 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 60 : 32,
          height: isHovering ? 60 : 32,
          borderWidth: isHovering ? 1 : 1.5,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />

      {/* Gradient glow following cursor */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9997] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)",
          width: 400,
          height: 400,
          left: mousePosition.x,
          top: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(60px)",
        }}
      />
    </>
  );
}
