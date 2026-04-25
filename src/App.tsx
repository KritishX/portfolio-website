import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Prevent browser from jumping on back/forward gestures to let Lenis handle it
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      lerp: 0.1, 
      smoothWheel: true,
      wheelMultiplier: 1.0, 
      touchMultiplier: 1.8,
    })

    // Attach to window for access in other components
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).lenis
    }
  }, [])

  const navType = useNavigationType()
  
  // Sync Lenis with route changes — only scroll to top on NEW page visits, not 'POP' (back/forward)
  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).lenis?.scrollTo(0, { immediate: true })
    }
  }, [location.pathname, navType])

  const handleLoadComplete = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        </>
      )}
    </>
  )
}
