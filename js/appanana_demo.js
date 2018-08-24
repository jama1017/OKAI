select = function(s) {
  return document.querySelector(s);
};

selectAll = function(s) {
  return document.querySelectorAll(s);
};

let apple = select('#apple');
let banana = select('#banana');

let topLine = select('#topLine');
let botLine = select('#botLine');

let red = select('#red');
let yellow = select('#yellow');

let topAnd = select('#topAnd');
let botAnd = select('#botAnd');

let sphere = select('#sphere');
let cylinder = select('#cylinder');

let fruitsTL = new TimelineMax();
fruitsTL.staggerFrom([apple, banana], 1, {opacity: 0}, 0.5);

let appleAppearTL = new TimelineMax();
appleAppearTL.from([topLine, topAnd], 0.5, {opacity: 0})
             .staggerFrom([red, sphere], 1, {opacity: 0}, 0.3);

let bananaAppearTL = new TimelineMax();
bananaAppearTL.from([botLine, botAnd], 0.5, {opacity: 0})
              .staggerFrom([yellow, cylinder], 1, {opacity: 0}, 0.3);


let breakdownMasterTL = new TimelineMax({repeat: -1});
breakdownMasterTL.add(fruitsTL)
                 .add(appleAppearTL)
                 .add(bananaAppearTL);
