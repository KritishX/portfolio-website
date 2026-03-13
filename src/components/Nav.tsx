import React from 'react';
import NepalFlag from './NepalFlag';

interface NavProps {
  onContactClick: () => void;
}

const Nav: React.FC<NavProps> = ({ onContactClick }) => {
  return (
    <nav style={{ 
      background: 'var(--glass-bg)', 
      backdropFilter: 'var(--glass-blur)', 
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid var(--border-line)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left-aligned Identity Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <NepalFlag size={42} />
          <div style={{ 
            fontWeight: 800, 
            fontSize: '18px', 
            letterSpacing: '-0.04em', 
            fontFamily: 'var(--font-display)',
            textTransform: 'uppercase',
            color: 'var(--text-main)'
          }}>
            KRITISH DHITAL
          </div>
        </div>

        {/* Right-aligned Navigation Links */}
        <div className="mono-text" style={{ 
          display: 'flex', 
          gap: 'var(--spacing-lg)', 
          fontSize: '11px', 
          fontWeight: 700
        }}>
          <a 
            href="#projects" 
            style={{ 
              color: 'var(--text-main)', 
              textDecoration: 'none', 
              opacity: 0.8, 
              borderBottom: '1.5px solid var(--text-main)',
              paddingBottom: '2px',
              transition: 'opacity 0.3s var(--ease-premium)' 
            }} 
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} 
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            01_WORK
          </a>
          <button 
            onClick={onContactClick}
            style={{ 
              color: 'var(--text-main)', 
              textDecoration: 'none', 
              border: 'none',
              borderBottom: '1.5px solid var(--text-main)', 
              paddingBottom: '2px',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'inherit',
              transition: 'opacity 0.3s var(--ease-premium)',
              opacity: 0.8
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'} 
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
          >
            02_CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
