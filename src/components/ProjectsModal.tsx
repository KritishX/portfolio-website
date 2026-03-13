import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Cpu, Database, Activity, MessageSquare, Zap, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
  architecture: string;
}

const projects: Project[] = [
  {
    title: "Autonomous Navigation",
    description: "End-to-end RL pipeline for vehicle control. Engineering algorithms that thrive in high-complexity environments with the precision of a high-altitude guide.",
    tag: "NAV_CORE",
    icon: <Cpu size={24} />,
    color: "var(--nepal-blue)",
    architecture: "Implementation of Proximal Policy Optimization (PPO). Optimized for high-entropy dynamic pathfinding in environments where the logic needs to be as sharp as a kukri."
  },
  {
    title: "Vision Anomaly Core",
    description: "Industrial defect detection system. Catching manufacturing glitches with more speed and focus than a hawk over the Kathmandu valley.",
    tag: "VISION_PROD",
    icon: <Brain size={24} />,
    color: "var(--nepal-crimson)",
    architecture: "ViT-DINO v2 feature extraction. Optimized for zero-shot accuracy in high-throughput industrial environments."
  },
  {
    title: "Structural Integrity",
    description: "Pixel-level segmentation for infrastructure. Engineered to ensure our modern systems stand as resilient and timeless as the stone temples of Bhaktapur.",
    tag: "HERITAGE_SAFE",
    icon: <Zap size={24} />,
    color: "var(--nepal-blue)",
    architecture: "Supervised U-Net with ResNet-50 backbones. Providing high-precision safety analysis for critical civil infrastructure."
  },
  {
    title: "AI Voice Ecosystem",
    description: "Low-latency conversational pipeline. Bridging language barriers across the Himalayas, from standard registers to local nuances, without dropping a single packet.",
    tag: "VOICE_REACH",
    icon: <MessageSquare size={24} />,
    color: "var(--nepal-crimson)",
    architecture: "Multi-model orchestration utilizing Whisper-v3 and Llama-3. Delivering human-centric AI communication for diverse industrial applications."
  },
  {
    title: "Cardiac Risk Predictor",
    description: "Predictive health modeling. Engineering AI that analyzes clinical data with more care and precision than a master tea-brewer crafting the perfect cup of chiya.",
    tag: "HEALTH_TECH",
    icon: <Activity size={24} />,
    color: "var(--nepal-blue)",
    architecture: "XGBoost classification model with SHAP layers. Designed to assist medical professionals with interpretable, data-driven diagnostic insights."
  },
  {
    title: "Enterprise MLOps",
    description: "Scalable model lifecycle automation. Ensuring deployments are as smooth and reliable as the prayer wheels at Swayambhunath.",
    tag: "ML_SYSTEMS",
    icon: <Database size={24} />,
    color: "var(--nepal-crimson)",
    architecture: "Robust CI/CD pipelines. Automating the entire model lifecycle from retraining to global containerized deployment."
  }
];

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="light-box-3d"
      style={{ minHeight: isExpanded ? 'auto' : '380px', width: '100%', height: '100%' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ color: project.color, marginBottom: 'var(--spacing-md)', opacity: 0.9, flexShrink: 0 }}>{project.icon}</div>
        <span className="mono-text" style={{ color: project.color, fontWeight: 800, marginBottom: 'var(--spacing-sm)' }}>
          [{project.tag}]
        </span>
        <h3 style={{ fontSize: '22px', marginBottom: 'var(--spacing-sm)', letterSpacing: '-0.03em', color: 'var(--text-main)', lineHeight: 1.2 }}>{project.title}</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '320px', margin: '0 auto' }}>
          {project.description}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            style={{ marginTop: 'var(--spacing-lg)', borderTop: '1px solid var(--border-line)', paddingTop: 'var(--spacing-lg)', width: '100%' }}
          >
            <h4 className="mono-text" style={{ color: project.color, marginBottom: '12px', fontWeight: 800, fontSize: '10px' }}>// ARCHITECTURAL_SCHEMA</h4>
            <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-main)', opacity: 0.9, textAlign: 'center' }}>{project.architecture}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ 
          marginTop: 'auto', 
          paddingTop: 'var(--spacing-lg)',
          fontSize: '11px', 
          fontWeight: 800, 
          color: project.color, 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? <>Conceal_Node <ChevronUp size={14} /></> : <>Explore_Architecture <ChevronDown size={14} /></>}
      </motion.div>
    </motion.div>
  );
};

const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              width: '100%',
              maxWidth: '1200px',
              maxHeight: '85vh',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '32px',
              boxShadow: 'var(--glass-shadow)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              transformStyle: 'preserve-3d',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Stationary Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#fff',
                border: '1px solid var(--border-line)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)',
                zIndex: 100,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: 'var(--shadow-3d)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = 'var(--shadow-3d)';
              }}
            >
              <X size={20} />
            </button>

            {/* Scrollable Content */}
            <div style={{ 
              padding: 'var(--spacing-xxl) var(--spacing-xl)',
              paddingTop: 'var(--spacing-huge)',
              overflowY: 'auto',
              flex: 1,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <div style={{ width: '100%', maxWidth: '1000px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: 'var(--spacing-xxl)', textAlign: 'center' }}>
                  <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 700 }}>
                    &gt; INNOVATION_INDEX_PORT: 80
                  </span>
                  <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--text-main)', marginTop: 'var(--spacing-sm)' }}>Engineering Forge</h2>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', 
                  gap: 'var(--spacing-lg)',
                  width: '100%',
                  alignItems: 'stretch',
                  justifyContent: 'center'
                }}>
                  {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectsModal;
