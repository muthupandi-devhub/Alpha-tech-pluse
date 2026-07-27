import { motion } from "framer-motion";
import { Code2 } from "lucide-react";


const cardVariants = {

hidden:{
  opacity:0,
  y:80,
  scale:0.85,
},

show:(index)=>({

  opacity:1,
  y:0,
  scale:1,

  transition:{
    duration:0.8,
    delay:index*0.15,
    ease:"easeOut",
  }

})

};



export default function TechnologyCard({
 category,
 items,
 index,
}) {


return (

<motion.div

custom={index}

variants={cardVariants}

initial="hidden"

whileInView="show"

viewport={{
 once:true,
 amount:0.2,
}}


whileHover={{
 y:-15,
 rotateX:8,
 rotateY:-8,
 scale:1.04,
}}


style={{
 transformPerspective:1000,
}}


className="
group
relative
overflow-hidden
rounded-[32px]
border
border-white/10
bg-white/5
p-8
backdrop-blur-2xl
transition-all
duration-500
hover:border-cyan-400/40
hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]
"

>



{/* Animated Glow */}

<motion.div

animate={{

x:[-100,200,-100],

}}

transition={{

duration:6,

repeat:Infinity,

ease:"linear"

}}


className="
absolute
top-0
left-0
h-full
w-20
bg-gradient-to-r
from-transparent
via-white/10
to-transparent
blur-xl
"

/>





{/* Background Orb */}


<div

className="
absolute
-right-[80px]
-top-[80px]
h-40
w-40
rounded-full
bg-cyan-500/0
blur-[100px]
transition-all
duration-700
group-hover:bg-cyan-500/30
"

/>






{/* Icon */}


<motion.div

animate={{

y:[0,-8,0]

}}

transition={{

duration:3,

repeat:Infinity

}}


className="
relative
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-gradient-to-br
from-cyan-400/20
to-purple-500/20
border
border-white/10
"

>


<Code2

size={34}

className="
text-cyan-400
"

/>


</motion.div>







<h3

className="
relative
mt-8
text-2xl
font-bold
text-white
"

>

{category}

</h3>







<div

className="
mt-6
flex
flex-wrap
gap-3
"

>


{

items.map((item,i)=>(


<motion.span

key={item}

initial={{

opacity:0,
scale:0.5

}}

whileInView={{

opacity:1,
scale:1

}}

viewport={{

once:true

}}

transition={{

delay:
(index*0.15)+(i*0.08)

}}


whileHover={{

scale:1.1

}}


className="
rounded-full
border
border-white/10
bg-black/30
px-4
py-2
text-sm
text-zinc-300
transition
hover:border-cyan-400
hover:text-cyan-400
"

>


{item}


</motion.span>


))

}


</div>





{/* Bottom Line */}


<motion.div

initial={{

width:"40px"

}}

whileHover={{

width:"100%"

}}


className="
mt-8
h-[2px]
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
"

/>





</motion.div>


);

}