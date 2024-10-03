import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase';
import { toast } from 'sonner';

const NewsletterFooter = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const addInspiringInnovationListItem = useAddInspiringInnovationListItem();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addInspiringInnovationListItem.mutateAsync({ email });
      toast.success('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      console.error('Error adding email to list:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/20 backdrop-blur-md p-3 sm:p-4 md:p-6">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6">
        <div className="flex-grow w-full sm:w-auto max-w-2xl">
          <h2 className="text-lg sm:text-xl md:text-2xl font-light mb-2 md:mb-3 text-center sm:text-left">Subscribe to inspiring innovations</h2>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/30 border-white/50 text-white placeholder-white/70 text-sm sm:text-base md:text-lg flex-grow"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-gbs-purple hover:bg-gbs-purple/90 text-sm sm:text-base md:text-lg py-2 md:py-3">
              Subscribe
            </Button>
          </form>
        </div>
        <Button
          variant="ghost"
          className="text-white absolute top-1 right-1 sm:static"
          onClick={() => setIsVisible(false)}
        >
          <X size={24} />
        </Button>
      </div>
    </div>
  );
};

export default NewsletterFooter;