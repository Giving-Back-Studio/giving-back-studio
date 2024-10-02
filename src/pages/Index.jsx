import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Mic, Camera } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-12 text-center">
        Explore human-centered innovation
      </h1>
      
      <div className="w-full max-w-2xl mb-12">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-16 py-3 bg-white/10 border-white/30 text-white placeholder-white/70 rounded-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
            <Mic className="text-white/70" />
            <Camera className="text-white/70" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <Link to="/directory?category=investors">
          <Button className="w-full py-6 bg-white/10 hover:bg-white/20 text-white">
            <div>
              <h3 className="text-lg font-semibold mb-2">Find ReFi Investors</h3>
              <p className="text-sm opacity-70">Connect with investors focused on regenerative finance.</p>
            </div>
          </Button>
        </Link>
        <Link to="/directory?category=tech4good">
          <Button className="w-full py-6 bg-white/10 hover:bg-white/20 text-white">
            <div>
              <h3 className="text-lg font-semibold mb-2">Find Tech for Good Jobs</h3>
              <p className="text-sm opacity-70">Discover tech jobs making a positive impact.</p>
            </div>
          </Button>
        </Link>
        <Link to="/directory?category=permaculture">
          <Button className="w-full py-6 bg-white/10 hover:bg-white/20 text-white">
            <div>
              <h3 className="text-lg font-semibold mb-2">Find Permaculture Farms</h3>
              <p className="text-sm opacity-70">Locate farms dedicated to sustainable practices.</p>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;