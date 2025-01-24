"use client";

import { useTheme } from "../../../context/ThemeContext";

const MaintenancePage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={theme}>Maintenance</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            AI System Maintenance & Support
          </h1>
          <p className={`section-description ${theme}`}>
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
            <div key={index} className={`service-card ${theme}`}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`title ${theme}`}>{service.title}</h3>
              <p className={`content ${theme}`}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Support Plans */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme}`}>Support Plans</h2>
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
              <div key={index} className={`service-card ${theme}`}>
                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className={`title ${theme}`}>{plan.name}</h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                      <svg className={`w-5 h-5 ${theme === 'light' ? 'text-primary' : 'text-[#8ab4f8]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Process */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme}`}>Our Maintenance Process</h2>
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
              <div key={index} className={`service-card ${theme}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                    theme === 'light' 
                      ? 'bg-primary text-white' 
                      : 'bg-gradient-to-br from-[#8ab4f8] to-[#c7a7ea] text-white'
                  }`}>
                    {phase.step}
                  </div>
                  <div>
                    <h3 className={`title ${theme}`}>{phase.title}</h3>
                    <p className={`content ${theme}`}>{phase.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme}`}>
          <div className="text-center">
            <h2 className={`section-title ${theme}`}>Ready to Maintain Your AI Systems?</h2>
            <p className={`section-description ${theme} max-w-2xl mx-auto mb-12`}>
              Let&apos;s ensure your AI systems stay reliable and efficient with our expert maintenance services.
            </p>
            <a href="/contact" className={`cta-button ${theme}`}>
              Get Support
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

export default MaintenancePage; 