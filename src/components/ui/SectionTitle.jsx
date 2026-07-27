import { motion } from "framer-motion";

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "center",
}) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className={`relative flex flex-col ${alignment}`}
    >
      {/* Glow */}

      <div className="absolute -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-[90px]" />

      {/* Badge */}

      <div className="relative inline-flex overflow-hidden rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

        <span className="relative text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          {badge}
        </span>
      </div>

      {/* Heading */}

      <h2 className="relative mt-8 max-w-5xl font-['Space_Grotesk'] text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
        {title}
      </h2>

      {/* Gradient Line */}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 140 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        className="mt-8 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
      />

      {/* Subtitle */}

      <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400 md:text-xl">
        {subtitle}
      </p>
    </motion.div>
  );
}