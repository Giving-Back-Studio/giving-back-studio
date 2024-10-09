import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { toast } from 'sonner';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enterprise_name: '',
    purpose: '',
    growth_impact: ''
  });

  const addApplication = useAddApplication();

  const questions = [
    "What's your name?",
    "What's your email?",
    "What's the name of your enterprise?",
    "What's the purpose of your enterprise?",
    "How do you plan to grow and create impact?"
  ];

  const handleSend = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Update formData based on the current step
    const updatedFormData = { ...formData };
    switch (step) {
      case 0: updatedFormData.name = input; break;
      case 1: updatedFormData.email = input; break;
      case 2: updatedFormData.enterprise_name = input; break;
      case 3: updatedFormData.purpose = input; break;
      case 4: updatedFormData.growth_impact = input; break;
    }
    setFormData(updatedFormData);

    if (step < questions.length - 1) {
      setStep(step + 1);
      setMessages(msgs => [...msgs, { text: questions[step + 1], sender: 'bot' }]);
    } else {
      // Submit application
      try {
        await addApplication.mutateAsync(updatedFormData);
        setMessages(msgs => [...msgs, { text: "Thank you for applying! We'll be in touch soon.", sender: 'bot' }]);
        toast.success('Application submitted successfully!');
      } catch (error) {
        toast.error(`Error submitting application: ${error.message}`);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-purple-600 text-white p-4">
        <h3 className="font-semibold">Apply to Co-Create</h3>
      </div>
      <div className="h-80 overflow-y-auto p-4 bg-gray-100">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-white'}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white">
        <div className="flex">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow mr-2"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;