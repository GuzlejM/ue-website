"use client";

import { motion } from "framer-motion";

const ConsultingPage = () => {
  return (
    <div className="bg-[#1a1c3b] min-h-screen pt-32 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-200">AI Consulting</span>
          </div>
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
            Strategic AI Consulting Services
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Expert guidance for implementing AI solutions that drive innovation and business transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "AI Strategy Development",
              description: "Create a comprehensive AI roadmap aligned with your business objectives.",
              icon: "🎯"
            },
            {
              title: "Technology Assessment",
              description: "Evaluate and recommend the best AI technologies for your needs.",
              icon: "🔍"
            },
            {
              title: "Process Optimization",
              description: "Identify opportunities for AI-driven process improvements.",
              icon: "⚡"
            },
            {
              title: "Risk Management",
              description: "Assess and mitigate risks associated with AI implementation.",
              icon: "🛡️"
            },
            {
              title: "Change Management",
              description: "Guide your organization through AI transformation.",
              icon: "🔄"
            },
            {
              title: "ROI Analysis",
              description: "Measure and optimize the return on AI investments.",
              icon: "📊"
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

        {/* Approach Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Consulting Approach</h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Discovery & Assessment",
                description: "Understanding your current state, challenges, and objectives."
              },
              {
                step: "2",
                title: "Strategy Development",
                description: "Creating a tailored AI implementation strategy and roadmap."
              },
              {
                step: "3",
                title: "Solution Design",
                description: "Designing AI solutions that address your specific needs."
              },
              {
                step: "4",
                title: "Implementation Support",
                description: "Guiding you through the implementation process."
              },
              {
                step: "5",
                title: "Optimization & Growth",
                description: "Continuous improvement and scaling of AI solutions."
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
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your AI Journey?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our consulting services can help you achieve your AI goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultingPage; 