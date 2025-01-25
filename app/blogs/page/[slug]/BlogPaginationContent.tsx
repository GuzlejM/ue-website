"use client";

import { useTheme } from "../../../../context/ThemeContext";
import Pagination from "@layouts/components/Pagination";
import Posts from "@layouts/Posts";
import config from "@config/config.json";

const { blog_folder } = config.settings;

interface BlogPost {
  frontmatter: {
    title: string;
    date: string;
    image?: string;
    description?: string;
    categories?: string[];
  };
  slug: string;
}

interface BlogPaginationContentProps {
  title: string;
  currentPosts: BlogPost[];
  totalPages: number;
  currentPage: number;
}

const BlogPaginationContent: React.FC<BlogPaginationContentProps> = ({ 
  title, 
  currentPosts, 
  totalPages, 
  currentPage 
}) => {
  const { theme } = useTheme();
  
  return (
    <section className={`services-section ${theme === 'dark' ? 'bg-darkmode text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <h1 className={`text-center mb-8 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
          {title}
        </h1>
        <Posts posts={currentPosts} />
        <Pagination
          section={blog_folder}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default BlogPaginationContent; 