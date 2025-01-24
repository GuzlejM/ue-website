"use client";

import { useState, useEffect, FormEvent } from 'react';
import { API_CONFIG } from '../config/api';

interface ToolOutput {
  tool_id: string;
  output?: string;
  error?: string;
  screenshot_path?: string;
}

interface ApiResponse {
  thinking_steps?: string[];
}

interface ExecuteCommandResponse {
  message?: string;
  tool_outputs?: ToolOutput[];
  api_response?: ApiResponse;
}

interface Message {
  type: 'text' | 'user' | 'tool_use';
  text?: string;
  content?: string;
  id?: string;
  name?: string;
  status?: 'completed' | 'error';
  output?: string;
  error?: string;
  screenshot?: string;
}

interface UseAgentReturn {
  messages: Message[];
  userInput: string;
  setUserInput: (input: string) => void;
  isProcessing: boolean;
  thinkingSteps: string[];
  currentStep: number;
  handleSubmit: (e: FormEvent) => Promise<void>;
}

export const useAgent = (): UseAgentReturn => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [thinkingSteps, setThinkingSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        type: 'text',
        text: "Welcome! I'm your AI Assistant, ready to help you control your computer.\n\nHere are some commands you can try:\n\n`open terminal`\nLaunch the terminal application\n\n`open safari`\nStart the Safari web browser\n\n`take screenshot`\nCapture your screen"
      }
    ]);
  }, []);

  const executeCommand = async (input: string): Promise<ExecuteCommandResponse> => {
    try {
      const apiKey = localStorage.getItem('anthropic_api_key');
      if (!apiKey) {
        throw new Error('API key not found. Please enter your API key first.');
      }

      const response = await fetch(`${API_CONFIG.BASE_URL}/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          instruction: input,
          api_key: apiKey,
          max_tokens: 4096,
          keep_recent_images: 10,
          system_prompt_suffix: ""
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (!userInput.trim() || isProcessing) return;
    
    const userMessage: Message = {
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

      // Handle tool outputs
      if (response.tool_outputs && response.tool_outputs.length > 0) {
        response.tool_outputs.forEach(output => {
          const toolMessage: Message = {
            type: 'tool_use',
            id: output.tool_id,
            name: 'bash',
            status: 'completed',
          };

          if (output.output) {
            toolMessage.output = output.output;
          }

          if (output.error) {
            toolMessage.error = output.error;
            toolMessage.status = 'error';
          }

          if (output.screenshot_path) {
            toolMessage.screenshot = output.screenshot_path;
          }

          setMessages(prev => [...prev, toolMessage]);
        });
      }

      // Update thinking steps if provided in the API response
      if (response.api_response?.thinking_steps) {
        setThinkingSteps(response.api_response.thinking_steps);
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        type: 'text',
        text: `Error: ${error instanceof Error ? error.message : 'An unknown error occurred'}`
      }]);
    } finally {
      setIsProcessing(false);
      setCurrentStep(0); // Reset current step
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