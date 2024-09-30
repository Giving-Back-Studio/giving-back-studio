import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase';
import { toast } from 'sonner';
import CosmicAnimation from '@/components/CosmicAnimation';
import { Link } from 'react-router-dom';

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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight">
            Grow your regenerative social enterprise
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6 font-light">
            Insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
          </p>
        </div>

        <div className="w-full lg:w-1/2 bg-white/20 backdrop-blur-md p-6 md:p-8 rounded-xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6">Every Monday, you'll get:</h2>
          <ul className="space-y-4 mb-8">
            {[
              "A practical Integrative Organizing lesson",
              "New tools to grow and scale your impact",
              "Invitations to exclusive events and conversations"
            ].map((benefit, index) => (
              <li key={index} className="flex items-center text-base md:text-lg">
                <CheckCircle className="text-green-400 mr-3 flex-shrink-0" />
                <span className="font-light">{benefit}</span>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/30 border-white/50 text-white placeholder-white/70 text-base md:text-lg py-2 md:py-3"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="w-full bg-gbs-purple hover:bg-gbs-purple/90 text-base md:text-lg py-2 md:py-3">
              Subscribe to inspiring innovations
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/directory">
          <Button className="w-full sm:w-auto bg-white text-gbs-purple hover:bg-white/90 text-base md:text-lg px-4 py-2 md:px-6 md:py-3">
            Explore Directory
          </Button>
        </Link>
        <Link to="/build">
          <Button className="w-full sm:w-auto bg-gbs-purple hover:bg-gbs-purple/90 text-base md:text-lg px-4 py-2 md:px-6 md:py-3">
            Apply to Co-Create
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Index;