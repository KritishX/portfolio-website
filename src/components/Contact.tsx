import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'
import nepalMap from '../assets/nepal-map.png'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <motion.div
            className="contact-decor"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
          />

          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact
          </motion.span>

          <motion.h2
            className="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's build<br />
            something <em>great</em>
          </motion.h2>

          <motion.p
            className="contact-sub"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Have a project in mind or just want to connect? I'm always open to
            discussing new ideas, collaborations, and opportunities.
          </motion.p>

          <motion.div
            className="contact-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="mailto:kritishdhital@gmail.com"
              className="contact-link contact-link--primary"
            >
              <Mail />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/kritish-dhital123"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-link--secondary"
            >
              <Linkedin />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
            className="contact-map"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <img src={nepalMap} alt="Map of Nepal" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
