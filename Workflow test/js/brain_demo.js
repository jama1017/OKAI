select = function(s) {
  return document.querySelector(s);
};

selectAll = function(s) {
  return document.querySelectorAll(s);
};

let svg = select('svg');

let nerveGroup = select('#nerveGroup');

//nerve system graphics
let cenMaskShape = select('#cenMaskShape');
let topMaskShape = select('#topMaskShape');
let botMaskShape = select('#botMaskShape');
let outMaskShape = select('#outMaskShape');

let cenCore = select('#cenCore');
let topCore = select('#topCore');
let botCore = select('#botCore');
let outCore = select('#outCore');

//brain graphics
let brain = select('#brain');
let face = select('#face');

//brain timeline
let brainTL = new TimelineMax();

brainTL.from(face, 0.5, {scale: 0,
                       // ease: Bounce.easeOut,
                       transformOrigin: '50%, 50%'})
       .from(brain, 0.5, {opacity: 0, y: +100})

//brain to nerve transition
let transitionTL = new TimelineMax();

transitionTL.to(brain, 1, {scale: 2.5,
                           opacity: 0,
                           y: +50,
                           transformOrigin: '50%, 50%'}, "brainZoom")
            .to(face, 1, {opacity: 0, y: +100}, "brainZoom")
            .fromTo(nerveGroup, 1, {scale: 0,
                                    transformOrigin: '50%, 50%'},
                                    {scale: 1}, "brainZoom")

//nerve system timeline
let nerveTL = new TimelineMax();

nerveTL.set([cenMaskShape, topMaskShape, botMaskShape, outMaskShape],
            {transformOrigin: '50% 50%'});

nerveTL.fromTo(topCore, 0.5, {y:-2}, {y:0,
                  ease:RoughEase.ease.config({
                    strength:6,
                    points:6,
                    template:Linear.easeNone,
                    randomize:false
                  }) , clearProps:"y"})
       .to(topMaskShape, 1, {scale: 13}, "-=0.3")

       .fromTo(botCore, 0.5, {y:-2}, {y:0,
                         ease:RoughEase.ease.config({
                           strength:6,
                           points:6,
                           template:Linear.easeNone,
                           randomize:false,
                         }) , clearProps:"y"}, "-=0.5")
       .to(botMaskShape, 1, {scale: 12}, "-=0.3")

       .fromTo(cenCore, 0.5, {y:-2}, {y:0,
                         ease:RoughEase.ease.config({
                           strength:7,
                           points:6,
                           template:Linear.easeNone,
                           randomize:false
                         }) , clearProps:"y"}, "-=0.5")
       .to(cenMaskShape, 1, {scale: 10}, "-=0.3")

       .fromTo(outCore, 0.5, {y:-2}, {y:0,
                         ease:RoughEase.ease.config({
                           strength:5,
                           points:6,
                           template:Linear.easeNone,
                           randomize:false
                         }) , clearProps:"y"}, "-=0.5")
       .to(outMaskShape, 1, {scale: 17}, "-=0.3")

let nerveMasterTL = new TimelineMax({repeat: -1});

nerveMasterTL.add(brainTL)
             .add(transitionTL)
             .add(nerveTL);

GSDevTools.create();
