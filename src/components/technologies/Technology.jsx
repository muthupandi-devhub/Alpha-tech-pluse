import { motion } from "framer-motion";
import TechnologyCard from "./TechnologyCard";
import { technologies } from "./technologyData";


export default function Technology(){


return (

<section
id="technology"
className="
relative
mt-32
overflow-hidden
px-6
"

>


{/* Background Glow */}

<div
className="
absolute
left-0
top-20
h-[400px]
w-[400px]
rounded-full
bg-cyan-500/10
blur-[160px]
"
/>


<div
className="
absolute
right-0
bottom-20
h-[350px]
w-[350px]
rounded-full
bg-purple-500/10
blur-[160px]
"
/>





<div
className="
relative
mx-auto
max-w-7xl
"

>



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
amount:.3,
}}

transition={{
duration:.8,
}}

className="
mb-20
text-center
"

>


<motion.span

initial={{
opacity:0,
scale:.8,
}}

whileInView={{
opacity:1,
scale:1,
}}

viewport={{
once:true,
}}

className="
inline-flex
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

Technology Stack

</motion.span>





<h2

className="
mt-6
text-4xl
font-bold
text-white
md:text-6xl
"

>

Built With

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

Modern Technologies

</span>

</h2>




<p

className="
mx-auto
mt-6
max-w-3xl
leading-8
text-zinc-400
"

>

We combine powerful technologies and modern
development practices to create scalable,
secure and high-performance digital solutions.

</p>


</motion.div>







{/* Technology Cards */}


<div

className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"

>


{
technologies.map((tech,index)=>(

<TechnologyCard

key={tech.category}

category={tech.category}

items={tech.items}

index={index}

/>

))
}


</div>







{/* Bottom Glow Line */}


<motion.div

initial={{
scaleX:0,
}}

whileInView={{
scaleX:1,
}}

viewport={{
once:true,
}}

transition={{
duration:1.5,
}}

className="
mx-auto
mt-20
h-[2px]
max-w-xl
origin-left
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
"

/>



</div>



</section>

);

}