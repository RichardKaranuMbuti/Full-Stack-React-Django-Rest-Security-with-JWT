// src/components/FlashMessage.tsx
import React, { useEffect } from 'react';

interface FlashMessageProps {
  message: string;
  type: 'success' | 'error';
  clearMessage: () => void;
}

const FlashMessage: React.FC<FlashMessageProps> = ({ message, type, clearMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      clearMessage();
    }, 3000);

    return () => clearTimeout(timer);
  }, [message, clearMessage]);

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg ${
        type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
      }`}
    >
      {message}
    </div>
  );
};

export default FlashMessage;
