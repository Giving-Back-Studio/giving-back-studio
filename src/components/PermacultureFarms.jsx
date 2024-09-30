import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapePermacultureFarms } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';

const PermacultureFarms = ({ searchTerm }) => {
  const { data: farms = [], isLoading, error } = useQuery({
    queryKey: ['permacultureFarms'],
    queryFn: scrapePermacultureFarms,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filteredFarms = farms.filter(farm => 
    farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farm.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredFarms.map((farm) => (
        <Card key={farm.id} className="bg-white/10">
          <CardHeader>
            <CardTitle>{farm.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">{farm.description}</p>
            <a href={farm.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Learn More
            </a>
            <p className="text-xs mt-2 text-gray-400">Posted: {new Date(farm.createdAt).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PermacultureFarms;