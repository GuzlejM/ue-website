import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";
import BlogContent from "@layouts/BlogContent";

const { blog_folder } = config.settings;

interface ArticleParams {
  params: {
    single: string;
  };
}

interface BlogFrontmatter {
  title: string;
  date: string;
  image?: string;
  categories?: string[];
  description?: string;
  draft?: boolean;
  layout?: string;
  [key: string]: any;
}

const Article = async ({ params }: ArticleParams) => {
  const { single } = params;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug == single);
  
  if (!post.length) {
    throw new Error(`Blog post not found: ${single}`);
  }

  const { frontmatter: rawFrontmatter, content } = post[0];

  // Ensure required fields are present with defaults
  const frontmatter: BlogFrontmatter = {
    title: rawFrontmatter.title || "Untitled Post",
    date: rawFrontmatter.date || new Date().toISOString(),
    ...rawFrontmatter
  };

  return <BlogContent frontmatter={frontmatter} content={content} />;
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