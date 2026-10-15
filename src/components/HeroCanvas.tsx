import React, { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes representing medical search queries, local clinics, and patients
    const particleCount = Math.min(38, Math.floor(width / 30));
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      pulse: number;
      connections: number[];
    }> = [];

    const colors = ['#0A2E5C', '#D62828', '#1E40AF', '#B31E1E', '#3B82F6'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1.5,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.25,
        pulse: Math.random() * Math.PI,
        connections: [],
      });
    }

    // Mouse interaction point
    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const parent = canvas.parentElement;
    parent?.addEventListener('mousemove', handleMouseMove);
    parent?.addEventListener('mouseleave', handleMouseLeave);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles within proximity
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce at boundaries
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Interaction with mouse
        const dxMouse = mouse.x - p1.x;
        const dyMouse = mouse.y - p1.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (1 - distMouse / mouse.radius) * 0.8;
          p1.x -= (dxMouse / distMouse) * force * 2;
          p1.y -= (dyMouse / distMouse) * force * 2;
        }

        // Pulse
        p1.pulse += 0.02;
        const currentRadius = p1.radius + Math.sin(p1.pulse) * 0.8;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, Math.max(1, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = p1.color;
        ctx.globalAlpha = p1.alpha;
        ctx.fill();

        // Connect with other particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color === '#D62828' || p2.color === '#D62828' ? '#D62828' : '#0A2E5C';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      parent?.removeEventListener('mousemove', handleMouseMove);
      parent?.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      {/* Background radiant aura following brand colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-gradient-to-tr from-navy/10 via-brandRed/8 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-brandRed/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[380px] h-[380px] bg-navy/8 rounded-full blur-[90px] -z-10 pointer-events-none" />
    </div>
  );
};
