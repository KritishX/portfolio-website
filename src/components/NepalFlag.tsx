import React from 'react';
import flagGif from '../assets/nepal-flag.gif';

const NepalFlag: React.FC<{ size?: number }> = ({ size = 42 }) => {
  // Official ratio is approx 1:1.219 (width:height)
  const width = size;
  const height = size * 1.22;

  return (
    <div 
      className="flag-container"
      role="img"
      aria-label="National Flag of Nepal"
      style={{ 
        width: width, 
        height: height, 
        display: 'inline-flex',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <img 
        src={flagGif} 
        alt="Nepal Flag" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))'
        }} 
      />
    </div>
  );
};

export default NepalFlag;
