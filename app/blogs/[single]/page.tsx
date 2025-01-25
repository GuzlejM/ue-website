import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";
import BlogContent from "./BlogContent";

const { blog_folder } = config.settings;

interface ArticleParams {
  params: {
    single: string;
  };
}

const Article = async ({ params }: ArticleParams) => {
  const { single } = params;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug == single);
  const { frontmatter, content } = post[0];

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