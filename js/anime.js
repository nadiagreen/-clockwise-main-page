    
var y = 0;
var blockLeft = document.querySelector('.block-left');
var blockRight = document.querySelector('.block-right');
var container = document.querySelector('.container');
var sqr = document.getElementById('sqr');
var truck = document.getElementById('truck');
var telephone = document.getElementById('telephone');
var bag = document.getElementById('bag');
var baloon = document.getElementById('baloon');
var ball = document.getElementById('ball');
var satellite = document.getElementById('satellite');
var body = document.querySelector('body'); 
var aTruck = 50;
var aTelephone = 36;
var aBag = 26;
var aBaloon = 14;
var aBall = 3;
var aSatellite = - 4;
//sqr.style.top = '585px';
//sqr.style.right = '115px';
body.onmousewheel = function(event){
   if(event.deltaY > 0  && aTruck - 1 > 0) {
       console.log(event.deltaY);
            //y ++;
              
    aTruck--;
    cosTruck = Math.cos(3.14 + 3.14 / 100 * aTruck);  
    sinTruck  = Math.sin(3.14 + 3.14 / 100 * aTruck);
    truck.style.top =  - 425 * (1 + sinTruck) + 'px';
    truck.style.right =  - 425 * cosTruck + 'px';
     
    aTelephone--;
    cosTelephone = Math.cos(3.14 + 3.14 / 100 * aTelephone);  
    sinTelephone  = Math.sin(3.14 + 3.14 / 100 * aTelephone);
    telephone.style.top = 41 - 425 * (1 + sinTelephone) + 'px';
    telephone.style.right = -182  - 425 * cosTelephone + 'px';
    
    aBag--;
    cosBag = Math.cos(3.14 + 3.14 / 100 * aBag);  
    sinBag  = Math.sin(3.14 + 3.14 / 100 * aBag);
    bag.style.top = 116 - 425 * (1 + sinBag) + 'px';
    bag.style.right = - 292 - 425 * cosBag + 'px';
     
    aBaloon--;
    cosBaloon = Math.cos(3.14 + 3.14 / 100 * aBaloon);  
    sinBaloon  = Math.sin(3.14 + 3.14 / 100 * aBaloon);
    baloon.style.top = 245 - 425 * (1 + sinBaloon) + 'px';
    baloon.style.right = -385 - 425 * cosBaloon + 'px';
     
    aBall--;
    cosBall = Math.cos(3.14 + 3.14 / 100 * aBall);  
    sinBall  = Math.sin(3.14 + 3.14 / 100 * aBall);
    ball.style.top = 386 - 425 * (1 + sinBall) + 'px';
    ball.style.right = - 423  - 425 * cosBall + 'px';
     
    aSatellite--;
    cosSatellite = Math.cos(3.14 + 3.14 / 100 * aSatellite);  
    sinSatellite  = Math.sin(3.14 + 3.14 / 100 * aSatellite);
    satellite.style.top = 479 - 425 * (1 + sinSatellite) + 'px';
    satellite.style.right = -422 - 425 * cosSatellite + 'px';
      
 
    console.log (truck.style.top);
    console.log (truck.style.right);
    console.log (aTruck);          
       
   } else if (event.deltaY < 0  && aTruck + 1 < 55){
       console.log(event.deltaY);
       //y --;
                aTruck++;
         console.log(aTruck);
         
        cosTruck = Math.cos(3.14 + 3.14 / 100 * aTruck);  
        sinTruck  = Math.sin(3.14 + 3.14 / 100 * aTruck);
        truck.style.top =  - 425 * (1 + sinTruck) + 'px';
        truck.style.right =  - 425 * cosTruck + 'px';
         
             
    aTelephone++;
    cosTelephone = Math.cos(3.14 + 3.14 / 100 * aTelephone);  
    sinTelephone  = Math.sin(3.14 + 3.14 / 100 * aTelephone);
    telephone.style.top = 41 - 425 * (1 + sinTelephone) + 'px';
    telephone.style.right = -182  - 425 * cosTelephone + 'px';
    
    aBag++;
    cosBag = Math.cos(3.14 + 3.14 / 100 * aBag);  
    sinBag  = Math.sin(3.14 + 3.14 / 100 * aBag);
    bag.style.top = 116 - 425 * (1 + sinBag) + 'px';
    bag.style.right = - 292 - 425 * cosBag + 'px';
     
    aBaloon++;
    cosBaloon = Math.cos(3.14 + 3.14 / 100 * aBaloon);  
    sinBaloon  = Math.sin(3.14 + 3.14 / 100 * aBaloon);
    baloon.style.top = 245 - 425 * (1 + sinBaloon) + 'px';
    baloon.style.right = -385 - 425 * cosBaloon + 'px';
     
    aBall++;
    cosBall = Math.cos(3.14 + 3.14 / 100 * aBall);  
    sinBall  = Math.sin(3.14 + 3.14 / 100 * aBall);
    ball.style.top = 386 - 425 * (1 + sinBall) + 'px';
    ball.style.right = - 423  - 425 * cosBall + 'px';
     
    aSatellite++;
    cosSatellite = Math.cos(3.14 + 3.14 / 100 * aSatellite);  
    sinSatellite  = Math.sin(3.14 + 3.14 / 100 * aSatellite);
    satellite.style.top = 479 - 425 * (1 + sinSatellite) + 'px';
    satellite.style.right = -422 - 425 * cosSatellite + 'px';
      
    //sqr.style.top = 585  - 425 * (1 + sinTruck) + 'px';
    //sqr.style.right = 115  - 425 * cosTruck + 'px'; 
   }
    
    //blockLeft.style.top  -= y + 100 + 'px';
    // blockRight.style.top -= - y +  'px';    
}  
 