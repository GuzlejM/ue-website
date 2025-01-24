import { slug } from "github-slugger";
import { marked } from "marked";
import React, { ElementType } from "react";

// slugify
export const slugify = (content: string | null | undefined): string | null => {
  if (!content) return null;
  return slug(content);
};

// markdownify
export const markdownify = (
  content: string | null | undefined,
  tag?: ElementType,
  className?: string
): React.ReactElement | null => {
  if (!content) return null;

  const Tag = tag || "span";
  const parsedContent = tag === "div" ? marked.parse(content) : marked.parseInline(content);
  return React.createElement(Tag, {
    className,
    dangerouslySetInnerHTML: {
      __html: parsedContent.toString(),
    },
  });
};

// humanize
export const humanize = (content: string | null | undefined): string | null => {
  if (!content) return null;

  return content
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_\s]+/g, " ")
    .replace(/^[a-z]/, function (m) {
      return m.toUpperCase();
    });
};

// plainify
export const plainify = (content: string | number | null | undefined): string | null => {
  if (!content) return null;

  const mdParsed = marked.parseInline(String(content)).toString();
  const filterBrackets = mdParsed.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};

// strip entities for plainify
const htmlEntityDecoder = (htmlWithEntities: string): string => {
  const entityList: Record<string, string> = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  
  return htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => entityList[entity] || entity
  );
}; 