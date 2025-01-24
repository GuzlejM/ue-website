"use client";

import config from "@config/config.json";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { useTheme } from "../../context/ThemeContext";
import React from "react";

interface SocialProps {
  className?: string;
}

const Social: React.FC<SocialProps> = ({ className }) => {
  const { theme } = useTheme();
  const social = config.social || {};
  const { facebook, twitter, linkedin, youtube } = social;

  if (!facebook && !twitter && !linkedin && !youtube) return null;

  return (
    <ul className={`flex space-x-4 ${className}`}>
      {facebook && (
        <li>
          <a
            aria-label="facebook"
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              theme === 'light' 
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'
            }`}
          >
            <IoLogoFacebook size={16} />
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a
            aria-label="twitter"
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              theme === 'light' 
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'
            }`}
          >
            <IoLogoTwitter size={16} />
          </a>
        </li>
      )}
      {linkedin && (
        <li>
          <a
            aria-label="linkedin"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              theme === 'light' 
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'
            }`}
          >
            <IoLogoLinkedin size={16} />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a
            aria-label="youtube"
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
              theme === 'light' 
                ? 'border-primary text-primary hover:bg-primary hover:text-white' 
                : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'
            }`}
          >
            <IoLogoYoutube size={16} />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social; 