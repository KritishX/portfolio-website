import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SystemInsights from './SystemInsights';
import profileImage from '../assets/profile.jpg';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [computedText, setComputedText] = useState("");
  const fullText = "Kritish Dhital.";
  
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
        
        {/* Profile Photo Integration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ position: 'relative', marginBottom: 'var(--spacing-xl)' }}
        >
          <div style={{ 
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
            transition: 'all 0.6s var(--ease-premium)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
            e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.boxShadow = 'var(--shadow-3d)';
          }}
          >
            <img 
              src={profileImage} 
              alt="Kritish Dhital" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '50%',
                border: '4px solid #fff'
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
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <span style={{ width: '8px', height: '8px', background: 'var(--neon-green)', borderRadius: '50%', boxShadow: '0 0 8px var(--neon-green)' }}></span>
              <span className="mono-text" style={{ fontSize: '9px', fontWeight: 800 }}>ACTIVE</span>
            </div>
          </div>
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
          <span style={{ width: '5px', height: '6px', background: 'var(--nepal-crimson)', borderRadius: '50%', boxShadow: '0 0 10px var(--nepal-crimson)', flexShrink: 0 }}></span>
          <span style={{ fontSize: 'clamp(7px, 2vw, 9px)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>SYSTEM_READY: FULL_STACK_AI_ML_DEVELOPER</span>
        </motion.div>

        <SystemInsights />
        
        <h1
          aria-label="Kritish Dhital"
          style={{ 
            fontSize: 'clamp(42px, 8vw, 96px)', 
            fontWeight: 800, 
            lineHeight: 0.95, 
            marginBottom: 'var(--spacing-xl)', 
            letterSpacing: '-0.06em',
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
          style={{ 
            fontSize: 'clamp(16px, 2vw, 22px)', 
            color: 'var(--text-muted)', 
            marginBottom: 'var(--spacing-xxl)', 
            maxWidth: '750px', 
            lineHeight: 1.5, 
            fontWeight: 400, 
            letterSpacing: '-0.01em',
            textAlign: 'center'
          }}
        >
          Scaling neural architectures with the ambition of the Himalayas and deploying full-stack ecosystems with the warmth and focus of a traditional chiya session. Engineering production-ready AI solutions from Nepal that bridge the gap between deep research and global industrial impact.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#projects" className="btn-primary" style={{ background: 'var(--nepal-blue)', padding: 'clamp(14px, 3vw, 20px) clamp(32px, 6vw, 56px)' }}>
            Initialize_Work
          </a>
          <button 
            onClick={onContactClick}
            className="btn-secondary mono-text"
            style={{ 
              cursor: 'pointer', 
              borderColor: 'var(--nepal-crimson)', 
              color: 'var(--nepal-crimson)',
              borderWidth: '2px',
              padding: 'clamp(14px, 3vw, 20px) clamp(32px, 6vw, 56px)'
            }}
          >
            &gt; collaborator_uplink
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
