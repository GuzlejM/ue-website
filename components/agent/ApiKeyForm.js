"use client";

import { useState } from 'react';

const ApiKeyForm = ({ onValidate, error }) => {
  const [apiKey, setApiKey] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!apiKey.trim()) return;
    await onValidate(apiKey.trim());
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-200 mb-4">Enter API Key</h2>
      <p className="text-gray-400 mb-6">
        Please enter your Anthropic API key to access the AI Agent. Your key will be stored securely in your browser.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-2">
            API Key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-200 placeholder-gray-400"
            placeholder="sk-ant-api..."
            required
          />
        </div>
        
        {error && (
          <div className="text-red-400 text-sm mt-2">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg font-medium transition-colors bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApiKeyForm; 