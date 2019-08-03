var open = document.getElementById("open");
var stick1 = document.getElementById("stick-1");
var stick2 = document.getElementById("stick-2");
var stick3 = document.getElementById("stick-3");
var openEx = document.getElementById("open-ex");
function op() {
  console.log(openEx.offsetHeight);
  if (stick2.offsetWidth == 25 || openEx.offsetHeight == 0) {
    stick2.style.width = 0;
    stick1.style.top = "5px";
    stick3.style.top = "5px";
    stick1.style.transform = "rotate(45deg)";
    stick3.style.transform = "rotate(-45deg)";
    openEx.style.height = "418px";
  }
  if (stick2.offsetWidth == 0 || openEx.offsetHeight == 418) {
    stick2.style.width = "25px";
    stick1.style.transform = "rotate(0deg)";
    stick3.style.transform = "rotate(0deg)";
    stick1.style.top = 0;
    stick3.style.top = "10px";
    openEx.style.height = 0;
  }
}
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    openEx.style.height = 0;
  } else {
    if (stick2.offsetWidth == 0) {
      openEx.style.height = "418px";
    }
  }
}

var x = window.matchMedia("(min-width: 851px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
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
var writerToddy = document.getElementById("writer-toddy");
var demoToddy = document.getElementById("demo-toddy");
var t = 0;
var txtToddy = "Find out more";

writerToddy.addEventListener("mouseover", typeWriterToddy);

function typeWriterToddy() {
  if (t < txtToddy.length) {
    demoToddy.innerHTML += txtToddy.charAt(t);
    t++;
    setTimeout(typeWriterToddy, 50);
  }
}
//=========================================SEGMENT==========================

var writerSegment = document.getElementById("writer-segment");
var demoSegment = document.getElementById("demo-segment");
var s = 0;
var txtSegment = "Find out more";

writerSegment.addEventListener("mouseover", typeWriterSegment);

function typeWriterSegment() {
  if (s < txtSegment.length) {
    demoSegment.innerHTML += txtSegment.charAt(s);
    s++;
    setTimeout(typeWriterSegment, 50);
  }
}

//==============================================UDK=====================================

var writerUdk = document.getElementById("writer-udk");
var demoUdk = document.getElementById("demo-udk");
var u = 0;
var txtUdk = "Find out more";

writerUdk.addEventListener("mouseover", typeWriterUdk);

function typeWriterUdk() {
  if (u < txtUdk.length) {
    demoUdk.innerHTML += txtUdk.charAt(u);
    u++;
    setTimeout(typeWriterUdk, 50);
  }
}
//======================================SLIDER======================================

/*
 var slideIndex = 0;
    
function plusDivs(){
       var mySlides = document.getElementsByClassName("mySlides");
    for(var i = 0; i < mySlides.length; i++){ 
        
    slideIndex++;
    //if (slideIndex > mySlides.length -1) {slideIndex = 0;}
    mySlides[slideIndex ].style.display = "flex";
    mySlides[slideIndex ].style.left = 0;
    mySlides[slideIndex -1].style.left = "-800px";
    mySlides[slideIndex + 1].style.left = "800px";   
}
}
 function minusDivs(){
     for (i = 0; i < mySlides.length; i++){mySlides[i].style.display = "none";                                      }
    slideIndex--;
    if (slideIndex < 0  ) {slideIndex = mySlides.length -1;}
    mySlides[slideIndex].style.display = "flex";
    mySlides[slideIndex].style.left = 0;
}


var slideIndex = 0;
showSlides();
function showSlides(){
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++){ slides[i].style.display = "none";}
    console.log(slides[i]);
    slideIndex++;
    if(slideIndex > slides.length - 1) {slideIndex = 0;}
    slides[slideIndex].style.display = "flex";
    setTimeout(showSlides, 3000);
}

var slideIndex = 0;
showSlides();
function showSlides(){
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++){ slides[i].style.marginLeft > "800px";}
    console.log(slides[i]);
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 0;}
    //slides[slideIndex].style.display = "flex";
    slides[slideIndex].style.marginLeft  = 0;
    setTimeout(showSlides, 3000);
}



 var mySlides = [...document.getElementsByClassName ("mySlides")];
  mySlides.sort(function(a, b){
      return a.offsetLeft - b.offsetLeft}
   );
  
console.log(mySlides);
 function sliderLeft () {
     for(var i = 0; i < mySlides.length; i++) {
         if(mySlides[i].offsetLeft < -800) {
             mySlides[i].style.left = "800px";
             console.log(mySlides[i].style.left);
             mySlides[i].style.zIndex = 0;
         } else {
         
         mySlides[i].style.left = mySlides[i].offsetLeft -800 + "px";
         mySlides[i].style.zIndex = 1;
         
         }
     }
 }
document.getElementById ("slider-left").onclick = sliderLeft; 

//================================SLIDER w3schools=====================================================

var userInput = document.getElementsByClassName ("userInput");
for(var i = 0; i < userInput.length; i++){
userInput[i].addEventListener("focus", function(){
    this.parentElement.classList.add ("focus");
});
    userInput[i].addEventListener ("blur", function(){
        if(this.value == ""){
            this.parentElement.classList.remove ("focus");
        }
    });
}
 
  
 
 
   function validateForm (){
    
    //var valid = true;
    //return;
    //valid = "false";
    //if (valid === false) {return;}
    
      for(var i = 0; i < inputs.length; i++) {
              if (!inputs[i].value) {errors[i].style.display = "block";}  
    }
    //window.location = 'google.com';
}
 
*/

//===========================================SLIDER=========================================
document.getElementById("slider-left").onclick = sliderLeft;
var left = 0;

function sliderLeft() {
  var polosa = document.getElementById("polosa");
  left = left - 800;

  if (left < -1600) {
    left = 0;
  }

  polosa.style.left = left + "px";
}

//========================================FORM============================================================
var inputs = document.getElementsByClassName("userInput");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("focus", function() {
    this.parentElement.classList.add("focus");
  });
  inputs[i].addEventListener("blur", function() {
    if (this.value == "") {
      this.parentElement.classList.remove("focus");
    }
  });
}

