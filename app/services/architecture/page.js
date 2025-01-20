"use client";

import { motion } from "framer-motion";

const ArchitecturePage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-200">Architecture Design</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
            Future-Proof AI Architecture Design
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Design scalable, robust, and efficient AI systems that grow with your business while maintaining peak performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Scalable Design",
              description: "Architecture that scales seamlessly with your growing business needs.",
              icon: "📐"
            },
            {
              title: "Performance Optimization",
              description: "Optimized systems designed for maximum efficiency and minimal latency.",
              icon: "⚡"
            },
            {
              title: "Security First",
              description: "Built-in security measures to protect your AI systems and data.",
              icon: "🔒"
            },
            {
              title: "Cloud Integration",
              description: "Seamless integration with leading cloud platforms and services.",
              icon: "☁️"
            },
            {
              title: "Microservices",
              description: "Modular architecture for flexibility and easy maintenance.",
              icon: "🔄"
            },
            {
              title: "Data Pipeline Design",
              description: "Efficient data flows for optimal AI model performance.",
              icon: "📊"
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

        {/* Design Principles */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Design Principles</h2>
          <div className="space-y-8">
            {[
              {
                title: "Scalability",
                description: "Systems that grow seamlessly with your business without compromising performance."
              },
              {
                title: "Reliability",
                description: "Robust architecture with built-in redundancy and fault tolerance."
              },
              {
                title: "Security",
                description: "Multi-layered security approach protecting your data and systems."
              },
              {
                title: "Maintainability",
                description: "Clean, well-documented design that&apos;s easy to maintain and update."
              },
              {
                title: "Cost Efficiency",
                description: "Optimized resource utilization to minimize operational costs."
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-6"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#8ab4f8] to-[#c7a7ea] rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                  <p className="text-gray-400">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                phase: "Discovery",
                description: "Understanding your requirements, constraints, and objectives.",
                icon: "🔍"
              },
              {
                phase: "Design",
                description: "Creating detailed architecture blueprints and documentation.",
                icon: "✏️"
              },
              {
                phase: "Validation",
                description: "Testing and validating the design through prototypes.",
                icon: "✅"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{process.phase}</h3>
                <p className="text-gray-400">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-8">Ready to Design Your AI Architecture?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s create a robust and scalable architecture for your AI systems.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
          >
            Start Designing
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturePage; 