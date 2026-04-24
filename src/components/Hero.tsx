import { motion } from 'framer-motion'
import { ArrowRight, Linkedin } from 'lucide-react'

const lineVariants = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] as any }
  })
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] as any }
  })
}

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Ambient background */}
      <div className="hero-ambient">
        <div className="hero-ambient-orb hero-ambient-orb--crimson" />
        <div className="hero-ambient-orb hero-ambient-orb--sapphire" />
        <div className="hero-grid" />
        
        {/* Integrated Reticle-Mandala HUD */}
        <motion.div 
          className="hero-hud-mandala"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 3" className="hud-ring-outer" />
            <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.2" strokeDasharray="8 6" className="hud-ring-mid" />
            <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.1" opacity="0.4" />
            <path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
            <path d="M35 35 L38 38 M62 62 L65 65 M35 65 L38 62 M62 35 L65 38" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
          </svg>
        </motion.div>
      </div>

      <div className="hero-content hero-content--centered">
        {/* Overline */}
        <motion.div
          className="hero-overline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-overline-dot" />
          Full Stack AI/ML Developer &amp; Computer Engineer
        </motion.div>

        {/* Name — two lines with stagger reveal */}
        <h1 className="hero-name">
          <span className="hero-name-line">
            <motion.span
              style={{ display: 'inline-block' }}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Kritish
            </motion.span>
          </span>
          <span className="hero-name-line">
            <motion.span
              style={{ display: 'inline-block' }}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              <em>Dhital</em>
            </motion.span>
          </span>
        </h1>

        {/* Role description */}
        <motion.p
          className="hero-role"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Building <strong>intelligent systems</strong> at the intersection of
          machine learning, computer vision, and full-stack engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-cta-row"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <a href="#contact" className="hero-cta-primary">
            Get in Touch
            <ArrowRight />
          </a>
          <a
            href="https://www.linkedin.com/in/kritish-dhital123"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-secondary"
          >
            <Linkedin />
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — anchored to bottom of section */}
      <motion.div
        className="hero-bottom-stack"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.2 }}
      >
        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <span className="hero-scroll-line" />
        </div>
      </motion.div>
    </section>
  )
}
