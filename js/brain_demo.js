select = function(s) {
  return document.querySelector(s);
};

selectAll = function(s) {
  return document.querySelectorAll(s);
};

let svg = select("svg");

let newMaskShape = select('#newMaskShape');

let cenNeuronGroup = select('#cenNeuronGroup');
let cenBody = select('#cenBody');
let coreSurr = select('.coreSurr');
let core = select('.core');



let testTL = new TimelineMax({repeat: -1});


testTL.to(newMaskShape, 1, {scale: 10, transformOrigin: '50% 50%'});
// testTL.to(secondaryMask, 1, {scale: 2});

GSDevTools.create();
