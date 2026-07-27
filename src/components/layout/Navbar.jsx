import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "../ui/Button";
import Container from "../ui/Container";


const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Solutions",
    href: "#services",
  },
  {
    name: "Technology",
    href: "#technology",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


export default function Navbar() {


  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);



  useEffect(()=>{


    const handleScroll = ()=>{

      setScrolled(window.scrollY > 40);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);




  return (

<header

className={`
fixed
top-0
left-0
z-50
w-full
transition-all
duration-500

${
scrolled
?
"bg-[#050507]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
:
"bg-transparent"
}

`}

>


<Container>


<div

className="
flex
h-20
items-center
justify-between
"

>


{/* Logo */}


<a

href="#home"

className="
flex
items-center
gap-3
"

>





<div>


<h1

className="
text-xl
font-bold
text-white
"

>

Alpha Tech +

</h1>


<p

className="
text-[10px]
tracking-[0.25em]
text-cyan-400
"

>

DIGITAL INNOVATION

</p>


</div>


</a>







{/* Desktop Menu */}


<nav

className="
hidden
items-center
gap-8
lg:flex
"

>


{
navLinks.map((item)=>(


<a

key={item.name}

href={item.href}

className="
relative
text-sm
font-medium
text-white/70
transition
duration-300
hover:text-cyan-400

after:absolute
after:-bottom-2
after:left-0
after:h-[2px]
after:w-0
after:bg-gradient-to-r
after:from-cyan-400
after:to-purple-500
after:transition-all
after:duration-300

hover:after:w-full

"

>

{item.name}

</a>


))
}


</nav>








{/* CTA Button */}


<div

className="
hidden
lg:block
"

>

<Button>

Get Started

</Button>


</div>








{/* Mobile Button */}


<button

onClick={()=>setMobileOpen(!mobileOpen)}

className="
text-white
lg:hidden
"

>

{

mobileOpen

?

<X size={28}/>

:

<Menu size={28}/>

}


</button>



</div>









{/* Mobile Menu */}


{

mobileOpen && (


<div

className="
pb-6
lg:hidden
"

>


<div

className="
rounded-3xl
border
border-white/10
bg-black/70
p-6
backdrop-blur-xl
"

>


<div

className="
flex
flex-col
gap-5
"

>


{

navLinks.map((item)=>(


<a

key={item.name}

href={item.href}

onClick={()=>setMobileOpen(false)}

className="
text-white/80
transition
hover:text-cyan-400
"

>

{item.name}

</a>


))

}




<Button>

Get Started

</Button>


</div>


</div>


</div>


)


}



</Container>


</header>


  );

}