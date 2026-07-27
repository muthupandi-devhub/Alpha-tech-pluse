import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
} from "lucide-react";


export default function FloatingButtons() {


return (

<div

className="
fixed
bottom-8
right-6
z-50
flex
flex-col
gap-4
"

>


{/* Call Button */}

<motion.a

href="tel:+919999999999"

initial={{
opacity:0,
scale:0,
}}

animate={{
opacity:1,
scale:1,
}}

transition={{
duration:.5,
}}

whileHover={{
scale:1.1,
}}

className="
group
relative
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-cyan-400/30
bg-cyan-500/20
text-cyan-300
backdrop-blur-xl
shadow-[0_0_30px_rgba(34,211,238,.4)]
"

>


<Phone
size={24}
/>


{/* Tooltip */}

<span

className="
pointer-events-none
absolute
right-16
rounded-lg
border
border-white/10
bg-black/70
px-3
py-2
text-xs
text-white
opacity-0
transition
group-hover:opacity-100
"

>

Call Us

</span>


</motion.a>







{/* WhatsApp Button */}


<motion.a


href="https://wa.me/919999999999"


target="_blank"


initial={{
opacity:0,
scale:0,
}}


animate={{
opacity:1,
scale:1,
}}


transition={{
duration:.5,
delay:.2,
}}


whileHover={{
scale:1.1,
}}


className="
group
relative
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-purple-400/30
bg-purple-500/20
text-purple-300
backdrop-blur-xl
shadow-[0_0_30px_rgba(168,85,247,.4)]
"


>


<MessageCircle
size={26}
/>



<span

className="
pointer-events-none
absolute
right-16
rounded-lg
border
border-white/10
bg-black/70
px-3
py-2
text-xs
text-white
opacity-0
transition
group-hover:opacity-100
"

>

WhatsApp

</span>



</motion.a>



</div>


);

}