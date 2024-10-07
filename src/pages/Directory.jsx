import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import ReFiInvestors from '@/components/ReFiInvestors';
import PermacultureFarms from '@/components/PermacultureFarms';
import Web3Grants from '@/components/Web3Grants';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('investors');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    if (category) {
      setActiveTab(category);
    }
  }, [location]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light mb-8 text-white">Humanity-centered innovation directory</h1>
      
      <div className="mb-8">
        <div className="relative w-full max-w-2xl">
          <Input
            type="text"
            placeholder="Search directory..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border-white/30 text-white placeholder-white/70 rounded-full text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={24} />
        </div>
      </div>

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
        {activeTab === 'investors' && <ReFiInvestors searchTerm={searchTerm} />}
        {activeTab === 'permaculture' && <PermacultureFarms searchTerm={searchTerm} />}
        {activeTab === 'grants' && <Web3Grants searchTerm={searchTerm} />}
      </div>

      <div className="mt-12 p-6 bg-white/10 rounded-lg text-center">
        <h2 className="text-2xl font-light mb-4">Want to keep track of these opportunities?</h2>
        <p className="mb-4">Sign up for a more personalized experience and save your results.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors text-lg">
          Join to co-create
        </button>
      </div>
    </div>
  );
};

export default Directory;