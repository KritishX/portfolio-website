import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NepalFlag from './NepalFlag';

const BootSequence: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bootLogs = [
    "UPLINK_ESTABLISHED_THROUGH_NEPAL_TELECOM",
    "SYNCING_NEURAL_WEIGHTS_ [NODE_ID: RETICLEX]",
    "LOCATING_HIMALAYAN_GRID_27.7172N_85.3240E",
    "AUTHENTICATING_USER_PROFILE_ [KRITISH_DHITAL]",
    "CALIBRATING_SENSORS_ [LIDAR_v4.2]",
    "RELEASING_SYSTEM_LOCKS_ [OMEGA_PROTOCOL]",
    "OPTIMIZING_FULL_STACK_AI_PIPELINE...",
    "SYSTEM_STABLE. READY_FOR_DEPLOYMENT."
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[i]]);
        setProgress(((i + 1) / bootLogs.length) * 100);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 1000);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, y: -20, filter: 'blur(40px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-primary)', // Matching Light Theme
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Grid Texture to match site */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(var(--border-line) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5
          }} />

          <div style={{ maxWidth: '500px', width: '90%', position: 'relative', zIndex: 10 }}>
            {/* Top Identity Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <NepalFlag size={48} />
              </motion.div>
              <div style={{ height: '40px', width: '1px', background: 'var(--border-line)' }} />
              <div className="mono-text" style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '14px', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '0.1em' }}>RETICLEX_CORE</div>
                <div style={{ fontSize: '8px', color: 'var(--nepal-blue)', fontWeight: 800 }}>HIMALAYAN_NODE_v4.2.0</div>
              </div>
            </div>

            {/* Neon Progress Bars - Using Brand Palette */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ height: '2px', width: '100%', background: 'var(--border-line)', position: 'relative', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(0, progress - (i * 15))}%` }}
                    style={{
                      height: '100%',
                      background: i === 0 ? 'var(--nepal-blue)' : i === 1 ? 'var(--nepal-crimson)' : 'var(--neon-green)',
                      boxShadow: `0 0 8px ${i === 0 ? 'var(--nepal-blue)' : i === 1 ? 'var(--nepal-crimson)' : 'var(--neon-green) opacity(0.3)'}`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Log Sequence */}
            <div style={{ height: '140px', overflow: 'hidden', display: 'flex', flexDirection: 'column-reverse' }}>
              <div className="mono-text">
                {[...logs].reverse().map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      fontSize: '9px',
                      marginBottom: '8px',
                      color: index === 0 ? 'var(--text-main)' : 'var(--text-muted)',
                      fontWeight: 700,
                      display: 'flex',
                      gap: '12px',
                      opacity: index === 0 ? 1 : 0.4
                    }}
                  >
                    <span style={{ color: index === 0 ? 'var(--neon-green)' : 'var(--text-secondary)' }}>
                      [{ (logs.length - 1 - index).toString().padStart(2, '0') }]
                    </span>
                    <span style={{ letterSpacing: '0.05em' }}>{log}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* System Specs Footer */}
            <div className="mono-text" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--border-line)', display: 'flex', justifyContent: 'space-between', fontSize: '7px', color: 'var(--text-secondary)' }}>
              <span>LATENCY: 14MS // BUFFER: OPTIMAL</span>
              <span>VER: 2026.03.14 // KTM_STABLE</span>
            </div>
          </div>

          {/* Dynamic Corner Accents */}
          <div style={{ position: 'absolute', top: '40px', right: '40px', width: '100px', height: '1px', background: 'linear-gradient(90deg, transparent, var(--border-line))' }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '1px', height: '100px', background: 'linear-gradient(0deg, var(--border-line), transparent)' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
