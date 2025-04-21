'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type CursorPosition = {
  x: number;
  y: number;
};

export default function Cursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trailPos, setTrailPos] = useState<CursorPosition>({ x: 0, y: 0 });

  // Delay the trail for flame effect
useEffect(() => {
    setTrailPos(position);
}, [position]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* 🔥 Flame Trail */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 60,
          height: 60,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          background: 'radial-gradient(circle, rgba(255,100,0,0.6), transparent)',
          filter: 'blur(18px)',
        }}
        animate={{
          x: trailPos.x - 30,
          y: trailPos.y - 30,
        }}
        transition={{
          type: 'spring',
          damping: 40,
          stiffness: 350,
        }}
      />

      {/* 🌟 Core Cursor */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: '#ffc5ec',
          boxShadow: '0 0 30px 10px #f8a6f4',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 600,
        }}
      />
    </>
  );
}
