import { Link } from 'react-router-dom'

export default function Footer() {
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
          <Link to="/terms" className="footer-link">Terms</Link>
          <Link to="/privacy" className="footer-link">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
