"use client";

import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import { Theme } from "@context/ThemeContext";

interface StatItem {
  number: string;
  label: string;
  gradient: string;
}

interface StatsProps {
  theme: Theme;
}

interface ServiceItem {
  title: string;
  content: string;
  images: string[];
  button: {
    enable: boolean;
    label: string;
    link: string;
  };
}

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const Stats: React.FC<StatsProps> = ({ theme }) => {
  const stats: StatItem[] = [
    { 
      number: "100+", 
      label: "AI Agents Deployed", 
      gradient: "linear-gradient(to right, #8ab4f8, #c7a7ea, #f6a6c1)"
    },
    { 
      number: "95%", 
      label: "Client Satisfaction", 
      gradient: "linear-gradient(to right, #c7a7ea, #f6a6c1, #ffa07a)"
    },
    { 
      number: "50+", 
      label: "Expert Developers", 
      gradient: "linear-gradient(to right, #f6a6c1, #ffa07a, #8ab4f8)"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      gradient: "linear-gradient(to right, #ffa07a, #8ab4f8, #c7a7ea)"
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`stats-card ${theme}`}
          style={theme === 'dark' ? { '--gradient': stat.gradient } as React.CSSProperties : {}}
        >
          <div className="number">
            {stat.number}
          </div>
          <div className="label">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const { theme } = useTheme();

  const services: ServiceItem[] = [
    {
      title: "AI Agents Development",
      content: "Build powerful, autonomous AI agents that transform your business operations. From simple task automation to complex decision-making systems.",
      images: ["/images/services/ai-agents.jpg"],
      button: {
        enable: true,
        label: "Explore AI Agents",
        link: "/services/ai-agents"
      }
    },
    {
      title: "Agent Agency",
      content: "Your one-stop solution for enterprise AI deployment. We handle the entire lifecycle of AI agents, from conception to optimization.",
      images: ["/images/services/agency.jpg"],
      button: {
        enable: true,
        label: "View Solutions",
        link: "/services/agency"
      }
    },
    {
      title: "AI Consulting",
      content: "Strategic guidance for AI implementation. Our experts help you identify opportunities and create roadmaps for AI transformation.",
      images: ["/images/services/consulting.jpg"],
      button: {
        enable: true,
        label: "Get Started",
        link: "/services/consulting"
      }
    },
    {
      title: "Architecture Design",
      content: "Future-proof AI architectures that scale. We design robust systems that grow with your business while maintaining peak performance.",
      images: ["/images/services/architecture.jpg"],
      button: {
        enable: true,
        label: "Learn More",
        link: "/services/architecture"
      }
    },
    {
      title: "Development",
      content: "Cutting-edge AI development using the latest technologies. Our team builds reliable, efficient, and maintainable AI solutions.",
      images: ["/images/services/development.jpg"],
      button: {
        enable: true,
        label: "See Our Process",
        link: "/services/development"
      }
    },
    {
      title: "Maintenance",
      content: "Keep your AI systems at peak performance. Continuous monitoring, updates, and optimizations ensure long-term success.",
      images: ["/images/services/maintenance.jpg"],
      button: {
        enable: true,
        label: "View Services",
        link: "/services/maintenance"
      }
    }
  ];

  const features: FeatureItem[] = [
    {
      icon: "🎯",
      title: "Strategic Planning",
      description: "We develop comprehensive strategies for AI implementation that align with your business goals."
    },
    {
      icon: "⚡",
      title: "Rapid Development",
      description: "Fast-paced development cycles with continuous integration and deployment."
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Built-in security measures to protect your AI systems and data."
    },
    {
      icon: "🔄",
      title: "Continuous Learning",
      description: "AI systems that evolve and improve through continuous learning."
    },
    {
      icon: "📊",
      title: "Performance Analytics",
      description: "Detailed analytics and monitoring of your AI systems' performance."
    },
    {
      icon: "🤝",
      title: "Dedicated Support",
      description: "Round-the-clock support and maintenance for your AI solutions."
    }
  ];

  return (
    <>
      <SeoMeta 
        title={config.site.title}
        meta_title={config.site.title}
        description={config.metadata.meta_description}
        image={config.metadata.meta_image}
        canonical={config.site.base_url}
        noindex={false}
      />
      
      {/* Hero Section */}
      <div className={`hero-section ${theme}`}>
        <div className={`hero-background ${theme}`} />
        
        <div className="relative container mx-auto px-4 py-32">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className={`badge ${theme}`}>
              <span className={theme}>Next-Gen AI Solutions</span>
            </div>
            <h1 className={`heading-gradient ${theme}`}>
              Building the Future with AI Agents
            </h1>
            <p className={`text-xl mb-12 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Transform your business with cutting-edge AI solutions. From development to deployment, 
              we&apos;re your partner in creating intelligent, autonomous systems that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/agent" className={`primary-button ${theme}`}>
                Try Our AI Agent
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="#services" className={`secondary-button ${theme}`}>
                Explore Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          <Stats theme={theme} />
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className={`services-section ${theme}`}>
        <div className={`services-background ${theme}`} />
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className={`badge ${theme}`}>
              <span className={theme}>Our Services</span>
            </div>
            <h2 className={`section-title ${theme}`}>Comprehensive AI Solutions</h2>
            <p className={`section-description ${theme}`}>
              From concept to deployment, we provide end-to-end AI services that transform your business
            </p>
          </div>
          
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group service-card ${theme}`}>
                <h3 className={`title ${theme}`}>{service.title}</h3>
                <p className={`content ${theme}`}>{service.content}</p>
                <Link href={service.button.link} className={`link ${theme}`}>
                  {service.button.label}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className={`features-section ${theme}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className={`badge ${theme}`}>
              <span className={theme}>Why Choose Us</span>
            </div>
            <h2 className={`section-title ${theme}`}>Our Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`group feature-card ${theme}`}>
                <div className="icon">{feature.icon}</div>
                <h3 className={`title ${theme}`}>{feature.title}</h3>
                <p className={`description ${theme}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={`cta-section ${theme}`}>
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className={`section-title ${theme}`}>Ready to Transform Your Business?</h2>
          <p className={`section-description ${theme}`}>
            Let&apos;s discuss how our AI solutions can help you achieve your goals
          </p>
          <Link href="/contact" className={`cta-button ${theme}`}>
            Get Started
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home; 