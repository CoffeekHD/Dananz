const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('_active');
    menuBtn.classList.toggle('_active');
});