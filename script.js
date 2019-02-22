 
 var div = document.getElementsByTagName('DIV');
 function myFunction(){
     if(div[0].style.height == 0){
         var h = 0;
         var id = setInterval(frame, 10);
         function frame(){
             if (h == 100){
                 clearInterval(id);
             }else {
                 h++;
                 div[0].style.height = h + 'px';
                 console.log(div[0].style.height);
             }
         }
     
     }
     if (div[0].style.height == '100px'){
         h = 100;
         var id = setInterval(frame, 10);
         function frame() {
             if(h == 0){
                 clearInterval(id);
             } else{
                 h--;
                 div[0].style.height = h + 'px';
             }
             console.log(div[0].style.height);
             return div[0].style.height.value;
         }
                 
     }
         
 }
 myFunction;