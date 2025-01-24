"use client";

import Logo from "@components/Logo";
import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";

const Footer = () => {
  const { footer } = menu;
  return (
    <footer className="bg-white dark:bg-[#1a1c3b] pt-12 pb-8 px-4">
      <div className="container">
        <div className="row">
          <div className="mb-12 lg:mb-0 lg:col-3">
            <Logo src={config.site.logo} />
            <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">{config.params.footer_content}</p>
            <Social />
          </div>
          {footer.map((col, i) => (
            <div key={`footer-col-${i}`} className="mb-8 lg:mb-0 lg:col-2 lg:col-offset-1">
              <h3 className="h4 lg:h5 text-black dark:text-white font-medium mb-4">{col.name}</h3>
              <ul className="space-y-3">
                {col.children?.map((item, i) => (
                  <li key={`footer-item-${i}`}>
                    <Link
                      href={item.url}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border dark:border-white/10 py-6 mt-8">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            {config.params.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

