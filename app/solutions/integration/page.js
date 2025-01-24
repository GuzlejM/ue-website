"use client";

import { useTheme } from "../../../context/ThemeContext";

const IntegrationPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={theme}>Integration Solutions</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Seamless AI Integration
          </h1>
          <p className={`section-description ${theme}`}>
            Connect your systems with state-of-the-art AI solutions for enhanced performance and automation.
          </p>
        </div>

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
            <div key={index} className={`service-card ${theme}`}>
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className={`title ${theme}`}>{type.title}</h3>
              <p className={`content ${theme}`}>{type.description}</p>
              <ul className="space-y-3">
                {type.features.map((feature, featureIndex) => (
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
    </div>
  );
};

export default IntegrationPage; 