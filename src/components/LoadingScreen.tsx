import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2200
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(eased)
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 600)
      }
    }
    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Center content */}
        <div className="loading-center">
          {/* Mandala */}
          <motion.div
            className="loading-mandala"
            initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg viewBox="0 0 120 120" fill="none">
              {/* Outer ring — draws in */}
              <circle cx="60" cy="60" r="55" className="mandala-ring mandala-ring--outer" />
              {/* Inner ring */}
              <circle cx="60" cy="60" r="38" className="mandala-ring mandala-ring--inner" />
              {/* Upward triangle */}
              <polygon points="60,18 95,72 25,72" className="mandala-triangle" />
              {/* Downward triangle */}
              <polygon points="60,102 25,48 95,48" className="mandala-triangle mandala-triangle--inv" />
              {/* Center dot */}
              <circle cx="60" cy="60" r="3" className="mandala-dot" />
              {/* Vertex dots */}
              <circle cx="60" cy="18" r="1.5" className="mandala-dot" />
              <circle cx="60" cy="102" r="1.5" className="mandala-dot" />
            </svg>
          </motion.div>

          {/* Name */}
          <motion.div
            className="loading-name"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="loading-name-first">Kritish</span>
            <span className="loading-name-last"> Dhital</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="loading-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            Full Stack AI/ML Developer
          </motion.p>
        </div>

        {/* Mountain silhouette */}
        <div className="loading-mountain">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path
              d="M0,80 L0,60 L120,35 L200,50 L320,20 L400,40 L500,10 L580,30 L660,5 L720,25 L800,15 L900,35 L980,8 L1060,30 L1140,12 L1220,38 L1300,22 L1380,45 L1440,30 L1440,80 Z"
              fill="currentColor"
              style={{ color: 'var(--text-muted)' }}
            />
          </svg>
        </div>

        {/* Progress bar */}
        <div className="loading-progress">
          <motion.div
            className="loading-progress-bar"
            style={{ scaleX: progress }}
          />
        </div>

        {/* Progress percentage */}
        <motion.div
          className="loading-percent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {Math.round(progress * 100)}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
