import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapeTech4GoodJobs } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

const Tech4GoodJobs = ({ searchTerm, currentPage, itemsPerPage, onPageChange }) => {
  const { data: jobs = [], isLoading, error } = useQuery({
    queryKey: ['tech4GoodJobs'],
    queryFn: scrapeTech4GoodJobs,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filteredJobs = jobs.filter(job => 
    job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {paginatedJobs.map((job) => (
          <Card key={job.id} className="bg-white/10 hover:bg-white/20 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg">{job.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{job.description}</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                Learn More
              </a>
              <p className="text-xs mt-2 text-gray-400">Posted: {new Date(job.createdAt).toLocaleDateString()}</p>
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

export default Tech4GoodJobs;