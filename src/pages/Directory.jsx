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
    <Card className="bg-white/30 backdrop-blur-md p-6 md:p-8 lg:p-10 rounded-xl mb-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-10 text-white">Humanity-Centered Innovation Directory</h1>
      
      <div className="relative mb-8 md:mb-10 max-w-2xl mx-auto">
        <Input
          type="text"
          placeholder="Search directory..."
          value={searchTerm}
          onChange={handleSearch}
          className="bg-white/50 border-white/70 text-black placeholder-gray-600 pl-12 pr-4 py-3 rounded-full w-full text-lg"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-6 h-6" />
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-4 bg-white/20 p-2 rounded-lg">
          <TabsTrigger 
            value="investors" 
            className="data-[state=active]:bg-white data-[state=active]:text-gbs-purple text-white hover:bg-white/40 transition-colors py-3 text-lg"
          >
            Conscious Capital Investors
          </TabsTrigger>
          <TabsTrigger 
            value="tech4good" 
            className="data-[state=active]:bg-white data-[state=active]:text-gbs-purple text-white hover:bg-white/40 transition-colors py-3 text-lg"
          >
            Tech4Good Jobs
          </TabsTrigger>
          <TabsTrigger 
            value="permaculture" 
            className="data-[state=active]:bg-white data-[state=active]:text-gbs-purple text-white hover:bg-white/40 transition-colors py-3 text-lg"
          >
            Permaculture Farms
          </TabsTrigger>
        </TabsList>
        <CardContent className="p-6 md:p-8 bg-white/20 rounded-lg">
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