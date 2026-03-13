import React, { useState, useRef, useEffect } from 'react';
import './Global.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ServicesModal from './components/ServicesModal';
import ProjectsModal from './components/ProjectsModal';
import TermsModal from './components/TermsModal';
import PrivacyModal from './components/PrivacyModal';
import NeuralBackground from './components/NeuralBackground';
import VoidShader from './components/VoidShader';
import CustomCursor from './components/CustomCursor';
import BootSequence from './components/BootSequence';
import SystemStatus from './components/SystemStatus';
import DataStream from './components/DataStream';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'contact' | 'services' | 'projects' | 'terms' | 'privacy' | null>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);

  // Hyper Alive: Single Static Tab Title
  useEffect(() => {
    document.title = "RETICLEX // KRITISH DHITAL";
  }, []);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const closeModals = () => setActiveModal(null);

  const scrollToWork = () => {
    workSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Deep Bug Fix: Prevent background scroll when modal is open
  React.useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModal]);

  return (
    <div style={{ overflowX: 'hidden', position: 'relative' }}>
      <div className="noise-overlay" />
      <div className="tech-grid" />
      <DataStream />
      <BootSequence />
      <SystemStatus />
      
      {/* Fixed Background Layers */}
      <VoidShader />
      <NeuralBackground />
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="scroll-progress-bar"
        style={{ scaleX }} 
      />

      {/* UI Content Layer */}
      <div id="ui-root">
        <Nav 
          onWorkClick={scrollToWork} 
        />
        <main>
          <Hero 
            onContactClick={() => setActiveModal('contact')} 
            onWorkClick={scrollToWork} 
          />
          <TechStack />
          <WhyChooseMe />
          
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
            <span className="mono-text" style={{ color: 'var(--nepal-crimson)', fontWeight: 700, fontSize: '10px' }}>
              // NEURAL_TORQUE_DIAGNOSTICS
            </span>
            <h2 className="stagger-in" style={{ fontSize: 'clamp(24px, 4vw, 36px)', color: 'var(--text-main)', marginTop: 'var(--spacing-xs)' }}>
              The High-Fidelity Build Log
            </h2>
            <p className="mono-text" style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px' }}>
              Compiling raw ambition into production-ready reality (without the mechanical lag).
            </p>
          </div>

          <div ref={workSectionRef} className="container" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: 'var(--spacing-lg)',
            padding: 'var(--spacing-xl) 0'
          }}>
            <Services onViewClick={() => setActiveModal('services')} />
            <Projects onViewClick={() => setActiveModal('projects')} />
          </div>
        </main>
        <Footer 
          onContactClick={() => setActiveModal('contact')} 
          onTermsClick={() => setActiveModal('terms')}
          onPrivacyClick={() => setActiveModal('privacy')}
        />
      </div>

      {/* Modals wrapped in AnimatePresence for reliability */}
      <AnimatePresence mode="wait">
        {activeModal === 'contact' && <Contact onClose={closeModals} />}
        {activeModal === 'services' && <ServicesModal onClose={closeModals} />}
        {activeModal === 'projects' && <ProjectsModal onClose={closeModals} />}
        {activeModal === 'terms' && <TermsModal onClose={closeModals} />}
        {activeModal === 'privacy' && <PrivacyModal onClose={closeModals} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
