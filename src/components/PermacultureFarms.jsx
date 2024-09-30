import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PermacultureFarms = () => {
  const farms = [
    { name: "Harmony Acres", location: "California, USA" },
    { name: "EcoVillage Gardens", location: "Victoria, Australia" },
    { name: "Sustainable Roots Farm", location: "Costa Rica" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Permaculture Farms</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {farms.map((farm, index) => (
            <li key={index} className="bg-white/10 p-2 rounded">
              <p className="font-semibold">{farm.name}</p>
              <p className="text-sm">{farm.location}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PermacultureFarms;