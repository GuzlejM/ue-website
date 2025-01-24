"use client";

import { useTheme } from "../../../context/ThemeContext";

const DevelopmentPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={`badge-text ${theme}`}>Development</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Cutting-Edge AI Development
          </h1>
          <p className={`section-description ${theme}`}>
            Build robust, efficient, and maintainable AI solutions using the latest technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "Custom AI Solutions",
              description: "Tailored AI applications designed to meet your specific business requirements.",
              icon: "💻"
            },
            {
              title: "Machine Learning",
              description: "Advanced ML models for prediction, classification, and data analysis.",
              icon: "🧠"
            },
            {
              title: "Deep Learning",
              description: "Neural networks for complex pattern recognition and decision-making.",
              icon: "🔮"
            },
            {
              title: "NLP Solutions",
              description: "Natural Language Processing for text analysis and understanding.",
              icon: "📝"
            },
            {
              title: "Computer Vision",
              description: "Image and video analysis systems for visual data processing.",
              icon: "👁️"
            },
            {
              title: "API Development",
              description: "Robust APIs for seamless integration with AI services.",
              icon: "🔌"
            }
          ].map((service, index) => (
            <div key={index} className={`service-card ${theme}`}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className={`title ${theme}`}>{service.title}</h3>
              <p className={`content ${theme}`}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme}`}>Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                name: "Python",
                description: "Primary language for AI development",
                icon: "🐍"
              },
              {
                name: "TensorFlow",
                description: "Deep learning framework",
                icon: "📊"
              },
              {
                name: "PyTorch",
                description: "ML research and deployment",
                icon: "🔥"
              },
              {
                name: "Scikit-learn",
                description: "Machine learning tools",
                icon: "🛠️"
              },
              {
                name: "Docker",
                description: "Containerization",
                icon: "🐳"
              },
              {
                name: "Kubernetes",
                description: "Container orchestration",
                icon: "⚙️"
              },
              {
                name: "FastAPI",
                description: "API development",
                icon: "⚡"
              },
              {
                name: "MongoDB",
                description: "NoSQL database",
                icon: "🗄️"
              }
            ].map((tech, index) => (
              <div key={index} className={`service-card ${theme}`}>
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className={`title ${theme}`}>{tech.name}</h3>
                <p className={`content ${theme}`}>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme}`}>
          <div className="text-center">
            <h2 className={`section-title ${theme}`}>Ready to Build Your AI Solution?</h2>
            <p className={`section-description ${theme} max-w-2xl mx-auto mb-12`}>
              Let&apos;s create powerful, efficient AI solutions that drive your business forward.
            </p>
            <a href="/contact" className={`cta-button ${theme}`}>
              Start Development
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

export default DevelopmentPage; 