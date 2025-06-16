console.log('main.js');
// Burger menu
const burger = document.querySelector('.js-burger');
const mobileMenu = document.querySelector('.js-mobile-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})