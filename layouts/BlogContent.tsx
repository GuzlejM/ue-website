"use client";

import { useTheme } from "../context/ThemeContext";
import PostSingle from "./PostSingle";

interface BlogContentProps {
  frontmatter: {
    title: string;
    date: string;
    image?: string;
    categories?: string[];
    description?: string;
    [key: string]: any;
  };
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ frontmatter, content }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`services-section ${theme === 'dark' ? 'bg-darkmode-theme-light' : 'bg-theme-light'}`}>
      <div className="services-background">
        <PostSingle 
          frontmatter={frontmatter} 
          content={content} 
          theme={theme} 
        />
      </div>
    </div>
  );
};

export default BlogContent; 