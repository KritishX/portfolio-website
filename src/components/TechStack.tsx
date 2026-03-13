import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, Layers, Brain, Eye, Cpu, Terminal, Zap, 
  Box, Activity, Database, Cloud, GitBranch, BarChart3, Code2
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TechItem {
  name: string;
  Icon: LucideIcon;
  color: string;
}

const techItems: TechItem[] = [
  { name: "PyTorch", Icon: Flame, color: "#EE4C2C" },
  { name: "TensorFlow", Icon: Layers, color: "#FF6F00" },
  { name: "HuggingFace", Icon: Brain, color: "#FFD21E" },
  { name: "OpenCV", Icon: Eye, color: "#5C3EE8" },
  { name: "CUDA", Icon: Cpu, color: "#76B900" },
  { name: "Python", Icon: Terminal, color: "#3776AB" },
  { name: "FastAPI", Icon: Zap, color: "#05998B" },
  { name: "React 19", Icon: Code2, color: "#61DAFB" },
  { name: "Three.js", Icon: Box, color: "#000000" },
  { name: "Framer Motion", Icon: Activity, color: "#BB4BFF" },
  { name: "Docker", Icon: Database, color: "#2496ED" },
  { name: "AWS", Icon: Cloud, color: "#FF9900" },
  { name: "Git", Icon: GitBranch, color: "#F05032" },
  { name: "Scikit-Learn", Icon: BarChart3, color: "#F7931E" }
];

const TechStack: React.FC = () => {
  const duplicatedTechs = [...techItems, ...techItems, ...techItems, ...techItems];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: 'var(--spacing-lg) 0' }}>
      <div 
        style={{ 
          width: '90%', 
          maxWidth: '1000px',
          overflow: 'hidden', 
          background: 'var(--glass-bg)', 
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--border-line)', 
          borderRadius: '100px', // Pill shaped marquee
          padding: '12px 0', 
          position: 'relative',
          zIndex: 20,
          boxShadow: 'var(--glass-shadow)'
        }}
      >
        <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: 2, 
            pointerEvents: 'none',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.4) 100%)',
            borderRadius: '100px'
          }}></div>

          <motion.div 
            style={{ 
              display: 'flex', 
              whiteSpace: 'nowrap',
              gap: '40px',
              alignItems: 'center',
              padding: '0 40px'
            }}
            animate={{ x: [0, -2000] }}
            transition={{ 
              x: {
                duration: 50, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div 
                key={index} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  padding: '6px 12px',
                  borderRadius: '100px',
                  transition: 'all 0.4s var(--ease-premium)',
                  position: 'relative'
                }}
                whileHover={{ 
                  scale: 1.15,
                  background: 'rgba(255, 255, 255, 0.8)',
                  zIndex: 100
                }}
              >
                <tech.Icon size={16} color={tech.color} strokeWidth={2.5} />
                <span 
                  className="mono-text" 
                  style={{ 
                    fontSize: '8px', 
                    fontWeight: 800, 
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}
                >
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
