import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface TermsModalProps {
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ onClose }) => {
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
          maxWidth: '800px',
          maxHeight: '80vh',
          background: 'rgba(255, 255, 255, 1)',
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
        {/* Header */}
        <div style={{ 
          padding: '16px 24px', 
          borderBottom: '1px solid var(--border-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(255,255,255,0.2)'
        }}>
          <span className="mono-text" style={{ fontSize: '10px', fontWeight: 800, color: 'var(--nepal-blue)' }}>
            [SYSTEM_LEGAL_TERMS]
          </span>
          <button 
            onClick={onClose}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', opacity: 0.6 }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '32px', overflowY: 'auto', flex: 1, textAlign: 'left' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>System Access Protocols</h2>
          <p className="mono-text" style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '24px' }}>VERSION_STABLE_2026.03.14 // HIMALAYAN_NODE_LEGAL</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: 1.6 }}>
            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>1. Protocol Initiation</h3>
              <p>By establishing a connection to this platform (KritishX / kritishdhital.com), you acknowledge and agree to these operational protocols. If you do not consent to these system rules, please terminate your session immediately.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>2. Proprietary Assets & Source</h3>
              <p>All neural architectures, visual shaders, project logs, and "Made in Nepal" branding are the exclusive intellectual property of Kritish Dhital. Any unauthorized cloning, reverse-engineering, or redistribution of these assets is strictly prohibited.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>3. Operational Usage</h3>
              <p>This system is a high-fidelity demonstration of AI/ML capabilities. Users are expected to interact with this platform ethically. Any attempts to inject malicious code, disrupt the "Hyper Alive" background processes, or brute-force the system status will result in a permanent IP blacklist.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>4. External Uplinks</h3>
              <p>Our platform contains data-bridges to external nodes (GitHub, LinkedIn, etc.). Once you leave the KritishX core system, I am no longer responsible for the safety protocols of those third-party environments.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>5. Liability & Hardware</h3>
              <p>I build for robustness, but I am not liable for any digital lag, system crashes, or "altitude sickness" caused by interacting with this platform. All technical insights are provided for professional evaluation purposes.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>6. System Maintenance</h3>
              <p>I reserve the right to perform hot-fixes, neural re-training, or platform-wide reboots at any time to ensure the Himalayan Node remains at peak efficiency.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>7. Jurisdiction</h3>
              <p>These protocols are governed by the laws of Nepal. Any technical or legal disputes shall be resolved within the jurisdiction of the courts in Kathmandu.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>8. Technical Support</h3>
              <p>For inquiries regarding these protocols or to report a system bug, please contact the developer: <span style={{ color: 'var(--nepal-crimson)', fontWeight: 800 }}>kritishdhital@gmail.com</span></p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 20px', background: 'rgba(0,0,0,0.02)', borderTop: '1px solid var(--border-line)', textAlign: 'center' }}>
          <p className="mono-text" style={{ fontSize: 'clamp(7px, 2vw, 9px)', lineHeight: 1.4, opacity: 0.6 }}>BY_USING_THIS_PLATFORM_YOU_AGREE_TO_THE_STATED_PROTOCOLS</p>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default TermsModal;
