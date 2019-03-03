 
var dwsContainer = document.querySelector('.dws-container');
var inputs = document.getElementsByClassName("userInput");
var errors = document.getElementsByClassName("error");
inputs[0].addEventListener("blur",function(){
    if(inputs[0].value == "") {
        errors[0].style.display = "block";
        errors[0].style.zIndex = "1";
    }else{errors[0].style.display = "none";}
 });
 
inputs[1].addEventListener("blur", function(){
    if(inputs[1].value == "") {
        errors[1].style.display = "block";
        errors[1].style.zIndex = "1";
    }else{errors[1].style.display = "none";}
 });
inputs[2].addEventListener("click", function(){
    if(inputs[2].value == "") {
        errors[2].style.display = "block";
        errors[2].style.zIndex = "1";
    }else {errors[2].style.display = "none";}
 });
 function visible(){
     dwsContainer.style.display = "block"; 
 }
   function invisible(){
      dwsContainer.style.display = "none";
       for (var i = 0; i < inputs.length; i++){
           inputs[i].value = "";
           errors[i].style.display = "none";
       }
  };  
 