"use client";

import { motion } from "framer-motion";

const AgencyPage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-200">Agent Agency</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
            Your One-Stop AI Agency Solution
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We handle the entire lifecycle of AI agents, from conception to optimization, ensuring your business gets the most out of AI technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Strategy & Planning",
              description: "Comprehensive AI strategy aligned with your business objectives and market demands.",
              icon: "📋"
            },
            {
              title: "Agent Development",
              description: "End-to-end development of custom AI agents tailored to your specific needs.",
              icon: "⚙️"
            },
            {
              title: "Integration Services",
              description: "Seamless integration of AI agents with your existing systems and workflows.",
              icon: "🔄"
            },
            {
              title: "Training & Optimization",
              description: "Continuous training and performance optimization of your AI agents.",
              icon: "📈"
            },
            {
              title: "Maintenance & Support",
              description: "24/7 monitoring and support to ensure optimal agent performance.",
              icon: "🛠️"
            },
            {
              title: "Scaling & Growth",
              description: "Strategic scaling of your AI capabilities as your business grows.",
              icon: "🚀"
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

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Agency?</h2>
          <div className="space-y-8">
            {[
              {
                title: "Expert Team",
                description: "Access to a team of AI specialists, developers, and consultants with proven expertise."
              },
              {
                title: "End-to-End Service",
                description: "Complete management of your AI initiatives from strategy to implementation and beyond."
              },
              {
                title: "Cutting-Edge Technology",
                description: "Utilization of the latest AI technologies and best practices in the industry."
              },
              {
                title: "Scalable Solutions",
                description: "Flexible solutions that grow with your business needs and requirements."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#2a3170]/30 to-[#4b3488]/30 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our agency can help you leverage AI technology for business growth.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgencyPage; 