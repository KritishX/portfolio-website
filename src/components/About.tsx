import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import profileImg from '../assets/profile.jpg'

// Animated counter hook
function useCounter(target: number, duration: number = 1.5) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, start: () => setStarted(true) }
}

function AnimatedStat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { count, start } = useCounter(value, 1.8)

  useEffect(() => {
    if (inView) start()
  }, [inView])

  return (
    <div className="about-stat" ref={ref}>
      <motion.span
        className="about-stat-value"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {count}{suffix}
      </motion.span>
      <motion.span
        className="about-stat-label"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {label}
      </motion.span>
    </div>
  )
}

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Image column */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-wrap">
              <img src={profileImg} alt="Kritish Dhital" loading="lazy" />
            </div>
            <div className="about-image-frame" />
          </motion.div>

          {/* Content column */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">About</span>

            <h2 className="about-heading">
              Engineering <em>intelligence</em>,<br />
              one system at a time
            </h2>

            <p className="about-text">
              I'm Kritish — a Full Stack AI/ML Developer & Computer Engineer who builds
              at the edge of what's possible. From production-grade speech AI platforms
              processing thousands of daily requests, to reinforcement learning agents
              that teach themselves to park, my work sits at the intersection of
              rigorous engineering and creative problem-solving.
            </p>

            <p className="about-text">
              Based in Kathmandu, I bring a perspective shaped by building for real-world
              constraints — limited resources, diverse languages, and the relentless pursuit
              of making AI that actually works for the people who need it most.
            </p>

            {/* Stats with animated counters */}
            <div className="about-stats">
              <AnimatedStat value={15} suffix="+" label="Projects Shipped" />
              <AnimatedStat value={4} suffix="+" label="AI Domains" />
              <AnimatedStat value={10} suffix="K+" label="Daily API Calls" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
