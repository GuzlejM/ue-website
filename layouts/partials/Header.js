"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import config from "../../config/config.json";
import ThemeToggle from "@components/ThemeToggle";

const Header = () => {
  const pathname = usePathname();

  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;
  const { enable, label, link } = config.nav_button;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1a1c3b]/80 backdrop-blur-lg border-b border-border dark:border-white/10">
      <nav className="container mx-auto px-4 py-4">
        {/* logo */}
        <div className="flex items-center justify-between">
          <Logo src={logo} />

          {/* navbar toggler */}
          <button
            id="show-button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <div className="relative group">
                    <button className="inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {menu.name}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white dark:bg-[#2a3170]/90 backdrop-blur-lg border border-border dark:border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {menu.children.map((child, i) => (
                        <Link
                          key={`child-${i}`}
                          href={child.url}
                          className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 first:rounded-t-xl last:rounded-b-xl transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={menu.url}
                    className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                      pathname === menu.url ? "text-primary dark:text-white font-medium" : ""
                    }`}
                  >
                    {menu.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
            <ThemeToggle />
            {enable && (
              <Link
                href={link}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-dark dark:from-[#2a3170]/50 dark:to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-6 py-2 rounded-xl transition-all transform hover:scale-105 hover:from-primary-dark hover:to-primary dark:hover:from-[#2a3170]/70 dark:hover:to-[#4b3488]/70"
              >
                {label}
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[73px] bg-white dark:bg-[#1a1c3b]/95 backdrop-blur-lg border-b border-border dark:border-white/10 transition-all duration-300 ${
            navOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {main.map((menu, i) => (
                <React.Fragment key={`mobile-menu-${i}`}>
                  {menu.hasChildren ? (
                    <div className="space-y-2">
                      <div className="text-gray-600 dark:text-gray-300 font-medium">{menu.name}</div>
                      <div className="ml-4 flex flex-col space-y-2">
                        {menu.children.map((child, i) => (
                          <Link
                            key={`mobile-child-${i}`}
                            href={child.url}
                            onClick={() => setNavOpen(false)}
                            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={menu.url}
                      onClick={() => setNavOpen(false)}
                      className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors ${
                        pathname === menu.url ? "text-primary dark:text-white font-medium" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                {enable && (
                  <Link
                    href={link}
                    onClick={() => setNavOpen(false)}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-dark dark:from-[#2a3170]/50 dark:to-[#4b3488]/50 backdrop-blur-lg text-white font-semibold px-6 py-2 rounded-xl transition-all transform hover:scale-105 hover:from-primary-dark hover:to-primary dark:hover:from-[#2a3170]/70 dark:hover:to-[#4b3488]/70"
                  >
                    {label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
