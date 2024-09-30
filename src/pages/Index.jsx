import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase';
import { toast } from 'sonner';
import CosmicAnimation from '@/components/CosmicAnimation';

const Index = () => {
  const [email, setEmail] = useState('');
  const [showCosmic, setShowCosmic] = useState(false);
  const addInspiringInnovationListItem = useAddInspiringInnovationListItem();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addInspiringInnovationListItem.mutateAsync({ email });
      toast.success('Thank you for subscribing!');
      setEmail('');
      setShowCosmic(true);
      setTimeout(() => setShowCosmic(false), 5000);
    } catch (error) {
      console.error('Error adding email to list:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {showCosmic && <CosmicAnimation />}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Grow your regenerative social enterprise
          </h1>
          <p className="text-lg md:text-xl mb-6 font-light">
            Insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
          </p>
        </div>

        <div className="w-full md:w-1/2 bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-xl">
          <h2 className="text-xl md:text-2xl font-light mb-6">Every Monday, you'll get:</h2>
          <ul className="space-y-4 mb-6">
            {[
              "A practical Integrative Organizing lesson",
              "New tools to grow and scale your impact",
              "Invitations to exclusive events and conversations"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="text-green-400 mr-2 flex-shrink-0" />
                <span className="font-light">{benefit}</span>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/30 border-white/50 text-white placeholder-white/70"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full bg-gbs-purple hover:bg-gbs-purple/90">
              Subscribe to inspiring innovations
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;