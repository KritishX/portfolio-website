import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="container" style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-xl) 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          background: 'var(--glass)', 
          borderRadius: '24px', 
          padding: 'var(--spacing-xxl) var(--spacing-xl)', 
          textAlign: 'center',
          border: '1px solid var(--border-line)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: 'var(--glass-shadow)'
        }}
      >
        <h2 style={{ 
          fontSize: 'clamp(24px, 5vw, 48px)', 
          fontWeight: 800, 
          marginBottom: 'var(--spacing-md)', 
          letterSpacing: '-0.04em', 
          color: 'var(--text-main)',
          lineHeight: 1.1
        }}>
          Let's compile the next industrial revolution <br /> (and hope the AI doesn't start <br /> demanding its own plate of momo).
        </h2>
        <p style={{ 
          color: 'var(--text-muted)', 
          marginBottom: 'var(--spacing-xl)', 
          fontSize: 'clamp(14px, 2.5vw, 18px)', 
          maxWidth: '600px', 
          margin: '0 auto var(--spacing-xl) auto', 
          lineHeight: 1.6 
        }}>
          Currently architecting high-fidelity AI/ML ecosystems from Nepal that are engineered for resilience and global scale. Available for technical breakthroughs, research sprints, and industrial-grade collaborations.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <button 
            onClick={onContactClick}
            style={{ 
              padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)', 
              borderRadius: '100px',
              textDecoration: 'none',
              color: 'var(--text-main)',
              fontSize: 'clamp(13px, 2vw, 15px)',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(0,0,0,0.02)',
              border: '1px solid var(--border-line)',
              transition: 'all 0.3s var(--ease-premium)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.02)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Mail size={18} /> Get In Touch (I respond faster than a GPU)
          </button>
        </div>
      </motion.div>
      
      <div style={{ 
        marginTop: 'var(--spacing-xxl)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        color: 'var(--text-secondary)', 
        fontSize: 'clamp(9px, 1.5vw, 11px)', 
        fontWeight: 700,
        gap: '24px',
        flexWrap: 'wrap',
        width: '100%'
      }} className="mono-text">
        <div style={{ flex: '1 1 auto', textAlign: 'left' }}>
          <p>© 2026 KRITISH DHITAL — FULL STACK AI/ML DEVELOPER</p>
          <p style={{ fontSize: '8px', marginTop: '4px', opacity: 0.6 }}>PROPRIETARY_PLATFORM // PRIVATE_LICENSE_ALL_RIGHTS_RESERVED</p>
        </div>
        <p style={{ flex: '1 1 auto', textAlign: 'right' }}>PROUDLY BUILT IN NEPAL</p>
      </div>
    </footer>
  );
};

export default Footer;
