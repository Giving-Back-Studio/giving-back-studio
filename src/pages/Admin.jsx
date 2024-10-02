import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";

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
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Enter keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="bg-white/10 border-white/30 text-white placeholder-white/70"
        />
        
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="bg-white/10 border-white/30 text-white">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="investors">Investors</SelectItem>
            <SelectItem value="tech4good">Tech4Good Jobs</SelectItem>
            <SelectItem value="permaculture">Permaculture Farms</SelectItem>
          </SelectContent>
        </Select>
        
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
        
        <Input
          type="text"
          placeholder="Data Source (optional)"
          value={dataSource}
          onChange={(e) => setDataSource(e.target.value)}
          className="bg-white/10 border-white/30 text-white placeholder-white/70"
        />
        
        <Button type="submit" className="bg-gbs-purple hover:bg-gbs-purple/90">
          Start Crawl
        </Button>
      </form>
    </div>
  );
};

export default Admin;