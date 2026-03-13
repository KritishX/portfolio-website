import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Github, Linkedin, MapPin, Clock, Calendar, ArrowUpRight } from 'lucide-react';
import nepalMap from '../assets/nepal-map.png';

interface ContactProps {
  isOpen: boolean;
  onClose: () => void;
}

const Contact: React.FC<ContactProps> = ({ isOpen, onClose }) => {
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
              maxHeight: '90vh',
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
              padding: 'var(--spacing-xl)',
              paddingTop: 'var(--spacing-huge)',
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}>
              <div style={{ width: '100%', maxWidth: '900px' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', 
                  gap: 'var(--spacing-xl)', 
                  position: 'relative', 
                  zIndex: 10,
                  width: '100%'
                }}>
                
                  {/* Left Column: Identity & Map */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                      <span className="mono-text" style={{ color: 'var(--nepal-blue)', fontWeight: 800 }}>// UPLINK_ESTABLISHED</span>
                      <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginTop: '16px', marginBottom: '8px' }}>Let's Connect</h2>
                      <p className="mono-text" style={{ color: 'var(--nepal-crimson)', fontWeight: 700, fontSize: '12px' }}>
                        FULL STACK AI/ML DEVELOPER
                      </p>
                    </div>

                    {/* Map Presentation with 3D Depth */}
                    <motion.div 
                      initial={{ opacity: 0, rotateX: 20, y: 20 }}
                      animate={{ opacity: 1, rotateX: 0, y: 0 }}
                      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                      style={{ 
                        position: 'relative', 
                        width: '100%', 
                        padding: '32px',
                        background: 'rgba(255,255,255,0.4)',
                        borderRadius: '24px',
                        border: '1px solid rgba(255,255,255,0.6)',
                        boxShadow: 'var(--shadow-3d)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <img 
                        src={nepalMap} 
                        alt="Map of Nepal" 
                        style={{ 
                          width: '100%', 
                          height: 'auto', 
                          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                          transform: 'translateZ(20px)'
                        }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        top: '52%', 
                        left: '52%', 
                        transform: 'translate(-50%, -50%)' 
                      }}>
                        <div style={{ position: 'relative' }}>
                          <span style={{ 
                            display: 'block', 
                            width: '12px', 
                            height: '12px', 
                            background: 'var(--nepal-crimson)', 
                            borderRadius: '50%',
                            boxShadow: '0 0 0 4px rgba(220,20,60,0.2)',
                            zIndex: 2
                          }}></span>
                          <motion.span 
                            animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{ 
                              position: 'absolute', 
                              top: 0, left: 0, 
                              width: '12px', height: '12px', 
                              background: 'var(--nepal-crimson)', 
                              borderRadius: '50%' 
                            }}
                          ></motion.span>
                        </div>
                      </div>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'center' }}>
                        <MapPin size={20} color="var(--nepal-blue)" />
                        <p style={{ fontWeight: 600, fontSize: 'clamp(13px, 3.5vw, 15px)', whiteSpace: 'nowrap' }}>Kathmandu, Nepal</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'center' }}>
                        <Clock size={20} color="var(--purple)" />
                        <p style={{ fontWeight: 600, fontSize: 'clamp(13px, 3.5vw, 15px)', whiteSpace: 'nowrap' }}>09:00 — 18:00 (NPT)</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', justifyContent: 'center' }}>
                        <Calendar size={20} color="var(--nepal-crimson)" />
                        <p style={{ fontWeight: 600, fontSize: 'clamp(13px, 3.5vw, 15px)', whiteSpace: 'nowrap' }}>Monday — Friday</p>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Channels */}
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px', width: '100%', minWidth: 0 }}>
                    <a 
                      href="mailto:Husqprofound@gmail.com" 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: 'clamp(16px, 4vw, 32px)', 
                        background: 'rgba(255,255,255,0.6)', 
                        border: '1px solid rgba(255,255,255,0.8)',
                        borderRadius: '24px',
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                        width: '100%',
                        minWidth: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 20px)', minWidth: 0, overflow: 'hidden' }}>
                        <div style={{ background: 'rgba(0,56,147,0.05)', padding: 'clamp(10px, 2.5vw, 16px)', borderRadius: '16px', flexShrink: 0 }}>
                          <Mail size={24} color="var(--nepal-blue)" />
                        </div>
                        <div style={{ minWidth: 0, overflow: 'hidden' }}>
                          <p className="mono-text" style={{ fontSize: '9px', color: 'var(--text-secondary)', marginBottom: '4px' }}>DIRECT_MAIL</p>
                          <p style={{ 
                            fontWeight: 700, 
                            fontSize: 'clamp(13px, 3.5vw, 18px)', 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                          }}>Husqprofound@gmail.com</p>
                        </div>
                      </div>
                      <ArrowUpRight size={18} opacity={0.3} style={{ flexShrink: 0 }} />
                    </a>

                    <a 
                      href="https://github.com/KritishX" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: 'clamp(16px, 4vw, 32px)', 
                        background: 'rgba(255,255,255,0.6)', 
                        border: '1px solid rgba(255,255,255,0.8)',
                        borderRadius: '24px',
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                        width: '100%',
                        minWidth: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 20px)', minWidth: 0, overflow: 'hidden' }}>
                        <div style={{ background: 'rgba(0,0,0,0.03)', padding: 'clamp(10px, 2.5vw, 16px)', borderRadius: '16px', flexShrink: 0 }}>
                          <Github size={24} />
                        </div>
                        <div style={{ minWidth: 0, overflow: 'hidden' }}>
                          <p className="mono-text" style={{ fontSize: '9px', color: 'var(--text-secondary)', marginBottom: '4px' }}>SOURCE_CODE</p>
                          <p style={{ 
                            fontWeight: 700, 
                            fontSize: 'clamp(13px, 3.5vw, 18px)', 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                          }}>github.com/KritishX</p>
                        </div>
                      </div>
                      <ArrowUpRight size={18} opacity={0.3} style={{ flexShrink: 0 }} />
                    </a>

                    <a 
                      href="https://www.linkedin.com/in/kritish-dhital-8a5787340/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: 'clamp(16px, 4vw, 32px)', 
                        background: 'rgba(255,255,255,0.6)', 
                        border: '1px solid rgba(255,255,255,0.8)',
                        borderRadius: '24px',
                        textDecoration: 'none',
                        color: 'var(--text-main)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                        width: '100%',
                        minWidth: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                        e.currentTarget.style.background = '#fff';
                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.6)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px, 3vw, 20px)', minWidth: 0, overflow: 'hidden' }}>
                        <div style={{ background: 'rgba(0,119,181,0.05)', padding: 'clamp(10px, 2.5vw, 16px)', borderRadius: '16px', flexShrink: 0 }}>
                          <Linkedin size={24} color="#0077b5" />
                        </div>
                        <div style={{ minWidth: 0, overflow: 'hidden' }}>
                          <p className="mono-text" style={{ fontSize: '9px', color: 'var(--text-secondary)', marginBottom: '4px' }}>PROFESSIONAL_NETWORK</p>
                          <p style={{ 
                            fontWeight: 700, 
                            fontSize: 'clamp(13px, 3.5vw, 18px)', 
                            whiteSpace: 'nowrap', 
                            overflow: 'hidden', 
                            textOverflow: 'ellipsis' 
                          }}>LinkedIn Profile</p>
                        </div>
                      </div>
                      <ArrowUpRight size={18} opacity={0.3} style={{ flexShrink: 0 }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div style={{ 
              padding: 'clamp(12px, 3vw, 16px) clamp(16px, 5vw, var(--spacing-xxl))', 
              borderTop: '1px solid rgba(0,0,0,0.05)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 10,
              background: 'rgba(255,255,255,0.2)',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <p className="mono-text" style={{ fontSize: 'clamp(7px, 2vw, 9px)', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                IT_WORKS_ON_MY_MACHINE_PORT: 8080
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--neon-green)', borderRadius: '50%', boxShadow: '0 0 10px var(--neon-green)' }}></span>
                <p className="mono-text" style={{ fontSize: 'clamp(7px, 2vw, 9px)', color: 'var(--text-main)', fontWeight: 800 }}>ACTIVE_STATUS</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
