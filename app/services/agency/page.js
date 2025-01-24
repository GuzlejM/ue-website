"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

const AgencyPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={theme}>AI Agency</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Full-Service AI Development Agency
          </h1>
          <p className={`section-description ${theme}`}>
            Your partner in building and deploying cutting-edge AI solutions that drive business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Strategy & Planning",
              description: "Develop comprehensive AI strategies aligned with your business goals.",
              icon: "🎯"
            },
            {
              title: "Agent Development",
              description: "Custom AI agent development tailored to your specific needs.",
              icon: "🤖"
            },
            {
              title: "Integration Services",
              description: "Seamless integration of AI solutions into your existing systems.",
              icon: "🔄"
            },
            {
              title: "Training & Optimization",
              description: "Expert training and fine-tuning of AI models for optimal performance.",
              icon: "📈"
            },
            {
              title: "Maintenance & Support",
              description: "Ongoing maintenance and support to ensure continuous operation.",
              icon: "🛠️"
            },
            {
              title: "Scaling & Growth",
              description: "Scale your AI solutions as your business grows.",
              icon: "🚀"
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

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme} text-center mb-12`}>Why Choose Our Agency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Seasoned AI developers and engineers with proven track record.",
                icon: "👥"
              },
              {
                title: "End-to-End Service",
                description: "Complete solution from strategy to deployment and maintenance.",
                icon: "🔄"
              },
              {
                title: "Cutting-Edge Technology",
                description: "Access to the latest AI technologies and best practices.",
                icon: "💡"
              },
              {
                title: "Scalable Solutions",
                description: "Solutions that grow with your business needs.",
                icon: "📈"
              }
            ].map((benefit, index) => (
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
                <div className={`service-card ${theme} relative transform group-hover:scale-[1.02] transition-all`}>
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className={`title ${theme}`}>{benefit.title}</h3>
                  <p className={`content ${theme}`}>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme} mb-24`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className={`section-title ${theme} mb-6`}>Ready to Build Your AI Solution?</h2>
            <p className={`section-description ${theme} mb-12 max-w-2xl mx-auto`}>
              Let&apos;s discuss how our agency can help bring your AI vision to life.
            </p>
            <a href="/contact" className={`primary-button ${theme}`}>
              Get Started
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

export default AgencyPage;