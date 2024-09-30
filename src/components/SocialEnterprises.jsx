import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapeSocialEnterprises } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

const SocialEnterprises = ({ searchTerm }) => {
  const { data: enterprises = [], isLoading, error } = useQuery({
    queryKey: ['socialEnterprises'],
    queryFn: scrapeSocialEnterprises,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filteredEnterprises = enterprises.filter(enterprise => 
    enterprise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enterprise.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin text-white" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredEnterprises.map((enterprise) => (
        <Card key={enterprise.id} className="bg-white/20 hover:bg-white/30 transition-colors">
          <CardHeader>
            <CardTitle className="text-lg text-white">{enterprise.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2 text-white">{enterprise.description}</p>
            <a href={enterprise.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 hover:underline text-sm font-medium">
              Learn More
            </a>
            <p className="text-xs mt-2 text-gray-300">Posted: {new Date(enterprise.createdAt).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SocialEnterprises;