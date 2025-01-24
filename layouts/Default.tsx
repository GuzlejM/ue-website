import { markdownify } from "@lib/utils/textConverter";
import MDXContent from "app/helper/MDXContent";

interface DefaultFrontmatter {
  title: string;
}

interface DefaultData {
  frontmatter: DefaultFrontmatter;
  content: string;
}

interface DefaultProps {
  data: DefaultData;
}

const Default: React.FC<DefaultProps> = ({ data }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;
  
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "h2 mb-8 text-center")}
        <div className="content">
          <MDXContent content={content} />
        </div>
      </div>
    </section>
  );
};

export default Default; 