import config from "@config/config.json";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import { Theme } from "@context/ThemeContext";

interface ShareProps {
  title: string;
  description: string;
  theme: Theme;
}

const Share: React.FC<ShareProps> = ({ title, description, theme }) => {
  // social share url
  const facebookUrl = `https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}`;
  const twitterUrl = `https://twitter.com/intent/tweet/?text=${title}&amp;url=${process.env.NEXT_PUBLIC_SITE_URL}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}&title=${title}&summary=${description}&source=${process.env.NEXT_PUBLIC_SITE_URL}`;
  const youtubeUrl = config.social?.youtube;

  return (
    <ul className="social-share">
      <li className="inline-block">
        <a
          aria-label="facebook share button"
          href={facebookUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={`share-link ${theme}`}
        >
          <IoLogoFacebook />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="twitter share button"
          href={twitterUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={`share-link ${theme}`}
        >
          <IoLogoTwitter />
        </a>
      </li>
      <li className="inline-block">
        <a
          aria-label="linkedin share button"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer noopener"
          className={`share-link ${theme}`}
        >
          <IoLogoLinkedin />
        </a>
      </li>
      {youtubeUrl && (
        <li className="inline-block">
          <a
            aria-label="youtube"
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={`share-link ${theme}`}
          >
            <IoLogoYoutube />
          </a>
        </li>
      )}
    </ul>
  );
};

export default Share; 