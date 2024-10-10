import React from 'react';
import { Button } from "@/components/ui/button";

const ChatMessage = ({ message, onOptionSelect }) => {
  return (
    <div className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
      <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-gbs-purple' : 'bg-gbs-blue'}`}>
        {message.text}
      </div>
      {message.options && (
        <div className="mt-2 space-y-2">
          {message.options.map((option, optionIndex) => (
            <Button
              key={optionIndex}
              onClick={() => onOptionSelect(option)}
              variant="outline"
              className="mr-2 mb-2"
            >
              {option.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;