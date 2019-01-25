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
  toggleAnimation(dataAnimWindow, true)
}

let keepPerceptron = function() {
  toggleAnimation(neuronAnimWindow, false)
  toggleAnimation(perceptronAnimation, true)
  toggleAnimation(dataAnimWindow, false)
}

let offAnimation = function() {
  toggleAnimation(neuronAnimWindow, false)
  toggleAnimation(perceptronAnimation, false)
  toggleAnimation(dataAnimWindow, false)
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
var seedAnimWindow = select('#seedLottie'),
  seedAnimData = {
    wrapper: seedAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch1_seed.json',
    // path: './json/ch3_activationGroup.json',
  };

var seedAnim = bodymovin.loadAnimation(seedAnimData);
seedAnim.addEventListener('DOMLoaded', onNeuronDOMLoaded);
//
// //activation animations
// var dataAnimWindow = select('#dataLottie'),
//   dataAnimData = {
//     wrapper: dataAnimWindow,
//     animType: 'svg',
//     loop: false,
//     prerender: true,
//     autoplay: false,
//     path: './json/ch3_dataGroup.json',
//   };
//
// var dataAnim = bodymovin.loadAnimation(dataAnimData);
// dataAnim.addEventListener('DOMLoaded', ondataDOMLoaded);

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
// openingAnim.addEventListener('DOMLoaded', onNeuronDOMLoaded);


//----------------------------------------------------------------------------
//-----------------------------timelines--------------------------------------
//----------------------------------------------------------------------------
var neuronBeginTL = new TimelineMax();
var neuronTL = new TimelineMax();

function onNeuronDOMLoaded(e) {
  // neuronBeginTL.to({
  //   frame: 0
  // }, 3, {
  //   frame: 28,
  //   onUpdate: function() {
  //     neuronAnim.goToAndStop(Math.round(this.target.frame), true)
  //   },
  //   ease: Linear.easeNone
  // })
  //
  // neuronTL.to({
  //   frame: 28
  // }, 3, {
  //   frame: neuronAnim.totalFrames - 1,
  //   onUpdate: function() {
  //     neuronAnim.goToAndStop(Math.round(this.target.frame), true)
  //   },
  //   ease: Linear.easeNone
  // })
}

// ---------------------------------------------------------
// ------------------ Animation Timelines--------------------
// --------------------------------------------------------



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
toggleAnimation(dataAnimWindow, false);

//-------------------------------------------------
//--------- Opening Animations -------------
//-------------------------------------------------

// let openingAnimScene = new ScrollMagic.Scene({
//     triggerElement: "#openingText",
//     duration: '100%'
//   })
//   .on("end", function(event) {
//     var direction = event.scrollDirection;
//     if (direction == "FORWARD") {
//       toggleAnimation(neuronAnimWindow, true)
//     } else {
//       toggleAnimation(neuronAnimWindow, false)
//     }
//   })
//   // .addIndicators({name: "opening"})
//   .addTo(controller);

//-------------------------------------------------
//--------- NEURON - BRAIN Animations -------------
//-------------------------------------------------
// let nerveBeginScene = new ScrollMagic.Scene({
//   triggerElement: "#text1",
//   duration: '100%'
// })
//   .setTween(neuronBeginTL)
//   .addTo(controller);
//
// let nerveAnimScene = new ScrollMagic.Scene({
//     triggerElement: "#nerveText",
//     duration: '100%'
//   })
//   .setTween(neuronTL)
//   // .on("enter", function() {
//   //   toggleAnimation(neuronAnimWindow, true)
//   //   toggleAnimation(perceptronAnimation, false)
//   //   toggleAnimation(dataAnimWindow, false)
//   // })
//   // .on("start", function(event) {
//   //   var direction = event.scrollDirection;
//   //   if (direction == "REVERSE") {
//   //     toggleAnimation(openingAnimWindow, true)
//   //     toggleAnimation(neuronAnimWindow, false)
//   //   }
//   // })
//   // .setPin("#brainNerveAnimation")
//   // .addIndicators({name: "nerveAnim"})
//   .addTo(controller);

//-------------------------------------------------
//----------- PERCEPTRON ANIMATIONS ---------------
//-------------------------------------------------
// let neuronAppearScene = new ScrollMagic.Scene({
//     triggerElement: "#neuron1Text",
//     duration: '100%'
//   })
//   .setTween(appearanceTL)
//   .on("enter", function() {
//     keepPerceptron()
//   })
//   .on("start", function(event) {
//     var direction = event.scrollDirection;
//     if (direction == "REVERSE") {
//       toggleAnimation(neuronAnimWindow, true)
//       toggleAnimation(perceptronAnimation, false)
//     }
//   })
//   // .setPin("#perceptronAnimation")
//   .addTo(controller);
//
// let neuronTopSigScene = new ScrollMagic.Scene({
//     triggerElement: "#neuron2Text",
//     duration: '100%'
//   })
//   .setTween(topSigInTL)
//   .on("enter", function() {
//     keepPerceptron()
//   })
//   // .setPin("#perceptronAnimation")
//   .addTo(controller);
//
// let neuronBotSigScene = new ScrollMagic.Scene({
//     triggerElement: "#neuron3Text",
//     duration: '100%'
//   })
//   .setTween(botAndCountingTL)
//   .on("enter", function() {
//     keepPerceptron()
//   })
//   // .setPin("#perceptronAnimation")
//   .addTo(controller);
//
// let neuronBiasScene = new ScrollMagic.Scene({
//     triggerElement: "#neuron4Text",
//     duration: '100%'
//   })
//   .setTween(biasTL)
//   .on("enter", function() {
//     keepPerceptron()
//   })
//   // .setPin("#perceptronAnimation")
//   .addTo(controller);
//
// let neuronSigOutScene = new ScrollMagic.Scene({
//     triggerElement: "#neuron5Text",
//     duration: '100%'
//   })
//   .setTween(SigOutTL)
//   .on("enter", function() {
//     keepPerceptron()
//   })
//   // .setPin("#perceptronAnimation")
//   .addTo(controller);

//-------------------------------------------------
//----------- ACTIVATIONS ANIMATIONS ---------------
//-------------------------------------------------
// let humanDetectorScene = new ScrollMagic.Scene({
//     triggerElement: "#appanana1Text",
//     duration: '100%'
//   })
//   .setTween(activationsTL)
//   .on("enter", function() {
//     keepActivation()
//   })
//   .on("start", function(event) {
//     var direction = event.scrollDirection;
//     if (direction == "REVERSE") {
//       toggleAnimation(perceptronAnimation, true)
//       toggleAnimation(dataAnimWindow, false)
//     }
//   })
//   // .addIndicators({name: "activation"})
//   // .setPin("#appanananAnimation")
//   .addTo(controller);
//
// let appananaBreakdownScene = new ScrollMagic.Scene({
//     triggerElement: "#appanana2Text",
//     duration: '100%'
//   })
//   .setTween(graphsTL)
//   .on("enter", function() {
//     keepActivation()
//   })
//   // .addIndicators({name: "graphs"})
//   // .setPin("#perceptronAnimation")
//   .addTo(controller);
//
// let applePerceptronSigInScene = new ScrollMagic.Scene({
//     triggerElement: "#appanana3Text",
//     duration: '100%'
//   })
//   .setTween(sigmoidTL)
//   .on("enter", function() {
//     keepActivation()
//   })
//   // .setPin("#perceptronAnimation")
//   .addTo(controller);
//
// let applePerceptronSigOutScene = new ScrollMagic.Scene({
//     triggerElement: "#appanana4Text",
//     duration: '100%'
//   })
//   .setTween(reluTL)
//   .on("enter", function() {
//     keepActivation()
//   })
//   // .setPin("#perceptronAnimation")
//   // .addIndicators({name: "sigmoid"})
//   .addTo(controller);

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
      toggleAnimation(dataAnimWindow, true)
    }
  })
  // .addIndicators({name: "ending"})
  .addTo(controller);
