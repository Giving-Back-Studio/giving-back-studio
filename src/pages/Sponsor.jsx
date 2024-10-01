import React from 'react';
import { Button } from "@/components/ui/button";

const Sponsor = () => {
  return (
    <div className="max-w-4xl mx-auto text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">Become a Sponsor</h1>
      <p className="text-xl mb-8">
        Join us in funding open-source, humanity-centered innovations that are shaping a better future for all.
      </p>
      <h2 className="text-3xl font-light mb-4">Why Sponsor Giving Back Studio?</h2>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>Drive meaningful change in the world</li>
        <li>Support cutting-edge, open-source technologies</li>
        <li>Align your brand with positive social impact</li>
        <li>Connect with a network of visionary innovators</li>
      </ul>
      <h2 className="text-3xl font-light mb-4">How Your Sponsorship Makes a Difference</h2>
      <p className="mb-8">
        Your contribution directly fuels the development of transformative projects in areas such as:
      </p>
      <ul className="list-disc list-inside mb-8 space-y-2">
        <li>Sustainable technology</li>
        <li>Regenerative finance</li>
        <li>Ethical AI and data systems</li>
        <li>Community-driven initiatives</li>
      </ul>
      <p className="text-xl mb-8">
        Be the hero that empowers the next generation of world-changing innovations. Your support can turn visionary ideas into reality.
      </p>
      <Button className="bg-white text-gbs-purple hover:bg-white/90 text-lg px-8 py-3">
        Become a Sponsor
      </Button>
    </div>
  );
};

export default Sponsor;