import React from 'react';
import { CheckCircle, Lightbulb, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-blue-700 to-teal-500 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 80 80%22%3E%3Cpath fill=%22%23fff%22 d=%22M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z%22%3E%3C/path%3E%3C/svg%3E')] opacity-10 animate-wave"></div>
      
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
            ["Master actionable Integrative Organizing strategies to revolutionize your approach", <CheckCircle key="check" />],
            ["Unlock innovative tools and techniques to amplify your impact and reach", <Lightbulb key="lightbulb" />],
            ["Connect with like-minded changemakers in exclusive events and conversations", <Users key="users" />]
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