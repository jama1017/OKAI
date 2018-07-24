// ---------------------------------------------------------
// ------------------ functions  --------------------------
// --------------------------------------------------------

let select = function(s) {
    return document.querySelector(s);
};

let selectAll = function(s) {
    return document.querySelectorAll(s);
};

let toggleAnimation = function(animation, bool) {
     if (bool) {
       animation.style.visibility = "visible";
     } else {
       animation.style.visibility = "hidden";
     }
};

// ---------------------------------------------------------
// ------------------ graphic vars--------------------
// --------------------------------------------------------

let svg = select('svg');

let nerveGroup = select('#nerveGroup');

//animations
let brainNerveAnimation = select('#brainNerveAnimation');
let neuronAnimation = select('#neuronAnimation');

//text
let brainText = select('#brainText')
let nerveText = select('#nerveText')
let neuron1Text = select('#neuron1Text')

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

//neuronGraphics
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


// ---------------------------------------------------------
// ------------------ Animation Timelines--------------------
// --------------------------------------------------------

//brain timeline
let brainTL = new TimelineMax();

brainTL.from(face, 0.5, {scale: 0,transformOrigin: '50%, 50%'})
       .from(brain, 0.5, {opacity: 0, y: +100})

//brain to nerve transition
let transitionTL = new TimelineMax();

transitionTL.to(brain, 1, {scale: 2,opacity: 0,y: +50,
                           transformOrigin: '50%, 50%'}, "brainZoom")
            .to(face, 1, {opacity: 0, y: +100}, "brainZoom")
            .fromTo(nerveGroup, 1, {scale: 0,transformOrigin: '50%, 50%'},
                                   {scale: 1}, "brainZoom")

//nerve system timeline
let nerveTL = new TimelineMax();

nerveTL.set([cenMaskShape, topMaskShape, botMaskShape, outMaskShape],
            {transformOrigin: '50% 50%'});

nerveTL.fromTo(topCore, 0.5, {y:-2}, {y:0,
                  ease:RoughEase.ease.config({strength:6,points:6,
                                              template:Linear.easeNone,
                                              randomize:false}) , clearProps:"y"})
       .to(topMaskShape, 1, {scale: 13}, "-=0.3")

       .fromTo(botCore, 0.5, {y:-2}, {y:0,
                         ease:RoughEase.ease.config({strength:6,points:6,
                                                     template:Linear.easeNone,
                                                     randomize:false}) , clearProps:"y"}, "-=0.5")
       .to(botMaskShape, 1, {scale: 12}, "-=0.3")

       .fromTo(cenCore, 0.5, {y:-2}, {y:0,
                         ease:RoughEase.ease.config({strength:7,points:6,
                                                     template:Linear.easeNone,
                                                     randomize:false}) , clearProps:"y"}, "-=0.5")
       .to(cenMaskShape, 1, {scale: 10}, "-=0.3")

       .fromTo(outCore, 0.5, {y:-2}, {y:0,
                         ease:RoughEase.ease.config({strength:5,points:6,
                                                     template:Linear.easeNone,
                                                     randomize:false}) , clearProps:"y"}, "-=0.5")
       .to(outMaskShape, 1, {scale: 17}, "-=0.3")

//trans + nerve timeline
let nerveMasterTL = new TimelineMax();
nerveMasterTL.add(transitionTL)
             .add(nerveTL);


//neuron appearance timeline
let appearanceTL = new TimelineMax();
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

//top signal comming into the center neuron timeline
let topSigInTL = new TimelineMax();

topSigInTL.set(inTransit1, {strokeWidth: '40px'})
         .add("enterCenSig1", 0.8);

