console.log('loading....');
window.addEventListener('load', function() {
    init();
});
var menu, cardContainer,snowInterval ,snowCounter=0;

function init(){
    menu = document.querySelector('#menu-btn');
    cardContainer = document.querySelector('#card-container');

    menu.addEventListener('click', showCards);
}

function showCards(){
    cardContainer.classList.add('show');
    
    snowInterval =  setInterval(function() {
        createSnow();
    }, 1000);
}

function createSnow(){
   if(snowCounter < 30){
    var div = document.createElement('span');
    div.setAttribute('class', 'snowball');
    random = Math.floor(Math.random() * 100);
    div.style.left = random+'vw';
    document.body.appendChild(div);
    
    snowCounter++;
   }else{
       clearInterval(snowInterval);
   }
}