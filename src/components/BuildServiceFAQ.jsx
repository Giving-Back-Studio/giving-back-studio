import React from 'react';

const BuildServiceFAQ = () => (
  <section className="bg-white/10 p-8 rounded-lg space-y-6">
    <h2 className="text-3xl font-semibold mb-4">FAQ</h2>
    <ul className="space-y-4">
      {[
        {
          question: "Who is the Build service for?",
          answer: "It's for leaders and entrepreneurs with a track record of building impact-focused ventures who are seeking to develop new purpose-aligned revenue streams."
        },
        {
          question: "What kind of time commitment is expected?",
          answer: "The Build program includes weekly facilitated team-building sessions, regular strategy calls, and action planning over 6-8 weeks, customized to your needs."
        },
        {
          question: "What results can I expect?",
          answer: "You can expect to identify and launch new revenue streams that are aligned with your mission, resulting in a profitable and sustainable enterprise."
        },
        {
          question: "Do you offer financing options?",
          answer: "Yes, we provide flexible financing options. Let us know if you're interested during your consultation."
        }
      ].map((item, index) => (
        <li key={index} className="space-y-2">
          <h3 className="font-semibold text-gbs-lavender text-lg">{item.question}</h3>
          <p>{item.answer}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default BuildServiceFAQ;