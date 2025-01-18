import { useState, useEffect } from 'react';

export const useApiKey = () => {
  const [apiKey, setApiKey] = useState('');
  const [isValidated, setIsValidated] = useState(false);
  const [error, setError] = useState('');

  // Check if API key exists in localStorage on mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('anthropic_api_key');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      setIsValidated(true);
    }
  }, []);

  const validateApiKey = async (key) => {
    setError('');

    try {
      // Simple validation for API key format
      if (!key.startsWith('sk-ant')) {
        throw new Error('Invalid API key format - must start with sk-ant');
      }

      // Store the API key
      localStorage.setItem('anthropic_api_key', key);
      setApiKey(key);
      setIsValidated(true);
    } catch (err) {
      setError(err.message);
      setIsValidated(false);
    }
  };

  const clearApiKey = () => {
    localStorage.removeItem('anthropic_api_key');
    setApiKey('');
    setIsValidated(false);
    setError('');
  };

  return {
    apiKey,
    isValidated,
    error,
    validateApiKey,
    clearApiKey,
  };
}; 