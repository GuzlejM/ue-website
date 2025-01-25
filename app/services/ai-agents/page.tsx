"use client";

import React from 'react';
import { useTheme } from "../../../context/ThemeContext";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface UseCase {
  title: string;
  description: string;
  features: string[];
}

const AIAgentsPage: React.FC = () => {
  const { theme } = useTheme();
  
  const features: Feature[] = [
    {
      title: "Natural Language Understanding",
      description: "Advanced language processing for human-like interactions.",
      icon: "💬"
    },
    {
      title: "Task Automation",
      description: "Intelligent automation of repetitive tasks and workflows.",
      icon: "🤖"
    },
    {
      title: "Decision Making",
      description: "Data-driven insights and intelligent decision support.",
      icon: "🧠"
    },
    {
      title: "Integration Ready",
      description: "Seamless integration with your existing tools and systems.",
      icon: "🔌"
    },
    {
      title: "24/7 Operation",
      description: "Round-the-clock availability for consistent support.",
      icon: "⏰"
    },
    {
      title: "Scalable Performance",
      description: "Grows with your business without compromising efficiency.",
      icon: "📈"
    }
  ];

  const useCases: UseCase[] = [
    {
      title: "Customer Service",
      description: "Enhance customer support with intelligent automation",
      features: [
        "24/7 instant response",
        "Multi-language support",
        "Ticket management",
        "Sentiment analysis"
      ]
    },
    {
      title: "Process Automation",
      description: "Streamline operations with smart workflows",
      features: [
        "Document processing",
        "Data extraction",
        "Workflow automation",
        "Quality control"
      ]
    },
    {
      title: "Development Support",
      description: "Accelerate development with AI assistance",
      features: [
        "Code generation",
        "Testing automation",
        "Documentation",
        "Deployment support"
      ]
    }
  ];
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={`badge-text ${theme}`}>AI Agents</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Intelligent AI Agents for Modern Business
          </h1>
          <p className={`section-description ${theme}`}>
            Empower your business with intelligent AI agents that automate tasks, enhance productivity, and drive growth through advanced automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className={`service-card theme-card ${theme} hover:bg-opacity-90 transition-colors duration-300`}>
              <div className={`card-icon ${theme}`}>{feature.icon}</div>
              <h3 className={`card-title ${theme}`}>{feature.title}</h3>
              <p className={`card-content ${theme}`}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Use Cases Section */}
        <div className="mb-24">
          <h2 className={`section-title theme-text ${theme} text-center mb-12`}>Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className={`service-card theme-card ${theme} hover:shadow-2xl transition-shadow duration-300`}>
                <h3 className={`card-title ${theme}`}>{useCase.title}</h3>
                <p className={`card-subtitle ${theme}`}>{useCase.description}</p>
                <ul className={`card-list ${theme} mt-4`}>
                  {useCase.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center mb-2">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme}`}>
          <div className="text-center">
            <h2 className={`section-title ${theme}`}>Ready to Automate Your Business?</h2>
            <p className={`section-description ${theme} max-w-2xl mx-auto mb-12`}>
              Schedule a demo to see how our AI agents can transform your operations.
            </p>
            <a href="/contact" className={`cta-button ${theme}`}>
              Schedule Demo
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage; 