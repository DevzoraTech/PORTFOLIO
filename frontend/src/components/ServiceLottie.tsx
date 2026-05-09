'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface ServiceLottieProps {
  animationPath: string;
  className?: string;
  isHovered?: boolean;
}

export const ServiceLottie = ({ animationPath, className = '', isHovered = false }: ServiceLottieProps) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Error loading lottie:', err));
  }, [animationPath]);

  if (!animationData) return <div className={className} />;

  return (
    <div className={className}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};
