import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

const sections = [
  {
    number: '01',
    title: 'Information Collection',
    body: 'This website is a static portfolio and does not actively track, collect, or store personal user data or cookies natively. Any analytics tools used are configured to respect user privacy and anonymize IP addresses.'
  },
  {
    number: '02',
    title: 'Communications',
    body: 'If you choose to contact me via the provided email or contact form, the information you provide — such as your name and email — will be used solely for the purpose of responding to your inquiry and will never be shared with third parties.'
  },
  {
    number: '03',
    title: 'Third-Party Links',
    body: 'This website contains links to external sites such as LinkedIn and GitHub. I am not responsible for the content or privacy practices of those sites. I encourage users to read the privacy statements of any site that collects personally identifiable information.'
  },
  {
    number: '04',
    title: 'Policy Updates',
    body: 'This Privacy Policy may be updated periodically to reflect changes in practices or for operational, legal, or regulatory reasons. The latest version will always be available on this page. Continued use of the site implies acceptance.'
  }
]

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
          <h1 className="legal-title">Privacy<br /><em>Policy</em></h1>
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
