import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ApplyToCoCreate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 text-center">
        Apply to Co-Create
      </h1>
      
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6 bg-transparent border border-white/30 rounded-lg p-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
          <Input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="project" className="block text-sm font-medium mb-2">Project Idea</label>
          <Textarea
            id="project"
            placeholder="Describe your project idea"
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            rows={4}
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-white text-gbs-purple hover:bg-white/90">
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default ApplyToCoCreate;