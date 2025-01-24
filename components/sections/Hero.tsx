"use client";

import Link from "next/link";
import { useTheme } from "../../context/ThemeContext";

// Define types for our theme and stats
type Theme = 'light' | 'dark';

interface StatItem {
  number: string;
  label: string;
  gradient: string;
}

interface StatsProps {
  theme: Theme;
}

const Stats: React.FC<StatsProps> = ({ theme }) => {
  const stats: StatItem[] = [
    { 
      number: "100+", 
      label: "AI Agents Deployed", 
      gradient: "from-[#8ab4f8] to-[#c7a7ea]"
    },
    { 
      number: "95%", 
      label: "Client Satisfaction", 
      gradient: "from-[#c7a7ea] to-[#f6a6c1]"
    },
    { 
      number: "50+", 
      label: "Expert Developers", 
      gradient: "from-[#f6a6c1] to-[#ffa07a]"
    },
    { 
      number: "24/7", 
      label: "Support Available", 
      gradient: "from-[#ffa07a] to-[#8ab4f8]"
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div 
            className={`number ${theme}`} 
            style={theme === 'dark' ? {
              backgroundImage: `linear-gradient(to right, ${stat.gradient.split(' ')[1]}, ${stat.gradient.split(' ')[3]})`
            } : {}}
          >
            {stat.number}
          </div>
          <div className={`label ${theme}`}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const Hero: React.FC = () => {
  const { theme } = useTheme();
  
  return (
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
  );
};

export default Hero; 