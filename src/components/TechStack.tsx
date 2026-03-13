import React from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, Layers, Brain, Eye, Cpu, Terminal, Zap, 
  Database, Cloud, GitBranch, BarChart3, Code2,
  Server, Github, Laptop, Share2, Hexagon, 
  Infinity as InfinityIcon, Monitor,
  Waves, Settings, BoxSelect, Rocket, Globe
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TechItem {
  name: string;
  Icon: LucideIcon;
  color: string;
}

// Fixed Scoping: Move alias before usage
const ChipAlias = Cpu;

const techItems: TechItem[] = [
  { name: "Hugging Face", Icon: Brain, color: "#FFD21E" },
  { name: "PyTorch", Icon: Flame, color: "#EE4C2C" },
  { name: "Transformers", Icon: Waves, color: "#FFD21E" },
  { name: "JavaScript", Icon: Code2, color: "#F7DF1E" },
  { name: "HTML/CSS", Icon: Globe, color: "#E34F26" },
  { name: "React 19", Icon: Code2, color: "#61DAFB" },
  { name: "TypeScript", Icon: Code2, color: "#3178C6" },
  { name: ".NET", Icon: Server, color: "#512BD4" },
  { name: "FastAPI", Icon: Zap, color: "#05998B" },
  { name: "Flask", Icon: Server, color: "#000000" },
  { name: "Django", Icon: BoxSelect, color: "#092E20" },
  { name: "Azure", Icon: Cloud, color: "#0078D4" },
  { name: "Pandas", Icon: BarChart3, color: "#150458" },
  { name: "Scikit-Learn", Icon: BarChart3, color: "#F7931E" },
  { name: "Git", Icon: GitBranch, color: "#F05032" },
  { name: "VS Code", Icon: Laptop, color: "#007ACC" },
  { name: "Antigravity", Icon: Rocket, color: "#FF00FF" },
  { name: "Windows", Icon: Monitor, color: "#0078D4" },
  { name: "macOS", Icon: Laptop, color: "#000000" },
  { name: "Linux", Icon: Terminal, color: "#FCC624" },
  { name: "Python", Icon: Terminal, color: "#3776AB" },
  { name: "TensorFlow", Icon: Layers, color: "#FF6F00" },
  { name: "CUDA", Icon: ChipAlias, color: "#76B900" },
  { name: "MPS", Icon: ActivityIconAlias, color: "#515154" }, // Fixed missing import usage
  { name: "Multiprocessing", Icon: Share2, color: "#3776AB" },
  { name: "Docker", Icon: Database, color: "#2496ED" },
  { name: "OpenCV", Icon: Eye, color: "#5C3EE8" },
  { name: "MLOps", Icon: InfinityIcon, color: "#000000" },
  { name: "NumPy", Icon: Settings, color: "#013243" },
  { name: "GitHub", Icon: Github, color: "#181717" },
  { name: "Xilinx", Icon: ChipAlias, color: "#ED1C24" },
  { name: "Proteus", Icon: ActivityIconAlias, color: "#00549E" },
  { name: "Jupyter", Icon: Laptop, color: "#F37626" },
  { name: "Anaconda", Icon: Hexagon, color: "#44A833" }
];

// Added missing activity icon alias
import { Activity as ActivityIconAlias } from 'lucide-react';

const TechStack: React.FC = () => {
  const duplicatedTechs = [...techItems, ...techItems];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', padding: 'var(--spacing-lg) 0' }}>
      <div 
        style={{ 
          width: '100%', 
          maxWidth: '1300px',
          overflow: 'hidden', 
          background: 'var(--glass-bg)', 
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          border: '1px solid var(--border-line)', 
          borderRadius: '100px', 
          padding: '8px 0', 
          position: 'relative',
          zIndex: 20,
          boxShadow: 'var(--glass-shadow)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <div style={{ position: 'relative', display: 'flex', width: '100%' }}>
          <motion.div 
            style={{ 
              display: 'flex', 
              whiteSpace: 'nowrap',
              gap: '40px',
              alignItems: 'center',
              padding: '0 40px'
            }}
            animate={{ x: [0, "-50%"] }}
            transition={{ 
              x: {
                duration: 60, 
                repeat: Infinity, 
                ease: "linear" 
              }
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div 
                key={tech.name + index} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center', 
                  gap: '8px',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  padding: '12px 16px',
                  borderRadius: '100px',
                  transition: 'all 0.4s var(--ease-premium)',
                  position: 'relative'
                }}
                whileHover={{ 
                  scale: 1.15,
                  background: 'rgba(255, 255, 255, 0.8)',
                  zIndex: 100,
                  boxShadow: `0 0 20px ${tech.color}22`
                }}
              >
                <motion.div 
                  animate={{ 
                    filter: [`drop-shadow(0 0 2px ${tech.color}00)`, `drop-shadow(0 0 8px ${tech.color}44)`, `drop-shadow(0 0 2px ${tech.color}00)`] 
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: tech.color,
                  }}
                >
                  <tech.Icon size={16} strokeWidth={2.5} />
                </motion.div>
                <span 
                  className="mono-text" 
                  style={{ 
                    fontSize: '8px', 
                    fontWeight: 800, 
                    letterSpacing: '0.05em',
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
    </div>
  );
};

export default TechStack;
