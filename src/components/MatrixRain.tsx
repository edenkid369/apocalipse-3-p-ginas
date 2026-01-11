import { useEffect, useRef, useCallback } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const dropsRef = useRef<number[]>([]);

  const draw = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number, charArray: string[], fontSize: number) => {
    // Semi-transparent black to create fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    // Green text
    ctx.fillStyle = 'rgba(0, 255, 65, 0.4)';
    ctx.font = `${fontSize}px monospace`;

    const drops = dropsRef.current;
    for (let i = 0; i < drops.length; i++) {
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(char, x, y);

      // Reset drop when it goes off screen
      if (y > height && Math.random() > 0.98) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Matrix characters - reduced set for performance
    const chars = 'アイウエオカキクケコ0123456789MATRIX';
    const charArray = chars.split('');
    const fontSize = 20; // Slightly larger = fewer columns

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR for performance
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Reinitialize drops on resize
      const columns = Math.floor(width / fontSize);
      dropsRef.current = [];
      for (let i = 0; i < columns; i++) {
        dropsRef.current[i] = Math.random() * -50;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Use requestAnimationFrame with throttling for smoother, more efficient animation
    const targetFPS = 15; // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      animationRef.current = requestAnimationFrame(animate);
      
      const deltaTime = currentTime - lastTimeRef.current;
      if (deltaTime < frameInterval) return;
      
      lastTimeRef.current = currentTime - (deltaTime % frameInterval);
      draw(ctx, window.innerWidth, window.innerHeight, charArray, fontSize);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default MatrixRain;
