"use client";

import { motion } from "framer-motion";

const AIAgentsPage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-200">AI Agents Development</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
            Build Powerful AI Agents for Your Business
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Transform your operations with intelligent, autonomous AI agents that handle complex tasks and drive business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Custom Agent Development",
              description: "Tailored AI agents designed specifically for your business needs and workflows.",
              icon: "🤖"
            },
            {
              title: "Multi-Agent Systems",
              description: "Create collaborative AI ecosystems where multiple agents work together seamlessly.",
              icon: "🔄"
            },
            {
              title: "Natural Language Processing",
              description: "Enable human-like communication and understanding in your AI agents.",
              icon: "💬"
            },
            {
              title: "Task Automation",
              description: "Automate repetitive tasks and complex workflows with intelligent agents.",
              icon: "⚡"
            },
            {
              title: "Learning & Adaptation",
              description: "Agents that learn and improve from experience and user interactions.",
              icon: "🧠"
            },
            {
              title: "Integration Ready",
              description: "Seamlessly integrate with your existing systems and workflows.",
              icon: "🔌"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Development Process</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Requirements Analysis",
                description: "We work closely with you to understand your specific needs and objectives for the AI agent."
              },
              {
                step: "2",
                title: "Architecture Design",
                description: "Creating a robust and scalable architecture that supports your agent's functionality."
              },
              {
                step: "3",
                title: "Development & Training",
                description: "Building and training your AI agent with cutting-edge machine learning techniques."
              },
              {
                step: "4",
                title: "Testing & Optimization",
                description: "Rigorous testing and performance optimization to ensure reliability and efficiency."
              },
              {
                step: "5",
                title: "Deployment & Integration",
                description: "Seamless deployment and integration with your existing systems and workflows."
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#8ab4f8] to-[#c7a7ea] rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-400">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-8">Ready to Build Your AI Agent?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI agent development services can transform your business operations.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
          >
            Start Your Project
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage; 