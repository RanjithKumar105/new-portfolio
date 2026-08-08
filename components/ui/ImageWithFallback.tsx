"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { User } from "lucide-react";

interface ImageWithFallbackProps extends Omit<ImageProps, "onError"> {
  fallbackText?: string;
}

export default function ImageWithFallback({
  fallbackText = "R",
  alt,
  className,
  style,
  width,
  height,
  fill,
  ...rest
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-950/60 to-slate-900 border border-white/10 ${
          className || ""
        }`}
        style={{
          width: fill ? "100%" : width,
          height: fill ? "100%" : height,
          borderRadius: "inherit",
          position: fill ? "absolute" : "relative",
          inset: fill ? 0 : undefined,
          ...style,
        }}
        aria-label={alt}
      >
        <div className="flex flex-col items-center justify-center text-slate-400">
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-1 text-slate-300">
            <User className="w-6 h-6" />
          </div>
          <span className="text-xs font-medium tracking-wider text-slate-400 uppercase">
            {fallbackText}
          </span>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        alt={alt}
        className={className}
        style={style}
        fill
        onError={() => setHasError(true)}
        {...rest}
      />
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      {...rest}
    />
  );
}
