
var open = document.getElementById("open");
var stick1 = document.getElementById("stick-1");
var stick2 = document.getElementById("stick-2");
var stick3 = document.getElementById("stick-3");
function op(){
    console.log (stick2.offsetWidth);
    if(stick2.offsetWidth == 25) {
        stick2.style.width = 0;
        stick1.style.top = "5px";
        stick3.style.top = "5px";
        stick1.style.transform = "rotate(45deg)";
        stick3.style.transform = "rotate(-45deg)";   
    }
      if(stick2.offsetWidth == 0) {
        stick2.style.width = "25px";
        stick1.style.transform = "rotate(0deg)";
        stick3.style.transform = "rotate(0deg)";  
        stick1.style.top = 0;
        stick3.style.top = "10px";   
    }
}

//=================================MAIN ANIMATION==================================================
var earth = document.getElementById("earth");
var arms = document.getElementById("arms");
var satellite = document.getElementById("satellite");
var ball = document.getElementById("ball");
var baloon = document.getElementById("baloon");
var bag = document.getElementById("bag");
var telephone = document.getElementById("telephone");
var truck = document.getElementById("truck");
console.log(truck.offsetWidth);
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
                console.log(truck.offsetWidth);
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
function myFunction(event){
    document.getElementById("demo").innerHTML = "x = " + event.offsetX + " : y = " + event.offsetY;
    console.log(425 - 306);
    console.log(425 - 260);
}