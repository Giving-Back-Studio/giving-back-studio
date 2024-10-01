import React, { useState } from 'react';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import ReFiInvestors from '@/components/ReFiInvestors';
import PermacultureFarms from '@/components/PermacultureFarms';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState('investors');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white">Humanity-Centered Innovation Directory</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="mb-4 md:mb-0">
          <TabsList className="bg-transparent border-b border-white/20">
            <TabsTrigger 
              value="investors" 
              className="text-white/70 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white bg-transparent"
            >
              Investors
            </TabsTrigger>
            <TabsTrigger 
              value="tech4good" 
              className="text-white/70 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white bg-transparent"
            >
              Tech4Good Jobs
            </TabsTrigger>
            <TabsTrigger 
              value="permaculture" 
              className="text-white/70 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-white bg-transparent"
            >
              Permaculture Farms
            </TabsTrigger>
          </TabsList>
        </Tabs>

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

      <TabsContent value="investors">
        <ReFiInvestors searchTerm={searchTerm} />
      </TabsContent>
      <TabsContent value="tech4good">
        <Tech4GoodJobs searchTerm={searchTerm} />
      </TabsContent>
      <TabsContent value="permaculture">
        <PermacultureFarms searchTerm={searchTerm} />
      </TabsContent>
    </div>
  );
};

export default Directory;