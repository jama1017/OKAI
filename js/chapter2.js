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
    // path: './json/sushi_fitness.json',
    path: './json/ch2_opening.json'
  };

var openingAnim = bodymovin.loadAnimation(openingAnimData);
openingAnim.addEventListener('DOMLoaded', onOpeningDOMLoaded);
openingAnim.setSpeed(1);

//---------------neural animation
var neuralAnimWindow = select('#neuralLottie'),
  neuralAnimData = {
    wrapper: neuralAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch2_neuralGroup.json',
    // path: './json/ch3_activationGroup.json',
  };

var neuralAnim = bodymovin.loadAnimation(neuralAnimData);
neuralAnim.addEventListener('DOMLoaded', onNeuralDOMLoaded);


//--------------andXor animations
var andXorAnimWindow = select('#andXorLottie'),
  andXorAnimData = {
    wrapper: andXorAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch2_andXor.json',
  };

var andXorAnim = bodymovin.loadAnimation(andXorAnimData);
andXorAnim.addEventListener('DOMLoaded', onAndXorDOMLoaded);


//--------------fnn animations
var fnnAnimWindow = select('#fnnLottie'),
  fnnAnimData = {
    wrapper: fnnAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch2_fnnIntro.json',
  };

var fnnAnim = bodymovin.loadAnimation(fnnAnimData);
fnnAnim.addEventListener('DOMLoaded', onFnnDOMLoaded);


//--------------dl animations
var dlAnimWindow = select('#dlLottie'),
  dlAnimData = {
    wrapper: dlAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch2_dl.json',
  };

var dlAnim = bodymovin.loadAnimation(dlAnimData);
dlAnim.addEventListener('DOMLoaded', onDlDOMLoaded);

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

// --------neural TLs-------------
var brainTL = new TimelineMax();
var neuronTL = new TimelineMax();
var perceptronTL = new TimelineMax();

function onNeuralDOMLoaded(e) {
  brainTL.to({
    frame: 0
  }, 3, {
    frame: 9,
    onUpdate: function() {
      neuralAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  neuronTL.to({
    frame: 9
  }, 3, {
    frame: 88,
    onUpdate: function() {
      neuralAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  perceptronTL.to({
    frame: 88
  }, 3, {
    frame: neuralAnim.totalFrames - 1,
    onUpdate: function() {
      neuralAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

// --------andXor TLs-------------
var andTL = new TimelineMax();
var xorTL = new TimelineMax();

function onAndXorDOMLoaded(e) {
  andTL.to({
    frame: 0
  }, 3, {
    frame: 73,
    onUpdate: function() {
      andXorAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  xorTL.to({
    frame: 73
  }, 3, {
    frame: andXorAnim.totalFrames - 1,
    onUpdate: function() {
      andXorAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

//--------fnn TLs------------
var fnnTL = new TimelineMax();
var clockTL = new TimelineMax();

function onFnnDOMLoaded(e) {
  fnnTL.to({
    frame: 0
  }, 3, {
    frame: 167,
    onUpdate: function() {
      fnnAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  clockTL.to({
    frame: 167
  }, 3, {
    frame: fnnAnim.totalFrames - 1,
    onUpdate: function() {
      fnnAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}


//--------dl TLs------------
var dogTL = new TimelineMax();
var dlTL = new TimelineMax();

function onDlDOMLoaded(e) {
  dogTL.to({
    frame: 0
  }, 3, {
    frame: 93,
    onUpdate: function() {
      dlAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  dlTL.to({
    frame: 93
  }, 3, {
    frame: dlAnim.totalFrames - 1,
    onUpdate: function() {
      dlAnim.goToAndStop(Math.round(this.target.frame), true)
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


toggleAnimation(neuralAnimWindow, false);
toggleAnimation(andXorAnimWindow, false);
toggleAnimation(fnnAnimWindow, false);
toggleAnimation(dlAnimWindow, false);

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
      toggleAnimation(neuralAnimWindow, true)
    } else {
      toggleAnimation(neuralAnimWindow, false)
    }
  })
  .addTo(controller);

//-------------------------------------------------
//--------- neural Animations -------------
//-------------------------------------------------
let brainScene = new ScrollMagic.Scene({
  triggerElement: "#text1",
  duration: '100%'
})
  .setTween(brainTL)
  .addTo(controller);

let carScene = new ScrollMagic.Scene({
    triggerElement: "#text2",
    duration: '100%'
  })
  .setTween(neuronTL)
  .addTo(controller);

let moreScene = new ScrollMagic.Scene({
    triggerElement: "#text3",
    duration: '100%'
  })
  .setTween(perceptronTL)
  .addTo(controller);

//-------------------------------------------------
//----------- andXor ANIMATIONS ---------------
//-------------------------------------------------
let notRobotScene = new ScrollMagic.Scene({
    triggerElement: "#text4",
    duration: '100%'
  })
  .setTween(andTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(neuralAnimWindow, true)
      toggleAnimation(andXorAnimWindow, false)
    } else {
      toggleAnimation(neuralAnimWindow, false)
      toggleAnimation(andXorAnimWindow, true)
    }
  })
  .addTo(controller);

let robotBrainScene = new ScrollMagic.Scene({
    triggerElement: "#text5",
    duration: '100%'
  })
  .setTween(xorTL)
  .addTo(controller);

//-------------------------------------------------
//----------- fnn ANIMATIONS ---------------
//-------------------------------------------------
let aniScene = new ScrollMagic.Scene({
    triggerElement: "#text6",
    duration: '100%'
  })
  .setTween(fnnTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(andXorAnimWindow, true)
      toggleAnimation(fnnAnimWindow, false)
    } else {
      toggleAnimation(andXorAnimWindow, false)
      toggleAnimation(fnnAnimWindow, true)
    }
  })
  .addTo(controller);

let agiScene = new ScrollMagic.Scene({
    triggerElement: "#text7",
    duration: '100%'
  })
  .setTween(clockTL)
  .addTo(controller);


//-------------------------------------------------
//----------- dl ANIMATIONS ---------------
//-------------------------------------------------
let data1Scene = new ScrollMagic.Scene({
    triggerElement: "#text8",
    duration: '100%'
  })
  .setTween(dogTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(fnnAnimWindow, true)
      toggleAnimation(dlAnimWindow, false)
    } else {
      toggleAnimation(fnnAnimWindow, false)
      toggleAnimation(dlAnimWindow, true)
    }
  })
  .addTo(controller);

let data2Scene = new ScrollMagic.Scene({
    triggerElement: "#text9",
    duration: '100%'
  })
  .setTween(dlTL)
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
      toggleAnimation(dlAnimWindow, true)
    } else {
      toggleAnimation(dlAnimWindow, false)
    }
  })
  // .addIndicators({name: "ending"})
  .addTo(controller);
