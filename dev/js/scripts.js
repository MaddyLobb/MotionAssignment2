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
      .from("#jars",{duration:.75, drawSVG: "0%", ease: "none"})
      .from("#lid1" ,{duration: .05, alpha: 0, rotate: 0}, 0.3)
      .from("#lid2" ,{duration: .05, alpha:0, rotate: 0}, 0.49)
      .from(".lids", {duration: .5, rotate: -20, transformOrigin: "0% 0"})
      .fromTo("#jars", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false)"})
      .to("#lid1" ,{duration: .05, alpha: 0}, 1.42)
      .to("#lid2" ,{duration: .05, alpha:0}, 1.55);

    return tl;
}



function mixer(){

    const tl = gsap.timeline ();

    tl.from("#mixer",{duration:0.001, alpha:0})
      .from("#mixer",{duration: .75, drawSVG: "0%", ease: "none"})
      .from("#blade1", {duration: .125, alpha:0}, 0.335)
      .from("#blade2", {duration: .125, alpha:0}, 0.322)
      .to("#blade1", {duration: .25, motionPath: {path:"#path1", align: "#path1"},repeat:1},"same")
      .from("#blade2", {duration: .25, motionPath: {path:"#path2", align: "#path2"},repeat:1},"same")
      .fromTo("#mixer", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false)"})
      .to("#blade1", {duration: .125, alpha:0}, 1.43)
      .to("#blade2", {duration: .125, alpha:0}, 1.42);

    return tl;
}


function oven(){

    const tl = gsap.timeline ();

    tl.from("#oven",{duration:0.001, alpha:0})
      .from("#oven",{duration: .75, drawSVG: "0%", ease: "none"})
      .from("#knob1",{duration: .005, alpha:0}, 0.34)
      .from("#knob2",{duration: .005, alpha:0}, 0.35)
      .from("#knob3",{duration: .005, alpha:0, rotate: 0}, 0.36)
      .from("#knob4",{duration: .005, alpha:0}, 0.37)
      .from("#knob5",{duration: .005, alpha:0}, 0.38)
      .from("#knob3", {duration: .25, rotate: -10, transformOrigin: "0% 0"})
      .to("#oven", { duration: .5, stroke: "#FF522D", strokeWidth: 5})
      .to("#oven", { duration: .25, stroke: "#000", strokeWidth: 3})
      .fromTo("#oven", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false)"})
      .to("#knob1",{duration: .005, alpha:0}, 1.94)
      .to("#knob2",{duration: .005, alpha:0}, 1.95)
      .to("#knob3",{duration: .005, alpha:0, rotate: 0}, 1.96)
      .to("#knob4",{duration: .005, alpha:0}, 1.97)
      .to("#knob5",{duration: .005, alpha:0}, 1.98);

    return tl;
}


function cake(){

    const tl = gsap.timeline ();

    tl.from("#cake",{duration:0.001, alpha:0})
      .from("#cake",{duration:.75, drawSVG: "0%", ease: "none"})
      .from("#candle", {duration: .5, alpha: 0})
      .fromTo("#cake", {drawSVG:"0% 100%"},{duration: .75, drawSVG:"100% 100%", ease: "slow (0.7, 0.7, false)"})
      .to("#candle", { duration: .25, alpha: 0, ease: "expo.out"}, "<-= 70%")
      .to("#preloader", { duration: .25, alpha: 0, onComplete: removepreloader});

    return tl;
}

function removepreloader(){

  window.scrollTo(0,0);

  gsap.set("#preloader", {display: "none"});

}

function heroanimation(){

    const tl = gsap.timeline ();

    tl.from("#pathOne",{duration:2, drawSVG: "0%"})
      .to("#pathOne",{duration: 0.05, alpha: 0})
      .from("#text",{duration:3, alpha: 0},">-.5")
      .from("#header", {duration: .5, alpha: 0},">-2");

    return tl;

}


mainTL.add(jars())
      .add(mixer(), "-=.5")
      .add(oven(), "-=.5")
      .add(cake(), "-=.5")
      .add(heroanimation)();


GSDevTools.create();