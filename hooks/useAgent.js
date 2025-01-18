"use client";

import { useState, useEffect } from 'react';

const mockResponses = {
  "open terminal": [
    {
      type: "text",
      text: "I'll help you open the Terminal application. Let me break down the steps:"
    },
    {
      type: "thinking",
      text: "1. System Check\nChecking if Terminal is already running and system resources\n\n2. Launch Preparation\nPreparing to launch Terminal with default configuration\n\n3. Execution\nExecuting terminal launch command with system privileges"
    },
    {
      type: "text",
      text: "I've opened Terminal for you. Is there anything specific you'd like to do with it?"
    }
  ]
};

const STEPS = [
  { name: "System Check", command: "ps aux | grep Terminal" },
  { name: "Launch Preparation", command: "defaults read com.apple.Terminal" },
  { name: "Execution", command: "open -a Terminal" }
];

export const useAgent = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [thinkingSteps, setThinkingSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        type: 'text',
        text: "Welcome! I'm your AI Assistant, ready to help you control your computer.\n\nHere are some commands you can try:\n\n`open terminal`\nLaunch the terminal application\n\n`open safari`\nStart the Safari web browser\n\n`take screenshot`\nCapture your screen"
      }
    ]);
  }, []);

  const executeCommand = async (input) => {
    const apiKey = localStorage.getItem('anthropic_api_key');
    if (!apiKey) {
      throw new Error('API key not found');
    }

    const response = await fetch('/api/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        instruction: input,
        api_key: apiKey
      })
    });

    if (!response.ok) {
      throw new Error('Failed to execute command');
    }

    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim() || isProcessing) return;
    
    const userMessage = {
      type: 'user',
      content: userInput
    };
    
    setMessages(prev => [...prev, userMessage]);
    setUserInput("");
    setIsProcessing(true);

    try {
      const response = await executeCommand(userInput);
      
      // Update messages with the response
      if (response.message) {
        setMessages(prev => [...prev, {
          type: 'text',
          text: response.message
        }]);
      }

      if (response.tool_outputs) {
        response.tool_outputs.forEach(output => {
          setMessages(prev => [...prev, {
            type: 'tool_use',
            id: output.tool_id,
            name: 'bash',
            input: output.input,
            status: 'completed',
            output: output.output
          }]);
        });
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        type: 'text',
        text: `Error: ${error.message}`
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    messages,
    userInput,
    setUserInput,
    isProcessing,
    thinkingSteps,
    currentStep,
    handleSubmit
  };
};