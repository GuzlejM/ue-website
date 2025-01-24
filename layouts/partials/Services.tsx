"use client";

import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

interface ServiceButton {
  enable: boolean;
  label: string;
  link: string;
}

interface Service {
  title: string;
  content: string;
  image?: string;
  button: ServiceButton;
}

interface ServicesFrontmatter {
  title: string;
  description: string;
  services: Service[];
}

interface ServicesData {
  frontmatter: ServicesFrontmatter;
}

interface ServicesProps {
  data: ServicesData;
}

const Services: React.FC<ServicesProps> = ({ data }) => {
  const { frontmatter } = data;
  const { title, description, services } = frontmatter;
  
  return (
    <section className="section bg-white dark:bg-[#1a1c3b]">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title text-dark dark:text-white">{markdownify(title)}</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">{markdownify(description)}</p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl bg-theme-light dark:bg-[#2a3170]/50 p-6 transition-all duration-200 hover:shadow-lg dark:hover:shadow-[#4b3488]/20"
            >
              {service.image && (
                <Image
                  className="mx-auto mb-6"
                  src={service.image}
                  width={80}
                  height={80}
                  alt={service.title}
                />
              )}
              <h3 className="h4 mb-4 text-dark dark:text-white">{markdownify(service.title)}</h3>
              <p className="text-gray-600 dark:text-gray-300">{markdownify(service.content)}</p>
              {service.button.enable && (
                <Link
                  href={service.button.link}
                  className="mt-4 inline-flex items-center text-primary dark:text-white hover:text-primary-dark dark:hover:text-primary transition-colors"
                >
                  {service.button.label}
                  <svg
                    className="ml-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 