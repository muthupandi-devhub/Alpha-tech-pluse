import { motion } from "framer-motion";
import {
  FolderKanban,
  Users,
  Globe,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";


const stats = [
  {
    icon: FolderKanban,
    value: 120,
    suffix: "+",
    title: "Projects Delivered",
    description:
      "Successfully completed digital solutions.",
    gradient:
      "from-cyan-500/20 to-blue-500/20",
  },

  {
    icon: Users,
    value: 85,
    suffix: "+",
    title: "Happy Clients",
    description:
      "Trusted by startups and businesses.",
    gradient:
      "from-purple-500/20 to-pink-500/20",
  },

  {
    icon: Globe,
    value: 15,
    suffix: "+",
    title: "Industries Served",
    description:
      "Helping businesses across sectors.",
    gradient:
      "from-blue-500/20 to-cyan-500/20",
  },

  {
    icon: Award,
    value: 99,
    suffix: "%",
    title: "Client Satisfaction",
    description:
      "Committed to quality and innovation.",
    gradient:
      "from-cyan-500/20 to-purple-500/20",
  },
];


// Number Animation
function Counter({ value, active }) {

  const [count,setCount] = useState(0);


  useEffect(()=>{

    if(!active) return;


    let start = 0;

    const duration = 2000;

    const increment =
      value / (duration / 16);


    const timer = setInterval(()=>{

      start += increment;


      if(start >= value){

        setCount(value);
        clearInterval(timer);

      }else{

        setCount(Math.floor(start));

      }

    },16);


    return ()=>clearInterval(timer);


  },[active,value]);


  return count;

}



export default function Stats(){


const [ref,inView] = useInView({

  triggerOnce:true,
  threshold:0.3,

});



return (

<section
ref={ref}
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
top-0
h-[400px]
w-[400px]
-translate-x-1/2
rounded-full
bg-cyan-500/10
blur-[150px]
"
/>



{/* Heading */}


<motion.div

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="
mb-16
text-center
"

>


<span className="
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
">

Our Achievement

</span>



<h2 className="
mt-6
text-4xl
font-bold
text-white
md:text-6xl
">

Numbers That{" "}

<span className="
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
bg-clip-text
text-transparent
">

Speak

</span>


</h2>



<p className="
mx-auto
mt-5
max-w-2xl
text-zinc-400
">

We focus on delivering measurable results through innovation,
performance, and long-term partnerships.

</p>


</motion.div>





{/* Cards */}


<div className="
grid
gap-8
md:grid-cols-2
xl:grid-cols-4
">


{
stats.map((item,index)=>{


const Icon = item.icon;


return (

<motion.div

key={item.title}


initial={{
opacity:0,
y:70
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}


transition={{

delay:index*.15,
duration:.7

}}


whileHover={{

y:-12,
scale:1.03

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
"

>


{/* Hover Glow */}

<div
className={`
absolute
inset-0
bg-gradient-to-br
${item.gradient}
opacity-0
transition
duration-500
group-hover:opacity-100
`}
/>


<div className="
relative
flex
h-20
w-20
items-center
justify-center
rounded-3xl
border
border-cyan-400/20
bg-white/5
">


<Icon

size={38}

className="
text-cyan-400
"

/>


</div>




<h3 className="
relative
mt-8
text-5xl
font-bold
text-white
">


<Counter
value={item.value}
active={inView}
/>


{item.suffix}


</h3>




<h4 className="
relative
mt-4
text-xl
font-semibold
text-white
">

{item.title}

</h4>



<p className="
relative
mt-4
leading-8
text-zinc-400
">

{item.description}

</p>



<div className="
relative
mt-8
h-[2px]
w-14
rounded-full
bg-gradient-to-r
from-cyan-400
via-blue-500
to-purple-500
transition-all
duration-500
group-hover:w-full
"/>



</motion.div>


)

})

}


</div>


</section>

);


}