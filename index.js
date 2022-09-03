// function myFun(){
//     var menu = document.querySelector('.menu-bar');
//     menu.style.display = "inline-flex";
//     var menu = document.querySelector('#menu');
//     menu.style.display = "none";
//     var menu = document.querySelector('#menuClear');
//     menu.style.display = "flex";

// };
// menu.addEventListener('click',myFun);

images = {
    model:"./images/adire model10.jpg"
}

function myFunc1(){
    var menu = document.querySelector('.header');
    menu.style.display = "flex";
    var menu = document.querySelector('.logo');
    menu.style.display = "none";
    var menu = document.querySelector('.hoverM');
    menu.style.display = "block";
    var menu = document.querySelector('#btn');
    menu.style.display = "block";
};
menu.addEventListener('click',myFunc1);

function myfunc() {
    var menu = document.querySelector('.header');
    menu.style.display = 'none';
    var menu = document.querySelector('.logo');
    menu.style.display = "flex";
}

var img = document.getElementById('#mod');
img.src = images[model];


