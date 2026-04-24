import { motion } from 'framer-motion'
import {
  Brain, Code2, Database, Cloud, Eye, Terminal,
  Cpu, Layers, GitBranch, Boxes, Workflow, BarChart3
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

function MarqueeRow({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...skills, ...skills]

  return (
    <div className={`skills-marquee ${reverse ? 'skills-marquee--reverse' : ''}`}>
      {doubled.map((skill, i) => (
        <div key={`${skill.name}-${i}`} className="skill-pill">
          <skill.icon className="skill-pill-icon" />
          <span className="skill-pill-name">{skill.name}</span>
          <span className="skill-pill-category">{skill.category}</span>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills section" id="skills">
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

      <div className="skills-marquee-wrap">
        <MarqueeRow skills={skillsRow1} />
        <MarqueeRow skills={skillsRow2} reverse />
      </div>
    </section>
  )
}
