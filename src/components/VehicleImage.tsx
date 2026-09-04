'use client';

import React, { useState } from 'react';

interface VehicleImageProps {
  src?: string;
  alt: string;
  className?: string;
  iconClassName?: string;
}

export default function VehicleImage({
  src,
  alt,
  className = '',
  iconClassName = 'text-5xl',
}: VehicleImageProps) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className={`flex items-center justify-center bg-gray-800 ${iconClassName} ${className}`}>
        🚗
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setErrored(true)}
    />
  );
}
