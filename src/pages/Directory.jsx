import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import Tech4GoodJobs from '@/components/Tech4GoodJobs';
import ReFiInvestors from '@/components/ReFiInvestors';
import PermacultureFarms from '@/components/PermacultureFarms';
import SocialEnterprises from '@/components/SocialEnterprises';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Loader2 } from 'lucide-react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentTab, setCurrentTab] = useState('tech4good');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
        <Card className="bg-white/10 backdrop-blur-md p-8 rounded-xl mb-8">
          <h1 className="text-4xl font-light mb-8">Social Enterprise Directory</h1>
          
          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Search directory..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-white/20 border-white/30 text-white placeholder-white/70 pl-10 pr-4 py-2 rounded-full w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>

          <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-4">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2">
              <TabsTrigger value="tech4good" className="data-[state=active]:bg-gbs-purple">Tech4Good Jobs</TabsTrigger>
              <TabsTrigger value="refi" className="data-[state=active]:bg-gbs-purple">ReFi Investors</TabsTrigger>
              <TabsTrigger value="permaculture" className="data-[state=active]:bg-gbs-purple">Permaculture Farms</TabsTrigger>
              <TabsTrigger value="socialEnterprises" className="data-[state=active]:bg-gbs-purple">Social Enterprises</TabsTrigger>
            </TabsList>
            <CardContent className="p-4 bg-white/5 rounded-lg">
              <TabsContent value="tech4good">
                <Tech4GoodJobs searchTerm={searchTerm} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
              </TabsContent>
              <TabsContent value="refi">
                <ReFiInvestors searchTerm={searchTerm} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
              </TabsContent>
              <TabsContent value="permaculture">
                <PermacultureFarms searchTerm={searchTerm} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
              </TabsContent>
              <TabsContent value="socialEnterprises">
                <SocialEnterprises searchTerm={searchTerm} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </main>
    </div>
  );
};

export default Directory;