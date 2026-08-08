import React from "react";

interface TechTagProps {
  name: string;
}

export default function TechTag({ name }: TechTagProps) {
  return <span className="tech-tag">{name}</span>;
}
