'use strict';
var array = ['#4CAF50', '#EC3691', '#EC3636', '#F78716', '#F7F716', '#1616F7', '#8716F7', '#444', '#4A2807', '#F9F9F9' ];

var grid = document.querySelector("#grid");
var colors = document.querySelector("#color-container");
var spans = document.querySelectorAll('buttons');
var start = 'white';

function paint(array){
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("style", "background-color: " + array[i]);
  }
}

function assign() {
  if (event.target !== event.currentTarget) {
    start = event.target.getAttribute("style");
    console.log(start);
}};

function change() {
    if (event.target !== event.currentTarget) {
       event.target.setAttribute("style", start);
}};



paint(array);
grid.addEventListener("mousedown", change, false);
colors.addEventListener("mousedown", assign, false);