topSigInTL.to(topSignal, 0.7, {scale: 0, transformOrigin: '110%, 110%'}, "topSignal")
    .to(num1, 0.5, {scale: 0, opacity: 0, transformOrigin: '360%, 140%'}, "topSignal")
    .fromTo(inTransit1, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "topSignal")

    .fromTo(cenSig, 1, {scale: 0}, {scale: 1}, "enterCenSig1")
    .fromTo(num2, 1, {scale: 0, opacity: 0, transformOrigin: '-110%, -20%'}, {scale: 1,  opacity: 1}, "enterCenSig1");

//botSignal timeline
let botSigInTL = new TimelineMax();

botSigInTL.add("enterCenSig3", 0.8);

botSigInTL.to(botSignal, 1, {scale: 0, transformOrigin: '110%, 0%'}, "botSignal")
    .to(num3, 0.7, {scale: 0,  opacity: 0, transformOrigin: '240%, -40%'}, "botSignal")
    .fromTo(inTransit2, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "botSignal")

    .fromTo(cenSig3, 1, {scale: 0, transformOrigin: '0%, 100%'}, {scale: 1}, "enterCenSig3")
    //.fromTo(num4, 1, {scale: 0}, {scale: 1}, "enterCenSig3")

//counting number timeline
let counting = new TimelineMax();
counting.to(num2, 0.5, {morphSVG: numBig3})
       .set(num2, {visibility: "hidden"})
       .set(numBig3, {visibility: "visible"})
       .to(numBig3, 0.5, {morphSVG: num4})


//shaking bias timeline
let biasTL = new TimelineMax();
biasTL.fromTo([neuron, cenSig, cenSig3, numBig3], 1, {y:-3}, {y:3,
                 ease:RoughEase.ease.config({
                   strength:6,
                   points:12,
                   template:Linear.easeNone,
                   randomize:false
                 }) , clearProps:"y"}, "biasShake")
     .to(numBig3, 0.4, {morphSVG: numBig5}, "biasShake+=0.3");


//signal out timeline
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

let masterTL = new TimelineMax();

//offsetting num2 up to fix the miscenter error
masterTL.set(num2, {y: -3});

masterTL.add(appearanceTL)
       .add(topSigInTL)
       .add(botSigInTL)
       .add(counting, "-=1")
       .add(biasTL, "+=0.5")
       .add(SigOutTL, "+=0.5");


// ---------------------------------------------------------
// ------------------ Scrolling Control--------------------
// --------------------------------------------------------
let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onLeave'}});

$(".scene").each(function() {
		new ScrollMagic.Scene({ triggerElement: this,
			                      duration: '100%'})
                          		.setPin(this)
                              .addIndicators({name: "text"})
                          		.addTo(controller);
});

let brainAnimScene = new ScrollMagic.Scene({triggerElement: "#brainText",
                                   duration: '100%'})
                                    .setTween(brainTL)
                                    .on("enter", function () {
                                        toggleAnimation(brainNerveAnimation, true)
                                        toggleAnimation(neuronAnimation, false)
                                      })
                                    .setPin("#brainNerveAnimation")
                                    // .addIndicators({name: "brainAnim"})
                                    .addTo(controller);

let nerveAnimScene = new ScrollMagic.Scene({triggerElement: "#nerveText",
                                  duration: '100%'})
                                    .setTween(nerveMasterTL)
                                    .on("enter", function() {
                                        toggleAnimation(brainNerveAnimation, true)
                                        toggleAnimation(neuronAnimation, false)
                                      })
                                    .on("leave", function(){
                                        // brainNerveAnimation.style.position = "absolute";
                                    })
                                    .setPin("#brainNerveAnimation")
                                    .addIndicators({name: "nerveAnim"})
                                    .addTo(controller);

let neuronAniScene = new ScrollMagic.Scene({triggerElement: "#neuron1Text",
                                  duration: '100%'})
                                    .setTween(masterTL)
                                    .on("enter", function () {
                                        toggleAnimation(brainNerveAnimation, false)
                                        toggleAnimation(neuronAnimation, true)
                                      })
                                    .setPin("#neuronAnimation")
                                    // .addIndicators({name: "nerveAnim"})
                                    .addTo(controller);
