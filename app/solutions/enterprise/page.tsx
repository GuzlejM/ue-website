"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface UseCase {
  title: string;
  description: string;
  icon: string;
}

interface EnterpriseFeature {
  title: string;
  description: string;
  features: string[];
}

const EnterprisePage = () => {
  const { theme } = useTheme();

  const benefits: Benefit[] = [
    {
      title: "Scalable Infrastructure",
      description: "Enterprise-grade infrastructure that grows with your business needs.",
      icon: "🏢"
    },
    {
      title: "Data Security",
      description: "Advanced security measures to protect sensitive enterprise data.",
      icon: "🔐"
    },
    {
      title: "Custom Integration",
      description: "Seamless integration with existing enterprise systems.",
      icon: "🔄"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time insights and performance monitoring capabilities.",
      icon: "📊"
    },
    {
      title: "Compliance Ready",
      description: "Built to meet industry regulations and compliance standards.",
      icon: "✅"
    },
    {
      title: "24/7 Support",
      description: "Dedicated enterprise support team available round the clock.",
      icon: "🛟"
    }
  ];

  const useCases: UseCase[] = [
    {
      title: "Process Automation",
      description: "Automate complex business processes with intelligent AI systems.",
      icon: "⚙️"
    },
    {
      title: "Customer Intelligence",
      description: "Gain deep insights into customer behavior and preferences.",
      icon: "🎯"
    },
    {
      title: "Risk Management",
      description: "Predict and mitigate business risks with AI-powered analytics.",
      icon: "⚠️"
    },
    {
      title: "Resource Optimization",
      description: "Optimize resource allocation and improve operational efficiency.",
      icon: "📈"
    }
  ];

  const features: EnterpriseFeature[] = [
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with encryption, access controls, and audit trails.",
      features: [
        "End-to-end encryption",
        "Role-based access control",
        "Security compliance",
        "Regular security audits"
      ]
    },
    {
      title: "Scalable Architecture",
      description: "Highly scalable infrastructure designed for enterprise workloads.",
      features: [
        "Load balancing",
        "Auto-scaling",
        "High availability",
        "Disaster recovery"
      ]
    },
    {
      title: "Integration Capabilities",
      description: "Seamless integration with existing enterprise systems and workflows.",
      features: [
        "API integration",
        "Custom connectors",
        "Data synchronization",
        "Legacy system support"
      ]
    }
  ];
  
  return (
    <div className={`services-section ${theme}`}>
      <div className={`services-background ${theme}`} />
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className={`badge ${theme}`}>
            <span className={theme}>Enterprise Solutions</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Enterprise AI Solutions
          </h1>
          <p className={`section-description ${theme}`}>
            Transform your enterprise with scalable, secure, and customized AI solutions designed for your business needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
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
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className={`title ${theme}`}>{benefit.title}</h3>
                <p className={`content ${theme}`}>{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme} text-center mb-12`}>Enterprise Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl blur-lg transform group-hover:scale-105 transition-transform ${
                  theme === 'light' 
                    ? 'bg-primary/5' 
                    : 'bg-gradient-to-br from-gradient-blue/20 via-gradient-purple/20 to-gradient-pink/20'
                }`}></div>
                <div className={`service-card ${theme} relative transform group-hover:scale-[1.02] transition-all`}>
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className={`title ${theme}`}>{useCase.title}</h3>
                  <p className={`content ${theme}`}>{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className={`section-title ${theme} text-center mb-12`}>Enterprise Features</h2>
          <div className="space-y-8">
            {features.map((feature, index) => (
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
                  <h3 className={`title ${theme}`}>{feature.title}</h3>
                  <p className={`content ${theme} mb-4`}>{feature.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                        <svg className={`w-5 h-5 ${theme === 'light' ? 'text-primary' : 'text-[#8ab4f8]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`cta-section ${theme} mb-24`}>
          <div className="container mx-auto px-4 text-center">
            <h2 className={`section-title ${theme} mb-6`}>Ready to Transform Your Enterprise?</h2>
            <p className={`section-description ${theme} mb-12 max-w-2xl mx-auto`}>
              Let&apos;s discuss how our enterprise AI solutions can drive innovation and growth for your business.
            </p>
            <a href="/contact" className={`primary-button ${theme}`}>
              Schedule Consultation
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

export default EnterprisePage; 