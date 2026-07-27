import { CheckCircle2 } from "lucide-react";
import Button from "../ui/Button";

const features = [
  "Artificial Intelligence & Automation",
  " Professional Website Development",
  "Search Engine Optimization (SEO)",
  "Digital Marketing & Brand Promotion",
  "Business Growth & Technology Consulting"
];

export default function AboutContent() {
  return (
    <div className="relative">

      {/* Section Label */}
      <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium tracking-[0.2em] uppercase text-cyan-300 backdrop-blur-xl">
        About Alpha Tech Plus
      </span>

      {/* Heading */}
      <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-4xl">
        Helping Businesses Grow Through
Smart Digital Solutions
        <br />

        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Future of Technology
        </span>
      </h2>

      {/* Paragraph */}
      <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
At Alpha Tech Plus, we empower businesses with modern digital solutions that create measurable results. From professional website development and SEO optimization to digital marketing and business growth strategies, we help brands establish a strong online presence, attract the right audience, and achieve long-term success.

Our approach combines creative design, technical expertise, and data-driven strategies to deliver websites that perform, marketing campaigns that convert, and digital experiences that inspire confidence..
      </p>

      {/* Feature List */}
      <div className="mt-10 grid gap-5">

        {features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-4"
          >
            <CheckCircle2
              className="text-cyan-400"
              size={22}
            />

            <span className="text-lg text-gray-300">
              {item}
            </span>
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="mt-12">
        <Button>
          Discover More
        </Button>
      </div>

    </div>
  );
}