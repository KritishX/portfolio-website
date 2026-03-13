import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
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
          fontSize: 'clamp(18px, 3.5vw, 32px)', 
          fontWeight: 800, 
          marginBottom: 'var(--spacing-md)', 
          letterSpacing: '-0.04em', 
          color: 'var(--text-main)',
          lineHeight: 1.15
        }}>
          Let's compile the next industrial revolution <br /> (and hope the AI doesn't start <br /> demanding its own plate of momo).
        </h2>
        <p style={{ 
          color: 'var(--text-muted)', 
          marginBottom: 'var(--spacing-lg)', 
          fontSize: 'clamp(13px, 2vw, 16px)', 
          maxWidth: '550px', 
          margin: '0 auto var(--spacing-lg) auto', 
          lineHeight: 1.5 
        }}>
          Currently architecting high-fidelity AI/ML ecosystems from Nepal that are engineered for resilience and global scale. Available for technical breakthroughs, research sprints, and industrial-grade collaborations.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
          <button 
            onClick={onContactClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              padding: 'clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px)', 
              borderRadius: '100px',
              textDecoration: 'none',
              color: isHovered ? 'transparent' : 'var(--text-main)',
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
          >
            <div className={isHovered ? "animate-flag-text" : ""} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={18} color={isHovered ? "var(--nepal-blue)" : "currentColor"} /> 
              Get In Touch (I respond faster than a GPU)
            </div>
          </button>
        </div>
      </motion.div>
      
      <div style={{ 
        marginTop: 'var(--spacing-xxl)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        color: 'var(--text-secondary)', 
        fontSize: 'clamp(8px, 1.2vw, 10px)', 
        fontWeight: 700,
        gap: '24px',
        flexWrap: 'wrap',
        width: '100%',
        opacity: 0.8
      }} className="mono-text">
        <div style={{ flex: '1 1 auto', textAlign: 'left' }}>
          <p style={{ fontWeight: 800 }}>© 2026 KRITISH DHITAL — FULL STACK AI/ML DEVELOPER</p>
          <p style={{ fontSize: '7px', marginTop: '4px', opacity: 0.5, letterSpacing: '0.05em' }}>
            PROPRIETARY_PLATFORM // PRIVATE_LICENSE_ALL_RIGHTS_RESERVED
          </p>
        </div>
        <p style={{ flex: '1 1 auto', textAlign: 'right' }} className="animate-flag-text">
          PROUDLY BUILT IN NEPAL
        </p>
      </div>
    </footer>
  );
};

export default Footer;
