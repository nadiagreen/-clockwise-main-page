    
var y = 0;
var x1 = 0;
var angle = 0;

var blockLeft = document.querySelector('.block-left');
var blockRight = document.querySelector('.block-right');

var anime = document.querySelector('.anime ');
var container = document.querySelector('.container');
var body = document.querySelector('body');
body.onmousewheel = function(event){
   if(event.deltaY > 0 && y + 10 < 100) {
            y += 10;
            x1 += 10;
           angle += 2;    
       
   } else if (event.deltaY < 0 && y - 10 > -10){
        y -= 10;
        x1 -= 10;
        angle -= 2;
   }
     anime.style.transform = 'rotate( '+angle+'deg)'; 
     anime.style.transformOrigin = 'top right';
     blockLeft.style.top  -= y + 100 + 'px';
     blockRight.style.top -= -y;
     anime.style.top += -y;    
}  
 