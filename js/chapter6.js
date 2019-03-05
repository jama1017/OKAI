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

//----------------opening animation
var openingAnimWindow = select('#openingLottie'),
  openingAnimData = {
    wrapper: openingAnimWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    path: '/json/ch6_opening.json'
  };

var openingAnim = bodymovin.loadAnimation(openingAnimData);
openingAnim.addEventListener('DOMLoaded', onOpeningDOMLoaded);
openingAnim.setSpeed(1);

//---------------mnist animation
var mnistAnimWindow = select('#mnistLottie'),
  mnistAnimData = {
    wrapper: mnistAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch6_mnist.json',
  };

var mnistAnim = bodymovin.loadAnimation(mnistAnimData);
mnistAnim.addEventListener('DOMLoaded', onMnistDOMLoaded);


//--------------mnistOutput animations
var mnistOutputAnimWindow = select('#mnistOutputLottie'),
  mnistOutputAnimData = {
    wrapper: mnistOutputAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch6_mnistOutput.json',
  };

var mnistOutputAnim = bodymovin.loadAnimation(mnistOutputAnimData);
mnistOutputAnim.addEventListener('DOMLoaded', onMnistOutputDOMLoaded);


//--------------prop animations
var propAnimWindow = select('#propLottie'),
  propAnimData = {
    wrapper: propAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch6_prop.json',
  };

var propAnim = bodymovin.loadAnimation(propAnimData);
propAnim.addEventListener('DOMLoaded', onPropDOMLoaded);


//--------------repeat animations
var repeatAnimWindow = select('#repeatLottie'),
  repeatAnimData = {
    wrapper: repeatAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch6_repeat.json',
  };

var repeatAnim = bodymovin.loadAnimation(repeatAnimData);
repeatAnim.addEventListener('DOMLoaded', onRepeatDOMLoaded);


//--------------coding animations
var codingAnimWindow = select('#codingLottie'),
  codingAnimData = {
    wrapper: codingAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch6_coding.json',
  };

var codingAnim = bodymovin.loadAnimation(codingAnimData);
codingAnim.addEventListener('DOMLoaded', onCodingDOMLoaded);

//----------------------------------------------------------------------------
//-----------------------------timelines--------------------------------------
//----------------------------------------------------------------------------

//----------opening TLs---------
var openingTL = new TimelineMax();

