
// Menu
$(document).ready(function(){
  $('.header__menu').on('click', function(){
    $('.header__menu').toggleClass('active');
    $('.mobile-nav').toggleClass('active');
  })
});


// Carousel
$(document).ready(function(){

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  $('.next').on('click', function() {
    plusSlides(1);
  })
  $('.prev').on('click', function() {
    plusSlides(-1);
  })

  function showSlides (n) {
    const slides = $('.carousel__slides');

    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;

    slides.css('display','none');
    slides.eq(slideIndex - 1).css('display','block');
  }

  setInterval(function() {
    plusSlides(1);
  }, 4000);

});