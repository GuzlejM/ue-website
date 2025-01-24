"use client";

import { markdownify } from "@lib/utils/textConverter";
import { useState, useRef, useEffect, FormEvent, KeyboardEvent } from "react";

interface FAQ {
  title: string;
  answer: string;
}

interface AiFrontmatter {
  title: string;
  faqs: FAQ[];
}

interface AiData {
  frontmatter: AiFrontmatter;
}

interface AiProps {
  data: AiData;
}

interface Message {
  question: string;
  answer: string;
}

const Ai: React.FC<AiProps> = ({ data }) => {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  const [userInput, setUserInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize with all FAQs on component mount
  useEffect(() => {
    if (faqs && faqs.length > 0) {
      const initialMessages = faqs.map(faq => ({
        question: faq.title,
        answer: faq.answer
      }));
      setMessages(initialMessages);
    }
  }, [faqs]);

  // Scroll chat container to latest message
  const scrollToLatestMessage = () => {
    if (chatContainerRef.current) {
      const scrollHeight = chatContainerRef.current.scrollHeight;
      chatContainerRef.current.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  // Handle new message scroll
  useEffect(() => {
    if (messages.length > faqs.length) {
      scrollToLatestMessage();
    }
  }, [messages, faqs.length]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    
    const newMessage: Message = {
      question: userInput,
      answer: "I'm processing your request..."
    };
    
    setMessages([...messages, newMessage]);
    setUserInput("");
    
    setTimeout(() => {
      setMessages(prevMessages => 
        prevMessages.map((msg, idx) => 
          idx === prevMessages.length - 1 
            ? {...msg, answer: "This is a sample response from the AI assistant. In a real implementation, this would come from your AI backend."}
            : msg
        )
      );
    }, 1000);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
    }
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row -mt-6">
          <div className="mx-auto max-w-[800px] rounded-xl border border-border bg-white p-5 shadow-lg">
            <div 
              ref={chatContainerRef}
              className="chat-messages max-h-[500px] overflow-y-auto"
            >
              {messages.map((message, index) => (
                <div key={index} className="mt-6">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-lg bg-primary px-4 py-3 text-white">
                      {markdownify(message.question, "p", "font-medium")}
                    </div>
                  </div>
                  <div className="mt-3 flex">
                    <div className="max-w-[80%] rounded-lg bg-theme-light px-4 py-3">
                      {markdownify(message.answer, "p", "faq-body")}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="my-4 border-t border-border"></div>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                className="form-input w-full rounded-full border-2 py-3 pl-4 pr-[100px]"
                placeholder="Ask the AI Assistant anything..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                type="submit"
                className="btn btn-primary absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-6 py-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ai; 