import React from 'react';

const BuildServiceGains = () => (
  <section className="bg-white/10 p-8 rounded-lg space-y-6">
    <h2 className="text-3xl font-semibold mb-4">What You'll Gain</h2>
    <ul className="space-y-4">
      {[
        {
          title: "AI SaaS Product",
          description: "Gain access to a cutting-edge AI tool that will help automate processes and accelerate your enterprise's growth."
        },
        {
          title: "Purpose-Aligned Profit",
          description: "Discover revenue streams that are not only profitable but also aligned with your core mission."
        },
        {
          title: "Time & Money Savings",
          description: "We provide a clear, purpose-aligned path that maximizes efficiency, helping you save valuable resources while growing sustainably."
        }
      ].map((item, index) => (
        <li key={index} className="flex flex-col">
          <span className="font-semibold text-gbs-lavender text-lg">{item.title}</span>
          <span>{item.description}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default BuildServiceGains;