function onOpeningDOMLoaded(e) {
  openingTL.to({
    frame: 0
  }, 1, {
    frame: openingAnim.totalFrames - 1,
    onUpdate: function() {
      openingAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
  })
}

// --------mnist TLs-------------
var baseTL = new TimelineMax();
var pixelTL = new TimelineMax();
var greyTL = new TimelineMax();
var fiveTL = new TimelineMax();
var softTL = new TimelineMax();

function onMnistDOMLoaded(e) {
  baseTL.to({
    frame: 0
  }, 3, {
    frame: 79,
    onUpdate: function() {
      mnistAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  pixelTL.to({
    frame: 79
  }, 3, {
    frame: 120,
    onUpdate: function() {
      mnistAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  greyTL.to({
    frame: 120
  }, 3, {
    frame: 277,
    onUpdate: function() {
      mnistAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  fiveTL.to({
    frame: 277
  }, 3, {
    frame: 352,
    onUpdate: function() {
      mnistAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  softTL.to({
    frame: 352
  }, 3, {
    frame: mnistAnim.totalFrames - 1,
    onUpdate: function() {
      mnistAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

// --------mnistOutput TLs-------------
var tenTL = new TimelineMax();
var probTL = new TimelineMax();
var classTL = new TimelineMax();

function onMnistOutputDOMLoaded(e) {
  tenTL.to({
    frame: 0
  }, 3, {
    frame: 61,
    onUpdate: function() {
      mnistOutputAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  probTL.to({
    frame: 61
  }, 3, {
    frame: 100,
    onUpdate: function() {
      mnistOutputAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  classTL.to({
    frame: 100
  }, 3, {
    frame: mnistOutputAnim.totalFrames - 1,
    onUpdate: function() {
      mnistOutputAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

//--------prop TLs------------
var forTL = new TimelineMax();
var backTL = new TimelineMax();

function onPropDOMLoaded(e) {
  forTL.to({
    frame: 0
  }, 3, {
    frame: 68,
    onUpdate: function() {
      propAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  backTL.to({
    frame: 68
  }, 3, {
    frame: propAnim.totalFrames - 1,
    onUpdate: function() {
      propAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}


//--------repeat TLs------------
var clusterTL = new TimelineMax();
var gradientTL = new TimelineMax();
var overTL = new TimelineMax();

function onRepeatDOMLoaded(e) {
  clusterTL.to({
    frame: 0
  }, 3, {
    frame: 141,
    onUpdate: function() {
      repeatAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  gradientTL.to({
    frame: 141
  }, 3, {
    frame: 291,
    onUpdate: function() {
      repeatAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  overTL.to({
    frame: 291
  }, 3, {
    frame: repeatAnim.totalFrames - 1,
    onUpdate: function() {
      repeatAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

//--------coding TLs------------
var codingTL = new TimelineMax();

function onCodingDOMLoaded(e) {

  codingTL.to({
    frame: 0
  }, 3, {
    frame: codingAnim.totalFrames - 1,
    onUpdate: function() {
      codingAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

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


toggleAnimation(mnistAnimWindow, false);
toggleAnimation(mnistOutputAnimWindow, false);
toggleAnimation(propAnimWindow, false);
toggleAnimation(repeatAnimWindow, false);
toggleAnimation(codingAnimWindow, false);


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
      toggleAnimation(mnistAnimWindow, true)
    } else {
      toggleAnimation(mnistAnimWindow, false)
    }
  })
  .addTo(controller);

//-------------------------------------------------
//--------- mnist Animations -------------
//-------------------------------------------------
let baseScene = new ScrollMagic.Scene({
    triggerElement: "#text1",
    duration: '100%'
  })
  .setTween(baseTL)
  .addTo(controller);

let pixelScene = new ScrollMagic.Scene({
    triggerElement: "#text2",
    duration: '100%'
  })
  .setTween(pixelTL)
  .addTo(controller);

let greyScene = new ScrollMagic.Scene({
    triggerElement: "#text3",
    duration: '100%'
  })
  .setTween(greyTL)
  .addTo(controller);

let fiveScene = new ScrollMagic.Scene({
    triggerElement: "#text4",
    duration: '100%'
  })
  .setTween(fiveTL)
  .addTo(controller);

let softScene = new ScrollMagic.Scene({
    triggerElement: "#text5",
    duration: '100%'
  })
  .setTween(softTL)
  .addTo(controller);

//-------------------------------------------------
//----------- mnistOutput ANIMATIONS ---------------
//-------------------------------------------------
let tenScene = new ScrollMagic.Scene({
    triggerElement: "#text6",
    duration: '100%'
  })
  .setTween(tenTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(mnistAnimWindow, true)
      toggleAnimation(mnistOutputAnimWindow, false)
    } else {
      toggleAnimation(mnistAnimWindow, false)
      toggleAnimation(mnistOutputAnimWindow, true)
    }
  })
  .addTo(controller);

let probScene = new ScrollMagic.Scene({
    triggerElement: "#text7",
    duration: '100%'
  })
  .setTween(probTL)
  .addTo(controller);

let classScene = new ScrollMagic.Scene({
    triggerElement: "#text8",
    duration: '100%'
  })
  .setTween(classTL)
  .addTo(controller);

//-------------------------------------------------
//----------- prop ANIMATIONS ---------------
//-------------------------------------------------
let forScene = new ScrollMagic.Scene({
    triggerElement: "#text9",
    duration: '100%'
  })
  .setTween(forTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(mnistOutputAnimWindow, true)
      toggleAnimation(propAnimWindow, false)
    } else {
      toggleAnimation(mnistOutputAnimWindow, false)
      toggleAnimation(propAnimWindow, true)
    }
  })
  .addTo(controller);

let backScene = new ScrollMagic.Scene({
    triggerElement: "#text10",
    duration: '100%'
  })
  .setTween(backTL)
  .addTo(controller);


//-------------------------------------------------
//----------- repeat ANIMATIONS ---------------
//-------------------------------------------------
let clusterScene = new ScrollMagic.Scene({
    triggerElement: "#text11",
    duration: '100%'
  })
  .setTween(clusterTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(propAnimWindow, true)
      toggleAnimation(repeatAnimWindow, false)
    } else {
      toggleAnimation(propAnimWindow, false)
      toggleAnimation(repeatAnimWindow, true)
    }
  })
  .addTo(controller);

let gradientScene = new ScrollMagic.Scene({
    triggerElement: "#text12",
    duration: '100%'
  })
  .setTween(gradientTL)
  .addTo(controller);

let overScene = new ScrollMagic.Scene({
    triggerElement: "#text13",
    duration: '100%'
  })
  .setTween(overTL)
  .addTo(controller);

//-------------------------------------------------
//----------- WORDS ANIMATIONS ---------------
//-------------------------------------------------
let codingScene = new ScrollMagic.Scene({
    triggerElement: "#text14",
    duration: '100%'
  })
  .setTween(codingTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(repeatAnimWindow, true)
      toggleAnimation(codingAnimWindow, false)
    } else {
      toggleAnimation(repeatAnimWindow, false)
      toggleAnimation(codingAnimWindow, true)
    }
  })
  .addTo(controller);

//-------------------------------------------------
//----------- ENDING SECTION ---------------
//-------------------------------------------------
let endingScene = new ScrollMagic.Scene({
    triggerElement: "#endingText",
    duration: '100%'
  })
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(codingAnimWindow, true)
    } else {
      toggleAnimation(codingAnimWindow, false)
    }
  })
  // .addIndicators({name: "ending"})
  .addTo(controller);
