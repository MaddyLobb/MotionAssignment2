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
      .from("#jars",{duration:.5, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .to("#jars" ,{duration: .25, stroke: "#E9E5D8", scaleX: 1.1, scaleY: 1.1, transformOrigin: "50% 50%", ease: "expo.in"})
      .to("#jars" ,{duration: .25, stroke: "#E9E5D8", scaleX: 1, scaleY: 1, transformOrigin: "50% 50%", ease: "expo.in"})
      .fromTo("#jars", {drawSVG:"0% 100%"},{duration: .5, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"});

    return tl;
}



function mixer(){

    const tl = gsap.timeline ();

    tl.from("#mixer",{duration:0.001, alpha:0})
      .from("#mixer",{duration: .5, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .to("#blade1", {duration: .25, motionPath: {path:"#path1", align: "#path1"},repeat:1}, "same")
      .to("#blade2", {duration: .25, motionPath: {path:"#path2", align: "#path2"},repeat:1},"same")
      .to("#blade1", {duration: .25, alpha:0})
      .to("#blade2", {duration: .25, alpha:0})
      .fromTo("#mixer", {drawSVG:"0% 100%"},{duration: .5, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"});

    return tl;
}


function oven(){

    const tl = gsap.timeline ();

    tl.from("#oven",{duration:0.001, alpha:0})
      .from("#oven",{duration: .5, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .from("#knob1",{duration: .005, alpha:0}, 0.13)
      .from("#knob2",{duration: .005, alpha:0}, 0.135)
      .from("#knob3",{duration: .005, alpha:0, rotate: 0}, 0.139)
      .from("#knob4",{duration: .005, alpha:0}, 0.145)
      .from("#knob5",{duration: .005, alpha:0}, 0.149)
      .from("#knob3", {duration: .25, rotate: 10, transformOrigin: "0% 0"})
      .to("#oven", { duration: .25, stroke: "#FF522D", strokeWidth: 5})
      .to("#oven", { duration: .25, stroke: "#000", strokeWidth: 3})
      .fromTo("#oven", {drawSVG:"0% 100%"},{duration: .5, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"})
      .to("#knob1",{duration: .005, alpha:0}, 1.375)
      .to("#knob2",{duration: .005, alpha:0}, 1.38)
      .to("#knob3",{duration: .005, alpha:0, rotate: 0}, 1.383)
      .to("#knob4",{duration: .005, alpha:0}, 1.389)
      .to("#knob5",{duration: .005, alpha:0}, 1.394);

    return tl;
}


function cake(){

    const tl = gsap.timeline ();

    tl.from("#cake",{duration:0.001, alpha:0})
      .from("#cake",{duration:.5, drawSVG: "0%", ease: "slow (0.7, 0.7, false"})
      .from("#candle", {duration: .25, alpha: 0})
      .fromTo("#cake", {drawSVG:"0% 100%"},{duration: .5, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false"})
      .to("#candle", { duration: .25, alpha: 0, ease: "expo.out"}, "<-= 70%");

    return tl;
}



mainTL.add(jars())
      .add(mixer())
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