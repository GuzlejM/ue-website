import Share from "@components/Share";
import dateFormat from "@lib/utils/dateFormat";
import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { Theme } from "@context/ThemeContext";
import SeoMeta from "./SeoMeta";

interface PostFrontmatter {
  description?: string;
  title: string;
  date: string;
  image?: string;
  categories?: string[];
}

interface PostSingleProps {
  frontmatter: PostFrontmatter;
  content: any; // MDX content type from next-mdx-remote
  theme: Theme;
}

const PostSingle: React.FC<PostSingleProps> = ({ frontmatter, content, theme }) => {
  let { description, title, date, image, categories } = frontmatter;
  description = description ? description : content.slice(0, 120);

  return (
    <>
      <SeoMeta title={title} description={description} />
      <section className={`section ${theme}`}>
        <div className="container">
          <article className={`text-center ${theme}`}>
            {image && (
              <Image
                src={image}
                height={500}
                width={1000}
                alt={title}
                priority={true}
                className="rounded-lg"
              />
            )}
            {markdownify(title, "h1", `h2 ${theme} mt-12`)}
            <ul className="mt-4 mb-8 flex flex-wrap items-center justify-center space-x-3">
              <li className={`text-sm ${theme}`}>{dateFormat(date)}</li>
              {categories?.map((category, i) => (
                <li key={`category-${i}`}>
                  <span className={`badge ${theme}`}>{category}</span>
                </li>
              ))}
            </ul>
            <div className={`content ${theme} mb-16 text-left`}>
              <MDXRemote {...content} components={shortcodes} />
            </div>
            <Share
              className="share-icons"
              title={title}
              description={description}
              theme={theme}
            />
          </article>
        </div>
      </section>
    </>
  );
};

export default PostSingle; 