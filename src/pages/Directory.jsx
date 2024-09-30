import React, { useState } from 'react';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import ReFiInvestors from '@/components/ReFiInvestors';
import PermacultureFarms from '@/components/PermacultureFarms';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from 'lucide-react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState('investors');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Card className="bg-white/30 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl mb-8">
      <h1 className="text-3xl sm:text-4xl font-light mb-6 sm:mb-8 text-white">Humanity-Centered Innovation Directory</h1>
      
      <div className="relative mb-6 sm:mb-8">
        <Input
          type="text"
          placeholder="Search directory..."
          value={searchTerm}
          onChange={handleSearch}
          className="bg-white/50 border-white/70 text-black placeholder-gray-600 pl-10 pr-4 py-2 rounded-full w-full"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 bg-white/20">
          <TabsTrigger 
            value="investors" 
            className="data-[state=active]:bg-white data-[state=active]:text-gbs-purple text-white hover:bg-white/40 transition-colors"
          >
            Conscious Capital Investors
          </TabsTrigger>
          <TabsTrigger 
            value="tech4good" 
            className="data-[state=active]:bg-white data-[state=active]:text-gbs-purple text-white hover:bg-white/40 transition-colors"
          >
            Tech4Good Jobs
          </TabsTrigger>
          <TabsTrigger 
            value="permaculture" 
            className="data-[state=active]:bg-white data-[state=active]:text-gbs-purple text-white hover:bg-white/40 transition-colors"
          >
            Permaculture Farms
          </TabsTrigger>
        </TabsList>
        <CardContent className="p-4 bg-white/20 rounded-lg">
          <TabsContent value="investors">
            <ReFiInvestors searchTerm={searchTerm} />
          </TabsContent>
          <TabsContent value="tech4good">
            <Tech4GoodJobs searchTerm={searchTerm} />
          </TabsContent>
          <TabsContent value="permaculture">
            <PermacultureFarms searchTerm={searchTerm} />
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  );
};

export default Directory;