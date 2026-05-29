import { useEffect } from "react"

export default function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (!isMobile) {
      document.body.style.cursor = "none"
    }

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
      document.body.style.cursor = "auto"
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {children}

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </div>
  )
}