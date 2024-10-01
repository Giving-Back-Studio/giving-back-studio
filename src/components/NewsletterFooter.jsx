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
    <div className="fixed bottom-0 left-0 right-0 bg-white/20 backdrop-blur-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-grow mr-4">
          <h2 className="text-xl font-light mb-2">Subscribe to inspiring innovations</h2>
          <form onSubmit={handleSubmit} className="flex">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/30 border-white/50 text-white placeholder-white/70 mr-2"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-gbs-purple hover:bg-gbs-purple/90">
              Subscribe
            </Button>
          </form>
        </div>
        <Button
          variant="ghost"
          className="text-white"
          onClick={() => setIsVisible(false)}
        >
          <X size={24} />
        </Button>
      </div>
    </div>
  );
};

export default NewsletterFooter;