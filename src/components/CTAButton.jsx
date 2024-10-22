import React from 'react';
import { Button } from "@/components/ui/button";

const CTAButton = ({ children, className, ...props }) => {
  return (
    <Button 
      className={`bg-gbs-lightPurple hover:bg-gbs-purple text-white font-medium py-3 px-6 rounded-full transition-colors duration-300 text-lg shadow-md hover:shadow-lg ${className}`} 
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;