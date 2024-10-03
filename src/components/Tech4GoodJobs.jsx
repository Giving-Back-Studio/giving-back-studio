import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { scrapeTech4GoodJobs } from '@/utils/scraper';
import { useQuery } from '@tanstack/react-query';
import { Loader2, ExternalLink } from 'lucide-react';

const Tech4GoodJobs = ({ searchTerm }) => {
  const { data: jobs = [], isLoading, error } = useQuery({
    queryKey: ['tech4GoodJobs', searchTerm],
    queryFn: () => scrapeTech4GoodJobs(searchTerm),
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  if (isLoading) return <div className="flex justify-center items-center h-64"><Loader2 className="w-8 h-8 animate-spin text-white" /></div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {jobs.map((job) => (
        <Card key={job.id} className="bg-transparent border border-white/30 hover:bg-white/10 transition-colors relative">
          <CardHeader>
            <CardTitle className="text-lg text-white">{job.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-2 text-white">{job.description}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="absolute top-2 right-2 text-blue-300 hover:text-blue-100">
              <ExternalLink size={20} />
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Tech4GoodJobs;