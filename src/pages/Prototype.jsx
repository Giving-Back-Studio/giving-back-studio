import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Send } from 'lucide-react';

const Prototype = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to Giving Back Studio! How can I assist you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (input.trim() === '') return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');

    // Simple keyword-based routing logic
    setTimeout(() => {
      let response;
      let route;

      if (input.toLowerCase().includes('investor') || input.toLowerCase().includes('funding')) {
        response = "Great! I can help you find aligned investors. Let me take you to our directory.";
        route = "/directory?category=investors";
      } else if (input.toLowerCase().includes('farm') || input.toLowerCase().includes('permaculture')) {
        response = "Excellent! I'll show you some permaculture farms in our directory.";
        route = "/directory?category=permaculture";
      } else if (input.toLowerCase().includes('grant') || input.toLowerCase().includes('funding')) {
        response = "Sure! Let's look at some public good grants that might interest you.";
        route = "/directory?category=grants";
      } else if (input.toLowerCase().includes('apply') || input.toLowerCase().includes('co-create')) {
        response = "Fantastic! I'll take you to our application page to co-create with us.";
        route = "/build";
      } else if (input.toLowerCase().includes('newsletter') || input.toLowerCase().includes('innovations')) {
        response = "Great choice! Let's check out some inspiring innovations.";
        route = "/inspiring-innovations";
      } else {
        response = "I'm not sure I understood that. Could you please rephrase or choose from our main offerings: finding investors, exploring permaculture farms, discovering grants, applying to co-create, or checking out inspiring innovations?";
      }

      setMessages(msgs => [...msgs, { text: response, sender: 'bot' }]);

      if (route) {
        setTimeout(() => navigate(route), 2000);
      }
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card className="bg-white/10 text-white">
        <CardHeader>
          <CardTitle>Giving Back Studio Assistant</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-[400px] overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg p-2 max-w-[80%] ${message.sender === 'user' ? 'bg-gbs-purple' : 'bg-gbs-blue'}`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-grow bg-white/10 text-white placeholder-white/70"
              />
              <Button onClick={handleSend} className="bg-gbs-lavender hover:bg-gbs-lightPurple">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Prototype;