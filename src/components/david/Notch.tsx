import React from 'react';

interface NotchProps {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}

export function Notch({ className = '', flipX = false, flipY = false }: NotchProps) {
  const transform = [
    flipX ? 'scaleX(-1)' : '',
    flipY ? 'scaleY(-1)' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <svg
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 sm:w-8 sm:h-8 shrink-0 pointer-events-none fill-current ${className}`}
      style={transform ? { transform } : undefined}
      aria-hidden="true"
    >
      <path d="M0 256H256C114.616 256 0 141.385 0 0V256Z" />
    </svg>
  );
}
