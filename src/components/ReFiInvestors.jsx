import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateMockDatasets } from '@/utils/mockDataGenerator';

const ReFiInvestors = ({ searchTerm }) => {
  const [investors, setInvestors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchInvestors = async () => {
      const allData = generateMockDatasets();
      const reFiInvestors = allData.filter(item => item.category === 'refi');

      const filteredInvestors = reFiInvestors.filter(investor => 
        investor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        investor.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setTotalPages(Math.ceil(filteredInvestors.length / itemsPerPage));
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setInvestors(filteredInvestors.slice(startIndex, endIndex));
    };

    fetchInvestors();
  }, [searchTerm, currentPage]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {investors.map((investor) => (
          <Card key={investor.id} className="bg-white/10">
            <CardHeader>
              <CardTitle>{investor.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">{investor.description}</p>
              <a href={investor.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
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

export default ReFiInvestors;