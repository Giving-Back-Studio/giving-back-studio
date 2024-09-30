import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapeReFiInvestors } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

const ReFiInvestors = ({ searchTerm }) => {
  const { data: investors = [], isLoading, error } = useQuery({
    queryKey: ['refiInvestors'],
    queryFn: scrapeReFiInvestors,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filteredInvestors = investors.filter(investor => 
    investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    investor.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredInvestors.map((investor) => (
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
  );
};

export default ReFiInvestors;