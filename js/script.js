const hamburger = document.querySelector('#menu-btn');
const overlay = document.querySelector('#overlay');
const mobileMenu = document.querySelector('#mobile-menu')
hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    mobileMenu.classList.toggle('hide-menu');
})
