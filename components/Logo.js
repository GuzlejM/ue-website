"use client";

import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  const { theme } = useTheme();
  
  return (
    <Link href="/" className={`navbar-brand ${theme}`}>
      {src ? (
        <Image
          width={85}
          height={30}
          src={src}
          alt="Logo"
          priority
          style={{
            height: "auto",
          }}
        />
      ) : (
        "Logo"
      )}
    </Link>
  );
};

export default Logo; 