import React from 'react';
import NepalFlag from './NepalFlag';

interface NavProps {
  onContactClick: () => void;
  onWorkClick: () => void; // Added work click handler
}

const Nav: React.FC<NavProps> = ({ onContactClick, onWorkClick }) => {
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
          <NepalFlag size={32} />
          <div className="animate-flag-text" style={{ 
            fontSize: '14px', 
            letterSpacing: '0.05em', 
            fontFamily: 'var(--font-mono)',
            paddingTop: '2px' // Subtle offset for visual symmetry with flag height
          }}>
            ReticleX
          </div>
        </div>

        {/* Right-aligned Navigation Links */}
        <div className="mono-text" style={{ 
          display: 'flex', 
          gap: 'var(--spacing-lg)', 
          fontSize: '11px', 
          fontWeight: 700
        }}>
          <button 
            onClick={onWorkClick}
            style={{ 
              color: 'var(--text-main)', 
              textDecoration: 'none', 
              opacity: 0.8, 
              border: 'none',
              background: 'transparent',
              borderBottom: '1.5px solid transparent', 
              paddingBottom: '2px',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'inherit',
              transition: 'all 0.3s var(--ease-premium)' 
            }} 
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderBottomColor = 'var(--text-main)';
            }} 
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            01_WORK
          </button>
          <button 
            onClick={onContactClick}
            style={{ 
              color: 'var(--text-main)', 
              textDecoration: 'none', 
              border: 'none',
              borderBottom: '1.5px solid transparent', 
              paddingBottom: '2px',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: 700,
              fontFamily: 'inherit',
              transition: 'all 0.3s var(--ease-premium)',
              opacity: 0.8
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderBottomColor = 'var(--text-main)';
            }} 
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            02_CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
