import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SystemStatus: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());
  const [uplinkStatus, setUplinkStatus] = useState('STABLE');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const timer = setInterval(() => {
      setTime(new Date());
      // Randomly flicker status for "realism"
      if (Math.random() > 0.98) {
        setUplinkStatus('SYNCING...');
        setTimeout(() => setUplinkStatus('STABLE'), 1000);
      }
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  const ktmTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kathmandu',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      style={{ 
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 5000,
        flexDirection: 'column',
        gap: '4px',
        pointerEvents: 'none',
        textAlign: 'right'
      }}
      className="mono-text system-status-widget"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}>
        <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: 800 }}>UPLINK_STATUS:</span>
        <span style={{ 
          fontSize: '9px', 
          color: uplinkStatus === 'STABLE' ? 'var(--neon-green)' : 'var(--orange)',
          fontWeight: 800,
          textShadow: uplinkStatus === 'STABLE' ? '0 0 8px var(--neon-green)' : 'none'
        }}>
          {uplinkStatus}
        </span>
        <motion.span 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ 
            width: '6px', 
            height: '6px', 
            borderRadius: '50%', 
            background: uplinkStatus === 'STABLE' ? 'var(--neon-green)' : 'var(--orange)' 
          }}
        />
      </div>

      <div style={{ fontSize: '8px', color: 'var(--text-muted)', opacity: 0.6 }}>
        LOCAL_NODE_ID: 27.7172° N, 85.3240° E
      </div>
      
      <div style={{ fontSize: '8px', color: 'var(--text-muted)', opacity: 0.6 }}>
        TIMESTAMP: {ktmTime} KTM
      </div>

      <div style={{ fontSize: '8px', color: 'var(--text-muted)', opacity: 0.6 }}>
        CURSOR_PTR: {mousePos.x}, {mousePos.y}
      </div>

      <motion.div 
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ fontSize: '7px', color: 'var(--nepal-blue)', fontWeight: 800, marginTop: '4px' }}
      >
        &gt; SYSTEM_HEARTBEAT_ACTIVE
      </motion.div>

      <div style={{ 
        width: '120px', 
        height: '1px', 
        background: 'linear-gradient(90deg, transparent, var(--border-line))',
        marginTop: '4px'
      }} />
    </motion.div>
  );
};

export default SystemStatus;
