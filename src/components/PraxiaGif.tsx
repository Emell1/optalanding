
import React, { useEffect, useState } from 'react';

const PraxiaGif: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const totalFrames = 30;
  const baseUrl = '/lovable-uploads/praxia-framesgif/1bfb2347e9924335954c7edecbb50dd7Cwg1pjV2ZbgvfAvX-';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev === totalFrames - 1) {
          // Add 1.8s delay before returning to frame 0
          setTimeout(() => {
            setCurrentFrame(0);
          }, 1800);
          return prev;
        }
        return prev + 1;
      });
    }, 100); // Ajusta este valor para controlar la velocidad de la animación

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={`${baseUrl}${currentFrame}.png`}
      alt="Praxia Logo"
      className="inline-block h-6 mx-2 align-middle"
    />
  );
};

export default PraxiaGif;
