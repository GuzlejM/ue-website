"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

const ContactPage = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`services-section ${theme} min-h-screen`}>
      <div className={`services-background ${theme}`} />
      <div className="container mx-auto px-4 py-16">
        <h1 className={`heading-gradient ${theme} text-center mb-16`}>Contact Us</h1>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className={`service-card ${theme} p-8`}>
            <h2 className={`text-2xl font-bold mb-8 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Why Contact Us?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    Expert Consultation
                  </h3>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                    Get personalized advice from our AI specialists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🎯</span>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    Custom Solutions
                  </h3>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                    Tailored AI solutions for your unique needs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🛠️</span>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    Technical Support
                  </h3>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                    24/7 support for your AI implementations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🤝</span>
                <div>
                  <h3 className={`text-lg font-semibold mb-1 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                    Partnership Opportunities
                  </h3>
                  <p className={theme === 'light' ? 'text-gray-600' : 'text-gray-300'}>
                    Explore collaboration possibilities
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                Direct Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+88 125 256 452</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@bigspring.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>360 Main rd, Rio, Brazil</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={`service-card ${theme} p-8`}>
            <h2 className={`text-2xl font-bold mb-8 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'light'
                      ? 'bg-white border border-gray-200 text-gray-800'
                      : 'bg-[#2A2D4C] border-none text-white'
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'light'
                      ? 'bg-white border border-gray-200 text-gray-800'
                      : 'bg-[#2A2D4C] border-none text-white'
                  }`}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'light'
                      ? 'bg-white border border-gray-200 text-gray-800'
                      : 'bg-[#2A2D4C] border-none text-white'
                  }`}
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'light' ? 'text-gray-700' : 'text-gray-200'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg ${
                    theme === 'light'
                      ? 'bg-white border border-gray-200 text-gray-800'
                      : 'bg-[#2A2D4C] border-none text-white'
                  }`}
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg bg-[#4A3AFF] text-white font-semibold hover:bg-[#3E31D3] transition-colors flex items-center justify-center gap-2`}
              >
                Send Message
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 