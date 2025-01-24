"use client";

import Logo from "@components/Logo";
import ThemeToggle from "@components/ThemeToggle";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navFixed, setNavFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // pathname state
  const pathname = usePathname();

  // logo source
  const { logo } = config.site;

  // scroll handler
  useEffect(() => {
    const changeNavbarBackground = () => {
      if (window.pageYOffset >= 1) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };
    window.addEventListener("scroll", changeNavbarBackground);
  }, []);

  return (
    <header
      className={`header ${theme} ${navFixed ? "shadow" : "shadow-none"}`}
    >
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* navbar toggler */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-dark hover:text-primary lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          className={`order-3 w-full items-center lg:order-1 lg:flex lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
          id="nav-menu"
        >
          <ul className="navbar-nav ml-auto mr-5">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                {menu.hasChildren ? (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      className={`nav-link ${theme} ${
                        menu.children
                          .map((c) => c.url)
                          .includes(pathname) ||
                        pathname === menu.url
                          ? "nav-link-active"
                          : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      href={menu.url}
                      className={`nav-link ${theme} ${
                        pathname === menu.url ? "nav-link-active" : ""
                      }`}
                    >
                      {menu.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header; 