import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';
import ReFiInvestors from '@/components/ReFiInvestors';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import PermacultureFarms from '@/components/PermacultureFarms';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 sticky top-0 bg-gradient-to-b from-gbs-purple to-gbs-blue z-10 pb-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white">Humanity-Centered Innovation Directory</h1>
        
        <div className="mb-8 flex justify-between items-center">
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Search directory..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-white/10 border-white/30 text-white placeholder-white/70 pl-10 pr-4 py-2 rounded-full w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>
        </div>

        <Tabs defaultValue="investors">
          <TabsList className="bg-transparent border-b border-white/20 w-full flex justify-start mb-8">
            <TabsTrigger 
              value="investors" 
              className="text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white bg-transparent data-[state=active]:bg-transparent"
            >
              Investors
            </TabsTrigger>
            <TabsTrigger 
              value="tech4good" 
              className="text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white bg-transparent data-[state=active]:bg-transparent"
            >
              Tech4Good Jobs
            </TabsTrigger>
            <TabsTrigger 
              value="permaculture" 
              className="text-white data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white bg-transparent data-[state=active]:bg-transparent"
            >
              Permaculture Farms
            </TabsTrigger>
          </TabsList>

          <div className="flex-grow overflow-y-auto">
            <TabsContent value="investors" className="h-full">
              <ReFiInvestors searchTerm={searchTerm} />
            </TabsContent>
            <TabsContent value="tech4good" className="h-full">
              <Tech4GoodJobs searchTerm={searchTerm} />
            </TabsContent>
            <TabsContent value="permaculture" className="h-full">
              <PermacultureFarms searchTerm={searchTerm} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Directory;