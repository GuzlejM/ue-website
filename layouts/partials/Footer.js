"use client";

import Logo from "@components/Logo";
import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { markdownify } from "@lib/utils/textConverter";

const Footer = () => {
  const { footer } = menu;
  const { logo } = config.site;
  return (
    <footer className="bg-[#1a1c3b] pt-24 pb-16">
      <div className="container">
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(col.name, "h2", "h4 text-white mb-8")}
                <ul>
                  {col?.children?.map((item) => (
                    <li className="mb-4" key={item.name}>
                      <Link 
                        href={item.url} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="md:col-6 lg:col-3">
            <div className="mb-8">
              <Logo src={logo} />
            </div>
            <p className="text-gray-400 mb-8">
              Transforming businesses with next-generation AI solutions and autonomous agents.
            </p>
            <Social />
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-16">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Bigspring. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

