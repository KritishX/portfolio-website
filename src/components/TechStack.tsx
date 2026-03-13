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
  { name: "PyTorch", Icon: Flame, color: "#EE4C2C" }, // Official PyTorch Orange
  { name: "TensorFlow", Icon: Layers, color: "#FF6F00" }, // Official TensorFlow Orange
  { name: "HuggingFace", Icon: Brain, color: "#FFD21E" }, // HuggingFace Yellow
  { name: "OpenCV", Icon: Eye, color: "#5C3EE8" }, // OpenCV Blue
  { name: "CUDA", Icon: Cpu, color: "#76B900" }, // NVIDIA Green
  { name: "Python", Icon: Terminal, color: "#3776AB" }, // Python Blue
  { name: "FastAPI", Icon: Zap, color: "#05998B" }, // FastAPI Teal
  { name: "React 19", Icon: Code2, color: "#61DAFB" }, // React Blue
  { name: "Three.js", Icon: Box, color: "#000000" }, // Three.js Black
  { name: "Framer Motion", Icon: Activity, color: "#BB4BFF" }, // Framer Purple
  { name: "Docker", Icon: Database, color: "#2496ED" }, // Docker Blue
  { name: "AWS", Icon: Cloud, color: "#FF9900" }, // AWS Orange
  { name: "Git", Icon: GitBranch, color: "#F05032" }, // Git Red
  { name: "Scikit-Learn", Icon: BarChart3, color: "#F7931E" } // Scikit Orange
];

const TechStack: React.FC = () => {
  const duplicatedTechs = [...techItems, ...techItems, ...techItems, ...techItems];

  return (
    <div 
      style={{ 
        width: '100%', 
        overflow: 'hidden', 
        background: 'var(--glass-bg)', 
        backdropFilter: 'var(--glass-blur)',
        WebkitBackdropFilter: 'var(--glass-blur)',
        borderTop: '1px solid var(--border-line)', 
        borderBottom: '1px solid var(--border-line)',
        padding: '40px 0',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 2, 
          pointerEvents: 'none',
          background: 'linear-gradient(90deg, var(--bg-primary) 0%, transparent 15%, transparent 85%, var(--bg-primary) 100%)' 
        }}></div>

        <motion.div 
          style={{ 
            display: 'flex', 
            whiteSpace: 'nowrap',
            gap: '64px',
            alignItems: 'center',
            padding: '0 40px'
          }}
          animate={{ x: [0, -2000] }}
          transition={{ 
            x: {
              duration: 40, 
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
                flexDirection: 'column',
                alignItems: 'center', 
                gap: '12px',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '20px 24px',
                borderRadius: '16px',
                transition: 'all 0.4s var(--ease-premium)',
                position: 'relative'
              }}
              whileHover={{ 
                scale: 1.4, 
                background: 'rgba(255, 255, 255, 0.9)',
                zIndex: 100,
                y: -20,
                boxShadow: '0 20px 40px rgba(0,0,0,0.06)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 20
              }}
            >
              <motion.div 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: tech.color, // Coloured by default
                  filter: `drop-shadow(0 2px 4px ${tech.color}33)`
                }}
                whileHover={{ 
                  filter: `drop-shadow(0 0 15px ${tech.color}66)`,
                  scale: 1.1
                }}
              >
                <tech.Icon size={24} strokeWidth={2.5} />
              </motion.div>
              <span 
                className="mono-text" 
                style={{ 
                  fontSize: '9px', 
                  fontWeight: 900, 
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-main)'
                }}
              >
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
