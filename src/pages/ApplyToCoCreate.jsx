import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { toast } from 'sonner';
import ConfettiAnimation from '@/components/ConfettiAnimation';

const ApplyToCoCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enterprise_name: '',
    purpose: '',
    growth_impact: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const addApplication = useAddApplication();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addApplication.mutateAsync(formData);
      toast.success('Application submitted successfully!');
      setFormData({
        name: '',
        email: '',
        enterprise_name: '',
        purpose: '',
        growth_impact: ''
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } catch (error) {
      toast.error(`Error submitting application: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-8 text-white">
      <ConfettiAnimation show={showConfetti} />
      <h1 className="text-5xl font-light mb-8 text-center">
        Join to co-create
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Join us in building a future of sustainable innovation. Apply to co-create with Giving Back Studio and collaborate on projects that make a lasting impact. Together, we can drive meaningful change through humanity-centered solutions.
      </p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6 bg-white/10 rounded-lg p-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="enterprise_name" className="block text-sm font-medium mb-2">Enterprise name</label>
          <Input
            id="enterprise_name"
            name="enterprise_name"
            type="text"
            value={formData.enterprise_name}
            onChange={handleChange}
            className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
            required
          />
        </div>
        
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium mb-2">Purpose</label>
          <Textarea
            id="purpose"
            name="purpose"
            placeholder="Tell us what drives you and your project. What is your core mission?"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
            rows={3}
            required
          />
        </div>
        
        <div>
          <label htmlFor="growth_impact" className="block text-sm font-medium mb-2">Growth Impact</label>
          <Textarea
            id="growth_impact"
            name="growth_impact"
            placeholder="How will your project create meaningful change? Share the potential impact on your community or industry."
            value={formData.growth_impact}
            onChange={handleChange}
            className="w-full bg-white/20 border-white/30 text-white placeholder-white/70"
            rows={4}
            required
          />
        </div>
        
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg">
          Submit application
        </Button>
      </form>
    </div>
  );
};

export default ApplyToCoCreate;