var errors = document.querySelectorAll(".inputBox p");
console.log(errors);

function validateInput0() {
  if (!inputs[0].value) {
    errors[0].style.display = "block";
  } else {
    errors[0].style.display = "none";
  }
}

function validateInput1() {
  if (!inputs[1].value) {
    errors[1].style.display = "block";
  } else {
    errors[1].style.display = "none";
  }
}
function validateInput4() {
  if (!inputs[4].value) {
    errors[3].style.display = "block";
  } else {
    errors[3].style.display = "none";
  }
}
inputs[0].addEventListener("keyup", validateInput0);
inputs[1].addEventListener("keyup", validateInput1);
inputs[4].addEventListener("keyup", validateInput4);

function validateInput2() {
  var valid = true;
  var myEmail = inputs[2].value;
  var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  console.log(re.test(myEmail));
  if (myEmail == "") {
    errors[2].style.display = "block";
    errors[2].innerHTML = "Please provide your e-mail";
  }

  if (re.test(myEmail) == false && myEmail != "") {
    errors[2].style.display = "block";
    errors[2].innerHTML = "Wrong e-mail";
  }
  if (re.test(myEmail) == true) {
    errors[2].style.display = "none";
  }
}
inputs[2].addEventListener("keyup", validateInput2);

/*
function validateEmptyInput (inputSelector, errorSelector) {
    if(!inputSelector.value) {
        errorSelector.style.display = "block";
    }
    return;
}

validateEmptyInput('#firstName', '#firstNameError');
validateEmptyInput('email', 'emailError');
*/
function validateForm() {
  for (var i = 0; i < errors.length; i++) {
    if (!inputs[0].value) {
      errors[0].style.display = "block";
    }
    if (!inputs[1].value) {
      errors[1].style.display = "block";
    }
    if (!inputs[2].value) {
      errors[2].style.display = "block";
    }
    if (!inputs[4].value) {
      errors[3].style.display = "block";
    }
    if (
      !inputs[0].value ||
      !inputs[1].value ||
      !inputs[2].value ||
      !inputs[4].value
    ) {
      return;
    }
  }
  var myEmail = inputs[2].value;
  var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  console.log(re.test(myEmail));

  if (re.test(myEmail) == false && myEmail != "") {
    errors[2].style.display = "block";
    errors[2].innerHTML = "Wrong e-mail";
    return;
  }

  window.location = "google.com";
}
