import React, { useState } from 'react';
import './Global.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ServicesModal from './components/ServicesModal';
import ProjectsModal from './components/ProjectsModal';
import NeuralBackground from './components/NeuralBackground';
import VoidShader from './components/VoidShader';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'contact' | 'services' | 'projects' | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const closeModals = () => setActiveModal(null);

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
      {/* Fixed Background Layers */}
      <VoidShader />
      <NeuralBackground />
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '3px', 
          background: 'var(--text-main)', 
          transformOrigin: '0%', 
          zIndex: 2000,
          scaleX 
        }} 
      />

      {/* UI Content Layer */}
      <div id="ui-root">
        <Nav onContactClick={() => setActiveModal('contact')} />
        <main>
          <Hero onContactClick={() => setActiveModal('contact')} />
          <TechStack />
          <Services onViewClick={() => setActiveModal('services')} />
          <Projects onViewClick={() => setActiveModal('projects')} />
        </main>
        <Footer onContactClick={() => setActiveModal('contact')} />
      </div>

      {/* Modals */}
      <Contact isOpen={activeModal === 'contact'} onClose={closeModals} />
      <ServicesModal isOpen={activeModal === 'services'} onClose={closeModals} />
      <ProjectsModal isOpen={activeModal === 'projects'} onClose={closeModals} />
    </div>
  );
};

export default App;
