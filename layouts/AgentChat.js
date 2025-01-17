"use client";

import { useRef, useEffect } from "react";
import Message from "../components/agent/Message";
import ThinkingIndicator from "../components/agent/ThinkingIndicator";
import ChatInput from "../components/agent/ChatInput";
import { useAgent } from "../hooks/useAgent";

function AgentChat({ data }) {
  const { 
    messages, 
    userInput, 
    setUserInput, 
    isProcessing, 
    thinkingSteps,
    handleSubmit 
  } = useAgent();

  const chatContainerRef = useRef(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  if (!data) {
    return (
      <section className="section bg-gray-900">
        <div className="container">
          <div className="text-center">
            <h1 className="h2 mb-4 text-gray-200">Error Loading Agent Chat</h1>
            <p className="text-gray-400">Unable to load the chat interface. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section bg-gray-900 min-h-screen">
      <div className="container">
        <h1 className="text-center font-normal text-gray-200 mb-8">{title}</h1>
        <div className="section row">
          <div className="mx-auto max-w-[800px]">
            {/* Thinking Indicator */}
            {thinkingSteps.map((step, index) => (
              <ThinkingIndicator 
                key={index}
                thinking={step.text}
                isProcessing={isProcessing && index === thinkingSteps.length - 1}
              />
            ))}

            {/* Main Chat Window */}
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-5 shadow-lg backdrop-blur">
              <div 
                ref={chatContainerRef}
                className="chat-messages max-h-[500px] overflow-y-auto space-y-6"
              >
                {messages.map((message, index) => (
                  <Message key={index} message={message} />
                ))}
              </div>

              <div className="my-4 border-t border-gray-700"></div>

              <ChatInput
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onSubmit={handleSubmit}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentChat; 