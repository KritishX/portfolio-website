import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const lenis = (window as any).lenis
    if (!lenis) return

    const handleScroll = () => {
      setScrolled(lenis.scroll > 40)
    }

    lenis.on('scroll', handleScroll)
    return () => lenis.off('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (id: string) => {
    setMobileOpen(false)

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const lenis = (window as any).lenis
        const el = document.getElementById(id)
        if (lenis && el) lenis.scrollTo(el, { offset: -130, immediate: false })
        else if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 250)
      return
    }

    const lenis = (window as any).lenis
    const el = document.getElementById(id)
    
    if (lenis && el) {
      lenis.scrollTo(el, { offset: -130 })
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const links = [
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'About', id: 'about' },
  ]

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-inner">
          {/* Brand */}
          <button className="nav-brand" onClick={() => (window as any).lenis?.scrollTo(0)}>
            <div className="nav-brand-mark">
              <svg viewBox="-4 -4 40 40" fill="none">
                <defs>
                  <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff4b4b" />
                    <stop offset="100%" stopColor="#c41e3a" />
                  </linearGradient>
                  <filter id="brandGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Mandala-Reticle Fusion Geometry */}
                <path 
                  d="M16 2 L19.5 12.5 L30 16 L19.5 19.5 L16 30 L12.5 19.5 L2 16 L12.5 12.5 Z" 
                  stroke="url(#brandGrad)" 
                  strokeWidth="0.5" 
                  opacity="0.3" 
                  className="nav-ring-outer"
                />
                
                {/* Rotating Technical Rings */}
                <circle cx="16" cy="16" r="15" stroke="url(#brandGrad)" strokeWidth="0.5" opacity="0.15" strokeDasharray="1 2" />
                <circle cx="16" cy="16" r="11" stroke="url(#brandGrad)" strokeWidth="1" opacity="0.5" strokeDasharray="5 5" className="nav-ring-mid" />

                {/* Reticle Crosshairs */}
                <path d="M16 0 L16 7 M16 25 L16 32 M0 16 L7 16 M25 16 L32 16" stroke="url(#brandGrad)" strokeWidth="1.2" strokeLinecap="square" filter="url(#brandGlow)" />

                {/* Central Identity - KD */}
                <text 
                  x="16" y="19" 
                  fill="url(#brandGrad)" 
                  fontSize="9" 
                  fontWeight="700" 
                  textAnchor="middle" 
                  style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', filter: 'drop-shadow(0 0 2px rgba(196,30,58,0.5))' }}
                >
                  KD
                </text>
                
                {/* Core pulse */}
                <circle cx="16" cy="16" r="1.5" fill="#ff4b4b" className="nav-brand-dot" />
              </svg>
            </div>
          </button>

          {/* Desktop links + flag */}
          <div className="nav-links">
            {links.map(link => (
              <button
                key={link.id}
                className="nav-link"
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button className="nav-cta" onClick={() => scrollTo('contact')}>
              Get in Touch
            </button>
          </div>

          {/* Mobile: flag + toggle */}
          <div className="nav-mobile-right">
            <button
              className={`nav-toggle ${mobileOpen ? 'nav-toggle--open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
              <span className="nav-toggle-line" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-overlay nav-mobile-overlay--open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, i) => (
              <motion.button
                key={link.id}
                className="nav-link"
                onClick={() => scrollTo(link.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              className="nav-cta"
              onClick={() => scrollTo('contact')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
