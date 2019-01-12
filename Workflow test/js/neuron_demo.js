select = function(s) {
  return document.querySelector(s);
};

selectAll = function(s) {
  return document.querySelectorAll(s);
};

let neuronGroup = select('#neuronGroup');

let neuron = select('#neuron');

let input1 = select('#input1');
let input2 = select('#input2');

let output = select('#output');

let topSignal = select('#topSignal');
let botSignal = select('#botSignal');

let inTransit1 = select('#inTransit1');
let inTransit2 = select('#inTransit2');

let cenSig = select('#cenSig');
let cenSig3 = select('#cenSig3');

let axon = select('.axon');
let outTransit = axon.cloneNode();
neuronGroup.appendChild(outTransit);

let num1 = select('#num1');
let num2 = select('#num2');
let num3 = select('#num3');
let numBig3 = select('#numBig3');
let num4 = select('#num4');
let numOut5 = select('#numOut5');
let numBig5 = select('#numBig5');

//appearance timeline
let appearanceTL = new TimelineMax();

// appearanceTL.set([output], {opacity: 0});

appearanceTL.from(neuron, 1, {scale: 0,
                              transformOrigin: '50%, 50%',
                              ease: Elastic.easeOut})
            .from(output, 1, {scale: 0,
                              transformOrigin: '50%, 50%',
                              ease: Elastic.easeOut}, "outputShow")
            .fromTo(axon, 1, {drawSVG: '100%, 100%'}, {drawSVG: '0%, 100%'}, "outputShow")
            .from([input1, input2], 1, {scale: 0,
                                        transformOrigin: '50%, 50%',
                                        ease: Elastic.easeOut})
            .staggerFrom([dendrites1, dendrites2], 1, {drawSVG: '0%, 0%'}, 1)
            .from([topSignal, botSignal], 1, {scale: 0,
                                              transformOrigin: '50%, 50%',
                                              ease: Elastic.easeOut})


//top signal comming into the center neuron
let topSigInTL = new TimelineMax();

topSigInTL.set(inTransit1, {strokeWidth: '40px'})
          .add("enterCenSig1", 0.8);

topSigInTL.to(topSignal, 0.7, {scale: 0, transformOrigin: '110%, 110%'}, "topSignal")
     .to(num1, 0.5, {scale: 0, opacity: 0, transformOrigin: '360%, 140%'}, "topSignal")
     .fromTo(inTransit1, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "topSignal")

     .fromTo(cenSig, 1, {scale: 0}, {scale: 1}, "enterCenSig1")
     .fromTo(num2, 1, {scale: 0, opacity: 0, transformOrigin: '-110%, -20%'}, {scale: 1,  opacity: 1}, "enterCenSig1");

let botSigInTL = new TimelineMax();

botSigInTL.add("enterCenSig3", 0.8);

botSigInTL.to(botSignal, 1, {scale: 0, transformOrigin: '110%, 0%'}, "botSignal")
     .to(num3, 0.7, {scale: 0,  opacity: 0, transformOrigin: '240%, -40%'}, "botSignal")
     .fromTo(inTransit2, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "botSignal")

     .fromTo(cenSig3, 1, {scale: 0, transformOrigin: '0%, 100%'}, {scale: 1}, "enterCenSig3")
     //.fromTo(num4, 1, {scale: 0}, {scale: 1}, "enterCenSig3")

let counting = new TimelineMax();

counting.to(num2, 0.5, {morphSVG: numBig3})
        .set(num2, {visibility: "hidden"})
        .set(numBig3, {visibility: "visible"})
        .to(numBig3, 0.5, {morphSVG: num4})

let biasTL = new TimelineMax();

biasTL.fromTo([neuron, cenSig, cenSig3, numBig3], 1, {y:-3}, {y:3,
                  ease:RoughEase.ease.config({
                    strength:6,
                    points:12,
                    template:Linear.easeNone,
                    randomize:false
                  }) , clearProps:"y"}, "biasShake")
      .to(numBig3, 0.4, {morphSVG: numBig5}, "biasShake+=0.3");

let SigOutTL = new TimelineMax();

SigOutTL.set(outTransit, {strokeWidth: "24px"})

SigOutTL.to([cenSig, cenSig3], 2, {
              scale: 0,
              transformOrigin: '110%, 50%',
              smoothOrigin:true}, "SigOut")

  .to(numBig3, 1.5, {opacity: 0, scale: 0, transformOrigin: '200%, 50%'}, "SigOut")
  .fromTo(outTransit, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "SigOut")
  .fromTo(outSig, 1, {scale: 0, transformOrigin: '0%, 50%'}, {scale: 1}, "SigOut+=1")
  .from(numOut5, 1, {scale: 0, opacity: 0, transformOrigin: '-120%, 50%'}, "SigOut+=1");


let masterTL = new TimelineMax({repeat: -1});

//offsetting num2 up to fix the miscenter error
masterTL.set(num2, {y: -3});

masterTL.add(appearanceTL)
        .add(topSigInTL)
        .add(botSigInTL)
        .add(counting, "-=1")
        .add(biasTL, "+=0.5")
        .add(SigOutTL, "+=0.5");

GSDevTools.create();
