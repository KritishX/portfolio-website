import { useEffect, useRef } from 'react'

/**
 * Subtle sacred geometry background — slowly rotating triangles
 * and dot grid inspired by Nepali mandala patterns.
 * Renders on canvas for performance. Scales down on mobile.
 */
export default function SacredGeometry() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let width = 0
    let height = 0

    const isMobile = window.innerWidth < 768

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const drawTriangle = (
      cx: number, cy: number, radius: number,
      rotation: number, color: string, lineWidth: number
    ) => {
      ctx.save()
      ctx.translate(cx, cy)
      ctx.rotate(rotation)
      ctx.beginPath()
      for (let i = 0; i < 3; i++) {
        const angle = (i * 2 * Math.PI) / 3 - Math.PI / 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctx.stroke()
      ctx.restore()
    }

    const drawDotGrid = (time: number) => {
      const spacing = isMobile ? 60 : 80
      const dotRadius = 1
      const cols = Math.ceil(width / spacing) + 1
      const rows = Math.ceil(height / spacing) + 1

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing
          const dist = Math.sqrt(
            Math.pow(x - width / 2, 2) + Math.pow(y - height / 2, 2)
          )
          const maxDist = Math.sqrt(width * width + height * height) / 2
          const opacity = Math.max(0, 0.08 - (dist / maxDist) * 0.06)
          const pulse = Math.sin(time * 0.0005 + dist * 0.003) * 0.02

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(196, 30, 58, ${opacity + pulse})`
          ctx.fill()
        }
      }
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // Dot grid
      if (!isMobile) {
        drawDotGrid(time)
      }

      // Rotating triangles
      const centerX = width * 0.82
      const centerY = height * 0.3
      const r1 = isMobile ? 60 : 120
      const r2 = isMobile ? 40 : 80

      drawTriangle(
        centerX, centerY, r1,
        time * 0.0001,
        'rgba(196, 30, 58, 0.06)', 0.5
      )
      drawTriangle(
        centerX, centerY, r2,
        -time * 0.00015,
        'rgba(27, 58, 92, 0.06)', 0.5
      )

      // Second group — bottom left
      if (!isMobile) {
        const cx2 = width * 0.15
        const cy2 = height * 0.75
        drawTriangle(
          cx2, cy2, 90,
          time * 0.00012,
          'rgba(212, 168, 83, 0.04)', 0.4
        )
        drawTriangle(
          cx2, cy2, 55,
          -time * 0.0001,
          'rgba(196, 30, 58, 0.04)', 0.4
        )
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
