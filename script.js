 
 var open = document.getElementById('open');
open.style.height = '0px';
console.log(open.style.height);
 function myFunction(){
     if(open.style.height == "0px"){
         var h = 0;
         var id = setInterval(frame, 10);
         function frame(){
             if (h == 100){
                 clearInterval(id);
             }else {
                 h++;
                 open.style.height = h + 'px';
             }
     console.log(open.style.height);
         }
     } else if(open.style.height == "100px"){
         console.log(open.style.height);
         h = 100;
         var id = setInterval(frame, 10);
         function frame() {
             if(h == 0){
                 clearInterval(id);
             } else{
                 h--;
                 open.style.height = h + 'px';
             }
         
         console.log(open.style.height);
         }
     }    
 }
  