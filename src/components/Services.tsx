import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onViewClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onViewClick }) => {
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
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      <span className="mono-text" style={{ color: 'var(--nepal-crimson)', fontWeight: 700 }}>
        // CORE_CAPABILITIES
      </span>
      <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--text-main)', marginTop: 'var(--spacing-xs)' }}>
        Expert AI Services
      </h2>
      <p style={{ 
        fontSize: '14px', 
        color: 'var(--text-muted)', 
        marginTop: 'var(--spacing-sm)', 
        lineHeight: 1.4
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
