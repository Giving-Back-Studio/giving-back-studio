import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Tooltip } from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

const Admin = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dataSource, setDataSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect to Python backend
    console.log({ keyword, category, startDate, endDate, dataSource });
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
    </div>
  );
};

export default Admin;