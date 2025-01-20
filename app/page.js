import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import Services from "@layouts/partials/Services";
import Link from "next/link";

const Home = async () => {
  const services = [
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

  return (
    <>
      <SeoMeta title={config.site.title} />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-[#1a1c3b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg opacity-40"></div>
        
        <div className="relative container mx-auto px-4 py-32">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
              <span className="text-sm font-medium text-gray-200">Next-Gen AI Solutions</span>
            </div>
            <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-[#8ab4f8] via-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">
              Building the Future with AI Agents
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Transform your business with cutting-edge AI solutions. From development to deployment, 
              we&apos;re your partner in creating intelligent, autonomous systems that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="/agent"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70"
              >
                Try Our AI Agent
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:bg-white/20"
              >
                Explore Services
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
            <div className="text-center bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#8ab4f8] to-[#c7a7ea] bg-clip-text text-transparent">100+</div>
              <div className="text-gray-400 mt-2">AI Agents Deployed</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#c7a7ea] to-[#f6a6c1] bg-clip-text text-transparent">95%</div>
              <div className="text-gray-400 mt-2">Client Satisfaction</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#f6a6c1] to-[#ffa07a] bg-clip-text text-transparent">50+</div>
              <div className="text-gray-400 mt-2">Expert Developers</div>
            </div>
            <div className="text-center bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#ffa07a] to-[#8ab4f8] bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-400 mt-2">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="relative bg-[#1a1c3b] py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a3170]/0 via-[#4b3488]/5 to-[#1a1c3b]/0"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
              <span className="text-sm font-medium text-gray-200">Our Services</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Comprehensive AI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end AI services that transform your business
            </p>
          </div>
          
          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-300 mb-6 relative z-10">{service.content}</p>
                <Link
                  href={service.button.link}
                  className="inline-flex items-center text-[#8ab4f8] hover:text-[#c7a7ea] transition-colors relative z-10"
                >
                  {service.button.label}
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-[#1a1c3b] py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full">
              <span className="text-sm font-medium text-gray-200">Why Choose Us</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Our Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
                description: "Detailed analytics and monitoring of your AI systems&apos; performance."
              },
              {
                icon: "🤝",
                title: "Dedicated Support",
                description: "Round-the-clock support and maintenance for your AI solutions."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-[#2a3170]/50 to-[#4b3488]/50 backdrop-blur-lg rounded-2xl p-8 hover:from-[#2a3170]/70 hover:to-[#4b3488]/70 transition-all transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-[#2a3170] via-[#4b3488] to-[#7c3aaa] py-32">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Let&apos;s discuss how our AI solutions can help you achieve your goals
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#2a3170] font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:bg-[#8ab4f8] hover:text-white"
          >
            Get Started
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
