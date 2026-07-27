import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";


export default function ScrollTop() {

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      if(window.scrollY > 500){
        setVisible(true);
      }
      else{
        setVisible(false);
      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  },[]);



  const scrollTop = () => {

    window.scrollTo({
      top:0,
      behavior:"smooth",
    });

  };



  return (

    <AnimatePresence>

    {
      visible && (

        <motion.button

          initial={{
            opacity:0,
            scale:0,
            y:30,
          }}

          animate={{
            opacity:1,
            scale:1,
            y:0,
          }}

          exit={{
            opacity:0,
            scale:0,
            y:30,
          }}

          transition={{
            duration:.4,
          }}


          onClick={scrollTop}


          className="
          fixed
          bottom-8
          left-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-cyan-400/30
          bg-white/5
          text-cyan-400
          backdrop-blur-xl
          shadow-[0_0_35px_rgba(34,211,238,.35)]
          transition
          hover:border-cyan-400
          hover:bg-cyan-400/10
          "


          whileHover={{
            y:-6,
            scale:1.1,
          }}

        >

          <ArrowUp size={26}/>


        </motion.button>

      )
    }


    </AnimatePresence>

  );

}