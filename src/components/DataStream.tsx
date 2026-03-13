import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const DataStream: React.FC = () => {
  const [streams, setStreams] = useState<{ id: number; x: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const streamCount = window.innerWidth < 768 ? 6 : 15;
    const newStreams = Array.from({ length: streamCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 15
    }));
    setStreams(newStreams);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: -1, overflow: 'hidden' }}>
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          initial={{ y: '-100%' }}
          animate={{ y: '200%' }}
          transition={{ 
            duration: stream.duration, 
            delay: stream.delay, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="mono-text"
          style={{
            position: 'absolute',
            left: `${stream.x}%`,
            color: 'var(--nepal-blue)',
            opacity: 0.05,
            fontSize: '8px',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            letterSpacing: '2px'
          }}
        >
          {Array.from({ length: 20 }).map(() => Math.round(Math.random())).join('')}
        </motion.div>
      ))}
    </div>
  );
};

export default DataStream;
