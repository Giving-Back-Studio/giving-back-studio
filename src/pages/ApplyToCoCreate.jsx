import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { toast } from 'sonner';
import ConfettiAnimation from '@/components/ConfettiAnimation';
import BuildServiceHeader from '@/components/BuildServiceHeader';
import BuildServiceBenefits from '@/components/BuildServiceBenefits';
import BuildServiceEligibility from '@/components/BuildServiceEligibility';
import BuildServiceGains from '@/components/BuildServiceGains';

const ApplyToCoCreate = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enterprise_name: '',
    enterprise_purpose: '',
    challenge: '',
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
        enterprise_purpose: '',
        challenge: '',
        growth_impact: ''
      });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    } catch (error) {
      toast.error(`Error submitting application: ${error.message}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue">
      <ConfettiAnimation show={showConfetti} />
      
      <div className="max-w-4xl w-full space-y-12">
        <BuildServiceHeader />
        <BuildServiceBenefits />
        <BuildServiceEligibility />
        <BuildServiceGains />

        <form onSubmit={handleSubmit} className="bg-white/10 rounded-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold mb-4">Apply to Co-Create</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your full name</label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
              placeholder="your.email@example.com"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
              required
            />
          </div>
          
          <div>
            <label htmlFor="enterprise_purpose" className="block text-sm font-medium mb-2">Enterprise Purpose</label>
            <Textarea
              id="enterprise_purpose"
              name="enterprise_purpose"
              placeholder="In 1 sentence, what is the purpose of this enterprise?"
              value={formData.enterprise_purpose}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
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
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
              rows={3}
              required
            />
          </div>
          
          <div>
            <label htmlFor="growth_impact" className="block text-sm font-medium mb-2">Growth Impact</label>
            <Textarea
              id="growth_impact"
              name="growth_impact"
              placeholder="If you could grow revenue exponentially, how would it serve humanity?"
              value={formData.growth_impact}
              onChange={handleChange}
              className="w-full bg-white/20 border-white/30 text-white placeholder-white"
              rows={3}
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-gbs-lightPurple hover:bg-gbs-lavender text-white py-3 text-lg">
            Submit application
          </Button>
        </form>

        <footer className="text-center space-y-4">
          <p className="text-xl">Join us and create purpose-aligned growth today. Your impact starts here.</p>
        </footer>
      </div>
    </div>
  );
};

export default ApplyToCoCreate;