"use client";

import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#1a1c3b] text-gray-900 dark:text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-[#2a3170]/20 dark:to-[#4b3488]/20"></div>
      
      <div className="relative container mx-auto px-4 py-32">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-6 py-2 bg-gray-100 dark:bg-white/10 backdrop-blur-lg rounded-full">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-200">Next-Gen AI Solutions</span>
          </div>
          <h1 className={`heading-gradient ${theme}`}>
            Building the Future with AI Agents
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Transform your business with cutting-edge AI solutions. From development to deployment, 
            we&apos;re your partner in creating intelligent, autonomous systems that drive growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/agent" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-dark dark:from-[#2a3170]/50 dark:to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:from-primary-dark hover:to-primary dark:hover:from-[#2a3170]/70 dark:hover:to-[#4b3488]/70"
            >
              Try Our AI Agent
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-lg text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-white/20"
            >
              Explore Services
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
            {stat.number}
          </div>
          <div className="text-gray-600 dark:text-[#8ab4f8]/70 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Hero; 