import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  onViewClick: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="light-box-3d float-animation"
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
      <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 700 }}>
        &gt; INNOVATION_INDEX
      </span>
      <h2 className={isHovered ? "animate-flag-text" : ""} style={{ 
        fontSize: 'clamp(20px, 3vw, 28px)', 
        marginTop: 'var(--spacing-xs)', 
        lineHeight: 1.2,
        color: isHovered ? 'transparent' : 'var(--text-main)' 
      }}>
        Engineering Forge
      </h2>
      <p style={{ 
        fontSize: '14px', 
        color: 'var(--text-muted)', 
        marginTop: 'var(--spacing-md)', 
        lineHeight: 1.6,
        letterSpacing: '0.01em'
      }}>
        Forging AI with more technical torque than a quick-shifter on an open highway. Building neural architectures that handle edge-cases with high-FPS focus and 0ms lag.
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
        BOOT_PROJECT_SCHEMAS <ArrowRight size={14} />
      </div>
    </motion.div>
  );
};
export default Projects;
