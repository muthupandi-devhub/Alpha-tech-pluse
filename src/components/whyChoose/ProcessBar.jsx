import { motion } from "framer-motion";
import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
} from "lucide-react";

const process = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
  },
  {
    icon: PencilRuler,
    number: "02",
    title: "Design",
  },
  {
    icon: Code2,
    number: "03",
    title: "Develop",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
  },
];

export default function ProcessBar() {
  return (
    <section className="relative mt-28">

      {/* Title */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="mb-16 text-center"
      >
        <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
          Our Process
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          From Vision To Reality
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
          Every successful project follows a proven workflow that
          ensures quality, performance, and measurable business
          results.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="relative">

        {/* Animated Line */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
          }}
          style={{ originX: 0 }}
          className="
            absolute
            left-0
            top-12
            hidden
            h-[2px]
            w-full
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            lg:block
          "
        />

        <div className="grid gap-10 lg:grid-cols-4">

          {process.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .2,
                  duration: .7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative text-center"
              >

                {/* Circle */}

                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-cyan-400/30
                    bg-[#0b0b11]
                    shadow-[0_0_40px_rgba(0,255,255,.15)]
                  "
                >

                  {/* Glow */}

                  <div className="absolute h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl" />

                  <Icon
                    size={34}
                    className="relative text-cyan-400"
                  />

                </div>

                {/* Number */}

                <div className="mt-6 text-cyan-400 text-sm tracking-[0.35em]">
                  {item.number}
                </div>

                {/* Title */}

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {
                    item.number === "01"
                      ? "Understanding your business goals and planning the right digital strategy."

                      : item.number === "02"
                      ? "Crafting intuitive UI/UX and premium user experiences."

                      : item.number === "03"
                      ? "Building scalable, secure and high-performance solutions."

                      : "Deploying, optimizing and supporting your business for long-term growth."
                  }
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}