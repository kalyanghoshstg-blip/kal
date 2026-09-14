import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
  gravity: number;
  friction: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

export const FireworkBursts: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isActive, setIsActive] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    // Check for reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    // Check for mix-blend-mode support to avoid fading/dimming on older devices
    if (window.CSS && typeof window.CSS.supports === 'function') {
      if (!window.CSS.supports('mix-blend-mode', 'screen')) {
        return false;
      }
    }
    return true;
  });

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsActive(false);
      return;
    }

    // Handle high-DPI displays
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles: Particle[] = [];
    const colors = [
      '#FF3E6C', // Radiant pink
      '#22C55E', // Vivid emerald
      '#3B82F6', // Brillant blue
      '#EAB308', // Radiant yellow
      '#A855F7', // Royal purple
      '#FF6B00', // Saffron orange
      '#F43F5E', // Rose red
      '#06B6D4', // Cyan sparkle
    ];

    const createBurst = (x: number, y: number) => {
      const pCount = 80 + Math.floor(Math.random() * 40);
      const baseColor = colors[Math.floor(Math.random() * colors.length)];
      const hasMultiColor = Math.random() > 0.6;

      for (let i = 0; i < pCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 8;
        const color = hasMultiColor ? colors[Math.floor(Math.random() * colors.length)] : baseColor;

        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          size: 1.5 + Math.random() * 2.5,
          decay: 0.015 + Math.random() * 0.015,
          gravity: 0.08,
          friction: 0.96,
        });
      }
    };

    let animationId: number;
    let isRunning = true;

    const tick = () => {
      if (!isRunning) return;

      // Clear with slight trailing fade
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = 'lighter';

      // Update & Draw particles
      particles.forEach((p, index) => {
        p.vx *= p.friction;
        p.vy *= p.friction;
        p.vy += p.gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(tick);
    };

    // Trigger initial burst in the left corner
    createBurst(canvas.width * 0.15, canvas.height * 0.35);

    // Schedule regular elegant bursts in the left corner (5% to 25% of viewport width)
    const burstInterval = setInterval(() => {
      if (!isRunning) return;
      const x = canvas.width * (0.05 + Math.random() * 0.2);
      const y = canvas.height * (0.15 + Math.random() * 0.35);
      createBurst(x, y);
    }, 550);

    // Start rendering loops
    tick();

    // Terminate exactly at 10 seconds (10000ms)
    const endTimeout = setTimeout(() => {
      isRunning = false;
      clearInterval(burstInterval);
      cancelAnimationFrame(animationId);
      
      // Instantly clear canvas and remove all resources
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      setIsActive(false);
    }, 10000);

    return () => {
      isRunning = false;
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(burstInterval);
      clearTimeout(endTimeout);
      cancelAnimationFrame(animationId);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      id="launch-fireworks-canvas"
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  );
};
