import React, { useState } from 'react';
import ReFiInvestors from '@/components/ReFiInvestors';
import PermacultureFarms from '@/components/PermacultureFarms';
import Web3Grants from '@/components/Web3Grants';

const Directory = () => {
  const [activeTab, setActiveTab] = useState('investors');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light mb-8 text-white">Humanity-centered innovation directory</h1>
      
      <div className="mb-8">
        <button
          onClick={() => setActiveTab('investors')}
          className={`mr-4 pb-2 ${activeTab === 'investors' ? 'border-b-2 border-white' : ''}`}
        >
          Aligned Investors
        </button>
        <button
          onClick={() => setActiveTab('permaculture')}
          className={`mr-4 pb-2 ${activeTab === 'permaculture' ? 'border-b-2 border-white' : ''}`}
        >
          Permaculture Farms
        </button>
        <button
          onClick={() => setActiveTab('grants')}
          className={`mr-4 pb-2 ${activeTab === 'grants' ? 'border-b-2 border-white' : ''}`}
        >
          Public Good Grants
        </button>
      </div>

      <div className="space-y-8">
        {activeTab === 'investors' && <ReFiInvestors />}
        {activeTab === 'permaculture' && <PermacultureFarms />}
        {activeTab === 'grants' && <Web3Grants />}
      </div>
    </div>
  );
};

export default Directory;