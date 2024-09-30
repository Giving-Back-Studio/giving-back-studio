import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateMockDatasets } from '@/utils/mockDataGenerator';

const Tech4GoodJobs = ({ searchTerm }) => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchJobs = async () => {
      const allData = generateMockDatasets();
      const tech4GoodJobs = allData.filter(item => item.category === 'tech4good');

      const filteredJobs = tech4GoodJobs.filter(job => 
        job.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setTotalPages(Math.ceil(filteredJobs.length / itemsPerPage));
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setJobs(filteredJobs.slice(startIndex, endIndex));
    };

    fetchJobs();
  }, [searchTerm, currentPage]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {jobs.map((job) => (
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