import React from 'react';
import { ChevronDownIcon } from "lucide-react";

const ScrollToBottomButton = ({ visible, onClick }) => {
  if (!visible) return null;
  
  return (
    <div
      className="fixed bottom-32 right-10 z-50 w-10 h-10 bg-gray-300 dark:bg-gray-500 rounded-full shadow-md flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <ChevronDownIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    </div>
  );
};

export default ScrollToBottomButton;