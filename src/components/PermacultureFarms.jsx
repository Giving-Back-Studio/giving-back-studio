import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PermacultureFarms = ({ searchTerm }) => {
  const [farms, setFarms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchFarms = async () => {
      // Simulating an API call with 1000+ items
      const allFarms = Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        name: `Permaculture Farm ${i + 1}`,
        location: `Location ${i + 1}`,
        description: `This is a description for Permaculture Farm ${i + 1}`,
      }));

      const filteredFarms = allFarms.filter(farm => 
        farm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farm.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farm.description.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setTotalPages(Math.ceil(filteredFarms.length / itemsPerPage));
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setFarms(filteredFarms.slice(startIndex, endIndex));
    };

    fetchFarms();
  }, [searchTerm, currentPage]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        {farms.map((farm) => (
          <Card key={farm.id} className="bg-white/10">
            <CardHeader>
              <CardTitle>{farm.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2">Location: {farm.location}</p>
              <p className="text-sm">{farm.description}</p>
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

export default PermacultureFarms;