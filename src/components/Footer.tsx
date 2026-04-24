import { useState } from 'react'
import LegalModal from './LegalModal'

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-nepal">
          <span>Proudly Built in Nepal</span>
        </div>

        <div className="footer-legal">
          <span className="footer-copy">
            © {year} Kritish Dhital.
          </span>
          <button onClick={() => setTermsOpen(true)} className="footer-link">Terms</button>
          <button onClick={() => setPrivacyOpen(true)} className="footer-link">Privacy</button>
        </div>
      </div>

      <LegalModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} title="Terms of Service">
        <h3>1. Agreement to Terms</h3>
        <p>By accessing this website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.</p>
        <h3>2. Intellectual Property</h3>
        <p>The content on this website, including but not limited to the text, code, graphics, and projects showcased, are the intellectual property of Kritish Dhital. You may not reproduce, distribute, or create derivative works without explicit permission.</p>
        <h3>3. Disclaimer</h3>
        <p>The materials on this website are provided on an 'as is' basis. Kritish Dhital makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.</p>
        <h3>4. Limitations</h3>
        <p>In no event shall Kritish Dhital be liable for any damages arising out of the use or inability to use the materials on this website.</p>
      </LegalModal>

      <LegalModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy">
        <h3>1. Information Collection</h3>
        <p>This website is a static portfolio and does not actively track, collect, or store personal user data or cookies natively. Any analytics tools used are configured to respect user privacy and anonymize IP addresses.</p>
        <h3>2. Communications</h3>
        <p>If you choose to contact me via the provided email links or contact forms, the information you provide (such as your name and email address) will be used solely for the purpose of responding to your inquiry.</p>
        <h3>3. Third-Party Links</h3>
        <p>This website contains links to external sites (such as LinkedIn or GitHub). Please be aware that I am not responsible for the content or privacy practices of such other sites. I encourage users to be aware when they leave this site and to read the privacy statements of any other site that collects personally identifiable information.</p>
        <h3>4. Updates</h3>
        <p>This Privacy Policy may be updated periodically. The latest version will always be available on this page.</p>
      </LegalModal>
    </footer>
  )
}
