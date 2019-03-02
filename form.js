 var dwsContainer = document.querySelector('.dws-container');
var userInputs = document.querySelectorAll('.userInput');
var labelTexts = document.querySelectorAll('.labelText');

for (var i = 0; i < userInputs.length; i++){
userInputs[i].onclick = function(event){
    var x = this.parentElement.firstElementChild;
    x.style.top = "-20px";
    x.style.color = "cyan";
    x.style.fontSize = "12px";
}
}

//var zapyataya =  document.getElementById('zapyataya');
 
function toTop (){
    var t = -550;
    var id = setInterval(frame, 1);
    function frame(){
    if(t == 0){
        clearInterval(id);
    } else {
        t += 10;
        dwsContainer.style.bottom = t + 'px';   
    }
    }
}
function toBottom (){
    var t = 0;
    var id = setInterval(frame, 1);
    function frame(){
    if(t == -550){
        clearInterval(id);
    } else {
        t -= 10;
        dwsContainer.style.bottom = t + 'px';   
    }
        for(var i = 0; i < labelTexts.length; i++){
                labelTexts[i].style.top = "20px";
                labelTexts[i].style.color = "#a5a5a5";
                labelTexts[i].style.fontSize = "18px";
                userInputs[i].value = ""; 
        }
    }
}
