// src/components/ProtectedResource.tsx
import React, { useState, useEffect } from 'react';
import { fetchWithAuth } from '../authUtils';
import FlashMessage from './FlashMessage';

const ProtectedResource: React.FC = () => {
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [data, setData] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchWithAuth('http://127.0.0.1:8000/api/protected/');
        if (response.ok) {
          const result = await response.json();
          setData(result.message);
        } else {
          setMessage({ text: 'Failed to fetch protected resource', type: 'error' });
        }
      } catch (error) {
        if (error instanceof Error) {
          setMessage({ text: error.message, type: 'error' });
        } else {
          setMessage({ text: 'An unexpected error occurred', type: 'error' });
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Protected Resource</h2>
      <p>{data}</p>
      {message && <FlashMessage message={message.text} type={message.type} clearMessage={() => setMessage(null)} />}
    </div>
  );
};

export default ProtectedResource;
