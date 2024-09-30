import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapeSocialEnterprises } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredEnterprises.map((enterprise) => (
        <Card key={enterprise.id} className="bg-white/10">
          <CardHeader>
            <CardTitle>{enterprise.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2">{enterprise.description}</p>
            <a href={enterprise.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              Learn More
            </a>
            <p className="text-xs mt-2 text-gray-400">Posted: {new Date(enterprise.createdAt).toLocaleDateString()}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SocialEnterprises;