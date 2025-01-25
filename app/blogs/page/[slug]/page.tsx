import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import BlogPaginationContent from "./BlogPaginationContent";

const { blog_folder } = config.settings;

interface BlogPost {
  frontmatter: {
    date: string;
    title: string;
    description?: string;
    image?: string;
    categories?: string[];
    [key: string]: any;
  };
  slug: string;
  content: string;
}

interface SinglePageData {
  frontmatter: {
    date?: string;
    title?: string;
    [key: string]: any;
  };
  slug: string;
  content: string;
}

interface BlogPaginationParams {
  params: {
    slug?: string;
  };
}

// blog pagination
const BlogPagination = async ({ params }: BlogPaginationParams) => {
  const currentPage = parseInt((params && params.slug) || "1");
  const { pagination } = config.settings;
  const posts = (await getSinglePage(`content/${blog_folder}`))
    .filter((post: SinglePageData) => post.frontmatter.date) // Filter out posts without dates
    .sort((post1: SinglePageData, post2: SinglePageData) =>
      new Date(post2.frontmatter.date!).getTime() - new Date(post1.frontmatter.date!).getTime()
    ) as BlogPost[]; // Type assertion after filtering

  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title = "Blog" } = frontmatter; // Provide default title

  return <BlogPaginationContent 
    title={title}
    currentPosts={currentPosts}
    totalPages={totalPages}
    currentPage={currentPage}
  />;
};

// get blog pagination slug
export const generateStaticParams = async () => {
  const getAllSlug = await getSinglePage(`content/${blog_folder}`);
  const allSlug = (getAllSlug as BlogPost[]).map(item => item.slug);
  const { pagination } = config.settings;
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      slug: (i + 1).toString(),
    });
  }

  return paths;
};

export default BlogPagination; 