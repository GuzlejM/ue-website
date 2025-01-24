import { markdownify } from "@lib/utils/textConverter";

interface NotFoundFrontmatter {
  title: string;
}

interface NotFoundData {
  frontmatter: NotFoundFrontmatter;
  content: string;
}

interface NotFoundProps {
  data: NotFoundData;
}

const NotFound: React.FC<NotFoundProps> = ({ data }) => {
  const { frontmatter, content } = data;

  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">{frontmatter.title}</h1>
            {markdownify(content, "div", "content")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound; 