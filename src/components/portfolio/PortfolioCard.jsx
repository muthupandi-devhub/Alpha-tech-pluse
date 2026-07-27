import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";



const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


export default function PortfolioCard({ project, index }) {


return (

<motion.article

variants={cardVariants}

initial="hidden"

whileInView="show"

viewport={{
 once:true,
 amount:0.2
}}


whileHover={{
 y:-15,
 rotateX:5,
 rotateY:-5,
 scale:1.03,
}}


transition={{
 type:"spring",
 stiffness:200,
 damping:15
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
backdrop-blur-2xl
"

>



{/* Image */}


<motion.div

className="
relative
h-72
overflow-hidden
"

>


<motion.img

src={project.image}

alt={project.title}


initial={{
scale:1.2,
opacity:0
}}

whileInView={{
scale:1,
opacity:1
}}

viewport={{
once:true
}}

transition={{
duration:1.2,
ease:"easeOut"
}}


className="
h-full
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>



{/* Overlay */}

<div
className="
absolute
inset-0
bg-gradient-to-t
from-[#050507]
via-[#050507]/40
to-transparent
"
/>



{/* Category */}


<motion.span

initial={{
opacity:0,
y:-20
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.3
}}


className="
absolute
left-5
top-5
rounded-full
border
border-cyan-400/20
bg-black/40
px-4
py-2
text-xs
uppercase
tracking-wider
text-cyan-300
backdrop-blur-xl
"

>

{project.category}

</motion.span>


</motion.div>




{/* Content */}


<div className="
relative
p-8
">


<motion.h3

initial={{
opacity:0,
x:-30
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:.2
}}

className="
text-2xl
font-bold
text-white
"

>

{project.title}

</motion.h3>




<p className="
mt-4
leading-7
text-zinc-400
">

{project.description}

</p>




{/* Tech Tags */}


<div className="
mt-6
flex
flex-wrap
gap-2
">


{
project.technologies.map((tech,i)=>(


<motion.span

key={tech}

initial={{
opacity:0,
scale:.5
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
delay:i*.1
}}


className="
rounded-full
border
border-white/10
bg-white/5
px-3
py-1
text-xs
text-zinc-300
"

>

{tech}

</motion.span>


))
}


</div>





<motion.button

whileHover={{
x:8
}}

className="
mt-8
flex
items-center
gap-2
text-sm
font-medium
text-cyan-400
"

>

View Project

<ExternalLink size={16}/>


</motion.button>




{/* Glow Effect */}

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
group-hover:bg-cyan-500/30
"

/>



</div>



</motion.article>


);

}