import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Code, Terminal, Globe, Cpu, Smartphone } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const services: Service[] = [
  {
    title: "AI & Machine Learning",
    description: "Training neural networks to be smarter than us (hopefully). Models so sharp they can navigate Kathmandu's traffic without a GPS.",
    icon: <Brain size={32} />,
    tags: ["PyTorch", "TensorFlow", "Computer Vision", "NLP"]
  },
  {
    title: "Full-Stack Development",
    description: "Building scalable apps that stay up longer than a chiya-fueled coding session. Frontends that sparkle, backends that behave.",
    icon: <Globe size={32} />,
    tags: ["React", "TypeScript", "Node.js", "FastAPI"]
  },
  {
    title: "MLOps & Infrastructure",
    description: "Automating the boring stuff so you can focus on your momos. Because manual deployments are as slow as a load-shedding schedule.",
    icon: <Cpu size={32} />,
    tags: ["Docker", "Kubernetes", "AWS", "CI/CD"]
  },
  {
    title: "Advanced Data Science",
    description: "Torturing data until it confesses. Turning 'I think' into 'I know' with statistical rigor and more precision than a master momo wrapper.",
    icon: <Terminal size={32} />,
    tags: ["Pandas", "Scikit-Learn", "Feature Engineering"]
  },
  {
    title: "API Design & Integration",
    description: "Building APIs that developers actually enjoy using. Seamless communication for machines (and humans) across the Himalayas.",
    icon: <Code size={32} />,
    tags: ["Microservices", "WebSockets", "FastAPI"]
  },
  {
    title: "AI Integration",
    description: "Sprinkling a little AI magic on boring legacy software. Turning 'dumb' apps into geniuses faster than a local tea shop serves chiya.",
    icon: <Smartphone size={32} />,
    tags: ["LLM Orchestration", "Prompt Engineering"]
  }
];

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="light-box-3d"
      style={{ 
        padding: 'var(--spacing-xl)',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
        minHeight: 'auto',
        justifyContent: 'flex-start'
      }}
    >
      <div style={{ 
        color: 'var(--nepal-blue)', 
        background: 'rgba(0,56,147,0.05)', 
        padding: '20px', 
        borderRadius: '20px',
        marginBottom: '24px',
        flexShrink: 0
      }}>
        {service.icon}
      </div>
      <h3 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--text-main)', lineHeight: 1.2 }}>{service.title}</h3>
      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
        {service.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginTop: 'auto' }}>
        {service.tags.map(tag => (
          <span key={tag} className="mono-text" style={{ 
            fontSize: '9px', 
            background: 'rgba(0,0,0,0.03)', 
            padding: '4px 10px', 
            borderRadius: '4px',
            color: 'var(--text-secondary)'
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ServicesModal: React.FC<ServicesModalProps> = ({ isOpen, onClose }) => {
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
              maxWidth: '1100px',
              maxHeight: '85vh',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '32px',
              boxShadow: 'var(--glass-shadow)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              transformStyle: 'preserve-3d',
              margin: '20px',
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

            {/* Scrollable Content Container */}
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
              <div style={{ width: '100%', maxWidth: '1000px' }}>
                <div style={{ marginBottom: 'var(--spacing-xxl)', textAlign: 'center' }}>
                  <span className="mono-text" style={{ color: 'var(--nepal-crimson)', fontWeight: 700 }}>
                    // SYSTEM_CAPABILITIES_PORT: 443
                  </span>
                  <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', color: 'var(--text-main)', marginTop: 'var(--spacing-sm)' }}>Expert AI Services</h2>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', 
                  gap: 'var(--spacing-lg)',
                  width: '100%',
                  alignItems: 'stretch',
                  justifyContent: 'center'
                }}>
                  {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
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

export default ServicesModal;
