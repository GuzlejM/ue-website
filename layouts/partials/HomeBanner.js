import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => {
  return (
    <section className="section pb-[50px]">
      <div className="container relative">
        {/* Floating Arrow */}
        <div className="absolute -top-16 right-60 z-50 animate-bounce hidden lg:block">
          <div className="flex items-center text-primary transform rotate-[45deg]">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="transform rotate-[275deg]"
            >
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
            <span className="text-lg font-medium">Try our AI!</span>
          </div>
        </div>

        <div className="row text-center">
          <div className="mx-auto lg:col-10">
            <h1 className="font-primary font-bold">{banner.title}</h1>
            <p className="mt-4">{markdownify(banner.content)}</p>
            <Link
              className="btn btn-primary mt-4"
              href="/ai"
            >
              Try AI Assistant
            </Link>
            <Image
              className="mx-auto mt-12"
              src={banner.image}
              width={750}
              height={390}
              alt="banner image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
