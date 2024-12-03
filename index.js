var navdots = document.getElementById("navdots");
var navoptions = document.getElementById("navoptions");
var navlogo = document.getElementById("navlogo");
var overlay = document.querySelector(".overlay");
const mypart  = document.querySelectorAll('.part1 img');
const mydots = document.querySelectorAll(".dots div");

navdots.onclick = function(){
    navoptions.classList.toggle("flex-display");
    navdots.classList.toggle("flex-displays");
    overlay.classList.toggle("flex-display");
}
 
let currentIndex = 0;

setInterval(function(){
    mypart[currentIndex].classList.remove('active');
    mydots[currentIndex].classList.remove('dark');
 
    currentIndex = (currentIndex + 1) %  mypart.length;

    mypart[currentIndex].classList.add('active');
    mydots[currentIndex].classList.add('dark');
    
}, 5000);

