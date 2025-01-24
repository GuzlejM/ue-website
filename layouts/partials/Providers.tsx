"use client";

import { usePathname } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const pathname = usePathname();
  
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  
  return children;
};

export default Providers; 