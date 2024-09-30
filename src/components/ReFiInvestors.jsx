import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ReFiInvestors = () => {
  const investors = [
    { name: "GreenFund Capital", focus: "Renewable Energy" },
    { name: "Sustainable Futures VC", focus: "Circular Economy" },
    { name: "EcoInnovate Investments", focus: "Clean Technology" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>ReFi Investors</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {investors.map((investor, index) => (
            <li key={index} className="bg-white/10 p-2 rounded">
              <p className="font-semibold">{investor.name}</p>
              <p className="text-sm">Focus: {investor.focus}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ReFiInvestors;