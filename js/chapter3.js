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

let keepAppanana = function() {
  toggleAnimation(brainNerveAnimation, false)
  toggleAnimation(neuronAnimation, false)
  toggleAnimation(appanananAnimation, true)
}

let keepNeuron = function() {
  // toggleAnimation(brainNerveAnimation, false)
  toggleAnimation(neuronAnimation, true)
  toggleAnimation(appanananAnimation, false)
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//----------------------------------------------------------
//--------------------Lottie Animations---------------------
//----------------------------------------------------------

var neuronAnimWindow = select('#neuronLottie'),
  neuronAnimData = {
  wrapper: neuronAnimWindow,
  animType: 'svg',
  loop: false,
  prerender: true,
  autoplay: false,
  path: './json/ch3_neuron.json',
};


var neuronAnim = bodymovin.loadAnimation(neuronAnimData);
neuronAnim.addEventListener('DOMLoaded', onDOMLoaded);

var mytl = new TimelineMax();

function onDOMLoaded(e){
  mytl.to({frame: 0}, 3, {
    frame: neuronAnim.totalFrames-1,
    onUpdate: function() {
      neuronAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}


// ---------------------------------------------------------
// ------------------ graphic vars--------------------
// --------------------------------------------------------

let svg = select('svg');

//animations
let neuronAnimation = select('#neuronAnimation');

//nerve system graphics

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


//neuron appearance timeline
let appearanceTL = new TimelineMax();
appearanceTL.set(num2, {y: -3});
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

//top signal comming into the center neuron timeline
let topSigInTL = new TimelineMax();

topSigInTL.set(inTransit1, {strokeWidth: '28px'})
         .add("enterCenSig1", 1.8);

topSigInTL.from(dendrites1, 1, {drawSVG: '0%, 0%'}, "connection")
          .from([topSignal, num1], 1, {scale: 0, transformOrigin: '50%, 50%', ease: Elastic.easeOut}, "connection")
          .to(topSignal, 0.7, {scale: 0, transformOrigin: '110%, 110%'}, "topSignal")
          .to(num1, 0.5, {scale: 0, opacity: 0, transformOrigin: '360%, 140%'}, "topSignal")
          .fromTo(inTransit1, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "topSignal")

          .fromTo(cenSig, 1, {scale: 0}, {scale: 1}, "enterCenSig1")
          .fromTo(num2, 1, {scale: 0, opacity: 0, transformOrigin: '-110%, -20%'}, {scale: 1,  opacity: 1}, "enterCenSig1");

//botSignal timeline
let botSigInTL = new TimelineMax();

botSigInTL.add("enterCenSig3", 1.8);

botSigInTL.from(dendrites2, 1, {drawSVG: '0%, 0%'}, "connection")
          .from([botSignal, num3], 1, {scale: 0, transformOrigin: '50%, 50%', ease: Elastic.easeOut}, "connection")
          .to(botSignal, 1, {scale: 0, transformOrigin: '110%, 0%'}, "botSignal")
          .to(num3, 0.7, {scale: 0,  opacity: 0, transformOrigin: '240%, -40%'}, "botSignal")
          .fromTo(inTransit2, 1.5, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "botSignal")

          .fromTo(cenSig3, 1, {scale: 0, transformOrigin: '0%, 100%'}, {scale: 1}, "enterCenSig3")

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
                   strength:14,
                   points:10,
                   template:Linear.easeNone,
                   randomize:false
                 }) , clearProps:"y"}, "biasShake")
     .to(numBig3, 0.4, {morphSVG: numBig5}, "biasShake+=0.3");


//signal out timeline
let SigOutTL = new TimelineMax();
SigOutTL.set(outTransit, {strokeWidth: "24px"})

SigOutTL.from(ReLU, 1, {opacity: 0})
        .to([cenSig, cenSig3], 2, {
             scale: 0,
             transformOrigin: '110%, 50%',
             smoothOrigin:true}, "SigOut")

         .to(numBig3, 1.5, {opacity: 0, scale: 0, transformOrigin: '200%, 50%'}, "SigOut")
         .fromTo(outTransit, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "SigOut")
         .fromTo(outSig, 1, {scale: 0, transformOrigin: '0%, 50%'}, {scale: 1}, "SigOut+=1")
         .from(numOut5, 1, {scale: 0, opacity: 0, transformOrigin: '-120%, 50%'}, "SigOut+=1");

let botAndCountingTL = new TimelineMax();
botAndCountingTL.add(botSigInTL)
                .add(counting, "-=1")

//transition to appanana
let fruitsTL = new TimelineMax();
fruitsTL.staggerFrom([apple, banana], 1, {opacity: 0}, 0.5);

let appleAppearTL = new TimelineMax();
appleAppearTL.from([topLine, topAnd], 0.5, {opacity: 0})
             .staggerFrom([red, sphere], 1, {opacity: 0}, 0.3);

let bananaAppearTL = new TimelineMax();
bananaAppearTL.from([botLine, botAnd], 0.5, {opacity: 0})
              .staggerFrom([yellow, cylinder], 1, {opacity: 0}, 0.3);

