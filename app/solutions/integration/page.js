"use client";

import { motion } from "framer-motion";

const IntegrationPage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section with Floating Elements */}
      <div className="container mx-auto px-4">
        <div className="relative mb-24">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#8ab4f8]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#f6a6c1]/30 rounded-full blur-3xl"></div>
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
                <span className="text-sm font-medium text-gray-200">AI Integration</span>
              </div>
              <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
                Seamless AI Integration Solutions
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Connect and enhance your existing systems with powerful AI capabilities through our seamless integration services.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                "API Integration", "Data Pipeline", "Cloud Services", "Legacy Systems"
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-4 text-center"
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Integration Types */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Integration Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "API Integration",
                description: "Connect your systems through RESTful APIs and webhooks",
                features: [
                  "Custom API development",
                  "Webhook implementation",
                  "Real-time data sync",
                  "Security protocols"
                ],
                icon: "🔌"
              },
              {
                title: "Database Integration",
                description: "Seamless connection with your existing databases",
                features: [
                  "Multiple database support",
                  "Data migration",
                  "Schema optimization",
                  "Query performance"
                ],
                icon: "💾"
              },
              {
                title: "Cloud Integration",
                description: "Integration with major cloud service providers",
                features: [
                  "AWS/Azure/GCP support",
                  "Cloud-native design",
                  "Scalability options",
                  "Cost optimization"
                ],
                icon: "☁️"
              },
              {
                title: "Legacy System Integration",
                description: "Connect modern AI with legacy enterprise systems",
                features: [
                  "Legacy system support",
                  "Data transformation",
                  "Protocol adaptation",
                  "Performance tuning"
                ],
                icon: "🏢"
              }
            ].map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8ab4f8]/20 via-[#c7a7ea]/20 to-[#f6a6c1]/20 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform"></div>
                <div className="relative bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-400">
                        <svg className="w-5 h-5 text-[#8ab4f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Process */}
        <div className="max-w-5xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Integration Process</h2>
          <div className="relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description: "Thorough analysis of your current systems and integration requirements",
                  icon: "🔍"
                },
                {
                  step: "2",
                  title: "Planning",
                  description: "Detailed integration strategy and architecture design",
                  icon: "📋"
                },
                {
                  step: "3",
                  title: "Development",
                  description: "Implementation of integration solutions with continuous testing",
                  icon: "⚙️"
                },
                {
                  step: "4",
                  title: "Testing",
                  description: "Comprehensive testing of all integration points",
                  icon: "🔬"
                },
                {
                  step: "5",
                  title: "Deployment",
                  description: "Careful deployment with minimal system disruption",
                  icon: "🚀"
                },
                {
                  step: "6",
                  title: "Monitoring",
                  description: "Continuous monitoring and optimization of integration performance",
                  icon: "📊"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 backdrop-blur-lg rounded-xl p-6"
                >
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-[#8ab4f8] to-[#c7a7ea] rounded-lg flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-16">Integration Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Improved Efficiency",
                description: "Streamline operations and reduce manual tasks",
                icon: "⚡"
              },
              {
                title: "Data Consistency",
                description: "Maintain data integrity across all systems",
                icon: "🔄"
              },
              {
                title: "Cost Reduction",
                description: "Optimize resource utilization and reduce overhead",
                icon: "💰"
              },
              {
                title: "Scalability",
                description: "Easily scale your integrated systems as needed",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8ab4f8]/20 via-[#c7a7ea]/20 to-[#f6a6c1]/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Ready to Integrate AI?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let&apos;s enhance your systems with powerful AI capabilities through seamless integration.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#8ab4f8] to-[#c7a7ea] text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
                  >
                    Get Started
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="/documentation"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
                  >
                    View Documentation
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8ab4f8]/20 via-[#c7a7ea]/20 to-[#f6a6c1]/20 rounded-2xl blur-lg"></div>
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8">
                  <div className="space-y-4">
                    {[
                      "RESTful APIs",
                      "GraphQL Support",
                      "WebSocket Integration",
                      "Custom Connectors"
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <svg className="w-5 h-5 text-[#8ab4f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationPage; 