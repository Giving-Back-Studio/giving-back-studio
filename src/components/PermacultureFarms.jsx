import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapePermacultureFarms } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

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

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredFarms.map((farm) => (
        <Card key={farm.id} className="bg-white/10 hover:bg-white/20 transition-colors">
          <CardHeader>
            <CardTitle className="text-lg">{farm.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">{farm.description}</p>
            <a href={farm.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
              Learn More
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PermacultureFarms;