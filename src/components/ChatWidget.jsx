import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAddInspiringInnovationListItem } from '@/integrations/supabase/hooks/useInspiringInnovationList';
import { useAddApplication } from "@/integrations/supabase/hooks/useApplications";
import { toast } from 'sonner';
import { Minimize2, Maximize2 } from 'lucide-react';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [chatMode, setChatMode] = useState(null);
  const [isMinimized, setIsMinimized] = useState(false);

  const addInspiringInnovationListItem = useAddInspiringInnovationListItem();
  const addApplication = useAddApplication();

  const newsletterConversation = [
    { question: "Great! Let's subscribe you to our newsletter. What's your email address?", field: 'email' },
  ];

  const applicationConversation = [
    { question: "Excellent! Let's start your application to co-create. What's your full name?", field: 'name' },
    { question: "Nice to meet you, {name}! What's your email address?", field: 'email' },
    { question: "Great, thanks! Now, tell me about your enterprise. What's it called?", field: 'enterprise_name' },
    { question: "'{enterprise_name}' sounds interesting! In one sentence, what's the main purpose of your enterprise?", field: 'enterprise_purpose' },
    { question: "I see. What's your biggest challenge right now as a social enterprise creator?", field: 'challenge' },
    { question: "That's a common hurdle. Now, imagine if you could grow your revenue exponentially. How would that serve humanity?", field: 'growth_impact' },
  ];

  const advancedSearchConversation = [
    { question: "Let's help you find specific opportunities. What type of opportunity are you looking for? (e.g., funding, partnerships, resources)", field: 'opportunity_type' },
    { question: "Great. In which sector or industry?", field: 'sector' },
    { question: "Any specific location or region you're interested in?", field: 'location' },
    { question: "What's your preferred contact method for receiving these opportunities?", field: 'contact_method' },
  ];

  useEffect(() => {
    setMessages([{ 
      text: "Welcome! How can I assist you today?",
      sender: 'bot',
      options: [
        { text: "Subscribe to Newsletter", value: "newsletter" },
        { text: "Apply to Co-Create", value: "application" },
        { text: "Advanced Opportunity Search", value: "search" }
      ]
    }]);
  }, []);

  const handleOptionSelect = (option) => {
    setChatMode(option);
    setStep(0);
    setFormData({});
    const conversation = getConversation(option);
    setMessages([...messages, { text: conversation[0].question, sender: 'bot' }]);
  };

  const getConversation = (mode) => {
    switch (mode) {
      case 'newsletter':
        return newsletterConversation;
      case 'application':
        return applicationConversation;
      case 'search':
        return advancedSearchConversation;
      default:
        return [];
    }
  };

  const handleSend = async () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    const conversation = getConversation(chatMode);
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
      try {
        if (chatMode === 'newsletter') {
          await addInspiringInnovationListItem.mutateAsync({ email: updatedFormData.email });
          setMessages(msgs => [
            ...msgs,
            { text: `Thank you for subscribing to our newsletter! You'll receive inspiring innovations in your inbox soon.`, sender: 'bot' }
          ]);
          toast.success('Subscribed to newsletter successfully!');
        } else if (chatMode === 'application') {
          await addApplication.mutateAsync(updatedFormData);
          setMessages(msgs => [
            ...msgs,
            { text: `Thank you for applying, ${updatedFormData.name}! We're excited about your project, ${updatedFormData.enterprise_name}. We'll review your application and be in touch soon.`, sender: 'bot' }
          ]);
          toast.success('Application submitted successfully!');
        } else if (chatMode === 'search') {
          // Here you would typically send this data to a backend service
          // For now, we'll just acknowledge the request
          setMessages(msgs => [
            ...msgs,
            { text: `Thank you for your advanced search request. We'll curate opportunities based on your preferences and get back to you via your preferred contact method: ${updatedFormData.contact_method}.`, sender: 'bot' }
          ]);
          toast.success('Advanced search request submitted!');
        }
        resetChat();
      } catch (error) {
        toast.error(`Error processing your request: ${error.message}`);
      }
    }
  };

  const resetChat = () => {
    setChatMode(null);
    setStep(0);
    setFormData({});
    setMessages([{ 
      text: "Is there anything else I can help you with?",
      sender: 'bot',
      options: [
        { text: "Subscribe to Newsletter", value: "newsletter" },
        { text: "Apply to Co-Create", value: "application" },
        { text: "Advanced Opportunity Search", value: "search" }
      ]
    }]);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`fixed bottom-4 right-4 w-full sm:w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMinimized ? 'h-14' : 'h-[450px] sm:h-[500px]'}`}>
      <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold">GrowBeyond Assistant</h3>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMinimize}
          className="text-white hover:bg-purple-700"
        >
          {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
        </Button>
      </div>
      {!isMinimized && (
        <>
          <div className="h-[calc(100%-120px)] overflow-y-auto p-4 bg-gray-100">
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
        </>
      )}
    </div>
  );
};

export default ChatWidget;