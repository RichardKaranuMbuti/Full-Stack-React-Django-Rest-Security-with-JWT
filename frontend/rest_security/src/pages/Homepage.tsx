// src/pages/Homepage.tsx
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import FlashMessage from '../components/FlashMessage';

const Homepage: React.FC = () => {
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          setMessage({ text: 'No access token found. Please log in again.', type: 'error' });
          return;
        }

        console.log('Access Token:', accessToken); // Debugging log

        const response = await axios.post('/api/protected/', {}, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          setMessage({ text: response.data.message, type: 'success' });
        } else {
          setMessage({ text: 'Failed to fetch protected data. Please try again.', type: 'error' });
        }
      } catch (error) {
        console.error('Error fetching protected data:', error);
        setMessage({ text: 'Failed to fetch protected data. Please try again.', type: 'error' });
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Homepage</h2>
      {message && <FlashMessage message={message.text} type={message.type} clearMessage={() => setMessage(null)} />}
    </div>
  );
};

export default Homepage;
