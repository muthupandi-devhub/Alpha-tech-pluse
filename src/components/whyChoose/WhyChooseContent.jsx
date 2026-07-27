import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";
import Button from "../ui/Button";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: i * 0.15,
    },
  }),
};

const cards = [
  {
    icon: Rocket,
    title: "High Performance Websites",
    description: "Fast, responsive and SEO-ready websites.",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth Strategy",
    description: "Marketing & SEO that delivers measurable results.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Consulting",
    description: "Technology solutions that help businesses grow.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
];

export default function WhyChooseContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="relative"
    >
      {/* Badge */}

      <motion.div
        custom={0}
        variants={fadeUp}
        className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl"
      >
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [1, .4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="h-2.5 w-2.5 rounded-full bg-cyan-400"
        />

        <span className="text-xs tracking-[0.3em] uppercase text-cyan-300">
          Premium Digital Solutions
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        custom={1}
        variants={fadeUp}
        className="mt-8 text-4xl font-bold leading-tight text-white lg:text-6xl"
      >
        Helping Businesses

        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Grow With Technology
        </span>
      </motion.h2>

      {/* Description */}

      <motion.p
        custom={2}
        variants={fadeUp}
        className="mt-8 max-w-xl text-lg leading-9 text-zinc-400"
      >
        Alpha Tech Plus delivers professional web development,
        SEO optimization, digital marketing and business consulting
        solutions designed to increase visibility, generate leads,
        and accelerate business growth.
      </motion.p>

      {/* Feature Cards */}

      <div className="mt-12 space-y-5">

        {cards.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              custom={index + 3}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  delay: index * .5,
                  repeat: Infinity,
                },
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              {/* Glow */}

              <motion.div
                animate={{
                  opacity: [.15, .35, .15],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className={`absolute inset-0 bg-gradient-to-r ${item.color}`}
              />

              {/* Shine */}

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-1000 group-hover:translate-x-full" />

              <div className="relative flex items-center gap-5">

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10"
                >
                  <Icon
                    size={30}
                    className="text-cyan-400"
                  />
                </motion.div>

                <div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

      {/* CTA */}

      <motion.div
        custom={7}
        variants={fadeUp}
        className="mt-12 flex flex-wrap gap-5"
      >
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
        >
          <Button>
            Start Your Project
          </Button>
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
        >
          <Button>
            Learn More
          </Button>
        </motion.div>

      </motion.div>

    </motion.div>
  );
}