import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onViewClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onViewClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="light-box-3d"
      style={{ 
        padding: 'var(--spacing-xl)',
        width: '100%',
        cursor: 'pointer',
        height: '100%'
      }}
      onClick={onViewClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="mono-text" style={{ color: 'var(--nepal-crimson)', fontWeight: 700 }}>
        // CORE_CAPABILITIES
      </span>
      <h2 className={isHovered ? "animate-flag-text" : ""} style={{ 
        fontSize: 'clamp(20px, 3vw, 28px)', 
        marginTop: 'var(--spacing-xs)', 
        lineHeight: 1.2,
        color: isHovered ? 'transparent' : 'var(--text-main)' 
      }}>
        Expert AI Services
      </h2>
      <p style={{ 
        fontSize: '14px', 
        color: 'var(--text-muted)', 
        marginTop: 'var(--spacing-md)', 
        lineHeight: 1.6,
        letterSpacing: '0.01em'
      }}>
        Architecting full-stack AI solutions that stay up longer than a chiya-fueled hackathon. From neural research to production code—delivering intelligence that scales higher than the hills of Chandragiri.
      </p>
      
      <div style={{ 
        marginTop: 'auto',
        paddingTop: 'var(--spacing-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--nepal-blue)',
        fontWeight: 800,
        fontSize: '10px'
      }} className="mono-text">
        INITIALIZE_FULL_VIEW <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};

export default Services;
