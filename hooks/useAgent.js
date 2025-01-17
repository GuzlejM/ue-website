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

  const getMockResponse = (input) => {
    const normalizedInput = input.toLowerCase().trim();
    
    if (mockResponses[normalizedInput]) {
      return mockResponses[normalizedInput];
    }
    
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

    // Get mock response
    const mockResponse = getMockResponse(userInput);
    
    // Find thinking step if exists
    const thinkingStep = mockResponse.find(msg => msg.type === 'thinking');
    if (thinkingStep) {
      setThinkingSteps([thinkingStep]);
    }

    // Add initial message
    setMessages(prev => [...prev, mockResponse[0]]);

    // System Check (2s)
    setCurrentStep(0);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'tool_use',
        id: 'step1',
        name: 'bash',
        input: { 
          command: STEPS[0].command,
          step: STEPS[0].name
        },
        status: 'running'
      }]);

      // Complete first command after 1.8s
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === 'step1' ? { ...msg, status: 'completed' } : msg
        ));
        setCurrentStep(1);
      }, 1800);
    }, 2000);

    // Launch Preparation (4s)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'tool_use',
        id: 'step2',
        name: 'bash',
        input: { 
          command: STEPS[1].command,
          step: STEPS[1].name
        },
        status: 'running'
      }]);

      // Complete second command after 1.8s
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === 'step2' ? { ...msg, status: 'completed' } : msg
        ));
        setCurrentStep(2);
      }, 1800);
    }, 4000);

    // Final Execution (6s)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'tool_use',
        id: 'step3',
        name: 'bash',
        input: { 
          command: STEPS[2].command,
          step: STEPS[2].name
        },
        status: 'running'
      }]);

      // Complete final command and add success message after 1.8s
      setTimeout(() => {
        setMessages(prev => {
          const updatedMessages = prev.map(msg => 
            msg.id === 'step3' ? { ...msg, status: 'completed', output: 'Terminal launched successfully' } : msg
          );
          return [...updatedMessages, mockResponse[mockResponse.length - 1]];
        });
        setIsProcessing(false);
      }, 1800);
    }, 6000);
  };

  const runCommand = async () => {
    setIsProcessing(true);
    
    // Initial message
    setMessages(prev => [
      ...prev,
      {
        type: 'text',
        text: "I'll help you open the Terminal application. Let me break down the steps:"
      }
    ]);

    // System Check
    setCurrentStep(0);
    setMessages(prev => [
      ...prev,
      {
        type: 'tool_use',
        input: { command: STEPS[0].command, step: STEPS[0].name },
        status: 'running'
      }
    ]);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setMessages(prev => prev.map((msg, i) => 
      i === prev.length - 1 
        ? { ...msg, status: 'completed', output: 'System check passed successfully.' }
        : msg
    ));
    setCurrentStep(1);

    // Launch Preparation
    setMessages(prev => [
      ...prev,
      {
        type: 'tool_use',
        input: { command: STEPS[1].command, step: STEPS[1].name },
        status: 'running'
      }
    ]);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setMessages(prev => prev.map((msg, i) => 
      i === prev.length - 1 
        ? { ...msg, status: 'completed', output: 'Terminal preferences loaded successfully.' }
        : msg
    ));
    setCurrentStep(2);

    // Execution
    setMessages(prev => [
      ...prev,
      {
        type: 'tool_use',
        input: { command: STEPS[2].command, step: STEPS[2].name },
        status: 'running'
      }
    ]);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setMessages(prev => prev.map((msg, i) => 
      i === prev.length - 1 
        ? { ...msg, status: 'completed', output: 'Terminal launched successfully.' }
        : msg
    ));

    // Final message
    setMessages(prev => [
      ...prev,
      {
        type: 'text',
        text: "I've opened Terminal for you. Is there anything specific you'd like to do with it?"
      }
    ]);

    setIsProcessing(false);
  };

  return {
    messages,
    userInput,
    setUserInput,
    isProcessing,
    thinkingSteps,
    currentStep,
    handleSubmit,
    runCommand
  };
};