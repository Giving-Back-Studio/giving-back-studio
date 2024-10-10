import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setMessages([
      {
        text: "Welcome to Giving Back Studio! How can I assist you today?",
        sender: 'bot',
        options: [
          { text: "Tell me about Giving Back Studio", value: "about" },
          { text: "Explore the Directory", value: "directory" },
          { text: "Apply to Co-Create", value: "apply" },
          { text: "View Inspiring Innovations", value: "innovations" }
        ]
      }
    ]);
  }, []);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    handleResponse(input);
  };

  const handleOptionSelect = (option) => {
    setMessages([...messages, { text: option.text, sender: 'user' }]);
    handleResponse(option.value);
  };

  const handleResponse = (input) => {
    let response;
    switch (input.toLowerCase()) {
      case 'about':
        response = "Giving Back Studio is more than an agency; we're a movement. We empower visionaries to create regenerative social enterprises that harmonize profit with purpose.";
        break;
      case 'directory':
        navigate('/directory');
        return;
      case 'apply':
        navigate('/build');
        return;
      case 'innovations':
        navigate('/inspiring-innovations');
        return;
      default:
        response = "I'm not sure I understood that. Could you please choose from one of the options or ask about our main offerings?";
    }
    setTimeout(() => {
      setMessages(msgs => [...msgs, { text: response, sender: 'bot' }]);
    }, 500);
  };

  return (
    <div className="bg-white/10 rounded-lg p-4 max-w-2xl mx-auto">
      <div className="h-[400px] overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-gbs-purple' : 'bg-gbs-blue'}`}>
              {message.text}
            </div>
            {message.options && (
              <div className="mt-2 space-y-2">
                {message.options.map((option, optionIndex) => (
                  <Button
                    key={optionIndex}
                    onClick={() => handleOptionSelect(option)}
                    variant="outline"
                    className="mr-2 mb-2"
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your message..."
          className="flex-grow mr-2"
        />
        <Button onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;