import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase';
import { toast } from 'sonner';
import CosmicAnimation from '@/components/CosmicAnimation';

const InspiringInnovations = () => {
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
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] p-8">
      {showCosmic && <CosmicAnimation />}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl font-light mb-4 leading-tight">
          Grow your regenerative social enterprise
        </h1>
        <p className="text-xl mb-4 font-light">
          Insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
        </p>
      </div>

      <div className="w-full md:w-1/2 bg-white/10 p-8 rounded-xl">
        <h2 className="text-2xl font-light mb-6">Every Monday, you'll get:</h2>
        <ul className="space-y-4 mb-8">
          {[
            "A practical Integrative Organizing lesson",
            "New tools to grow and scale your impact",
            "Invitations to exclusive events and conversations"
          ].map((benefit, index) => (
            <li key={index} className="flex items-center text-lg">
              <CheckCircle className="text-green-400 mr-4 flex-shrink-0" size={24} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email"
            className="bg-white/20 border-white/30 text-white placeholder-white/70 text-lg py-3"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3">
            Subscribe to inspiring innovations
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InspiringInnovations;