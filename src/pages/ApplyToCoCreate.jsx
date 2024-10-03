import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ApplyToCoCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enterpriseName: '',
    enterprisePurpose: '',
    challenge: '',
    growthImpact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
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
            name="name"
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="enterpriseName" className="block text-sm font-medium mb-2">Enterprise Name</label>
          <Input
            id="enterpriseName"
            name="enterpriseName"
            type="text"
            placeholder="Your enterprise name"
            value={formData.enterpriseName}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="enterprisePurpose" className="block text-sm font-medium mb-2">Enterprise Purpose</label>
          <Textarea
            id="enterprisePurpose"
            name="enterprisePurpose"
            placeholder="In 1 sentence, what is the purpose of this enterprise?"
            value={formData.enterprisePurpose}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            rows={2}
            required
          />
        </div>
        
        <div>
          <label htmlFor="challenge" className="block text-sm font-medium mb-2">Challenge</label>
          <Textarea
            id="challenge"
            name="challenge"
            placeholder="What is your biggest challenge right now as a social enterprise creator?"
            value={formData.challenge}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label htmlFor="growthImpact" className="block text-sm font-medium mb-2">Growth Impact</label>
          <Textarea
            id="growthImpact"
            name="growthImpact"
            placeholder="If you could grow revenue exponentially, how would it serve humanity?"
            value={formData.growthImpact}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white/70"
            rows={3}
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