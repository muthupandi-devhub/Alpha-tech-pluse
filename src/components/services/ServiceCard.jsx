import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      whileHover={{
        y: -12,
      }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_50px_rgba(0,255,255,.15)]"
    >
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/0 blur-[120px] transition-all duration-700 group-hover:bg-cyan-500/20" />

      {/* Shine */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        transition={{ duration: 0.3 }}
        className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"
      >
        <Icon
          size={36}
          className="text-cyan-400"
        />
      </motion.div>

      {/* Title */}
      <h3 className="mt-8 text-3xl font-bold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-5 leading-8 text-zinc-400">
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-10 flex items-center justify-between">
        <span className="text-cyan-300 transition-all duration-300 group-hover:translate-x-2">
          Learn More
        </span>

        <ArrowUpRight className="text-cyan-400 transition-transform duration-300 group-hover:rotate-45" />
      </div>

      {/* Bottom Line */}
      <div className="mt-8 h-[2px] w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}