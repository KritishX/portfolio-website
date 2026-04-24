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
        if (lenis && el) lenis.scrollTo(el, { immediate: false })
        else if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
      return
    }

    const lenis = (window as any).lenis
    const el = document.getElementById(id)
    
    if (lenis && el) {
      lenis.scrollTo(el)
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
                    <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Outer static brackets */}
                <path d="M4 12 L4 4 L12 4" stroke="url(#brandGrad)" strokeWidth="0.75" opacity="0.4" />
                <path d="M28 12 L28 4 L20 4" stroke="url(#brandGrad)" strokeWidth="0.75" opacity="0.4" />
                <path d="M4 20 L4 28 L12 28" stroke="url(#brandGrad)" strokeWidth="0.75" opacity="0.4" />
                <path d="M28 20 L28 28 L20 28" stroke="url(#brandGrad)" strokeWidth="0.75" opacity="0.4" />

                {/* Outer scope ring — Dashed */}
                <circle 
                  cx="16" cy="16" r="15.5" 
                  stroke="url(#brandGrad)" 
                  strokeWidth="0.8" 
                  opacity="0.2" 
                  strokeDasharray="2 4" 
                  className="nav-ring-outer"
                />
                
                {/* Middle Ring — Segmented */}
                <circle 
                  cx="16" cy="16" r="11" 
                  stroke="url(#brandGrad)" 
                  strokeWidth="1.2" 
                  opacity="0.5" 
                  strokeDasharray="10 7" 
                  className="nav-ring-mid"
                />
                
                {/* Precision crosshairs */}
                <path 
                  d="M16 2 L16 9 M16 23 L16 30 M2 16 L9 16 M23 16 L30 16" 
                  stroke="url(#brandGrad)" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  filter="url(#brandGlow)" 
                />
                
                {/* Inner focus ring */}
                <circle cx="16" cy="16" r="6" stroke="url(#brandGrad)" strokeWidth="1" opacity="0.8" />
                
                {/* Pulsing core */}
                <circle 
                  cx="16" 
                  cy="16" 
                  r="2" 
                  fill="#ff4b4b" 
                  filter="url(#brandGlow)"
                  className="nav-brand-dot"
                />
              </svg>
            </div>
            <div className="nav-brand-logo">
              <span className="nav-logo-k">K</span>
              <span className="nav-logo-d">D</span>
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
