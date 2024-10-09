import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { useAddMovementCreatorOpportunity } from "@/integrations/supabase/hooks/useMovementCreatorOpportunities";
import { toast } from 'sonner';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [chatMode, setChatMode] = useState(null);

  const addApplication = useAddApplication();
  const addOpportunity = useAddMovementCreatorOpportunity();

  const applicationConversation = [
    { question: "Great! Let's start your application. What's your full name?", field: 'name' },
    { question: "Nice to meet you, {name}! What's your email address?", field: 'email' },
    { question: "Great, thanks! Now, tell me about your enterprise. What's it called?", field: 'enterprise_name' },
    { question: "'{enterprise_name}' sounds interesting! In one sentence, what's the main purpose of your enterprise?", field: 'enterprise_purpose' },
    { question: "I see. What's your biggest challenge right now as a social enterprise creator?", field: 'challenge' },
    { question: "That's a common hurdle. Now, imagine if you could grow your revenue exponentially. How would that serve humanity?", field: 'growth_impact' },
  ];

  const opportunityConversation = [
    { question: "Great! Let's add a new opportunity. What's the name of the opportunity?", field: 'name' },
    { question: "What category does this opportunity fall under? (e.g., Investor, Tech4Good Job, Permaculture Farm, Grant)", field: 'category' },
    { question: "Please provide a brief description of the opportunity:", field: 'description' },
    { question: "What's the website or contact information for this opportunity?", field: 'contact' },
  ];

  useEffect(() => {
    // Start with option selection
    setMessages([{ 
      text: "Welcome! How can I assist you today?",
      sender: 'bot',
      options: [
        { text: "Apply to Co-Create", value: "application" },
        { text: "Add New Opportunity", value: "opportunity" }
      ]
    }]);
  }, []);

  const handleOptionSelect = (option) => {
    setChatMode(option);
    setStep(0);
    setFormData({});
    const conversation = option === 'application' ? applicationConversation : opportunityConversation;
    setMessages([...messages, { text: conversation[0].question, sender: 'bot' }]);
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    const conversation = chatMode === 'application' ? applicationConversation : opportunityConversation;
    const updatedFormData = { ...formData, [conversation[step].field]: input };
    setFormData(updatedFormData);

    if (step < conversation.length - 1) {
      setStep(step + 1);
      const nextQuestion = conversation[step + 1].question.replace(
        /{(\w+)}/g,
        (match, field) => updatedFormData[field] || match
      );
      setMessages(msgs => [...msgs, { text: nextQuestion, sender: 'bot' }]);
    } else {
      // Submit data
      try {
        if (chatMode === 'application') {
          await addApplication.mutateAsync(updatedFormData);
          setMessages(msgs => [
            ...msgs,
            { text: `Thank you for applying, ${updatedFormData.name}! We're excited about your project, ${updatedFormData.enterprise_name}. We'll review your application and be in touch soon.`, sender: 'bot' }
          ]);
          toast.success('Application submitted successfully!');
        } else {
          await addOpportunity.mutateAsync(updatedFormData);
          setMessages(msgs => [
            ...msgs,
            { text: `Thank you for adding the new opportunity: ${updatedFormData.name}. It has been added to our directory.`, sender: 'bot' }
          ]);
          toast.success('New opportunity added successfully!');
        }
        // Reset chat
        setChatMode(null);
        setStep(0);
        setFormData({});
        setMessages([{ 
          text: "Is there anything else I can help you with?",
          sender: 'bot',
          options: [
            { text: "Apply to Co-Create", value: "application" },
            { text: "Add New Opportunity", value: "opportunity" }
          ]
        }]);
      } catch (error) {
        toast.error(`Error submitting data: ${error.message}`);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-purple-600 text-white p-4">
        <h3 className="font-semibold">Chat Assistant</h3>
      </div>
      <div className="h-80 overflow-y-auto p-4 bg-gray-100">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-white text-indigo-600'}`}>
              {message.text}
            </span>
            {message.options && (
              <div className="mt-2 space-y-2">
                {message.options.map((option, optionIndex) => (
                  <Button
                    key={optionIndex}
                    onClick={() => handleOptionSelect(option.value)}
                    className="w-full bg-indigo-600 text-white"
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            )}
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
            className="flex-grow mr-2 text-indigo-600"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;