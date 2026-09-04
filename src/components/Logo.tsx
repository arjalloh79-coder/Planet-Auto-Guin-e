'use client';

import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'w-11 h-11' }: LogoProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className={`${className} bg-crimson rounded-full flex items-center justify-center flex-shrink-0`}>
        <span className="text-dark-bg font-bold text-lg">🚗</span>
      </div>
    );
  }

  return (
    <img
      src="/images/logo.png"
      alt="Planet Auto Guinea"
      className={`${className} rounded-full object-cover flex-shrink-0`}
      onError={() => setErrored(true)}
    />
  );
}
