import { motion } from "framer-motion";
import { Navigation } from "lucide-react";


export default function ContactMap() {


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
      }}

      transition={{
        duration: 0.8,
      }}


      className="
      group
      relative
      mt-10
      w-full
      overflow-hidden
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-3
      backdrop-blur-2xl
      "
    >



      {/* Glow Effects */}

      <div
        className="
        absolute
        -right-20
        -top-20
        h-[320px]
        w-[320px]
        rounded-full
        bg-cyan-500/10
        blur-[120px]
        transition
        duration-700
        group-hover:bg-cyan-500/20
        "
      />


      <div
        className="
        absolute
        -bottom-20
        -left-20
        h-[300px]
        w-[300px]
        rounded-full
        bg-purple-500/10
        blur-[120px]
        "
      />





      {/* Google Map */}

      <div
        className="
        relative
        h-[420px]
        w-full
        overflow-hidden
        rounded-[28px]
        "
      >


        <iframe

          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15697.646032131312!2d78.80428214999999!3d10.388854199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1785003560236!5m2!1sen!2sin"

          width="100%"

          height="100%"

          style={{
            border:0,
          }}

          allowFullScreen

          loading="lazy"

          referrerPolicy="strict-origin-when-cross-origin"

          title="Alpha Tech Plus Location"

          className="
          rounded-[28px]
          grayscale
          opacity-80
          transition
          duration-700
          hover:grayscale-0
          "

        />



        {/* Dark Overlay */}

        <div
          className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          bg-gradient-to-t
          from-[#050507]/50
          via-transparent
          to-transparent
          "
        />


      </div>





      {/* Bottom Content */}


      <div

        className="
        flex
        w-full
        flex-col
        gap-5
        p-6
        sm:flex-row
        sm:items-center
        sm:justify-between
        "

      >



        <div>

          <h4
            className="
            text-xl
            font-semibold
            text-white
            "
          >

            Visit Our Office

          </h4>



          <p
            className="
            mt-2
            text-zinc-400
            "
          >

            Connect with Alpha Tech Plus digital team

          </p>


        </div>





        <button

          className="
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-cyan-400/30
          bg-cyan-500/10
          px-6
          py-3
          text-cyan-300
          transition
          duration-300
          hover:bg-cyan-500/20
          "

        >

          <Navigation size={18}/>

          Directions

        </button>



      </div>




    </motion.div>

  );

}