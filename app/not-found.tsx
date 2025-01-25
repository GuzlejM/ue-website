import NotFound from "@layouts/404";
import { getRegularPage } from "@lib/contentParser";

interface NotFoundFrontmatter {
  title: string;
  [key: string]: any;
}

interface NotFoundData {
  frontmatter: NotFoundFrontmatter;
  content: string;
  mdxContent?: any;
}

const notFound = async () => {
  const rawData = await getRegularPage("404");
  
  // Ensure the required title field is present
  const notFoundData: NotFoundData = {
    ...rawData,
    frontmatter: {
      title: rawData.frontmatter.title || "Page Not Found",
      ...rawData.frontmatter
    }
  };

  return <NotFound data={notFoundData} />;
};

export default notFound; 