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
    description: "End-to-end RL pipeline for vehicle control. Models so sharp they could navigate a microbus through New Road traffic during Dashain without breaking a sweat.",
    tag: "DRIVE_NEPAL",
    icon: <Cpu size={24} />,
    color: "var(--nepal-blue)",
    architecture: "Implementation of Proximal Policy Optimization (PPO). Tested against the chaotic entropy of Kathmandu's intersections (mathematically speaking)."
  },
  {
    title: "Vision Anomaly Core",
    description: "Industrial defect detection system. Catching manufacturing glitches with more focus than a hawk over the Kathmandu valley.",
    tag: "EYE_OF_KTM",
    icon: <Brain size={24} />,
    color: "var(--nepal-crimson)",
    architecture: "ViT-DINO v2 feature extraction. Optimized to find the one 'kacho' momo in a batch of a thousand."
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
    description: "Low-latency conversational pipeline. Optimized to understand 120+ dialects, from 'Hajur' to 'Ho ra?' without missing a single frequency.",
    tag: "CHIYA_TALK",
    icon: <MessageSquare size={24} />,
    color: "var(--nepal-crimson)",
    architecture: "Multi-model orchestration utilizing Whisper-v3 and Llama-3. Low latency even when the Wi-Fi is as unstable as a tempo ride."
  },
  {
    title: "Cardiac Risk Predictor",
    description: "Predictive health modeling. Engineering AI that analyzes clinical data with more care than a master tea-brewer crafting the perfect cup of chiya.",
    tag: "HEALTH_TECH",
    icon: <Activity size={24} />,
    color: "var(--nepal-blue)",
    architecture: "XGBoost classification model. Trained to handle clinical data with more precision than a master momo wrapper."
  },
  {
    title: "Enterprise MLOps",
    description: "Scalable model lifecycle automation. Ensuring deployments are as smooth and reliable as the prayer wheels at Swayambhunath.",
    tag: "DEPLOY_HIMAL",
    icon: <Database size={24} />,
    color: "var(--nepal-crimson)",
    architecture: "Robust CI/CD pipelines. Automating the 'it works on my machine' excuse into non-existence across the seven provinces."
  }
];

interface ProjectsModalProps {
  onClose: () => void;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="light-box-3d"
      style={{ minHeight: isExpanded ? 'auto' : '320px', width: '100%', height: '100%' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <div style={{ color: project.color, marginBottom: '16px', opacity: 0.9, flexShrink: 0 }}>{project.icon}</div>
        <span className="mono-text" style={{ color: project.color, fontWeight: 800, marginBottom: '8px' }}>
          [{project.tag}]
        </span>
        <h3 style={{ fontSize: '20px', marginBottom: '8px', letterSpacing: '-0.03em', color: 'var(--text-main)', lineHeight: 1.2 }}>{project.title}</h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '280px', margin: '0 auto' }}>
          {project.description}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            style={{ marginTop: '16px', borderTop: '1px solid var(--border-line)', paddingTop: '16px', width: '100%' }}
          >
            <h4 className="mono-text" style={{ color: project.color, marginBottom: '8px', fontWeight: 800, fontSize: '9px' }}>// ARCHITECTURAL_SCHEMA</h4>
            <p style={{ fontSize: '12px', lineHeight: 1.5, color: 'var(--text-main)', opacity: 0.9, textAlign: 'center' }}>{project.architecture}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ 
          marginTop: 'auto', 
          paddingTop: '16px',
          fontSize: '10px', 
          fontWeight: 800, 
          color: project.color, 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase'
        }}
      >
        {isExpanded ? <>Conceal_Node <ChevronUp size={12} /></> : <>Explore_Architecture <ChevronDown size={12} /></>}
      </motion.div>
    </motion.div>
  );
};

const ProjectsModal: React.FC<ProjectsModalProps> = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          width: '95%',
          maxWidth: '1000px',
          maxHeight: '85vh',
          background: window.innerWidth < 768 ? 'rgba(255, 255, 255, 0.98)' : 'var(--glass-bg)', // Less transparent on mobile
          border: '1px solid var(--glass-border)',
          borderRadius: '24px',
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

        {/* Stationary Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#fff',
            border: '1px solid var(--border-line)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-main)',
            zIndex: 100,
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow-3d)'
          }}
        >
          <X size={18} />
        </button>

        {/* Scrollable Content */}
        <div style={{ 
          padding: '24px',
          paddingTop: '60px',
          overflowY: 'auto',
          flex: 1
        }}>
          <div style={{ marginBottom: '32px', textAlign: 'center' }}>
            <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 700, fontSize: '10px' }}>
              &gt; INNOVATION_INDEX_PORT: 80
            </span>
            <h2 style={{ fontSize: '32px', color: 'var(--text-main)', marginTop: '8px' }}>Engineering Forge</h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', 
            gap: '16px',
            width: '100%',
            alignItems: 'start',
            justifyContent: 'center'
          }}>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsModal;
