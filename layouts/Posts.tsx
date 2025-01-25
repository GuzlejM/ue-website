"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../context/ThemeContext";
import dateFormat from "@lib/utils/dateFormat";

interface Post {
  frontmatter: {
    title: string;
    date: string;
    image?: string;
    description?: string;
    categories?: string[];
  };
  slug: string;
}

interface PostsProps {
  posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const { theme } = useTheme();

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <div key={index} className={`card ${theme}`}>
          {post.frontmatter.image && (
            <Image
              className="rounded-lg"
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              width={445}
              height={230}
            />
          )}
          <div className="mt-4">
            <h3 className={`h4 mb-2 ${theme}`}>
              <Link href={`/blogs/${post.slug}`}>{post.frontmatter.title}</Link>
            </h3>
            <ul className="mb-4 flex items-center space-x-3">
              <li className={`text-sm ${theme}`}>{dateFormat(post.frontmatter.date)}</li>
              {post.frontmatter.categories?.map((category, i) => (
                <li key={`category-${i}`}>
                  <span className={`badge ${theme}`}>{category}</span>
                </li>
              ))}
            </ul>
            {post.frontmatter.description && (
              <p className={`text-sm ${theme}`}>{post.frontmatter.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts; 