import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from 'lucide-react';
import ReFiInvestors from '@/components/ReFiInvestors';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import PermacultureFarms from '@/components/PermacultureFarms';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('investors');
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    
    if (search) {
      setSearchTerm(search);
    }
    
    if (category) {
      setActiveTab(category);
    }
  }, [location]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0 sticky top-0 z-10 pb-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-white">Human-Centered Innovation Directory</h1>
        
        <div className="mb-8 flex justify-between items-center">
          <div className="relative w-full md:w-64">
            <Input
              type="text"
              placeholder="Search directory..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-transparent border-white/30 text-white placeholder-white rounded-full w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
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