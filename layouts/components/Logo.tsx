import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  return (
    <Link
      href={base_url}
      className="navbar-brand block py-1"
      style={{
        height: `${parseInt(logo_height)}px`,
        width: `${parseInt(logo_width)}px`,
      }}
    >
      {src || logo ? (
        <Image
          width={parseInt(logo_width) * 2}
          height={parseInt(logo_height) * 2}
          src={src ? src : logo}
          alt={title}
          priority
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo; 