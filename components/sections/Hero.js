"use client";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-primary opacity-40"></div>
      
      <div className="relative container-custom py-32">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="section-badge">
            <span className="text-sm font-medium text-gray-200">Next-Gen AI Solutions</span>
          </div>
          <h1 className="heading-primary heading-gradient">
            Building the Future with AI Agents
          </h1>
          <p className="text-body mb-12">
            Transform your business with cutting-edge AI solutions. From development to deployment, 
            we&apos;re your partner in creating intelligent, autonomous systems that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/agent" className="btn-primary group">
              Try Our AI Agent
              <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        <Stats />
      </div>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { number: "100+", label: "AI Agents Deployed", color: "from-[#8ab4f8] to-[#c7a7ea]" },
    { number: "95%", label: "Client Satisfaction", color: "from-[#c7a7ea] to-[#f6a6c1]" },
    { number: "50+", label: "Expert Developers", color: "from-[#f6a6c1] to-[#ffa07a]" },
    { number: "24/7", label: "Support Available", color: "from-[#ffa07a] to-[#8ab4f8]" }
  ];

  return (
    <div className="grid-stats mt-20">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
            {stat.number}
          </div>
          <div className="text-[#8ab4f8]/70 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Hero; 