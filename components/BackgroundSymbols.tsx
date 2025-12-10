
import React from 'react';

const BackgroundSymbols: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-[0.03]">
      <svg width="100%" height="100%">
        <pattern id="spiritual-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <text x="10" y="40" fontSize="30" fill="currentColor" className="text-saffron-900 font-serif">🕉</text>
          <text x="60" y="80" fontSize="30" fill="currentColor" className="text-saffron-900 font-serif">卐</text>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#spiritual-pattern)"></rect>
      </svg>
      
      {/* Large Decorative Symbols */}
      <div className="absolute top-0 right-0 text-saffron-500 opacity-10 text-[20rem] font-serif translate-x-1/2 -translate-y-1/2">
        卐
      </div>
      <div className="absolute bottom-0 left-0 text-saffron-500 opacity-10 text-[25rem] font-serif -translate-x-1/2 translate-y-1/2">
        🕉
      </div>
    </div>
  );
};

export default BackgroundSymbols;
