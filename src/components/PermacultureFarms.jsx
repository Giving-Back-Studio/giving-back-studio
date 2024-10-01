import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapePermacultureFarms } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2, ExternalLink } from 'lucide-react';

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

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin text-white" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredFarms.map((farm) => (
        <Card key={farm.id} className="bg-white/20 hover:bg-white/30 transition-colors relative">
          <CardHeader>
            <CardTitle className="text-lg text-white">{farm.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2 text-white">{farm.description}</p>
            <a href={farm.link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 text-blue-300 hover:text-blue-100">
              <ExternalLink size={20} />
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PermacultureFarms;