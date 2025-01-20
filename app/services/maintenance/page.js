"use client";

import { motion } from "framer-motion";

const MaintenancePage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-200">Maintenance</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
            AI System Maintenance & Support
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Keep your AI systems running at peak performance with our comprehensive maintenance and support services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Performance Monitoring",
              description: "24/7 monitoring of your AI systems to ensure optimal performance.",
              icon: "📊"
            },
            {
              title: "Model Updates",
              description: "Regular updates and fine-tuning of AI models for improved accuracy.",
              icon: "🔄"
            },
            {
              title: "Bug Fixes",
              description: "Quick resolution of issues and system anomalies.",
              icon: "🐛"
            },
            {
              title: "Security Patches",
              description: "Regular security updates to protect against vulnerabilities.",
              icon: "🔒"
            },
            {
              title: "System Optimization",
              description: "Continuous optimization for better efficiency and resource usage.",
              icon: "⚡"
            },
            {
              title: "Technical Support",
              description: "Expert support team available for assistance and problem resolution.",
              icon: "🛟"
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

        {/* Support Plans */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Support Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                features: [
                  "8/5 Support",
                  "Monthly Updates",
                  "Bug Fixes",
                  "Email Support",
                  "Basic Monitoring"
                ],
                icon: "🌱"
              },
              {
                name: "Professional",
                features: [
                  "16/7 Support",
                  "Weekly Updates",
                  "Priority Bug Fixes",
                  "Email & Chat Support",
                  "Advanced Monitoring",
                  "Performance Reports"
                ],
                icon: "⭐"
              },
              {
                name: "Enterprise",
                features: [
                  "24/7 Support",
                  "Continuous Updates",
                  "Emergency Bug Fixes",
                  "Dedicated Support Team",
                  "Real-time Monitoring",
                  "Custom Reports",
                  "Proactive Optimization"
                ],
                icon: "👑"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-8"
              >
                <div className="text-4xl mb-4 text-center">{plan.icon}</div>
                <h3 className="text-2xl font-semibold mb-6 text-center">{plan.name}</h3>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#8ab4f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Maintenance Process */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Maintenance Process</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "System Monitoring",
                description: "Continuous monitoring of system performance and health metrics."
              },
              {
                step: "2",
                title: "Issue Detection",
                description: "Early detection and diagnosis of potential problems."
              },
              {
                step: "3",
                title: "Analysis & Planning",
                description: "Thorough analysis and development of resolution strategies."
              },
              {
                step: "4",
                title: "Implementation",
                description: "Careful implementation of fixes and improvements."
              },
              {
                step: "5",
                title: "Verification",
                description: "Testing and verification of system stability after changes."
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
          <h2 className="text-4xl font-bold mb-8">Ready to Maintain Your AI Systems?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s ensure your AI systems stay reliable and efficient with our expert maintenance services.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
          >
            Get Support
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage; 