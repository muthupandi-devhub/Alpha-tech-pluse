import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Megaphone,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern & responsive websites",
    top: "5%",
    left: "0%",
    delay: 0,
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher on Google",
    top: "18%",
    right: "0%",
    delay: 0.3,
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Reach your target audience",
    bottom: "18%",
    left: "3%",
    delay: 0.6,
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Consulting",
    description: "Grow with smart strategies",
    bottom: "3%",
    right: "0%",
    delay: 0.9,
  },
];

export default function FloatingCards() {
  return (
    <div className="relative hidden h-[720px] lg:flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[170px]" />
      <div className="absolute h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[170px]" />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[460px] w-[460px] rounded-full border border-cyan-400/20"
      />

      {/* Second Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[340px] w-[340px] rounded-full border border-purple-400/20"
      />

      {/* Center Core */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          relative
          flex
          h-56
          w-56
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          via-blue-500
          to-purple-600
          shadow-[0_0_120px_rgba(0,245,255,.5)]
        "
      >
        <div className="absolute h-44 w-44 rounded-full border border-white/20" />

        <div className="absolute h-32 w-32 rounded-full bg-[#050507]/40 backdrop-blur-xl" />

        <Sparkles size={56} className="relative z-10 text-white" />
      </motion.div>

      {/* Floating Cards */}
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: card.delay,
              },
              scale: {
                duration: 0.8,
                delay: card.delay,
              },
              y: {
                duration: 4,
                delay: card.delay,
                repeat: Infinity,
              },
            }}
            whileHover={{
              scale: 1.06,
              y: -20,
            }}
            style={{
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom,
            }}
            className="
              group
              absolute
              w-56
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-2xl
              transition-all
              duration-500
              hover:border-cyan-400
              hover:shadow-[0_0_45px_rgba(0,245,255,.25)]
            "
          >
            {/* Glow */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/0 blur-[100px] transition-all duration-700 group-hover:bg-cyan-500/20" />

            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
              <Icon className="text-cyan-400" size={32} />
            </div>

            <h3 className="relative mt-6 text-xl font-bold text-white">
              {card.title}
            </h3>

            <p className="relative mt-3 text-sm leading-7 text-zinc-400">
              {card.description}
            </p>

            <div className="relative mt-6 h-[2px] w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        );
      })}

      {/* Floating Particles */}
      <Sparkles
        className="absolute left-16 top-20 animate-pulse text-cyan-400"
        size={22}
      />

      <Sparkles
        className="absolute bottom-24 right-16 animate-pulse text-purple-400"
        size={24}
      />

      <Sparkles
        className="absolute right-24 top-40 animate-pulse text-blue-400"
        size={18}
      />
    </div>
  );
}