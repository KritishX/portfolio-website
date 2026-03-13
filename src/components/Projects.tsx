import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewClick: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewClick }) => {
  return (
    <section id="projects" className="container" style={{ padding: 'var(--section-padding) 0' }}>
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
        <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 700 }}>
          &gt; INNOVATION_INDEX
        </span>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-main)', marginTop: 'var(--spacing-sm)' }}>
          Engineering Forge
        </h2>
        <p style={{ 
          fontSize: '18px', 
          color: 'var(--text-muted)', 
          marginTop: 'var(--spacing-md)', 
          lineHeight: 1.6,
          maxWidth: '600px'
        }}>
          Forging high-precision AI for heavy-duty industrial systems. Delivering production-ready neural architectures that are more robust than a Himalayan suspension bridge and handle edge-cases better than a Kathmandu tempo driver.
        </p>
        
        <div style={{ 
          marginTop: 'var(--spacing-xl)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          color: 'var(--nepal-crimson)',
          fontWeight: 800
        }} className="mono-text">
          EXPLORE_ARCHITECTURES <ArrowRight size={16} />
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
