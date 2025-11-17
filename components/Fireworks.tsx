import React, { useRef, useEffect } from 'react';

type FireworksProps = {
  active: boolean;
};

const Fireworks: React.FC<FireworksProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.scale(dpr, dpr);

    let particles: Array<any> = [];
    let rockets: Array<any> = [];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const spawnRocket = () => {
      rockets.push({
        x: rand(50, width - 50),
        y: height + 10,
        vx: rand(-1, 1),
        vy: rand(-6, -8),
        life: 0,
      });
    };

    const explode = (rocket: any) => {
      const count = Math.floor(rand(20, 40));
      for (let i = 0; i < count; i++) {
        const angle = Math.PI * 2 * (i / count) + rand(-0.2, 0.2);
        const speed = rand(1, 5);
        particles.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: rand(40, 80),
          age: 0,
          color: `hsl(${Math.floor(rand(0, 360))}, 90%, ${Math.floor(rand(45, 65))}%)`,
        });
      }
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      // rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.vy += 0.12; // gravity
        r.x += r.vx;
        r.y += r.vy;
        r.life += 1;
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2, 0, Math.PI * 2);
        ctx.fill();
        if (r.vy >= -1 || r.life > 80) {
          explode(r);
          rockets.splice(i, 1);
        }
      }

      // particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.vy += 0.02; // gravity
        p.vx *= 0.99; // air resistance
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.age += 1;
        const t = p.age / p.life;
        ctx.globalAlpha = 1 - t;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, 3 * (1 - t)), 0, Math.PI * 2);
        ctx.fill();
        if (p.age >= p.life) particles.splice(i, 1);
      }

      ctx.globalAlpha = 1;

      if (active) {
        // occasionally spawn rockets
        if (Math.random() < 0.06) spawnRocket();
      }

      rafRef.current = requestAnimationFrame(update);
    };

    // Start animation
    rafRef.current = requestAnimationFrame(update);

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 50,
      }}
    />
  );
};

export default Fireworks;
