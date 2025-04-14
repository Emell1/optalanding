
import React, { useEffect, useState } from 'react';

const PraxiaGif: React.FC = () => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const totalFrames = 30;
  const baseUrl = '/lovable-uploads/praxia-framesgif/1bfb2347e9924335954c7edecbb50dd7Cwg1pjV2ZbgvfAvX-';
  const frameDelay = 100; // 100ms between frames for animation
  const loopDelay = 1800; // 1.8s delay before restarting animation

  useEffect(() => {
    let animationTimer: number | null = null;
    let loopTimer: number | null = null;
    
    // Function to advance to next frame
    const advanceFrame = () => {
      setCurrentFrame((prev) => {
        // If we've reached the last frame
        if (prev >= totalFrames - 1) {
          // Clear the animation timer
          if (animationTimer) window.clearInterval(animationTimer);
          
          // Set up the delay before looping back to first frame
          loopTimer = window.setTimeout(() => {
            setCurrentFrame(0);
            // Restart the animation timer after loop delay
            animationTimer = window.setInterval(advanceFrame, frameDelay);
          }, loopDelay);
          
          return prev;
        }
        return prev + 1;
      });
    };
    
    // Start the initial animation timer
    animationTimer = window.setInterval(advanceFrame, frameDelay);
    
    // Cleanup function to clear all timers
    return () => {
      if (animationTimer) window.clearInterval(animationTimer);
      if (loopTimer) window.clearTimeout(loopTimer);
    };
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
