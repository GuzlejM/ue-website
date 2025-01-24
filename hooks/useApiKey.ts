import { useState, useEffect } from 'react';

interface UseApiKeyReturn {
  apiKey: string;
  isValidated: boolean;
  error: string;
  validateApiKey: (key: string) => Promise<void>;
  clearApiKey: () => void;
}

export const useApiKey = (): UseApiKeyReturn => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Check if API key exists in localStorage on mount
  useEffect(() => {
    const storedApiKey = localStorage.getItem('anthropic_api_key');
    if (storedApiKey) {
      setApiKey(storedApiKey);
      setIsValidated(true);
    }
  }, []);

  const validateApiKey = async (key: string): Promise<void> => {
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
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
      setIsValidated(false);
    }
  };

  const clearApiKey = (): void => {
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