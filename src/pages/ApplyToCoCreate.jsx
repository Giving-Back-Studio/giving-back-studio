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
    challenge: '',
    growth_value: ''
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
        challenge: '',
        growth_value: ''
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
    } catch (error) {
      toast.error(`Error submitting application: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full p-4 text-white">
      <ConfettiAnimation show={showConfetti} />
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
            placeholder="[Your full name]"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="[your.email@example.com]"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="enterprise_name" className="block text-sm font-medium mb-2">Enterprise Name</label>
          <Input
            id="enterprise_name"
            name="enterprise_name"
            type="text"
            placeholder="[Your enterprise name]"
            value={formData.enterprise_name}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium mb-2">Enterprise Purpose</label>
          <Textarea
            id="purpose"
            name="purpose"
            placeholder="[In 1 sentence, what is the purpose of this enterprise?]"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white"
            rows={2}
            required
          />
        </div>
        
        <div>
          <label htmlFor="challenge" className="block text-sm font-medium mb-2">Challenge</label>
          <Textarea
            id="challenge"
            name="challenge"
            placeholder="[What is your biggest challenge right now as a social enterprise creator?]"
            value={formData.challenge}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white"
            rows={2}
            required
          />
        </div>
        
        <div>
          <label htmlFor="growth_value" className="block text-sm font-medium mb-2">Growth Impact</label>
          <Textarea
            id="growth_value"
            name="growth_value"
            placeholder="[If you could grow revenue exponentially, how would it serve humanity?]"
            value={formData.growth_value}
            onChange={handleChange}
            className="w-full bg-transparent border-white/30 text-white placeholder-white"
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