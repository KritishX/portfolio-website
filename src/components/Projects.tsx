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
    id: 'stock-prediction',
    number: '01',
    name: 'Quantitative Momentum: Real-Time Stock Prediction',
    tags: ['Time-Series', 'LSTM', 'Financial AI'],
    description:
      'A high-frequency trading simulation engine using stacked LSTM and Transformer networks to predict stock price movements. Integrates real-time data ingestion via Alpha Vantage API and features a comprehensive backtesting suite with Risk-Adjusted Return metrics.',
    stats: [
      { label: 'MAPE', value: '1.8%' },
      { label: 'Backtest', value: '22% ROI' },
      { label: 'Latency', value: '<50ms' },
    ],
    tech: ['TensorFlow', 'Keras', 'Pandas', 'Matplotlib', 'NumPy'],
  },
  {
    id: 'email-automator',
    number: '02',
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
    id: 'drone-navigation',
    number: '03',
    name: 'SkySense: Vision-Language-Action (VLA) Drone',
    tags: ['VLM', 'Robotics', 'Path Planning'],
    description:
      'An advanced autonomous drone system integrated with Vision-Language Models (VLM) for high-level mission reasoning. Enables zero-shot navigation and complex task execution through natural language commands in unstructured environments.',
    stats: [
      { label: 'Inference', value: '45ms' },
      { label: 'Success', value: '94%' },
      { label: 'VLM', value: 'LLaVA-v1.5' },
    ],
    tech: ['Python', 'ROS2', 'Pybullet', 'OpenCV', 'LangChain'],
  },
  {
    id: 'hospital-system',
    number: '04',
    name: 'MedFlow: Enterprise Hospital Management Suite',
    tags: ['Full Stack', 'Automation', 'HealthTech'],
    description:
      'A comprehensive, automated hospital ecosystem controlling end-to-end clinical and administrative workflows. Features real-time resource synchronization, automated patient triaging, and a high-availability backend for critical care management.',
    stats: [
      { label: 'Efficiency', value: '+35%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Scale', value: '500+ Beds' },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'scikit-learn'],
  },
  {
    id: 'anomaly-detection',
    number: '05',
    name: 'Unsupervised Anomaly Detection (ViT-DINO)',
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
    id: 'self-parking',
    number: '06',
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
