 var i = 0;
var txt = 'Find out more';
var speed = 50;
var demo = document.getElementById("demo");

function typeWriter() {
  if (i < txt.length) {
    demo.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}   
   var i1 = 0;
var txt1 = 'Find out more';
var speed1 = 50;
var demo1 = document.getElementById("demo1");

function typeWriter1() {
  if (i1 < txt1.length) {
    demo1.innerHTML += txt1.charAt(i1);
    i1++;
    setTimeout(typeWriter1, speed1);
  }
} 