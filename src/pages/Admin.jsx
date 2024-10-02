import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Tooltip } from "@/components/ui/tooltip";
import { Info, Check, X } from 'lucide-react';
import { useMovementCreatorOpportunities, useAddMovementCreatorOpportunity, useUpdateMovementCreatorOpportunity } from '@/integrations/supabase';

const Admin = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dataSource, setDataSource] = useState('');
  const [crawlResults, setCrawlResults] = useState([]);

  const { data: opportunities } = useMovementCreatorOpportunities();
  const addOpportunity = useAddMovementCreatorOpportunity();
  const updateOpportunity = useUpdateMovementCreatorOpportunity();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Connect to Python backend
    console.log({ keyword, category, startDate, endDate, dataSource });
    
    // Simulating crawl results for demonstration
    const mockResults = [
      { id: 1, title: 'New Opportunity 1', description: 'Description 1' },
      { id: 2, title: 'New Opportunity 2', description: 'Description 2' },
      { id: 3, title: 'New Opportunity 3', description: 'Description 3' },
    ];
    setCrawlResults(mockResults);
  };

  const handleApprove = async (opportunity) => {
    await addOpportunity.mutateAsync(opportunity);
    setCrawlResults(prevResults => prevResults.filter(result => result.id !== opportunity.id));
  };

  const handleReject = (opportunityId) => {
    setCrawlResults(prevResults => prevResults.filter(result => result.id !== opportunityId));
  };

  const handleApproveAll = async () => {
    for (const opportunity of crawlResults) {
      await addOpportunity.mutateAsync(opportunity);
    }
    setCrawlResults([]);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-light mb-8 text-white">Admin Dashboard</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="keyword" className="block text-sm font-medium text-white">
            Keyword
            <Tooltip content="Enter a specific term or phrase to focus the crawl">
              <Info className="inline-block ml-1 h-4 w-4" />
            </Tooltip>
          </label>
          <Input
            id="keyword"
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="category" className="block text-sm font-medium text-white">
            Category
            <Tooltip content="Select the type of data you want to crawl">
              <Info className="inline-block ml-1 h-4 w-4" />
            </Tooltip>
          </label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category" className="bg-white/10 border-white/30 text-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="investors">Investors</SelectItem>
              <SelectItem value="tech4good">Tech4Good Jobs</SelectItem>
              <SelectItem value="permaculture">Permaculture Farms</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Date Range
            <Tooltip content="Specify the time frame for the data you want to crawl (e.g., publication dates)">
              <Info className="inline-block ml-1 h-4 w-4" />
            </Tooltip>
          </label>
          <div className="flex space-x-4">
            <DatePicker
              selected={startDate}
              onChange={setStartDate}
              placeholderText="Start Date"
              className="bg-white/10 border-white/30 text-white placeholder-white/70"
            />
            <DatePicker
              selected={endDate}
              onChange={setEndDate}
              placeholderText="End Date"
              className="bg-white/10 border-white/30 text-white placeholder-white/70"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="dataSource" className="block text-sm font-medium text-white">
            Data Source
            <Tooltip content="Optionally specify a particular website or data source to crawl">
              <Info className="inline-block ml-1 h-4 w-4" />
            </Tooltip>
          </label>
          <Input
            id="dataSource"
            type="text"
            placeholder="Data Source (optional)"
            value={dataSource}
            onChange={(e) => setDataSource(e.target.value)}
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
          />
        </div>
        
        <Button type="submit" className="bg-gbs-purple hover:bg-gbs-purple/90 w-full">
          Start Crawl
        </Button>
      </form>

      {crawlResults.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-light mb-4 text-white">Crawl Results</h2>
          <Button onClick={handleApproveAll} className="mb-4 bg-green-500 hover:bg-green-600">
            Approve All
          </Button>
          <div className="space-y-4">
            {crawlResults.map((result) => (
              <div key={result.id} className="bg-white/10 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-white">{result.title}</h3>
                  <p className="text-sm text-white/70">{result.description}</p>
                </div>
                <div className="space-x-2">
                  <Button onClick={() => handleApprove(result)} className="bg-green-500 hover:bg-green-600">
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => handleReject(result.id)} className="bg-red-500 hover:bg-red-600">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;