import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase';
import { toast } from 'sonner';
import CosmicAnimation from '@/components/CosmicAnimation';
import CTAButton from '@/components/CTAButton';
import { Command, CommandInput } from "@/components/ui/command";

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
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-80px)] p-8 md:space-x-12">
      {showCosmic && <CosmicAnimation />}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Grow your regenerative social enterprise" />
        </Command>
        <p className="text-xl mt-4 font-light">
          Insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
        </p>
      </div>

      <div className="w-full md:w-1/2 bg-white/10 p-8 rounded-xl">
        <h2 className="text-2xl font-light mb-6">Every Wednesday, you'll get:</h2>
        <ul className="space-y-4 mb-8">
          <li className="flex items-center text-lg">
            <CheckCircle className="text-green-400 mr-4 flex-shrink-0" size={24} />
            <span>A practical lesson about growing cooperative social enterprises</span>
          </li>
          <li className="flex items-center text-lg">
            <CheckCircle className="text-green-400 mr-4 flex-shrink-0" size={24} />
            <span>New tools to grow and scale your impact</span>
          </li>
          <li className="flex items-center text-lg">
            <CheckCircle className="text-green-400 mr-4 flex-shrink-0" size={24} />
            <span>Invitations to exclusive events and conversations</span>
          </li>
        </ul>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Your email"
            className="form-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CTAButton type="submit" className="w-full">
            Subscribe to inspiring innovations
          </CTAButton>
        </form>
      </div>
    </div>
  );
};

export default InspiringInnovations;