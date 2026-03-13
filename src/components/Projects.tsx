import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewClick: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewClick }) => {
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
      <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 700 }}>
        &gt; INNOVATION_INDEX
      </span>
      <h2 style={{ fontSize: 'clamp(20px, 3vw, 28px)', color: 'var(--text-main)', marginTop: 'var(--spacing-xs)' }}>
        Engineering Forge
      </h2>
      <p style={{ 
        fontSize: '14px', 
        color: 'var(--text-muted)', 
        marginTop: 'var(--spacing-sm)', 
        lineHeight: 1.4
      }}>
        Forging high-precision AI for heavy-duty industrial systems. Delivering production-ready neural architectures that are more robust than a Himalayan suspension bridge and handle edge-cases better than a Kathmandu tempo driver.
      </p>

      <div style={{ 
        marginTop: 'auto',
        paddingTop: 'var(--spacing-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--nepal-crimson)',
        fontWeight: 800,
        fontSize: '10px'
      }} className="mono-text">
        EXPLORE_ARCHITECTURES <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};
export default Projects;
