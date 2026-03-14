import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import SystemInsights from './SystemInsights';
import profileImage from '../assets/profile.jpg';
import MagneticButton from './MagneticButton';

interface HeroProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick, onWorkClick }) => {
  const [computedText, setComputedText] = useState("");
  const fullText = "Kritish Dhital.";

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  useEffect(() => {
    let currentText = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        setComputedText(currentText);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="container">
      <div style={{ maxWidth: '1000px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        {/* Profile Photo Integration with 3D Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: 'relative', marginBottom: 'var(--spacing-xl)', perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div style={{ 
            position: 'relative',
            width: 'clamp(180px, 40vw, 240px)',
            height: 'clamp(180px, 40vw, 240px)',
            borderRadius: '50%',
            padding: '8px',
            background: 'linear-gradient(135deg, var(--nepal-blue) 0%, var(--nepal-crimson) 100%)',
            boxShadow: 'var(--shadow-3d)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            transition: 'box-shadow 0.6s var(--ease-premium)'
          }}
          whileHover={{ boxShadow: 'var(--shadow-hover)' }}
          >
            <img 
              src={profileImage} 
              alt="Kritish Dhital" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '50%',
                border: '4px solid #fff',
                transform: 'translateZ(20px)'
              }} 
            />
            {/* Status indicator */}
            <div style={{ 
              position: 'absolute', 
              bottom: '10px', 
              right: '10px',
              background: '#fff',
              padding: '6px 12px',
              borderRadius: '100px',
              border: '1px solid var(--border-line)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transform: 'translateZ(30px)'
            }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--neon-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--neon-green)' }}></span>
              <span className="mono-text" style={{ fontSize: '9px', fontWeight: 800 }}>ACTIVE</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mono-text"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            background: 'rgba(0,0,0,0.02)', 
            padding: '8px 16px', 
            borderRadius: '100px', 
            marginBottom: 'var(--spacing-lg)', 
            border: '1px solid var(--border-line)',
            fontWeight: 600,
            color: 'var(--text-main)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
            maxWidth: '100%'
          }}
        >
          <span style={{ width: '6px', height: '6px', background: 'var(--neon-green)', borderRadius: '50%', boxShadow: '0 0 10px var(--neon-green)', flexShrink: 0 }}></span>
          <span style={{ fontSize: 'clamp(7px, 2vw, 9px)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>SYSTEM_READY: FULL_STACK_AI_ML_DEVELOPER</span>
        </motion.div>

        <SystemInsights />
        
        <h1
          aria-label="Kritish Dhital"
          className="stagger-in"
          style={{ 
            fontSize: 'clamp(38px, 7vw, 84px)', 
            fontWeight: 800, 
            lineHeight: 1, 
            marginBottom: 'var(--spacing-lg)', 
            letterSpacing: '-0.04em',
            color: 'var(--text-main)',
            wordBreak: 'break-word',
            textAlign: 'center'
          }}
        >
          <span aria-hidden="true" style={{ background: 'linear-gradient(90deg, var(--text-main) 0%, var(--nepal-blue) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {computedText}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="stagger-in"
          style={{ 
            fontSize: 'clamp(15px, 1.8vw, 18px)', 
            color: 'var(--text-muted)', 
            marginBottom: 'var(--spacing-xl)', 
            maxWidth: '700px', 
            lineHeight: 1.5, 
            fontWeight: 400, 
            letterSpacing: '-0.01em',
            textAlign: 'center'
          }}
        >
          Redlining intelligence from the heart of the Himalayas. Whether I'm fine-tuning neural networks or hitting the apex on my 400cc machine, I build full-stack AI ecosystems with the clarity of a prime lens and the robustness of a well-tuned gearbox. Made in Nepal for the world—no lag, just pure logic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}
        >
          <MagneticButton>
            <button 
              onClick={onWorkClick}
              className="btn-primary" 
              style={{ 
                background: 'var(--nepal-blue)', 
                padding: '12px 40px', 
                fontSize: '13px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              LAUNCH_SYSTEM
            </button>
          </MagneticButton>

          <MagneticButton>
            <button 
              onClick={onContactClick}
              className="btn-secondary mono-text"
              style={{ 
                cursor: 'pointer', 
                borderColor: 'var(--nepal-crimson)', 
                color: 'var(--nepal-crimson)',
                borderWidth: '1.5px',
                padding: '12px 40px',
                fontSize: '10px',
                borderRadius: '100px',
                background: 'transparent',
                width: '100%'
              }}
            >
              &gt; GET_IN_TOUCH_ [REPLY_SPEED: &gt; GPU]
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
