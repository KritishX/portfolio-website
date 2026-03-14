import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import nepalMap from '../assets/nepal-map.png';

const MandalaBackground: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  if (isMobile) return null; // Remove on mobile as requested

  const rotationDuration = 180;
  
  return (
    <div style={{ 
      position: 'absolute', 
      top: 0, 
      right: 0, 
      width: '80vh', // Reduced from 100vh
      height: '80vh',
      zIndex: 1, 
      pointerEvents: 'none',
      overflow: 'visible'
    }}>
      {/* 1. THICK OUTER CIRCLE FRAME (Fixed for Laptop) */}
      <motion.svg
        viewBox="0 0 100 100"
        animate={{ rotate: -360 }}
        transition={{ duration: rotationDuration * 2, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '-25%', 
          right: '-25%',
          opacity: 0.15
        }}
      >
        <circle cx="50" cy="50" r="49" fill="none" stroke="var(--nepal-blue)" strokeWidth="1.2" strokeDasharray="10,5" />
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--nepal-crimson)" strokeWidth="0.8" opacity="0.4" />
      </motion.svg>

      {/* 2. MAIN CORE MANDALA */}
      <motion.svg
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: rotationDuration, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: '70vh', // Reduced from 90vh
          height: '70vh',
          top: '-20%',
          right: '-20%',
          opacity: 0.15,
        }}
      >
        <defs>
          <filter id="ultra-glow">
            <feGaussianBlur stdDeviation="0.15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Level 1: Outer Petals */}
        {[...Array(32)].map((_, i) => (
          <g key={`p1-${i}`} transform={`rotate(${i * 11.25} 50 50)`}>
            <path d="M50 2 C 55 15, 65 15, 70 2" fill="none" stroke="var(--nepal-blue)" strokeWidth="0.1" />
            <path d="M50 5 C 53 12, 57 12, 60 5" fill="none" stroke="var(--nepal-crimson)" strokeWidth="0.05" opacity="0.5" />
          </g>
        ))}

        {/* Level 2: Dashed Web */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="var(--nepal-blue)" strokeWidth="0.05" strokeDasharray="1,1" />
        <circle cx="50" cy="50" r="38" fill="none" stroke="var(--nepal-crimson)" strokeWidth="0.05" strokeDasharray="0.5,0.5" />

        {/* Level 3: Mid Petals */}
        {[...Array(16)].map((_, i) => (
          <g key={`p2-${i}`} transform={`rotate(${i * 22.5 + 5} 50 50)`}>
            <path d="M50 15 C 60 35, 75 35, 85 15" fill="none" stroke="var(--nepal-crimson)" strokeWidth="0.15" />
            <path d="M50 20 L 55 25 L 50 30 L 45 25 Z" fill="none" stroke="var(--nepal-blue)" strokeWidth="0.1" />
          </g>
        ))}

        {/* Level 4: Geometric Grid */}
        <motion.g animate={{ rotate: -720 }} transition={{ duration: rotationDuration * 2, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: '50% 50%' }}>
          {[...Array(12)].map((_, i) => (
            <rect
              key={`sq-${i}`}
              x="30" y="30" width="40" height="40"
              fill="none"
              stroke="var(--nepal-blue)"
              strokeWidth="0.03"
              transform={`rotate(${i * 30} 50 50)`}
              opacity="0.3"
            />
          ))}
        </motion.g>

        {/* Level 5: Inner Lotus */}
        {[...Array(12)].map((_, i) => (
          <g key={`p3-${i}`} transform={`rotate(${i * 30} 50 50)`}>
            <path d="M50 30 Q 55 45 60 30" fill="none" stroke="var(--nepal-crimson)" strokeWidth="0.2" filter="url(#ultra-glow)" />
            <circle cx="50" cy="35" r="0.4" fill="var(--nepal-blue)" />
          </g>
        ))}

        {/* Level 6: Core detail */}
        <circle cx="50" cy="50" r="12" fill="none" stroke="var(--nepal-crimson)" strokeWidth="0.1" strokeDasharray="0.2,0.2" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="var(--nepal-blue)" strokeWidth="0.2" />
        
        {/* Core Pulse */}
        <motion.circle 
          cx="50" cy="50" r="3.5" 
          fill="var(--nepal-crimson)" 
          animate={{ 
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
};

const EverestSilhouette: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: isMobile ? '35vh' : '65vh', zIndex: 2, pointerEvents: 'none' }}>
    <motion.svg
      viewBox="0 0 1000 200"
      preserveAspectRatio="none"
      style={{ width: '100%', height: '100%', opacity: isMobile ? 0.2 : 0.4 }}
    >
      <motion.path
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        d="M0 200 L0 180 L100 140 L200 185 L350 80 L500 160 L600 20 L750 140 L850 90 L1000 170 L1000 200 Z"
        fill="var(--border-line)"
      />
      <motion.path
        initial={{ y: 180, opacity: 0 }}
        animate={{ y: 0, opacity: 0.25 }}
        transition={{ duration: 3, delay: 0.3, ease: "easeOut" }}
        d="M0 200 L200 150 L450 100 L600 0 L750 110 L900 160 L1000 200 Z"
        fill="var(--text-secondary)"
      />
    </motion.svg>
  </div>
);

