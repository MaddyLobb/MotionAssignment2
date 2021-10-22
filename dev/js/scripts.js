import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);



// gsap.set("#path",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});
// const duration = 0.75;

const mainTL = gsap.timeline();


// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}

// pathOne or circle starts at begining of timeline and will draw out fully then disapear
mainTL.to("#pathOne",{duration: 2, drawSVG:"0%"});


// hero text will starts at end of the timeline and will fade onto screen -1 second before the end of the previous animation of a circle and last 2 seconds
mainTL.from("#text",{duration:3, alpha: 0},">-1");

// header or navbar text starts at end of the timeline and will fade onto screen -2 seconds before the end of the previous animation of hero text and will last .5 seconds 
mainTL.from("#header", {duration: .5, alpha: 0},">-2");