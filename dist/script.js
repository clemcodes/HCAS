const menu_btn = document.querySelector('.header__menu');
const navbar = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('active');
  navbar.classList.toggle('active');
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlides(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  const slides = document.getElementsByClassName('carousel__slides');
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) slideIndex = slides.length
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  for(let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"
}

setInterval(function() {
  plusSlides(1);
}, 4000)