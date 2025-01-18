import { getRegularPage, getSinglePage } from "@lib/contentParser";
import AgentChat from "@layouts/AgentChat";

const RegularPages = async ({ params }) => {
  const { regular } = params;
  const regularPageData = await getRegularPage(regular);
    regularPageData.frontmatter;

  return <AgentChat data={regularPageData} />;
};

export default RegularPages;

export const generateStaticParams = async () => {
  const allslugs = await getSinglePage("content");
  const slugs = allslugs.map((item) => item.slug);
  const paths = slugs.map((slug) => ({
    regular: slug,
  }));

  return paths;
};
