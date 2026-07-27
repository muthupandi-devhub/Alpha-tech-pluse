import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import ContactForm from "./ContactForm";
import { contactInfo } from "./contactData";
import ContactMap from "./ContactMap";


const icons = {
  "Email Us": Mail,
  "Call Us": Phone,
  "Location": MapPin,
};


export default function Contact() {


  return (

    <section
    Id="contact"
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
        left-0
        top-20
        h-[500px]
        w-[500px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />


      <div
        className="
        absolute
        bottom-0
        right-0
        h-[450px]
        w-[450px]
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

          Contact Us

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

          Let's Build Something{" "}

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

            Amazing

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

          Have a project idea? Connect with Alpha Tech Plus
          and transform your vision into a powerful digital solution.

        </p>


      </motion.div>





      {/* Content */}

      <div
        className="
        relative
        grid
        gap-10
        lg:grid-cols-2
        "
      >




        {/* Contact Information */}

        <div
          className="
          space-y-6
          "
        >


          {
            contactInfo.map((item,index)=>{


              const Icon = icons[item.title];


              return (

                <motion.div

                  key={item.title}


                  initial={{
                    opacity:0,
                    x:-50,
                  }}

                  whileInView={{
                    opacity:1,
                    x:0,
                  }}

                  viewport={{
                    once:true,
                  }}

                  transition={{
                    delay:index * .15,
                  }}


                  whileHover={{
                    y:-8,
                  }}


                  className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  "
                >


                  <div
                    className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-cyan-500/20
                    to-purple-500/20
                    "
                  >

                    <Icon
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>




                  <div>

                    <h3
                      className="
                      text-lg
                      font-semibold
                      text-white
                      "
                    >

                      {item.title}

                    </h3>


                    <p
                      className="
                      mt-1
                      text-cyan-300
                      "
                    >

                      {item.value}

                    </p>


                    <p
                      className="
                      mt-2
                      text-sm
                      text-zinc-400
                      "
                    >

                      {item.description}

                    </p>


                  </div>


                </motion.div>

              );

            })
          }


        </div>





        {/* Form */}

        <ContactForm />
        <ContactMap />


      </div>



    </section>

  );

}