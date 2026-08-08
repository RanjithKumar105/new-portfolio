import React from "react";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
}

/**
 * Wraps children in a container with a rotating conic-gradient border.
 * Used for the hero profile image.
 */
export default function AnimatedBorder({
  children,
  className = "",
  borderWidth = 3,
}: AnimatedBorderProps) {
  return (
    <div
      className={`animated-border ${className}`}
      style={{ "--border-width": `${borderWidth}px` } as React.CSSProperties}
    >
      <div className="animated-border__inner">{children}</div>
    </div>
  );
}
