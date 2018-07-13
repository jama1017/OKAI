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

let topSignal = select('#topSignal');
let midSignal = select('#midSignal');
let botSignal = select('#botSignal');

let cenSig = select('#cenSig');

let transit = selectAll('#transit line');

let cenSig2 = select('#cenSig2');
let cenSig3 = select('#cenSig3');

let axon = select('.axon');
let outTransit = axon.cloneNode();
neuronGroup.appendChild(outTransit);

let tl = new TimelineMax({repeat:-1});

tl.set(topSignal, {transformOrigin: '110%, 110%'});
tl.set(midSignal, {transformOrigin: '110%, 50%'});
tl.set(botSignal, {transformOrigin: '110%, 0%'});

tl.set(cenSig2, {transformOrigin: '0%, 50%'});
tl.set(cenSig3, {transformOrigin: '0%, 100%'});

// tl.set([cenSig, cenSig2, cenSig3], {scale: 0});

tl.set(outTransit, {strokeWidth: "25px"});

tl.staggerTo([topSignal, midSignal, botSignal], 1, {scale: 0}, 0.5)
  .staggerFromTo(transit, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, 0.5, "-=1.95")
  .staggerFromTo([cenSig, cenSig2, cenSig3], 2.5, {scale: 0}, {scale: 1}, 0.5, "-=2")
  .set([cenSig, cenSig2, cenSig3], {transformOrigin: '110% 50%'}, "-=1")
  .to([cenSig, cenSig2, cenSig3], 2.5, {scale: 0}, "-=1")
  .fromTo(outTransit, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "-=2.5");

// tl.pause();
GSDevTools.create();
