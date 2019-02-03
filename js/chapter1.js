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
    path: './json/ch1_opening.json'
  };

var openingAnim = bodymovin.loadAnimation(openingAnimData);
openingAnim.addEventListener('DOMLoaded', onOpeningDOMLoaded);
openingAnim.setSpeed(1);

//---------------seed animation
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
seedAnim.addEventListener('DOMLoaded', onSeedDOMLoaded);


//--------------robot animations
var robotAnimWindow = select('#robotLottie'),
  robotAnimData = {
    wrapper: robotAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch1_robot.json',
  };

var robotAnim = bodymovin.loadAnimation(robotAnimData);
robotAnim.addEventListener('DOMLoaded', onRobotDOMLoaded);


//--------------agi animations
var agiAnimWindow = select('#agiLottie'),
  agiAnimData = {
    wrapper: agiAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch1_agi.json',
  };

var agiAnim = bodymovin.loadAnimation(agiAnimData);
agiAnim.addEventListener('DOMLoaded', onAgiDOMLoaded);


//--------------data animations
var dataAnimWindow = select('#dataLottie'),
  dataAnimData = {
    wrapper: dataAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch1_data.json',
  };

var dataAnim = bodymovin.loadAnimation(dataAnimData);
dataAnim.addEventListener('DOMLoaded', onDataDOMLoaded);


//--------------words animations
var wordsAnimWindow = select('#wordsLottie'),
  wordsAnimData = {
    wrapper: wordsAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: './json/ch1_words.json',
  };

var wordsAnim = bodymovin.loadAnimation(wordsAnimData);
wordsAnim.addEventListener('DOMLoaded', onWordsDOMLoaded);

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

// --------seed TLs-------------
var seedTL = new TimelineMax();
var carTL = new TimelineMax();
var moreTL = new TimelineMax();

