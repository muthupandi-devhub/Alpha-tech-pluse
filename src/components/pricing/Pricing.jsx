import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./pricingData";


export default function Pricing() {

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
        h-[500px]
        w-[500px]
        -translate-x-1/2
        rounded-full
        bg-purple-500/10
        blur-[180px]
        "
      />


      {/* Heading */}


      <motion.div

        initial={{
          opacity:0,
          y:60,
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

          Pricing Plans

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

          Choose The Right{" "}

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

            Solution

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

          Flexible digital solutions designed for startups,
          growing businesses, and enterprise-level requirements.

        </p>


      </motion.div>





      {/* Pricing Cards */}


      <div
        className="
        relative
        grid
        gap-8
        lg:grid-cols-3
        "
      >

        {
          pricingPlans.map((plan,index)=>(

            <PricingCard

              key={plan.name}

              plan={plan}

              index={index}

            />

          ))
        }


      </div>


    </section>

  );
}