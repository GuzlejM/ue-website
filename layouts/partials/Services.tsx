"use client";

import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface ServiceButton {
  enable: boolean;
  label: string;
  link: string;
}

interface Service {
  title: string;
  content: string;
  image: string;
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
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            className="services-slider"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="service-item">
                  <div className="service-image">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={445}
                      height={230}
                    />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.content}</p>
                    {service.button.enable && (
                      <Link href={service.button.link} className="btn btn-primary">
                        {service.button.label}
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services; 