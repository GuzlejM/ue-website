import NotFound from "@layouts/404";
import { getRegularPage } from "@lib/contentParser";

interface NotFoundData {
  frontmatter: {
    [key: string]: any;
  };
  content: string;
  mdxContent?: any;
}

const notFound = async () => {
  const notFoundData = await getRegularPage("404");
  return <NotFound data={notFoundData} />;
};

export default notFound; 