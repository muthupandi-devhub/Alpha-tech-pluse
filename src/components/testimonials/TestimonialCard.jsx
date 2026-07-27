import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";


export default function TestimonialCard({ item, index }) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 60,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

      transition={{
        duration: 0.7,
        delay: index * 0.15,
      }}

      whileHover={{
        y: -12,
        scale: 1.02,
      }}

      className="
      group
      relative
      h-full
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-2xl
      "
    >


      {/* Glow */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-40
        w-40
        rounded-full
        bg-cyan-500/0
        blur-[100px]
        transition
        duration-700
        group-hover:bg-cyan-500/30
        "
      />



      {/* Quote Icon */}

      <div
        className="
        relative
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        border
        border-cyan-400/20
        bg-cyan-500/10
        "
      >

        <Quote
          size={28}
          className="text-cyan-400"
        />

      </div>




      {/* Rating */}

      <div
        className="
        mt-6
        flex
        gap-1
        "
      >

        {
          Array.from({
            length: item.rating,
          }).map((_, i) => (

            <Star
              key={i}
              size={18}
              fill="currentColor"
              className="text-cyan-400"
            />

          ))
        }

      </div>




      {/* Review */}

      <p
        className="
        mt-6
        leading-8
        text-zinc-300
        "
      >

        "{item.review}"

      </p>




      {/* Client */}

      <div
        className="
        mt-8
        flex
        items-center
        gap-4
        "
      >

        {/* Avatar */}

        <div
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-400
          via-blue-500
          to-purple-600
          font-bold
          text-white
          "
        >

          {item.name.charAt(0)}

        </div>



        <div>

          <h4
            className="
            font-semibold
            text-white
            "
          >

            {item.name}

          </h4>


          <p
            className="
            text-sm
            text-zinc-400
            "
          >

            {item.role} · {item.company}

          </p>


        </div>


      </div>



      {/* Bottom Gradient Line */}

      <div
        className="
        mt-8
        h-[2px]
        w-14
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-blue-500
        to-purple-500
        transition-all
        duration-500
        group-hover:w-full
        "
      />


    </motion.div>

  );

}