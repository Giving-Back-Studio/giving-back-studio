import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

const ChatInput = ({ input, setInput, handleSend }) => {
  return (
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
  );
};

export default ChatInput;