 
 let y = 0;
let x1 = 0;
let angle = 0;
let blockLeft = document.querySelector('.block-left');
let blockRight = document.querySelector('.block-right');
let anime = document.querySelector('.anime');
document.querySelector('.container').onmousewheel = function(event){
   if(event.deltaY > 0 && y + 10 < 100) {
            y += 10;
            x1 += 10;
           angle += 2;    
       
   } if (event.deltaY < 0 && y - 10 > -10){
        y -= 10;
        x1 -= 10;
        angle -= 2;
   }
     anime.style.transform = 'rotate( '+angle+'deg)'; 
     anime.style.transformOrigin = 'top right';
     blockLeft.style.top = - y +'px';
     blockRight.style.top = - y +'px';
}
