"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('clickable');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[100] mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
        style={{
          background: isHovering 
            ? 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0) 70%)'
            : 'radial-gradient(circle, rgba(106,56,255,0.4) 0%, rgba(106,56,255,0) 70%)',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[100]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'tween',
          duration: 0.05,
        }}
      />
    </>
  );
}
