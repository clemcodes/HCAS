const menu_btn = document.querySelector('.header__menu');
const navbar = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('active');
  navbar.classList.toggle('active');
})