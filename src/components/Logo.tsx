import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <motion.div 
      style={{ 
        width: size, 
        height: size, 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        cursor: 'pointer'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer Hexagon Frame */}
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <path
          d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
          fill="none"
          stroke="var(--nepal-blue)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Dynamic Scanning Line */}
        <motion.line
          x1="10" y1="50" x2="90" y2="50"
          stroke="var(--nepal-crimson)"
          strokeWidth="2"
          strokeOpacity="0.5"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* The KD Text with Liquid Glass Effect */}
      <div className="animate-flag-text" style={{ 
        fontSize: `${size * 0.4}px`, 
        fontWeight: 900, 
        zIndex: 2,
        fontFamily: 'var(--font-mono)',
        letterSpacing: '-0.05em'
      }}>
        KD
      </div>

      {/* Background Glow */}
      <div style={{ 
        position: 'absolute', 
        width: '100%', 
        height: '100%', 
        background: 'var(--nepal-blue)', 
        borderRadius: '50%', 
        filter: 'blur(15px)', 
        opacity: 0.1,
        zIndex: -1 
      }} />
    </motion.div>
  );
};

export default Logo;
