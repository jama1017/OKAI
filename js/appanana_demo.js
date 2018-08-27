select = function(s) {
  return document.querySelector(s);
};

selectAll = function(s) {
  return document.querySelectorAll(s);
};

// graphic groups
// let apple_perceptron = select('#apple_perceptron');
// let appanana_breakdown = select('#appanana_breakdown');

// appanana_breakdown graphics
// let apple = select('#apple');
// let banana = select('#banana');
//
// let topLine = select('#topLine');
// let botLine = select('#botLine');
//
// let red = select('#red');
// let yellow = select('#yellow');
//
// let topAnd = select('#topAnd');
// let botAnd = select('#botAnd');
//
// let sphere = select('#sphere');
// let cylinder = select('#cylinder');
//
// //perceptron base
// let appanana_topSig = select('#appanana_topSig');
// let appanana_botSig = select('#appanana_botSig');
// let appanana_cenSig = select('#appanana_cenSig');
// let appanana_outSig = select('#appanana_outSig');
//
// let appanana_topNeuron = select('#appanana_topNeuron');
// let appanana_botNeuron = select('#appanana_botNeuron');
// let appanana_cenNeuron = select('#appanana_cenNeuron');
// let appanana_outNeuron = select('#appanana_outNeuron');
//
// let appanana_topTransit = select('#appanana_topTransit');
// let appanana_botTransit = select('#appanana_botTransit');
// let appanana_outTransit = select('#appanana_outTransit');


let fruitsTL = new TimelineMax();
fruitsTL.staggerFrom([apple, banana], 1, {opacity: 0}, 0.5);

let appleAppearTL = new TimelineMax();
appleAppearTL.from([topLine, topAnd], 0.5, {opacity: 0})
             .staggerFrom([red, sphere], 1, {opacity: 0}, 0.3);

let bananaAppearTL = new TimelineMax();
bananaAppearTL.from([botLine, botAnd], 0.5, {opacity: 0})
              .staggerFrom([yellow, cylinder], 1, {opacity: 0}, 0.3);


// -----------------------------------------------------------------------------
// -------------------apple perceptron animation--------------------------------
// -----------------------------------------------------------------------------

let transitionToAppleTL = new TimelineMax();
transitionToAppleTL.to(appanana_breakdown, 0.5, {opacity:0})
                   .from([perceptron_base, apple_perceptron], 0.5, {opacity:0});

let sphereSigInTL = new TimelineMax();
sphereSigInTL.to(appanana_topSig, 0.7, {scale: 0, transformOrigin: '110%, 110%'}, "appleSigIn")
             .to(sphere_s, 0.5, {scale: 0, opacity: 0, transformOrigin: '110%, 110%'}, "appleSigIn")
             .fromTo(appanana_topTransit, 1.2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "appleSigIn");

let redSigInTL = new TimelineMax();
redSigInTL.to(appanana_botSig, 0.7, {scale: 0, transformOrigin: '110%, 0%'}, "redSigIn")
          .to(red_s, 0.5, {scale: 0, opacity: 0, transformOrigin: '110%, 0%'}, "redSigIn")
          .fromTo(appanana_botTransit, 1.2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "redSigIn");

let appleQuestionTL = new TimelineMax();
appleQuestionTL.from(appanana_cenSig, 1, {scale: 0, opacity: 0, transformOrigin: '-20%, 50%'}, "qIn")
               .from(question, 1, {scale: 0, opacity: 0, transformOrigin: '-200%, 50%'}, "qIn")
               .fromTo([appanana_cenNeuron, appanana_cenSig, question], 1, {y:-3}, {y:3,
                  ease:RoughEase.ease.config({
                    strength:6,
                    points:12,
                    template:Linear.easeNone,
                    randomize:false
                  }) , clearProps:"y"});

let appleSigOutTL = new TimelineMax();
appleSigOutTL.to(appanana_cenSig, 2, {scale: 0, transformOrigin: '110%, 50%', smoothOrigin:true}, "appleSigOut")
           .to(question, 1.5, {opacity: 0, scale: 0, transformOrigin: '200%, 50%'}, "appleSigOut")
           .fromTo(appanana_outTransit, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "appleSigOut")
           .fromTo(appanana_outSig, 1, {scale: 0, transformOrigin: '-20%, 50%'}, {scale: 1}, "appleSigOut+=1")
           .from(apple_s, 0.9, {scale: 0, opacity: 0, transformOrigin: '-50%, 50%'}, "appleSigOut+=1.1");


// -----------------------------------------------------------------------------
// -------------------banana perceptron animation-------------------------------
// -----------------------------------------------------------------------------

let appleToBananaTL = new TimelineMax();

appleToBananaTL.to([apple_perceptron, perceptron_base], 0.5, {opacity: 0})
               .from([banana_perceptron, perceptron_base_2], 0.5, {opacity: 0});


let cylinderSigInTL = new TimelineMax();
cylinderSigInTL.to(appanana_topSig_2, 0.7, {scale: 0, transformOrigin: '110%, 110%'}, "bananaSigIn")
               .to(cylinder_s, 0.5, {scale: 0, opacity: 0, transformOrigin: '210%, 110%'}, "bananaSigIn")
               .fromTo(appanana_topTransit_2, 1.2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "bananaSigIn");

let yellowSigInTL = new TimelineMax();
yellowSigInTL.to(appanana_botSig_2, 0.7, {scale: 0, transformOrigin: '110%, 0%'}, "yellowSigIn")
             .to(yellow_s, 0.5, {scale: 0, opacity: 0, transformOrigin: '110%, 0%'}, "yellowSigIn")
             .fromTo(appanana_botTransit_2, 1.2, {drawSVG:'0% 10%'}, {drawSVG: "90%, 100%"}, "yellowSigIn");

let bananaQuestionTL = new TimelineMax();
bananaQuestionTL.from(appanana_cenSig_2, 1, {scale: 0, opacity: 0, transformOrigin: '-20%, 50%'}, "bqIn")
                .from(question_2, 1, {scale: 0, opacity: 0, transformOrigin: '-200%, 50%'}, "bqIn")
                .fromTo([appanana_cenNeuron_2, appanana_cenSig_2, question_2], 1, {y:-3}, {y:3,
                   ease:RoughEase.ease.config({
                     strength:6,
                     points:12,
                     template:Linear.easeNone,
                     randomize:false
                   }) , clearProps:"y"});

let bananaSigOutTL = new TimelineMax();
bananaSigOutTL.to(appanana_cenSig_2, 2, {scale: 0, transformOrigin: '110%, 50%', smoothOrigin:true}, "appleSigOut")
             .to(question_2, 1.5, {opacity: 0, scale: 0, transformOrigin: '200%, 50%'}, "appleSigOut")
             .fromTo(appanana_outTransit_2, 2, {drawSVG: "90%, 100%"}, {drawSVG: "0% 10%"}, "appleSigOut")
             .fromTo(appanana_outSig_2, 1, {scale: 0, transformOrigin: '-20%, 50%'}, {scale: 1}, "appleSigOut+=1")
             .from(banana_s, 0.9, {scale: 0, opacity: 0, transformOrigin: '-50%, 50%'}, "appleSigOut+=1.1");
// -----------------------------------------------------------------------------
// -------------------master timelines -----------------------------------------
// -----------------------------------------------------------------------------


let breakdownMasterTL = new TimelineMax({repeat: -1});

breakdownMasterTL.add(fruitsTL)
                 .add(appleAppearTL)
                 .add(bananaAppearTL)
                 .add(transitionToAppleTL)
                 .add(sphereSigInTL, "aSigIn")
                 .add(redSigInTL, "aSigIn")
                 .add(appleQuestionTL, "-=0.5")
                 .add(appleSigOutTL)
                 .add(appleToBananaTL)
                 .add(cylinderSigInTL, "bSigIn")
                 .add(yellowSigInTL, "bSigIn")
                 .add(bananaQuestionTL, "-=0.5")
                 .add(bananaSigOutTL);

GSDevTools.create();
