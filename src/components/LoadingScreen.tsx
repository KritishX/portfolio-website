import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2400
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      // Ease-out curve for progress
      setProgress(1 - Math.pow(1 - p, 3))
      if (p < 1) requestAnimationFrame(tick)
      else setTimeout(onComplete, 300)
    }
    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Sacred Geometry Mandala */}
        <motion.div
          className="loading-mandala"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 120 120" fill="none">
            {/* Outer circle */}
            <circle
              cx="60" cy="60" r="55"
              className="mandala-ring mandala-ring--outer"
            />
            {/* Inner circle */}
            <circle
              cx="60" cy="60" r="38"
              className="mandala-ring mandala-ring--inner"
            />
            {/* Upward triangle - representing mountains/Nepal */}
            <polygon
              points="60,18 95,72 25,72"
              className="mandala-triangle"
            />
            {/* Downward triangle - creating Sri Yantra intersection */}
            <polygon
              points="60,102 25,48 95,48"
              className="mandala-triangle mandala-triangle--inv"
            />
            {/* Center dot */}
            <circle cx="60" cy="60" r="3" className="mandala-dot" />
            {/* Small accent dots at vertices */}
            <circle cx="60" cy="18" r="1.5" className="mandala-dot" />
            <circle cx="60" cy="102" r="1.5" className="mandala-dot" />
          </svg>
        </motion.div>

        {/* Name */}
        <motion.div
          className="loading-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          KRITISH DHITAL
        </motion.div>

        {/* Status text */}
        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          Initializing Experience
        </motion.div>

        {/* Location */}
        <motion.div
          className="loading-location"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Kathmandu, Nepal
        </motion.div>

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
      </motion.div>
    </AnimatePresence>
  )
}
