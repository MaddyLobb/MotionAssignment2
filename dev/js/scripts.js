import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

console.clear();
gsap.registerPlugin(GSDevTools, DrawSVGPlugin);


gsap.set("path", { drawSVG: 0 });

let mainTL = gsap.timeline({repeat: -1});


// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}

//Preloader Animation --------------------------------------------------------------------------------------

function jars(){

    const tl = gsap.timeline();

    tl.to("#jars", { duration: 1, drawSVG: true })
    .to("#jars", { duration: 2, stroke: "#E9E5D8", ease: "expo.in"})
    .to("#jars", {duration: 1, drawSVG: "100% 100%"});


    // Code form your demo
    // tl.from("#jars",{duration:3, drawSVG: "0%"})
    //   .fromTo("#jars", {drawSVG:"0% 100%"},{duration: 1, drawSVG:"100% 100%"});

    return tl;
}





function mixer(){

    const tl = gsap.timeline ();

    tl.to("#mixer", { duration: 1, drawSVG: true })
    .to("#mixer", {duration: 1, drawSVG: "100% 100%"});

    // Code form your demo
    // tl.from("#mixer",{duration:1, drawSVG: "0%"})
    //   .fromTo("#mixer", {drawSVG:"0% 100%"},{duration: 1, drawSVG:"100% 100%"});
    

    return tl;
}


function blades(){

    const tl = gsap.timeline ();

    tl.from("#blade1", {duration: 2, alpha:0})
    .from("#blade2", {duration: 2, alpha:0})
    .to("#blade1", { duration: 1, alpha: 0, ease: "expo.out"})
    .to("#blade2", { duration: 1, alpha: 0, ease: "expo.out"});

    return tl;
}


function oven(){

    const tl = gsap.timeline ();

    tl.to("#oven", { duration: 3, drawSVG: true })
      .from("#knob1",{duration: .05, alpha:0},">-=.743")
      .from("#knob2",{duration: .05, alpha:0},">-=.039")
      .from("#knob3",{duration: .05, alpha:0},">-=.045")
      .from("#knob4",{duration: .05, alpha:0},">-=.035")
      .from("#knob5",{duration: .05, alpha:0},">-=.0469")
      .to("#oven", { duration: 1, stroke: "#FF522D", strokeWidth: 5})
      .to("#oven", { duration: 2, stroke: "#000", strokeWidth: 3})
      .to("#oven", {duration: 1, drawSVG: "100% 100%"});

    // Code form your demo
    //   tl.from("#oven",{duration:1, drawSVG: "0%"})
    //   .fromTo("#oven", {drawSVG:"0% 100%"},{duration: 1, drawSVG:"100% 100%"});

    return tl;
}


function cake(){

    const tl = gsap.timeline ();
      
        tl.to("#cake", { duration: 1, drawSVG: true })
        .to("#cake", {duration: 1, drawSVG: "100% 100%"});

    // Code form your demo
    // tl.from("#cake",{duration:1, drawSVG: "0%"})
    //   .fromTo("#cake", {drawSVG:"0% 100%"},{duration: 1, drawSVG:"100% 100%"});


    return tl;
}


function candle(){

    const tl = gsap.timeline ();

    tl.from("#candle", {duration: 2, alpha: 0})
    .to("#candle", { duration: 1, alpha: 0, ease: "expo.out"});


    return tl;
}




mainTL.add(jars())
      .add(mixer())
      .add(blades())
      .add(oven())
      .add(candle())
      .add(cake());





//Hero Animation -------------------------------------------------------------------------------------------
// pathOne or circle starts at begining of timeline and will draw out fully then disapear
// mainTL.to("#pathOne",{duration: 2, drawSVG:"0%"});


// hero text will starts at end of the timeline and will fade onto screen -1 second before the end of the previous animation of a circle and last 2 seconds
// mainTL.from("#text",{duration:3, alpha: 0},">-1");

// header or navbar text starts at end of the timeline and will fade onto screen -2 seconds before the end of the previous animation of hero text and will last .5 seconds 
// mainTL.from("#header", {duration: .5, alpha: 0},">-2");



GSDevTools.create();