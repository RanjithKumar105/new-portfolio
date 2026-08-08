"use client";

import React, { useEffect, useState } from "react";

export function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          top: `${position.y}px`,
          left: `${position.x}px`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