let appananaAppearTL = new TimelineMax();
appananaAppearTL.add(appleAppearTL)
                .add(bananaAppearTL);



//apple perceptron timeline
let transitionToAppleTL = new TimelineMax();
transitionToAppleTL.to(appanana_breakdown, 0.5, {opacity:0})
                   .from([perceptron_base, apple_perceptron], 0.5, {opacity:0});

let sphereSigInTL = new TimelineMax();
sphereSigInTL.delay(2)
             .to(appanana_topSig, 1.7, {scale: 0, transformOrigin: '110%, 110%'}, "appleSigIn")
             .to(sphere_s, 1.5, {scale: 0, opacity: 0, transformOrigin: '110%, 110%'}, "appleSigIn")
             .fromTo(appanana_topTransit, 2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "appleSigIn");

let redSigInTL = new TimelineMax();
redSigInTL.delay(2)
          .to(appanana_botSig, 1.7, {scale: 0, transformOrigin: '110%, 0%'}, "redSigIn")
          .to(red_s, 1.5, {scale: 0, opacity: 0, transformOrigin: '110%, 0%'}, "redSigIn")
          .fromTo(appanana_botTransit, 2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "redSigIn")
          .from(appanana_cenSig, 1, {scale: 0, opacity: 0, transformOrigin: '-20%, 50%'}, "qIn")
          .from(question, 1, {scale: 0, opacity: 0, transformOrigin: '-200%, 50%'}, "qIn");

let appleQuestionTL = new TimelineMax();
appleQuestionTL.fromTo([appanana_cenNeuron, appanana_cenSig, question], 1, {y:-3}, {y:3,
                  ease:RoughEase.ease.config({
                    strength:6,
                    points:12,
                    template:Linear.easeNone,
                    randomize:false
                  }) , clearProps:"y"});

let appleSigOutTL = new TimelineMax();
appleSigOutTL.to(appanana_cenSig, 2, {scale: 0, transformOrigin: '110%, 50%', smoothOrigin:true}, "appleSigOut")
           .to(question, 1.5, {opacity: 0, scale: 0, transformOrigin: '200%, 50%'}, "appleSigOut")
           .fromTo(appanana_outTransit, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "appleSigOut")
           .fromTo(appanana_outSig, 1, {scale: 0, transformOrigin: '-20%, 50%'}, {scale: 1}, "appleSigOut+=1")
           .from(apple_s, 0.9, {scale: 0, opacity: 0, transformOrigin: '-50%, 50%'}, "appleSigOut+=1.1");

let applePerceptronSigInTL = new TimelineMax();
applePerceptronSigInTL.add(transitionToAppleTL)
                      .add(sphereSigInTL, "aSigIn")
                      .add(redSigInTL, "aSigIn")

let applePerceptronSigOutTL = new TimelineMax();
applePerceptronSigOutTL.add(appleQuestionTL, "-=0.5")
                       .add(appleSigOutTL)


//banana perceptron timeline
let appleToBananaTL = new TimelineMax();

appleToBananaTL.to([apple_perceptron, perceptron_base], 0.5, {opacity: 0})
               .from([banana_perceptron, perceptron_base_2], 0.5, {opacity: 0});


let cylinderSigInTL = new TimelineMax();
cylinderSigInTL.delay(2)
               .to(appanana_topSig_2, 1.7, {scale: 0, transformOrigin: '110%, 110%'}, "bananaSigIn")
               .to(cylinder_s, 1.5, {scale: 0, opacity: 0, transformOrigin: '210%, 110%'}, "bananaSigIn")
               .fromTo(appanana_topTransit_2, 2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "bananaSigIn");

let yellowSigInTL = new TimelineMax();
yellowSigInTL.delay(2)
             .to(appanana_botSig_2, 1.7, {scale: 0, transformOrigin: '110%, 0%'}, "yellowSigIn")
             .to(yellow_s, 1.5, {scale: 0, opacity: 0, transformOrigin: '110%, 0%'}, "yellowSigIn")
             .fromTo(appanana_botTransit_2, 2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "yellowSigIn")
             .from(appanana_cenSig_2, 1, {scale: 0, opacity: 0, transformOrigin: '-20%, 50%'}, "bqIn")
             .from(question_2, 1, {scale: 0, opacity: 0, transformOrigin: '-200%, 50%'}, "bqIn");

let bananaQuestionTL = new TimelineMax();
bananaQuestionTL.fromTo([appanana_cenNeuron_2, appanana_cenSig_2, question_2], 1, {y:-3}, {y:3,
                   ease:RoughEase.ease.config({
                     strength:6,
                     points:12,
                     template:Linear.easeNone,
                     randomize:false
                   }) , clearProps:"y"});

