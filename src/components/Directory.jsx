import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Loader2 } from 'lucide-react';

const Directory = ({ ListComponent }) => {
  const [searchTerm, setSearchTerm] = useState('');
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
    <Card className="bg-white/10 backdrop-blur-md p-8 rounded-xl mb-8">
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

      <CardContent className="p-4 bg-white/5 rounded-lg">
        <ListComponent
          searchTerm={searchTerm}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </CardContent>
    </Card>
  );
};

export default Directory;