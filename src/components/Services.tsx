import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onViewClick: () => void;
}

const Services: React.FC<ServicesProps> = ({ onViewClick }) => {
  return (
    <section id="services" className="container" style={{ padding: 'var(--section-padding) 0' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="light-box-3d"
        style={{ 
          padding: 'var(--spacing-xxl)',
          maxWidth: '800px',
          width: '100%',
          cursor: 'pointer'
        }}
        onClick={onViewClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
      >
        <span className="mono-text" style={{ color: 'var(--nepal-crimson)', fontWeight: 700 }}>
          // CORE_CAPABILITIES
        </span>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-main)', marginTop: 'var(--spacing-sm)' }}>
          Expert Services
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: 'var(--text-muted)', 
          marginTop: 'var(--spacing-md)', 
          lineHeight: 1.6,
          maxWidth: '600px'
        }}>
          Architecting full-stack AI solutions that stay up longer than a chiya-fueled hackathon. From neural research to production code—delivering intelligence that scales higher than the hills of Chandragiri.
        </p>
        
        <div style={{ 
          marginTop: 'var(--spacing-xl)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--nepal-blue)',
          fontWeight: 800
        }} className="mono-text">
          INITIALIZE_FULL_VIEW <ArrowRight size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
