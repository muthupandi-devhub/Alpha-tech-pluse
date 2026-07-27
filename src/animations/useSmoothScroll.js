import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



export default function useSmoothScroll(){


useEffect(()=>{


const lenis = new Lenis({

duration:1.2,

smoothWheel:true,

});


lenis.on(
"scroll",
ScrollTrigger.update
);



const raf = (time)=>{

lenis.raf(time);

requestAnimationFrame(raf);

};


requestAnimationFrame(raf);



ScrollTrigger.scrollerProxy(
document.body,
{

scrollTop(value){

return arguments.length
?
lenis.scrollTo(value)
:
window.scrollY;

},


getBoundingClientRect(){

return {

top:0,

left:0,

width:window.innerWidth,

height:window.innerHeight,

};

}


}

);



ScrollTrigger.refresh();



return ()=>{

lenis.destroy();

};


},[]);


}