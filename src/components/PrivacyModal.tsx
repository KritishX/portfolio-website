import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ onClose }) => {
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
            [SYSTEM_PRIVACY_PROTOCOL]
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
          <h2 style={{ fontSize: '28px', marginBottom: '16px' }}>Data Integrity Protocol</h2>
          <p className="mono-text" style={{ fontSize: '10px', color: 'var(--text-secondary)', marginBottom: '24px' }}>VERSION_ENCRYPTED_2026.03.14 // HIMALAYAN_NODE_PRIVACY</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '14px', lineHeight: 1.6 }}>
            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>1. Data Acquisition Strategy</h3>
              <p>I operate on a "Minimum Packet" philosophy. I only collect data that is critical for establishing professional uplinks or optimizing the Himalayan Node's performance. This includes voluntarily submitted contact data and non-identifiable technical telemetry.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>2. Neural Logging (Cookies)</h3>
              <p>This platform uses standard cookies to maintain session stability and analyze traffic patterns. These are strictly for technical diagnostics and improving the "Hyper Alive" UI experience. You can terminate these logs via your browser settings.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>3. Zero-Leak Policy</h3>
              <p>I do not sell, trade, or leak your personal data packets to third-party commercial entities. Your information is treated as high-security intellectual property, accessible only by the KritishX core system.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>4. Security Safeguards</h3>
              <p>All data transmissions are protected by industry-standard encryption protocols. While no system is immune to high-level breaches, I implement rigorous neural safeguards to prevent unauthorized access to the node's database.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>5. External Node Privacy</h3>
              <p>Links to GitHub, LinkedIn, or other professional nodes operate under their own privacy protocols. Once you bridge to these external platforms, the KritishX privacy shield is no longer active.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>6. User Rights & Access</h3>
              <p>You maintain full ownership of your data packets. You have the right to request a complete data wipe or a summary of any information stored within the KritishX node. To initiate this protocol, contact the developer directly.</p>
            </section>

            <section>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-main)' }}>7. Contact Node</h3>
              <p>For questions regarding your digital footprint on this platform, please reach out via: <span style={{ color: 'var(--nepal-crimson)', fontWeight: 800 }}>kritishdhital@gmail.com</span></p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '16px 20px', background: 'rgba(0,0,0,0.02)', borderTop: '1px solid var(--border-line)', textAlign: 'center' }}>
          <p className="mono-text" style={{ fontSize: 'clamp(7px, 2vw, 9px)', lineHeight: 1.4, opacity: 0.6 }}>PROTECTING_YOUR_DIGITAL_IDENTITY_IS_MY_STANDARD</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyModal;
