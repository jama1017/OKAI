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

let keepActivation = function() {
  toggleAnimation(neuronAnimWindow, false)
  toggleAnimation(perceptronAnimation, false)
  toggleAnimation(activationAnimWindow, true)
}

let keepPerceptron = function() {
  toggleAnimation(neuronAnimWindow, false)
  toggleAnimation(perceptronAnimation, true)
  toggleAnimation(activationAnimWindow, false)
}

let offAnimation = function() {
  toggleAnimation(neuronAnimWindow, false)
  toggleAnimation(perceptronAnimation, false)
  toggleAnimation(activationAnimWindow, false)
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//----------------------------------------------------------
//--------------------Lottie Animations---------------------
//----------------------------------------------------------

//neuron animation
var neuronAnimWindow = select('#neuronLottie'),
  neuronAnimData = {
    wrapper: neuronAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch3_neuron.json',
    // path: './json/ch3_activationGroup.json',
  };

var neuronAnim = bodymovin.loadAnimation(neuronAnimData);
neuronAnim.addEventListener('DOMLoaded', onNeuronDOMLoaded);

//activation animations
var activationAnimWindow = select('#activationLottie'),
  activationAnimData = {
    wrapper: activationAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch3_activationGroup.json',
  };

var activationAnim = bodymovin.loadAnimation(activationAnimData);
activationAnim.addEventListener('DOMLoaded', onActivationDOMLoaded);

//opening animation
var openingAnimWindow = select('#openingLottie'),
  openingAnimData = {
    wrapper: openingAnimWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    // path: './json/sushi_fitness.json',
    path: './json/ch2_nestedPerc.json'
  };

var openingAnim = bodymovin.loadAnimation(openingAnimData);
openingAnim.addEventListener('DOMLoaded', onOpeningDOMLoaded);
openingAnim.setSpeed(1);


//----------------------------------------------------------------------------
//-----------------------------timelines--------------------------------------
//----------------------------------------------------------------------------

//----------opening TLs---------
var openingTL = new TimelineMax();

function onOpeningDOMLoaded(e) {
  openingTL.to({
    frame: 0
  }, 3, {
    frame: openingAnim.totalFrames - 1,
    onUpdate: function() {
      openingAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
  })
}

var neuronBeginTL = new TimelineMax();
var neuronTL = new TimelineMax();

function onNeuronDOMLoaded(e) {
  neuronBeginTL.to({
    frame: 0
  }, 3, {
    frame: 28,
    onUpdate: function() {
      neuronAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  neuronTL.to({
    frame: 28
  }, 3, {
    frame: neuronAnim.totalFrames - 1,
    onUpdate: function() {
      neuronAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

var activationsTL = new TimelineMax();
var graphsTL = new TimelineMax();
var sigmoidTL = new TimelineMax();
var reluTL = new TimelineMax();

function onActivationDOMLoaded(e) {
  activationsTL.to({
    frame: 0
  }, 3, {
    frame: 70,
    onUpdate: function() {
      activationAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  graphsTL.to({
    frame: 70
  }, 3, {
    frame: 156,
    onUpdate: function() {
      activationAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  sigmoidTL.to({
    frame: 156
  }, 3, {
    frame: 237,
    onUpdate: function() {
      activationAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  reluTL.to({
    frame: 237
  }, 3, {
    frame: activationAnim.totalFrames - 1,
    onUpdate: function() {
      activationAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

// ---------------------------------------------------------
// ------------------ graphic vars--------------------
// --------------------------------------------------------

let svg = select('svg');

//animations
let perceptronAnimation = select('#perceptronAnimation');

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
appearanceTL.set(num2, {
  y: -3
});
appearanceTL.from([input1, input2], 1, {
    scale: 0,
    transformOrigin: '50%, 50%',
    ease: Elastic.easeOut
  })
  .from(neuron, 1, {
    scale: 0,
    transformOrigin: '50%, 50%',
    ease: Elastic.easeOut
  })
  .from(output, 1, {
    scale: 0,
    transformOrigin: '50%, 50%',
    ease: Elastic.easeOut
  }, "outputShow")
  .fromTo(axon, 1, {
    drawSVG: '100%, 100%'
  }, {
    drawSVG: '0%, 100%'
  }, "outputShow")


//top signal comming into the center neuron timeline
let topSigInTL = new TimelineMax();

topSigInTL.set(inTransit1, {
    strokeWidth: '28px'
  })
  .add("enterCenSig1", 1.8);

topSigInTL.from(dendrites1, 1, {
    drawSVG: '0%, 0%'
  }, "connection")
  .from([topSignal, num1], 1, {
    scale: 0,
    transformOrigin: '50%, 50%',
    ease: Elastic.easeOut
  }, "connection")
  .to(topSignal, 0.7, {
    scale: 0,
    transformOrigin: '110%, 110%'
  }, "topSignal")
  .to(num1, 0.5, {
    scale: 0,
    opacity: 0,
    transformOrigin: '360%, 140%'
  }, "topSignal")
  .fromTo(inTransit1, 1.5, {
    drawSVG: '0% 10%'
  }, {
    drawSVG: "90%, 100%"
  }, "topSignal")

  .fromTo(cenSig, 1, {
    scale: 0
  }, {
    scale: 1
  }, "enterCenSig1")
  .fromTo(num2, 1, {
    scale: 0,
    opacity: 0,
    transformOrigin: '-110%, -20%'
  }, {
    scale: 1,
    opacity: 1
  }, "enterCenSig1");

//botSignal timeline
let botSigInTL = new TimelineMax();

botSigInTL.add("enterCenSig3", 1.8);

botSigInTL.from(dendrites2, 1, {
    drawSVG: '0%, 0%'
  }, "connection")
  .from([botSignal, num3], 1, {
    scale: 0,
    transformOrigin: '50%, 50%',
    ease: Elastic.easeOut
  }, "connection")
  .to(botSignal, 1, {
    scale: 0,
    transformOrigin: '110%, 0%'
  }, "botSignal")
  .to(num3, 0.7, {
    scale: 0,
    opacity: 0,
    transformOrigin: '240%, -40%'
  }, "botSignal")
  .fromTo(inTransit2, 1.5, {
    drawSVG: '0% 10%'
  }, {
    drawSVG: "90%, 100%"
  }, "botSignal")

  .fromTo(cenSig3, 1, {
    scale: 0,
    transformOrigin: '0%, 100%'
  }, {
    scale: 1
  }, "enterCenSig3")

//counting number timeline
let counting = new TimelineMax();
counting.to(num2, 0.5, {
    morphSVG: numBig3
  })
  .set(num2, {
    visibility: "hidden"
  })
  .set(numBig3, {
    visibility: "visible"
  })
  .to(numBig3, 0.5, {
    morphSVG: num4
  })


//shaking bias timeline
let biasTL = new TimelineMax();
biasTL.fromTo([neuron, cenSig, cenSig3, numBig3], 1, {
    y: -3
  }, {
    y: 3,
    ease: RoughEase.ease.config({
      strength: 14,
      points: 10,
      template: Linear.easeNone,
      randomize: false
    }),
    clearProps: "y"
  }, "biasShake")
  .to(numBig3, 0.4, {
    morphSVG: numBig5
  }, "biasShake+=0.3");


//signal out timeline
let SigOutTL = new TimelineMax();
SigOutTL.set(outTransit, {
  strokeWidth: "24px"
})

SigOutTL.from(ReLU, 1, {
    opacity: 0
  })
  .to([cenSig, cenSig3], 2, {
    scale: 0,
    transformOrigin: '110%, 50%',
    smoothOrigin: true
  }, "SigOut")

  .to(numBig3, 1.5, {
    opacity: 0,
    scale: 0,
    transformOrigin: '200%, 50%'
  }, "SigOut")
  .fromTo(outTransit, 2, {
    drawSVG: "90%, 100%"
  }, {
    drawSVG: "0% 10%"
  }, "SigOut")
  .fromTo(outSig, 1, {
    scale: 0,
    transformOrigin: '0%, 50%'
  }, {
    scale: 1
  }, "SigOut+=1")
  .from(numOut5, 1, {
    scale: 0,
    opacity: 0,
    transformOrigin: '-120%, 50%'
  }, "SigOut+=1");

let botAndCountingTL = new TimelineMax();
botAndCountingTL.add(botSigInTL)
  .add(counting, "-=1")


// ---------------------------------------------------------
// ------------------ Scrolling Control--------------------
// --------------------------------------------------------
let controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

$(".scene").each(function() {
  new ScrollMagic.Scene({
      triggerElement: this,
      duration: '100%'
    })
    .setPin(this)
    // .addIndicators({name: "text"})
    .addTo(controller);
});

toggleAnimation(neuronAnimWindow, false);
toggleAnimation(perceptronAnimation, false);
toggleAnimation(activationAnimWindow, false);

//-------------------------------------------------
//--------- Opening Animations -------------
//-------------------------------------------------

let openingAnimScene = new ScrollMagic.Scene({
    triggerElement: "#openingText",
    duration: '100%'
  })
  .on("end", function(event) {
    var direction = event.scrollDirection;
    if (direction == "FORWARD") {
      toggleAnimation(neuronAnimWindow, true)
    } else {
      toggleAnimation(neuronAnimWindow, false)
    }
  })
  // .addIndicators({name: "opening"})
  .addTo(controller);

//-------------------------------------------------
//--------- NEURON - BRAIN Animations -------------
//-------------------------------------------------
let nerveBeginScene = new ScrollMagic.Scene({
  triggerElement: "#brainText",
  duration: '100%'
})
  .setTween(neuronBeginTL)
  .addTo(controller);

let nerveAnimScene = new ScrollMagic.Scene({
    triggerElement: "#nerveText",
    duration: '100%'
  })
  .setTween(neuronTL)
  // .on("enter", function() {
  //   toggleAnimation(neuronAnimWindow, true)
  //   toggleAnimation(perceptronAnimation, false)
  //   toggleAnimation(activationAnimWindow, false)
  // })
  // .on("start", function(event) {
  //   var direction = event.scrollDirection;
  //   if (direction == "REVERSE") {
  //     toggleAnimation(openingAnimWindow, true)
  //     toggleAnimation(neuronAnimWindow, false)
  //   }
  // })
  // .setPin("#brainNerveAnimation")
  // .addIndicators({name: "nerveAnim"})
  .addTo(controller);

//-------------------------------------------------
//----------- PERCEPTRON ANIMATIONS ---------------
//-------------------------------------------------
let neuronAppearScene = new ScrollMagic.Scene({
    triggerElement: "#neuron1Text",
    duration: '100%'
  })
  .setTween(appearanceTL)
  .on("enter", function() {
    keepPerceptron()
  })
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(neuronAnimWindow, true)
      toggleAnimation(perceptronAnimation, false)
    }
  })
  // .setPin("#perceptronAnimation")
  .addTo(controller);

let neuronTopSigScene = new ScrollMagic.Scene({
    triggerElement: "#neuron2Text",
    duration: '100%'
  })
  .setTween(topSigInTL)
  .on("enter", function() {
    keepPerceptron()
  })
  // .setPin("#perceptronAnimation")
  .addTo(controller);

let neuronBotSigScene = new ScrollMagic.Scene({
    triggerElement: "#neuron3Text",
    duration: '100%'
  })
  .setTween(botAndCountingTL)
  .on("enter", function() {
    keepPerceptron()
  })
  // .setPin("#perceptronAnimation")
  .addTo(controller);

let neuronBiasScene = new ScrollMagic.Scene({
    triggerElement: "#neuron4Text",
    duration: '100%'
  })
  .setTween(biasTL)
  .on("enter", function() {
    keepPerceptron()
  })
  // .setPin("#perceptronAnimation")
  .addTo(controller);

let neuronSigOutScene = new ScrollMagic.Scene({
    triggerElement: "#neuron5Text",
    duration: '100%'
  })
  .setTween(SigOutTL)
  .on("enter", function() {
    keepPerceptron()
  })
  // .setPin("#perceptronAnimation")
  .addTo(controller);

//-------------------------------------------------
//----------- ACTIVATIONS ANIMATIONS ---------------
//-------------------------------------------------
let humanDetectorScene = new ScrollMagic.Scene({
    triggerElement: "#appanana1Text",
    duration: '100%'
  })
  .setTween(activationsTL)
  .on("enter", function() {
    keepActivation()
  })
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(perceptronAnimation, true)
      toggleAnimation(activationAnimWindow, false)
    }
  })
  // .addIndicators({name: "activation"})
  // .setPin("#appanananAnimation")
  .addTo(controller);

let appananaBreakdownScene = new ScrollMagic.Scene({
    triggerElement: "#appanana2Text",
    duration: '100%'
  })
  .setTween(graphsTL)
  .on("enter", function() {
    keepActivation()
  })
  // .addIndicators({name: "graphs"})
  // .setPin("#perceptronAnimation")
  .addTo(controller);

let applePerceptronSigInScene = new ScrollMagic.Scene({
    triggerElement: "#appanana3Text",
    duration: '100%'
  })
  .setTween(sigmoidTL)
  .on("enter", function() {
    keepActivation()
  })
  // .setPin("#perceptronAnimation")
  .addTo(controller);

let applePerceptronSigOutScene = new ScrollMagic.Scene({
    triggerElement: "#appanana4Text",
    duration: '100%'
  })
  .setTween(reluTL)
  .on("enter", function() {
    keepActivation()
  })
  // .setPin("#perceptronAnimation")
  // .addIndicators({name: "sigmoid"})
  .addTo(controller);

//-------------------------------------------------
//----------- ENDING SECTION ---------------
//-------------------------------------------------
let endingScene = new ScrollMagic.Scene({
    triggerElement: "#endingText",
    duration: '10%'
  })
  .on("enter", function() {
    offAnimation()
  })
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(activationAnimWindow, true)
    }
  })
  // .addIndicators({name: "ending"})
  .addTo(controller);
