"use client";

import config from "@config/config.json";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const Social = ({ className }) => {
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary dark:border-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:border-white dark:hover:text-white transition-colors"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary dark:border-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:border-white dark:hover:text-white transition-colors"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary dark:border-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:border-white dark:hover:text-white transition-colors"
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
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary dark:border-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:border-white dark:hover:text-white transition-colors"
          >
            <IoLogoYoutube size={16} />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Social;
