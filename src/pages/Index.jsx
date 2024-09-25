import React from 'react';
import { CheckCircle, Wrench, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FlowerOfLife from '@/components/FlowerOfLife';

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800 text-white flex flex-col justify-between relative overflow-hidden">
      <FlowerOfLife />
      
      <main className="container mx-auto px-4 py-16 flex flex-col items-center text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
          Grow Your Regenerative Social Enterprise
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-300">
          Get weekly insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
          {[
            ["A practical Integrative Organizing lesson", <CheckCircle key="check" />],
            ["New tools to grow and scale your impact", <Wrench key="wrench" />],
            ["Invitations to exclusive events and conversations", <Users key="users" />]
          ].map(([benefit, icon], index) => (
            <div key={index} className="flex flex-col items-center bg-white/5 p-6 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <span className="text-teal-400 mb-3">{icon}</span>
              <p className="text-gray-200 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
        <div className="w-full max-w-md animate-bounce-slow">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
            <h2 className="text-2xl font-bold mb-4 text-teal-300">Subscribe to Inspiring Innovations</h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white/20 border-white/30 text-white placeholder-gray-300 text-center"
                required
              />
              <Button type="submit" className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Index;
