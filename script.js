
var open = document.getElementById("open");
var stick1 = document.getElementById("stick-1");
var stick2 = document.getElementById("stick-2");
var stick3 = document.getElementById("stick-3");
var openEx = document.getElementById("open-ex");
function op(){
    console.log(openEx.offsetHeight);
    if( stick2.offsetWidth == 25 || openEx.offsetHeight == 0) {
        stick2.style.width = 0;
        stick1.style.top = "5px";
        stick3.style.top = "5px";
        stick1.style.transform = "rotate(45deg)";
        stick3.style.transform = "rotate(-45deg)"; 
        openEx.style.height = "418px";
    }
      if( stick2.offsetWidth == 0 || openEx.offsetHeight == 418) {
        
        stick2.style.width = "25px";
        stick1.style.transform = "rotate(0deg)";
        stick3.style.transform = "rotate(0deg)";  
        stick1.style.top = 0;
        stick3.style.top = "10px";  
        openEx.style.height = 0;
    }
}
 function myFunction(x) {
  if (x.matches) { // If media query matches
      openEx.style.height = 0;
  } 
     else {
         if(stick2.offsetWidth == 0) {
             openEx.style.height = "418px";
         }
     }
}

var x = window.matchMedia("(min-width: 851px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
//=================================MAIN ANIMATION==================================================
/*
var earth = document.getElementById("earth");
var arms = document.getElementById("arms");
var satellite = document.getElementById("satellite");
var ball = document.getElementById("ball");
var baloon = document.getElementById("baloon");
var bag = document.getElementById("bag");
var telephone = document.getElementById("telephone");
var truck = document.getElementById("truck");

window.onscroll = function(e) {
    console.log(this.oldScroll > this.scrollY);
        if(window.pageYOffset == 0) {
            truck.style.right = 0;
            truck.style.top = 0;
            telephone.style.top = 0;
            telephone.style.right = 0;
             bag.style.top = 0;
            bag.style.right = 0;
             baloon.style.top = 0;
             baloon.style.right = 0;
             ball.style.top = 0;
             ball.style.right = 0;
             satellite.style.top = 0;
             satellite.style.right = 0;
        }
        
        if(window.pageYOffset > 0  && window.pageYOffset <= 100) { 
            truck.style.right = truck.offsetWidth / 100 * 15 / 4 + "px";
            truck.style.top = truck.offsetWidth / 100 * -1 + "px";
            telephone.style.right = truck.offsetWidth / 100 *  (14 / 4) + "px";
            telephone.style.top = truck.offsetWidth / 100 * -2 + "px";
            bag.style.right = truck.offsetWidth / 100 * 3 + "px";
            bag.style.top = truck.offsetWidth / 100 * -4 + "px";
            baloon.style.right = truck.offsetWidth / 100 * 2 + "px";
            baloon.style.top = truck.offsetWidth / 100 * -5 + "px";
            ball.style.right = 0;
            ball.style.top = truck.offsetWidth / 100 * - 8 + "px";
            satellite.style.right = truck.offsetWidth / 100 * - 1 + "px";
            satellite.style.top = truck.offsetWidth / 100 * - 6 + "px";
       }
    
        if(window.pageYOffset > 100 && window.pageYOffset <= 200) { 
        
            truck.style.right = truck.offsetWidth / 100 * 7.5 + "px";
            truck.style.top = truck.offsetWidth / 100 * -2 + "px";
             telephone.style.right = truck.offsetWidth / 100 *  7 + "px";
            telephone.style.top = truck.offsetWidth / 100 * -4.5 + "px";
            bag.style.right = truck.offsetWidth / 100 * 5.5 + "px";
            bag.style.top = truck.offsetWidth / 100 * - 7.5 + "px";
            baloon.style.right = truck.offsetWidth / 100 * 3.5 + "px";
            baloon.style.top = truck.offsetWidth / 100 * - 10 + "px";
            ball.style.right = -1;
            ball.style.top = truck.offsetWidth / 100 * - 12.5 + "px";
            satellite.style.right = truck.offsetWidth / 100 * - 1.5 + "px";
            satellite.style.top = truck.offsetWidth / 100 * - 11.5 + "px";
       }
       
    
           if(window.pageYOffset > 200 && window.pageYOffset <= 300 ) { 
                    truck.style.right = truck.offsetWidth / 100 * 15 * 0.75 + "px";
            truck.style.top = truck.offsetWidth / 100 * - 4 * 0.75 + "px";
             telephone.style.right = truck.offsetWidth / 100 *  14 * 0.75 + "px";
            telephone.style.top = truck.offsetWidth / 100 * -9 * 0.75 + "px";
            bag.style.right = truck.offsetWidth / 100 * 11 * 0.75 + "px";
            bag.style.top = truck.offsetWidth / 100 * - 15 * 0.75 + "px";
            baloon.style.right = truck.offsetWidth / 100 * 7 * 0.75 + "px";
            baloon.style.top = truck.offsetWidth / 100 * - 15 + "px";
            
            ball.style.right = truck.offsetWidth / 100 * - 2 * 0.75 + "px";
            ball.style.top = truck.offsetWidth / 100 * - 25 * 0.75 + "px";
            satellite.style.right = truck.offsetWidth / 100 * - 3 * 0.75 + "px";
            satellite.style.top = truck.offsetWidth / 100 * - 23 * 0.75 + "px";
       }
       
       
       if(window.pageYOffset > 300 && window.pageYOffset <= 400) { 
            truck.style.right = truck.offsetWidth / 100 * 15 + "px";
            truck.style.top = truck.offsetWidth / 100 * - 3 + "px";
             telephone.style.right = truck.offsetWidth / 100 *  14 + "px";
            telephone.style.top = truck.offsetWidth / 100 * -9 + "px";
            bag.style.right = truck.offsetWidth / 100 * 11 + "px";
            bag.style.top = truck.offsetWidth / 100 * - 15 + "px";
            baloon.style.right = truck.offsetWidth / 100 * 7 + "px";
            baloon.style.top = truck.offsetWidth / 100 * - 20 + "px";
            ball.style.right = truck.offsetWidth / 100 * - 2 + "px";
            ball.style.top = truck.offsetWidth / 100 * - 25 + "px";
            satellite.style.right = truck.offsetWidth / 100 * - 3 + "px";
            satellite.style.top = truck.offsetWidth / 100 * - 23 + "px";
       }
           if(window.pageYOffset > 400 && window.pageYOffset <= 500) { 
            truck.style.right = truck.offsetWidth / 100 * 17 + "px";
            truck.style.top = truck.offsetWidth / 100 * - 4 + "px";
             telephone.style.right = truck.offsetWidth / 100 *  15 + "px";
            telephone.style.top = truck.offsetWidth / 100 * -10 + "px";
       }      
       if(window.pageYOffset > 500 && window.pageYOffset <= 600) { 
            truck.style.right = truck.offsetWidth / 100 * 19 + "px";
            truck.style.top = truck.offsetWidth / 100 * - 5 + "px";
             telephone.style.right = truck.offsetWidth / 100 *  16 + "px";
            telephone.style.top = truck.offsetWidth / 100 * -11 + "px";
       }
    
    this.oldScroll = this.scrollY;
}
//==============================================================FORM=============================================================

var modal = document.getElementById('id01');
window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
*/
//========================================TODDY===================================================
var writerToddy = document.getElementById ("writer-toddy");
var demoToddy = document.getElementById ("demo-toddy");
var t = 0;
var txtToddy = "Find out more";

writerToddy.addEventListener("mouseover", typeWriterToddy);

function typeWriterToddy(){
    if (t < txtToddy.length) {
        demoToddy.innerHTML += txtToddy.charAt(t);
        t++;
        setTimeout(typeWriterToddy, 50);
    }
}
//=========================================SEGMENT==========================

var writerSegment = document.getElementById ("writer-segment");
var demoSegment = document.getElementById ("demo-segment");
var s = 0;
var txtSegment = "Find out more";

writerSegment.addEventListener("mouseover", typeWriterSegment);

function typeWriterSegment(){
    if (s < txtSegment.length) {
        demoSegment.innerHTML += txtSegment.charAt(s);
        s++;
        setTimeout(typeWriterSegment, 50);
    }
}


//==============================================UDK=====================================


var writerUdk = document.getElementById ("writer-udk");
var demoUdk = document.getElementById ("demo-udk");
var u = 0;
var txtUdk = "Find out more";

writerUdk.addEventListener("mouseover", typeWriterUdk);

function typeWriterUdk(){
    if (u < txtUdk.length) {
        demoUdk.innerHTML += txtUdk.charAt(u);
        u++;
        setTimeout(typeWriterUdk, 50);
    }
}










