import React from 'react';
import PermacultureFarms from '@/components/PermacultureFarms';

const Farms = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white">Permaculture Farms</h1>
      <PermacultureFarms />
    </div>
  );
};

export default Farms;