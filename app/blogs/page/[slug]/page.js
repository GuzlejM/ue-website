import Pagination from "@components/Pagination";
import config from "@config/config.json";
import SeoMeta from "@layouts/SeoMeta";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Posts from "@partials/Posts";

const { blog_folder } = config.settings;

// blog pagination
const BlogPagination = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;
  const posts = await getSinglePage(`content/${blog_folder}`).sort(
    (post1, post2) =>
      new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
  );
  const postIndex = await getListPage(`content/${blog_folder}/_index.md`);
  
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const { frontmatter } = postIndex;
  const { title } = frontmatter;

  return <BlogPaginationContent 
    title={title}
    currentPosts={currentPosts}
    totalPages={totalPages}
    currentPage={currentPage}
  />;
};

export default BlogPagination;

// Client component wrapper
"use client";

import { useTheme } from "../../../../context/ThemeContext";

const BlogPaginationContent = ({ title, currentPosts, totalPages, currentPage }) => {
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

// get blog pagination slug
export const generateStaticParams = async () => {
  const getAllSlug = await getSinglePage(`content/${blog_folder}`);
  const allSlug = getAllSlug.map((item) => item.slug);
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
