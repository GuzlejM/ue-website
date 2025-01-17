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
      type: "tool_use",
      id: "toolu_012zhnRZt2unAbsPSaXJvAos",
      name: "bash",
      input: {
        command: "open -a Terminal"
      },
      status: "running"
    },
    {
      type: "tool_use",
      id: "toolu_012zhnRZt2unAbsPSaXJvAos",
      name: "bash",
      input: {
        command: "open -a Terminal"
      },
      status: "completed",
      output: "Terminal launched successfully"
    },
    {
      type: "text",
      text: "I've opened Terminal for you. Is there anything specific you'd like to do with it?"
    }
  ],
  // ... other mock responses ...
};

export const useAgent = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [thinkingSteps, setThinkingSteps] = useState([]);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        type: 'text',
        text: "Hello! I'm your AI Agent Assistant. I can help you control your computer and execute commands. Try these commands:\n\n- open terminal\n- open safari\n- take screenshot"
      }
    ]);
  }, []);

  const getMockResponse = (input) => {
    const normalizedInput = input.toLowerCase().trim();
    
    // Check for exact matches first
    if (mockResponses[normalizedInput]) {
      return mockResponses[normalizedInput];
    }
    
    // Check for partial matches
    for (const key of Object.keys(mockResponses)) {
      if (normalizedInput.includes(key)) {
        return mockResponses[key];
      }
    }
    
    // Default response if no match found
    return [
      {
        type: "text",
        text: "I understand you want to '" + input + "'. However, I'm currently in demo mode with limited commands. Please try one of the suggested commands above."
      }
    ];
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
    
    // Clear previous thinking state only when starting a new command
    setThinkingSteps([]);

    // Get mock response
    const mockResponse = getMockResponse(userInput);
    
    // Find thinking step if exists
    const thinkingStep = mockResponse.find(msg => msg.type === 'thinking');
    if (thinkingStep) {
      setThinkingSteps([thinkingStep]);
    }

    // Filter out thinking steps from chat
    const chatResponses = mockResponse.filter(msg => msg.type !== 'thinking');

    // Simulate API delay
    setTimeout(() => {
      setMessages(prev => [...prev, ...chatResponses]);
      setIsProcessing(false);
    }, 2000);
  };

  return {
    messages,
    userInput,
    setUserInput,
    isProcessing,
    thinkingSteps,
    handleSubmit
  };
}; 