import { motion } from 'framer-motion'
import { ArrowRight, Linkedin } from 'lucide-react'

const lineVariants = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }
  })
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }
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
      </div>

      <div className="hero-content hero-content--centered">
        {/* Overline */}
        <motion.div
          className="hero-overline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-overline-dot" />
          Full Stack AI/ML Developer
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
          Building <strong>intelligent systems</strong> at the intersection of machine learning,
          computer vision, and full-stack engineering.
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

      {/* Bottom Stack */}
      <div className="hero-bottom-stack">
        {/* Scroll indicator */}
        {/* Scroll indicator */}
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="hero-scroll-text">Scroll</span>
          <span className="hero-scroll-line" />
        </motion.div>
      </div>
    </section>
  )
}
