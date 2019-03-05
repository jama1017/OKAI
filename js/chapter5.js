$(document).ajaxComplete(function() {
    $('#navLinkToEn').attr("href", "/chapter5.html");
    $('#navLinkToZh').attr("href", "/zh/chapter5.html");
});
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
    path: '/json/ch5_opening.json'
  };

var openingAnim = bodymovin.loadAnimation(openingAnimData);
openingAnim.addEventListener('DOMLoaded', onOpeningDOMLoaded);
openingAnim.setSpeed(1);

//---------------fnn animation
var fnnAnimWindow = select('#fnnLottie'),
  fnnAnimData = {
    wrapper: fnnAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch5_fnn.json',
  };

var fnnAnim = bodymovin.loadAnimation(fnnAnimData);
fnnAnim.addEventListener('DOMLoaded', onFnnDOMLoaded);


//--------------temp animations
var tempAnimWindow = select('#tempLottie'),
  tempAnimData = {
    wrapper: tempAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch5_temperature.json',
  };

var tempAnim = bodymovin.loadAnimation(tempAnimData);
tempAnim.addEventListener('DOMLoaded', onTempDOMLoaded);

//--------------complex animations
var complexAnimWindow = select('#complexLottie'),
  complexAnimData = {
    wrapper: complexAnimWindow,
    animType: 'svg',
    loop: false,
    prerender: true,
    autoplay: false,
    path: '/json/ch5_complex.json',
  };

var complexAnim = bodymovin.loadAnimation(complexAnimData);
complexAnim.addEventListener('DOMLoaded', onComplexDOMLoaded);


//----------------------------------------------------------------------------
//-----------------------------timelines--------------------------------------
//----------------------------------------------------------------------------

//----------opening TLs---------
var openingTL = new TimelineMax();

function onOpeningDOMLoaded(e) {
  openingTL.to({
    frame: 0
  }, 4, {
    frame: openingAnim.totalFrames - 1,
    onUpdate: function() {
      openingAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    repeat: -1,
    yoyo: true,
    ease: Linear.easeNone
  })
}

// --------Fnn TLs-------------
var simpleTL = new TimelineMax();
var inputTL = new TimelineMax();
var outputTL = new TimelineMax();

function onFnnDOMLoaded(e) {
  simpleTL.to({
    frame: 0
  }, 3, {
    frame: 36,
    onUpdate: function() {
      fnnAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  inputTL.to({
    frame: 50
  }, 3, {
    frame: 110,
    onUpdate: function() {
      fnnAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  outputTL.to({
    frame: 110
  }, 3, {
    frame: fnnAnim.totalFrames - 1,
    onUpdate: function() {
      fnnAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

// --------Temp TLs-------------
var tmrTL = new TimelineMax();
var todayTL = new TimelineMax();
var modelTL = new TimelineMax();
var reluTL = new TimelineMax();
var whyTL = new TimelineMax();

function onTempDOMLoaded(e) {
  tmrTL.to({
    frame: 0
  }, 3, {
    frame: 22,
    onUpdate: function() {
      tempAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  todayTL.to({
    frame: 22
  }, 3, {
    frame: 124,
    onUpdate: function() {
      tempAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  modelTL.to({
    frame: 124
  }, 3, {
    frame: 229,
    onUpdate: function() {
      tempAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  reluTL.to({
    frame: 229
  }, 3, {
    frame: 275,
    onUpdate: function() {
      tempAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  whyTL.to({
    frame: 275
  }, 3, {
    frame: tempAnim.totalFrames - 1,
    onUpdate: function() {
      tempAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

//--------Complex TLs------------
var muchTL = new TimelineMax();
var transTL = new TimelineMax();

function onComplexDOMLoaded(e) {
  muchTL.to({
    frame: 0
  }, 3, {
    frame: 87,
    onUpdate: function() {
      complexAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })

  transTL.to({
    frame: 87
  }, 3, {
    frame: complexAnim.totalFrames - 1,
    onUpdate: function() {
      complexAnim.goToAndStop(Math.round(this.target.frame), true)
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


toggleAnimation(fnnAnimWindow, false);
toggleAnimation(tempAnimWindow, false);
toggleAnimation(complexAnimWindow, false);


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
      toggleAnimation(fnnAnimWindow, true)
    } else {
      toggleAnimation(fnnAnimWindow, false)
    }
  })
  .addTo(controller);

//-------------------------------------------------
//--------- fnn Animations -------------
//-------------------------------------------------
let seedScene = new ScrollMagic.Scene({
    triggerElement: "#text1",
    duration: '100%'
  })
  .setTween(simpleTL)
  .addTo(controller);

let carScene = new ScrollMagic.Scene({
    triggerElement: "#text2",
    duration: '100%'
  })
  .setTween(inputTL)
  .addTo(controller);

let moreScene = new ScrollMagic.Scene({
    triggerElement: "#text3",
    duration: '100%'
  })
  .setTween(outputTL)
  .addTo(controller);

//-------------------------------------------------
//----------- temp ANIMATIONS ---------------
//-------------------------------------------------
let tmrScene = new ScrollMagic.Scene({
    triggerElement: "#text4",
    duration: '100%'
  })
  .setTween(tmrTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(fnnAnimWindow, true)
      toggleAnimation(tempAnimWindow, false)
    } else {
      toggleAnimation(fnnAnimWindow, false)
      toggleAnimation(tempAnimWindow, true)
    }
  })
  .addTo(controller);

let todayScene = new ScrollMagic.Scene({
    triggerElement: "#text5",
    duration: '100%'
  })
  .setTween(todayTL)
  .addTo(controller);

let modelScene = new ScrollMagic.Scene({
    triggerElement: "#text6",
    duration: '100%'
  })
  .setTween(modelTL)
  .addTo(controller);

let reluScene = new ScrollMagic.Scene({
    triggerElement: "#text7",
    duration: '100%'
  })
  .setTween(reluTL)
  .addTo(controller);

let whyScene = new ScrollMagic.Scene({
    triggerElement: "#text8",
    duration: '100%'
  })
  .setTween(whyTL)
  .addTo(controller);
//-------------------------------------------------
//----------- complex ANIMATIONS ---------------
//-------------------------------------------------
let data1Scene = new ScrollMagic.Scene({
    triggerElement: "#text9",
    duration: '100%'
  })
  .setTween(muchTL)
  .on("start", function(event) {
    var direction = event.scrollDirection;
    if (direction == "REVERSE") {
      toggleAnimation(tempAnimWindow, true)
      toggleAnimation(complexAnimWindow, false)
    } else {
      toggleAnimation(tempAnimWindow, false)
      toggleAnimation(complexAnimWindow, true)
    }
  })
  .addTo(controller);

let data2Scene = new ScrollMagic.Scene({
    triggerElement: "#text10",
    duration: '100%'
  })
  .setTween(transTL)
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
      toggleAnimation(complexAnimWindow, true)
    } else {
      toggleAnimation(complexAnimWindow, false)
    }
  })
  // .addIndicators({name: "ending"})
  .addTo(controller);
