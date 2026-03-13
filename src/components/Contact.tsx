import React from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Github, Linkedin, MapPin, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import nepalMap from '../assets/nepal-map.png';

interface ContactProps {
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
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
          maxWidth: '500px',
          maxHeight: '85vh',
          background: 'var(--glass-bg)',
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
            [SYSTEM_UPLINK_ESTABLISHED]
          </span>
          <button 
            onClick={onClose}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)', opacity: 0.6 }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '4px' }}>Uplink Status: Active</h2>
            <p className="mono-text" style={{ fontSize: '9px', color: 'var(--nepal-crimson)', fontWeight: 700 }}>NEPAL_UNIT_01 // FULL STACK AI/ML</p>
          </div>

          {/* Integrated Map (No blinking) */}
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '140px', 
            background: 'rgba(0,0,0,0.03)', 
            borderRadius: '16px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            border: '1px solid var(--border-line)'
          }}>
            <img src={nepalMap} alt="Nepal Map" style={{ height: '80%', width: 'auto', objectFit: 'contain', opacity: 0.15, filter: 'grayscale(100%)' }} />
            <div style={{ position: 'absolute', bottom: '10px', left: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={12} color="var(--nepal-blue)" />
              <span className="mono-text" style={{ fontSize: '8px', fontWeight: 700 }}>BASE_STATION: KATHMANDU, NEPAL</span>
            </div>
          </div>

          {/* Action Channels (Humorous) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { label: "UPLINK_VIA_MAIL", value: "Husqprofound@gmail.com", href: "mailto:Husqprofound@gmail.com", icon: <Mail size={16} color="var(--nepal-blue)" /> },
              { label: "DECRYPT_SOURCE", value: "github.com/KritishX", href: "https://github.com/KritishX", icon: <Github size={16} /> },
              { label: "NODE_NETWORK", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/kritish-dhital-8a5787340/", icon: <Linkedin size={16} color="#0077b5" /> }
            ].map((item) => (
              <a 
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  padding: '12px 16px', 
                  background: '#fff', 
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-line)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--nepal-blue)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                  <div style={{ flexShrink: 0 }}>{item.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <p className="mono-text" style={{ fontSize: '7px', opacity: 0.6, marginBottom: '1px' }}>{item.label}</p>
                    <p style={{ fontWeight: 700, fontSize: '12px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={12} opacity={0.3} />
              </a>
            ))}
          </div>
        </div>

        {/* Status Footer (Nepal specific) */}
        <div style={{ 
          padding: '10px 24px', 
          background: 'rgba(0,0,0,0.02)', 
          borderTop: '1px solid var(--border-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={10} opacity={0.5} />
            <span className="mono-text" style={{ fontSize: '8px' }}>CHIYA_TIME: 09:00 — 18:00 (NPT)</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={10} opacity={0.5} />
            <span className="mono-text" style={{ fontSize: '8px' }}>DEPLOYMENT_WEEK: MON — FRI</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
