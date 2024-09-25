import React from 'react';

const FlowerOfLife = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute w-full h-full" viewBox="0 0 1000 1000">
        <defs>
          <pattern id="flowerOfLife" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="150" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="125" cy="143.3" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="75" cy="143.3" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="50" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="75" cy="56.7" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="125" cy="56.7" r="50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#flowerOfLife)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 500 500"
            to="360 500 500"
            dur="240s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
};

export default FlowerOfLife;