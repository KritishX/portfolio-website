import React from 'react';
import NepalFlag from './NepalFlag';

interface NavProps {
  onWorkClick: () => void; 
  onContactClick: () => void;
}

const Nav: React.FC<NavProps> = ({ onWorkClick, onContactClick }) => {
  return (
    <nav style={{ 
      background: 'var(--glass-bg)', 
      backdropFilter: 'var(--glass-blur)', 
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: 'none',
      boxShadow: 'none', // Removed any potential shadow
      position: 'relative',
      overflow: 'hidden', // Contain the glass-flare
      zIndex: 100000
    }}>
      <div className="glass-flare"></div>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left-aligned Identity Group */}
        <div 
          className="easter-egg-trigger"
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', cursor: 'pointer' }}
        >
          <NepalFlag size={32} />
          <div className="animate-flag-text" style={{ 
            fontSize: '14px', 
            letterSpacing: '0.05em', 
            fontFamily: 'var(--font-mono)',
            paddingTop: '2px' 
          }}>
            KritishX
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
            onClick={(e) => {
              e.stopPropagation();
              onWorkClick();
            }}
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
            01_BLUEPRINT
          </button>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              onContactClick();
            }}
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
            02_CONNECT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
