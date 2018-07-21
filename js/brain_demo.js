select = function(s) {
  return document.querySelector(s);
};

selectAll = function(s) {
  return document.querySelectorAll(s);
};

let svg = select("svg");

let cenMaskShape = select('#cenMaskShape');
let topMaskShape = select('#topMaskShape');
let botMaskShape = select('#botMaskShape');
let outMaskShape = select('#outMaskShape');

let cenCore = select('cenCore');
let topCore = select('topCore');
let botCore = select('botCore');
let outCore = select('outCore');

let nerveTL = new TimelineMax({repeat: -1});


nerveTL.set([cenMaskShape, topMaskShape, botMaskShape, outMaskShape], {transformOrigin: '50% 50%'});

nerveTL.to(topMaskShape, 1, {scale: 13})
       .to(botMaskShape, 1, {scale: 12}, "-=0.5")
       .to(cenMaskShape, 1, {scale: 10}, "-=0.5")
       .to(outMaskShape, 1, {scale: 17}, "-=0.5")

GSDevTools.create();