let bananaSigOutTL = new TimelineMax();
bananaSigOutTL.to(appanana_cenSig_2, 2, {scale: 0, transformOrigin: '110%, 50%', smoothOrigin:true}, "appleSigOut")
             .to(question_2, 1.5, {opacity: 0, scale: 0, transformOrigin: '200%, 50%'}, "appleSigOut")
             .fromTo(appanana_outTransit_2, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "appleSigOut")
             .fromTo(appanana_outSig_2, 1, {scale: 0, transformOrigin: '-20%, 50%'}, {scale: 1}, "appleSigOut+=1")
             .from(banana_s, 0.9, {scale: 0, opacity: 0, transformOrigin: '-50%, 50%'}, "appleSigOut+=1.1");

let bananaPerceptronSigInTL = new TimelineMax();
bananaPerceptronSigInTL.add(appleToBananaTL)
                  .add(cylinderSigInTL, "bSigIn")
                  .add(yellowSigInTL, "bSigIn")

let bananaPerceptronSigOutTL = new TimelineMax();
bananaPerceptronSigOutTL.add(bananaQuestionTL, "-=0.5")
                        .add(bananaSigOutTL);

// ---------------------------------------------------------
// ------------------ Scrolling Control--------------------
// --------------------------------------------------------
let controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onLeave'}});

$(".scene").each(function() {
		new ScrollMagic.Scene({ triggerElement: this,
			                      duration: '100%'})
                          		.setPin(this)
                              // .addIndicators({name: "text"})
                          		.addTo(controller);
});

toggleAnimation(neuronAnimation, false);

let nerveAnimScene = new ScrollMagic.Scene({triggerElement: "#nerveText",
                                  duration: '100%'})
                                    .setTween(mytl)
                                    .on("enter", function() {
                                        toggleAnimation(neuronAnimWindow, true)
                                        toggleAnimation(neuronAnimation, false)
                                        toggleAnimation(appanananAnimation, false)
                                      })
                                    .setPin("#brainNerveAnimation")
                                    // .addIndicators({name: "nerveAnim"})
                                    .addTo(controller);

//transition to neuron
let neuronAppearScene = new ScrollMagic.Scene({triggerElement: "#neuron1Text",
                                  duration: '100%'})
                                    .setTween(appearanceTL)
                                    .on("enter", function () {
                                        toggleAnimation(neuronAnimWindow, false)
                                        toggleAnimation(neuronAnimation, true)
                                        toggleAnimation(appanananAnimation, false)
                                      })
                                    .on("leave", function () {
                                        // toggleAnimation(brainNerveAnimation, true)
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let neuronTopSigScene = new ScrollMagic.Scene({triggerElement: "#neuron2Text",
                                  duration: '100%'})
                                    .setTween(topSigInTL)
                                    .on("enter", function () {
                                      keepNeuron()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let neuronBotSigScene = new ScrollMagic.Scene({triggerElement: "#neuron3Text",
                                  duration: '100%'})
                                    .setTween(botAndCountingTL)
                                    .on("enter", function () {
                                      keepNeuron()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let neuronBiasScene = new ScrollMagic.Scene({triggerElement: "#neuron4Text",
                                  duration: '100%'})
                                    .setTween(biasTL)
                                    .on("enter", function () {
                                      keepNeuron()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let neuronSigOutScene = new ScrollMagic.Scene({triggerElement: "#neuron5Text",
                                  duration: '100%'})
                                    .setTween(SigOutTL)
                                    .on("enter", function () {
                                      keepNeuron()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

//transition to appanana
let appananaAppearScene = new ScrollMagic.Scene({triggerElement: "#appanana1Text",
                                  duration: '100%'})
                                    .setTween(fruitsTL)
                                    .on("enter", function () {
                                        // toggleAnimation(brainNerveAnimation, false)
                                        toggleAnimation(neuronAnimation, false)
                                        toggleAnimation(appanananAnimation, true)
                                      })
                                    .on("leave", function () {
                                        toggleAnimation(neuronAnimation, true)
                                    })
                                    .setPin("#appanananAnimation")
                                    .addTo(controller);

let appananaBreakdownScene = new ScrollMagic.Scene({triggerElement: "#appanana2Text",
                                  duration: '100%'})
                                    .setTween(appananaAppearTL)
                                    .on("enter", function (){
                                      keepAppanana()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let applePerceptronSigInScene = new ScrollMagic.Scene({triggerElement: "#appanana3Text",
                                  duration: '100%'})
                                    .setTween(applePerceptronSigInTL)
                                    .on("enter", function (){
                                      keepAppanana()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let applePerceptronSigOutScene = new ScrollMagic.Scene({triggerElement: "#appanana4Text",
                                  duration: '100%'})
                                    .setTween(applePerceptronSigOutTL)
                                    .on("enter", function (){
                                      keepAppanana()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let bananaPerceptronSigInScene = new ScrollMagic.Scene({triggerElement: "#appanana5Text",
                                  duration: '100%'})
                                    .setTween(bananaPerceptronSigInTL)
                                    .on("enter", function (){
                                      keepAppanana()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);

let bananaPerceptronSigOutScene = new ScrollMagic.Scene({triggerElement: "#appanana6Text",
                                  duration: '100%'})
                                    .setTween(bananaPerceptronSigOutTL)
                                    .on("enter", function (){
                                      keepAppanana()
                                    })
                                    .setPin("#neuronAnimation")
                                    .addTo(controller);
