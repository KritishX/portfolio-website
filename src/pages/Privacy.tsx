import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    ;(window as any).lenis?.scrollTo(0, { immediate: true })
  }, [])

  return (
    <div className="legal-page">
      <div className="container--narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to="/" className="legal-back">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <h1 className="legal-title">Privacy Policy</h1>
          <div className="legal-content">
            <h3>1. Information Collection</h3>
            <p>This website is a static portfolio and does not actively track, collect, or store personal user data or cookies natively. Any analytics tools used are configured to respect user privacy and anonymize IP addresses.</p>
            
            <h3>2. Communications</h3>
            <p>If you choose to contact me via the provided email links or contact forms, the information you provide (such as your name and email address) will be used solely for the purpose of responding to your inquiry.</p>
            
            <h3>3. Third-Party Links</h3>
            <p>This website contains links to external sites (such as LinkedIn or GitHub). Please be aware that I am not responsible for the content or privacy practices of such other sites. I encourage users to be aware when they leave this site and to read the privacy statements of any other site that collects personally identifiable information.</p>
            
            <h3>4. Updates</h3>
            <p>This Privacy Policy may be updated periodically. The latest version will always be available on this page.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
