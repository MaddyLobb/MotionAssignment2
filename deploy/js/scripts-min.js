import{gsap}from"gsap";import{GSDevTools}from"gsap/GSDevTools";gsap.registerPlugin(GSDevTools);import{DrawSVGPlugin}from"gsap/DrawSVGPlugin";gsap.registerPlugin(DrawSVGPlugin);const mainTL=gsap.timeline();function sfdraw(){const a=gsap.timeline;return a.to("#sf2",{duration:2,drawSVG:"0%"}),a}function mixdraw(){const a=gsap.timeline;return a.to("#mix2",{duration:2,drawSVG:"0%"}),a}mainTL.to("#sf2",{duration:2,drawSVG:"0%"}),mainTL.add(sfdraw()).add(mixdraw()),mainTL.to("#pathOne",{duration:2,drawSVG:"0%"}),mainTL.from("#text",{duration:3,alpha:0},">-1"),mainTL.from("#header",{duration:.5,alpha:0},">-2");