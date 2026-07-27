import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import { portfolioProjects } from "./portfolioData";


export default function Portfolio() {

  return (

    <section
    id="portfolio"
      className="
      relative
      mt-32
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div className="
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
          duration:0.8,
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

          Our Portfolio

        </span>



        <h2
          className="
          mt-6
          text-4xl
          font-bold
          tracking-tight
          text-white
          md:text-6xl
          "
        >

          Projects That{" "}

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

            Create Impact

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

          We create modern digital experiences that help businesses
          build strong brands, improve visibility, and achieve growth.

        </p>


      </motion.div>




      {/* Portfolio Grid */}


      <div
        className="
        relative
        grid
        gap-8
        md:grid-cols-2
        "
      >

        {
          portfolioProjects.map((project,index)=>(

            <PortfolioCard

              key={project.title}

              project={project}

              index={index}

            />

          ))
        }


      </div>




    </section>

  );

}