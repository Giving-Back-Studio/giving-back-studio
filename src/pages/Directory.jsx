import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
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
    <div className="min-h-screen bg-gradient-to-b from-gbs-purple to-gbs-blue text-white flex flex-col font-sans">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Logo />
        <nav>
          <Link to="/" className="text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <Card className="bg-white/20 backdrop-blur-md p-8 rounded-xl mb-8">
          <h1 className="text-4xl font-light mb-8 text-white">Social Enterprise Directory</h1>
          
          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Search directory..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-white/30 border-white/50 text-white placeholder-white/70 pl-10 pr-4 py-2 rounded-full w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 gap-2">
              <TabsTrigger value="investors" className="data-[state=active]:bg-gbs-purple text-white">Conscious Capital Investors</TabsTrigger>
              <TabsTrigger value="tech4good" className="data-[state=active]:bg-gbs-purple text-white">Tech4Good Jobs</TabsTrigger>
              <TabsTrigger value="permaculture" className="data-[state=active]:bg-gbs-purple text-white">Permaculture Farms</TabsTrigger>
            </TabsList>
            <CardContent className="p-4 bg-white/10 rounded-lg">
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
      </main>
    </div>
  );
};

export default Directory;