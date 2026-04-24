import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  id: string
  number: string
  name: string
  tags: string[]
  description: string
  stats: { label: string; value: string }[]
  tech: string[]
}

const projects: Project[] = [
  {
    id: 'email-automator',
    number: '01',
    name: 'Email Automator: Advanced Security & Emotion AI',
    tags: ['NLP', 'Cybersecurity', 'Full Stack ML'],
    description:
      'A robust 3-tier AI email processing system featuring LightGBM for spam, fine-tuned DistilBERT for deep phishing detection, and an XGBoost+CV pipeline for malicious QR codes. Includes asynchronous queuing via RabbitMQ and emotional tone analysis.',
    stats: [
      { label: 'Phishing Acc', value: '99.9%' },
      { label: 'Spam Acc', value: '98.7%' },
      { label: 'AI Layers', value: '3-Tier' },
    ],
    tech: ['DistilBERT', 'XGBoost', 'LightGBM', 'RabbitMQ', 'PyTorch'],
  },
  {
    id: 'self-parking',
    number: '02',
    name: 'Self-Parking Car — RL Agent',
    tags: ['Reinforcement Learning', 'Simulation', 'Q-Learning'],
    description:
      'An advanced autonomous parking simulator powered by Tabular Q-Learning. Features custom Ackermann steering physics, an 8-ray LIDAR system, and an automated curriculum learning loop with adaptive epsilon decay.',
    stats: [
      { label: 'Success Rate', value: '93%+' },
      { label: 'State Space', value: '18.8K' },
      { label: 'Physics', value: 'Ackermann' },
    ],
    tech: ['Python', 'NumPy', 'Pygame', 'Q-Learning', 'RL'],
  },
  {
    id: 'anomaly-detection',
    number: '03',
    name: 'Unsupervised Anomaly Detection',
    tags: ['Computer Vision', 'ViT-DINO', 'Industrial AI'],
    description:
      'A high-performance defect detection pipeline using self-supervised Vision Transformers (DINO) on the MVTec dataset. Utilizes MiniBatchKMeans for memory bank coresets and generates Explainable AI (XAI) heatmaps for micro-crack localization.',
    stats: [
      { label: 'AUROC', value: '91.1%' },
      { label: 'Backbone', value: 'ViT-Small' },
      { label: 'Transfer', value: 'Zero-Shot' },
    ],
    tech: ['PyTorch', 'Vision Transformer', 'scikit-learn', 'OpenCV'],
  },
  {
    id: 'crack-analysis',
    number: '04',
    name: 'Concrete Crack Analysis',
    tags: ['Deep Learning', 'Classification', 'ResNet18'],
    description:
      'A binary classification system for detecting cracks in concrete, pavements, and walls using a transfer-learning approach with ResNet18. Implements custom weighted loss functions to tackle extreme class imbalance in the SDNET2018 dataset.',
    stats: [
      { label: 'Dataset', value: 'SDNET2018' },
      { label: 'Imbalance', value: '82% Skew' },
      { label: 'Model', value: 'ResNet18' },
    ],
    tech: ['PyTorch', 'Torchvision', 'Pandas', 'Transfer Learning'],
  },
  {
    id: 'cartoon-generator',
    number: '05',
    name: 'Cartoonish Image Engine',
    tags: ['Computer Vision', 'Image Processing', 'Filters'],
    description:
      'An advanced image processing pipeline that transforms standard photographs into vibrant, stylized cartoon artworks. Combines strong bilateral smoothing, Canny edge detection, and color quantization for clean, professional digital art.',
    stats: [
      { label: 'Smoothing', value: 'Bilateral' },
      { label: 'Edges', value: 'Canny' },
      { label: 'Colors', value: 'Quantized' },
    ],
    tech: ['Python', 'OpenCV', 'NumPy', 'Image Processing'],
  },
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Selected Work</span>
          <h2 className="projects-title">
            Projects that<br />push boundaries
          </h2>
          <p className="projects-subtitle">
            From production AI systems to research-grade computer vision — each project is built to solve real problems.
          </p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="project-item"
                onClick={() => toggle(project.id)}
                role="button"
                tabIndex={0}
                aria-expanded={expandedId === project.id}
              >
                <div className="project-item-inner">
                  <span className="project-number">{project.number}</span>
                  <div className="project-info">
                    <span className="project-name">{project.name}</span>
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-arrow">
                    <ArrowUpRight className="arrow-current" />
                    <ArrowUpRight className="arrow-next" />
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    className="project-expanded"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="project-expanded-inner">
                      <div>
                        <p className="project-expanded-desc">{project.description}</p>
                        <div className="project-expanded-tech">
                          {project.tech.map(t => (
                            <span key={t} className="project-expanded-tech-item">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div className="project-expanded-meta">
                        {project.stats.map(stat => (
                          <div key={stat.label} className="project-expanded-stat">
                            <span className="project-expanded-stat-label">{stat.label}</span>
                            <span className="project-expanded-stat-value">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
