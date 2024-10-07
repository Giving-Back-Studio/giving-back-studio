import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapeAlignedInvestors, scrapePermacultureFarms, scrapePublicGoodGrants, scrapeWeb3Grants, generateCSV } from '@/utils/scraper';
import { Button } from "@/components/ui/button";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('investors');
  const [displayData, setDisplayData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const category = searchParams.get('category');
    if (category) {
      setActiveTab(category);
    }
  }, [location]);

  useEffect(() => {
    updateDisplayData();
  }, [activeTab, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const updateDisplayData = () => {
    switch (activeTab) {
      case 'investors':
        setDisplayData(scrapeAlignedInvestors(searchTerm));
        break;
      case 'permaculture':
        setDisplayData(scrapePermacultureFarms(searchTerm));
        break;
      case 'grants':
        setDisplayData(scrapePublicGoodGrants(searchTerm));
        break;
      case 'web3grants':
        setDisplayData(scrapeWeb3Grants(searchTerm));
        break;
      default:
        setDisplayData([]);
    }
  };

  const handleExportCSV = () => {
    const csvContent = generateCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'human_centered_innovation_directory.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light mb-8 text-white">Humanity-centered innovation directory</h1>
      
      <div className="mb-8 flex justify-between items-center">
        <div className="relative w-full max-w-2xl">
          <Input
            type="text"
            placeholder="Search directory..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border-white/30 text-white placeholder-white/70 rounded-full text-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" size={24} />
        </div>
        <Button onClick={handleExportCSV} className="ml-4">Export CSV</Button>
      </div>

      <div className="mb-8">
        <button
          onClick={() => setActiveTab('investors')}
          className={`mr-4 pb-2 ${activeTab === 'investors' ? 'border-b-2 border-white' : ''}`}
        >
          Aligned Investors
        </button>
        <button
          onClick={() => setActiveTab('permaculture')}
          className={`mr-4 pb-2 ${activeTab === 'permaculture' ? 'border-b-2 border-white' : ''}`}
        >
          Permaculture Farms
        </button>
        <button
          onClick={() => setActiveTab('grants')}
          className={`mr-4 pb-2 ${activeTab === 'grants' ? 'border-b-2 border-white' : ''}`}
        >
          Public Good Grants
        </button>
        <button
          onClick={() => setActiveTab('web3grants')}
          className={`mr-4 pb-2 ${activeTab === 'web3grants' ? 'border-b-2 border-white' : ''}`}
        >
          Web3 Grants
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayData.map((item) => (
          <Card key={item.id} className="bg-white/10 hover:bg-white/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg text-white">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2 text-white">{item.description}</p>
              <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 hover:underline text-sm font-medium">
                Learn More
              </a>
              <div className="mt-2">
                {item.tags.map((tag, index) => (
                  <span key={index} className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full mr-2 mb-2">{tag}</span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white/10 rounded-lg text-center">
        <h2 className="text-2xl font-light mb-4">Want to keep track of these opportunities?</h2>
        <p className="mb-4">Sign up for a more personalized experience and save your results.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors text-lg">
          Join to co-create
        </button>
      </div>
    </div>
  );
};

export default Directory;