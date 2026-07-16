import { useState, useEffect } from 'react';

/**
 * A hook to get parallax offset values based on mouse position.
 * Returns normalized values between -1 and 1.
 */
export function useParallax(intensity: number = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Normalize between -1 and 1
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      
      setOffset({
        x: x * intensity,
        y: y * intensity
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return offset;
}
