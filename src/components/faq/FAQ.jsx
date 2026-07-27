import { useState } from "react";
import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import { faqData } from "./faqData";


export default function FAQ() {


  const [open,setOpen] = useState(null);



  return (

    <section
      className="
      relative
      mt-32
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        left-1/2
        top-20
        h-[450px]
        w-[450px]
        -translate-x-1/2
        rounded-full
        bg-purple-500/10
        blur-[160px]
        "
      />





      {/* Heading */}

      <motion.div

        initial={{
          opacity:0,
          y:50,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

        transition={{
          duration:.8,
        }}

        className="
        relative
        mb-16
        text-center
        "
      >


        <span
          className="
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-5
          py-2
          text-xs
          uppercase
          tracking-[0.35em]
          text-cyan-300
          "
        >

          FAQ

        </span>




        <h2
          className="
          mt-6
          text-4xl
          font-bold
          text-white
          md:text-6xl
          "
        >

          Frequently Asked{" "}

          <span
            className="
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >

            Questions

          </span>


        </h2>



        <p
          className="
          mx-auto
          mt-5
          max-w-2xl
          leading-8
          text-zinc-400
          "
        >

          Find answers about our services,
          development process and digital solutions.

        </p>


      </motion.div>





      {/* FAQ List */}


      <div
        className="
        relative
        mx-auto
        max-w-4xl
        space-y-5
        "
      >


        {
          faqData.map((item,index)=>(

            <FAQItem

              key={index}

              item={item}

              index={index}

              isOpen={
                open === index
              }

              onClick={() =>
                setOpen(
                  open === index
                  ? null
                  : index
                )
              }

            />

          ))
        }


      </div>



    </section>

  );

}