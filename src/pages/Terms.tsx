import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

const sections = [
  {
    number: '01',
    title: 'Agreement to Terms',
    body: 'By accessing this website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws. If you disagree with any part of the terms, you may not access the website.'
  },
  {
    number: '02',
    title: 'Intellectual Property',
    body: 'The content on this website — including text, code, graphics, and projects showcased — is the intellectual property of Kritish Dhital. You may not reproduce, distribute, or create derivative works without explicit written permission.'
  },
  {
    number: '03',
    title: 'Disclaimer',
    body: "The materials on this website are provided on an 'as is' basis. Kritish Dhital makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose."
  },
  {
    number: '04',
    title: 'Limitations',
    body: 'In no event shall Kritish Dhital be liable for any damages arising out of the use or inability to use the materials on this website, even if notified of the possibility of such damage.'
  }
]

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
    ;(window as any).lenis?.scrollTo(0, { immediate: true })
  }, [])

  return (
    <div className="legal-page">
      <div className="legal-page-inner">
        {/* Back navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/" className="legal-back">
            <ArrowLeft size={14} />
            Back
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="legal-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="legal-label">Legal</span>
          <h1 className="legal-title">Terms of<br /><em>Service</em></h1>
          <p className="legal-meta">Last updated — April 2025</p>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="legal-divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Sections */}
        <div className="legal-sections">
          {sections.map((s, i) => (
            <motion.div
              key={s.number}
              className="legal-section"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="legal-section-number">{s.number}</span>
              <div className="legal-section-body">
                <h2 className="legal-section-title">{s.title}</h2>
                <p className="legal-section-text">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
