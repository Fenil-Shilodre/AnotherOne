import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ cursorText }) {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('button, a, input, select, textarea, [data-cursor]');
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorText ? 44 : isPointer ? 22 : 12),
          y: mousePosition.y - (cursorText ? 44 : isPointer ? 22 : 12),
          width: cursorText ? 88 : isPointer ? 44 : 24,
          height: cursorText ? 88 : isPointer ? 44 : 24,
          backgroundColor: cursorText
            ? 'rgba(22, 22, 22, 0.92)'
            : isPointer
            ? 'rgba(22, 22, 22, 0.15)'
            : 'rgba(22, 22, 22, 0.4)',
          backdropFilter: cursorText ? 'blur(8px)' : 'none',
          scale: isPointer ? 1.15 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-widest text-[#FAF8F5] uppercase font-sans font-medium select-none text-center px-1">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
}
