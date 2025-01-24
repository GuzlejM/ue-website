"use client";

import { useTheme } from "@context/ThemeContext";
import React from "react";

const CTA: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`cta-section ${theme}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className={`section-title ${theme}`}>Ready to Transform Your Business?</h2>
          <p className={`section-description ${theme} max-w-2xl mx-auto mb-12`}>
            Let&apos;s discuss how our AI solutions can help you achieve your goals
          </p>
          <a href="/contact" className={`cta-button ${theme}`}>
            Get Started
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA; 