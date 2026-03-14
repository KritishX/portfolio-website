import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ShieldAlert } from 'lucide-react';

const NetworkMonitor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: number[] = Array(40).fill(15);
    let pointsSecondary: number[] = Array(40).fill(15);
    let animationId: number;
    let frame = 0;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      points.shift();
      const last = points[points.length - 1];
      const next = Math.max(5, Math.min(25, last + (Math.random() - 0.5) * 6));
      points.push(next);

      pointsSecondary.shift();
      const nextSec = 15 + Math.sin(frame * 0.1) * 8 + (Math.random() * 2);
      pointsSecondary.push(nextSec);

      ctx.beginPath();
      ctx.fillStyle = 'rgba(0, 56, 147, 0.05)';
      ctx.moveTo(0, canvas.height);
      for (let i = 0; i < pointsSecondary.length; i++) {
        const x = (i / (pointsSecondary.length - 1)) * canvas.width;
        ctx.lineTo(x, pointsSecondary[i]);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(0, 56, 147, 0.12)';
      ctx.lineWidth = 1;
      for (let i = 0; i < pointsSecondary.length; i++) {
        const x = (i / (pointsSecondary.length - 1)) * canvas.width;
        ctx.lineTo(x, pointsSecondary[i]);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = 'var(--nepal-blue)';
      ctx.lineWidth = 1.2;
      ctx.lineJoin = 'round';
      for (let i = 0; i < points.length; i++) {
        const x = (i / (points.length - 1)) * canvas.width;
        ctx.lineTo(x, points[i]);
      }
      ctx.stroke();

      const headX = (points.length - 1) / (points.length - 1) * canvas.width;
      const headY = points[points.length - 1];
      ctx.beginPath();
      ctx.fillStyle = 'var(--nepal-crimson)';
      ctx.arc(headX, headY, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '7px', color: 'var(--text-secondary)', opacity: 0.5, fontWeight: 800 }} className="mono-text">
          UPLINK_SYNC
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--neon-green)', boxShadow: '0 0 5px var(--neon-green)' }}
          />
          <span style={{ fontSize: '8px', color: 'var(--text-main)', fontWeight: 800 }} className="mono-text">ACTIVE</span>
        </div>
      </div>
      <canvas 
        ref={canvasRef} 
        width={80} 
        height={25} 
        style={{ width: '80px', height: '25px', borderLeft: '1px solid var(--border-line)' }} 
      />
    </div>
  );
};

interface FooterProps {
  onContactClick: () => void;
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick, onTermsClick, onPrivacyClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer className="container" style={{ padding: 'var(--spacing-xxl) 0 var(--spacing-xl) 0', position: 'relative', zIndex: 50 }}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ 
          background: 'var(--glass-bg)', 
          borderRadius: '32px', 
          padding: isMobile ? '40px 24px' : 'var(--spacing-xxl) var(--spacing-xl)', 
          textAlign: 'center',
          border: '1px solid var(--border-line)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: 'var(--glass-shadow)'
        }}
      >
        <h2 className="stagger-in" style={{ 
          fontSize: 'clamp(20px, 4.5vw, 36px)', 
          fontWeight: 800, 
          marginBottom: 'var(--spacing-md)', 
          letterSpacing: '-0.04em', 
          color: 'var(--text-main)',
          lineHeight: 1.15
        }}>
          Let's compile the next big breakthrough.
        </h2>
        <p style={{ 
          color: 'var(--text-muted)', 
          marginBottom: 'var(--spacing-lg)', 
          fontSize: 'clamp(14px, 2vw, 16px)', 
          maxWidth: '550px', 
          margin: '0 auto var(--spacing-lg) auto', 
          lineHeight: 1.6 
        }}>
          Engineering AI ecosystems from Nepal that scale globally. Available for high-impact research and industrial deployments.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <button 
            onClick={onContactClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
              padding: '16px 48px', 
              borderRadius: '100px',
              textDecoration: 'none',
              color: isHovered ? 'transparent' : 'var(--text-main)',
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(0,0,0,0.03)',
              border: '1px solid var(--border-line)',
              transition: 'all 0.4s var(--ease-premium)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap'
            }}
          >
            <div className={isHovered ? "animate-flag-text" : ""} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={18} color={isHovered ? "var(--nepal-blue)" : "currentColor"} /> 
              GET_IN_TOUCH_ [REPLY_SPEED: &gt; GPU]
            </div>
          </button>

          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
            <button 
              onClick={onTermsClick}
              className="mono-text"
              style={{ 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                fontSize: '9px', 
                color: 'var(--text-main)',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                opacity: 0.8
              }}
            >
              <FileText size={12} /> TERMS
            </button>
            <button 
              onClick={onPrivacyClick}
              className="mono-text"
              style={{ 
                background: 'transparent', 
                border: 'none', 
                cursor: 'pointer', 
                fontSize: '9px', 
                color: 'var(--text-main)',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                opacity: 0.8
              }}
            >
              <ShieldAlert size={12} /> PRIVACY
            </button>
          </div>
        </div>
      </motion.div>
      
      {/* Refined Mobile Footer: Left & Right Balanced */}
      <div style={{ 
        marginTop: 'var(--spacing-xxl)', 
        display: 'flex', 
        flexDirection: isMobile ? 'row' : 'row', // Force row on mobile too
        justifyContent: 'space-between', 
        alignItems: 'flex-end', 
        color: 'var(--text-secondary)', 
        fontSize: '10px', 
        fontWeight: 700,
        width: '100%',
        opacity: 0.8,
        position: 'relative',
        zIndex: 100,
        textAlign: 'left'
      }} className="mono-text">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: isMobile ? '65%' : 'auto' }}>
          <div className="easter-egg-trigger" style={{ cursor: 'pointer' }}>
            <p style={{ fontWeight: 900, fontSize: isMobile ? '10px' : '12px', display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)', letterSpacing: '0.05em' }}>
              <span style={{ fontSize: isMobile ? '14px' : '18px', lineHeight: 1 }}>©</span> 2026 KRITISH DHITAL
            </p>
            <p style={{ fontSize: '7px', marginTop: '4px', opacity: 0.6, letterSpacing: '0.05em' }}>
              MADE IN NEPAL FOR EVERYONE
            </p>
          </div>
          <p style={{ opacity: 0.4, fontSize: '7px', letterSpacing: '0.08em' }}>
            PROUDLY BUILT IN NEPAL
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', scale: isMobile ? '0.85' : '1', transformOrigin: 'right bottom' }}>
          <NetworkMonitor />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
