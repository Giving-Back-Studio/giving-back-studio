import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatMessage from './chat/ChatMessage';
import ChatInput from './chat/ChatInput';

const ChatWidget = () => {
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
    <div className="fixed bottom-4 right-4 w-80 bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
      <div className="h-96 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} onOptionSelect={handleOptionSelect} />
        ))}
      </div>
      <div className="p-4 bg-white/5">
        <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatWidget;