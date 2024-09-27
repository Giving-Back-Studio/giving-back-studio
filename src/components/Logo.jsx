import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
        <div className="w-6 h-6 bg-purple-900 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      <span className="text-xl font-bold">GIVING BACK STUDIO</span>
    </div>
  );
};

export default Logo;