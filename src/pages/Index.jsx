import React from 'react';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gbs-darkPurple via-gbs-purple to-gbs-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Giving Back Studio</h1>
        <p className="text-xl md:text-2xl font-light text-center mb-12">Catalyzing Humanity-Centered Innovation for a Thriving World</p>
        <ChatInterface />
      </div>
    </div>
  );
};

export default Index;