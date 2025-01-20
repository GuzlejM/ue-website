"use client";

import { motion } from "framer-motion";

const DevelopmentPage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-200">Development</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
            Cutting-Edge AI Development
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Build robust, efficient, and maintainable AI solutions using the latest technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Custom AI Solutions",
              description: "Tailored AI applications designed to meet your specific business requirements.",
              icon: "💻"
            },
            {
              title: "Machine Learning",
              description: "Advanced ML models for prediction, classification, and data analysis.",
              icon: "🧠"
            },
            {
              title: "Deep Learning",
              description: "Neural networks for complex pattern recognition and decision-making.",
              icon: "🔮"
            },
            {
              title: "NLP Solutions",
              description: "Natural Language Processing for text analysis and understanding.",
              icon: "📝"
            },
            {
              title: "Computer Vision",
              description: "Image and video analysis systems for visual data processing.",
              icon: "👁️"
            },
            {
              title: "API Development",
              description: "Robust APIs for seamless integration with AI services.",
              icon: "🔌"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Python",
                description: "Primary language for AI development",
                icon: "🐍"
              },
              {
                name: "TensorFlow",
                description: "Deep learning framework",
                icon: "📊"
              },
              {
                name: "PyTorch",
                description: "ML research and deployment",
                icon: "🔥"
              },
              {
                name: "Scikit-learn",
                description: "Machine learning tools",
                icon: "🛠️"
              },
              {
                name: "Docker",
                description: "Containerization",
                icon: "🐳"
              },
              {
                name: "Kubernetes",
                description: "Container orchestration",
                icon: "⚙️"
              },
              {
                name: "FastAPI",
                description: "API development",
                icon: "⚡"
              },
              {
                name: "MongoDB",
                description: "NoSQL database",
                icon: "🗄️"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-6"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Development Process</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Requirements Gathering",
                description: "Detailed analysis of your needs and project specifications."
              },
              {
                step: "2",
                title: "Design & Planning",
                description: "Creating technical specifications and development roadmap."
              },
              {
                step: "3",
                title: "Development",
                description: "Agile development with regular updates and iterations."
              },
              {
                step: "4",
                title: "Testing",
                description: "Comprehensive testing and quality assurance."
              },
              {
                step: "5",
                title: "Deployment",
                description: "Smooth deployment and integration with existing systems."
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
          <h2 className="text-4xl font-bold mb-8">Ready to Build Your AI Solution?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s turn your AI vision into reality with our expert development team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
          >
            Start Development
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPage; 