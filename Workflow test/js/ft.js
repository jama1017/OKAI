let select = function(s) {
    return document.querySelector(s);
};

var animationWindow = select('#lottie'),
  animData = {
  wrapper: animationWindow,
  animType: 'svg',
  loop: true,
  prerender: true,
  autoplay: true,
  path: './filterTest.json',
};

var anim = bodymovin.loadAnimation(animData);
anim.play();
