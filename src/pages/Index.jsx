import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { determineSearchCategory } from '@/utils/searchUtils';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const category = determineSearchCategory(searchTerm);
    navigate(`/directory?category=${category}&search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-4 text-white">
      <h1 className="text-5xl font-light mb-8 text-center">
        Grow your social enterprise.
      </h1>
      
      <form onSubmit={handleSearch} className="w-full max-w-2xl mb-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border-white/30 text-white placeholder-white/70 rounded-full text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={24} />
        </div>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link to="/directory?category=investors" className="group">
          <div className="w-full h-full p-6 bg-white/10 rounded-lg transition-colors duration-300 hover:bg-white/20">
            <h3 className="text-xl font-semibold mb-2">Find Aligned Investors</h3>
            <p className="text-sm text-white/80">Connect with investors focused on regenerative finance.</p>
          </div>
        </Link>
        <Link to="/directory?category=permaculture" className="group">
          <div className="w-full h-full p-6 bg-white/10 rounded-lg transition-colors duration-300 hover:bg-white/20">
            <h3 className="text-xl font-semibold mb-2">Find Permaculture Farms</h3>
            <p className="text-sm text-white/80">Locate farms dedicated to sustainable practices.</p>
          </div>
        </Link>
        <Link to="/directory?category=grants" className="group">
          <div className="w-full h-full p-6 bg-white/10 rounded-lg transition-colors duration-300 hover:bg-white/20">
            <h3 className="text-xl font-semibold mb-2">Find Public Good Grants</h3>
            <p className="text-sm text-white/80">Discover opportunities to do good and do well with grants.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;
