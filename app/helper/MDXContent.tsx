"use client";

import "highlight.js/styles/atom-one-dark.css";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MDXContentProps {
  content: string;
}

const components = {
  img: (props: any) => (
    <Image
      {...props}
      width={props.width || 800}
      height={props.height || 400}
      alt={props.alt || ""}
    />
  ),
  a: (props: any) => (
    <Link href={props.href || "#"} {...props}>
      {props.children}
    </Link>
  ),
};

const MDXContent: React.FC<MDXContentProps> = ({ content }) => {
  const [mdxSource, setMdxSource] = useState<any>(null);

  useEffect(() => {
    const serializeContent = async () => {
      const mdxOptions = {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeHighlight],
        },
      };

      const serialized = await serialize(content, mdxOptions);
      setMdxSource(serialized);
    };

    serializeContent();
  }, [content]);

  if (!mdxSource) {
    return null;
  }

  return (
    <>
      <MDXRemote {...mdxSource} components={components} />
    </>
  );
};

export default MDXContent; 