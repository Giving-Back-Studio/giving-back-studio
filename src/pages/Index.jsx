import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase';
import { toast } from 'sonner';

const Index = () => {
  const [email, setEmail] = React.useState('');
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
        Under Construction
      </h1>
      <img 
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
        alt="Under Construction" 
        className="mb-8 rounded-lg shadow-lg"
      />
      <p className="text-xl mb-8">
        We're building something amazing! In the meantime, subscribe to our inspiring innovations.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md mb-8">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow"
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </form>
      <Link to="/search-directory" className="text-blue-500 hover:underline">
        Check out our Search Directory (Beta)
      </Link>
    </div>
  );
};

export default Index;