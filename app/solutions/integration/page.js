"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const IntegrationPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`badge ${theme}`}>
              <span className={theme}>Integration Solutions</span>
            </div>
            <h1 className={`heading-gradient ${theme}`}>
              Seamless AI Integration
            </h1>
            <p className={`section-description ${theme}`}>
              Connect your systems with state-of-the-art AI solutions for enhanced performance and automation.
            </p>
          </motion.div>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "API Integration",
              description: "Connect with any third-party API",
              features: [
                "RESTful API support",
                "GraphQL integration",
                "Custom endpoints",
                "Rate limiting"
              ],
              icon: "🔌"
            },
            {
              title: "Database Integration",
              description: "Connect with various database systems",
              features: [
                "SQL databases",
                "NoSQL support",
                "Data migration",
                "Real-time sync"
              ],
              icon: "💾"
            },
            {
              title: "Cloud Integration",
              description: "Seamless cloud service integration",
              features: [
                "AWS services",
                "Google Cloud",
                "Azure integration",
                "Multi-cloud support"
              ],
              icon: "☁️"
            },
            {
              title: "Legacy System Integration",
              description: "Connect modern AI with legacy systems",
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform ${
                theme === 'light' 
                  ? 'bg-primary/5' 
                  : 'bg-gradient-to-br from-gradient-blue/20 via-gradient-purple/20 to-gradient-pink/20'
              }`}></div>
              <div className={`service-card ${theme} relative transform group-hover:scale-[1.02] transition-all`}>
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className={`title ${theme}`}>{type.title}</h3>
                <p className={`content ${theme} mb-6`}>{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}
                    >
                      <svg className={`w-5 h-5 ${theme === 'light' ? 'text-primary' : 'text-[#8ab4f8]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className={`cta-section ${theme} mt-24 mb-24`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className={`section-title ${theme} mb-6`}>Ready to Integrate?</h2>
            <p className={`section-description ${theme} mb-12 max-w-2xl mx-auto`}>
              Let&apos;s connect your systems with powerful AI solutions that drive real results.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/contact" className={`primary-button ${theme}`}>
                Start Integration
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="/solutions/enterprise" className={`secondary-button ${theme}`}>
                Learn More
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntegrationPage; 