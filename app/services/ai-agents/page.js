"use client";

import { useTheme } from "../../../context/ThemeContext";
import { motion } from "framer-motion";

const AIAgentsPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={theme}>AI Agents</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Intelligent AI Agents Development
          </h1>
          <p className={`section-description ${theme}`}>
            Build sophisticated AI agents that automate tasks, enhance productivity, and transform your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Task Automation",
              description: "Automate repetitive tasks with intelligent AI agents.",
              icon: "🤖"
            },
            {
              title: "Decision Support",
              description: "AI agents that assist in complex decision-making processes.",
              icon: "🧠"
            },
            {
              title: "Process Optimization",
              description: "Optimize workflows with AI-powered process automation.",
              icon: "⚡"
            },
            {
              title: "Data Analysis",
              description: "Intelligent agents for real-time data analysis and insights.",
              icon: "📊"
            },
            {
              title: "Customer Service",
              description: "24/7 customer support with AI-powered agents.",
              icon: "💬"
            },
            {
              title: "Integration",
              description: "Seamless integration with existing systems and workflows.",
              icon: "🔄"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`service-card ${theme}`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`title ${theme}`}>{service.title}</h3>
              <p className={`content ${theme}`}>{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Development Process */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme}`}>Development Process</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Requirements Analysis",
                description: "Understanding your specific needs and objectives"
              },
              {
                step: "2",
                title: "Agent Design",
                description: "Creating the architecture and capabilities of your AI agent"
              },
              {
                step: "3",
                title: "Development & Training",
                description: "Building and training the AI agent with your data"
              },
              {
                step: "4",
                title: "Testing & Optimization",
                description: "Rigorous testing and performance optimization"
              },
              {
                step: "5",
                title: "Deployment",
                description: "Seamless integration into your existing systems"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`service-card ${theme}`}
              >
                <div className={`flex items-center gap-4`}>
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#8ab4f8] to-[#c7a7ea] rounded-full flex items-center justify-center font-bold text-white">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className={`title ${theme}`}>{phase.title}</h3>
                    <p className={`content ${theme}`}>{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme}`}>
          <div className="text-center">
            <h2 className={`section-title ${theme}`}>Ready to Build Your AI Agent?</h2>
            <p className={`section-description ${theme} max-w-2xl mx-auto mb-12`}>
              Let&apos;s discuss how our AI agent development services can transform your business operations.
            </p>
            <a href="/contact" className={`cta-button ${theme}`}>
              Start Your Project
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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