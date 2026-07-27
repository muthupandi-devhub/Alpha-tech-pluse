import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";


export default function PricingCard({ plan, index }) {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:80,
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
        duration:0.7,
        delay:index * 0.15,
      }}


      whileHover={{
        y:-15,
        scale:1.03,
      }}


      className={`
      group
      relative
      overflow-hidden
      rounded-[32px]
      border
      p-8
      backdrop-blur-2xl
      transition-all
      duration-500

      ${
        plan.popular
        ?
        "border-cyan-400/50 bg-cyan-500/10 shadow-[0_0_50px_rgba(34,211,238,0.15)]"
        :
        "border-white/10 bg-white/5"
      }

      `}
    >



      {/* Glow Effect */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-44
        w-44
        rounded-full
        bg-cyan-500/0
        blur-[100px]
        transition
        duration-700
        group-hover:bg-cyan-500/30
        "
      />




      {/* Popular Badge */}

      {
        plan.popular && (

          <motion.div

            initial={{
              opacity:0,
              scale:0.8,
            }}

            animate={{
              opacity:1,
              scale:1,
            }}

            className="
            absolute
            right-6
            top-6
            flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-400/10
            px-4
            py-2
            text-xs
            uppercase
            tracking-wider
            text-cyan-300
            "
          >

            <Sparkles size={14}/>

            Popular

          </motion.div>

        )
      }




      <div className="relative">


        {/* Title */}

        <h3
          className="
          text-2xl
          font-bold
          text-white
          "
        >

          {plan.name}

        </h3>



        <p
          className="
          mt-4
          leading-7
          text-zinc-400
          "
        >

          {plan.description}

        </p>





        {/* Price */}

        <div
          className="
          mt-8
          "
        >

          <h4
            className="
            text-5xl
            font-bold
            text-white
            "
          >

            {plan.price}

          </h4>


          {
            plan.price !== "Custom" && (

              <span
                className="
                text-sm
                text-zinc-500
                "
              >
                per project
              </span>

            )
          }


        </div>




        {/* Divider */}

        <div
          className="
          my-8
          h-px
          bg-white/10
          "
        />




        {/* Features */}

        <ul
          className="
          space-y-4
          "
        >

          {
            plan.features.map((feature)=>(

              <li

                key={feature}

                className="
                flex
                items-center
                gap-3
                text-sm
                text-zinc-300
                "
              >

                <span
                  className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-500/10
                  "
                >

                  <Check
                    size={14}
                    className="text-cyan-400"
                  />

                </span>


                {feature}


              </li>

            ))
          }

        </ul>





        {/* CTA Button */}

        <motion.button

          whileHover={{
            scale:1.05,
          }}

          whileTap={{
            scale:0.95,
          }}

          className={`
          mt-10
          w-full
          rounded-xl
          py-3
          font-semibold
          transition-all

          ${
            plan.popular
            ?
            "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white"
            :
            "border border-white/10 bg-white/5 text-white hover:border-cyan-400"
          }

          `}
        >

          Get Started

        </motion.button>



      </div>



      {/* Bottom Line */}

      <div
        className="
        relative
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