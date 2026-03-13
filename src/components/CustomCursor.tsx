import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const clickable = target.closest('button, a, .clickable, [role="button"]');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="cursor-glow" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.3 : 0.15,
          background: isHovering ? 'var(--nepal-blue)' : 'var(--text-main)',
          transition: 'transform 0.3s ease, background 0.3s ease, opacity 0.3s ease'
        }} 
      />
      <div 
        className="custom-cursor" 
        style={{ 
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 2.5 : 1})`,
          border: isHovering ? '1.5px solid var(--nepal-crimson)' : 'none',
          background: isHovering ? 'transparent' : 'var(--text-main)',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s, border 0.2s'
        }} 
      />
    </>
  );
};

export default CustomCursor;
