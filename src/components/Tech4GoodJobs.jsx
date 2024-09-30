import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapeTech4GoodJobs } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

const Tech4GoodJobs = ({ searchTerm }) => {
  const { data: jobs = [], isLoading, error } = useQuery({
    queryKey: ['tech4GoodJobs'],
    queryFn: scrapeTech4GoodJobs,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  const filteredJobs = jobs.filter(job => 
    job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin text-white" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredJobs.map((job) => (
        <Card key={job.id} className="bg-white/20 hover:bg-white/30 transition-colors">
          <CardHeader>
            <CardTitle className="text-lg text-white">{job.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2 text-white">{job.description}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline text-sm">
              Learn More
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Tech4GoodJobs;