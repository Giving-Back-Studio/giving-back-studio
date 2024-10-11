import React from 'react';
import { CheckCircle } from 'lucide-react';

const BuildServiceBenefits = () => (
  <section className="bg-white/10 p-8 rounded-lg space-y-6">
    <h2 className="text-3xl font-semibold mb-4">Why Choose Build?</h2>
    <ul className="space-y-4">
      {[
        {
          title: "Weekly Team Building",
          description: "Facilitation of dynamic team sessions to enhance alignment, process challenges, and transform insights into actionable strategies that move everyone toward shared goals."
        },
        {
          title: "Guided Launch Path",
          description: "Step-by-step support to take your idea from concept to a Minimum Viable Business Product (MVBP), setting you up for success. You'll also receive an AI SaaS product designed to enhance your operational capabilities and streamline your growth journey."
        },
        {
          title: "Self-Organizing Team Mastery",
          description: "Comprehensive training that empowers you to build resilient, self-organizing teams capable of sustaining and scaling your mission."
        }
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="text-gbs-lavender mr-2 flex-shrink-0 mt-1" size={20} />
          <div>
            <span className="font-semibold text-gbs-lavender text-lg">{item.title}</span>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default BuildServiceBenefits;