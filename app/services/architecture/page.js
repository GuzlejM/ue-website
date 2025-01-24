"use client";

import { useTheme } from "../../../context/ThemeContext";

const ArchitecturePage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={`badge-text ${theme}`}>Architecture Design</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Future-Proof AI Architecture Design
          </h1>
          <p className={`section-description ${theme}`}>
            Design scalable, robust, and efficient AI systems that grow with your business while maintaining peak performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Scalable Design",
              description: "Architecture that scales seamlessly with your growing business needs.",
              icon: "📐"
            },
            {
              title: "Performance Optimization",
              description: "Optimized systems designed for maximum efficiency and minimal latency.",
              icon: "⚡"
            },
            {
              title: "Security First",
              description: "Built-in security measures to protect your AI systems and data.",
              icon: "🔒"
            },
            {
              title: "Cloud Integration",
              description: "Seamless integration with leading cloud platforms and services.",
              icon: "☁️"
            },
            {
              title: "Microservices",
              description: "Modular architecture for flexibility and easy maintenance.",
              icon: "🔄"
            },
            {
              title: "Data Pipeline Design",
              description: "Efficient data flows for optimal AI model performance.",
              icon: "📊"
            }
          ].map((feature, index) => (
            <div key={index} className={`service-card theme-card ${theme}`}>
              <div className={`card-icon ${theme}`}>{feature.icon}</div>
              <h3 className={`card-title ${theme}`}>{feature.title}</h3>
              <p className={`card-content ${theme}`}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Design Principles */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title theme-text ${theme}`}>Our Design Principles</h2>
          <div className="space-y-8">
            {[
              {
                title: "Scalability",
                description: "Systems that grow seamlessly with your business without compromising performance."
              },
              {
                title: "Reliability",
                description: "Robust architecture with built-in redundancy and fault tolerance."
              },
              {
                title: "Security",
                description: "Multi-layered security approach protecting your data and systems."
              },
              {
                title: "Maintainability",
                description: "Clean, well-documented design that&apos;s easy to maintain and update."
              },
              {
                title: "Cost Efficiency",
                description: "Optimized resource utilization to minimize operational costs."
              }
            ].map((principle, index) => (
              <div key={index} className={`service-card theme-card ${theme}`}>
                <h3 className={`card-title ${theme}`}>{principle.title}</h3>
                <p className={`card-content ${theme}`}>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme}`}>
          <div className="text-center">
            <h2 className={`section-title ${theme}`}>Ready to Design Your AI Architecture?</h2>
            <p className={`section-description ${theme} max-w-2xl mx-auto mb-12`}>
              Let&apos;s create a robust, scalable architecture that sets your AI systems up for success.
            </p>
            <a href="/contact" className={`cta-button ${theme}`}>
              Start Design
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

export default ArchitecturePage; 