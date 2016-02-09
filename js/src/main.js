// main.js
var blocks = [].slice.call(document.getElementsByClassName('block'));

function resizeBlocks(){
  blocks.forEach(function(d){
    d.setAttribute('style', 'height:' + d.offsetWidth + 'px');
  });
}

window.onresize = resizeBlocks;
resizeBlocks();
