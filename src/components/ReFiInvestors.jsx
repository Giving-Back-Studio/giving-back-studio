import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapeReFiInvestors } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';

const ReFiInvestors = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const { data: investors = [], isLoading, error } = useQuery({
    queryKey: ['refiInvestors'],
    queryFn: scrapeReFiInvestors,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filteredInvestors = investors.filter(investor => 
    investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investor.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredInvestors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInvestors = filteredInvestors.slice(startIndex, endIndex);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {currentInvestors.map((investor) => (
          <Card key={investor.id} className="bg-white/10">
            <CardHeader>
              <CardTitle>{investor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{investor.description}</p>
              <a href={investor.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Learn More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ReFiInvestors;