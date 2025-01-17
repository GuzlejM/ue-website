"use client";

import { useState } from 'react';

const ThinkingIndicator = ({ thinking, isProcessing }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  if (!thinking) return null;

  const steps = thinking.split('\n').reduce((acc, step) => {
    if (step.trim() === '') return acc;
    
    const [_, ...content] = step.split('. ');
    if (!content.length) return acc;
    
    acc.push(content.join('. ').trim());
    return acc;
  }, []);

  return (
    <div className="mb-4 bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm">
      <div className="px-4 py-3">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center gap-2 mb-3"
        >
          <span className={`h-2 w-2 rounded-full ${isProcessing ? 'bg-orange-500 animate-pulse' : 'bg-emerald-500'}`}></span>
          <span className="font-mono text-emerald-400 text-xs flex-1 text-left">Agent Thinking Process</span>
          {isProcessing && (
            <span className="text-orange-500 text-xs flex items-center">
              thinking
              <span className="inline-flex ml-1">
                <span className="animate-[bounce_1s_infinite_0ms] mr-0.5">.</span>
                <span className="animate-[bounce_1s_infinite_200ms] mr-0.5">.</span>
                <span className="animate-[bounce_1s_infinite_400ms]">.</span>
              </span>
            </span>
          )}
          {!isProcessing && (
            <span className="text-emerald-500 text-xs">completed</span>
          )}
          <svg 
            className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isExpanded && (
          <div className="space-y-2.5">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="text-sm text-gray-300 pl-4 flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                    isProcessing && index === steps.length - 1 
                      ? 'bg-orange-500 animate-pulse' 
                      : index < steps.length - 1 || !isProcessing 
                        ? 'bg-emerald-500' 
                        : 'bg-gray-500'
                  }`}></span>
                  <span className="flex-1">{step}</span>
                </div>
                {isProcessing && index === steps.length - 1 && (
                  <div className="mt-2 h-0.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500/20 animate-progress"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThinkingIndicator; 