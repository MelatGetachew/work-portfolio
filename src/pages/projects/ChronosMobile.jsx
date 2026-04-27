import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Palette,
  Target, 
  BarChart3,
} from "lucide-react";
import ImageWithFallback from "../../Components/ImageWithFallback";
import { Navigation } from "../../Components/Navigation";

export default function ChronosMobile() {
  return (
    <div className="relative min-h-screen overflow-auto bg-white">
      <Navigation />

      <section className="relative bg-neutral-950 pt-32 pb-32 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px'}} />
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 text-blue-300 rounded-full text-sm" style={{ fontWeight: 600, letterSpacing: '0.05em' }}>Mobile App · Productivity</span>
            </div>
            <h1 className="text-7xl md:text-8xl tracking-tight text-white mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700, lineHeight: '0.95' }}>Chronos Mobile App</h1>
            <div className="flex flex-wrap gap-8 mb-12">
              <div><p className="text-neutral-500 text-sm mb-2" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Role</p><p className="text-white text-lg" style={{ fontWeight: 500 }}>Mobile Product Designer</p></div>
              <div><p className="text-neutral-500 text-sm mb-2" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Timeline</p><p className="text-white text-lg" style={{ fontWeight: 500 }}>14 Weeks · 2026</p></div>
              <div><p className="text-neutral-500 text-sm mb-2" style={{ fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Tools</p><p className="text-white text-lg" style={{ fontWeight: 500 }}>Figma, Principle, React Native</p></div>
            </div>
            <p className="text-neutral-400 text-xl max-w-3xl" style={{ fontWeight: 400, lineHeight: '1.7' }}>The mobile companion to Chronos, enabling on-the-go time tracking with offline support and native device integrations.The Chronos mobile app is a fintech experience that enables users to access escrow services, mobile banking, BNPL, AI-powered finance tools, NFTs, and live engagement features on the go.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <ImageWithFallback src="https://images.unsplash.com/photo-1601972602288-3be527b4f18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHB8ZW58MXx8fHwxNzc0Nzk3MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Chronos Mobile Hero" className="w-full aspect-[16/9] object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="relative bg-white py-32 px-8">
        <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`, backgroundSize: '40px 40px'}} />
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-3 mb-12"><div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center"><Target className="w-6 h-6 text-white" /></div><h2 className="text-5xl text-neutral-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700 }}>Overview</h2></div>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div><h3 className="text-sm text-neutral-500 mb-4" style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Challenge</h3><p className="text-neutral-900 text-xl mb-6" style={{ fontWeight: 600, lineHeight: '1.5' }}>Mobile fintech apps must balance complexity and simplicity</p></div>
              <div><h3 className="text-sm text-neutral-500 mb-4" style={{ fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Solution</h3><p className="text-neutral-900 text-xl mb-6" style={{ fontWeight: 600, lineHeight: '1.5' }}>A native mobile experience which provides access to multiple financial services in one app</p></div>
            </div>
            
          </motion.div>
        </div>
      </section>

      <section className="relative bg-neutral-950 py-32 px-8">
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px'}} />
        <div className="relative max-w-7xl mx-auto">
          
        </div>
      </section>

      <section className="relative bg-white py-16 px-8 border-t border-neutral-200">
        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/work/ui-ux/chronos-dashboard"><motion.button whileHover={{ x: -4 }} transition={{ duration: 0.2 }} className="flex items-center gap-2 px-6 py-3 bg-white border border-neutral-300 rounded-full text-neutral-900 hover:border-neutral-400 transition-colors" style={{ fontWeight: 500 }}><ArrowLeft size={18} />Previous Project</motion.button></Link>
            <Link to="/work/ui-ux"><motion.button whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" style={{ fontWeight: 500 }}>Back to Work<ArrowRight size={18} /></motion.button></Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
