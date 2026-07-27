import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Aurora */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-40, 40, -40],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-20 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]"
        />

        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [40, -40, 40],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-10 bottom-10 h-[420px] w-[420px] rounded-full bg-purple-500/10 blur-[160px]"
        />

      </div>

      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
        [background-size:70px_70px]
      "
      />
    </>
  );
}