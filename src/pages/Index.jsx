import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/directory?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 text-center">
        Discover humanity-centered innovation
      </h1>
      
      <form onSubmit={handleSearch} className="w-full max-w-2xl mb-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="Describe the opportunities you truly want to call in..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-transparent border-white/30 text-white placeholder-white rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
        </div>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link to="/directory?category=investors" className="group">
          <div className="w-full h-full p-6 bg-transparent border border-white rounded-md transition-colors duration-300 hover:bg-white/10">
            <h3 className="text-lg font-semibold mb-2">Find ReFi Investors</h3>
            <p className="text-sm opacity-70">Connect with investors focused on regenerative finance.</p>
          </div>
        </Link>
        <Link to="/directory?category=tech4good" className="group">
          <div className="w-full h-full p-6 bg-transparent border border-white rounded-md transition-colors duration-300 hover:bg-white/10">
            <h3 className="text-lg font-semibold mb-2">Find Tech for Good Jobs</h3>
            <p className="text-sm opacity-70">Discover tech jobs making a positive impact.</p>
          </div>
        </Link>
        <Link to="/directory?category=permaculture" className="group">
          <div className="w-full h-full p-6 bg-transparent border border-white rounded-md transition-colors duration-300 hover:bg-white/10">
            <h3 className="text-lg font-semibold mb-2">Find Permaculture Farms</h3>
            <p className="text-sm opacity-70">Locate farms dedicated to sustainable practices.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Index;