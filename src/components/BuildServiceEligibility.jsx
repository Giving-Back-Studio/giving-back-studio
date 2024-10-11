import React from 'react';
import { CheckCircle } from 'lucide-react';

const BuildServiceEligibility = () => (
  <section className="bg-white/10 p-8 rounded-lg space-y-6">
    <h2 className="text-3xl font-semibold mb-4">Who Should Apply?</h2>
    <p className="text-lg mb-4">
      This program is for you if:
    </p>
    <ul className="space-y-2">
      {[
        "You're looking to add new revenue streams that are in harmony with advancing human and planetary wellbeing.",
        "You have experience in building successful social enterprises and are ready to take the next step.",
        "You align with a culture that values purpose-driven innovation and root-cause resolution."
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="text-gbs-lavender mr-2 flex-shrink-0 mt-1" size={20} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default BuildServiceEligibility;