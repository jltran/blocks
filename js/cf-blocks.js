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
  console.log(phoneSvg);
  phoneSvg.forEach(function(thisPhoneSvg){
    var svgDoc = thisPhoneSvg.contentDocument;
    var phoneObject = svgDoc.getElementById('phone');
    TweenLite.from(phoneObject, 1, {x: '-=200px', autoAlpha: 0});
  });
}

window.onload = animatePhone;

//beforeunload <- should remove event handlers
