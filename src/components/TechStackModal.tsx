import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { techItems } from './TechStack';

interface TechStackModalProps {
  onClose: () => void;
}

const TechStackModal: React.FC<TechStackModalProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          width: '95%',
          maxWidth: '800px',
          maxHeight: '85vh',
          background: 'rgba(255, 255, 255, 1)',
          borderRadius: '32px',
          boxShadow: 'var(--glass-shadow)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          margin: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-flare"></div>

        {/* Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid var(--border-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(0,0,0,0.01)'
        }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-main)' }}>Full Tech Stack</h2>
            <p className="mono-text" style={{ fontSize: '9px', marginTop: '4px', opacity: 0.6 }}>SYSTEM_DIAGNOSTICS // FULL_INVENTORY</p>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'rgba(0,0,0,0.03)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-main)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content - Grid */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(140px, 1fr))', 
            gap: '12px' 
          }}>
            {techItems.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                style={{
                  padding: '16px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-line)',
                  background: 'rgba(0,0,0,0.01)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  color: tech.color,
                  background: 'rgba(255,255,255,1)',
                  padding: '10px',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}>
                  <tech.Icon size={24} />
                </div>
                <span className="mono-text" style={{ fontSize: '9px', fontWeight: 800 }}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 32px', background: 'rgba(0,0,0,0.02)', borderTop: '1px solid var(--border-line)', textAlign: 'center' }}>
          <p className="mono-text" style={{ fontSize: '8px', opacity: 0.5 }}>TOTAL_ENTITIES_DETECTED: {techItems.length} // ALL_SYSTEMS_OPTIMAL</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TechStackModal;
