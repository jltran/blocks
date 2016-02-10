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
    //fly in from left on load (and scale opacity)
    TweenLite.from(phoneObject, 1, {x: '-=50px', autoAlpha: 0});
  });
}

function animateMillennials(){
  //grab all svgs for second block (since there are multiple copies...)
  var millenialWholeSvgs = [].slice.call(document.getElementsByClassName('millennials'));
  millenialWholeSvgs.forEach(function(thisMillennialSvg){
    //grab inner content and initialize timeline
    var svgDoc = thisMillennialSvg.contentDocument;
    var tl = new TimelineLite();
    var phoneOrder = [3, 0, 4, 1];
    for (var i in phoneOrder){
      //raise phone by 25px
      var millennialPhone = svgDoc.getElementById('millennials-' + phoneOrder[i]);
      tl.to(millennialPhone, 1, {y: '-=25px'});
    }
    //raise underline
    var underline = svgDoc.getElementById('millennials_underline');
    tl.to(underline, 0.5, {y: '-=25px'});
    //lower entire svg
    tl.to(thisMillennialSvg, 1, {y: '+=25px'});
  });
}

function animateDataTransfer(){
  var svg = document.getElementsByClassName('data-transfer')[0];
  var svgDoc = svg.contentDocument;
  var tl = new TimelineLite({onComplete:function() {
                              this.restart();
                            }});

  //animate circles to enter and exit phone
  var dataEntry = svgDoc.getElementById('dataentry');
  tl.to(dataEntry, 1, {x: '+=58px', opacity: 0});

  var dataExit = svgDoc.getElementById('dataexit');
  tl.to(dataExit, 1, {x: '+=58px', opacity: 0}, '-=1');

  var connected = svgDoc.getElementById('connected-icon');
  tl.to(connected, 2, {opacity: 1}, '-=1');
  tl.to(connected, 1, {opacity: 0});
}

//run animations on load
window.onload = function(){
  animatePhone();
  animateMillennials();
  animateDataTransfer();
};
