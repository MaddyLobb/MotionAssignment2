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

function jars(){
    console.log("hello");
    const tl = gsap.timeline();

    // tl.from ("#jars", {duration: 3, stroke: "#000", drawSVG:"0%"})
    // .to("#jars", {duration: 3,drawSVG:"0%",});

    tl.fromTo("#jars", {drawSVG:"0% 0%"},{duration: 3, drawSVG:"0% 100%"})
    .fromTo("#jars", {drawSVG:"100% 100%"},{duration: 3, drawSVG:"100% 0%"});
    // toString.
    //tl.from ("#jars", {duration: 3, stroke: "#000", drawSVG:"0%"})
    // tl.from ("#sf2", {duration: 3, stroke: "#000", drawSVG:"0%"})
    //         .to ("#sf2", {duration: 3, stroke: "#E9E5D8", drawSVG:"0%"});
    return tl;
}



// function mixer(){

//     const tl = gsap.timeline ();
//     tl.from ("#mix2", {duration: 3,drawSVG:"0%"})
//             .to ("#mix2", {duration: 3,drawSVG:"0%"});
//     return tl;
// }


// function oven(){

//     const tl = gsap.timeline ();
//     tl.from ("#ov2", {duration: 3,stroke:"#000",drawSVG:"0%"})
//             .from ("#ov2", {duration: 2,stroke:"#FF522D"})
//             .to ("#ov2", {duration: 3, drawSVG:"0%"});
//     return tl;
// }


// function cake(){

//     const tl = gsap.timeline ();
//     tl.from ("#cak2", {duration: 3,drawSVG:"0%"})
//         .to ("#cak2", {duration: 3,drawSVG:"0%"});
//     return tl;
// }


mainTL.add(jars());

        // .add(mixer())
        // .add(oven())
        // .add(cake());




//Hero Animation -------------------------------------------------------------------------------------------
// pathOne or circle starts at begining of timeline and will draw out fully then disapear
// mainTL.to("#pathOne",{duration: 2, drawSVG:"0%"});


// hero text will starts at end of the timeline and will fade onto screen -1 second before the end of the previous animation of a circle and last 2 seconds
// mainTL.from("#text",{duration:3, alpha: 0},">-1");

// header or navbar text starts at end of the timeline and will fade onto screen -2 seconds before the end of the previous animation of hero text and will last .5 seconds 
// mainTL.from("#header", {duration: .5, alpha: 0},">-2");



GSDevTools.create();