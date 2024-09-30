import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Tech4GoodJobs = () => {
  const jobs = [
    { title: "Frontend Developer", company: "EcoTech Solutions" },
    { title: "Data Analyst", company: "SocialImpact AI" },
    { title: "UX Designer", company: "GreenEnergy App" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tech4Good Jobs</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {jobs.map((job, index) => (
            <li key={index} className="bg-white/10 p-2 rounded">
              <p className="font-semibold">{job.title}</p>
              <p className="text-sm">{job.company}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Tech4GoodJobs;