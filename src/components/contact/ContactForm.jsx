import { motion } from "framer-motion";
import { Send } from "lucide-react";


export default function ContactForm(){

return (

<motion.form

initial={{
opacity:0,
x:60,
}}

whileInView={{
opacity:1,
x:0,
}}

viewport={{
once:true,
}}

transition={{
duration:.8,
}}

className="
rounded-[32px]
border
border-white/10
bg-white/5
p-8
backdrop-blur-2xl
"

>


<input

type="text"

placeholder="Your Name"

className="
mb-5
w-full
rounded-xl
border
border-white/10
bg-black/20
px-5
py-4
text-white
outline-none
focus:border-cyan-400
"

/>



<input

type="email"

placeholder="Email Address"

className="
mb-5
w-full
rounded-xl
border
border-white/10
bg-black/20
px-5
py-4
text-white
outline-none
focus:border-cyan-400
"

/>




<input

type="text"

placeholder="Subject"

className="
mb-5
w-full
rounded-xl
border
border-white/10
bg-black/20
px-5
py-4
text-white
outline-none
focus:border-cyan-400
"

/>





<textarea

rows="5"

placeholder="Your Message"

className="
mb-6
w-full
rounded-xl
border
border-white/10
bg-black/20
px-5
py-4
text-white
outline-none
focus:border-cyan-400
"

/>





<motion.button

whileHover={{
scale:1.05,
}}

whileTap={{
scale:.95,
}}

className="
flex
w-full
items-center
justify-center
gap-3
rounded-xl
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
py-4
font-semibold
text-white
"

>

Send Message

<Send size={18}/>

</motion.button>



</motion.form>

)

}