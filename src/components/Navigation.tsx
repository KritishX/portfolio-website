import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

  const scrollTo = (id: string) => {
    setMobileOpen(false)
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
              <svg viewBox="0 0 32 32" fill="none">
                <polygon points="16,2 28,26 4,26" stroke="var(--crimson)" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="18" r="4" fill="var(--crimson)" opacity="0.8" />
              </svg>
            </div>
            <span className="nav-brand-name">KD</span>
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
