/**
cf-blocks - 0.1.0
http://jason.lt
Copyright (c) 2016 Jason Tran
License: MIT
*/
// main.js
//Size blocks
var blocks = [].slice.call(document.getElementsByClassName('block'));

function resizeBlocks(){
  blocks.forEach(function(d){
    d.setAttribute('style', 'height:' + d.offsetWidth + 'px');
  });
}

window.onresize = resizeBlocks;
resizeBlocks();
