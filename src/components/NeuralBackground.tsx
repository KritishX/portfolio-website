import React, { useEffect, useRef } from 'react';

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  angle: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.12;
    this.vy = (Math.random() - 0.5) * 0.12;
    this.size = Math.random() * 1.2 + 0.8;
    this.color = Math.random() > 0.6 ? '#DC143C' : '#003893';
    this.angle = Math.random() * Math.PI * 2;
  }

  update(width: number, height: number, mouse: { x: number, y: number, radius: number }, particles: Particle[], scrollY: number) {
    this.angle += 0.01;
    this.vx += Math.cos(this.angle) * 0.002;
    this.vy += Math.sin(this.angle) * 0.002;

    const dx = mouse.x - this.x;
    // Factor in scrollY to maintain correct vertical cursor position relative to dots
    const dy = (mouse.y + scrollY) - this.y;
    const distToMouse = Math.sqrt(dx * dx + dy * dy);
    
    if (distToMouse < mouse.radius) {
      const force = (mouse.radius - distToMouse) / mouse.radius;
      // Reduced force from 0.025 to 0.012 for slower, smoother pull
      this.vx += (dx / distToMouse) * force * 0.012;
      this.vy += (dy / distToMouse) * force * 0.012;
    }

    const repulsionMultiplier = Math.min(1, Math.max(0, (distToMouse - mouse.radius * 0.3) / (mouse.radius * 0.7)));

    if (repulsionMultiplier > 0) {
      for (let i = 0; i < particles.length; i++) {
        const p2 = particles[i];
        if (p2 === this) continue;
        const rdx = this.x - p2.x;
        const rdy = this.y - p2.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const minSep = 100; 
        if (rdist < minSep) {
          const rf = (minSep - rdist) / minSep;
          this.vx += (rdx / rdist) * rf * 0.04 * repulsionMultiplier; 
          this.vy += (rdy / rdist) * rf * 0.04 * repulsionMultiplier;
        }
      }
    }

    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.985;
    this.vy *= 0.985;

    if (this.x < 0 || this.x > width) this.vx *= -0.8;
    if (this.y < 0 || this.y > height) this.vy *= -0.8;
  }

  draw(ctx: CanvasRenderingContext2D, parallaxOffset: number) {
    const drawY = (this.y - parallaxOffset + ctx.canvas.height) % ctx.canvas.height;
    ctx.beginPath();
    ctx.arc(this.x, drawY, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color === '#DC143C' ? 'rgba(220, 20, 60, 0.3)' : 'rgba(0, 56, 147, 0.3)';
    ctx.fill();
  }
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;
    let time = 0;
    
    const isMobile = window.innerWidth < 768;
    const mouse = { x: -2000, y: -2000, radius: isMobile ? 180 : 280 };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const particleCount = isMobile ? 22 : 75; 
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const drawConnections = (parallaxOffset: number) => {
      time += 0.005;
      const breathing = 0.9 + Math.sin(time) * 0.1;
      const screenDiag = Math.sqrt(canvas.width**2 + canvas.height**2);

      // Restore All-to-All for both desktop and mobile
      const maxDist = screenDiag;

      for (let i = 0; i < particles.length; i++) {
        const y1 = (particles[i].y - parallaxOffset + canvas.height) % canvas.height;

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const y2 = (particles[j].y - parallaxOffset + canvas.height) % canvas.height;
          const dy = y1 - y2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < maxDist) {
            const proximity = 1 - dist / maxDist;
            // Simplified power for mobile (3 instead of 4)
            const organicOpacity = Math.pow(proximity, isMobile ? 3 : 4) * 0.22 * breathing;
            
            if (organicOpacity < 0.01) continue;

            const color = particles[i].color === particles[j].color ? 
                          particles[i].color : '#4a3a6b';
            
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);

            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(0.35, organicOpacity)})`;
            ctx!.lineWidth = isMobile ? 0.3 : 0.4;
            ctx!.moveTo(particles[i].x, y1);
            ctx!.lineTo(particles[j].x, y2);
            ctx!.stroke();
          }
        }

        // 2. DIRECT CURSOR CONNECTIONS (The "Touch" Effect)
        if (mouse.x > 0 && mouse.x < canvas.width && mouse.y > 0 && mouse.y < canvas.height) {
          const mdx = mouse.x - particles[i].x;
          const scrollY = scrollRef.current;
          const mdy = (mouse.y + scrollY) - y1;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          
          const mProximity = 1 - mdist / screenDiag;
          // Decreased cursor link opacity from 0.45 to 0.25
          const mOpacity = Math.pow(mProximity, 4) * 0.25 * breathing;

          if (mOpacity > 0.005) {
            const pCol = particles[i].color === '#DC143C' ? '220, 20, 60' : '0, 56, 147';
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${pCol}, ${mOpacity})`;
            ctx!.lineWidth = 0.5; // Thinner trail lines
            ctx!.moveTo(particles[i].x, y1);
            ctx!.lineTo(mouse.x, mouse.y);
            ctx!.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      const scrollY = scrollRef.current;
      const parallaxOffset = (scrollY * (isMobile ? 0.08 : 0.15)) % canvas.height;

      particles.forEach(p => {
        p.update(canvas.width, canvas.height, mouse, particles, scrollY);
        p.draw(ctx!, parallaxOffset);
      });
      drawConnections(parallaxOffset);
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas id="neural-canvas" ref={canvasRef} style={{ background: 'transparent' }} />;
};

export default NeuralBackground;
