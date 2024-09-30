import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapeReFiInvestors } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

const ReFiInvestors = ({ searchTerm, currentPage, itemsPerPage, onPageChange }) => {
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
  const paginatedInvestors = filteredInvestors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {paginatedInvestors.map((investor) => (
          <Card key={investor.id} className="bg-white/10 hover:bg-white/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">{investor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{investor.description}</p>
              <a href={investor.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                Learn More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span className="py-2 px-4 bg-white/10 rounded">{currentPage} of {totalPages}</span>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ReFiInvestors;