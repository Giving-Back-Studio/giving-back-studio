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
      
      <header className="relative z-10 pt-8 px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Giving Back Studio</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Services</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16 flex flex-col items-center text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-purple-500">
          Grow Your Regenerative Social Enterprise
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-300">
          Get weekly insights on permaculture, humanity-centered design, and heart-based leadership to transform your social enterprise.
        </p>
        <div className="w-full max-w-md mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="jane@example.com"
              className="flex-grow bg-white/10 border-white/20 text-white placeholder-gray-400"
              required
            />
            <Button type="submit" className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Join thousands of creators
            </Button>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            ["A practical Integrative Organizing lesson", <CheckCircle key="check" />],
            ["New tools to grow and scale your impact", <Wrench key="wrench" />],
            ["Invitations to exclusive events and conversations", <Users key="users" />]
          ].map(([benefit, icon], index) => (
            <div key={index} className="flex items-start bg-white/5 p-6 rounded-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <span className="text-teal-400 mr-3 flex-shrink-0 mt-1">{icon}</span>
              <p className="text-gray-200 text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-800/50 py-8 text-center backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 mb-4">&copy; 2023 Giving Back Studio. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
