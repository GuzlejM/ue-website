"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const ConsultingPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={theme}>AI Consulting</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Strategic AI Consulting Services
          </h1>
          <p className={`section-description ${theme}`}>
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
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform ${
                theme === 'light' 
                  ? 'bg-primary/5' 
                  : 'bg-gradient-to-br from-gradient-blue/20 via-gradient-purple/20 to-gradient-pink/20'
              }`}></div>
              <div className={`service-card ${theme} relative transform group-hover:scale-[1.02] transition-all`}>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className={`title ${theme}`}>{service.title}</h3>
                <p className={`content ${theme}`}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Approach Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme} text-center mb-12`}>Our Consulting Approach</h2>
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
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform ${
                  theme === 'light' 
                    ? 'bg-primary/5' 
                    : 'bg-gradient-to-br from-gradient-blue/20 via-gradient-purple/20 to-gradient-pink/20'
                }`}></div>
                <div className={`service-card ${theme} relative transform group-hover:scale-[1.02] transition-all flex items-start gap-4`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    theme === 'light' 
                      ? 'bg-primary text-white' 
                      : 'primary-gradient text-white'
                  }`}>
                    {phase.step}
                  </div>
                  <div>
                    <h3 className={`title ${theme} mb-2`}>{phase.title}</h3>
                    <p className={`content ${theme}`}>{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme} mb-24`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className={`section-title ${theme} mb-6`}>Ready to Start Your AI Journey?</h2>
            <p className={`section-description ${theme} mb-12 max-w-2xl mx-auto`}>
              Let&apos;s discuss how our consulting services can help you achieve your AI goals.
            </p>
            <a href="/contact" className={`primary-button ${theme}`}>
              Schedule a Consultation
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

export default ConsultingPage; 