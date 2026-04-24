import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain, Code2, Database, Cloud, Eye, Terminal,
  Cpu, Layers, GitBranch, Boxes, Workflow, BarChart3,
  LayoutGrid, ArrowRightLeft
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Skill {
  name: string
  category: string
  icon: LucideIcon
}

const skillsRow1: Skill[] = [
  { name: 'Python', category: 'Language', icon: Terminal },
  { name: 'TypeScript', category: 'Language', icon: Code2 },
  { name: 'PyTorch', category: 'ML Framework', icon: Brain },
  { name: 'TensorFlow', category: 'ML Framework', icon: Cpu },
  { name: 'React', category: 'Frontend', icon: Layers },
  { name: 'Computer Vision', category: 'AI Domain', icon: Eye },
  { name: 'FastAPI', category: 'Backend', icon: Workflow },
  { name: 'PostgreSQL', category: 'Database', icon: Database },
  { name: 'Docker', category: 'DevOps', icon: Boxes },
  { name: 'Node.js', category: 'Runtime', icon: Terminal },
  { name: 'scikit-learn', category: 'ML', icon: BarChart3 },
  { name: 'GCP', category: 'Cloud', icon: Cloud },
]

const skillsRow2: Skill[] = [
  { name: 'NLP', category: 'AI Domain', icon: Brain },
  { name: 'Reinforcement Learning', category: 'AI Domain', icon: GitBranch },
  { name: 'Next.js', category: 'Framework', icon: Layers },
  { name: 'OpenCV', category: 'Vision', icon: Eye },
  { name: 'Nginx', category: 'Server', icon: Cloud },
  { name: 'Git', category: 'Version Control', icon: GitBranch },
  { name: 'Framer Motion', category: 'Animation', icon: Workflow },
  { name: 'REST APIs', category: 'Architecture', icon: Workflow },
  { name: 'NumPy', category: 'Scientific', icon: BarChart3 },
  { name: 'Pandas', category: 'Data', icon: Database },
  { name: 'Linux', category: 'OS', icon: Terminal },
  { name: 'Vite', category: 'Tooling', icon: Cpu },
]

const allSkills = [...skillsRow1, ...skillsRow2]

function MarqueeRow({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...skills, ...skills]

  return (
    <div className={`skills-marquee ${reverse ? 'skills-marquee--reverse' : ''}`}>
      {doubled.map((skill, i) => (
        <motion.div 
          key={`${skill.name}-${i}`} 
          className="skill-pill"
          layoutId={i < skills.length ? `skill-${skill.name}` : undefined}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 35, 
            mass: 0.8 
          }}
        >
          <skill.icon className="skill-pill-icon" />
          <span className="skill-pill-name">{skill.name}</span>
          <span className="skill-pill-category">{skill.category}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default function Skills() {
  const [isGrid, setIsGrid] = useState(false)

  // Grouped skills for the "Audit" view
  const categories = Array.from(new Set(allSkills.map(s => s.category)))

  return (
    <section className="skills section" id="skills">
      <div className="skills-container">
        <div className="skills-header-row">
          <motion.div
            className="skills-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Capabilities</span>
            <h2 className="skills-title">Tools of the craft</h2>
          </motion.div>

          <motion.button 
            className="skills-toggle"
            onClick={() => setIsGrid(!isGrid)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isGrid ? (
              <>
                <ArrowRightLeft size={14} />
                <span>Marquee</span>
              </>
            ) : (
              <>
                <LayoutGrid size={14} />
                <span>View All</span>
              </>
            )}
          </motion.button>
        </div>

        <div className="skills-view-wrap">
          <AnimatePresence mode="popLayout">
            {isGrid ? (
              <motion.div
                key="grid"
                className="skills-grid-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Technical Scanning Sweep during assembly */}
                <motion.div 
                  className="skills-scan-line"
                  initial={{ left: '-10%' }}
                  animate={{ left: '110%' }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />

                <div className="skills-categories">
                  {categories.map((cat, ci) => (
                    <div key={cat} className="skills-cat-group">
                      <motion.span 
                        className="skills-cat-label"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + ci * 0.1 }}
                      >
                        {cat}
                      </motion.span>
                      <div className="skills-cat-list">
                        {allSkills.filter(s => s.category === cat).map((skill) => (
                          <motion.div 
                            key={skill.name} 
                            className="skill-pill"
                            layoutId={`skill-${skill.name}`}
                            transition={{ 
                              type: "spring", 
                              stiffness: 400, 
                              damping: 35, 
                              mass: 0.8 
                            }}
                          >
                            <skill.icon className="skill-pill-icon" />
                            <span className="skill-pill-name">{skill.name}</span>
                            <span className="skill-pill-category">{skill.category}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="marquee"
                className="skills-marquee-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <MarqueeRow skills={skillsRow1} />
                <MarqueeRow skills={skillsRow2} reverse />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
