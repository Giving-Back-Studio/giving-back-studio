import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapeSocialEnterprises } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

const SocialEnterprises = ({ searchTerm, currentPage, itemsPerPage, onPageChange }) => {
  const { data: enterprises = [], isLoading, error } = useQuery({
    queryKey: ['socialEnterprises'],
    queryFn: scrapeSocialEnterprises,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filteredEnterprises = enterprises.filter(enterprise => 
    enterprise.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    enterprise.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEnterprises.length / itemsPerPage);
  const paginatedEnterprises = filteredEnterprises.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {paginatedEnterprises.map((enterprise) => (
          <Card key={enterprise.id} className="bg-white/10 hover:bg-white/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">{enterprise.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{enterprise.description}</p>
              <a href={enterprise.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                Learn More
              </a>
              <p className="text-xs mt-2 text-gray-400">Posted: {new Date(enterprise.createdAt).toLocaleDateString()}</p>
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

export default SocialEnterprises;