import React, { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++
      };

      setTrails(prev => {
        const newTrails = [...prev, newTrail];
        // Keep only the last 5 trails
        return newTrails.slice(-5);
      });

      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 10,
            top: trail.y - 10,
            opacity: (index + 1) / trails.length * 0.5,
            transform: `scale(${(index + 1) / trails.length})`
          }}
        />
      ))}
    </>
  );
}