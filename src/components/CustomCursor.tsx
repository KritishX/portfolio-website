import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
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

  const isVisible = position.x >= 0 && position.y >= 0;

  if (!isVisible) return null;

  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      <div 
        className="custom-cursor" 
        style={{ 
          transform: `translate(${position.x - 3}px, ${position.y - 3}px) scale(${isHovering ? 2 : 1})`,
          width: '6px',
          height: '6px',
          background: isHovering ? 'var(--nepal-crimson)' : 'var(--nepal-blue)',
          borderRadius: '50%',
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s',
          pointerEvents: 'none',
          boxShadow: isHovering ? '0 0 8px var(--nepal-crimson)' : 'none'
        }} 
      />
    </div>
  );
};

export default CustomCursor;
