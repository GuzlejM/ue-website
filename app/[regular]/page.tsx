import NotFound from "@layouts/404";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Faq from "@layouts/Faq";
import Pricing from "@layouts/Pricing";
import SeoMeta from "@layouts/SeoMeta";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import Ai from "@layouts/Ai";
import AgentChat from "@layouts/AgentChat";

interface RegularPageParams {
  params: {
    regular: string;
  };
}

interface RegularPageFrontmatter {
  title: string;
  meta_title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
  canonical?: string;
  layout?: string;
}

interface RegularPageData {
  frontmatter: RegularPageFrontmatter;
  content: string;
}

const RegularPages = async ({ params }: RegularPageParams) => {
  const { regular } = params;
  const regularPageData = await getRegularPage(regular);
  const { title, meta_title, description, image, noindex, canonical, layout } =
    regularPageData.frontmatter;
  const { content } = regularPageData;

  return (
    <>
      <SeoMeta
        title={title}
        description={description ? description : content.slice(0, 120)}
        meta_title={meta_title}
        image={image}
        noindex={noindex}
        canonical={canonical}
      />
      {layout === "404" ? (
        <NotFound data={regularPageData} />
      ) : layout === "contact" ? (
        <Contact data={regularPageData} />
      ) : layout === "pricing" ? (
        <Pricing data={regularPageData} />
      ) : layout === "faq" ? (
        <Faq data={regularPageData} />
      ) : layout === "ai" ? (
        <Ai data={regularPageData} />
      ) : layout === "agent" ? (
        <AgentChat data={regularPageData} />
      ) : (
        <Default data={regularPageData} />
      )}
    </>
  );
};

export default RegularPages;

// for regular page routes
export const generateStaticParams = async () => {
  const allslugs = await getSinglePage("content");
  const slugs = allslugs.map((item) => item.slug);
  const paths = slugs.map((slug) => ({
    regular: slug,
  }));

  return paths;
}; 