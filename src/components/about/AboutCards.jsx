import {
  Globe,
  Search,
  Megaphone,
  BriefcaseBusiness,
} from "lucide-react";

const items = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites tailored for your business.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve search rankings, increase visibility and drive organic traffic.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Grow your brand with targeted marketing campaigns across digital platforms.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Consulting",
    description:
      "Strategic digital solutions and expert guidance to accelerate business growth.",
  },
];

export default function AboutCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400/60
              hover:bg-cyan-500/5
              hover:shadow-[0_0_40px_rgba(0,245,255,.18)]
            "
          >
            {/* Glow */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10">
              <Icon
                size={32}
                className="text-cyan-400"
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-2xl font-semibold text-white">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-4 leading-7 text-gray-400">
              {item.description}
            </p>

            {/* Bottom Line */}
            <div className="mt-8 h-[2px] w-12 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500 group-hover:w-full" />
          </div>
        );
      })}
    </div>
  );
}