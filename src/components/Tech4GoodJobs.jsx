import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { scrapeTech4GoodJobs } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';

const Tech4GoodJobs = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {currentJobs.map((job) => (
          <Card key={job.id} className="bg-white/10">
            <CardHeader>
              <CardTitle>{job.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{job.description}</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Learn More
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span>Page {currentPage} of {totalPages}</span>
        <Button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Tech4GoodJobs;