function onSeedDOMLoaded(e) {
  seedTL.to({
    frame: 0
  }, 3, {
    frame: 76,
    onUpdate: function() {
      seedAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  carTL.to({
    frame: 76
  }, 3, {
    frame: 214,
    onUpdate: function() {
      seedAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  moreTL.to({
    frame: 214
  }, 3, {
    frame: seedAnim.totalFrames - 1,
    onUpdate: function() {
      seedAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

// --------robot TLs-------------
var notRobotTL = new TimelineMax();
var robotBrainTL = new TimelineMax();

function onRobotDOMLoaded(e) {
  notRobotTL.to({
    frame: 0
  }, 3, {
    frame: 76,
    onUpdate: function() {
      robotAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  robotBrainTL.to({
    frame: 76
  }, 3, {
    frame: robotAnim.totalFrames - 1,
    onUpdate: function() {
      robotAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

//--------agi TLs------------
var aniTL = new TimelineMax();
var agiTL = new TimelineMax();

function onAgiDOMLoaded(e) {
  aniTL.to({
    frame: 0
  }, 3, {
    frame: 37,
    onUpdate: function() {
      agiAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  agiTL.to({
    frame: 37
  }, 3, {
    frame: agiAnim.totalFrames - 1,
    onUpdate: function() {
      agiAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}


//--------data TLs------------
var data1TL = new TimelineMax();
var data2TL = new TimelineMax();
var data3TL = new TimelineMax();
var data4TL = new TimelineMax();

function onDataDOMLoaded(e) {
  data1TL.to({
    frame: 0
  }, 3, {
    frame: 76,
    onUpdate: function() {
      dataAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  data2TL.to({
    frame: 76
  }, 3, {
    frame: 152,
    onUpdate: function() {
      dataAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  data3TL.to({
    frame: 152
  }, 3, {
    frame: 229,
    onUpdate: function() {
      dataAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  data4TL.to({
    frame: 229
  }, 3, {
    frame: dataAnim.totalFrames - 1,
    onUpdate: function() {
      dataAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}



//--------words TLs------------
var algoTL = new TimelineMax();
var mlTL = new TimelineMax();
var dlTL = new TimelineMax();

function onWordsDOMLoaded(e) {
  algoTL.to({
    frame: 0
  }, 3, {
    frame: 72,
    onUpdate: function() {
      wordsAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  mlTL.to({
    frame: 72
  }, 3, {
    frame: 150,
    onUpdate: function() {
      wordsAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  dlTL.to({
    frame: 150
  }, 3, {
    frame: wordsAnim.totalFrames - 2,
    onUpdate: function() {
      wordsAnim.goToAndStop(Math.round(this.target.frame), true)
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


toggleAnimation(seedAnimWindow, false);
toggleAnimation(robotAnimWindow, false);
toggleAnimation(agiAnimWindow, false);
toggleAnimation(dataAnimWindow, false);
toggleAnimation(wordsAnimWindow, false);


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
      toggleAnimation(seedAnimWindow, true)
    } else {
      toggleAnimation(seedAnimWindow, false)
    }
  })
  .addTo(controller);

//-------------------------------------------------
//--------- SEED Animations -------------
//-------------------------------------------------
let seedScene = new ScrollMagic.Scene({
  triggerElement: "#text1",
  duration: '100%'
})
  .setTween(seedTL)
  .addTo(controller);

let carScene = new ScrollMagic.Scene({
    triggerElement: "#text2",
    duration: '100%'
  })
  .setTween(carTL)
  .addTo(controller);

let moreScene = new ScrollMagic.Scene({
    triggerElement: "#text3",
    duration: '100%'
  })
  .setTween(moreTL)
  .addTo(controller);

//-------------------------------------------------
//----------- Robot ANIMATIONS ---------------
//-------------------------------------------------
let notRobotScene = new ScrollMagic.Scene({
    triggerElement: "#text4",
    duration: '100%'
  })
  .setTween(notRobotTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(seedAnimWindow, true)
      toggleAnimation(robotAnimWindow, false)
    } else {
      toggleAnimation(seedAnimWindow, false)
      toggleAnimation(robotAnimWindow, true)
    }
  })
  .addTo(controller);

let robotBrainScene = new ScrollMagic.Scene({
    triggerElement: "#text5",
    duration: '100%'
  })
  .setTween(robotBrainTL)
  .addTo(controller);

//-------------------------------------------------
//----------- AGI ANIMATIONS ---------------
//-------------------------------------------------
let aniScene = new ScrollMagic.Scene({
    triggerElement: "#text6",
    duration: '100%'
  })
  .setTween(aniTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(robotAnimWindow, true)
      toggleAnimation(agiAnimWindow, false)
    } else {
      toggleAnimation(robotAnimWindow, false)
      toggleAnimation(agiAnimWindow, true)
    }
  })
  .addTo(controller);

let agiScene = new ScrollMagic.Scene({
    triggerElement: "#text7",
    duration: '100%'
  })
  .setTween(agiTL)
  .addTo(controller);


//-------------------------------------------------
//----------- DATA ANIMATIONS ---------------
//-------------------------------------------------
let data1Scene = new ScrollMagic.Scene({
    triggerElement: "#text8",
    duration: '100%'
  })
  .setTween(data1TL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(agiAnimWindow, true)
      toggleAnimation(dataAnimWindow, false)
    } else {
      toggleAnimation(agiAnimWindow, false)
      toggleAnimation(dataAnimWindow, true)
    }
  })
  .addTo(controller);

let data2Scene = new ScrollMagic.Scene({
    triggerElement: "#text9",
    duration: '100%'
  })
  .setTween(data2TL)
  .addTo(controller);

let data3Scene = new ScrollMagic.Scene({
    triggerElement: "#text10",
    duration: '100%'
  })
  .setTween(data3TL)
  .addTo(controller);

let data4Scene = new ScrollMagic.Scene({
    triggerElement: "#text11",
    duration: '100%'
  })
  .setTween(data4TL)
  .addTo(controller);


//-------------------------------------------------
//----------- WORDS ANIMATIONS ---------------
//-------------------------------------------------
let mlScene = new ScrollMagic.Scene({
    triggerElement: "#text12",
    duration: '100%'
  })
  .setTween(algoTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(dataAnimWindow, true)
      toggleAnimation(wordsAnimWindow, false)
    } else {
      toggleAnimation(dataAnimWindow, false)
      toggleAnimation(wordsAnimWindow, true)
    }
  })
  .addTo(controller);

let dlScene = new ScrollMagic.Scene({
    triggerElement: "#text13",
    duration: '100%'
  })
  .setTween(mlTL)
  .addTo(controller);

let algoScene = new ScrollMagic.Scene({
    triggerElement: "#text14",
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
      toggleAnimation(wordsAnimWindow, true)
    } else {
      toggleAnimation(wordsAnimWindow, false)
    }
  })
  // .addIndicators({name: "ending"})
  .addTo(controller);
