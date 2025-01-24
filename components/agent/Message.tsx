"use client";

import React from 'react';

type MessageStatus = 'running' | 'completed' | 'error';

interface BaseMessage {
  type: 'text' | 'tool_use' | 'user';
}

interface TextMessage extends BaseMessage {
  type: 'text';
  text: string;
}

interface ToolUseMessage extends BaseMessage {
  type: 'tool_use';
  status: MessageStatus;
  tool_id?: string;
  output?: string;
  error?: string;
}

interface UserMessage extends BaseMessage {
  type: 'user';
  content: string;
}

type MessageType = TextMessage | ToolUseMessage | UserMessage;

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const handleCommandClick = (command: string) => {
    const cleanCommand = command.replace(/`/g, '');
    navigator.clipboard.writeText(cleanCommand);
    
    if (typeof window !== 'undefined') {
      const inputElement = document.querySelector<HTMLInputElement>('input[type="text"]');
      if (inputElement) {
        inputElement.value = cleanCommand;
        inputElement.focus();
      }
    }
  };

  const renderText = (text: string) => {
    const parts = text.split(/(`[^`]+`)/);
    return parts.map((part, index) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code
            key={index}
            onClick={() => handleCommandClick(part)}
            className="cursor-pointer bg-gray-700 px-2 py-1 rounded font-mono text-sm my-1 inline-block hover:bg-gray-600 transition-colors"
            title="Click to copy or use command"
          >
            {part.replace(/`/g, '')}
          </code>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  switch (message.type) {
    case 'text':
      return (
        <div className="flex">
          <div className="max-w-[80%] rounded-lg bg-gray-800/50 px-4 py-3 backdrop-blur">
            <div className="agent-message whitespace-pre-wrap text-gray-200">
              {renderText(message.text)}
            </div>
          </div>
        </div>
      );
    case 'tool_use':
      const getStatusColor = (status: MessageStatus) => {
        switch (status) {
          case 'running':
            return 'bg-orange-500';
          case 'completed':
            return 'bg-emerald-500';
          default:
            return 'bg-red-500';
        }
      };

      return (
        <div className="flex">
          <div className="max-w-[80%] w-full rounded-lg bg-gray-900/50 px-4 py-3 border border-gray-700/50 backdrop-blur">
            <div className="font-mono text-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className={`h-2 w-2 rounded-full ${getStatusColor(message.status)} ${
                    message.status === 'running' ? 'animate-pulse' : ''
                  }`}></span>
                  <code className="flex-1 bg-gray-800 px-3 py-1.5 rounded text-gray-200 border border-gray-700">
                    {message.tool_id || 'Command executed'}
                  </code>
                </div>
                
                <div className="flex items-center gap-2 px-4">
                  <span className={`text-xs ${
                    message.status === 'running' ? 'text-orange-500' : 'text-emerald-500'
                  }`}>
                    {message.status === 'running' ? 'Running...' : 'Completed'}
                  </span>
                </div>
              </div>

              {(message.output || message.error) && (
                <div className="mt-3 text-gray-400 border-t border-gray-700/50 pt-3">
                  <span className="text-xs text-gray-500 px-4">
                    {message.error ? 'Error:' : 'Output:'}
                  </span>
                  <pre className="mt-2 text-sm bg-gray-800/50 p-3 rounded">
                    {message.error || message.output}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    case 'user':
      return (
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-lg bg-emerald-600 px-4 py-3">
            <p className="font-medium text-white">{message.content}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Message; 