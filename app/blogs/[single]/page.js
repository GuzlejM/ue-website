"use client";

import { useTheme } from "../../../context/ThemeContext";
import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";

const { blog_folder } = config.settings;

const ArticleContent = ({ frontmatter, content }) => {
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

const Article = async ({ params }) => {
  const { single } = params;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug == single);
  const { frontmatter, content } = post[0];

  return <ArticleContent frontmatter={frontmatter} content={content} />;
};

export default Article;

// get post single slug
export const generateStaticParams = async () => {
  const posts = await getSinglePage(`content/${blog_folder}`);
  const paths = posts.map((post) => ({
    single: post.slug,
  }));

  return paths;
};
