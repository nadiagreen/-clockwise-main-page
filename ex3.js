 var open = document.getElementById("open");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var drop = document.getElementById("drop");

function myFunction (){
    if(div2.style.width == "25px"){
    var pos1 = 5;
    var angle1 = 0;
    var id1 = setInterval(frame1, 100);
    function frame1(){
    if(pos1 == 10 || angle1 == 45) {
        clearInterval(id1);
    }else {
        pos1++;
        angle1 +=9;
        div1.style.top = pos1 + "px";
        div1.style.transform = 'rotate( '+angle1+'deg)';
         }
    }
    var pos3 = 15;
    var angle3 = 0;
    var id3 = setInterval(frame3, 100);
    function frame3(){
    if(pos3 == 10 || angle3 == -45) {
        clearInterval(id3);
    }else {
        pos3--;
        angle3 -=9;
        div3.style.top = pos3 + "px";
        div3.style.transform = 'rotate( '+angle3+'deg)';
         }
    }
    var width2 = 25;
    var id2 = setInterval(frame2, 100);
    function frame2 (){
        if(width2 == 0){
            clearInterval(id2);
        } else{
            width2 -= 5;
            div2.style.width = width2 + "px";
        }
    }
   
 var height4 = 0;
    var id4 = setInterval(frame4, 10);
    function frame4 (){
        if(height4 == 450){
            clearInterval(id4);
        } else{
            height4 += 9;
            drop.style.height = height4 + "px";
        }
    }
}else {
    var pos1 = 10;
    var angle1 = 45;
    var id1 = setInterval(frame1, 100);
    function frame1(){
    if(pos1 == 5 || angle1 == 0) {
        clearInterval(id1);
    }else {
        pos1--;
        angle1 -= 9;
        div1.style.top = pos1 + "px";
        div1.style.transform = 'rotate( '+angle1+'deg)';
         }
    }
    var pos3 = 10;
    var angle3 = -45;
    var id3 = setInterval(frame3, 100);
    function frame3(){
    if(pos3 == 15 || angle3 == 0) {
        clearInterval(id3);
    }else {
        pos3++;
        angle3 +=9;
        div3.style.top = pos3 + "px";
        div3.style.transform = 'rotate( '+angle3+'deg)';
         }
    }
    var width2 = 0;
    var id2 = setInterval(frame2, 100);
    function frame2 (){
        if(width2 == 25){
            clearInterval(id2);
        } else{
            width2 += 5;
            div2.style.width = width2 + "px";
        }
    }
   
 var height4 = 450;
    var id4 = setInterval(frame4, 10);
    function frame4 (){
        if(height4 == 0){
            clearInterval(id4);
        } else{
            height4 -= 9;
            drop.style.height = height4 + "px";
        }
    }
}
} 
 
                                 
  

 