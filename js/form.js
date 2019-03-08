 
var dwsContainer = document.querySelector('.dws-container');
var inputs = document.getElementsByClassName("userInput");
var errors = document.getElementsByClassName("error");

function visible(){
     dwsContainer.style.display = "block"; 
 }

 function invisible(){
      dwsContainer.style.display = "none";
       for (var i = 0; i < inputs.length; i++){
           inputs[i].value = "";
           errors[i].style.display = "none";
       }
  }

inputs[0].addEventListener("keyup", function(){
         if(inputs[0].value == ""){
             errors[0].style.display = "block";
         }else errors[0].style.display = "none";
     });

 inputs[1].addEventListener("keyup", function(){
         if(inputs[1].value == ""){
             errors[1].style.display = "block";
             errors[1].innerHTML = "Provide Your E-mail";
         }else {
             val();
         }
     });     
  function val() {
  var str = inputs[1].value;
  var  patt = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" ;
  var result = str.match(patt);
  if(result != str && str != "") {
       errors[1].style.display = "block";
      errors[1].innerHTML = "Wrong e-mail";   
  } else if (str == ""){
      errors[i].innerHTML = "please provide your e-mail";
  }
    else if (result == str){
        errors[1].style.display = "none";
    }
}

inputs[2].addEventListener("keyup", function(){
    if(inputs[2].value == ""){
        errors[2].style.display = "block";
    }else errors[2].style.display = "none";
});
 

