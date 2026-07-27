import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Quote, Star } from "lucide-react";

import "swiper/css";

import { testimonials } from "./testimonialData";


export default function Testimonials() {

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
        bg-cyan-500/10
        blur-[170px]
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

          Client Reviews

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

          What Our{" "}

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
            Clients Say
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

          Trusted by businesses for quality development,
          digital growth, and long-term partnerships.

        </p>


      </motion.div>




      {/* Slider */}


      <Swiper

        modules={[
          Autoplay
        ]}

        autoplay={{
          delay:3500,
          disableOnInteraction:false,
        }}

        loop={true}

        spaceBetween={30}

        breakpoints={{

          320:{
            slidesPerView:1,
          },

          768:{
            slidesPerView:2,
          },

          1280:{
            slidesPerView:3,
          },

        }}

        className="
        relative
        "
      >


        {
          testimonials.map((item,index)=>(


            <SwiperSlide
              key={item.name}
            >


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
                  delay:index*.15,
                  duration:.7,
                }}


                whileHover={{
                  y:-10,
                }}


                className="
                group
                relative
                h-full
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-2xl
                "
              >



                {/* Quote Icon */}


                <div
                  className="
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
                    className="
                    text-cyan-400
                    "
                  />

                </div>




                {/* Stars */}

                <div
                  className="
                  mt-6
                  flex
                  gap-1
                  "
                >

                  {
                    Array.from({
                      length:item.rating
                    }).map((_,i)=>(

                      <Star
                        key={i}
                        size={18}
                        fill="currentColor"
                        className="
                        text-cyan-400
                        "
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




                {/* User */}


                <div
                  className="
                  mt-8
                  flex
                  items-center
                  gap-4
                  "
                >

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




                {/* Hover Glow */}

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
                  group-hover:bg-cyan-500/20
                  "
                />


              </motion.div>


            </SwiperSlide>


          ))
        }


      </Swiper>


    </section>

  );

}