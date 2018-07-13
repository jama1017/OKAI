select = function(s) {
  return document.querySelector(s);
};

selectAll = function(s) {
  return document.querySelectorAll(s);
};

let everything = select('#neuronSys'); //is the SVG

//is the group that contains all the graphics
//and the filter
let neuronGroup = select('#neuronGroup');

//graphics
let topSignal = select('#topSignal');
let botSignal = select('#botSignal');

let cenSig = select('#cenSig');
let inTransit1 = select('#inTransit1');
let inTransit2 = select('#inTransit2');
let cenSig3 = select('#cenSig3');

let axon = select('.axon');
let outTransit = axon.cloneNode();
neuronGroup.appendChild(outTransit);

let num1 = select('#num1');
let num2 = select('#num2');
let num3 = select('#num3');
let numBig3 = select('#numBig3');
let num4 = select('#num4');

let topSigInTL = new TimelineMax();

topSigInTL.set(topSignal, {transformOrigin: '110%, 110%'})
     .set(num1, {transformOrigin: '360%, 140%'})
     .set(num2, {transformOrigin: '-110%, -20%'})
     .set(inTransit1, {strokeWidth: '40px'})
     .add("enterCenSig1", 0.8);

topSigInTL.to(topSignal, 0.7, {scale: 0}, "topSignal")
     .to(num1, 0.5, {scale: 0}, "topSignal")
     .fromTo(inTransit1, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "topSignal")

     .fromTo(cenSig, 1, {scale: 0}, {scale: 1}, "enterCenSig1")
     .fromTo(num2, 1, {scale: 0}, {scale: 1}, "enterCenSig1");

let botSigInTL = new TimelineMax();

botSigInTL.set(botSignal, {transformOrigin: '110%, 0%'})
    .set(num3, {transformOrigin: '240%, -40%'})
    .set(num4, {transformOrigin: '-110%, 140%'})
    .set(cenSig3, {transformOrigin: '0%, 100%'})
    .add("enterCenSig3", 0.8);

botSigInTL.to(botSignal, 1, {scale: 0}, "botSignal")
     .to(num3, 0.7, {scale: 0}, "botSignal")
     .fromTo(inTransit2, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "botSignal")

     .fromTo(cenSig3, 1, {scale: 0}, {scale: 1}, "enterCenSig3")
     //.fromTo(num4, 1, {scale: 0}, {scale: 1}, "enterCenSig3")

let counting = new TimelineMax();

counting.to(num2, 0.5, {morphSVG: numBig3})
        .set(num2, {visibility: "hidden"})
        .set(numBig3, {visibility: "visible"})
        .to(numBig3, 0.5, {morphSVG: num4})

// let SigCenTL = new TimelineMax();

//
// SigCenTL.staggerFromTo([cenSig, cenSig3], 2, {scale: 0}, {scale: 1}, 0.5, "-=2")


// tl.set(outSig, {transformOrigin: '0%, 50%'});
//
// tl.set(outTransit, {strokeWidth: "25px"});
//
//
// tl.staggerTo([topSignal, botSignal], 1, {scale: 0}, 0.5)
//   .staggerFromTo(transit, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, 0.5, "-=1.95")
//   .staggerFromTo([cenSig, cenSig3], 2.5, {scale: 0}, {scale: 1}, 0.5, "-=2")
//   .set([cenSig, cenSig3], {transformOrigin: '110% 50%'}, "-=1")
//   .to([cenSig, cenSig3], 2.5, {scale: 0, overwrite:"none"}, "-=1")
//   .fromTo(outTransit, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "-=2.5")
//   .fromTo(outSig, 1, {scale: 0}, {scale: 1}, "-=1.5");
//
// tl.pause();

let masterTL = new TimelineMax({repeat: -1});

masterTL.add(topSigInTL)
        .add(botSigInTL)
        .add(counting, "-=1");

GSDevTools.create();
