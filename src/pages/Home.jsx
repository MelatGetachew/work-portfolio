import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sparkles, MousePointer2 } from 'lucide-react';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHover, setCursorHover] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-neutral-50 via-blue-50/30 to-yellow-50/20">
      {/* Stylized Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative size-full flex items-center justify-center px-8">
        
        {/* Main Portfolio Text */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 
            className="text-[12vw] leading-none tracking-tight select-none"
            style={{ 
              fontWeight: 900,
              color: '#1a1a1a',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            portfolio
          </h1>

          {/* UX/UI Label - Top Left, Rotated */}
          <motion.div
            className="absolute -top-16 -left-8 bg-blue-600 text-white px-5 py-3 rounded-lg border-4 border-blue-800 shadow-lg"
            initial={{ opacity: 0, rotate: -12, y: 20 }}
            animate={{ opacity: 1, rotate: -8, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ rotate: -12, scale: 1.05 }}
            onHoverStart={() => setCursorHover(true)}
            onHoverEnd={() => setCursorHover(false)}
          >
            <span className="text-2xl font-bold tracking-wide">UX/UI</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-800 rounded-full" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-800 rounded-full" />
          </motion.div>

          {/*animation*/}
          <motion.div
            className="absolute -top-16 -left-8 bg-red-600 text-white px-5 py-3 rounded-lg border-4 border-blue-800 shadow-lg"
            initial={{ opacity: 0, rotate: -12, y: 20 }}
            animate={{ opacity: 1, rotate: -8, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ rotate: -12, scale: 1.05 }}
            onHoverStart={() => setCursorHover(true)}
            onHoverEnd={() => setCursorHover(false)}
          >
            <span className="text-2xl font-bold tracking-wide">Animation</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-800 rounded-full" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-red-800 rounded-full" />
          </motion.div>

          {/* Year Tag - Creative positioning */}
          <motion.div
            className="absolute top-1/3 -left-20 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{ transform: 'rotate(-5deg)' }}
          >
            2026
          </motion.div>

          {/* Cursor Icon - Animated */}
          <motion.div
            className="absolute -top-8 right-1/4 text-blue-600"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              rotate: [0, -10, 0, 10, 0],
            }}
            transition={{ 
              delay: 0.7,
              duration: 0.6,
              rotate: {
                delay: 1.3,
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            <MousePointer2 className="w-12 h-12" strokeWidth={2.5} />
          </motion.div>

          {/* Name Badge - Bottom Right */}
          <motion.div
            className="absolute -bottom-12 -right-16 bg-blue-600 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3"
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.08, rotate: 0 }}
          >
            <span className="text-xl font-bold tracking-wide">Melat Getachew</span>
            <Sparkles className="w-5 h-5 text-yellow-300" fill="currentColor" />
          </motion.div>

          {/* Additional Decorative Elements */}
          <motion.div
            className="absolute top-1/2 -right-24 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl shadow-lg"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ 
              opacity: 1, 
              rotate: 45,
            }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ rotate: 90, scale: 1.1 }}
            style={{ transform: 'rotate(45deg)' }}
          />

          {/* Small Circle Accent */}
          <motion.div
            className="absolute -top-6 left-1/3 w-8 h-8 bg-yellow-300 rounded-full shadow-md"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
            }}
            transition={{ 
              delay: 0.9,
              duration: 0.4,
            }}
            whileHover={{ scale: 1.3 }}
          />

          {/* Status Indicator */}
          <motion.div
            className="absolute bottom-1/4 -left-32 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-neutral-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-neutral-700">Available</span>
          </motion.div>

          {/* Floating Label */}
          <motion.div
            className="absolute -bottom-20 left-1/4 bg-neutral-900 text-white px-5 py-2 text-sm font-bold tracking-wider rounded-md shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            style={{ transform: 'rotate(2deg)' }}
          >
            EST. 2023
          </motion.div>
        </motion.div>

        {/* Cursor Follower - Subtle interaction */}
        <motion.div
          className="absolute w-4 h-4 bg-blue-400 rounded-full pointer-events-none mix-blend-multiply opacity-40"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            mass: 0.5
          }}
        />

      </div>
    </div>
  );
}