const BootSequence: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    // Already initialized, but keep listener for orientation changes
    window.addEventListener('resize', checkMobile);

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[i]]);
        setProgress(((i + 1) / bootLogs.length) * 100);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsVisible(false), 1500);
      }
    }, 120);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearInterval(interval);
    };
  }, []);

  const bootLogs = [
    "NEURAL_UPLINK_ESTABLISHED",
    "LOCATING_HIMALAYAN_NODE_27.7172N_85.3240E",
    "AUTHENTICATING_USER_PROFILE_ [KRITISH_DHITAL]",
    "SYNCING_AI_MODELS_ [VISION_v4.2 // NLP_v2.1]",
    "OPTIMIZING_CUDA_WEIGHTS...",
    "CALIBRATING_HAPTIC_INTERFACE...",
    "RELEASING_SYSTEM_LOCKS_ [OMEGA_PROTOCOL]",
    "READY_FOR_DEPLOYMENT."
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0, filter: 'blur(40px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-primary)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            color: 'var(--text-main)'
          }}
        >
          {!isMobile && <MandalaBackground isMobile={isMobile} />}
          <EverestSilhouette isMobile={isMobile} />

          <div style={{ maxWidth: '500px', width: '90%', position: 'relative', zIndex: 10 }}>
            {/* Identity Group */}
            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '16px' : '32px', marginBottom: isMobile ? '40px' : '64px' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src={nepalMap} 
                  alt="Nepal Map" 
                  style={{ width: isMobile ? '60px' : '90px', height: 'auto', opacity: 1 }} 
                />
              </motion.div>
              <div style={{ height: isMobile ? '40px' : '60px', width: '1px', background: 'var(--border-line)' }} />
              <div className="mono-text">
                <div style={{ fontSize: isMobile ? '14px' : '18px', fontWeight: 900, color: 'var(--text-main)', letterSpacing: '0.12em' }}>KRITISHX_OS</div>
                <div style={{ fontSize: isMobile ? '8px' : '9px', color: 'var(--nepal-blue)', fontWeight: 800, marginTop: '2px' }}>HIMALAYAN_CORE_v4.2</div>
              </div>
            </div>

            {/* Neon Progress Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '48px' }}>
              {[
                { label: "CORE_SYSTEM", color: "var(--nepal-blue)", p: progress },
                { label: "NEURAL_SYNC", color: "var(--nepal-crimson)", p: Math.max(0, progress - 10) },
                { label: "MODEL_LOAD", color: "var(--neon-green)", p: Math.max(0, progress - 20) }
              ].map((bar, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', marginBottom: '6px', color: 'var(--text-secondary)' }} className="mono-text">
                    <span>{bar.label}</span>
                    <span>{Math.round(bar.p)}%</span>
                  </div>
                  <div style={{ height: '2px', width: '100%', background: 'var(--border-line)', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                      animate={{ width: `${bar.p}%` }}
                      style={{
                        height: '100%',
                        background: bar.color,
                        boxShadow: `0 0 12px ${bar.color}`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Log Sequence */}
            <div style={{ height: '140px', overflow: 'hidden', display: 'flex', flexDirection: 'column-reverse' }}>
              <div className="mono-text">
                {[...logs].reverse().map((log, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{
                      fontSize: '9px',
                      marginBottom: '8px',
                      color: index === 0 ? 'var(--text-main)' : 'var(--text-muted)',
                      fontWeight: 700,
                      display: 'flex',
                      gap: '12px',
                      opacity: index === 0 ? 1 : 0.3
                    }}
                  >
                    <span style={{ color: index === 0 ? 'var(--neon-green)' : 'var(--text-secondary)', width: '20px' }}>
                      [{ (logs.length - 1 - index).toString().padStart(2, '0') }]
                    </span>
                    <span>{log}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mono-text" style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--border-line)', display: 'flex', justifyContent: 'space-between', fontSize: '7px', color: 'var(--text-secondary)', opacity: 0.4 }}>
              <span>PACKET_LOSS: 0.00% // STATUS: OPTIMAL</span>
              <span>BUILD: 2026.03.14 // KTM_NODE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BootSequence;
