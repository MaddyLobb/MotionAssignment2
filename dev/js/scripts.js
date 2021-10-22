import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, DrawSVGPlugin);




// gsap.set("#path",{transformOrigin: "50% 50%", xPercent: -50, yPercent: -50});
// const duration = 0.75;

let mainTL = gsap.timeline();


// name of the timeline | do you want to start at the end or the beginning of the timeline?  | What do you want to animate? | { how long is the animation? | what do you want to do?}

//Preloader Animation --------------------------------------------------------------------------------------
// mainTL.to("#sf2", {duration: 2, drawSVG:"0%"});

function sfdrawOne(){

    const tl = gsap.timeline();
    tl.from ("#sf2", {duration: 2,drawSVG:"0%"});
    return tl;
}

function sfdraw2(){

    const tl = gsap.timeline ();
    tl.to ("#sf2", {duration: 2,drawSVG:"0%"});
    return tl;
}

// function mixdraw(){

//     const tl = gsap.timeline ();
//     tl.to ("#mix2", {duration: 2,drawSVG:"0%"});
//     return tl;
// }
// function ovdraw(){

//     const tl = gsap.timeline ();
//     tl.to ("#ov2", {duration: 2,drawSVG:"0%"});
//     return tl;
// }
// function cakdraw(){

//     const tl = gsap.timeline ();
//     tl.to ("#cak2", {duration: 2,drawSVG:"0%"});
//     return tl;
// }

mainTL.add(sfdrawOne())
        .add(sfdraw2())
        // .add(mixdraw())
        // .add(ovdraw())
        // .add(cakdraw());




//Hero Animation -------------------------------------------------------------------------------------------
// pathOne or circle starts at begining of timeline and will draw out fully then disapear
// mainTL.to("#pathOne",{duration: 2, drawSVG:"0%"});


// hero text will starts at end of the timeline and will fade onto screen -1 second before the end of the previous animation of a circle and last 2 seconds
// mainTL.from("#text",{duration:3, alpha: 0},">-1");

// header or navbar text starts at end of the timeline and will fade onto screen -2 seconds before the end of the previous animation of hero text and will last .5 seconds 
// mainTL.from("#header", {duration: .5, alpha: 0},">-2");



GSDevTools.create();