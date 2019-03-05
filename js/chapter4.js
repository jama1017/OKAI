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
    path: '/json/ch4_opening.json'
  };

var openingAnim = bodymovin.loadAnimation(openingAnimData);
openingAnim.addEventListener('DOMLoaded', onOpeningDOMLoaded);
openingAnim.setSpeed(1);

//---------------function animation
var functionAnimWindow = select('#functionLottie'),
  functionAnimData = {
    wrapper: functionAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch4_function.json',
  };

var functionAnim = bodymovin.loadAnimation(functionAnimData);
functionAnim.addEventListener('DOMLoaded', onFunctionDOMLoaded);


//--------------loss animations
var lossAnimWindow = select('#lossLottie'),
  lossAnimData = {
    wrapper: lossAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch4_loss.json',
  };

var lossAnim = bodymovin.loadAnimation(lossAnimData);
lossAnim.addEventListener('DOMLoaded', onLossDOMLoaded);


//--------------gradient animations
var gradientAnimWindow = select('#gradientLottie'),
  gradientAnimData = {
    wrapper: gradientAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch4_gradient.json',
  };

var gradientAnim = bodymovin.loadAnimation(gradientAnimData);
gradientAnim.addEventListener('DOMLoaded', onGradientDOMLoaded);

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

// --------function TLs-------------
var abstractTL = new TimelineMax();
var machineTL = new TimelineMax();
var adjustTL = new TimelineMax();

function onFunctionDOMLoaded(e) {
  abstractTL.to({
    frame: 0
  }, 3, {
    frame: 29,
    onUpdate: function() {
      functionAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  machineTL.to({
    frame: 29
  }, 3, {
    frame: 85,
    onUpdate: function() {
      functionAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  adjustTL.to({
    frame: 85
  }, 3, {
    frame: functionAnim.totalFrames - 1,
    onUpdate: function() {
      functionAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

// --------loss TLs-------------
var crossTL = new TimelineMax();
var differTL = new TimelineMax();
var miniTL = new TimelineMax();

function onLossDOMLoaded(e) {
  crossTL.to({
    frame: 0
  }, 3, {
    frame: 75,
    onUpdate: function() {
      lossAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  differTL.to({
    frame: 75
  }, 3, {
    frame: 276,
    onUpdate: function() {
      lossAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  miniTL.to({
    frame: 276
  }, 3, {
    frame: lossAnim.totalFrames - 1,
    onUpdate: function() {
      lossAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

//--------gradient TLs------------
var gdTL = new TimelineMax();
var stepTL = new TimelineMax();

function onGradientDOMLoaded(e) {
  gdTL.to({
    frame: 0
  }, 3, {
    frame: 75,
    onUpdate: function() {
      gradientAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  stepTL.to({
    frame: 75
  }, 3, {
    frame: gradientAnim.totalFrames - 1,
    onUpdate: function() {
      gradientAnim.goToAndStop(Math.round(this.target.frame), true)
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


toggleAnimation(functionAnimWindow, false);
toggleAnimation(lossAnimWindow, false);
toggleAnimation(gradientAnimWindow, false);


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
      toggleAnimation(functionAnimWindow, true)
    } else {
      toggleAnimation(functionAnimWindow, false)
    }
  })
  .addTo(controller);

//-------------------------------------------------
//--------- function Animations -------------
//-------------------------------------------------
let seedScene = new ScrollMagic.Scene({
  triggerElement: "#text1",
  duration: '100%'
})
  .setTween(abstractTL)
  .addTo(controller);

let carScene = new ScrollMagic.Scene({
    triggerElement: "#text2",
    duration: '100%'
  })
  .setTween(machineTL)
  .addTo(controller);

let moreScene = new ScrollMagic.Scene({
    triggerElement: "#text3",
    duration: '100%'
  })
  .setTween(adjustTL)
  .addTo(controller);

//-------------------------------------------------
//----------- loss ANIMATIONS ---------------
//-------------------------------------------------
let notRobotScene = new ScrollMagic.Scene({
    triggerElement: "#text4",
    duration: '100%'
  })
  .setTween(crossTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(functionAnimWindow, true)
      toggleAnimation(lossAnimWindow, false)
    } else {
      toggleAnimation(functionAnimWindow, false)
      toggleAnimation(lossAnimWindow, true)
    }
  })
  .addTo(controller);

let robotBrainScene = new ScrollMagic.Scene({
    triggerElement: "#text5",
    duration: '100%'
  })
  .setTween(differTL)
  .addTo(controller);

let adjustScene = new ScrollMagic.Scene({
    triggerElement: "#text6",
    duration: '100%'
  })
  .setTween(miniTL)
  .addTo(controller);


//-------------------------------------------------
//----------- gradient ANIMATIONS ---------------
//-------------------------------------------------
let aniScene = new ScrollMagic.Scene({
    triggerElement: "#text7",
    duration: '100%'
  })
  .setTween(gdTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(lossAnimWindow, true)
      toggleAnimation(gradientAnimWindow, false)
    } else {
      toggleAnimation(lossAnimWindow, false)
      toggleAnimation(gradientAnimWindow, true)
    }
  })
  .addTo(controller);

let agiScene = new ScrollMagic.Scene({
    triggerElement: "#text8",
    duration: '100%'
  })
  .setTween(stepTL)
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
      toggleAnimation(gradientAnimWindow, true)
    } else {
      toggleAnimation(gradientAnimWindow, false)
    }
  })
  // .addIndicators({name: "ending"})
  .addTo(controller);
