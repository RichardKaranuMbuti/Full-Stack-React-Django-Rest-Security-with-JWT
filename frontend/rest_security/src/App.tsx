// src/App.tsx
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ProtectedResource from './components/ProtectedResource';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">My App</h1>
      <div className="space-y-6">
        <Signup />
        <Login />
        <ProtectedResource />
      </div>
    </div>
  );
};

export default App;
