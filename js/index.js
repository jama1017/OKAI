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
    path: '/json/homepage.json'
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
  }, 12, {
    frame: openingAnim.totalFrames - 1,
    onUpdate: function() {
      openingAnim.goToAndStop(Math.round(this.target.frame), true)
    },
    repeat: -1,
    // yoyo: true,
    ease: Linear.easeNone
  })
}
