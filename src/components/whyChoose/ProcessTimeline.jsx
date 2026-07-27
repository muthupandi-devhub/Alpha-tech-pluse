import { motion } from "framer-motion";
import { process } from "./whyChooseData";

export default function ProcessTimeline() {
  return (
    <div className="relative border-l border-cyan-400/20 pl-10">
      {process.map((item, index) => (
        <motion.div
          key={item.number}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.7,
          }}
          className="relative mb-14"
        >
          <div className="absolute -left-[50px] flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400 bg-cyan-500/20 text-sm font-bold text-cyan-300">
            {item.number}
          </div>

          <h3 className="text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="mt-4 leading-8 text-zinc-400">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}