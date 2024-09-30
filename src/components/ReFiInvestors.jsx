import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapeReFiInvestors } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredInvestors.map((investor) => (
        <Card key={investor.id} className="bg-white/10">
          <CardHeader>
            <CardTitle>{investor.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">{investor.description}</p>
            <a href={investor.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Learn More
            </a>
            <p className="text-xs mt-2 text-gray-400">Posted: {new Date(investor.createdAt).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReFiInvestors;