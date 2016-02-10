/**
cf-blocks - 0.1.0
http://jason.lt
Copyright (c) 2016 Jason Tran
License: MIT
*/
// main.js
//Size blocks
var blocks = [].slice.call(document.getElementsByClassName('block'));

//set block height equal to width. re-run on window resize.
function resizeBlocks(){
  blocks.forEach(function(d){
    d.setAttribute('style', 'height:' + d.offsetWidth + 'px');
  });
}
window.onresize = resizeBlocks;
resizeBlocks();

//Animate using gsap
function animatePhone(){
  var phoneSvg = [].slice.call(document.getElementsByClassName('phone-svg'));
  phoneSvg.forEach(function(thisPhoneSvg){
    var svgDoc = thisPhoneSvg.contentDocument;
    var phoneObject = svgDoc.getElementById('phone');
    TweenLite.from(phoneObject, 1, {x: '-=200px', autoAlpha: 0});
  });
}

function animateMillennials(){
  var millenialWholeSvgs = [].slice.call(document.getElementsByClassName('millennials'));
  millenialWholeSvgs.forEach(function(thisMillennialSvg){
    var svgDoc = thisMillennialSvg.contentDocument;
    var tl = new TimelineLite();
    var phoneOrder = [3, 0, 4, 1];
    for (var i in phoneOrder){
      var millennialPhone = svgDoc.getElementById('millennials-' + phoneOrder[i]);
      tl.to(millennialPhone, 1, {y: '-=25px'});
    }
    var underline = svgDoc.getElementById('millennials_underline');
    tl.to(underline, 1, {y: '-=25px'});
    tl.to(thisMillennialSvg, 1, {y: '+=25px'});
  });
}

window.onload = function(){
  animatePhone();
  animateMillennials();
};

//beforeunload <- should remove event handlers
