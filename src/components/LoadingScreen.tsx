import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

function StrangeMandala() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const SIZE = 320
    canvas.width = SIZE
    canvas.height = SIZE
    const cx = SIZE / 2
    const cy = SIZE / 2

    // Particles
    type Particle = { angle: number; radius: number; speed: number; size: number; opacity: number; ring: number }
    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 60 + Math.random() * 100,
      speed: (Math.random() - 0.5) * 0.03,
      size: 0.8 + Math.random() * 1.4,
      opacity: 0.4 + Math.random() * 0.6,
      ring: Math.floor(Math.random() * 4)
    }))

    let t = 0
    let rafId: number

    const drawRunes = (radius: number, count: number, offset: number, color: string, alpha: number) => {
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + offset
        const x = cx + Math.cos(angle) * radius
        const y = cy + Math.sin(angle) * radius
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(angle + Math.PI / 2)
        ctx.strokeStyle = color
        ctx.globalAlpha = alpha
        ctx.lineWidth = 0.8
        const s = 4
        ctx.beginPath()
        if (i % 3 === 0) {
          ctx.moveTo(0, -s); ctx.lineTo(s * 0.866, s * 0.5); ctx.lineTo(-s * 0.866, s * 0.5); ctx.closePath()
        } else if (i % 3 === 1) {
          ctx.moveTo(-s, 0); ctx.lineTo(s, 0); ctx.moveTo(0, -s); ctx.lineTo(0, s)
        } else {
          ctx.moveTo(0, -s); ctx.lineTo(s * 0.6, 0); ctx.lineTo(0, s); ctx.lineTo(-s * 0.6, 0); ctx.closePath()
        }
        ctx.stroke()
        ctx.restore()
      }
    }

    const drawDashedRing = (radius: number, dashes: number, gapRatio: number, color: string, alpha: number, lw: number, rotation: number) => {
      const circumference = 2 * Math.PI * radius
      const dashLen = (circumference / dashes) * (1 - gapRatio)
      const gapLen = (circumference / dashes) * gapRatio
      ctx.save()
      ctx.strokeStyle = color
      ctx.globalAlpha = alpha
      ctx.lineWidth = lw
      ctx.setLineDash([dashLen, gapLen])
      ctx.lineDashOffset = -rotation * radius
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.setLineDash([])
      ctx.restore()
    }

    const drawGlowRing = (radius: number, color: string, alpha: number, lw: number) => {
      ctx.save()
      ctx.strokeStyle = color
      ctx.globalAlpha = alpha
      ctx.lineWidth = lw
      ctx.shadowColor = color
      ctx.shadowBlur = 12
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    const drawHUD = (alpha: number) => {
      ctx.save()
      ctx.strokeStyle = '#ffffff'
      ctx.globalAlpha = alpha * 0.9
      ctx.lineWidth = 1
      const bSize = 20
      const padding = 15
      
      // Brackets
      ctx.beginPath(); ctx.moveTo(padding, padding + bSize); ctx.lineTo(padding, padding); ctx.lineTo(padding + bSize, padding); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(SIZE - padding, padding + bSize); ctx.lineTo(SIZE - padding, padding); ctx.lineTo(SIZE - padding - bSize, padding); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(padding, SIZE - padding - bSize); ctx.lineTo(padding, SIZE - padding); ctx.lineTo(padding + bSize, SIZE - padding); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(SIZE - padding, SIZE - padding - bSize); ctx.lineTo(SIZE - padding, SIZE - padding); ctx.lineTo(SIZE - padding - bSize, SIZE - padding); ctx.stroke()
      
      // Crosshairs with crimson core
      ctx.strokeStyle = '#E8334D'
      const cLen = 10; const cGap = 40
      ctx.beginPath(); ctx.moveTo(cx, cy - cGap - cLen); ctx.lineTo(cx, cy - cGap); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx, cy + cGap); ctx.lineTo(cx, cy + cGap + cLen); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx - cGap - cLen, cy); ctx.lineTo(cx - cGap, cy); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(cx + cGap, cy); ctx.lineTo(cx + cGap + cLen, cy); ctx.stroke()
      ctx.restore()
    }

    const drawSpokes = (count: number, innerR: number, outerR: number, angle: number, color: string, alpha: number) => {
      ctx.save()
      ctx.strokeStyle = color
      ctx.globalAlpha = alpha
      ctx.lineWidth = 0.6
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2 + angle
        ctx.beginPath()
        ctx.moveTo(cx + Math.cos(a) * innerR, cy + Math.sin(a) * innerR)
        ctx.lineTo(cx + Math.cos(a) * outerR, cy + Math.sin(a) * outerR)
        ctx.stroke()
      }
      ctx.restore()
    }

    const frame = () => {
      ctx.clearRect(0, 0, SIZE, SIZE)
      t += 0.012

      // Glow layers
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 140)
      grad.addColorStop(0, 'rgba(212, 168, 83, 0.06)')
      grad.addColorStop(0.5, 'rgba(196, 30, 58, 0.04)')
      grad.addColorStop(1, 'transparent')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, SIZE, SIZE)

      // Ring 1
      drawGlowRing(32, '#E8334D', 0.9, 1.2)
      drawDashedRing(32, 12, 0.45, '#E8334D', 0.7, 1, t * 2.5)
      drawSpokes(12, 22, 42, t * 2.5, '#E8334D', 0.5)

      // Ring 2
      drawGlowRing(58, '#D4A853', 0.65, 1)
      drawDashedRing(58, 24, 0.4, '#D4A853', 0.6, 0.8, -t * 1.8)
      drawRunes(58, 12, -t * 1.8, '#D4A853', 0.75)
      drawSpokes(24, 48, 68, -t * 1.8, '#D4A853', 0.25)

      // Ring 3
      drawGlowRing(88, '#C41E3A', 0.55, 1)
      drawDashedRing(88, 36, 0.35, '#C41E3A', 0.55, 0.7, t * 1.2)
      drawRunes(88, 18, t * 1.2, '#C41E3A', 0.5)

      // Ring 4
      drawGlowRing(118, '#D4A853', 0.3, 0.8)
      drawDashedRing(118, 48, 0.5, '#D4A853', 0.4, 0.6, -t * 0.7)
      drawDashedRing(124, 8, 0.3, '#E8334D', 0.35, 1.2, t * 0.7)
      drawRunes(118, 24, -t * 0.7, '#D4A853', 0.35)
      drawSpokes(48, 108, 128, -t * 0.7, '#D4A853', 0.12)

      // Particles
      particles.forEach(p => {
        p.angle += p.speed
        const x = cx + Math.cos(p.angle) * p.radius
        const y = cy + Math.sin(p.angle) * p.radius
        const flicker = 0.5 + 0.5 * Math.sin(t * 8 + p.radius)
        ctx.save()
        ctx.globalAlpha = p.opacity * flicker
        ctx.fillStyle = p.ring % 2 === 0 ? '#E8334D' : '#D4A853'
        ctx.shadowColor = p.ring % 2 === 0 ? '#E8334D' : '#D4A853'
        ctx.shadowBlur = 6
        ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill()
        ctx.restore()
      })

      // Reticle HUD
      const hudAlpha = 0.3 + 0.2 * Math.sin(t * 1.5)
      drawHUD(hudAlpha)

      // Center dot
      ctx.save()
      ctx.globalAlpha = 1
      ctx.fillStyle = '#E8334D'
      ctx.shadowColor = '#E8334D'
      ctx.shadowBlur = 16
      ctx.beginPath(); ctx.arc(cx, cy, 3.5, 0, Math.PI * 2); ctx.fill()
      ctx.restore()

      rafId = requestAnimationFrame(frame)
    }

    rafId = requestAnimationFrame(frame)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 260, height: 260, filter: 'drop-shadow(0 0 35px rgba(196,30,58,0.35))' }}
    />
  )
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setProgress(eased)
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onComplete, 500)
      }
    }
    requestAnimationFrame(tick)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="loading-center">
          <motion.div
            className="loading-mandala-wrap"
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <StrangeMandala />
          </motion.div>

          <motion.div
            className="loading-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="loading-name-first">Kritish</span>
            <span className="loading-name-last">Dhital</span>
          </motion.div>

          <motion.p
            className="loading-tagline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            Full Stack AI/ML Developer & Computer Engineer
          </motion.p>
        </div>

        <div className="loading-mountain">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path
              className="loading-mountain-back"
              d="M0,100 L0,70 L180,30 L360,60 L540,10 L720,50 L900,20 L1080,70 L1260,30 L1440,80 L1440,100 Z"
              fill="currentColor"
            />
            <path
              className="loading-mountain-front"
              d="M0,100 L0,85 L120,55 L240,75 L360,40 L480,65 L600,30 L720,55 L840,40 L960,65 L1080,25 L1200,55 L1320,35 L1440,60 L1440,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="loading-progress">
          <motion.div className="loading-progress-bar" style={{ scaleX: progress }} />
        </div>

        <motion.div
          className="loading-hud-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="loading-status">STATUS: INITIALIZING_SYSTEMS</div>
          <div className="loading-percent">
            {Math.round(progress * 100).toString().padStart(3, '0')}
            <span className="loading-unit">%</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
