import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";


gsap.registerPlugin(GSDevTools, DrawSVGPlugin);




// gsap.set("#path",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});
// const duration = 0.75;

let mainTL = gsap.timeline();


// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}

//Preloader Animation --------------------------------------------------------------------------------------

function jars(){
    // console.log("hello");
    const tl = gsap.timeline();

    tl.fromTo("#jars", {drawSVG:"0% 0%"},{duration: 2, drawSVG:"0% 100%", ease: "none"})
    .to("#jars", { duration: 1, stroke: "#E9E5D8", ease: "expo.in"})
    .fromTo("#jars", {drawSVG:"100% 100%"},{duration: 2, drawSVG:"0% 100%"})
    .to("#jars", { duration: 1, alpha: 0, ease: "expo.out"});

    return tl;
}



function mixer(){

    const tl = gsap.timeline ();
    tl.fromTo("#mixer", {drawSVG:"0% 0%"},{duration: 2, drawSVG:"0% 100%"})
    .fromTo("#mixer", {drawSVG:"100% 100%"},{duration: 2, drawSVG:"0% 100%"})
    .to("#mixer", { duration: 1, alpha: 0, ease: "expo.out"});

    return tl;
}


function oven(){

    const tl = gsap.timeline ();

    tl.fromTo("#oven", {drawSVG:"0% 0%"},{duration: 2, drawSVG:"0% 100%"})
    .to("#oven", { duration: 1, stroke: "#FF522D", strokeWidth: 5})
    .to("#oven", { duration: 2, stroke: "#000", strokeWidth: 3})
    .fromTo("#oven", {drawSVG:"100% 100%"},{duration: 2, drawSVG:"0% 100%"})
    .to("#oven", { duration: 1, alpha: 0, ease: "expo.out"});

    return tl;
}


function cake(){

    const tl = gsap.timeline ();

    tl.fromTo("#cake", {drawSVG:"0% 0%"},{duration: 2, drawSVG:"0% 100%"})
    .fromTo("#cake", {drawSVG:"100% 100%"},{duration: 2, drawSVG:"0% 100%"})
    .to("#cake", { duration: 1, alpha: 0, ease: "expo.out"});


    return tl;
}


function candle(){

    const tl = gsap.timeline ();

    tl.from("#candle", {duration: 2, alpha:100})
    .to("#candle", { duration: 1, alpha: 0, ease: "expo.out"});


    return tl;
}




mainTL.add(jars())
        .add(mixer(), "-=1")
        .add(oven(), "-=1")
        .add(cake(), "-=1")
        .add(candle(), "-=1");




//Hero Animation -------------------------------------------------------------------------------------------
// pathOne or circle starts at begining of timeline and will draw out fully then disapear
// mainTL.to("#pathOne",{duration: 2, drawSVG:"0%"});


// hero text will starts at end of the timeline and will fade onto screen -1 second before the end of the previous animation of a circle and last 2 seconds
// mainTL.from("#text",{duration:3, alpha: 0},">-1");

// header or navbar text starts at end of the timeline and will fade onto screen -2 seconds before the end of the previous animation of hero text and will last .5 seconds 
// mainTL.from("#header", {duration: .5, alpha: 0},">-2");



GSDevTools.create();