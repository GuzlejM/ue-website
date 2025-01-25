"use client";

import React from 'react';
import { useTheme } from "../../../context/ThemeContext";

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface Benefit {
  title: string;
  description: string;
}

const AgencyPage: React.FC = () => {
  const { theme } = useTheme();
  
  const services: Service[] = [
    {
      title: "Strategic AI Consulting",
      description: "Expert guidance on AI implementation and digital transformation strategy.",
      icon: "🎯"
    },
    {
      title: "Custom AI Development",
      description: "Tailored AI solutions built for your specific business needs.",
      icon: "🔧"
    },
    {
      title: "AI Integration",
      description: "Seamless integration of AI solutions with your existing systems.",
      icon: "🔄"
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and insights powered by AI.",
      icon: "📊"
    },
    {
      title: "Process Automation",
      description: "Intelligent automation of business processes and workflows.",
      icon: "⚡"
    },
    {
      title: "Training & Support",
      description: "Comprehensive training and ongoing support for your team.",
      icon: "🎓"
    }
  ];

  const benefits: Benefit[] = [
    {
      title: "Deep Expertise",
      description: "Team of experienced AI engineers, data scientists, and business consultants."
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered AI solutions across various industries."
    },
    {
      title: "End-to-End Service",
      description: "Comprehensive support from strategy to implementation and beyond."
    },
    {
      title: "Custom Solutions",
      description: "Tailored approaches that match your specific business needs."
    }
  ];
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={`badge-text ${theme}`}>AI Agency</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Transform Your Business with AI
          </h1>
          <p className={`section-description ${theme}`}>
            We help businesses leverage artificial intelligence to drive growth, efficiency, and innovation through expert consulting and implementation services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div key={index} className={`service-card theme-card ${theme} transform hover:scale-105 transition-transform duration-300`}>
              <div className={`card-icon ${theme}`}>{service.icon}</div>
              <h3 className={`card-title ${theme}`}>{service.title}</h3>
              <p className={`card-content ${theme}`}>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title theme-text ${theme} text-center mb-12`}>Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`service-card theme-card ${theme} hover:shadow-xl transition-shadow duration-300`}>
                <h3 className={`card-title ${theme}`}>{benefit.title}</h3>
                <p className={`card-content ${theme}`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme}`}>
          <div className="text-center">
            <h2 className={`section-title ${theme}`}>Ready to Transform Your Business?</h2>
            <p className={`section-description ${theme} max-w-2xl mx-auto mb-12`}>
              Contact us for a free consultation and discover how we can help you leverage AI for business success.
            </p>
            <a href="/contact" className={`cta-button ${theme}`}>
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
