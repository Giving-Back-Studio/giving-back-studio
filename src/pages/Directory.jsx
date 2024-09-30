import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import ReFiInvestors from '@/components/ReFiInvestors';
import PermacultureFarms from '@/components/PermacultureFarms';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState('tech4good');

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
        <h1 className="text-4xl font-light mb-8">Social Enterprise Directory</h1>
        
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search directory..."
            value={searchTerm}
            onChange={handleSearch}
            className="bg-white/20 border-white/30 text-white placeholder-white/70"
          />
        </div>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tech4good">Tech4Good Jobs</TabsTrigger>
            <TabsTrigger value="refi">ReFi Investors</TabsTrigger>
            <TabsTrigger value="permaculture">Permaculture Farms</TabsTrigger>
          </TabsList>
          <TabsContent value="tech4good">
            <Tech4GoodJobs searchTerm={searchTerm} />
          </TabsContent>
          <TabsContent value="refi">
            <ReFiInvestors searchTerm={searchTerm} />
          </TabsContent>
          <TabsContent value="permaculture">
            <PermacultureFarms searchTerm={searchTerm} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Directory;