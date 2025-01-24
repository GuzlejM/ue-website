import { getSinglePage } from "@lib/contentParser";
import { slugify } from "./utils/textConverter";
import { SinglePageData } from "@lib/contentParser";

// get all taxonomies from frontmatter
export const getTaxonomy = (folder: string, name: string): string[] => {
  const singlePages = getSinglePage(folder);
  const taxonomyPages = singlePages.map((page: SinglePageData) => page.frontmatter[name] || []);
  let taxonomies: string[] = [];
  
  for (const categoryArray of taxonomyPages) {
    if (Array.isArray(categoryArray)) {
      for (const category of categoryArray) {
        const slug = slugify(category);
        if (slug) {
          taxonomies.push(slug);
        }
      }
    }
  }
  
  return Array.from(new Set(taxonomies));
}; 