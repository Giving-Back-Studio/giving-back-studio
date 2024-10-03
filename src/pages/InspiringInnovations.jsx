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
    <>
      {showCosmic && <CosmicAnimation />}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 xl:gap-16">
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight">
            Grow your regenerative social enterprise
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 font-light">
            Insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-transparent border border-white/30 p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-4 sm:mb-6 md:mb-8">Every Monday, you'll get:</h2>
          <ul className="space-y-2 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
            {[
              "A practical Integrative Organizing lesson",
              "New tools to grow and scale your impact",
              "Invitations to exclusive events and conversations"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center text-sm sm:text-base md:text-lg">
                <CheckCircle className="text-green-400 mr-2 sm:mr-3 md:mr-4 flex-shrink-0" size={20} />
                <span className="font-light">{benefit}</span>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-white/30 text-white placeholder-white/70 text-sm sm:text-base md:text-lg py-2 md:py-3"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full bg-white text-gbs-purple hover:bg-white/90 text-sm sm:text-base md:text-lg py-2 md:py-3">
              Subscribe to inspiring innovations
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InspiringInnovations;