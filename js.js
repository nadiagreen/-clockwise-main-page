  let y1 = 0;
let x1 = 0;
let left = document.querySelector('.block-left');
let right = document.querySelector('.block-right');
let anime = document.querySelector('.anime');

document.querySelector('.container').onmousewheel = function(event){
   if(event.deltaY > 0) {
       y1 = y1 + 10;
       x1 = x1 + 2;
   } else {
        y1 = y1 - 10;
        x1 = x1 - 2;
   }
    left.style.top = - y1 +'px';
    right.style.top = - y1 +'px';
    anime.style.right = x1 + 'px';
      
}
                           
  

 