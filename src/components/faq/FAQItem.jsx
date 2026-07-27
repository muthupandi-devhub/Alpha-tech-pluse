import { motion } from "framer-motion";
import { Plus } from "lucide-react";


export default function FAQItem({
  item,
  index,
  isOpen,
  onClick,
}) {


  return (

    <motion.div

      initial={{
        opacity:0,
        y:40,
      }}

      whileInView={{
        opacity:1,
        y:0,
      }}

      viewport={{
        once:true,
        amount:0.2,
      }}

      transition={{
        duration:0.6,
        delay:index * 0.1,
      }}

      className="
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      "
    >


      {/* Question */}

      <button

        onClick={onClick}

        className="
        flex
        w-full
        items-center
        justify-between
        gap-5
        p-6
        text-left
        "
      >


        <h3
          className="
          text-lg
          font-semibold
          text-white
          "
        >

          {item.question}

        </h3>




        <motion.div

          animate={{
            rotate:isOpen ? 45 : 0,
          }}

          transition={{
            duration:0.3,
          }}

          className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          "
        >

          <Plus
            size={22}
            className="text-cyan-400"
          />

        </motion.div>


      </button>




      {/* Answer */}

      <motion.div

        initial={false}

        animate={{
          height:isOpen ? "auto" : 0,
          opacity:isOpen ? 1 : 0,
        }}

        transition={{
          duration:0.35,
        }}

        className="overflow-hidden"
      >


        <p
          className="
          px-6
          pb-6
          leading-8
          text-zinc-400
          "
        >

          {item.answer}

        </p>


      </motion.div>


    </motion.div>

  );

}