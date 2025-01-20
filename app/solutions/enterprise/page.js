"use client";

import { motion } from "framer-motion";

const EnterprisePage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-200">Enterprise Solutions</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
            Enterprise AI Solutions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Transform your enterprise with scalable, secure, and customized AI solutions designed for your business needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Scalable Infrastructure",
              description: "Enterprise-grade infrastructure that grows with your business needs.",
              icon: "🏢"
            },
            {
              title: "Data Security",
              description: "Advanced security measures to protect sensitive enterprise data.",
              icon: "🔐"
            },
            {
              title: "Custom Integration",
              description: "Seamless integration with existing enterprise systems.",
              icon: "🔄"
            },
            {
              title: "Analytics Dashboard",
              description: "Real-time insights and performance monitoring capabilities.",
              icon: "📊"
            },
            {
              title: "Compliance Ready",
              description: "Built to meet industry regulations and compliance standards.",
              icon: "✅"
            },
            {
              title: "24/7 Support",
              description: "Dedicated enterprise support team available round the clock.",
              icon: "🛟"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Enterprise Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Process Automation",
                description: "Automate complex business processes with intelligent AI systems.",
                icon: "⚙️"
              },
              {
                title: "Customer Intelligence",
                description: "Gain deep insights into customer behavior and preferences.",
                icon: "🎯"
              },
              {
                title: "Risk Management",
                description: "Predict and mitigate business risks with AI-powered analytics.",
                icon: "⚠️"
              },
              {
                title: "Resource Optimization",
                description: "Optimize resource allocation and improve operational efficiency.",
                icon: "📈"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-8"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Enterprise Features</h2>
          <div className="space-y-8">
            {[
              {
                title: "Advanced Security",
                description: "Enterprise-grade security with encryption, access controls, and audit trails.",
                features: [
                  "End-to-end encryption",
                  "Role-based access control",
                  "Security compliance",
                  "Regular security audits"
                ]
              },
              {
                title: "Scalable Architecture",
                description: "Highly scalable infrastructure designed for enterprise workloads.",
                features: [
                  "Load balancing",
                  "Auto-scaling",
                  "High availability",
                  "Disaster recovery"
                ]
              },
              {
                title: "Integration Capabilities",
                description: "Seamless integration with existing enterprise systems and workflows.",
                features: [
                  "API integration",
                  "Custom connectors",
                  "Data synchronization",
                  "Legacy system support"
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-gray-300">
                      <svg className="w-5 h-5 text-[#8ab4f8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our enterprise AI solutions can drive innovation and growth for your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
          >
            Schedule Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnterprisePage; 