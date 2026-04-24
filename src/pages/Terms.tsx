import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

export default function Terms() {
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
          
          <h1 className="legal-title">Terms of Service</h1>
          <div className="legal-content">
            <h3>1. Agreement to Terms</h3>
            <p>By accessing this website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.</p>
            
            <h3>2. Intellectual Property</h3>
            <p>The content on this website, including but not limited to the text, code, graphics, and projects showcased, are the intellectual property of Kritish Dhital. You may not reproduce, distribute, or create derivative works without explicit permission.</p>
            
            <h3>3. Disclaimer</h3>
            <p>The materials on this website are provided on an 'as is' basis. Kritish Dhital makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.</p>
            
            <h3>4. Limitations</h3>
            <p>In no event shall Kritish Dhital be liable for any damages arising out of the use or inability to use the materials on this website.</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
