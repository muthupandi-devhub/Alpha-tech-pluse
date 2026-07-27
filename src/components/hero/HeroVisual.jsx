import {
  Cpu,
  Brain,
  ShieldCheck,
  Cloud,
  Database,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Advanced AI Solutions",
    top: "5%",
    left: "0%",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable Infrastructure",
    top: "18%",
    right: "0%",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description: "Enterprise Protection",
    bottom: "20%",
    left: "3%",
  },
  {
    icon: Database,
    title: "Big Data",
    description: "Analytics & Insights",
    bottom: "5%",
    right: "0%",
  },
];

export default function HeroVisual() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        x: 80,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      transition={{
        duration: 1.2,
        delay: 0.4,
        ease: "easeOut",
      }}
      className="relative hidden h-[720px] items-center justify-center lg:flex"
    >
      {/* Grid Background */}

      <div
        className="
        absolute
        inset-0
        opacity-10
        [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        [background-size:40px_40px]
      "
      />

      {/* Glow */}

      <div className="absolute h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="absolute h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[180px]" />

      {/* Outer Ring */}

      <div
        className="absolute h-[470px] w-[470px] rounded-full border border-cyan-400/20 animate-spin"
        style={{
          animationDuration: "25s",
        }}
      />

      {/* Second Ring */}

      <div
        className="absolute h-[360px] w-[360px] rounded-full border border-purple-400/20 animate-spin"
        style={{
          animationDuration: "18s",
          animationDirection: "reverse",
        }}
      />

      {/* Third Ring */}

      <div
        className="absolute h-[280px] w-[280px] rounded-full border border-cyan-300/20 animate-spin"
        style={{
          animationDuration: "12s",
        }}
      />

      {/* AI Core */}

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
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
        from-cyan-400
        via-blue-500
        to-purple-600
        shadow-[0_0_120px_rgba(0,245,255,.6)]
      "
      >
        <div className="absolute h-44 w-44 rounded-full border border-white/20" />

        <div className="absolute h-32 w-32 rounded-full bg-[#050507]/50 backdrop-blur-xl" />

        <Cpu
          size={70}
          className="relative z-20 text-white drop-shadow-[0_0_20px_white]"
        />
      </motion.div>

      {/* Floating Cards */}

      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={index}
            style={{
              top: card.top,
              left: card.left,
              right: card.right,
              bottom: card.bottom,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.08,
              y: -8,
            }}
            className="
            absolute
            w-52
            rounded-2xl
            border
            border-cyan-400/10
            bg-white/5
            p-5
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(0,245,255,.08)]
          "
          >
            <Icon
              size={30}
              className="mb-3 text-cyan-400"
            />

            <h3 className="font-semibold text-white">
              {card.title}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {card.description}
            </p>
          </motion.div>
        );
      })}

      {/* Floating Sparkles */}

      <Sparkles
        size={28}
        className="absolute top-16 right-16 animate-pulse text-cyan-400"
      />

      <Sparkles
        size={22}
        className="absolute bottom-16 left-20 animate-pulse text-purple-400"
      />

      <Sparkles
        size={18}
        className="absolute top-1/2 left-10 animate-pulse text-blue-400"
      />
    </motion.div>
  );
}