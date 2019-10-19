

var imgs=[];
var images=document.querySelectorAll(".menu-img");
var menu = document.querySelector(".lightBox");
var close = document.getElementById("close");
var menuImg =document.querySelector(".lightBox-img");
var imgIndex = 0;
var next = document.getElementById("next");
var prev = document.getElementById("prev");

for(var i=0 ; i<images.length ; i++)
    {
        imgs.push(images[i]);
        images[i].addEventListener("click",function(e){
            
            menu.style.display="block";
            
var imgSrc = e.target.src;
            
            menuImg.style.backgroundImage = "url("+imgSrc+")";
            imgIndex = imgs.indexOf(e.target);
    
            
        })
    }
close.addEventListener("click",function(){
    menu.style.display="none";
})
document.addEventListener("keydown",function(e){
    if(e.keyCode == 27)
        {
          menu.style.display="none";  
        }
    
    
})
next.addEventListener("click",function(){
    imgIndex++;
    if(imgIndex == imgs.length){
        imgIndex = 0;
    }
   var currentIndex = imgs[imgIndex].src;
    menuImg.style.backgroundImage = "url("+currentIndex+")";
})
document.addEventListener("keydown",function(e){
    if(e.keyCode == 39)
        {
          imgIndex++;
    if(imgIndex == imgs.length){
        imgIndex = 0;
    }
   var currentIndex = imgs[imgIndex].src;
    menuImg.style.backgroundImage = "url("+currentIndex+")";
        }
    
    
})
prev.addEventListener("click",function(){
    imgIndex--;
    if(imgIndex <  0){
        imgIndex = imgs.length-1;
    }
  var  currentIndex = imgs[imgIndex].src;
    menuImg.style.backgroundImage = "url("+currentIndex+")";
})
document.addEventListener("keydown",function(e){
    if(e.keyCode == 37)
        {
           imgIndex--;
    if(imgIndex <  0){
        imgIndex = imgs.length-1;
    }
  var  currentIndex = imgs[imgIndex].src;
    menuImg.style.backgroundImage = "url("+currentIndex+")"; 
        }
    
    
})