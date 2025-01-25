import NotFound from "@layouts/404";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Faq from "@layouts/Faq";
import Pricing from "@layouts/Pricing";
import SeoMeta from "@layouts/SeoMeta";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import Ai from "@layouts/Ai";
import AgentChat from "@layouts/AgentChat";

// Base interfaces
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
  info?: any;
  plans?: any;
  call_to_action?: any;
  faqs?: any;
}

interface RegularPageData {
  frontmatter: RegularPageFrontmatter;
  content: string;
}

// Layout-specific interfaces
interface NotFoundData {
  frontmatter: {
    title: string;
  };
  content: string;
}

interface ContactData {
  frontmatter: {
    title: string;
    info: {
      title: string;
      description: string;
      contacts: string[];
    };
  };
}

interface PricingData {
  frontmatter: {
    title: string;
    plans: any[];
    call_to_action: any;
  };
}

interface FaqData {
  frontmatter: {
    title: string;
    faqs: any[];
  };
}

interface AiData {
  frontmatter: {
    title: string;
    faqs: any[];
  };
}

interface AgentChatData {
  frontmatter: {
    title: string;
  };
}

interface DefaultData {
  frontmatter: {
    title: string;
  };
  content: string;
}

const RegularPages = async ({ params }: RegularPageParams) => {
  const { regular } = params;
  const regularPageData = await getRegularPage(regular);
  const { title, meta_title, description, image, noindex, canonical, layout, info, plans, call_to_action, faqs } =
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
        <NotFound data={{
          frontmatter: { title },
          content
        } as NotFoundData} />
      ) : layout === "contact" ? (
        <Contact data={{
          frontmatter: {
            title,
            info: info || { title: "", description: "", contacts: [] }
          }
        } as ContactData} />
      ) : layout === "pricing" ? (
        <Pricing data={{
          frontmatter: {
            title,
            plans: plans || [],
            call_to_action: call_to_action || {}
          }
        } as PricingData} />
      ) : layout === "faq" ? (
        <Faq data={{
          frontmatter: {
            title,
            faqs: faqs || []
          }
        } as FaqData} />
      ) : layout === "ai" ? (
        <Ai data={{
          frontmatter: {
            title,
            faqs: faqs || []
          }
        } as AiData} />
      ) : layout === "agent" ? (
        <AgentChat data={{
          frontmatter: {
            title
          }
        } as AgentChatData} />
      ) : (
        <Default data={{
          frontmatter: { title },
          content
        } as DefaultData} />
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