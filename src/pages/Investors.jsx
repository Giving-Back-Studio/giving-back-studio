import React from 'react';
import ReFiInvestors from '@/components/ReFiInvestors';

const Investors = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white">Conscious Capital Investors</h1>
      <ReFiInvestors />
    </div>
  );
};

export default Investors;