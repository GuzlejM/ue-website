"use client";

import { motion } from "framer-motion";

const CustomAgentsPage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section with Split Layout */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
              <span className="text-sm font-medium text-gray-200">Custom AI Agents</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
              Tailored AI Agents for Your Unique Needs
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Create powerful, custom AI agents that understand your business context and deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8ab4f8] to-[#c7a7ea] text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
              >
                Start Building
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#8ab4f8]/20 via-[#c7a7ea]/20 to-[#f6a6c1]/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Natural Language Processing",
                  "Machine Learning",
                  "Computer Vision",
                  "Predictive Analytics"
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#8ab4f8] to-[#c7a7ea]"></div>
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interactive Capabilities Section */}
        <div id="capabilities" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Agent Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Conversational AI",
                description: "Natural language understanding and generation for human-like interactions.",
                features: ["Context awareness", "Multi-language support", "Sentiment analysis"],
                icon: "💬"
              },
              {
                title: "Task Automation",
                description: "Automate repetitive tasks and complex workflows with intelligent agents.",
                features: ["Process automation", "Decision making", "Error handling"],
                icon: "⚡"
              },
              {
                title: "Data Analysis",
                description: "Extract insights and patterns from your data with AI-powered analysis.",
                features: ["Pattern recognition", "Predictive modeling", "Anomaly detection"],
                icon: "📊"
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8ab4f8]/20 via-[#c7a7ea]/20 to-[#f6a6c1]/20 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform"></div>
                <div className="relative bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 h-full transform group-hover:scale-[1.02] transition-all">
                  <div className="text-4xl mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 mb-6">{capability.description}</p>
                  <ul className="space-y-3">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-400">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8ab4f8] to-[#c7a7ea]"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Development Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1]"></div>
            <div className="space-y-24">
              {[
                {
                  phase: "Discovery",
                  description: "Understanding your needs and defining agent requirements",
                  details: ["Business analysis", "Use case definition", "Technical requirements"],
                  icon: "🔍"
                },
                {
                  phase: "Design",
                  description: "Creating the perfect architecture for your AI agent",
                  details: ["Agent architecture", "Integration design", "Security planning"],
                  icon: "✏️"
                },
                {
                  phase: "Development",
                  description: "Building and training your custom AI agent",
                  details: ["Model development", "Training & testing", "Performance optimization"],
                  icon: "💻"
                },
                {
                  phase: "Deployment",
                  description: "Launching your agent in a production environment",
                  details: ["System integration", "Performance monitoring", "User training"],
                  icon: "🚀"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block text-4xl mb-4">{phase.icon}</div>
                    <h3 className="text-2xl font-semibold mb-3">{phase.phase}</h3>
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-gray-400">{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#8ab4f8] to-[#c7a7ea] flex items-center justify-center">
                    <span className="text-2xl">{index + 1}</span>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8ab4f8]/20 via-[#c7a7ea]/20 to-[#f6a6c1]/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Custom AI Agent?</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let&apos;s create an AI agent that perfectly matches your business requirements and drives real results.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8ab4f8] to-[#c7a7ea] text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
              >
                Start Your Project
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="/solutions/enterprise"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
              >
                Enterprise Solutions
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAgentsPage; 