import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

//console.clear();
gsap.registerPlugin(GSDevTools, DrawSVGPlugin, MotionPathPlugin);


let mainTL = gsap.timeline();


// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}

//Preloader Animation --------------------------------------------------------------------------------------

function jars(){

    const tl = gsap.timeline();

    tl.from("#jars",{duration:0.001, alpha:0})
      .from("#jars",{duration:.75, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .to("#jars" ,{duration: .75, stroke: "#E9E5D8", ease: "expo.in"})
      .fromTo("#jars", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"});

    return tl;
}



function mixer(){

    const tl = gsap.timeline ();

    tl.from("#mixer",{duration:0.001, alpha:0})
      .from("#mixer",{duration: .75, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .to("#blade1", {duration: .25, motionPath: {path:"#path1", align: "#path1"},repeat:1})
      .to("#blade2", {duration: .25, motionPath: {path:"#path2", align: "#path2"},repeat:1})
      .to("#blade1", {duration: .25, alpha:0})
      .to("#blade2", {duration: .25, alpha:0})
      .fromTo("#mixer", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"});

    return tl;
}


// function blades(){

//     const tl = gsap.timeline ();

//     tl.from("#blade1", {duration: 2, alpha:0})
//       .from("#blade2", {duration: 2, alpha:0})
//       .from("#blade1", {duration: 2, y: -20})
//       .from("#blade2", {duration: 2, x: -20})
//       .to("#blade1", { duration: 1, alpha: 0, ease: "expo.out"})
//       .to("#blade2", { duration: 1, alpha: 0, ease: "expo.out"});

//     return tl;
// }


function oven(){

    const tl = gsap.timeline ();

    tl.from("#oven",{duration:0.001, alpha:0})
      .from("#oven",{duration: .75, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .from("#knob1",{duration: .05, alpha:0},">-= 50%")
      .from("#knob2",{duration: .05, alpha:0},">-=.5")
      .from("#knob3",{duration: .05, alpha:0, rotate: 0},">-=.045")
      .from("#knob4",{duration: .05, alpha:0},">-=.035")
      .from("#knob5",{duration: .05, alpha:0},">-=.0469")
      .from("#knob3", {duration: .5, rotate: -20, transformOrigin: "100% 0"})
      .to("#oven", { duration: .75, stroke: "#FF522D", strokeWidth: 5})
      .to("#oven", { duration: .5, stroke: "#000", strokeWidth: 3})
      .fromTo("#oven", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"})
      .to("#knob1",{duration: .05, alpha:0},">-= 50%")
      .to("#knob2",{duration: .05, alpha:0},">-=.5")
      .to("#knob3",{duration: .05, alpha:0, rotate: 0},">-=.045")
      .to("#knob4",{duration: .05, alpha:0},">-=.035")
      .to("#knob5",{duration: .05, alpha:0},">-=.0469");

    return tl;
}


function cake(){

    const tl = gsap.timeline ();

    tl.from("#cake",{duration:0.001, alpha:0})
      .from("#cake",{duration:.75, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .from("#candle", {duration: .5, alpha: 0})
      .to("#candle", { duration: .5, alpha: 0, ease: "expo.out"})
      .fromTo("#cake", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"});

    return tl;
}


// function candle(){

//     const tl = gsap.timeline ();

//     tl.from("#candle", {duration: 2, alpha: 0})
//       .to("#candle", { duration: 1, alpha: 0, ease: "expo.out"});


//     return tl;
// }




mainTL.add(jars())
      .add(mixer())
      //.add(blades())
      .add(oven())
      .add(cake());





//Hero Animation -------------------------------------------------------------------------------------------
// pathOne or circle starts at begining of timeline and will draw out fully then disapear
// mainTL.to("#pathOne",{duration: 2, drawSVG:"0%"});


// hero text will starts at end of the timeline and will fade onto screen -1 second before the end of the previous animation of a circle and last 2 seconds
// mainTL.from("#text",{duration:3, alpha: 0},">-1");

// header or navbar text starts at end of the timeline and will fade onto screen -2 seconds before the end of the previous animation of hero text and will last .5 seconds 
// mainTL.from("#header", {duration: .5, alpha: 0},">-2");



GSDevTools.create();