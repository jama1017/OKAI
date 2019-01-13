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
  toggleAnimation(brainNerveAnimation, false)
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

// ---------------------------------------------------------
// ------------------ Testing lottie and bodymovin ---------
// --------------------------------------------------------
var animationWindow = select('#lottie'),
  animData = {
  wrapper: animationWindow,
  animType: 'svg',
  loop: false,
  prerender: true,
  autoplay: false,
  path: './ch3_neuron.json',
};

var animationWindow2 = select('#lottie2');
var animData2 = {
  wrapper: animationWindow2,
  animType: 'svg',
  loop: false,
  prerender: true,
  autoplay: false,
  path: './ch3_humanDetector.json',
}

var anim = bodymovin.loadAnimation(animData);
anim.addEventListener('DOMLoaded', onDOMLoaded);

var anim2 = bodymovin.loadAnimation(animData2);
anim2.addEventListener('DOMLoaded', onDOMLoaded2);

var mytl = new TimelineMax();
var mytl2 = new TimelineMax();

function onDOMLoaded(e){
  var proxy1 = {frame: 0};
  mytl.to(proxy1, 3, {
    frame: anim.totalFrames-1,
    onUpdate: function() {
      anim.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

function onDOMLoaded2(e){
  mytl2.to({frame: 0}, 3, {
    frame: anim2.totalFrames-1,
    onUpdate: function() {
      anim2.goToAndStop(Math.round(this.target.frame), true)
    },
    ease: Linear.easeNone
  })
}

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


let sigmoidScene = new ScrollMagic.Scene({triggerElement: "#nerveText",
                                  duration: '100%'})
                                    .setTween(mytl)
                                    // .on("enter", function() {
                                    //     toggleAnimation(brainNerveAnimation, true)
                                    //     toggleAnimation(neuronAnimation, false)
                                    //     toggleAnimation(appanananAnimation, false)
                                    //   })
                                    .setPin("#lottie")
                                    .addIndicators({name: "sigmoidLottie"})
                                    .addTo(controller);

let sigmoidScene2 = new ScrollMagic.Scene({triggerElement: "#neuron1Text",
                                  duration: '100%'})
                                    .setTween(mytl2)
                                    .on("enter", function() {
                                        toggleAnimation(animationWindow, false)
                                     })
                                    .on("leave", function() {
                                        toggleAnimation(animationWindow, true)
                                    })
                                    .setPin("#lottie2")
                                    .addIndicators({name: "2sigmoidLottie"})
                                    .addTo(controller);
