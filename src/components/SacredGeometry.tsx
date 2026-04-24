import { useEffect, useRef } from 'react'

/**
 * Technical Mandala — Advanced Sacred Geometry
 * Inspired by Sri Yantra and traditional Nepali mandalas.
 * Renders interlocking geometries and orbital particles on canvas.
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
      rotation: number, color: string, lineWidth: number,
      filled: boolean = false
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
      if (filled) {
        ctx.fillStyle = color
        ctx.fill()
      } else {
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.stroke()
      }
      ctx.restore()
    }

    const drawCircle = (
      cx: number, cy: number, radius: number,
      color: string, lineWidth: number, dash: number[] = []
    ) => {
      ctx.beginPath()
      ctx.setLineDash(dash)
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = lineWidth
      ctx.stroke()
      ctx.setLineDash([])
    }

    const drawMandala = (cx: number, cy: number, size: number, time: number, baseColor: string) => {
      const rotation = time * 0.0001
      
      // Outer Rings
      drawCircle(cx, cy, size * 1.2, `${baseColor}05)`, 1, [5, 10])
      drawCircle(cx, cy, size * 1.1, `${baseColor}08)`, 0.5)
      
      // Interlocking Triangles (Sri Yantra style)
      for (let i = 0; i < 4; i++) {
        const r = size * (1 - i * 0.2)
        const rot = rotation * (i % 2 === 0 ? 1 : -1) * (1 + i * 0.2)
        drawTriangle(cx, cy, r, rot, `${baseColor}${0.05 + (4-i)*0.01})`, 0.5)
        // Inverted triangle for each
        drawTriangle(cx, cy, r, rot + Math.PI, `${baseColor}${0.03 + (4-i)*0.01})`, 0.4)
      }

      // Bindu (Central Point)
      const pulse = Math.sin(time * 0.002) * 2
      ctx.beginPath()
      ctx.arc(cx, cy, 2 + pulse, 0, Math.PI * 2)
      ctx.fillStyle = `${baseColor}0.3)`
      ctx.fill()
      
      // Orbital particles
      const particleCount = 6
      for (let i = 0; i < particleCount; i++) {
        const pAngle = rotation * 5 + (i * Math.PI * 2) / particleCount
        const px = cx + Math.cos(pAngle) * (size * 0.7)
        const py = cy + Math.sin(pAngle) * (size * 0.7)
        ctx.beginPath()
        ctx.arc(px, py, 1, 0, Math.PI * 2)
        ctx.fillStyle = `${baseColor}0.1)`
        ctx.fill()
      }
    }

    const drawDotGrid = (time: number) => {
      const spacing = isMobile ? 80 : 120
      const dotRadius = 0.8
      const cols = Math.ceil(width / spacing) + 1
      const rows = Math.ceil(height / spacing) + 1
      
      const centerX = width / 2
      const centerY = height / 2
      const maxDistSq = (width * width + height * height) / 4

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing
          const y = r * spacing
          const dx = x - centerX
          const dy = y - centerY
          const distSq = dx * dx + dy * dy
          
          const opacity = Math.max(0, 0.05 - (distSq / maxDistSq) * 0.04)
          const pulse = Math.sin(time * 0.0005 + (c + r) * 0.3) * 0.01

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(196, 30, 58, ${opacity + pulse})`
          ctx.fill()
        }
      }
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height)

      // Background Grid
      if (!isMobile) drawDotGrid(time)

      // Primary Mandala — Top Right
      drawMandala(
        width * 0.85, 
        height * 0.25, 
        isMobile ? 80 : 160, 
        time, 
        'rgba(196, 30, 58, '
      )

      // Secondary Mandala — Bottom Left
      if (!isMobile) {
        drawMandala(
          width * 0.12, 
          height * 0.82, 
          110, 
          time * 0.8, 
          'rgba(212, 168, 83, ' // Golden tint
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
