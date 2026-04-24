import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import profileImg from '../assets/profile.jpg'

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
              I'm Kritish — a developer who builds at the edge of what's possible.
              From production-grade speech AI platforms processing thousands of daily requests,
              to reinforcement learning agents that teach themselves to park, my work sits
              at the intersection of rigorous engineering and creative problem-solving.
            </p>

            <p className="about-text">
              Based in Kathmandu, I bring a perspective shaped by building for real-world
              constraints — limited resources, diverse languages, and the relentless pursuit
              of making AI that actually works for the people who need it most.
            </p>

            {/* Nepal tag */}
            <div className="about-nepal-tag">
              <MapPin size={16} color="var(--crimson-bright)" />
              Proudly Built in Nepal
            </div>

            {/* Stats */}
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-value">15+</span>
                <span className="about-stat-label">Projects Shipped</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">4+</span>
                <span className="about-stat-label">AI Domains</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-value">10K+</span>
                <span className="about-stat-label">Daily API Calls</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
