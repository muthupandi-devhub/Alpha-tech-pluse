import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Send,
} from "lucide-react";

import {
  footerLinks,
  socialLinks,
} from "./footerData";



export default function Footer(){


return (

<footer

className="
relative
mt-32
overflow-hidden
border-t
border-white/10
bg-[#050507]
"

>


{/* Glow */}

<div
className="
absolute
left-0
top-0
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
bottom-0
h-[400px]
w-[400px]
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
px-6
py-20
"

>



<div

className="
grid
gap-12
md:grid-cols-2
lg:grid-cols-4
"

>




{/* Brand */}

<motion.div

initial={{
opacity:0,
y:40,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

>

<h2

className="
text-3xl
font-bold
text-white
"

>


Alpha
<span
className="
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
"
>
 Tech Plus
</span>

</h2>



<p

className="
mt-5
leading-8
text-zinc-400
"

>

Building premium digital solutions through
modern web development, SEO and marketing strategies.

</p>



<div

className="
mt-6
flex
gap-3
"

>

{
socialLinks.map((item)=>(
<a

key={item.name}

href={item.link}

className="
flex
h-10
w-10
items-center
justify-center
rounded-xl
border
border-white/10
bg-white/5
text-sm
text-zinc-300
transition
hover:border-cyan-400
hover:text-cyan-400
"

>

{item.name[0]}

</a>
))
}


</div>


</motion.div>







{/* Services */}


<div>

<h3
className="
text-lg
font-semibold
text-white
"
>

Services

</h3>


<ul

className="
mt-6
space-y-4
"

>

{
footerLinks.services.map((item)=>(

<li

key={item}

className="
text-zinc-400
transition
hover:text-cyan-400
"

>

{item}

</li>

))
}

</ul>


</div>







{/* Company */}


<div>

<h3
className="
text-lg
font-semibold
text-white
"
>

Company

</h3>


<ul

className="
mt-6
space-y-4
"

>

{
footerLinks.company.map((item)=>(

<li

key={item}

className="
text-zinc-400
transition
hover:text-cyan-400
"

>

{item}

</li>

))
}

</ul>


</div>







{/* Newsletter */}


<motion.div

initial={{
opacity:0,
y:40,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

>

<h3
className="
text-lg
font-semibold
text-white
"
>

Stay Updated

</h3>



<p
className="
mt-5
text-zinc-400
"
>

Subscribe for latest digital insights.

</p>



<div

className="
mt-6
flex
items-center
rounded-xl
border
border-white/10
bg-white/5
p-2
"

>

<input

type="email"

placeholder="Email address"

className="
w-full
bg-transparent
px-4
text-white
outline-none
placeholder:text-zinc-500
"

/>


<button

className="
flex
h-10
w-10
items-center
justify-center
rounded-lg
bg-gradient-to-r
from-cyan-400
to-purple-500
text-white
"

>

<Send size={18}/>

</button>


</div>


</motion.div>




</div>





{/* Bottom */}


<div

className="
mt-16
flex
flex-col
gap-4
border-t
border-white/10
pt-8
text-sm
text-zinc-500
md:flex-row
md:items-center
md:justify-between
"

>


<p>

© 2026 Alpha Tech Plus. All rights reserved.

</p>



<div
className="
flex
gap-5
"

>

<span>
Privacy Policy
</span>

<span>
Terms
</span>

</div>



</div>




</div>


</footer>

);

}