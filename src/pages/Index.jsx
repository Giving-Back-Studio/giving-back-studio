import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      <main className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Grow Your Regenerative Social Enterprise
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          Get weekly insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
        </p>
        <div className="w-full max-w-md mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="jane@example.com"
              className="flex-grow"
              required
            />
            <Button type="submit" className="bg-green-500 hover:bg-green-600">
              Join thousands of creators
            </Button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            "A practical Integrative Organizing lesson",
            "New tools to help grow and scale impact",
            "Invitations to exclusive events and community conversations"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 py-4 text-center">
        <p>&copy; 2023 Giving Back Studio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
